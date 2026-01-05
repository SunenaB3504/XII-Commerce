
import fs from 'fs';
import path from 'path';
import pdf from 'pdf-parse';

const filePath = path.join(process.cwd(), 'SQPs', 'Eco-SQPs', 'Economics-SQP-2025-56.pdf');
console.log("Attempting to read file at:", filePath);

try {
  const dataBuffer = fs.readFileSync(filePath);
  pdf(dataBuffer).then(function (data) {
    console.log("PDF Text Content:");
    console.log(data.text);
  }).catch(function (error) {
    console.error("Error parsing PDF:", error);
  });
} catch (err) {
  console.error("Error reading file:", err.message);
}
