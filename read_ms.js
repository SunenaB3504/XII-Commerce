
import fs from 'fs';
import pdf from 'pdf-parse';

const dataBuffer = fs.readFileSync('c:/Users/Admin/Neil/XII-Commerce/SQPs/Acc-SQPs/SQPs/Accountancy-MS - 2025-26.pdf');

pdf(dataBuffer).then(function (data) {
    // console.log(data.numpages);
    // console.log(data.info);
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
