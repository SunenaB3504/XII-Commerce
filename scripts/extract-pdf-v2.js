
import fs from 'fs';
import pdf from 'pdf-parse';

const pdfPath = 'C:\\Users\\Admin\\Neil\\XII-Commerce\\SQPs\\Eco-SQPs\\Economics-SQP-2025-56.pdf';

try {
    if (fs.existsSync(pdfPath)) {
        console.log("File exists!");
        const dataBuffer = fs.readFileSync(pdfPath);
        pdf(dataBuffer).then(function (data) {
            console.log(data.text);
        }).catch(function (e) {
            console.error("PDF Parse Error:", e);
        });
    } else {
        console.log("File does NOT exist at: " + pdfPath);
    }
} catch (e) {
    console.log("Error: " + e.message);
}
