document.getElementById('getTextBtn').addEventListener('click', () => {
    uploadImage('/get-text');
});

document.getElementById('getBBoxesBtn').addEventListener('click', () => {
    uploadImage('/get-bboxes', { type: 'word' });
});

function uploadImage(endpoint, additionalData = {}) {
    const fileInput = document.getElementById('image');
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    // Append additional data if any
    for (const key in additionalData) {
        formData.append(key, additionalData[key]);
    }

    fetch(endpoint, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // Clean up text and display it in the output
        const cleanedText = cleanText(data.text);
        document.getElementById('output').textContent = cleanedText;
    })
    .catch(error => console.error('Error:', error));
}

function cleanText(text) {
    // Replace \n with a single space to join text in one line
    return text.replace(/\n+/g, ' ').trim();  // Replace multiple newlines with a single space
}

