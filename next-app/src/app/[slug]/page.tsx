import { notFound } from "next/navigation";
import { locations, services, spintax } from "../../lib/data";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Process from "../../components/sections/Process";
import ServicesCarousel from "../../components/sections/ServicesCarousel";
import WhyUs from "../../components/sections/WhyUs";
import Reviews from "../../components/sections/Reviews";
import LocationMap from "../../components/sections/LocationMap";
import FAQ from "../../components/sections/FAQ";
import HomeContact from "../../components/sections/HomeContact";
import CrossLinkSection from "../../components/sections/CrossLinkSection";
import JsonLd from "../../components/JsonLd";
import React from "react";

export async function generateStaticParams() {
  const params: { slug: string }[] = [];

  // Add location slugs
  for (const loc of locations) {
    params.push({ slug: loc.id });
  }

  // Add global service slugs
  for (const srv of services) {
    params.push({ slug: srv.id });
  }

  return params;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const isLocation = locations.some((l) => l.id === slug);
  const data = isLocation
    ? locations.find((l) => l.id === slug)
    : services.find((s) => s.id === slug);

  if (!data) return {};

  const pageTitle = isLocation
    ? `Cleaning Services in ${data.title} KY | 502 Star Service`
    : `${data.title} in Louisville KY | 502 Star Service`;

  return {
    title: pageTitle,
    description: `Professional cleaning services for ${data.title}. Get a free quote today!`,
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

export default async function SlugPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const isLocation = locations.some((l) => l.id === slug);
  const data = isLocation
    ? locations.find((l) => l.id === slug)
    : services.find((s) => s.id === slug);

  if (!data) {
    notFound();
  }

  const keyword = isLocation ? "Cleaning Services" : data.title;
  const locStr = isLocation ? `${data.title}, KY` : "Louisville, KY";

  const rng = seededRandom(data.id);
  const introText = spintax.intros[Math.floor(rng() * spintax.intros.length)];
  const midText = spintax.middles[Math.floor(rng() * spintax.middles.length)];
  const bullets = spintax.bullets[Math.floor(rng() * spintax.bullets.length)];

  const pageTitle = isLocation
    ? `Cleaning Services in ${data.title} KY`
    : `${data.title} in Louisville KY`;

  const pageSubtitle = isLocation
    ? "Dominating House Cleaning, Deep Cleaning & Window Cleaning in Louisville! - 502 Star Service"
    : data.id === "window-cleaning"
    ? "Dominating Window Washing, Exterior Glass & Skylight Cleaning in Louisville! - 502 Star Service"
    : "Dominating House Cleaning, Deep Cleaning & Window Cleaning in Louisville! - 502 Star Service";

  const pageDesc = isLocation
    ? `Professional cleaning services in ${data.title}. Trusted experts. Call (502) 835-1870!`
    : (data as any).desc || `Professional ${keyword.toLowerCase()} in ${locStr}. Trusted experts. Call (502) 835-1870!`;

  const bannerImage = isLocation
    ? "/images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg"
    : (data as any).img
    ? `/${(data as any).img}`
    : "/images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg";

  const canonicalUrl = `https://www.502starservices.com/${slug}/`;

  return (
    <>
      <JsonLd
        type={isLocation ? "location" : "service"}
        data={data}
        canonicalUrl={canonicalUrl}
        pageTitle={pageTitle}
        pageDesc={pageDesc}
        faqs={[]}
      />
      <Hero
        isVideo={false}
        title={pageTitle}
        subtitle={pageSubtitle}
        bannerImage={bannerImage}
        isLocal={isLocation}
      />

      <About keyword={keyword} location={locStr} />
      <Process keyword={keyword} location={locStr} />
      <ServicesCarousel />
      <HomeContact />
      <WhyUs keyword={keyword} location={locStr} />
      <Reviews />
      <LocationMap keyword={keyword} location={locStr} />
      <FAQ keyword={keyword} location={locStr} />

      <CrossLinkSection
        type={isLocation ? "location" : "service"}
        data={data}
        location={isLocation ? data : undefined}
      />
    </>
  );
}
