
const fs = require('fs');
const pdf = require('pdf-parse');

console.log('CWD:', process.cwd());
const pdfPath = 'SQPs/Acc-SQPs/SQPs/Accountancy-SQP-2023-24.pdf';

if (!fs.existsSync(pdfPath)) {
    console.error('File not found:', pdfPath);
    process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('pdf_dump.txt', data.text);
    console.log("Written pdf_dump.txt");

    // Also check for the MS file
    const msPath = 'SQPs/Acc-SQPs/SQPs/Accountancy-MS-2023-24.pdf';
    if (fs.existsSync(msPath)) {
        const msBuffer = fs.readFileSync(msPath);
        pdf(msBuffer).then(msData => {
            fs.writeFileSync('ms_dump.txt', msData.text);
            console.log("Written ms_dump.txt");
        });
    }

}).catch(err => {
    console.error('Error parsing PDF:', err);
});
