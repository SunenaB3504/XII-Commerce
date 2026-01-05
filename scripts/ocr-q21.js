
import { createWorker } from 'tesseract.js';
import path from 'path';

const images = [
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p6_1767586556693.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p7_1767586571463.png'
];

(async () => {
    const worker = await createWorker('eng');

    for (const img of images) {
        console.log(`\n--- Text from ${path.basename(img)} ---`);
        const { data: { text } } = await worker.recognize(img);
        console.log(text);
    }

    await worker.terminate();
})();
