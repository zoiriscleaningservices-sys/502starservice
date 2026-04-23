import React from "react";
import Link from "next/link";
import { services } from "../../lib/data";

export default function ServicesCarousel() {
  const row1 = services.filter((s) => s.category === "Residential & Property");
  const row2 = services.filter((s) => s.category === "Commercial & Industrial");
  const row3 = services.filter((s) => s.category === "Property Management");

  const renderMarquee = (items: typeof services, reverse = false) => (
    <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
      {/* Double the items to create an infinite loop effect */}
      {[...items, ...items].map((s, idx) => (
        <Link
          key={`${s.id}-${idx}`}
          href={`/${s.id}/`}
          className="group block relative w-64 md:w-72 h-40 md:h-48 mx-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <img
            src={s.img ? `/${s.img}` : "/images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg"}
            alt={s.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent group-hover:from-teal-900/90 transition-colors duration-300"></div>
          <div className="absolute bottom-0 left-0 p-4 md:p-5 w-full">
            <h4 className="text-white font-bold text-lg leading-tight mb-1">{s.title}</h4>
            <div className="flex items-center text-teal-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <section id="services" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center reveal active">
          <p className="text-teal-800 font-bold text-lg uppercase tracking-wider mb-2">Our Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Cleaning Services In Louisville</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            From cozy apartments to complex industrial facilities, we deliver absolute excellence across every square foot.
          </p>
        </div>
      </div>

      {/* Marquees Container */}
      <div className="flex flex-col gap-10 marquee-wrapper relative z-10 w-full overflow-hidden pb-12">
        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 Container */}
        <div className="pl-4 md:pl-8">
          <h3 className="text-teal-800 font-bold uppercase tracking-widest text-sm mb-4 ml-4">Residential & Property</h3>
          {renderMarquee(row1)}
        </div>

        {/* Row 2 Container */}
        <div className="pl-4 md:pl-8">
          <h3 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4 ml-4 md:pr-12">Commercial & Industrial</h3>
          {renderMarquee(row2, true)}
        </div>

        {/* Row 3 Container */}
        <div className="pl-4 md:pl-8">
          <h3 className="text-purple-700 font-bold uppercase tracking-widest text-sm mb-4 ml-4">Property Management</h3>
          {renderMarquee(row3)}
        </div>
      </div>

      {/* View All Services Button */}
      <div className="text-center mt-8 relative z-10 reveal active">
        <Link
          href="#quote"
          className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 hover:scale-105 transition-all shadow-xl hover:shadow-2xl group"
        >
          Request Service Now
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </Link>
      </div>
    </section>
  );
}
