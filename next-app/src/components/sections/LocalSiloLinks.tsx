import React from "react";
import Link from "next/link";
import { locations } from "../../lib/data";
import { Map } from "lucide-react";

export default function LocalSiloLinks({ currentLocation = "Louisville" }: { currentLocation?: string }) {
  // Sort locations alphabetically for a clean grid
  const sortedLocations = [...locations].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <section className="py-20 bg-[#0a0f12] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left reveal active">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-6 border border-white/10">
            <Map className="w-5 h-5 text-teal-400" />
            <span className="text-gray-300 font-bold uppercase tracking-widest text-sm">Service Areas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Areas We Serve in & Around {currentLocation}
          </h2>
          <p className="text-gray-400 max-w-3xl md:mx-0 mx-auto">
            We provide top-rated, reliable cleaning services to neighborhoods and suburbs across the greater Louisville metropolitan area. Find your local service area below to book your specialized cleaning.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 reveal active">
          {sortedLocations.map((loc, index) => (
            <Link 
              key={index}
              href={`/${loc.id}`}
              className="group flex items-center p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-teal-500 mr-3 group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-400 group-hover:text-white font-medium text-sm transition-colors">
                {loc.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
