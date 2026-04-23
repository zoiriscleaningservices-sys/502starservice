import React from "react";
import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Reviews from "../../components/sections/Reviews";
import Contact from "../../components/sections/Contact";
import JsonLd from "../../components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 502 Star Service Louisville",
  description: "Learn more about 502 Star Service, Louisville's highest-rated house cleaning and window washing experts.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        type="homepage"
        canonicalUrl="https://www.502starservices.com/about-us/"
        pageTitle="About Us | 502 Star Service Louisville"
        pageDesc="Learn more about 502 Star Service, Louisville's highest-rated house cleaning and window washing experts."
      />
      <Hero
        isVideo={false}
        title="About 502 Star Service"
        subtitle="Louisville's Premier Cleaning Experts. Background-Checked, Fully Insured, & 100% Satisfaction Guaranteed."
        bannerImage="/images/WhatsApp Image 2026-02-27 at 11.40.24 PM (4).jpeg"
        isLocal={false}
      />
      <About />
      <Reviews />
      <Contact />
    </>
  );
}
