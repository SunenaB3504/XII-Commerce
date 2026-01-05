
import { createWorker } from 'tesseract.js';
import path from 'path';

const images = [
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/economics_sqp_page_1_1767586049077.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/economics_sqp_page_2_1767586059504.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/economics_sqp_page_3_v1_1767586069617.png'
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
