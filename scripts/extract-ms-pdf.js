import fs from 'fs';
import pdf from 'pdf-parse';

// Since pdf-parse might not have default export in ES module context or behaves differently
// we'll try a standard import. If it fails, we might need createRequire.
// However, a simpler fix for this environment might be to use createRequire to keep using require
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');


const pdfPath = 'c:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Eco-SQPs\\Economics-MS-2025-26.pdf';

if (fs.existsSync(pdfPath)) {
    let dataBuffer = fs.readFileSync(pdfPath);
    pdfParse(dataBuffer).then(function (data) {
        console.log(data.text);
    }).catch(function (error) {
        console.error("Error parsing PDF:", error);
    });
} else {
    console.error("File not found:", pdfPath);
}
