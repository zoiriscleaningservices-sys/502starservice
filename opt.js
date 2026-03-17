const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// 1. Preconnect Google Fonts
code = code.replace(
    '    <!-- Google Fonts -->\r\n    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"\r\n        rel="stylesheet">',
    '    <!-- Google Fonts -->\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">'
);
code = code.replace(
    '    <!-- Google Fonts -->\n    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"\n        rel="stylesheet">',
    '    <!-- Google Fonts -->\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">'
);

// 2. Change logo.jpg to logo.webp
code = code.replace(/logo\.jpg/g, 'logo.webp');

fs.writeFileSync('index.html', code);
console.log('Successfully injected Google Font preconnects and webp paths into index.html');
