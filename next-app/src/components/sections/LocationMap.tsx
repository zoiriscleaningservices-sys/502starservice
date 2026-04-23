import React from "react";
import { MapPin } from "lucide-react";

export default function LocationMap({ location = "Louisville, KY" }: { location?: string }) {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal active">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full mb-4 shadow-sm">
            <MapPin className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-widest">Service Area</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Proudly Serving <span className="text-teal-600">{location}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide top-rated, professional cleaning services throughout {location} and the surrounding neighborhoods. 
            Our local teams are ready to transform your space today.
          </p>
        </div>

        <div className="relative reveal active">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-accent-yellow rounded-3xl blur opacity-25"></div>
          <div className="relative bg-white p-2 sm:p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-100 relative">
              <iframe
                title={`Map of ${location}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
