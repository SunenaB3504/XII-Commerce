const fs = require('fs');
const pdf = require('pdf-parse');

const sqpPath = process.argv[2] || 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\BS-SQPs\\BusinessStudies-SQP-2023-24.pdf';
const msPath = process.argv[3] || 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\BS-SQPs\\BusinessStudies-MS-2023-24.pdf';

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
