const fs = require('fs');
const pdf = require('pdf-parse');

const sqpPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Acc-SQPs\\SQPs\\Accountancy-SQP-2024-25.pdf';
const msPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Acc-SQPs\\SQPs\\Accountancy-MS-2024-25.pdf';

async function extractText() {
    try {
        let output = "";
        if (fs.existsSync(sqpPath)) {
            const dataBuffer = fs.readFileSync(sqpPath);
            const data = await pdf(dataBuffer);
            output += "--- SQP TEXT ---\n";
            output += data.text + "\n";
        }

        if (fs.existsSync(msPath)) {
            const msDataBuffer = fs.readFileSync(msPath);
            const msData = await pdf(msDataBuffer);
            output += "\n--- MS TEXT ---\n";
            output += msData.text + "\n";
        }

        fs.writeFileSync('extracted_pdf_content.txt', output);
        console.log("Extraction complete. Check extracted_pdf_content.txt");
    } catch (error) {
        console.error("Error extracting PDF:", error);
    }
}

extractText();
