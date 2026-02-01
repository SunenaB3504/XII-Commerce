const fs = require('fs');
const pdf = require('pdf-parse');

const sqpPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Physical Education\\PhysicalEducation-SQPs\\PhysicalEducation-SQP-2025-26.pdf';
const msPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Physical Education\\PhysicalEducation-SQPs\\PhysicalEducation-MS-2025-26.pdf';

async function extractText() {
    try {
        let output = "";
        if (fs.existsSync(sqpPath)) {
            const dataBuffer = fs.readFileSync(sqpPath);
            const data = await pdf(dataBuffer);
            output += "--- SQP TEXT START ---\n";
            output += data.text + "\n";
            output += "--- SQP TEXT END ---\n";
        } else {
            output += "SQP File not found at: " + sqpPath + "\n";
        }

        if (fs.existsSync(msPath)) {
            const msDataBuffer = fs.readFileSync(msPath);
            const msData = await pdf(msDataBuffer);
            output += "\n--- MS TEXT START ---\n";
            output += msData.text + "\n";
            output += "--- MS TEXT END ---\n";
        } else {
            output += "MS File not found at: " + msPath + "\n";
        }

        fs.writeFileSync('pe_raw_text.txt', output);
        console.log("Text extracted to pe_raw_text.txt");

    } catch (error) {
        console.error("Error extracting PDF:", error);
    }
}

extractText();
