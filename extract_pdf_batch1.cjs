const fs = require('fs');
const pdf = require('pdf-parse');

const sqpPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Acc-SQPs\\SQPs\\Accountancy-SQP-2024-25.pdf';
const msPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Acc-SQPs\\SQPs\\Accountancy-MS-2024-25.pdf';

async function extractText() {
    try {
        if (fs.existsSync(sqpPath)) {
            const dataBuffer = fs.readFileSync(sqpPath);
            const data = await pdf(dataBuffer);
            console.log("--- SQP TEXT ---");
            console.log(data.text.substring(0, 5000)); // First 5000 chars roughly Q1-10
        } else {
            console.log("SQP File not found at:", sqpPath);
        }

        if (fs.existsSync(msPath)) {
            const msDataBuffer = fs.readFileSync(msPath);
            const msData = await pdf(msDataBuffer);
            console.log("\n--- MS TEXT ---");
            console.log(msData.text.substring(0, 5000)); // First 5000 chars
        } else {
            console.log("MS File not found at:", msPath);
        }
    } catch (error) {
        console.error("Error extracting PDF:", error);
    }
}

extractText();
