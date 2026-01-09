const fs = require('fs');
const pdf = require('pdf-parse');

const sqpPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Acc-SQPs\\SQPs\\Accountancy-SQP-2023-24.pdf';
const msPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Acc-SQPs\\SQPs\\Accountancy-MS-2023-24.pdf';

async function extractText() {
    try {
        let output = "";
        if (fs.existsSync(sqpPath)) {
            const dataBuffer = fs.readFileSync(sqpPath);
            const data = await pdf(dataBuffer);
            output += "--- SQP TEXT ---\n";
            output += data.text + "\n";
        } else {
            console.error("SQP file not found at " + sqpPath);
        }

        if (fs.existsSync(msPath)) {
            const msDataBuffer = fs.readFileSync(msPath);
            const msData = await pdf(msDataBuffer);
            output += "\n--- MS TEXT ---\n";
            output += msData.text + "\n";
        } else {
            console.error("MS file not found at " + msPath);
        }

        fs.writeFileSync('extracted_pdf_2024.txt', output);
        console.log("Extraction complete. Check extracted_pdf_2024.txt");
    } catch (error) {
        console.error("Error extracting PDF:", error);
    }
}

extractText();
