const fs = require('fs');
let code = fs.readFileSync('generate_pages.js', 'utf8');

// Replace all .jpeg, .png, .jpg inside the 'img:' strings with .webp
code = code.replace(/\.jpeg/g, '.webp');
code = code.replace(/\.png/g, '.webp');
code = code.replace(/\.jpg/g, '.webp');

fs.writeFileSync('generate_pages.js', code);
console.log('generate_pages.js updated with .webp references');
