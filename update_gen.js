const fs = require('fs');
let code = fs.readFileSync('generate_pages.js', 'utf8');

// 1. Inject Style CSS
const css = fs.readFileSync('style.css', 'utf8');
code = code.replace(
    '    <!-- Tailwind CSS -->\r\n    <script src="https://cdn.tailwindcss.com"></script>',
    `    <!-- Tailwind CSS (Inline Local) -->\n    <style>\n${css}\n    </style>`
);
code = code.replace(
    '    <!-- Tailwind CSS -->\n    <script src="https://cdn.tailwindcss.com"></script>', // for linux endings just in case
    `    <!-- Tailwind CSS (Inline Local) -->\n    <style>\n${css}\n    </style>`
);

// 2. Remove the old brittle css regex
code = code.replace(
    `    // Extract the Global CSS block correctly spanning tailwind to style end\r\n    const cssMatch = indexHtml.match(/<script>\\s*tailwind\\.config[\\s\\S]*?<\\/style>/);\r\n    let globalCss = cssMatch ? cssMatch[0] : '';`,
    `    // Verify style.css exists before generation\n    if (!fs.existsSync(require("path").join(__dirname, 'style.css'))) {\n        console.error("Critical: style.css not found! Aborting generation.");\n        return;\n    }`
);
code = code.replace(
    `    // Extract the Global CSS block correctly spanning tailwind to style end\n    const cssMatch = indexHtml.match(/<script>\\s*tailwind\\.config[\\s\\S]*?<\\/style>/);\n    let globalCss = cssMatch ? cssMatch[0] : '';`,
    `    // Verify style.css exists before generation\n    if (!fs.existsSync(require("path").join(__dirname, 'style.css'))) {\n        console.error("Critical: style.css not found! Aborting generation.");\n        return;\n    }`
);

// 3. Remove the broken globalCss references from the loop
code = code.replace(/        html = html\.replace\('<!-- _GLOBAL_HEAD_CSS_ -->', globalCss\);\n/g, '');
code = code.replace(/        html = html\.replace\('<!-- _GLOBAL_HEAD_CSS_ -->', globalCss\);\r\n/g, '');

fs.writeFileSync('generate_pages.js', code);
console.log('Successfully updated generate_pages.js');
