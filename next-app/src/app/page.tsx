import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Process from "../components/sections/Process";
import ServicesCarousel from "../components/sections/ServicesCarousel";
import HomeContact from "../components/sections/HomeContact";
import WhyUs from "../components/sections/WhyUs";
import Reviews from "../components/sections/Reviews";
import LocationMap from "../components/sections/LocationMap";
import FAQ from "../components/sections/FAQ";
import { getFaqs } from "../lib/data";
import JsonLd from "../components/JsonLd";

export default function Home() {
  const faqs = getFaqs("Louisville");

  return (
    <>
      <JsonLd 
        type="homepage" 
        canonicalUrl="https://www.502starservices.com/" 
        pageTitle="Cleaning Services in Louisville KY | 502 Star Service" 
        pageDesc="Looking for the best cleaning services in Louisville KY? 502 Star Service provides expert house cleaning, deep cleaning, and maid services. Book your Louisville Kentucky cleaning services online today!" 
        faqs={faqs}
      />
      <Hero isVideo={true} />
      <About />
      <Process location="Louisville" />
      <ServicesCarousel />
      <HomeContact />
      <WhyUs location="Louisville" />
      <Reviews />
      <LocationMap location="Louisville, KY" />
      <FAQ location="Louisville" />
    </>
  );
}
