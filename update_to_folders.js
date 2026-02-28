const fs = require('fs');
const path = require('path');

const services = [
    "house-cleaning", "deep-cleaning", "move-in-cleaning", "move-out-cleaning", "carpet-cleaning", "window-cleaning", "pressure-washing", "luxury-estate-cleaning", "laundry-services", "detailing",
    "commercial-cleaning", "office-janitorial", "janitorial-cleaning", "medical-facility-cleaning", "industrial-warehouse-cleaning", "floor-stripping-waxing", "gym-fitness-cleaning", "school-daycare-cleaning", "church-worship-cleaning", "solar-panel-cleaning",
    "vacation-rental-cleaning", "airbnb-cleaning", "airbnb-rental-management", "post-construction-cleanup", "property-management-janitorial", "property-maintenance", "home-watch-services", "luxury-estate-management", "gutter-cleaning"
];

const locations = [
    "old-louisville", "the-highlands", "nulu", "butchertown", "germantown", "crescent-hill", "st-matthews", "middletown", "jeffersontown", "fern-creek", "okolona", "shively", "prospect", "anchorage", "hurstbourne", "lyndon"
];

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

let replaceCount = 0;

function replaceLink(id) {
    const regex = new RegExp(`href="${id}\\.html"`, 'g');
    html = html.replace(regex, () => {
        replaceCount++;
        return `href="${id}/"`;
    });
}

// Replace all service and location links
services.forEach(replaceLink);
locations.forEach(replaceLink);

// Replace about and contact
const manualLinks = ['about-us', 'contact-us'];
manualLinks.forEach(replaceLink);

fs.writeFileSync(indexPath, html);
console.log(`Converted ${replaceCount} links to directory format in index.html!`);
