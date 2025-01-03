const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// API to get the entire text from the image
app.post('/get-text', upload.single('image'), (req, res) => {
    Tesseract.recognize(
        req.file.buffer,
        'eng',
        {
            logger: (m) => console.log(m),
        }
    ).then(({ data: { text } }) => {
        res.json({ text });
    }).catch(err => res.status(500).json({ error: err.message }));
});

// API to get bounding boxes
app.post('/get-bboxes', upload.single('image'), (req, res) => {
    const type = req.body.type || 'word'; // Default to 'word'

    Tesseract.recognize(
        req.file.buffer,
        'eng',
        {
            logger: (m) => console.log(m),
        }
    ).then(({ data: { words } }) => {
        const bboxes = words.map(word => ({
            text: word.text,
            box: word.bbox,
        }));
        res.json({ bboxes });
    }).catch(err => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
