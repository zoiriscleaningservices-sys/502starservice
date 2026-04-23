import React from "react";
import Link from "next/link";
import { services, locations } from "../../lib/data";
import { MapPin } from "lucide-react";

interface CrossLinkSectionProps {
  type: "location" | "silo-service" | "service";
  data: any;
  location?: any;
}

export default function CrossLinkSection({ type, data, location }: CrossLinkSectionProps) {
  if (type === "location") {
    // We are on a Location Hub page. Cross link to all services in this location.
    return (
      <section className="py-16 bg-teal-50 border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal active">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services in {data.title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From home cleaning to commercial janitorial, we cover every cleaning need in {data.title}, KY.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 reveal active">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/${data.id}/${s.id}/`}
                title={`${s.title} in ${data.title}, KY`}
                className="group bg-white rounded-[1.75rem] overflow-hidden shadow-sm hover:shadow-xl border border-teal-100 transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={s.img ? `/${s.img}` : "/images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg"}
                    alt={`${s.title} service by 502 Star Service`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="640"
                    height="480"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-teal-600 mb-2">{s.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">Professional {s.title.toLowerCase()} available throughout {data.title}.</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (type === "silo-service") {
    // We are on a Service within a Location page. Cross link to other services in this location.
    return (
      <section className="py-16 bg-teal-50 border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal active">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Other Services in {location.title}</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our other top-rated cleaning services in {location.title}, KY.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal active">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/${location.id}/${s.id}/`}
                className="flex items-center gap-2 bg-white hover:bg-teal-600 text-gray-700 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all border border-teal-50 justify-center"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // type === "service"
  // We are on a global service page. Cross link to all location hubs for this service.
  return (
    <section className="py-16 bg-teal-50 border-t border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 reveal active">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{data.title} Available Throughout Louisville</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We bring our professional {data.title.toLowerCase()} service to every Louisville neighborhood. Click your area below.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal active">
          {locations.map((l) => (
            <Link
              key={l.id}
              href={`/${l.id}/${data.id}/`}
              className="flex items-center gap-2 bg-white hover:bg-teal-600 text-gray-700 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all border border-teal-50 justify-center"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" /> {l.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
