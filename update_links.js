const fs = require('fs');
const path = require('path');

const services = [
    // Residential
    { id: "house-cleaning", title: "House Cleaning" },
    { id: "deep-cleaning", title: "Deep Cleaning" },
    { id: "move-in-cleaning", title: "Move-In Cleaning" },
    { id: "move-out-cleaning", title: "Move-Out Cleaning" },
    { id: "carpet-cleaning", title: "Carpet Cleaning" },
    { id: "window-cleaning", title: "Window Cleaning" },
    { id: "pressure-washing", title: "Pressure Washing" },
    { id: "luxury-estate-cleaning", title: "Luxury Estate Cleaning" },
    { id: "laundry-services", title: "Laundry Services" },
    { id: "detailing", title: "Detailing" },

    // Commercial
    { id: "commercial-cleaning", title: "Commercial Cleaning" },
    { id: "office-janitorial", title: "Office Janitorial Services" },
    { id: "janitorial-cleaning", title: "Janitorial Cleaning Services" },
    { id: "medical-facility-cleaning", title: "Medical Facility Cleaning" },
    { id: "industrial-warehouse-cleaning", title: "Industrial & Warehouse Cleaning" },
    { id: "floor-stripping-waxing", title: "Floor Stripping & Waxing" },
    { id: "gym-fitness-cleaning", title: "Gym & Fitness Center Cleaning" },
    { id: "school-daycare-cleaning", title: "School & Daycare Cleaning" },
    { id: "church-worship-cleaning", title: "Church & Worship Cleaning" },
    { id: "solar-panel-cleaning", title: "Solar Panel Cleaning" },

    // Property
    { id: "vacation-rental-cleaning", title: "Vacation Rental Cleaning" },
    { id: "airbnb-cleaning", title: "Airbnb Cleaning" },
    { id: "airbnb-rental-management", title: "Airbnb & Rental Management" },
    { id: "post-construction-cleanup", title: "Post-Construction Cleanup" },
    { id: "property-management-janitorial", title: "Property Management Janitorial" },
    { id: "property-maintenance", title: "Property Maintenance" },
    { id: "home-watch-services", title: "Home Watch Services" },
    { id: "luxury-estate-management", title: "Luxury Estate Management" },
    { id: "gutter-cleaning", title: "Gutter Cleaning" }
];

const locations = [
    { id: "old-louisville", title: "Old Louisville" },
    { id: "the-highlands", title: "The Highlands" },
    { id: "nulu", title: "NuLu" },
    { id: "butchertown", title: "Butchertown" },
    { id: "germantown", title: "Germantown" },
    { id: "crescent-hill", title: "Crescent Hill" },
    { id: "st-matthews", title: "St. Matthews" },
    { id: "middletown", title: "Middletown" },
    { id: "jeffersontown", title: "Jeffersontown" },
    { id: "fern-creek", title: "Fern Creek" },
    { id: "okolona", title: "Okolona" },
    { id: "shively", title: "Shively" },
    { id: "prospect", title: "Prospect" },
    { id: "anchorage", title: "Anchorage" },
    { id: "hurstbourne", title: "Hurstbourne" },
    { id: "lyndon", title: "Lyndon" }
];

const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// We will update exactly index.html
const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

let replaceCount = 0;

for (let s of services) {
    const titleRegexStr = escapeRegExp(s.title).replace(/ /g, '\\s*');
    const regex = new RegExp(`href="#(services|commercial|property)"([^>]*>\\s*)${titleRegexStr}\\s*</a>`, 'gi');
    html = html.replace(regex, (match, type, rest) => {
        replaceCount++;
        return `href="${s.id}.html"${rest}${s.title}</a>`;
    });
}

for (let l of locations) {
    const titleRegexStr = escapeRegExp(l.title).replace(/ /g, '\\s*');
    const regex = new RegExp(`href="#locations"([\\s\\S]*?)${titleRegexStr}\\s*</a>`, 'gi');
    html = html.replace(regex, (match, rest) => {
        replaceCount++;
        return `href="${l.id}.html"${rest}${l.title}</a>`;
    });
}

// Write back to index.html
fs.writeFileSync(indexPath, html);
console.log(`Replaced ${replaceCount} links in index.html!`);

// IMPORTANT: Now we must re-generate ALL 45 PAGES because they copied the OLD HTML headers from the original index.html!
// Instead of replacing them with regex individually, the cleanest/best way is to simply re-run generate_pages.js since it will extract the NOW PERFECT global header and footer from index.html!
