const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Boundaries
const heroStart = html.indexOf('<!-- Hero Section -->');
const aboutStart = html.indexOf('<!-- About Section -->');
const servicesStart = html.indexOf('<!-- Services Section -->');

// Blocks
const headToNav = html.substring(0, heroStart);
const aboutBlock = html.substring(aboutStart, servicesStart);
const servicesToFooter = html.substring(servicesStart);

const aboutHero = `
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-teal-900 pt-20">
        <div id="bubbles-container" class="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
        <div class="absolute inset-0 z-0">
            <img src="images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg" alt="About Us" class="w-full h-full object-cover opacity-70 mix-blend-overlay" />
            <div class="absolute inset-0 bg-gradient-to-t from-teal-900/95 via-gray-900/60 to-gray-900/80"></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto px-4 text-center reveal pt-12">
            <!-- Logo Mark -->
            <div class="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center p-1.5 shadow-[0_0_30px_rgba(250,201,22,0.4)] mb-6 transform transition-transform hover:scale-105">
                <img src="images/logo.jpg" alt="502 Star Service Logo" class="w-full h-full object-cover rounded-full" />
            </div>

            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                About <span class="text-accent-yellow">502 Star Service</span>
            </h1>
            <p class="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                Louisville's Premier Cleaning Solution
            </p>
        </div>
    </section>`;

let finalHtml = headToNav + aboutHero + aboutBlock + servicesToFooter;

finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '<title>About Us - 502 Star Service</title>');
finalHtml = finalHtml.replace(/content="We are dedicated to providing exceptional cleaning services tailored to your specific needs.*?"/, 'content="Learn more about 502 Star Service, Louisville\\\'s most trusted residential and commercial cleaning company. 5+ years of dedicated service."');
finalHtml = finalHtml.replace(/id="about" class="py-20 bg-gray-50"/, 'id="about" class="py-24 bg-white"'); // Minor stylistic tweak for standalone page

// Fix paths since it's now in a subfolder
finalHtml = finalHtml.replace(/src="images\//g, 'src="../images/');
finalHtml = finalHtml.replace(/href="images\//g, 'href="../images/');
finalHtml = finalHtml.replace(/href="index\.html/g, 'href="../index.html');
finalHtml = finalHtml.replace(/href="([a-z0-9-]+)\/"/g, 'href="../$1/"');
// Note: index.html has href="about-us.html", which we changed to href="about-us/" via update_to_folders.js
finalHtml = finalHtml.replace(/href="#home"/g, 'href="../index.html#home"');

const dirPath = __dirname + '/about-us';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}
fs.writeFileSync(dirPath + '/index.html', finalHtml);
console.log('Successfully created about-us/index.html');
