const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace the CDN link with the inline styles
indexHtml = indexHtml.replace('<script src="https://cdn.tailwindcss.com"></script>', `<style>\n${css}\n</style>`);

fs.writeFileSync('index.html', indexHtml);
console.log('Successfully inlined CSS into index.html');
