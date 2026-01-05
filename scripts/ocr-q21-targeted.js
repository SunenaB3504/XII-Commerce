
import { createWorker } from 'tesseract.js';
import path from 'path';

const img = 'C:/Users/Admin/.gemini/antigravity/brain/fdffac63-e426-4b32-a048-d32067fc9d1e/q21_search_3_1767587535901.png';

(async () => {
    const worker = await createWorker('eng');
    console.log(`\n--- Text from ${path.basename(img)} ---`);
    const { data: { text } } = await worker.recognize(img);
    console.log(text);
    await worker.terminate();
})();
