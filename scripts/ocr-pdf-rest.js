
import { createWorker } from 'tesseract.js';
import path from 'path';

const images = [
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p4_1767586531176.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p5_1767586543441.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p6_1767586556693.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p7_1767586571463.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p8_1767586591983.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p9_1767586608312.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p10_1767586627326.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p11_1767586645685.png',
    'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/eco_sqp_p12_1767586663762.png',
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
