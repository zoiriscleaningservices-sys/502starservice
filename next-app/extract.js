const fs = require('fs');

const content = fs.readFileSync('../generate_pages.js', 'utf-8');

// The file has const services = [...]; const locations = [...]; etc.
// We can use a regex to extract the chunks.

function extractBlock(content, name) {
    const regex = new RegExp(`const ${name}\\s*=\\s*([\\s\\S]*?);\\n\\n|const ${name}\\s*=\\s*([\\s\\S]*?);\\n//`, 'm');
    const match = content.match(regex);
    if (!match) return `export const ${name} = null;`;
    
    let block = match[1] || match[2];
    // It's just a raw text replacement, but wait, `spintax` has functions... wait, spintax is just an object.
    return `export const ${name} = ${block};`;
}

// Let's use a simpler approach: Just read generate_pages.js, replace 'const ' with 'export const ', and slice from the top to `function buildNavLinks`
let endIdx = content.indexOf('function buildNavLinks');
let dataPart = content.substring(0, endIdx);

// Remove the fs and path requires
dataPart = dataPart.replace(/const fs = require\('fs'\);\n/, '');
dataPart = dataPart.replace(/const path = require\('path'\);\n/, '');

// Replace const with export const
dataPart = dataPart.replace(/const services =/g, 'export const services =');
dataPart = dataPart.replace(/const locations =/g, 'export const locations =');
dataPart = dataPart.replace(/const locationData =/g, 'export const locationData: Record<string, any> =');
dataPart = dataPart.replace(/const serviceData =/g, 'export const serviceData: Record<string, any> =');
dataPart = dataPart.replace(/const spintax =/g, 'export const spintax =');

// Add some types for TS
const types = `
export type Service = {
    id: string;
    title: string;
    category: string;
    img: string;
};

export type Location = {
    id: string;
    title: string;
};

export type FAQ = {
    q: string;
    a: string;
};

export type PageData = {
    desc: string;
    extra: string;
    faqs: FAQ[];
    zip?: string;
};
`;

fs.writeFileSync('src/lib/data.ts', types + '\\n' + dataPart);
console.log('Data extracted to src/lib/data.ts');
