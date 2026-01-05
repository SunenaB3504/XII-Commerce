
import { createWorker } from 'tesseract.js';
import path from 'path';

// Ordered list of images to reconstruct the document text
const images = [
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p6_1767586556693.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p7_1767586571463.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p8_1767586591983.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p9_1767586608312.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p10_1767586627326.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p11_1767586645685.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p12_1767586663762.png'
];

(async () => {
    const worker = await createWorker('eng');

    for (const img of images) {
        console.log(`\n\n=== START PAGE: ${path.basename(img)} ===\n`);
        const { data: { text } } = await worker.recognize(img);
        console.log(text);
        console.log(`\n=== END PAGE: ${path.basename(img)} ===\n`);
    }

    await worker.terminate();
})();
