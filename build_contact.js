const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const heroStart = html.indexOf('<!-- Hero Section -->');
const quoteStart = html.indexOf('<!-- Quote/Contact Section -->');
const contactStart = html.indexOf('<!-- Contact Info -->');
const footerStart = html.indexOf('<!-- Modern Full Footer -->');
const servicesStart = html.indexOf('<!-- Services Section -->');

const headToNav = html.substring(0, heroStart);
const quoteBlock = html.substring(quoteStart, contactStart);
const contactBlock = html.substring(contactStart, footerStart);
const servicesToFooter = html.substring(servicesStart);

const contactHero = `
    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-teal-900 pt-20">
        <div id="bubbles-container" class="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
        <div class="absolute inset-0 z-0">
            <img src="images/WhatsApp Image 2026-02-27 at 11.40.21 PM.jpeg" alt="Contact Us" class="w-full h-full object-cover opacity-70 mix-blend-overlay" />
            <div class="absolute inset-0 bg-gradient-to-t from-teal-900/95 via-gray-900/60 to-gray-900/80"></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto px-4 text-center reveal text-white pt-12">
            <!-- Logo Mark -->
            <div class="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center p-1.5 shadow-[0_0_30px_rgba(250,201,22,0.4)] mb-6 transform transition-transform hover:scale-105">
                <img src="images/logo.jpg" alt="502 Star Service Logo" class="w-full h-full object-cover rounded-full" />
            </div>

            <h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Contact <span class="text-accent-yellow">502 Star Service</span>
            </h1>
            <p class="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                Connect With Our Team Today
            </p>
        </div>
    </section>`;

let finalHtml = headToNav + contactHero + quoteBlock + contactBlock + servicesToFooter;
finalHtml = finalHtml.replace(/<title>.*?<\/title>/, '<title>Contact Us - 502 Star Service</title>');

finalHtml = finalHtml.replace(/src="images\//g, 'src="../images/');
finalHtml = finalHtml.replace(/href="images\//g, 'href="../images/');
finalHtml = finalHtml.replace(/href="index\.html/g, 'href="../index.html');
finalHtml = finalHtml.replace(/href="([a-z0-9-]+)\/"/g, 'href="../$1/"');
finalHtml = finalHtml.replace(/href="#home"/g, 'href="../index.html#home"');

const dirPath = __dirname + '/contact-us';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}
fs.writeFileSync(dirPath + '/index.html', finalHtml);
console.log('Successfully created contact-us/index.html');
