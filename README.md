# Tesseract OCR Application

This project is a web-based application using Tesseract OCR for text extraction and bounding box retrieval from images. It offers two main APIs:
`/get-text`: Extracts the full text from an image.
`/get-bboxes`: Extracts bounding boxes of specified types (word, line, paragraph, block, or page) from an image.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Mind-Twister-Wizard/tesseract-ocr-app.git
   cd tesseract-ocr-app

2. Install dependencies:
   ```
   npm init -y
   npm install express tesseract.js multer

3. Start the server:
   ```
   node server.js

## Usage:
 
  1) Open index.html in a browser to upload an image and test the OCR APIs.
  2) Choose an image and click on either "Get Text" or "Get Bounding Boxes" to see the extracted text or bounding box details.

## API Endpoints:
  
  1) POST /get-text: Upload an image to extract text.
  2) POST /get-bboxes: Upload an image to get bounding boxes based on type (word, line, paragraph, block, or page).

## Example Output

Sample JSON output of bounding boxes:

```
  {
    "bboxes": [
        {
            "text": "Sample",
            "box": {
                "x0": 10,
                "y0": 10,
                "x1": 50,
                "y1": 20
            }
        },
        ...
    ]
}

```
## License
This project is open-source under the MIT License.

# KELOMPOK1-OCR
