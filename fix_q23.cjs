const fs = require('fs');
const path = 'data/accountancy/sample-paper-2024-q21-25.ts';

try {
    let content = fs.readFileSync(path, 'utf8');
    const original = content;
    // Regex to match the parenthetical note and the 2,00,000 typo
    // Pattern: 2,00,000 shares (Wait ... Okay.)
    const pattern = /2,00,000 shares \(Wait.*?Okay\.\)/s; // s flag for dot matches newline if needed, though likely single line

    if (pattern.test(content)) {
        content = content.replace(pattern, '2,000 shares');
        fs.writeFileSync(path, content, 'utf8');
        console.log('Successfully replaced text.');
    } else {
        console.log('Pattern not found.');
    }
} catch (e) {
    console.error(e);
}
