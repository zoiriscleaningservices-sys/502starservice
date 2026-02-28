const fs = require('fs');
const path = require('path');

// 1. Data Structures
const services = [
    // Residential
    { id: "house-cleaning", title: "House Cleaning", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.39.57 PM.jpeg" },
    { id: "deep-cleaning", title: "Deep Cleaning", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.24 PM (2).jpeg" },
    { id: "move-in-cleaning", title: "Move-In Cleaning", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.24 PM (3).jpeg" },
    { id: "move-out-cleaning", title: "Move-Out Cleaning", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.24 PM (6).jpeg" },
    { id: "carpet-cleaning", title: "Carpet Cleaning", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.21 PM (2).jpeg" },
    { id: "window-cleaning", title: "Window Cleaning", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.26 PM (4).jpeg" },
    { id: "pressure-washing", title: "Pressure Washing", category: "Residential & Property", img: "images/pressure_washing.png" },
    { id: "luxury-estate-cleaning", title: "Luxury Estate Cleaning", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg" },
    { id: "laundry-services", title: "Laundry Services", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.23 PM.jpeg" },
    { id: "detailing", title: "Detailing", category: "Residential & Property", img: "images/WhatsApp Image 2026-02-27 at 11.40.22 PM (2).jpeg" },

    // Commercial
    { id: "commercial-cleaning", title: "Commercial Cleaning", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.39.54 PM (1).jpeg" },
    { id: "office-janitorial", title: "Office Janitorial Services", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.21 PM (1).jpeg" },
    { id: "janitorial-cleaning", title: "Janitorial Cleaning Services", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.01 PM.jpeg" },
    { id: "medical-facility-cleaning", title: "Medical Facility Cleaning", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.09 PM (1).jpeg" },
    { id: "industrial-warehouse-cleaning", title: "Industrial & Warehouse Cleaning", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.06 PM.jpeg" },
    { id: "floor-stripping-waxing", title: "Floor Stripping & Waxing", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.24 PM (1).jpeg" },
    { id: "gym-fitness-cleaning", title: "Gym & Fitness Center Cleaning", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.26 PM (3).jpeg" },
    { id: "school-daycare-cleaning", title: "School & Daycare Cleaning", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.25 PM (1).jpeg" },
    { id: "church-worship-cleaning", title: "Church & Worship Cleaning", category: "Commercial & Industrial", img: "images/WhatsApp Image 2026-02-27 at 11.40.26 PM (1).jpeg" },
    { id: "solar-panel-cleaning", title: "Solar Panel Cleaning", category: "Commercial & Industrial", img: "images/solar_panel_cleaning.png" },

    // Property
    { id: "vacation-rental-cleaning", title: "Vacation Rental Cleaning", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.22 PM (1).jpeg" },
    { id: "airbnb-cleaning", title: "Airbnb Cleaning", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.22 PM (6).jpeg" },
    { id: "airbnb-rental-management", title: "Airbnb & Rental Management", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.22 PM (5).jpeg" },
    { id: "post-construction-cleanup", title: "Post-Construction Cleanup", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.24 PM (4).jpeg" },
    { id: "property-management-janitorial", title: "Property Management Janitorial", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.21 PM.jpeg" },
    { id: "property-maintenance", title: "Property Maintenance", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.24 PM (5).jpeg" },
    { id: "home-watch-services", title: "Home Watch Services", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.22 PM (3).jpeg" },
    { id: "luxury-estate-management", title: "Luxury Estate Management", category: "Property Management", img: "images/WhatsApp Image 2026-02-27 at 11.40.22 PM.jpeg" },
    { id: "gutter-cleaning", title: "Gutter Cleaning", category: "Property Management", img: "images/gutter_cleaning.png" }
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

// Helper to extract a chunk of HTML from index.html
function extractSection(html, startComment, endComment) {
    const startIndex = html.indexOf(startComment);
    if (startIndex === -1) return '';
    const endIndex = html.indexOf(endComment, startIndex);
    if (endIndex === -1) return '';
    return html.substring(startIndex, endIndex + endComment.length);
}

// Ensure the start and end of blocks are correctly defined
function buildPage(type, data) {
    const isLocal = type === 'location';
    const keyword = isLocal ? "Cleaning Services" : data.title;
    const locationStr = isLocal ? data.title : "Louisville, KY";

    const pageTitle = `${keyword} in ${locationStr} - 502 Star Service`;
    const pageDesc = `Get the best ${data.title.toLowerCase()} from 502 Star Service in ${locationStr}. We provide 5-star, professional, and reliable cleaning solutions tailored to your needs.`;
    const canonical = `https://502starservice.com/${data.id}/`;

    // Pick a high-quality default if no specific image is provided (like for locations)
    const defaultMansion = 'images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg'; // High quality location default
    const bannerImage = isLocal ? defaultMansion : (data.img ? data.img : defaultMansion);

    // Create the HTML payload
    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Optimized SEO Structure -->
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/jpeg" href="images/logo.jpg" />
    
    <!-- Open Graph Data -->
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDesc}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="502 Star Service" />
    <meta property="og:image" content="https://502starservice.com/images/logo.jpg" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDesc}" />
    <meta name="twitter:image" content="https://502starservice.com/images/logo.jpg" />
    
    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"${canonical}","url":"${canonical}","name":"${pageTitle}","isPartOf":{"@id":"https://502starservice.com/#website"},"about":{"@id":"https://502starservice.com/#organization"},"primaryImageOfPage":{"@id":"https://502starservice.com/#primaryimage"},"image":{"@id":"https://502starservice.com/#primaryimage"},"thumbnailUrl":"https://502starservice.com/images/logo.jpg","description":"${pageDesc}","breadcrumb":{"@id":"${canonical}#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["${canonical}"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://502starservice.com/#primaryimage","url":"https://502starservice.com/images/logo.jpg","contentUrl":"https://502starservice.com/images/logo.jpg"},{"@type":"BreadcrumbList","@id":"${canonical}#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://502starservice.com/"},{"@type":"ListItem","position":2,"name":"${data.title}"}]},{"@type":"WebSite","@id":"https://502starservice.com/#website","url":"https://502starservice.com/","name":"502 Star Service","description":"Discover the Art of Clean Living","publisher":{"@id":"https://502starservice.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://502starservice.com/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://502starservice.com/#organization","name":"502 Star Service","url":"https://502starservice.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://502starservice.com/#/schema/logo/image/","url":"https://502starservice.com/images/logo.jpg","contentUrl":"https://502starservice.com/images/logo.jpg","caption":"502 Star Service"},"image":{"@id":"https://502starservice.com/#/schema/logo/image/"}}]}</script>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- _GLOBAL_HEAD_CSS_ -->
</head>
<body class="font-sans antialiased overflow-x-hidden pt-20 bg-gray-50">

    <!-- GLOBAL HEADER INCLUSION FLAG -->
    <!-- _GLOBAL_HEADER_ -->
    
    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-teal-900">
        <div id="bubbles-container" class="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
        <div class="absolute inset-0 z-0">
            <img src="${bannerImage}" alt="${data.title}" class="w-full h-full object-cover opacity-70 mix-blend-overlay" />
            <div class="absolute inset-0 bg-gradient-to-t from-teal-900/95 via-gray-900/60 to-gray-900/80"></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto px-4 text-center reveal pt-12">
            <!-- Logo Mark -->
            <div class="mx-auto w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center p-1.5 shadow-[0_0_30px_rgba(250,201,22,0.4)] mb-6 transform transition-transform hover:scale-105">
                <img src="images/logo.jpg" alt="502 Star Service Logo" class="w-full h-full object-cover rounded-full" />
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight flex flex-col items-center">
                <span class="text-accent-yellow block text-sm md:text-xl mb-2 tracking-widest uppercase font-semibold">${isLocal ? 'Service Area' : data.category}</span>
                ${data.title} ${isLocal ? 'Cleaning Services' : ''}
            </h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                ${pageDesc}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:5028351870" class="w-full sm:w-auto bg-accent-yellow text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-2xl flex items-center justify-center gap-2">
                    <i data-lucide="phone" class="w-5 h-5"></i> Call Now
                </a>
                <a href="#quote" class="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors shadow-2xl flex items-center justify-center gap-2">
                    Request Quote <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Main Content & Left Form Structure -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-3 gap-12">
                
                <!-- Left Details Box -->
                <div class="lg:col-span-2 space-y-12">
                    <div class="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal border border-gray-100">
                        <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose Our ${data.title} in ${locationStr}?</h2>
                        <div class="prose prose-lg text-gray-600">
                            <p class="mb-4">At 502 Star Service, we understand that finding reliable and meticulous cleaning services is crucial. Our <strong>${data.title}</strong> is designed to exceed expectations and deliver a spotless environment every single time.</p>
                            <p class="mb-8">By leveraging advanced cleaning techniques and eco-friendly products, we ensure that your property in ${locationStr} is not just visually clean, but fundamentally sanitized and healthy.</p>
                            
                            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><i data-lucide="sparkles" class="text-teal-600"></i> Quality Guaranteed</h3>
                            <ul class="space-y-3 list-none">
                                <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="text-teal-600 shrink-0 mt-1"></i> Highly trained, background-checked professionals.</li>
                                <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="text-teal-600 shrink-0 mt-1"></i> Customized cleaning plans tailored to your schedule.</li>
                                <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="text-teal-600 shrink-0 mt-1"></i> 100% Satisfaction Guarantee on all services.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Right Sidebar Form -->
                <div class="lg:col-span-1">
                    <div class="sticky top-28 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,165,166,0.1)] border-2 border-teal-50 reveal">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Get Your Quote</h3>
                        <p class="text-gray-500 text-sm mb-6">We'll respond within 2 hours!</p>
                        <form id="quote-form" class="space-y-4">
                            <div>
                                <input type="text" required class="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Full Name">
                            </div>
                            <div>
                                <input type="tel" required class="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Phone Number">
                            </div>
                            <div>
                                <input type="email" required class="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Email Address">
                            </div>
                            <div>
                                <textarea rows="3" class="w-full px-4 py-3 bg-gray-50 rounded-xl border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Details about your space..."></textarea>
                            </div>
                            <button type="submit" class="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                Send Request <i data-lucide="send"></i>
                            </button>
                        </form>
                        <div id="success-message" class="hidden text-teal-600 font-bold text-center py-4 bg-teal-50 rounded-xl mt-4 border border-teal-100">
                            <i data-lucide="check-circle" class="w-6 h-6 mx-auto mb-2"></i>
                            Quote request received!<br>We'll call you shortly.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <!-- GLOBAL FOOTER INCLUSION FLAG -->
    <!-- _GLOBAL_FOOTER_ -->

</body>
</html>`;
}

async function run() {
    console.log("Starting Subpage Automation...");
    const indexPath = path.join(__dirname, 'index.html');

    // Read Original Index
    let indexHtml = '';
    try {
        indexHtml = fs.readFileSync(indexPath, 'utf8');
    } catch (e) {
        console.error("Could not read index.html");
        return;
    }

    // Extract exactly the Navigation block
    const headerMatch = indexHtml.match(/<!-- Navigation -->[\s\S]*?<!-- Hero Section -->/);
    let globalHeader = headerMatch ? headerMatch[0].replace('<!-- Hero Section -->', '') : '';
    globalHeader = globalHeader.replace(/href="#home"/g, 'href="index.html#home"');
    globalHeader = globalHeader.replace(/href="#about"/g, 'href="index.html#about"');

    // Extract the Global CSS block correctly spanning tailwind to style end
    const cssMatch = indexHtml.match(/<script>\s*tailwind\.config[\s\S]*?<\/style>/);
    let globalCss = cssMatch ? cssMatch[0] : '';

    // Extract all lower sections including Services, Locations, Reviews, Quote, Contact, Footer, and Scripts
    const sectionsMatch = indexHtml.match(/<!-- Services Section -->[\s\S]*?<\/body>/);
    let globalFooterAndSections = sectionsMatch ? sectionsMatch[0].replace('</body>', '') : '';

    // Fix broken local scroll links in the Footer because Home and About don't exist on sub-pages
    globalFooterAndSections = globalFooterAndSections.replace(/href="#home"/g, 'href="index.html#home"');
    globalFooterAndSections = globalFooterAndSections.replace(/href="#about"/g, 'href="index.html#about"');

    let totalCreated = 0;

    function savePage(item, htmlBody) {
        let finalHtml = htmlBody.replace(/src="images\//g, 'src="../images/');
        finalHtml = finalHtml.replace(/href="images\//g, 'href="../images/');
        finalHtml = finalHtml.replace(/href="index\.html/g, 'href="../index.html');
        // Fix internal links to other directories
        finalHtml = finalHtml.replace(/href="([a-z0-9-]+)\/"/g, 'href="../$1/"');

        const dirPath = path.join(__dirname, item.id);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        fs.writeFileSync(path.join(dirPath, 'index.html'), finalHtml);
    }

    // Generate Services
    for (let s of services) {
        let html = buildPage('service', s);
        html = html.replace('<!-- _GLOBAL_HEAD_CSS_ -->', globalCss);
        html = html.replace('<!-- _GLOBAL_HEADER_ -->', globalHeader);
        html = html.replace('<!-- _GLOBAL_FOOTER_ -->', globalFooterAndSections);
        savePage(s, html);
        totalCreated++;
    }

    // Generate Locations
    for (let l of locations) {
        let html = buildPage('location', l);
        html = html.replace('<!-- _GLOBAL_HEAD_CSS_ -->', globalCss);
        html = html.replace('<!-- _GLOBAL_HEADER_ -->', globalHeader);
        html = html.replace('<!-- _GLOBAL_FOOTER_ -->', globalFooterAndSections);
        savePage(l, html);
        totalCreated++;
    }

    console.log(`Successfully generated ${services.length + locations.length} SEO optimized directory pages.`);
}

run();
