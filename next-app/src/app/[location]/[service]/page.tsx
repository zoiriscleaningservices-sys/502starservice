import { notFound } from "next/navigation";
import { locations, services, spintax } from "../../../lib/data";
import Hero from "../../../components/sections/Hero";
import About from "../../../components/sections/About";
import Process from "../../../components/sections/Process";
import ServicesCarousel from "../../../components/sections/ServicesCarousel";
import WhyUs from "../../../components/sections/WhyUs";
import Reviews from "../../../components/sections/Reviews";
import LocationMap from "../../../components/sections/LocationMap";
import FAQ from "../../../components/sections/FAQ";
import HomeContact from "../../../components/sections/HomeContact";
import CrossLinkSection from "../../../components/sections/CrossLinkSection";
import JsonLd from "../../../components/JsonLd";
import React from "react";

export async function generateStaticParams() {
  const params: { location: string; service: string }[] = [];

  for (const loc of locations) {
    for (const srv of services) {
      params.push({ location: loc.id, service: srv.id });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: { location: string; service: string } }) {
  const { location, service } = await params;

  const locData = locations.find((l) => l.id === location);
  const srvData = services.find((s) => s.id === service);

  if (!locData || !srvData) return {};

  const pageTitle = `#1 Top-Rated ${srvData.title} in ${locData.title}, KY | 502 Star Service`;

  return {
    title: pageTitle,
    description: `Expert ${srvData.title.toLowerCase()} in ${locData.title}, KY. Professional, background-checked, and reliable. Get a free quote today!`,
  };
}

// Simple seeded random function
function seededRandom(seed: string) {
  let h = 0xdeadbeef;
  for (let i = 0; i < seed.length; i++)
    h = Math.imul(h ^ seed.charCodeAt(i), 2654435761);
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h ^= h >>> 13;
    return (h >>> 0) / 4294967296;
  };
}

export default async function SiloServicePage({ params }: { params: { location: string; service: string } }) {
  const { location, service } = await params;

  const locData = locations.find((l) => l.id === location);
  const srvData = services.find((s) => s.id === service);

  if (!locData || !srvData) {
    notFound();
  }

  const keyword = srvData.title;
  const locStr = `${locData.title}, KY`;

  const rng = seededRandom(srvData.id + locData.id);
  const introText = spintax.intros[Math.floor(rng() * spintax.intros.length)];
  const midText = spintax.middles[Math.floor(rng() * spintax.middles.length)];
  const bullets = spintax.bullets[Math.floor(rng() * spintax.bullets.length)];

  const pageTitle = `#1 Top-Rated ${srvData.title} in ${locData.title}, KY`;

  const pageSubtitle = "Dominating House Cleaning, Deep Cleaning & Window Cleaning in Louisville! - 502 Star Service";

  const bannerImage = (srvData as any).img
    ? `/${(srvData as any).img}`
    : "/images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg";

  const pageDesc = `Professional ${keyword.toLowerCase()} in ${locStr}. Trusted experts. Call (502) 835-1870!`;
  const canonicalUrl = `https://www.502starservices.com/${location}/${service}/`;

  // Build FAQs
  const pageFaqs = [
    {
      q: `Why is 502 Star Service the top choice for ${keyword} in ${locStr}?`,
      a: `502 Star Service is recognized as the premier, fully insured cleaning authority. We deliver meticulous ${keyword.toLowerCase()} with background-checked specialists.`,
    },
    {
      q: `Are your cleaners insured, bonded, and background-checked?`,
      a: `Yes. Every professional representing 502 Star Service is strictly background-checked, fully insured, and bonded.`,
    },
    {
      q: `How do I schedule service in ${locStr}?`,
      a: `You can directly call our expert team at (502) 835-1870 for a fast, free quote.`,
    },
  ];

  return (
    <>
      <JsonLd
        type="silo-service"
        data={srvData}
        location={locData}
        canonicalUrl={canonicalUrl}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
        faqs={pageFaqs}
      />
      <Hero
        isVideo={false}
        title={pageTitle}
        subtitle={pageSubtitle}
        bannerImage={bannerImage}
        isLocal={false}
      />

      <About keyword={keyword} location={locStr} />
      <Process keyword={keyword} location={locStr} />
      <ServicesCarousel />
      <HomeContact />
      <WhyUs keyword={keyword} location={locStr} />
      <Reviews />
      <LocationMap keyword={keyword} location={locStr} />
      <FAQ keyword={keyword} location={locStr} />

      <CrossLinkSection type="silo-service" data={srvData} location={locData} />
    </>
  );
}
