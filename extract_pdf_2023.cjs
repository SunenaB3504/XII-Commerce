const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

async function extractText() {
    try {
        const sqpPath = path.join(__dirname, 'SQPs/Acc-SQPs/SQPs/Accountancy-SQP-2022-23.pdf');
        const msPath = path.join(__dirname, 'SQPs/Acc-SQPs/SQPs/Accountancy-MS-2022-23.pdf');

        console.log('Reading PDFs...');

        const sqpBuffer = fs.readFileSync(sqpPath);
        const msBuffer = fs.readFileSync(msPath);

        console.log('Parsing SQP...');
        const sqpData = await pdf(sqpBuffer);

        console.log('Parsing MS...');
        const msData = await pdf(msBuffer);

        const combinedText = `
================================================================================
ACCOUNTANCY (055) - SQP 2022-23
================================================================================

${sqpData.text}

================================================================================
ACCOUNTANCY (055) - MARKING SCHEME 2022-23
================================================================================

${msData.text}
`;

        const outputPath = path.join(__dirname, 'extracted_pdf_2023.txt');
        fs.writeFileSync(outputPath, combinedText);
        console.log(`Successfully extracted text to ${outputPath}`);

    } catch (error) {
        console.error('Error extracting text:', error);
    }
}

extractText();
