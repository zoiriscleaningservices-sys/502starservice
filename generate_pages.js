const fs = require('fs');
const path = require('path');

// ─── DATA STRUCTURES ───────────────────────────────────────────────────────

const services = [
    { id:"house-cleaning",               title:"House Cleaning",                  category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.39.57 PM.jpeg" },
    { id:"deep-cleaning",                title:"Deep Cleaning",                   category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.24 PM (2).jpeg" },
    { id:"move-in-cleaning",             title:"Move-In Cleaning",                category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.24 PM (3).jpeg" },
    { id:"move-out-cleaning",            title:"Move-Out Cleaning",               category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.24 PM (6).jpeg" },
    { id:"carpet-cleaning",              title:"Carpet Cleaning",                 category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.21 PM (2).jpeg" },
    { id:"window-cleaning",              title:"Window Cleaning",                 category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.26 PM (4).jpeg" },
    { id:"pressure-washing",             title:"Pressure Washing",                category:"Residential & Property",  img:"images/pressure_washing.png" },
    { id:"luxury-estate-cleaning",       title:"Luxury Estate Cleaning",          category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg" },
    { id:"laundry-services",             title:"Laundry Services",                category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.23 PM.jpeg" },
    { id:"detailing",                    title:"Detailing",                       category:"Residential & Property",  img:"images/WhatsApp Image 2026-02-27 at 11.40.22 PM (2).jpeg" },
    { id:"commercial-cleaning",          title:"Commercial Cleaning",             category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.39.54 PM (1).jpeg" },
    { id:"office-janitorial",            title:"Office Janitorial Services",      category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.21 PM (1).jpeg" },
    { id:"janitorial-cleaning",          title:"Janitorial Cleaning Services",    category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.01 PM.jpeg" },
    { id:"medical-facility-cleaning",    title:"Medical Facility Cleaning",       category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.09 PM (1).jpeg" },
    { id:"industrial-warehouse-cleaning",title:"Industrial & Warehouse Cleaning", category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.06 PM.jpeg" },
    { id:"floor-stripping-waxing",       title:"Floor Stripping & Waxing",        category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.24 PM (1).jpeg" },
    { id:"gym-fitness-cleaning",         title:"Gym & Fitness Center Cleaning",   category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.26 PM (3).jpeg" },
    { id:"school-daycare-cleaning",      title:"School & Daycare Cleaning",       category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.25 PM (1).jpeg" },
    { id:"church-worship-cleaning",      title:"Church & Worship Cleaning",       category:"Commercial & Industrial", img:"images/WhatsApp Image 2026-02-27 at 11.40.26 PM (1).jpeg" },
    { id:"solar-panel-cleaning",         title:"Solar Panel Cleaning",            category:"Commercial & Industrial", img:"images/solar_panel_cleaning.png" },
    { id:"vacation-rental-cleaning",     title:"Vacation Rental Cleaning",        category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.22 PM (1).jpeg" },
    { id:"airbnb-cleaning",              title:"Airbnb Cleaning",                 category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.22 PM (6).jpeg" },
    { id:"airbnb-rental-management",     title:"Airbnb & Rental Management",      category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.22 PM (5).jpeg" },
    { id:"post-construction-cleanup",    title:"Post-Construction Cleanup",       category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.24 PM (4).jpeg" },
    { id:"property-management-janitorial",title:"Property Management Janitorial",category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.21 PM.jpeg" },
    { id:"property-maintenance",         title:"Property Maintenance",            category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.24 PM (5).jpeg" },
    { id:"home-watch-services",          title:"Home Watch Services",             category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.22 PM (3).jpeg" },
    { id:"luxury-estate-management",     title:"Luxury Estate Management",        category:"Property Management",     img:"images/WhatsApp Image 2026-02-27 at 11.40.22 PM.jpeg" },
    { id:"gutter-cleaning",              title:"Gutter Cleaning",                 category:"Property Management",     img:"images/gutter_cleaning.png" }
];

const locations = [
    { id:"old-louisville",  title:"Old Louisville"  },
    { id:"the-highlands",   title:"The Highlands"   },
    { id:"nulu",            title:"NuLu"            },
    { id:"butchertown",     title:"Butchertown"     },
    { id:"germantown",      title:"Germantown"      },
    { id:"crescent-hill",   title:"Crescent Hill"   },
    { id:"st-matthews",     title:"St. Matthews"    },
    { id:"middletown",      title:"Middletown"      },
    { id:"jeffersontown",   title:"Jeffersontown"   },
    { id:"fern-creek",      title:"Fern Creek"      },
    { id:"okolona",         title:"Okolona"         },
    { id:"shively",         title:"Shively"         },
    { id:"prospect",        title:"Prospect"        },
    { id:"anchorage",       title:"Anchorage"       },
    { id:"hurstbourne",     title:"Hurstbourne"     },
    { id:"lyndon",          title:"Lyndon"          }
];

// ─── UNIQUE LOCATION DATA ───────────────────────────────────────────────────
const locationData = {
    "old-louisville": {
        desc: "Top-rated cleaning services in Old Louisville, KY. We care for historic Victorian homes & modern condos. Insured & bonded. Call (502) 835-1870!",
        extra: "Old Louisville's Victorian-era architecture and tree-lined streets deserve special cleaning expertise — our team uses gentle, heritage-safe products on woodwork, plaster, and period details.",
        faqs: [
            { q:"Do you clean historic Victorian homes in Old Louisville?", a:"Absolutely. We use gentle, heritage-safe products specifically suited for the plaster walls, hardwood floors, and ornate woodwork common in Old Louisville's Victorian homes." },
            { q:"How quickly can I book a cleaner in Old Louisville?", a:"We typically offer next-day appointments in Old Louisville. Same-day service is often available — just call (502) 835-1870 and we'll get you scheduled fast." },
            { q:"Are your Old Louisville cleaners background-checked?", a:"Yes. Every 502 Star Service team member serving Old Louisville is fully background-checked, insured, and bonded for your complete peace of mind." }
        ]
    },
    "the-highlands": {
        desc: "Trusted cleaning services in The Highlands, Louisville KY. Boutique neighborhood experts. Eco-friendly products. Free quote — (502) 835-1870.",
        extra: "The Highlands' eclectic mix of bungalows, apartments, and commercial strips requires a flexible cleaning approach — our team is fully equipped for every property style in this vibrant corridor.",
        faqs: [
            { q:"Do you clean apartments and bungalows in The Highlands?", a:"Yes! We regularly clean apartments, bungalows, condos, and commercial spaces throughout The Highlands neighborhood and surrounding streets." },
            { q:"Are your Highlands cleaning products pet-safe?", a:"All products we use in The Highlands are 100% eco-friendly and safe for pets and children — no harsh chemicals, just a thorough, safe clean." },
            { q:"Can you handle recurring weekly cleaning in The Highlands?", a:"Absolutely. Many of our Highlands clients schedule weekly or bi-weekly visits. We offer flexible plans that work around your schedule and budget." }
        ]
    },
    "nulu": {
        desc: "Professional cleaning services in NuLu, Louisville KY. Lofts, condos, businesses — we handle it all. Call 502-835-1870 for a free estimate.",
        extra: "NuLu's thriving arts district is packed with lofts, galleries, and restaurants — our commercial and residential cleaning crews are experienced with the open-concept layouts common in this area.",
        faqs: [
            { q:"Do you clean commercial spaces and lofts in NuLu?", a:"Yes! NuLu is one of our most active service areas. We clean art studios, retail shops, restaurants, loft apartments, and condos throughout the district." },
            { q:"How do you handle open-concept spaces in NuLu lofts?", a:"Our NuLu cleaning teams are trained on open-concept floor plans — we systematically clean high ceilings, exposed ductwork, concrete floors, and large windows with professional equipment." },
            { q:"Is 502 Star Service available on weekends in NuLu?", a:"Yes! We work 7 days a week including weekends and can accommodate early morning or evening appointments to fit NuLu's busy lifestyle." }
        ]
    },
    "butchertown": {
        desc: "Reliable cleaning services in Butchertown, Louisville KY. Houses, condos & businesses. 5-star rated local team. Free quote: (502) 835-1870.",
        extra: "Butchertown's revitalized row homes and converted industrial spaces each have their own cleaning challenges — our experienced crew handles everything from exposed brick to polished concrete floors.",
        faqs: [
            { q:"Do you clean converted industrial spaces in Butchertown?", a:"Yes. We have extensive experience cleaning Butchertown's converted warehouses and industrial-style condos, including exposed brick, polished concrete, and high-ceiling spaces." },
            { q:"Can you do a one-time deep clean in Butchertown?", a:"Definitely. One-time deep cleaning is one of our most popular services in Butchertown — perfect for move-ins, special events, or a seasonal refresh." },
            { q:"What neighborhoods near Butchertown do you also serve?", a:"We serve all of Louisville and Jefferson County, including NuLu, Germantown, Clifton, and Trolley Square — all just minutes from Butchertown." }
        ]
    },
    "germantown": {
        desc: "Expert cleaning services in Germantown, Louisville KY. Homes, offices & rentals. Licensed & insured. Call 502-835-1870 for a free estimate today.",
        extra: "Germantown's dense streets of craftsman homes and small businesses have unique cleaning needs — our locally-based team knows every block and delivers results that longtime Germantown residents rely on.",
        faqs: [
            { q:"Do you offer maid service in Germantown, Louisville?", a:"Yes! We provide recurring maid services in Germantown on weekly, bi-weekly, or monthly schedules — all at competitive prices with no contracts required." },
            { q:"Are you familiar with Germantown's older home styles?", a:"Absolutely. Our Germantown team regularly cleans 1920s–1960s craftsman homes and knows how to handle original hardwood, vintage tile, and older fixtures with care." },
            { q:"How soon can you start cleaning services in Germantown?", a:"Most new Germantown clients get their first appointment within 1–3 business days. Call (502) 835-1870 or request online for fastest booking." }
        ]
    },
    "crescent-hill": {
        desc: "Top cleaning services in Crescent Hill, Louisville KY. Residential & commercial. Eco-safe products. 5-star reviewed. Call (502) 835-1870!",
        extra: "Crescent Hill homeowners trust 502 Star Service for consistent, detail-oriented cleaning that keeps their classic Louisville homes looking their absolute best year-round.",
        faqs: [
            { q:"Do you service homes near Crescent Hill's business district?", a:"Yes. We clean both residences and commercial properties throughout Crescent Hill, including spaces near Frankfort Avenue's popular shops and restaurants." },
            { q:"What's included in a standard cleaning in Crescent Hill?", a:"Our standard Crescent Hill clean includes all bedrooms, living areas, bathrooms, kitchen, and floors. Deep cleaning add-ons like inside appliances are also available." },
            { q:"Do you bring your own supplies to Crescent Hill homes?", a:"Yes! We arrive fully equipped with all cleaning supplies, tools, and eco-friendly products — you don't need to provide a thing." }
        ]
    },
    "st-matthews": {
        desc: "Premium cleaning services in St. Matthews, Louisville KY. Homes, offices & commercial spaces. Insured. Free quote at (502) 835-1870.",
        extra: "St. Matthews is one of Louisville's most active suburbs — our cleaning teams service everything from single-family homes near Shelbyville Road to office suites and retail spaces in the commercial corridor.",
        faqs: [
            { q:"Do you clean offices and commercial spaces in St. Matthews?", a:"Yes! We provide professional janitorial and commercial cleaning services throughout St. Matthews, including offices, retail shops, and medical suites." },
            { q:"Are you available for same-day cleaning in St. Matthews?", a:"Same-day availability depends on schedule, but we frequently accommodate last-minute requests in St. Matthews. Call (502) 835-1870 for current openings." },
            { q:"Do you offer move-out cleaning in the St. Matthews area?", a:"Absolutely. Move-out cleaning is a specialty — we help tenants and homeowners in St. Matthews leave properties spotless to maximize deposits and buyer impressions." }
        ]
    },
    "middletown": {
        desc: "Trusted cleaning services in Middletown, Louisville KY. Residential & commercial. Locally owned, background-checked. Call (502) 835-1870 now.",
        extra: "Middletown's growing mix of new subdivisions and established neighborhoods makes it one of our busiest service areas — we're familiar with all the major Middletown communities and deliver consistent results.",
        faqs: [
            { q:"Do you clean new construction homes in Middletown?", a:"Yes! Post-construction cleanup is one of our specialties in Middletown. We remove construction dust, paint overspray, and debris to make your new home move-in ready." },
            { q:"Can I get recurring cleaning service in Middletown, KY?", a:"Yes. Many Middletown families rely on us for weekly or bi-weekly cleaning. We build a custom plan that fits your home size, schedule, and priorities." },
            { q:"Is 502 Star Service the best cleaning company in Middletown?", a:"We're proud to be the highest-rated cleaning service in the Middletown area, with a perfect 5.0 on Google. Real reviews from real Middletown families — check them out!" }
        ]
    },
    "jeffersontown": {
        desc: "Best cleaning services in Jeffersontown, KY. Homes, offices & rentals near Blankenbaker. Licensed, insured & 5-star rated. Call (502) 835-1870.",
        extra: "Jeffersontown's blend of suburban neighborhoods and business parks means we handle everything from family home cleaning near Taylorsville Road to commercial janitorial contracts in the J-Town Tech corridor.",
        faqs: [
            { q:"Do you offer house cleaning near Blankenbaker Pkwy in J-Town?", a:"Yes! We service all areas of Jeffersontown including neighborhoods near Blankenbaker Parkway, Taylorsville Road, and throughout the Jeffersontown Tech Park corridor." },
            { q:"Can you clean my Jeffersontown office building?", a:"Absolutely. We offer full commercial and office janitorial services in Jeffersontown — for businesses of all sizes, from small suites to large office parks." },
            { q:"How much does house cleaning cost in Jeffersontown?", a:"Pricing varies by home size and service type. Most Jeffersontown residential cleans start at a very competitive rate. Contact us for a free, no-obligation custom quote." }
        ]
    },
    "fern-creek": {
        desc: "Reliable cleaning services in Fern Creek, Louisville KY. Family-friendly, eco-safe. 5-star rated. Call 502-835-1870 for your free quote today!",
        extra: "Fern Creek's family-oriented neighborhoods and ranch-style homes are a perfect match for our professional residential cleaning teams who specialize in thorough, child and pet-safe cleaning.",
        faqs: [
            { q:"Is 502 Star Service available in Fern Creek, KY?", a:"Yes! Fern Creek is one of our primary service areas. We clean homes throughout Fern Creek including neighborhoods near Bardstown Road and Stony Brook Drive." },
            { q:"Do Fern Creek cleaners use pet-safe products?", a:"Every product we use in Fern Creek is pet-friendly and non-toxic — completely safe for dogs, cats, and children while still delivering a deeply effective clean." },
            { q:"How long does a house cleaning take in Fern Creek?", a:"A standard Fern Creek home clean takes 2–4 hours depending on square footage and number of rooms. Deep cleans take longer and can be scheduled accordingly." }
        ]
    },
    "okolona": {
        desc: "Affordable cleaning services in Okolona, Louisville KY. Homes, rentals & offices. Background-checked staff. Free quote: (502) 835-1870.",
        extra: "Okolona's working-class neighborhood pride runs deep — our team delivers the same premium-quality cleaning to every Okolona home that we'd want for our own families.",
        faqs: [
            { q:"Do you provide affordable cleaning services in Okolona?", a:"Yes. We offer competitive pricing for all Okolona residents. We believe every family deserves a clean home — contact us for a free quote tailored to your budget." },
            { q:"Are your Okolona cleaners trustworthy and background-checked?", a:"Every cleaner serving Okolona is thoroughly background-screened, insured, and bonded. Your home's security and your family's safety are our top priority." },
            { q:"What cleaning services do you offer in Okolona, KY?", a:"We offer house cleaning, deep cleaning, move-in/move-out, carpet cleaning, commercial cleaning, and more throughout Okolona and the surrounding south Louisville area." }
        ]
    },
    "shively": {
        desc: "Professional cleaning services in Shively, Louisville KY. Residential & commercial. Trusted local team. Book today: (502) 835-1870.",
        extra: "Shively's tightly-knit community deserves cleaning professionals who understand and respect the neighborhood — our Shively team is local, reliable, and deeply familiar with the area.",
        faqs: [
            { q:"Do you offer regular maid service in Shively, KY?", a:"Yes! Many Shively residents trust us for weekly and bi-weekly maid service. We'll build a personalized cleaning plan that keeps your home consistently sparkling." },
            { q:"Can 502 Star Service handle commercial cleaning in Shively?", a:"Absolutely. We serve businesses throughout Shively including retail stores, offices, warehouses, and industrial facilities with professional-grade equipment and staff." },
            { q:"How do I get a cleaning quote in Shively?", a:"Simply call (502) 835-1870 or fill out our online quote form. We'll respond within hours with a free, no-obligation estimate tailored to your Shively property." }
        ]
    },
    "prospect": {
        desc: "Luxury cleaning services in Prospect, KY. High-end homes & estates. White-glove standard. Bonded & insured. Call (502) 835-1870 for a quote.",
        extra: "Prospect's upscale estates and custom luxury homes demand a higher standard of cleaning — our Prospect team is handpicked for experience with high-end finishes, marble, and custom cabinetry.",
        faqs: [
            { q:"Do you specialize in luxury home cleaning in Prospect, KY?", a:"Yes. Prospect is one of our premium residential markets. We specialize in large estates, luxury finishes, marble countertops, and hardwood care that high-end homes require." },
            { q:"Are your Prospect cleaners experienced with high-end finishes?", a:"Absolutely. Our Prospect cleaning specialists are trained on natural stone, custom hardwood, high-end appliances, and delicate surfaces to ensure zero damage or residue." },
            { q:"Do you offer estate management cleaning packages in Prospect?", a:"Yes! We offer comprehensive luxury estate cleaning and management packages in Prospect — covering everything from regular upkeep to seasonal deep cleans and white-glove event prep." }
        ]
    },
    "anchorage": {
        desc: "Premium cleaning services in Anchorage, KY. Luxury estates & historic homes. White-glove detail. Insured. Contact us: (502) 835-1870.",
        extra: "Anchorage is one of Kentucky's most prestigious communities — our elite cleaning team handles its grand estates, historic properties, and manicured grounds with the utmost professionalism and discretion.",
        faqs: [
            { q:"Do you clean large estates and historic homes in Anchorage, KY?", a:"Yes. Anchorage is one of our specialty markets. We regularly service large historic estates and custom luxury homes throughout the village of Anchorage with white-glove care." },
            { q:"Is 502 Star Service discreet for high-profile Anchorage clients?", a:"Absolutely. We understand the privacy expectations of our Anchorage clientele. Our team works discreetly, professionally, and with complete respect for your home and privacy." },
            { q:"How do I schedule recurring cleaning for my Anchorage estate?", a:"Call (502) 835-1870 or submit a request online. We'll schedule a property walkthrough and design a custom recurring cleaning plan for your Anchorage estate." }
        ]
    },
    "hurstbourne": {
        desc: "Expert cleaning services in Hurstbourne, Louisville KY. Homes, condos & offices near the Hurstbourne corridor. Call (502) 835-1870.",
        extra: "Hurstbourne's booming residential and commercial corridor makes it one of our fastest-growing service areas — from luxury apartment complexes to corporate office parks, we service them all.",
        faqs: [
            { q:"Do you clean apartments and condos in Hurstbourne?", a:"Yes! We service apartment complexes, condos, and housing communities throughout Hurstbourne, providing both individual unit cleaning and communal area maintenance." },
            { q:"Can 502 Star Service handle Hurstbourne office buildings?", a:"Absolutely. We provide regular janitorial and commercial cleaning for offices, medical suites, and business parks throughout the Hurstbourne Pkwy corridor." },
            { q:"Is there a minimum number of visits for Hurstbourne service?", a:"No minimum is required. Whether you need a single deep clean or ongoing service, we accommodate Hurstbourne clients of all sizes and schedules." }
        ]
    },
    "lyndon": {
        desc: "Trusted cleaning services in Lyndon, Louisville KY. Residential & commercial. Careful, thorough, 5-star rated. Free quote: (502) 835-1870.",
        extra: "Lyndon's peaceful residential feel and established neighborhoods are served by our team of cleaning professionals who take pride in maintaining the quality of life that Lyndon residents enjoy.",
        faqs: [
            { q:"Do you provide house cleaning in Lyndon, KY?", a:"Yes! We serve Lyndon and surrounding areas including Brownsboro Road and Lime Kiln Lane corridors. Booking is easy — call (502) 835-1870 or request online." },
            { q:"How often should I schedule cleaning in my Lyndon home?", a:"Most Lyndon homeowners book bi-weekly service for the best balance of cleanliness and value. We also offer weekly, monthly, or one-time options." },
            { q:"Does 502 Star Service clean businesses in Lyndon?", a:"Yes. We handle commercial cleaning in Lyndon for offices, medical facilities, and retail spaces. Contact us for a free commercial cleaning assessment." }
        ]
    }
};

// ─── UNIQUE SERVICE DATA ────────────────────────────────────────────────────
const serviceData = {
    "house-cleaning": {
        desc: "Professional house cleaning in Louisville, KY. Thorough, reliable & eco-friendly. Serving all Jefferson County. Free quote: (502) 835-1870.",
        extra: "Our Louisville house cleaning service covers every room top-to-bottom — dusting, vacuuming, mopping, sanitizing kitchens and bathrooms, and making your home feel truly refreshed.",
        faqs: [
            { q:"What's included in your standard Louisville house cleaning?", a:"Our standard house cleaning includes all living areas, bedrooms, bathrooms, and the kitchen. We dust surfaces, vacuum, mop floors, sanitize counters, scrub sinks, and clean toilets — a comprehensive home refresh every visit." },
            { q:"How much does house cleaning cost in Louisville, KY?", a:"Our Louisville house cleaning rates vary by home size, starting at a very competitive flat rate for standard homes. Contact us for a free, no-obligation quote based on your exact home." },
            { q:"Do you offer recurring house cleaning in Louisville?", a:"Yes! Most Louisville clients choose weekly or bi-weekly recurring service. We also offer monthly plans and one-time cleans. No contracts required — cancel anytime." }
        ]
    },
    "deep-cleaning": {
        desc: "Expert deep cleaning services in Louisville, KY. We clean what regular services miss. Top-to-bottom thoroughness. Call (502) 835-1870!",
        extra: "Louisville deep cleaning goes beyond the surface — we scrub inside ovens, behind appliances, inside cabinets, and tackle every baseboard, vent, and tile grout line in your home.",
        faqs: [
            { q:"What does a deep cleaning include that standard cleaning doesn't?", a:"Deep cleaning includes all areas of a standard clean PLUS inside appliances, inside cabinets and drawers, baseboards, window sills, ceiling fans, light fixtures, and behind/under furniture." },
            { q:"How often should I get a deep cleaning in Louisville?", a:"Most Louisville homeowners benefit from a deep clean 2–4 times per year, with regular maintenance cleans in between. If you've never had a professional deep clean, start with one now!" },
            { q:"How long does a deep cleaning take in a typical Louisville home?", a:"A deep clean for a standard 3-bedroom Louisville home typically takes 4–6 hours. Larger homes or heavily soiled spaces may take longer — we won't cut corners." }
        ]
    },
    "move-in-cleaning": {
        desc: "Move-in cleaning services in Louisville, KY. Start fresh in your new home. We scrub every inch. Call 502-835-1870 for a free estimate today!",
        extra: "Moving into a new Louisville home? Our move-in cleaning ensures you're starting fresh — we sanitize every surface the previous owners touched before a single box is unpacked.",
        faqs: [
            { q:"What does your Louisville move-in cleaning include?", a:"Our move-in clean covers the entire property: kitchens (inside appliances, cabinets), all bathrooms (deep scrub), all rooms, closets, windowsills, baseboards, and floors — completely sanitized and ready for you." },
            { q:"Do I need to be present during the move-in clean in Louisville?", a:"You don't need to be present! Many Louisville clients give us access before they arrive. We work independently and send you photos of the completed clean for peace of mind." },
            { q:"Can you do a move-in clean on short notice in Louisville?", a:"We try our best to accommodate urgent requests in Louisville. Call (502) 835-1870 as soon as you know your move-in date and we'll reserve your spot immediately." }
        ]
    },
    "move-out-cleaning": {
        desc: "Move-out cleaning in Louisville, KY. Get your full deposit back. Thorough, landlord-approved clean. Free quote — (502) 835-1870.",
        extra: "Our Louisville move-out cleaning is designed to satisfy even the most demanding landlords and property managers — we restore your space to its original condition so you get every dollar of your deposit back.",
        faqs: [
            { q:"Will a professional move-out clean help me get my deposit back in Louisville?", a:"Yes! Our move-out cleaning in Louisville is landlord-approved level. We clean to move-in standards — deep scrubbing all kitchens, bathrooms, and surfaces — which significantly increases your chance of a full deposit refund." },
            { q:"Do you clean inside the oven and fridge for move-out cleans in Louisville?", a:"Absolutely. Inside appliances are a standard part of our Louisville move-out cleaning — ovens, refrigerators, microwaves, and dishwashers are all cleaned inside and out." },
            { q:"How far in advance should I book a move-out clean in Louisville?", a:"We recommend booking 3–7 days before your move-out date in Louisville. For peak times (end of month), booking earlier is better to secure your preferred date." }
        ]
    },
    "carpet-cleaning": {
        desc: "Professional carpet cleaning in Louisville, KY. Deep steam & stain removal. Homes & offices. Call (502) 835-1870 for a free carpet cleaning quote!",
        extra: "Our Louisville carpet cleaning service uses professional-grade hot water extraction to remove embedded dirt, allergens, pet dander, and stubborn stains — leaving carpets refreshed and looking nearly new.",
        faqs: [
            { q:"What carpet cleaning method do you use in Louisville?", a:"We use professional hot water extraction (steam cleaning) — the gold standard recommended by carpet manufacturers. It penetrates deep into fibers to remove dirt, bacteria, and allergens that vacuuming can't reach." },
            { q:"How long do carpets take to dry after cleaning in Louisville?", a:"Most carpets in Louisville homes dry within 4–8 hours under normal conditions. We use high-powered extraction to remove as much moisture as possible, and good ventilation speeds drying further." },
            { q:"Can you remove pet stains and odors from Louisville carpets?", a:"Yes! Pet stain and odor treatment is one of our most-requested services in Louisville. We use enzyme-based treatments that break down urine crystals and eliminate odors at the source — not just mask them." }
        ]
    },
    "window-cleaning": {
        desc: "Crystal-clear window cleaning in Louisville, KY. Inside & outside. Streak-free results. Residential & commercial. Call (502) 835-1870!",
        extra: "Clean windows dramatically transform how your Louisville home feels — our streak-free window cleaning service covers interior and exterior glass, window tracks, screens, and sills.",
        faqs: [
            { q:"Do you clean both interior and exterior windows in Louisville?", a:"Yes! Our Louisville window cleaning service includes interior and exterior glass, window tracks, sills, and screens. We leave every pane streak-free using professional squeegees and cleaning solutions." },
            { q:"Is window cleaning safe for Louisville homes with 2nd-story windows?", a:"Absolutely. Our Louisville team is equipped to safely clean 2nd and 3rd story windows using extension poles and water-fed systems — no ladders through your home needed." },
            { q:"How often should Louisville homeowners clean their windows?", a:"Most Louisville homeowners benefit from professional window cleaning 2–4 times per year. Spring and fall are most popular — clearing pollen in spring and preparing for winter in fall." }
        ]
    },
    "pressure-washing": {
        desc: "Power pressure washing in Louisville, KY. Driveways, decks, siding & more. Louisville's grime experts. Call (502) 835-1870 for a free quote!",
        extra: "Louisville's humid climate creates mold, mildew, and algae buildup on driveways, decks, and siding fast — our pressure washing service blasts it all away, restoring your property's curb appeal.",
        faqs: [
            { q:"What surfaces can you pressure wash in Louisville?", a:"We pressure wash driveways, sidewalks, decks, patios, siding, brick, fences, garage floors, and retaining walls throughout Louisville. If it has grime, we can clean it." },
            { q:"Is pressure washing safe for Louisville home siding?", a:"Yes, when done correctly. We use the appropriate pressure and techniques for each surface type — lower pressure soft-washing for vinyl and painted surfaces, higher pressure for concrete and brick." },
            { q:"How long does a Louisville driveway pressure wash take?", a:"A standard Louisville driveway typically takes 1–2 hours. We can usually combine driveway and patio/deck cleaning in a single visit for a complete exterior refresh." }
        ]
    },
    "luxury-estate-cleaning": {
        desc: "White-glove luxury estate cleaning in Louisville, KY. For discerning homeowners. Custom plans, insured & bonded. Call (502) 835-1870.",
        extra: "Louisville's finest estates require a cleaning partner with the discretion, expertise, and white-glove standards to match — our luxury estate team is handpicked and fully trained on high-end finishes.",
        faqs: [
            { q:"What makes your luxury estate cleaning in Louisville different?", a:"Our luxury estate service features handpicked senior cleaners trained on marble, natural stone, custom hardwood, and delicate surfaces. We follow a white-glove checklist and treat your estate with absolute care and discretion." },
            { q:"Do you offer customized cleaning plans for Louisville luxury homes?", a:"Yes! Every luxury estate is unique. We do a walkthrough of your Louisville property, identify specific needs, and create a fully customized cleaning plan — including which rooms, products, and frequency you prefer." },
            { q:"Can I trust your team inside my luxury Louisville home unsupervised?", a:"Absolutely. All luxury estate team members undergo thorough background checks, sign confidentiality agreements, and carry full insurance. Your privacy and security are paramount." }
        ]
    },
    "laundry-services": {
        desc: "Laundry services in Louisville, KY. Wash, dry, fold & more. Add-on to any cleaning visit. Convenient & affordable. Call (502) 835-1870.",
        extra: "Our Louisville laundry service takes one more task off your plate — we wash, dry, and fold your laundry as part of your cleaning visit so you come home to a fully refreshed home.",
        faqs: [
            { q:"Do you offer laundry service as part of a Louisville home clean?", a:"Yes! Laundry is a popular add-on to our regular Louisville cleaning service. We wash, dry, and fold your laundry during the cleaning visit — just leave the instructions and we handle the rest." },
            { q:"Do you use the client's washer/dryer or bring your own?", a:"We use your washer and dryer so your clothes are washed exactly as you prefer. Just let us know your preferred settings, detergent, and any special instructions." },
            { q:"Can I add laundry service to a recurring Louisville cleaning plan?", a:"Absolutely! Many of our recurring Louisville cleaning clients add laundry to every visit. It's a seamless, cost-effective way to keep your entire home running smoothly." }
        ]
    },
    "detailing": {
        desc: "Professional detailing services in Louisville, KY. Vehicles, upholstery & more. Spot-on results every time. Call (502) 835-1870 for a quote.",
        extra: "From vehicle interiors to fine upholstery, our Louisville detailing service uses pro-grade equipment and specialized treatments to restore surfaces to showroom condition.",
        faqs: [
            { q:"What does your Louisville detailing service include?", a:"Our Louisville detailing covers interior vacuuming, upholstery cleaning, leather conditioning, surface wipe-downs, glass cleaning, and odor elimination — bringing any interior back to pristine condition." },
            { q:"Do you detail car interiors at Louisville homes?", a:"Yes! We come to you. Our mobile detailing team can clean your vehicle's interior at your Louisville home or office — no need to drive anywhere or wait at a shop." },
            { q:"Can you remove tough stains from upholstery in Louisville?", a:"Yes! We use professional enzyme cleaners and hot water extraction to tackle tough stains on car seats, boat interiors, and home upholstery throughout Louisville." }
        ]
    },
    "commercial-cleaning": {
        desc: "Commercial cleaning services in Louisville, KY. Offices, retail, warehouses & more. Bonded, insured & experienced. Call (502) 835-1870.",
        extra: "Louisville businesses trust 502 Star Service for consistent, professional commercial cleaning that keeps workplaces spotless, hygienic, and ready for employees and customers every day.",
        faqs: [
            { q:"What types of businesses do you clean commercially in Louisville?", a:"We clean offices, retail stores, medical facilities, warehouses, restaurants, schools, gyms, churches, and industrial facilities throughout Louisville and Jefferson County." },
            { q:"Do you offer after-hours commercial cleaning in Louisville?", a:"Yes! We schedule most Louisville commercial cleaning after business hours — evenings and weekends — so your operations are never disrupted. We work around your schedule." },
            { q:"Are you insured and bonded for Louisville commercial cleaning?", a:"Absolutely. 502 Star Service carries full commercial liability insurance and bonding. We're fully compliant for commercial contracts in Louisville and Jefferson County." }
        ]
    },
    "office-janitorial": {
        desc: "Office janitorial services in Louisville, KY. Daily, weekly or monthly. Professional & reliable. Free commercial quote: (502) 835-1870.",
        extra: "A clean office is a productive office — our Louisville janitorial teams maintain your workspace to a consistently high standard with customized schedules that minimize workplace disruption.",
        faqs: [
            { q:"What's typically included in office janitorial service in Louisville?", a:"Our Louisville office janitorial service includes trash removal, restroom sanitation, vacuuming/mopping all floors, surface disinfection, kitchen cleaning, and glass door/window wiping — fully customizable per your office layout." },
            { q:"Can you provide janitorial service to large Louisville office buildings?", a:"Yes! We service small suites and large multi-floor office buildings throughout Louisville. Our commercial team scales to meet the exact square footage and frequency you need." },
            { q:"How do I get a janitorial quote for my Louisville office?", a:"Call (502) 835-1870 or fill out our online quote form. We'll schedule a free walkthrough of your Louisville office and provide a detailed, transparent janitorial proposal within 24 hours." }
        ]
    },
    "janitorial-cleaning": {
        desc: "Janitorial cleaning services in Louisville, KY. Commercial grade for businesses of all sizes. Licensed & bonded. Call (502) 835-1870 today.",
        extra: "Our Louisville janitorial cleaning teams are fully trained, equipped with commercial-grade products, and available on daily, weekly, or custom schedules for facilities of all types and sizes.",
        faqs: [
            { q:"What's the difference between janitorial and standard commercial cleaning in Louisville?", a:"Janitorial service in Louisville refers to routine, frequent cleaning (daily or several times per week) to maintain hygiene — trash, restrooms, floors. Commercial deep cleaning is more periodic and thorough. We offer both." },
            { q:"Do you provide janitorial services to Louisville industrial facilities?", a:"Yes! We serve industrial and manufacturing facilities throughout Louisville, providing compliant, safety-conscious janitorial cleaning that meets OSHA hygiene standards." },
            { q:"Can I customize my Louisville janitorial schedule?", a:"Absolutely. Every Louisville janitorial contract is customized to your facility's visit frequency, specific areas, cleaning standards, and operating hours. We work around your business." }
        ]
    },
    "medical-facility-cleaning": {
        desc: "Medical facility cleaning in Louisville, KY. HIPAA-aware, infection-control protocols. Clinics, labs & offices. Call (502) 835-1870.",
        extra: "Louisville medical facilities demand CDC-compliant disinfection protocols — our trained medical cleaning specialists use hospital-grade disinfectants and strict procedures to protect patients and staff.",
        faqs: [
            { q:"Are your Louisville cleaners trained for medical facility sanitation?", a:"Yes. Our medical facility cleaning team in Louisville is specifically trained in infection control procedures, cross-contamination prevention, and the use of EPA-registered hospital-grade disinfectants." },
            { q:"What medical facilities do you clean in Louisville?", a:"We clean medical offices, dental practices, urgent care clinics, labs, therapy centers, and other healthcare facilities throughout Louisville — always meeting or exceeding hygiene and safety standards." },
            { q:"Do your Louisville medical cleaning services comply with health regulations?", a:"Yes. Our protocols align with CDC healthcare environmental cleaning guidelines. We document cleaning procedures and use color-coded equipment to prevent cross-contamination between zones." }
        ]
    },
    "industrial-warehouse-cleaning": {
        desc: "Industrial & warehouse cleaning in Louisville, KY. Heavy-duty, safety-compliant. Large facility specialists. Call (502) 835-1870 for a quote.",
        extra: "Louisville's diverse industrial base demands cleaning partners who can handle concrete floors, machinery surroundings, loading docks, and high-bay areas safely and efficiently — that's exactly what we do.",
        faqs: [
            { q:"What industrial cleaning equipment do you use in Louisville warehouses?", a:"We use commercial-grade auto-scrubbers, pressure washers, industrial vacuums, and floor buffers appropriate for Louisville warehouse and industrial facility floor care and area cleaning." },
            { q:"Is industrial warehouse cleaning in Louisville OSHA-safe?", a:"Yes. Our Louisville industrial cleaning team follows all OSHA safety protocols including proper chemical handling, PPE usage, and safe work practices in active industrial environments." },
            { q:"How often should Louisville warehouses be professionally cleaned?", a:"Most Louisville distribution centers and warehouses benefit from weekly deep floor cleaning plus daily high-touch surface sanitation. We'll tailor a plan to your facility's traffic and industry standards." }
        ]
    },
    "floor-stripping-waxing": {
        desc: "Floor stripping & waxing services in Louisville, KY. VCT, tile & commercial floors. High-gloss results. Call (502) 835-1870 for a free quote.",
        extra: "Louisville's commercial floors take constant abuse — our floor stripping and waxing service removes old, yellowed finish and applies fresh coats that protect floors and restore that high-gloss professional shine.",
        faqs: [
            { q:"What floor types do you strip and wax in Louisville?", a:"We strip and wax VCT (vinyl composition tile), linoleum, luxury vinyl plank, and composite commercial floors throughout Louisville. We do not wax natural stone or hardwood — those have specialized treatments." },
            { q:"How long does floor stripping & waxing take in a Louisville business?", a:"Most standard-sized Louisville commercial floors (1,000–5,000 sq ft) are completed overnight in one visit. Larger facilities may require multiple nights. We minimize disruption to your operations." },
            { q:"How often should Louisville commercial floors be stripped and waxed?", a:"Most Louisville commercial floors should be stripped and re-waxed 1–2 times per year with routine buffing in between to maintain the finish and protect the floor investment." }
        ]
    },
    "gym-fitness-cleaning": {
        desc: "Gym & fitness center cleaning in Louisville, KY. Equipment, locker rooms & weight floors. Sanitized for safety. Call (502) 835-1870.",
        extra: "Louisville gyms and fitness centers require the highest hygiene standards — our specialized gym cleaning service disinfects all equipment, locker rooms, and floor surfaces to keep your members healthy and coming back.",
        faqs: [
            { q:"What does your Louisville gym cleaning service cover?", a:"We clean and disinfect all fitness equipment (machines, free weights, benches), locker rooms, showers, restrooms, floor mats, and common areas using EPA-approved disinfectants that are safe for gym environments." },
            { q:"How often should a Louisville gym be professionally cleaned?", a:"For member safety, most Louisville fitness centers should be cleaned daily, with deep equipment sanitization weekly and locker room deep scrubs monthly. We offer all-in-one packages." },
            { q:"Do you clean Louisville gyms after hours?", a:"Yes! We schedule all Louisville gym and fitness center cleaning after closing hours so members are never exposed to wet floors or cleaning chemicals during operations." }
        ]
    },
    "school-daycare-cleaning": {
        desc: "School & daycare cleaning in Louisville, KY. Child-safe products. Germ-reducing sanitation. Licensed & insured. Call (502) 835-1870.",
        extra: "Louisville schools and daycares require extra vigilance against germs — our child-safe cleaning protocols use non-toxic, EPA-registered disinfectants to protect the health of every student and child in your care.",
        faqs: [
            { q:"Are your Louisville school cleaning products safe for children?", a:"Absolutely. We exclusively use child-safe, non-toxic, EPA-registered disinfectants in Louisville schools and daycares. All products are free from harsh chemicals and fumes that could harm children." },
            { q:"Do you clean Louisville daycares and preschools after hours?", a:"Yes. We schedule all Louisville school and daycare cleaning after children leave — evenings or early mornings — so classrooms and play areas are fully sanitized and dry before the next school day." },
            { q:"What areas of a Louisville school does your cleaning cover?", a:"We cover classrooms, hallways, restrooms, cafeterias, gymnasiums, offices, and outdoor play area surfaces — a comprehensive Louisville school sanitation program tailored to your facility size and schedule." }
        ]
    },
    "church-worship-cleaning": {
        desc: "Church & worship center cleaning in Louisville, KY. Respectful, thorough & affordable. Sanctuaries, halls & offices. Call (502) 835-1870.",
        extra: "Louisville's diverse faith communities deserve a cleaning partner who approaches their sacred spaces with respect and care — our church cleaning team treats every sanctuary and fellowship hall with the reverence it deserves.",
        faqs: [
            { q:"Do you clean sanctuaries and pews in Louisville churches?", a:"Yes. Our Louisville church cleaning service covers sanctuaries, pews, altars, aisles, choir areas, baptismal spaces, fellowship halls, classrooms, and restrooms — a complete worship center cleaning solution." },
            { q:"Are your Louisville church cleaning services affordable for nonprofits?", a:"We offer competitive, nonprofit-friendly pricing for Louisville churches and faith-based organizations. Contact us to discuss a plan that fits your congregation's cleaning needs and budget." },
            { q:"How do you handle religious artifacts and sacred items during cleaning?", a:"Our Louisville church cleaning team is trained to clean around and carefully handle religious artifacts, artwork, and sacred items with complete respect and careful technique." }
        ]
    },
    "solar-panel-cleaning": {
        desc: "Solar panel cleaning in Louisville, KY. Maximize energy output. Safe, streak-free cleaning. Residential & commercial. Call (502) 835-1870.",
        extra: "Dirty solar panels in Louisville can lose 15–25% efficiency — our professional solar panel cleaning service safely removes pollen, bird droppings, and grime to maximize your system's energy output and ROI.",
        faqs: [
            { q:"Why is solar panel cleaning important for Louisville homeowners?", a:"Louisville's pollen, bird droppings, and seasonal grime can reduce solar panel efficiency by 15–25%. Regular professional cleaning maximizes energy output and extends the life of your investment." },
            { q:"Is it safe to clean solar panels on a Louisville roof?", a:"Our Louisville solar panel cleaning specialists are trained in rooftop safety and use deionized, purified water with soft brushes to clean panels without scratching or voiding warranties." },
            { q:"How often should Louisville solar panels be cleaned?", a:"Most Louisville solar panel owners benefit from cleaning 2–4 times per year — particularly in spring (pollen season) and fall. We'll recommend a schedule based on your panel size and environment." }
        ]
    },
    "vacation-rental-cleaning": {
        desc: "Vacation rental cleaning in Louisville, KY. Fast turnover, guest-ready every time. Reliable 5-star standard. Call (502) 835-1870 for a quote.",
        extra: "Louisville vacation rental owners rely on us for fast, thorough turnovers that earn 5-star guest reviews — our dedicated turnover team ensures linens, kitchens, and bathrooms are perfect for every check-in.",
        faqs: [
            { q:"Do you offer same-day turnover cleaning for Louisville vacation rentals?", a:"Yes! We specialize in rapid turnover cleaning for Louisville short-term rentals. Same-day turnovers are available for most properties — just notify us of check-out and check-in times and we'll handle the rest." },
            { q:"Will vacation rental cleaning in Louisville help my Airbnb star rating?", a:"Absolutely. Cleanliness is the #1 factor in guest reviews. Our Louisville vacation rental clients consistently earn 5-star cleanliness ratings after switching to our professional turnover service." },
            { q:"What does a vacation rental turnover clean include in Louisville?", a:"Our Louisville turnover clean includes full bathroom sanitization, kitchen cleaning (inside microwave & appliances), fresh linen change and bed-making, restocking guest supplies, and a complete inspection before the next guest arrives." }
        ]
    },
    "airbnb-cleaning": {
        desc: "Expert Airbnb cleaning in Louisville, KY. 5-star ready every turnover. Fast & reliable. Connects with Airbnb app. Call (502) 835-1870.",
        extra: "Louisville Airbnb hosts trust 502 Star Service for consistent 5-star turnovers — we know what guests inspect first and ensure your listing earns SuperHost status through impeccable cleanliness.",
        faqs: [
            { q:"How does Airbnb cleaning work in Louisville with 502 Star Service?", a:"We coordinate with your Airbnb calendar — when a guest checks out, we're there. We turn the property around to hotel-quality standard, replace linens, restock supplies, and have it ready before the next guest arrives." },
            { q:"Can you help my Louisville Airbnb achieve SuperHost status?", a:"Consistent 5-star cleanliness is one of the key requirements for SuperHost status. Our Louisville Airbnb cleaning clients report dramatically improved guest cleanliness scores after partnering with us." },
            { q:"Do you stock and replace Airbnb guest supplies in Louisville?", a:"Yes! We can restock toilet paper, soap, shampoo, paper towels, and other essentials with each turnover for Louisville hosts. We charge only cost for supplies — no markup." }
        ]
    },
    "airbnb-rental-management": {
        desc: "Airbnb & rental management in Louisville, KY. Full-service hosting support. Turnovers, restocking & inspections. Call (502) 835-1870.",
        extra: "Louisville short-term rental management is our specialty — from turnover cleaning and guest supply management to property inspection reports, we handle every detail so you earn passive income stress-free.",
        faqs: [
            { q:"What does full Airbnb rental management include in Louisville?", a:"Our Louisville rental management package covers turnover cleaning, linen service, guest supply restocking, property condition reports with photos, and direct coordination with your booking calendar — a complete hosting solution." },
            { q:"Can you manage multiple Airbnb properties in Louisville?", a:"Yes! We currently manage multiple short-term rental properties across Louisville. Bulk property discounts are available for hosts with 3 or more Louisville listings." },
            { q:"Is it worth hiring a rental manager for my Louisville Airbnb?", a:"Absolutely. Louisville short-term rental hosts who use professional management consistently earn higher ratings, achieve lower vacancy, and save enormous amounts of time compared to self-managing." }
        ]
    },
    "post-construction-cleanup": {
        desc: "Post-construction cleanup in Louisville, KY. Dust, debris & residue removal. Builder-grade standard. Free quote: (502) 835-1870.",
        extra: "Louisville construction cleanup requires specialized equipment and techniques to safely remove drywall dust, joint compound residue, adhesive, and construction debris from every surface without damaging new finishes.",
        faqs: [
            { q:"What does post-construction cleanup include in Louisville?", a:"Our Louisville post-construction cleanup removes all construction dust from every surface, cleans drywall dust from vents, wipes adhesive residue, removes stickers from windows/fixtures, cleans all surfaces, and does a final detail pass — leaving your new space move-in ready." },
            { q:"How long does post-construction cleanup take in Louisville?", a:"Timeline depends on the size of the project. A typical new Louisville home construction cleanup takes 1–2 days. Major renovations may need a phase-1 rough clean followed by a final detail clean." },
            { q:"Do you work directly with Louisville builders and contractors?", a:"Yes! We have ongoing partnerships with Louisville home builders and general contractors. We offer competitive post-construction cleanup contracts and can be scheduled directly around your project completion timeline." }
        ]
    },
    "property-management-janitorial": {
        desc: "Property management janitorial services in Louisville, KY. Common areas, lobbies & grounds. Commercial-grade. Call (502) 835-1870.",
        extra: "Louisville property managers rely on us to maintain impeccable common areas, lobbies, stairwells, and exterior grounds across their entire portfolio — ensuring tenants are satisfied and property value is protected.",
        faqs: [
            { q:"What does property management janitorial service cover in Louisville?", a:"We cover all common areas: lobbies, hallways, stairwells, elevators, parking garages, laundry rooms, and outdoor common spaces across Louisville apartment communities and commercial properties." },
            { q:"Can you service multiple Louisville properties under one contract?", a:"Yes! We work with Louisville property management companies overseeing multiple properties. Portfolio contracts offer streamlined billing, consistent staff, and competitive multi-property pricing." },
            { q:"How do you handle tenant complaints about building cleanliness in Louisville?", a:"We maintain detailed cleaning logs and respond to all property manager requests within 24 hours. Tenant satisfaction surveys are available so you can monitor cleanliness quality in real time." }
        ]
    },
    "property-maintenance": {
        desc: "Property maintenance services in Louisville, KY. Cleaning, upkeep & inspections. Landlord & investor focused. Call (502) 835-1870.",
        extra: "Louisville landlords and investors trust 502 Star Service for comprehensive property maintenance that keeps units rent-ready, protects property value, and minimizes time-consuming management headaches.",
        faqs: [
            { q:"What property maintenance services do you offer in Louisville?", a:"We offer unit turnover cleaning, between-tenant deep cleans, common area maintenance, carpet cleaning, window washing, post-repair cleaning, and pre-inspection cleaning for Louisville rental properties." },
            { q:"Can 502 Star Service help me prepare a Louisville rental for a new tenant?", a:"Absolutely. Our Louisville rental turnover service includes a deep clean, carpet treatment, window cleaning, and a detailed inspection report — ensuring your unit is show-ready and rent-ready in one visit." },
            { q:"Do you work with Louisville real estate investors?", a:"Yes! We're a trusted partner for Louisville real estate investors managing fix-and-flip projects, rental portfolios, and new acquisitions. Contact us to discuss a tailored property maintenance plan." }
        ]
    },
    "home-watch-services": {
        desc: "Home watch services in Louisville, KY. We check your home while you're away. Scheduled inspections & reports. Call (502) 835-1870.",
        extra: "Louisville homeowners who travel frequently, snowbirds, and absentee owners rely on our home watch service to monitor their property, catch issues early, and ensure their home is safe and secure.",
        faqs: [
            { q:"What does a Louisville home watch visit include?", a:"Our Louisville home watch visits include a full interior and exterior inspection covering HVAC, plumbing, windows, doors, signs of pests, pool/outdoor areas, and security. We document everything with photos and send you a same-day report." },
            { q:"How often should I schedule home watch in Louisville while I'm away?", a:"We recommend weekly visits for Louisville homes left unoccupied for extended periods. Monthly is the minimum for shorter absences. We tailor frequency to your home type, season, and risk factors." },
            { q:"What happens if your Louisville home watch team finds a problem?", a:"We immediately notify you with photos and our assessment. With your permission, we can coordinate vetted local contractors in Louisville to address issues quickly, keeping you in control from anywhere." }
        ]
    },
    "luxury-estate-management": {
        desc: "Luxury estate management in Louisville, KY. Complete property care for discerning owners. Cleaning, maintenance & oversight. Call (502) 835-1870.",
        extra: "Louisville's premier luxury estates require a management partner with the standards, training, and discretion to maintain them at the highest level — 502 Star Service delivers white-glove estate management that reflects your lifestyle.",
        faqs: [
            { q:"What's included in luxury estate management in Louisville?", a:"Our Louisville luxury estate management covers all cleaning services, grounds oversight coordination, seasonal preparation, vendor management, security checks, inventory maintenance, and bespoke scheduling — fully comprehensive care for your estate." },
            { q:"How is luxury estate management different from standard cleaning in Louisville?", a:"Estate management is a holistic, ongoing property care partnership — not just cleaning visits. It includes oversight of all property systems, vendor coordination, preventive care scheduling, and personalized service beyond what standard cleaning covers." },
            { q:"Do you sign NDAs for Louisville luxury estate management clients?", a:"Yes. We regularly sign non-disclosure agreements for high-profile Louisville estate clients who require total privacy and confidentiality regarding their property and personal affairs." }
        ]
    },
    "gutter-cleaning": {
        desc: "Gutter cleaning services in Louisville, KY. Remove clogs, debris & leaves. Protect your home's foundation. Call (502) 835-1870 for a quote!",
        extra: "Louisville's dense tree canopy means gutters clog fast — our professional gutter cleaning service removes packed leaves, seedpods, and debris so water flows freely and protects your home from costly foundation damage.",
        faqs: [
            { q:"Why is gutter cleaning important for Louisville homeowners?", a:"Louisville's abundant trees drop leaves, seeds, and debris that quickly clog gutters. Clogged gutters cause water overflow that damages fascia boards, soffits, siding, landscaping, and foundations — all very expensive repairs." },
            { q:"How often should gutters be cleaned in Louisville, KY?", a:"Louisville homeowners should clean gutters at least twice a year — once in late fall after leaves have fallen and once in spring. Heavily wooded properties may need 3–4 cleanings per year." },
            { q:"Do you inspect gutters for damage during Louisville gutter cleaning?", a:"Yes! During every Louisville gutter cleaning, we visually inspect for loose hangers, separating seams, and sagging sections. We'll note any issues found and recommend repair before they become major problems." }
        ]
    }
};

// ─── FUNCTIONS ────────────────────────────────────────────────────────────────

function seededRandom(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) { hash = ((hash << 5) - hash) + str.charCodeAt(i); hash |= 0; }
    return function() {
        let t = hash += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

const spintax = {
    intros: [
        "At 502 Star Service, we understand that finding reliable and meticulous cleaning services is crucial.",
        "When it comes to maintaining a pristine environment, 502 Star Service is the name you can trust.",
        "Discover the difference that professional attention to detail makes with 502 Star Service.",
        "Your space deserves the best care possible, and that's exactly what 502 Star Service provides.",
        "Experience a new standard of cleanliness with the dedicated professionals at 502 Star Service."
    ],
    middles: [
        "By leveraging advanced cleaning techniques and eco-friendly products, we ensure your property is not just visually clean, but fundamentally sanitized and healthy.",
        "Our team utilizes industry-leading equipment and sustainable solutions to deliver a deep, comprehensive clean that protects your health and your investment.",
        "We combine proven methodologies with meticulous execution to create spaces that look impeccable and feel refreshingly pristine.",
        "Through our rigorous standards and premium supplies, we guarantee an exceptional outcome that elevates the comfort and safety of your environment.",
        "Going beyond the surface, our approach focuses on eliminating hidden dust and allergens to promote a truly revitalized space."
    ],
    bullets: [
        ["Highly trained, background-checked professionals.", "Customized cleaning plans tailored to your schedule.", "100% Satisfaction Guarantee on all services."],
        ["Vetted, experienced, and trustworthy cleaning staff.", "Flexible scheduling that works around your life.", "Commitment to eco-friendly, safe cleaning products."],
        ["Dedicated teams consistently delivering top-tier results.", "Transparent pricing with no hidden fees.", "Fully licensed, bonded, and insured for your peace of mind."],
        ["Meticulous attention to every corner and crevice.", "Prompt, reliable, and communicative customer service.", "State-of-the-art equipment for maximum efficiency."],
        ["Local experts who care about our community.", "Rapid response times for urgent cleaning needs.", "Tailored checklists to ensure your specific priorities are met."]
    ]
};

function buildNavLinks(prefix) {
    const svcLinks = services.map(s =>
        `<a href="${prefix}${s.id}/" class="px-5 py-2.5 bg-gray-50 hover:bg-teal-600 text-gray-700 hover:text-white rounded-full transition-all text-sm font-medium shadow-sm hover:shadow-md text-center block w-full">${s.title}</a>`
    );
    const locLinks = locations.map(l =>
        `<a href="${prefix}${l.id}/" class="text-sm text-gray-600 hover:text-teal-600 hover:font-medium transition-all flex items-center gap-2"><i data-lucide="map-pin" class="w-3 h-3"></i> ${l.title}</a>`
    );
    // Split services into 3 columns
    const col1 = svcLinks.slice(0,10).join('\n');
    const col2 = svcLinks.slice(10,20).join('\n');
    const col3 = svcLinks.slice(20).join('\n');
    const locGrid = locLinks.join('\n');
    return { col1, col2, col3, locGrid };
}

function buildPage(type, data, opts) {
    const isLocal = type === 'location';
    const keyword  = isLocal ? "Cleaning Services" : data.title;
    const locStr   = isLocal ? data.title : "Louisville, KY";
    const unique   = isLocal ? locationData[data.id] : serviceData[data.id];

    const pageTitle = isLocal
        ? `#1 Cleaning Services in ${data.title}, KY | 502 Star Service`
        : `${data.title} in Louisville, KY | 502 Star Service`;
    const pageDesc  = unique ? unique.desc : `502 Star Service provides professional ${keyword.toLowerCase()} in ${locStr}. Licensed, bonded & 5-star rated. Call (502) 835-1870 for a free quote!`;
    const canonical = `https://www.502starservices.com/${data.id}/`;

    const bannerImage = isLocal
        ? 'images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg'
        : (data.img || 'images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg');

    const rng       = seededRandom(data.id);
    const introText = spintax.intros[Math.floor(rng() * spintax.intros.length)];
    const midText   = spintax.middles[Math.floor(rng() * spintax.middles.length)];
    const bullets   = spintax.bullets[Math.floor(rng() * spintax.bullets.length)];
    const extraText = unique ? unique.extra : '';

    // Build FAQs
    const pageFaqs = unique && unique.faqs ? unique.faqs : [
        { q:`What cleaning services does 502 Star Service provide?`, a:`We offer a full range of residential and commercial cleaning services in Louisville, KY including house cleaning, deep cleaning, carpet cleaning, commercial cleaning, and much more.` },
        { q:`Are your Louisville cleaners insured and background-checked?`, a:`Yes. All 502 Star Service team members are fully insured, bonded, and have passed thorough background checks for your complete peace of mind.` },
        { q:`How do I get a cleaning quote in Louisville, KY?`, a:`Call (502) 835-1870 or fill out our online quote form. We respond quickly and provide free, no-obligation estimates for all services in Louisville and Jefferson County.` }
    ];

    // Schema FAQPage entries
    const faqSchemaItems = pageFaqs.map(f =>
        `{"@type":"Question","name":${JSON.stringify(f.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(f.a)}}}`
    ).join(',');

    // Build service-specific or location-specific schema piece
    const extraSchema = isLocal
        ? `{"@type":"LocalBusiness","@id":"${canonical}#localbusiness","name":"502 Star Service — ${data.title}","url":"${canonical}","areaServed":{"@type":"City","name":"${data.title}","containedInPlace":{"@type":"State","name":"Kentucky"}},"telephone":"502-835-1870","priceRange":"$$","image":"https://www.502starservices.com/images/logo.webp"}`
        : `{"@type":"Service","@id":"${canonical}#service","name":${JSON.stringify(data.title)},"serviceType":${JSON.stringify(data.title)},"provider":{"@id":"https://www.502starservices.com/#organization"},"areaServed":{"@type":"City","name":"Louisville","containedInPlace":{"@type":"State","name":"Kentucky"}},"description":${JSON.stringify(pageDesc)}}`;

    // Internal cross-linking section
    const crossLinkSection = isLocal
        ? `<!-- Services We Offer in ${data.title} -->
<section class="py-16 bg-teal-50 border-t border-teal-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900 mb-3">Our Services in ${data.title}</h2>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">From home cleaning to commercial janitorial — we cover every cleaning need in ${data.title}, KY.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      ${services.map(s=>`<a href="../${s.id}/" class="flex items-center gap-2 bg-white hover:bg-teal-600 text-gray-700 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all border border-teal-50"><i data-lucide="sparkles" class="w-3.5 h-3.5 shrink-0"></i>${s.title}</a>`).join('\n      ')}
    </div>
  </div>
</section>`
        : `<!-- Areas We Serve for ${data.title} -->
<section class="py-16 bg-teal-50 border-t border-teal-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-10">
      <h2 class="text-3xl font-bold text-gray-900 mb-3">${data.title} Available Throughout Louisville</h2>
      <p class="text-gray-600 text-lg max-w-2xl mx-auto">We bring our professional ${data.title.toLowerCase()} service to every Louisville neighborhood — click your area below.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      ${locations.map(l=>`<a href="../${l.id}/" class="flex items-center gap-2 bg-white hover:bg-teal-600 text-gray-700 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all border border-teal-50 justify-center"><i data-lucide="map-pin" class="w-3.5 h-3.5 shrink-0"></i>${l.title}</a>`).join('\n      ')}
    </div>
  </div>
</section>`;

    // FAQ HTML section
    const faqHtml = pageFaqs.map((f, i) => `
            <div class="accordion-item border-b border-gray-100 last:border-0">
                <button class="accordion-header w-full py-5 flex justify-between items-center text-left gap-4 group">
                    <span class="font-semibold text-gray-900 text-[17px]">${f.q}</span>
                    <i data-lucide="chevron-down" class="w-5 h-5 text-teal-600 shrink-0 transition-transform duration-300"></i>
                </button>
                <div class="accordion-content max-h-0 overflow-hidden opacity-0">
                    <p class="pb-5 text-gray-600 leading-relaxed">${f.a}</p>
                </div>
            </div>`).join('');

    const nav = opts.nav;
    const css = opts.css;
    const footer = opts.footer;
    const seoBlock = opts.seoBlock;

    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDesc}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" type="image/jpeg" href="../images/logo.webp" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDesc}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="502 Star Service" />
    <meta property="article:modified_time" content="2026-03-19T17:00:00+00:00" />
    <meta property="og:image" content="https://www.502starservices.com/images/logo.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="google-site-verification" content="xmGae3ujVfInVGbCGAuESkICJXZZOKLj7iISf8ZkfKI" />
    <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"${canonical}","url":"${canonical}","name":${JSON.stringify(pageTitle)},"isPartOf":{"@id":"https://www.502starservices.com/#website"},"about":{"@id":"https://www.502starservices.com/#organization"},"datePublished":"2024-09-09T04:55:10+00:00","dateModified":"2026-03-19T17:00:00+00:00","description":${JSON.stringify(pageDesc)},"breadcrumb":{"@id":"${canonical}#breadcrumb"},"inLanguage":"en-US"},{"@type":"BreadcrumbList","@id":"${canonical}#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.502starservices.com/"},{"@type":"ListItem","position":2,"name":${JSON.stringify(data.title)}}]},{"@type":"WebSite","@id":"https://www.502starservices.com/#website","url":"https://www.502starservices.com/","name":"502 Star Service","description":"Discover the Art of Clean Living","publisher":{"@id":"https://www.502starservices.com/#organization"},"inLanguage":"en-US"},{"@type":"LocalBusiness","@id":"https://www.502starservices.com/#organization","name":"502 Star Service","url":"https://www.502starservices.com/","telephone":"502-835-1870","openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"18:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday"],"opens":"09:00","closes":"16:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":["Sunday"],"opens":"09:00","closes":"15:00"}],"address":{"@type":"PostalAddress","addressCountry":"US","addressLocality":"Louisville","addressRegion":"KY"},"logo":{"@type":"ImageObject","url":"https://www.502starservices.com/images/logo.webp","width":500,"height":500}},${extraSchema},{"@type":"FAQPage","mainEntity":[${faqSchemaItems}]}]}</script>
    ${css}
</head>
<body class="font-sans antialiased overflow-x-hidden pt-20 bg-gray-50">

    <!-- GLOBAL HEADER INCLUSION FLAG -->
    ${nav}

    <main>

    <!-- Hero Section -->
    <section class="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-teal-900">
        <div id="bubbles-container" class="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>
        <div class="absolute inset-0 z-0">
            <img src="../${bannerImage}" alt="${data.title} - 502 Star Service Louisville KY" class="w-full h-full object-cover opacity-70 mix-blend-overlay" width="1200" height="800" />
            <div class="absolute inset-0 bg-gradient-to-t from-teal-900/95 via-gray-900/60 to-gray-900/80"></div>
        </div>
        <div class="relative z-10 max-w-5xl mx-auto px-4 text-center reveal pt-12">
            <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
                <i data-lucide="star" class="w-5 h-5 text-accent-yellow fill-current"></i>
                <span class="text-white font-medium text-sm">5.0 Rating · Louisville's #1 Cleaning Service</span>
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                ${isLocal ? `Best Cleaning Services in ${data.title}, KY` : `${data.title} in Louisville, KY`}
            </h1>
            <p class="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto font-semibold">
                <b>We Clean So You Don't Have To! — 502 Star Service</b>
            </p>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
                For a free estimate or to schedule service, call, text, or book online today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:5028351870" class="group w-full sm:w-auto bg-accent-yellow text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2">
                    <i data-lucide="phone" class="w-5 h-5"></i> Call Now
                </a>
                <a href="#quote" class="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-2xl flex items-center justify-center gap-2">
                    Get Free Quote <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Main Content Layout -->
    <section id="quote" class="py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-3 gap-12">

                <!-- Left Content Block -->
                <div class="lg:col-span-2 space-y-10">

                    <!-- Primary Why-Choose Box -->
                    <div class="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal border border-gray-100">
                        <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose 502 Star Service for ${keyword} in ${locStr}?</h2>
                        <div class="prose prose-lg text-gray-600">
                            <p class="mb-4">${introText} Our <strong>${keyword}</strong> is designed to exceed expectations and deliver a spotless environment every single time.</p>
                            <p class="mb-4">${midText}</p>
                            ${extraText ? `<p class="mb-8 text-gray-700 font-medium border-l-4 border-teal-500 pl-4 italic">${extraText}</p>` : ''}
                            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"><i data-lucide="sparkles" class="text-teal-600"></i> What Sets Us Apart</h3>
                            <ul class="space-y-3 list-none">
                                <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="text-teal-600 shrink-0 mt-1"></i> ${bullets[0]}</li>
                                <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="text-teal-600 shrink-0 mt-1"></i> ${bullets[1]}</li>
                                <li class="flex items-start gap-3"><i data-lucide="check-circle-2" class="text-teal-600 shrink-0 mt-1"></i> ${bullets[2]}</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Trust Signals -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
                        <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                            <i data-lucide="shield-check" class="w-8 h-8 text-teal-600 mx-auto mb-2"></i>
                            <p class="font-bold text-gray-900 text-sm">Licensed &amp; Insured</p>
                        </div>
                        <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                            <i data-lucide="star" class="w-8 h-8 text-accent-yellow mx-auto mb-2 fill-current"></i>
                            <p class="font-bold text-gray-900 text-sm">5-Star Rated</p>
                        </div>
                        <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                            <i data-lucide="leaf" class="w-8 h-8 text-teal-600 mx-auto mb-2"></i>
                            <p class="font-bold text-gray-900 text-sm">Eco-Friendly</p>
                        </div>
                        <div class="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                            <i data-lucide="clock" class="w-8 h-8 text-teal-600 mx-auto mb-2"></i>
                            <p class="font-bold text-gray-900 text-sm">Fast Response</p>
                        </div>
                    </div>

                    <!-- FAQ Section -->
                    <div class="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal border border-gray-100">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div class="space-y-0 divide-y divide-gray-100">
                            ${faqHtml}
                        </div>
                    </div>

                </div>

                <!-- Right Sidebar Form -->
                <div class="lg:col-span-1">
                    <div class="sticky top-28 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,165,166,0.1)] border-2 border-teal-50 reveal">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                        <p class="text-gray-500 text-sm mb-6">We respond within 2 hours — fast, free &amp; no-obligation!</p>
                        <form id="quote-form" class="space-y-4" action="https://formspree.io/f/mrgwjqrk" method="POST">
                            <div><input type="text" name="name" aria-label="Full Name" required class="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Full Name"></div>
                            <div><input type="tel" name="phone" aria-label="Phone Number" required class="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Phone Number"></div>
                            <div><input type="email" name="email" aria-label="Email Address" required class="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Email Address"></div>
                            <div><input type="text" name="service" aria-label="Service Needed" class="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Service Needed" value="${data.title}"></div>
                            <div><textarea rows="3" name="message" aria-label="Additional Details" class="w-full px-4 py-3 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none" placeholder="Details about your space..."></textarea></div>
                            <button type="submit" class="w-full bg-teal-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-800 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                Send Request <i data-lucide="send"></i>
                            </button>
                        </form>
                        <div id="success-message" class="hidden text-teal-800 font-bold text-center py-4 bg-teal-50 rounded-xl mt-4 border border-teal-100">
                            <i data-lucide="check-circle" class="w-6 h-6 mx-auto mb-2 text-teal-600"></i>
                            Quote request received!<br>We'll call you shortly.
                        </div>
                        <div class="mt-6 pt-6 border-t border-gray-100 text-center">
                            <a href="tel:5028351870" class="text-teal-700 font-bold text-lg hover:text-teal-900 transition-colors flex items-center justify-center gap-2">
                                <i data-lucide="phone" class="w-5 h-5"></i> (502) 835-1870
                            </a>
                            <p class="text-gray-500 text-xs mt-1">Call or text anytime — 7 days a week</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Targeted Local SEO Content Block -->
    ${seoBlock}

    <!-- Cross-Linking Section -->
    ${crossLinkSection}

    </main>

    <!-- GLOBAL FOOTER INCLUSION FLAG -->
    ${footer}

</body>
</html>`;
}

// ─── RUN ───────────────────────────────────────────────────────────────────────
async function run() {
    console.log('Starting SEO Page Generation...');
    const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

    // Extract nav
    const headerMatch = indexHtml.match(/<!-- Navigation -->[\s\S]*?<!-- Hero Section -->/);
    let nav = headerMatch ? headerMatch[0].replace('<!-- Hero Section -->', '') : '';
    nav = nav.replace(/href="#home"/g, 'href="../index.html#home"');
    nav = nav.replace(/href="#about"/g, 'href="../index.html#about"');
    nav = nav.replace(/href="#reviews"/g, 'href="../index.html#reviews"');
    nav = nav.replace(/href="([a-z0-9-]+)\/"/g, 'href="../$1/"');
    nav = nav.replace(/href="about-us\/"/g, 'href="../about-us/"');
    nav = nav.replace(/href="contact-us\/"/g, 'href="../contact-us/"');

    // Extract CSS
    const cssMatch = indexHtml.match(/<script>\s*tailwind\.config[\s\S]*?<\/style>/);
    const css = cssMatch ? cssMatch[0] : '';

    // Extract SEO block
    const seoMatch = indexHtml.match(/<!-- Targeted Local SEO Content Block -->[\s\S]*?<\/section>/);
    let baseSeoBlock = seoMatch ? seoMatch[0] : '';

    // Extract footer
    const footerMatch = indexHtml.match(/<!-- Modern Full Footer -->[\s\S]*?<\/html>/);
    let footer = footerMatch ? footerMatch[0].replace('</html>', '') : '';
    footer = footer.replace(/href="#home"/g, 'href="../index.html#home"');
    footer = footer.replace(/href="#about"/g, 'href="../index.html#about"');
    footer = footer.replace(/href="([a-z0-9-]+)\/"/g, 'href="../$1/"');
    footer = footer.replace(/href="about-us\/"/g, 'href="../about-us/"');
    footer = footer.replace(/href="contact-us\/"/g, 'href="../contact-us/"');
    footer = footer.replace(/src="images\//g, 'src="../images/');

    function savePage(item, html) {
        // Fix image paths
        html = html.replace(/src="images\//g, 'src="../images/');
        html = html.replace(/href="images\//g, 'href="../images/');
        const dir = path.join(__dirname, item.id);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
    }

    const opts = { nav, css, footer };

    // Generate Service Pages
    for (const s of services) {
        let seoBlock = baseSeoBlock
            .replace(/House Cleaning Services/gi, s.title)
            .replace(/house cleaning services/gi, s.title.toLowerCase())
            .replace(/Louisville KY/g, 'Louisville, KY');
        const html = buildPage('service', s, { ...opts, seoBlock });
        savePage(s, html);
        console.log(`  ✓ ${s.id}/index.html`);
    }

    // Generate Location Pages
    for (const l of locations) {
        let seoBlock = baseSeoBlock
            .replace(/Top-Rated House Cleaning Services in Louisville KY/gi, `Top-Rated Cleaning Services in ${l.title} KY`)
            .replace(/House Cleaning Services/gi, 'Cleaning Services')
            .replace(/house cleaning services/gi, 'cleaning services')
            .replace(/our house cleaning/gi, 'our cleaning')
            .replace(/Louisville, KY/g, `${l.title}, KY`)
            .replace(/\bLouisville\b/g, l.title)
            .replace(/Louisville KY/g, `${l.title} KY`);
        const html = buildPage('location', l, { ...opts, seoBlock });
        savePage(l, html);
        console.log(`  ✓ ${l.id}/index.html`);
    }

    console.log(`\n✅ Successfully generated ${services.length + locations.length} SEO-optimized pages.`);
    console.log('   - Unique meta descriptions per page');
    console.log('   - Unique FAQ sets per page (3 per page)');
    console.log('   - Service schema + Location schema');
    console.log('   - Internal cross-linking sections');
    console.log('   - Updated dateModified: 2026-03-19');
}

run();

