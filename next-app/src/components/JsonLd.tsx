import React from "react";
import { locations } from "../lib/data";

interface JsonLdProps {
  type: "homepage" | "location" | "service" | "silo-service";
  data?: any;
  location?: any;
  canonicalUrl: string;
  pageTitle: string;
  pageDesc: string;
  faqs?: { q: string; a: string }[];
}

export default function JsonLd({ type, data, location, canonicalUrl, pageTitle, pageDesc, faqs = [] }: JsonLdProps) {
  const isLocation = type === "location";
  const isSiloService = type === "silo-service";
  const keyword = type === "homepage" ? "Cleaning Services" : data?.title;
  const locStr = isSiloService ? `${location?.title}, KY` : "Louisville, KY";

  const faqSchemaItems = faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  const schemaAreaServedArray = [
    ...locations.map((l) => ({ "@type": "Neighborhood", name: l.title })),
    { "@type": "City", name: "Louisville" },
  ];

  let extraSchema: any = {};

  if (isLocation) {
    extraSchema = {
      "@type": "LocalBusiness",
      "@id": `${canonicalUrl}#localbusiness`,
      name: `502 Star Service - ${data.title}`,
      url: canonicalUrl,
      areaServed: { "@type": "Place", name: `${data.title}, Kentucky` },
      telephone: "+15028351870",
      priceRange: "$$",
      image: "https://www.502starservices.com/images/logo.webp",
    };
  } else if (isSiloService || type === "service") {
    extraSchema = {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: keyword,
      serviceType: keyword,
      provider: { "@id": "https://www.502starservices.com/#organization" },
      areaServed: isSiloService ? { "@type": "Neighborhood", name: locStr } : schemaAreaServedArray,
      description: pageDesc,
    };
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        url: canonicalUrl,
        name: pageTitle,
        isPartOf: { "@id": "https://www.502starservices.com/#website" },
        about: { "@id": "https://www.502starservices.com/#organization" },
        datePublished: "2024-09-09T04:55:10+00:00",
        dateModified: "2026-03-27T17:00:00+00:00",
        description: pageDesc,
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.502starservices.com/" },
          ...(type !== "homepage"
            ? [{ "@type": "ListItem", position: 2, name: data?.title || "Service" }]
            : []),
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.502starservices.com/#website",
        url: "https://www.502starservices.com/",
        name: "502 Star Service",
        description: "Louisville's #1 Rated Cleaning Services",
        publisher: { "@id": "https://www.502starservices.com/#organization" },
        inLanguage: "en-US",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.502starservices.com/#organization",
        name: "502 Star Service",
        url: "https://www.502starservices.com/",
        telephone: "+15028351870",
        knowsAbout: ["House Cleaning", "Window Washing", "Deep Cleaning", "Commercial Janitorial", "Louisville, KY"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "16",
          bestRating: "5",
          worstRating: "1",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "16:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "09:00",
            closes: "15:00",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
          addressLocality: "Louisville",
          addressRegion: "KY",
          postalCode: "40202",
        },
        logo: {
          "@type": "ImageObject",
          url: "https://www.502starservices.com/images/logo.webp",
          width: 500,
          height: 500,
        },
      },
      ...(Object.keys(extraSchema).length > 0 ? [extraSchema] : []),
      {
        "@type": "FAQPage",
        mainEntity: faqSchemaItems,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
