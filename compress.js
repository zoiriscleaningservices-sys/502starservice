const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'images', 'WhatsApp Image 2026-02-27 at 11.40.24 PM (4).jpeg');
const outputPath = path.join(__dirname, 'images', 'opt-team.webp');

sharp(inputPath)
  .resize(600)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(info => console.log('Image compressed:', info))
  .catch(err => console.error('Error compressing image:', err));
