const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
const files = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

let html = `
<!DOCTYPE html>
<html>
<head>
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <title>Gallery | Super Cleaning Service Louisville : House Cleaning &amp; Maid Services</title>
    <meta name="description" content="View our gallery of professional cleaning services in Louisville, KY." />
<style>
    body { font-family: sans-serif; display: flex; flex-wrap: wrap; gap: 20px; }
    .card { width: 300px; border: 1px solid #ccc; padding: 10px; }
    img { max-width: 100%; height: auto; }
</style></head>
<body>
`;

files.forEach(f => {
    html += `
    <div class="card">
        <h3>${f}</h3>
        <img src="images/${f}" alt="${f}" />
    </div>
    `;
});

html += `</body></html>`;

fs.writeFileSync('gallery.html', html);
console.log('Gallery created.');
