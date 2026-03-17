const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

let index = fs.readFileSync('index.html', 'utf8');
index = index.replace('<link rel="stylesheet" href="style.css">', `<style>\n${css}\n</style>`);
// Make sure we defer lucide correctly at end of body
index = index.replace('<script defer src="https://unpkg.com/lucide@latest"></script>', '');
index = index.replace('</body>', '    <script src="https://unpkg.com/lucide@latest" defer></script>\n</body>');
fs.writeFileSync('index.html', index);
console.log("index.html CSS fully inlined.");
