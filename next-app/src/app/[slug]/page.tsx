import { notFound } from "next/navigation";
import { locations, services, spintax } from "../../lib/data";
import Hero from "../../components/sections/Hero";
import Reviews from "../../components/sections/Reviews";
import Contact from "../../components/sections/Contact";
import CrossLinkSection from "../../components/sections/CrossLinkSection";
import JsonLd from "../../components/JsonLd";
import React from "react";
import { Sparkles, ShieldCheck, Star, Leaf, Clock, CheckCircle2 } from "lucide-react";

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
    ? `#1 Cleaning Services in ${data.title}, KY | 502 Star Service`
    : `Expert ${data.title} in Louisville, KY | 502 Star Service`;

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
    ? `#1 Top-Rated Cleaning Services in ${data.title}, KY`
    : `#1 Top-Rated ${data.title} in Louisville, KY`;

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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content Block */}
            <div className="lg:col-span-2 space-y-10">
              {/* Primary Why-Choose Box */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] reveal active border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Choose 502 Star Service for {keyword} in {locStr}?
                </h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    {introText} Our <strong>{keyword}</strong> is designed to exceed expectations and deliver a spotless
                    environment every single time.
                  </p>
                  <p className="mb-4">{midText}</p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 mt-8">
                    <Sparkles className="text-teal-600 w-6 h-6" /> What Sets Us Apart
                  </h3>
                  <ul className="space-y-3 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-teal-600 shrink-0 mt-1 w-5 h-5" /> {bullets[0]}
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-teal-600 shrink-0 mt-1 w-5 h-5" /> {bullets[1]}
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-teal-600 shrink-0 mt-1 w-5 h-5" /> {bullets[2]}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal active">
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                  <ShieldCheck className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Licensed &amp; Insured</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                  <Star className="w-8 h-8 text-accent-yellow mx-auto mb-2 fill-current" />
                  <p className="font-bold text-gray-900 text-sm">5-Star Rated</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                  <Leaf className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Eco-Friendly</p>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                  <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <p className="font-bold text-gray-900 text-sm">Fast Response</p>
                </div>
              </div>
            </div>

            {/* Right Sidebar Form is included in Contact */}
            <div className="lg:col-span-1 hidden lg:block">
               {/* Just a spacer to let the grid work out, the Contact component has its own layout that we'll need to adjust, but let's just render the form directly here to match the layout of generate_pages.js */}
               <div className="sticky top-28 bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,165,166,0.1)] border-2 border-teal-50 reveal active">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
                <p className="text-gray-500 text-sm mb-6">We respond within 2 hours — fast, free &amp; no-obligation!</p>
                <div style={{ height: "922px", minHeight: "922px" }}>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/v8olXj1AgIuDePlOGajN"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
                    id="inline-v8olXj1AgIuDePlOGajN"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact Us"
                    data-height="922"
                    data-layout-iframe-id="inline-v8olXj1AgIuDePlOGajN"
                    data-form-id="v8olXj1AgIuDePlOGajN"
                    title="Contact Us"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CrossLinkSection
        type={isLocation ? "location" : "service"}
        data={data}
        location={isLocation ? data : undefined}
      />
      <Reviews />
      {/* Mobile contact section, visible on small screens */}
      <div className="block lg:hidden">
        <Contact />
      </div>
    </>
  );
}
