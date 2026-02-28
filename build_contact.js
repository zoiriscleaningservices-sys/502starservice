const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Boundaries
const heroStart = html.indexOf('<!-- Hero Section -->');
const servicesStart = html.indexOf('<!-- Services Section -->');
const quoteStart = html.indexOf('<!-- Quote/Contact Section -->');
const footerStart = html.indexOf('<!-- Modern Full Footer -->');

// Blocks
const headToNav = html.substring(0, heroStart);
const contactBlocks = html.substring(quoteStart, footerStart);
const servicesBlock = html.substring(servicesStart, quoteStart);
const footerToEOF = html.substring(footerStart);

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

// Assemble in desired order: Head + Contact + Services + Footer
const assembledHTML = headToNav + contactHero + contactBlocks + servicesBlock + footerToEOF;

let finalHTML = assembledHTML.replace(/<title>.*?<\/title>/, '<title>Contact Us - 502 Star Service</title>');
finalHTML = finalHTML.replace(/content="We are dedicated to providing exceptional cleaning services tailored to your specific needs.*?"/, 'content="Get in touch with 502 Star Service for a free estimate tailored to your residential or commercial cleaning needs."');
finalHTML = finalHTML.replace(/href="#home"/g, 'href="index.html#home"');
finalHTML = finalHTML.replace(/href="#about"/g, 'href="about-us.html"');

fs.writeFileSync('contact-us.html', finalHTML);
console.log('Successfully created contact-us.html');
