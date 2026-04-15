/**
 * 502 Star Service – SEO Batch Update Script
 * Updates title, meta description, and injects FAQPage+Service schema
 * into all service and neighborhood pages.
 *
 * Run: node seo_batch_update.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.502starservices.com';
const PHONE = '(502) 835-1870';
const PHONE_SCHEMA = '+15028351870';

// ─── SERVICE PAGES ────────────────────────────────────────────────────────────
const servicePages = [
  {
    dir: 'house-cleaning',
    title: 'House Cleaning Louisville KY | Residential Maid Services',
    desc: `Professional house cleaning services in Louisville, KY. Trusted, background-checked cleaners. Eco-friendly products. 100% satisfaction guarantee. Call ${PHONE} for a free quote!`,
    h1keyword: 'House Cleaning Services Louisville KY',
    faqs: [
      { q: 'How much does house cleaning cost in Louisville, KY?', a: `502 Star Service offers transparent flat-rate pricing for house cleaning in Louisville, KY. Pricing depends on home size and service type. Call ${PHONE} for a free, no-obligation quote.` },
      { q: 'How often should I have my house cleaned in Louisville?', a: 'Most Louisville homeowners benefit from bi-weekly cleaning. We offer weekly, bi-weekly, monthly, and one-time cleaning options to fit any schedule and budget.' },
      { q: 'Do you bring your own supplies for house cleaning in Louisville?', a: 'Yes! Our Louisville cleaning team arrives fully equipped with eco-friendly, pet-safe cleaning products and all necessary equipment. You don\'t need to provide anything.' },
      { q: 'Are your Louisville house cleaners background-checked?', a: 'Absolutely. Every 502 Star Service cleaner undergoes a thorough background check and is fully insured and bonded before cleaning any Louisville home.' },
      { q: 'Do I need to be home during house cleaning in Louisville?', a: 'No. Many of our Louisville clients provide a key or access code. Our trusted, insured team will clean your home professionally whether you\'re home or away.' },
    ]
  },
  {
    dir: 'deep-cleaning',
    title: 'Deep Cleaning Louisville KY | Top-Rated Home Sanitization',
    desc: `Professional deep cleaning services in Louisville, KY. We clean what regular cleaning misses — baseboards, inside appliances, grout & more. Background-checked pros. Call ${PHONE}!`,
    h1keyword: 'Deep Cleaning Services Louisville KY',
    faqs: [
      { q: 'What is included in a deep cleaning service in Louisville, KY?', a: 'Our Louisville deep cleaning service includes scrubbing inside appliances (ovens, microwaves), cleaning baseboards, ceiling fans, light fixtures, inside cabinets, grout scrubbing, and full bathroom sanitization — everything a standard clean misses.' },
      { q: 'How long does a deep cleaning take in Louisville?', a: 'A deep cleaning in Louisville typically takes 4–8 hours depending on the size and condition of the home. Our team works efficiently to minimize disruption to your day.' },
      { q: 'How often should I get a deep cleaning in Louisville?', a: 'Most Louisville homeowners schedule a professional deep cleaning every 3–6 months, or as a first-time clean before starting regular maintenance service.' },
      { q: 'How much does deep cleaning cost in Louisville, KY?', a: `Deep cleaning pricing in Louisville varies based on home size and condition. 502 Star Service provides transparent, upfront flat-rate quotes. Call ${PHONE} for your free estimate.` },
      { q: 'Can I book a deep cleaning same day in Louisville?', a: `Yes! 502 Star Service often accommodates same-day and next-day deep cleaning appointments in Louisville, KY depending on availability. Call or text ${PHONE} to check.` },
    ]
  },
  {
    dir: 'move-in-cleaning',
    title: 'Move In Cleaning Louisville KY | Reliable Relocation Services',
    desc: `Move-in cleaning services in Louisville, KY. Get your new home spotless before move-in day. Background-checked, insured pros. Fast scheduling. Call ${PHONE} for a free quote!`,
    h1keyword: 'Move-In Cleaning Services Louisville KY',
    faqs: [
      { q: 'What is included in a move-in cleaning in Louisville?', a: 'Our Louisville move-in cleaning includes deep scrubbing of all bathrooms and kitchen, cleaning inside cabinets and drawers, wiping down all surfaces, cleaning inside appliances, vacuuming and mopping all floors, and cleaning light fixtures and ceiling fans.' },
      { q: 'How far in advance should I book a move-in cleaning in Louisville?', a: 'We recommend booking your Louisville move-in cleaning at least 2–3 days in advance. However, we often accommodate last-minute and same-day requests depending on availability.' },
      { q: 'How long does a move-in cleaning take in Louisville, KY?', a: 'A move-in cleaning in Louisville typically takes 3–6 hours depending on the size of the home. Larger homes or particularly dirty properties may take longer.' },
      { q: 'Can you clean a vacant home for move-in in Louisville?', a: 'Absolutely. 502 Star Service specializes in cleaning vacant homes and apartments throughout Louisville, KY for move-in. We handle everything from top to bottom so it\'s ready on day one.' },
      { q: 'Do you do move-in cleaning for apartments in Louisville?', a: 'Yes! We provide move-in cleaning for apartments, condos, townhomes, and single-family homes throughout Louisville and Jefferson County.' },
    ]
  },
  {
    dir: 'move-out-cleaning',
    title: 'Move Out Cleaning Louisville KY | Deposit Recovery Cleaners',
    desc: `Move-out cleaning services in Louisville, KY. Get your deposit back with a spotless clean. We meet landlord standards. Background-checked, insured pros. Call ${PHONE}!`,
    h1keyword: 'Move-Out Cleaning Services Louisville KY',
    faqs: [
      { q: 'What is included in a move-out cleaning in Louisville, KY?', a: 'Our Louisville move-out cleaning covers deep cleaning of all rooms, inside appliances, cabinet interiors, baseboard scrubbing, full bathroom sanitization, window sill cleaning, and floor care — everything needed to pass a landlord inspection and recover your deposit.' },
      { q: 'How much does move-out cleaning cost in Louisville?', a: `Move-out cleaning pricing in Louisville depends on the size of your home and its condition. 502 Star Service provides transparent flat-rate quotes with no hidden fees. Call ${PHONE} for your free estimate.` },
      { q: 'Will move-out cleaning help me get my security deposit back?', a: 'Yes! Our Louisville move-out cleaning is specifically designed to meet landlord and property manager inspection standards. Most clients who use our service receive their full security deposit back.' },
      { q: 'Can I book a move-out cleaning on short notice in Louisville?', a: `502 Star Service frequently accommodates same-day and next-day move-out cleaning requests in Louisville, KY. Call or text ${PHONE} to check availability.` },
      { q: 'Do you clean apartments for move-out in Louisville?', a: 'Yes, we provide move-out cleaning for apartments, condos, houses, and commercial spaces throughout Louisville, Jeffersontown, St. Matthews, The Highlands, and all surrounding areas.' },
    ]
  },
  {
    dir: 'commercial-cleaning',
    title: 'Commercial Cleaning Louisville KY | Office & Janitorial Services',
    desc: `Commercial cleaning services in Louisville, KY for offices, medical facilities, gyms, schools & more. Flexible scheduling, insured pros. Call ${PHONE} for a free quote!`,
    h1keyword: 'Commercial Cleaning Services Louisville KY',
    faqs: [
      { q: 'What types of commercial spaces do you clean in Louisville, KY?', a: 'We provide commercial cleaning in Louisville for offices, medical facilities, dental offices, gyms, fitness centers, schools, daycares, churches, restaurants, warehouses, and industrial facilities.' },
      { q: 'How often can you clean my business in Louisville?', a: 'We offer flexible commercial cleaning schedules in Louisville — daily, weekly, bi-weekly, or monthly. We can also coordinate after-hours or weekend cleaning to minimize business disruption.' },
      { q: 'Are you insured for commercial cleaning in Louisville?', a: 'Yes. 502 Star Service is fully insured and bonded for commercial cleaning operations in Louisville, KY. We carry full liability coverage for your peace of mind.' },
      { q: 'How much does commercial cleaning cost in Louisville?', a: `Commercial cleaning pricing in Louisville depends on facility size, frequency, and scope of work. Call ${PHONE} for a free on-site assessment and custom quote for your Louisville business.` },
      { q: 'Do you offer janitorial services in Louisville, KY?', a: 'Yes. 502 Star Service offers comprehensive janitorial and commercial cleaning services throughout Louisville and Jefferson County, including office cleaning, floor care, restroom sanitation, and more.' },
    ]
  },
  {
    dir: 'carpet-cleaning',
    title: 'Carpet Cleaning Louisville KY | Professional Steam Cleaners',
    desc: `Professional carpet cleaning services in Louisville, KY. Deep clean and stain removal for homes and businesses. Background-checked pros. Call ${PHONE} for a free quote!`,
    h1keyword: 'Carpet Cleaning Services Louisville KY',
    faqs: [
      { q: 'How often should I get my carpets professionally cleaned in Louisville?', a: 'Most Louisville homeowners benefit from professional carpet cleaning every 6–12 months. Homes with pets, children, or high foot traffic may need more frequent cleaning.' },
      { q: 'Can you remove pet stains and odors from carpets in Louisville?', a: 'Yes! 502 Star Service uses professional-grade cleaning solutions specifically designed to break down and remove pet stains, urine odors, and dander from carpets in Louisville homes and businesses.' },
      { q: 'How long does carpet cleaning take in Louisville, KY?', a: 'Carpet cleaning in Louisville typically takes 1–3 hours depending on the number of rooms and carpet condition. Carpets are usually dry and ready to walk on within 2–4 hours after cleaning.' },
      { q: 'Do you offer carpet cleaning for commercial spaces in Louisville?', a: 'Yes. We provide commercial carpet cleaning for offices, hotels, medical facilities, and other businesses throughout Louisville and Jefferson County.' },
      { q: 'Is professional carpet cleaning worth it for Louisville homeowners?', a: 'Absolutely. Professional carpet cleaning extends carpet life, removes allergens and bacteria, eliminates odors, and significantly improves the appearance of your Louisville home.' },
    ]
  },
  {
    dir: 'airbnb-cleaning',
    title: 'Airbnb Cleaning Louisville KY | Vacation Rental Turnovers',
    desc: `Professional Airbnb cleaning services in Louisville, KY. Fast turnovers, hotel-quality standards. Reliable & flexible scheduling for hosts. Call ${PHONE} for a free quote!`,
    h1keyword: 'Airbnb Cleaning Services Louisville KY',
    faqs: [
      { q: 'What is included in Airbnb cleaning service in Louisville?', a: 'Our Louisville Airbnb cleaning includes stripping and remaking beds, cleaning all bathrooms and kitchen, vacuuming and mopping floors, restocking supplies, wiping down all surfaces, taking out trash, and a full property inspection before your next guest arrives.' },
      { q: 'How quickly can you turn over an Airbnb property in Louisville?', a: 'We specialize in fast Airbnb turnovers in Louisville. Depending on property size, we can complete same-day turnovers, often within 2–4 hours, ensuring your property is ready for the next guest.' },
      { q: 'Do you coordinate with Airbnb listings automatically in Louisville?', a: `Yes. We work with Louisville Airbnb hosts to synchronize cleaning with your booking calendar. Call ${PHONE} to discuss how we can automate turnovers for your Louisville rental.` },
      { q: 'Can you restock supplies for my Airbnb in Louisville?', a: 'Yes. As part of our Louisville Airbnb cleaning service, we can restock toiletries, paper products, and other supplies you provide — ensuring a hotel-quality experience for your guests.' },
      { q: 'Do you clean vacation rentals and other short-term rentals in Louisville?', a: 'Absolutely. In addition to Airbnb, we clean VRBO, HomeAway, and other short-term rental properties throughout Louisville, Anchorage, Prospect, St. Matthews, and all Jefferson County neighborhoods.' },
    ]
  },
  {
    dir: 'post-construction-cleanup',
    title: 'Post Construction Cleanup Louisville KY | Deep Cleaning Pros',
    desc: `Post-construction cleanup services in Louisville, KY. We remove dust, debris, and construction residue. Licensed, insured pros. Fast scheduling. Call ${PHONE} for a free quote!`,
    h1keyword: 'Post-Construction Cleanup Louisville KY',
    faqs: [
      { q: 'What is included in post-construction cleanup in Louisville, KY?', a: 'Our Louisville post-construction cleanup includes removing construction debris and dust, cleaning all surfaces, windows, floors, fixtures, cabinets, and appliances, as well as sanitizing bathrooms and kitchen to make the space move-in or open-for-business ready.' },
      { q: 'How much does post-construction cleaning cost in Louisville?', a: `Post-construction cleanup pricing in Louisville depends on project size, scope, and debris amount. Call ${PHONE} for a free on-site estimate tailored to your Louisville construction project.` },
      { q: 'Do you clean new construction homes in Louisville, KY?', a: 'Yes! We provide final clean services for newly constructed homes and commercial buildings throughout Louisville, KY, preparing them for occupancy with a thorough top-to-bottom clean.' },
      { q: 'How long does post-construction cleanup take in Louisville?', a: 'Post-construction cleanup in Louisville typically takes 1–3 days depending on the size of the project and amount of debris. We work efficiently to get your property client-ready as fast as possible.' },
      { q: 'Can you do post-renovation cleaning in Louisville?', a: 'Yes. In addition to new construction, we handle post-renovation cleaning for kitchen remodels, bathroom renovations, additions, and more throughout Louisville, Jeffersontown, St. Matthews, and surrounding areas.' },
    ]
  },
  {
    dir: 'window-cleaning',
    title: 'Window Cleaning Louisville KY | Professional Glass Washers',
    desc: `Professional window cleaning services in Louisville, KY. Crystal-clear interior & exterior windows. Residential & commercial. Insured pros. Call ${PHONE} for a free quote!`,
    h1keyword: 'Window Cleaning Services Louisville KY',
    faqs: [
      { q: 'Do you clean both interior and exterior windows in Louisville?', a: 'Yes. 502 Star Service provides interior and exterior window cleaning throughout Louisville, KY. We use streak-free techniques to leave your windows crystal clear.' },
      { q: 'How often should windows be professionally cleaned in Louisville?', a: 'We recommend professional window cleaning at least twice a year for Louisville homes. Businesses or homes near busy roads may benefit from quarterly cleaning.' },
      { q: 'Can you clean high windows and second-story windows in Louisville?', a: 'Yes. Our Louisville window cleaning team is equipped to safely clean high windows, second-story windows, and skylights in residential and commercial properties.' },
      { q: 'Do you offer commercial window cleaning in Louisville?', a: 'Yes. 502 Star Service provides commercial window cleaning for offices, storefronts, restaurants, and other businesses throughout Louisville, KY.' },
      { q: 'Are your window cleaners insured in Louisville, KY?', a: 'All 502 Star Service window cleaning professionals in Louisville are fully insured and bonded. You can trust our team to work safely at your home or business.' },
    ]
  },
  {
    dir: 'pressure-washing',
    title: 'Pressure Washing Louisville KY | Power Washing Services',
    desc: `Professional pressure washing services in Louisville, KY. Driveways, sidewalks, decks, siding & more. Insured pros. Fast results. Call ${PHONE} for a free quote!`,
    h1keyword: 'Pressure Washing Services Louisville KY',
    faqs: [
      { q: 'What surfaces can you pressure wash in Louisville, KY?', a: 'We pressure wash driveways, sidewalks, decks, patios, siding, fences, retaining walls, parking lots, and more throughout Louisville and Jefferson County.' },
      { q: 'Is pressure washing safe for my Louisville home?', a: 'Yes, when done by professionals. 502 Star Service uses the correct pressure levels for each surface type to ensure effective cleaning without damage to your Louisville property.' },
      { q: 'How often should I get pressure washing done in Louisville?', a: 'Most Louisville homeowners benefit from annual pressure washing. Driveways and sidewalks may need cleaning more frequently, especially after winter or heavy storms.' },
      { q: 'Do you offer commercial pressure washing in Louisville?', a: 'Yes. We provide commercial pressure washing for storefronts, parking lots, warehouses, loading docks, and more throughout Louisville, KY.' },
      { q: 'How much does pressure washing cost in Louisville?', a: `Pressure washing pricing in Louisville varies based on surface area and type. Call ${PHONE} for a free quote for pressure washing your Louisville property.` },
    ]
  },
  {
    dir: 'janitorial-cleaning',
    title: 'Janitorial Services Louisville KY | Commercial Cleaning Company',
    desc: `Professional janitorial cleaning services in Louisville, KY for offices, buildings & facilities. Flexible schedules, fully insured. Call ${PHONE} for a free quote!`,
    h1keyword: 'Janitorial Cleaning Services Louisville KY',
    faqs: [
      { q: 'What janitorial services do you offer in Louisville, KY?', a: 'Our Louisville janitorial services include daily office cleaning, restroom sanitation, floor care (mopping, sweeping, waxing), trash removal, common area cleaning, break room cleaning, and more.' },
      { q: 'Can you create a custom janitorial schedule for my Louisville business?', a: 'Yes. 502 Star Service creates fully customized janitorial cleaning schedules for Louisville businesses — daily, weekly, or after-hours — tailored to your specific needs and budget.' },
      { q: 'Are you insured for janitorial services in Louisville?', a: 'Yes. 502 Star Service is fully insured and bonded for janitorial operations throughout Louisville, KY. We carry all required coverage for commercial cleaning contracts.' },
      { q: 'How much do janitorial services cost in Louisville, KY?', a: `Janitorial service pricing in Louisville depends on facility size, scope, and frequency. Call ${PHONE} for a free on-site assessment and custom quote for your Louisville facility.` },
      { q: 'Do you offer day porter janitorial services in Louisville?', a: 'Yes. We offer day porter and ongoing janitorial services for Louisville office buildings, retail spaces, medical facilities, and more.' },
    ]
  },
  {
    dir: 'vacation-rental-cleaning',
    title: 'Vacation Rental Cleaning Louisville KY | 5-Star Service turnovers',
    desc: `Professional vacation rental cleaning services in Louisville, KY. Fast turnovers, 5-star guest experiences. Reliable & flexible. Call ${PHONE} for a free quote!`,
    h1keyword: 'Vacation Rental Cleaning Louisville KY',
    faqs: [
      { q: 'What is included in vacation rental cleaning in Louisville?', a: 'Our Louisville vacation rental cleaning includes full property cleaning, linen changes, restocking of supplies, trash removal, and a pre-arrival inspection to ensure a 5-star experience for every guest.' },
      { q: 'How quickly can you turn over a vacation rental in Louisville?', a: 'We specialize in fast, same-day turnovers for vacation rentals in Louisville, KY. Contact us to coordinate your cleaning schedule with your booking calendar.' },
      { q: 'Do you clean VRBO properties in Louisville, KY?', a: 'Yes. We clean Airbnb, VRBO, HomeAway, and all short-term rental properties throughout Louisville, Anchorage, Prospect, St. Matthews, and surrounding Jefferson County communities.' },
      { q: 'Can vacation rental cleaning help me get better reviews on Airbnb?', a: 'Absolutely! A consistently clean and well-maintained rental is the #1 factor in 5-star guest reviews. Our Louisville vacation rental cleaning team is trained to meet and exceed guest expectations.' },
      { q: 'Are your vacation rental cleaners insured in Louisville?', a: 'Yes. All 502 Star Service cleaners performing vacation rental and Airbnb cleaning in Louisville are fully insured and bonded.' },
    ]
  },
];

// ─── NEIGHBORHOOD PAGES ───────────────────────────────────────────────────────
const neighborhoodPages = [
  { dir: 'old-louisville', name: 'Old Louisville', zip: '40203' },
  { dir: 'the-highlands', name: 'The Highlands', zip: '40204' },
  { dir: 'nulu', name: 'NuLu (New Louisville)', zip: '40202' },
  { dir: 'butchertown', name: 'Butchertown', zip: '40202' },
  { dir: 'germantown', name: 'Germantown', zip: '40217' },
  { dir: 'crescent-hill', name: 'Crescent Hill', zip: '40206' },
  { dir: 'st-matthews', name: 'St. Matthews', zip: '40207' },
  { dir: 'middletown', name: 'Middletown', zip: '40243' },
  { dir: 'jeffersontown', name: 'Jeffersontown', zip: '40299' },
  { dir: 'fern-creek', name: 'Fern Creek', zip: '40291' },
  { dir: 'okolona', name: 'Okolona', zip: '40219' },
  { dir: 'shively', name: 'Shively', zip: '40216' },
  { dir: 'prospect', name: 'Prospect', zip: '40059' },
  { dir: 'anchorage', name: 'Anchorage', zip: '40223' },
  { dir: 'hurstbourne', name: 'Hurstbourne', zip: '40222' },
  { dir: 'lyndon', name: 'Lyndon', zip: '40222' },
];

// ─── SCHEMA BUILDER ───────────────────────────────────────────────────────────
function buildServiceSchema(page, pageUrl) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        "name": "502 Star Service",
        "url": BASE_URL,
        "telephone": PHONE_SCHEMA,
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "16",
          "bestRating": "5",
          "worstRating": "1"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Louisville",
          "addressRegion": "KY",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "City", "name": "Louisville", "sameAs": "https://en.wikipedia.org/wiki/Louisville,_Kentucky" },
          { "@type": "City", "name": "Jefferson County" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cleaning Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": page.h1keyword || page.title,
                "description": page.desc,
                "areaServed": { "@type": "City", "name": "Louisville" }
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL + "/" },
          { "@type": "ListItem", "position": 2, "name": page.h1keyword || page.name, "item": pageUrl }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": page.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }
    ]
  };
  return JSON.stringify(schema);
}

function buildNeighborhoodSchema(nb, pageUrl) {
  const faqs = [
    { q: `What cleaning services do you offer in ${nb.name}, Louisville KY?`, a: `502 Star Service offers house cleaning, deep cleaning, move-in and move-out cleaning, commercial cleaning, carpet cleaning, Airbnb cleaning, and more in ${nb.name}, Louisville KY. Call ${PHONE} for a free quote.` },
    { q: `Are you the best cleaning service in ${nb.name}?`, a: `502 Star Service is one of the top-rated cleaning companies serving ${nb.name} in Louisville, KY. We have a 5.0 Google rating based on 16 reviews and offer a 100% satisfaction guarantee on every clean.` },
    { q: `How much does cleaning cost in ${nb.name}, Louisville KY?`, a: `Cleaning prices in ${nb.name} vary by service type and home size. 502 Star Service provides transparent, flat-rate pricing with no hidden fees. Call ${PHONE} for a free quote in ${nb.name}.` },
    { q: `Do you offer same-day cleaning in ${nb.name}?`, a: `Yes! 502 Star Service often accommodates same-day and next-day cleaning appointments in ${nb.name}, Louisville, KY. Call or text ${PHONE} to check availability.` },
    { q: `Are your cleaners insured in ${nb.name}, Louisville KY?`, a: `Yes. All 502 Star Service cleaning professionals serving ${nb.name} are fully background-checked, insured, and bonded. Your home is in safe hands.` },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        "name": "502 Star Service",
        "url": BASE_URL,
        "telephone": PHONE_SCHEMA,
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "16",
          "bestRating": "5",
          "worstRating": "1"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Louisville",
          "addressRegion": "KY",
          "postalCode": nb.zip,
          "addressCountry": "US"
        },
        "areaServed": { 
          "@type": "Neighborhood", 
          "name": nb.name 
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Cleaning Services in " + nb.name,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Residential & Commercial Cleaning",
                "areaServed": { "@type": "Neighborhood", "name": nb.name, "postalCode": nb.zip }
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL + "/" },
          { "@type": "ListItem", "position": 2, "name": `Cleaning Services in ${nb.name}`, "item": pageUrl }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }
    ]
  };
  return JSON.stringify(schema);
}

// ─── FILE UPDATER ─────────────────────────────────────────────────────────────
function updatePage(filepath, title, desc, schema) {
  if (!fs.existsSync(filepath)) {
    console.log(`  ⚠️  Skipped (file not found): ${filepath}`);
    return false;
  }

  let content = fs.readFileSync(filepath, 'utf8');

  // 1. Update <title>
  content = content.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);

  // 1.5. Update <h1> to perfectly align with the title
  content = content.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/i, `<h1$1>\n                    ${title}\n                </h1>`);

  // 2. Update or add meta description
  if (/<meta\s+name=["']description["'][^>]*>/i.test(content)) {
    content = content.replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${desc}" />`
    );
  } else {
    content = content.replace('</title>', `</title>\n    <meta name="description" content="${desc}" />`);
  }

  // 3. Update or add OG title
  if (/<meta\s+property=["']og:title["'][^>]*>/i.test(content)) {
    content = content.replace(
      /<meta\s+property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${title}" />`
    );
  }

  // 4. Update or add OG description
  if (/<meta\s+property=["']og:description["'][^>]*>/i.test(content)) {
    content = content.replace(
      /<meta\s+property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${desc}" />`
    );
  }

  // 5. Remove old LD+JSON schema blocks and inject new one
  content = content.replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '');

  // Inject new schema right before </head>
  const schemaTag = `\n    <script type="application/ld+json">${schema}</script>`;
  content = content.replace('</head>', `${schemaTag}\n</head>`);

  fs.writeFileSync(filepath, content, 'utf8');
  return true;
}

// ─── RUN ──────────────────────────────────────────────────────────────────────
const baseDir = __dirname;
let updated = 0;
let skipped = 0;

console.log('\n🚀 502 Star Service – SEO Batch Update\n');

// Service pages
console.log('📋 Updating SERVICE pages...\n');
for (const page of servicePages) {
  const filepath = path.join(baseDir, page.dir, 'index.html');
  const pageUrl = `${BASE_URL}/${page.dir}/`;
  const schema = buildServiceSchema(page, pageUrl);
  const ok = updatePage(filepath, page.title, page.desc, schema);
  if (ok) { console.log(`  ✅ ${page.dir}/`); updated++; }
  else skipped++;
}

// Neighborhood pages
console.log('\n📍 Updating NEIGHBORHOOD pages...\n');
for (const nb of neighborhoodPages) {
  const filepath = path.join(baseDir, nb.dir, 'index.html');
  const pageUrl = `${BASE_URL}/${nb.dir}/`;
  const title = `Cleaning Services in ${nb.name} KY | Residential & House Cleaning`;
  const desc = `Professional cleaning services in ${nb.name}, Louisville KY. Background-checked, insured pros. House cleaning, deep cleaning & more. Call ${PHONE} for a free quote!`;
  const schema = buildNeighborhoodSchema(nb, pageUrl);
  const ok = updatePage(filepath, title, desc, schema);
  if (ok) { console.log(`  ✅ ${nb.dir}/`); updated++; }
  else skipped++;
}

console.log(`\n✨ Done! Updated: ${updated} pages | Skipped (not found): ${skipped} pages\n`);
