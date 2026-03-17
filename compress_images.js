const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, 'images');

async function processImages() {
    const files = fs.readdirSync(imgDir);
    for (const file of files) {
        if (file.match(/\.(jpeg|jpg|png)$/i)) {
            const inputPath = path.join(imgDir, file);
            let parsed = path.parse(file);
            const outputPath = path.join(imgDir, parsed.name + '.webp');

            try {
                // Resize to max 1000px width, convert to webp with 80% quality
                await sharp(inputPath)
                    .resize({ width: 800, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`Converted: ${file} -> ${parsed.name}.webp`);
                
                // Optionally delete original to keep repo clean, but let's keep it safe for now 
                // fs.unlinkSync(inputPath);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
    console.log("Finished compressing all images to WEBP!");
}

processImages();
