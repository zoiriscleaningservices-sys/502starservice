import React from "react";
import Hero from "../../components/sections/Hero";
import Contact from "../../components/sections/Contact";
import JsonLd from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 502 Star Service Louisville",
  description: "Get a fast, free, no-obligation quote for residential or commercial cleaning in Louisville. Call (502) 835-1870 today.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        type="homepage"
        canonicalUrl="https://www.502starservices.com/contact-us/"
        pageTitle="Contact Us | 502 Star Service Louisville"
        pageDesc="Get a fast, free, no-obligation quote for residential or commercial cleaning in Louisville. Call (502) 835-1870 today."
      />
      <Hero
        isVideo={false}
        title="Contact 502 Star Service"
        subtitle="We respond within 2 hours — fast, free & no-obligation!"
        bannerImage="/images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg"
        isLocal={false}
      />
      <Contact />
    </>
  );
}
