const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const sqpPath = process.argv[2] || path.join(__dirname, 'SQPs/BS-SQPs/BusinessStudies-SQP-2022-23.pdf');
const msPdfPath = process.argv[3] || path.join(__dirname, 'SQPs/BS-SQPs/BusinessStudies-MS-2022-23.pdf');

async function extractText() {
    try {
        let output = "";
        if (fs.existsSync(sqpPath)) {
            const dataBuffer = fs.readFileSync(sqpPath);
            const data = await pdf(dataBuffer);
            output += "--- SQP TEXT ---\n";
            output += data.text + "\n";
        }

        if (fs.existsSync(msPdfPath)) {
            const msDataBuffer = fs.readFileSync(msPdfPath);
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
