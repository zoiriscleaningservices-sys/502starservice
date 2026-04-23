"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";
import { locations, services } from "../lib/data";

// Categorize services based on original index.html mapping
const residentialIds = [
  "house-cleaning", "deep-cleaning", "move-in-cleaning", "move-out-cleaning",
  "carpet-cleaning", "window-cleaning", "pressure-washing", "luxury-estate-cleaning",
  "laundry-services", "detailing"
];
const commercialIds = [
  "commercial-cleaning", "office-janitorial", "janitorial-cleaning", "medical-facility-cleaning",
  "industrial-warehouse-cleaning", "floor-stripping-waxing", "gym-fitness-cleaning",
  "school-daycare-cleaning", "church-worship-cleaning", "solar-panel-cleaning"
];
const propertyManagementIds = [
  "vacation-rental-cleaning", "airbnb-cleaning", "airbnb-rental-management", "post-construction-cleanup",
  "property-management-janitorial", "property-maintenance", "home-watch-services",
  "luxury-estate-management", "gutter-cleaning"
];

const resServices = services.filter(s => residentialIds.includes(s.id));
const comServices = services.filter(s => commercialIds.includes(s.id));
const propServices = services.filter(s => propertyManagementIds.includes(s.id));

export default function Navigation() {
  const pathname = usePathname() || "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  // Silo Insulation Logic
  const parts = pathname.split("/").filter(Boolean);
  const isLocationSilo = parts.length > 0 && locations.some((l) => l.id === parts[0]);
  const siloId = isLocationSilo ? parts[0] : null;
  const basePath = siloId ? `/${siloId}/` : "/";

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const toggleAccordion = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-teal-600 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={basePath} className="flex-shrink-0 flex items-center gap-3">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center p-1 shadow-md overflow-hidden shrink-0">
                <img
                  src="/images/logo.webp"
                  alt="502 Star Service Louisville Cleaning Company Logo"
                  width="400"
                  height="400"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href={basePath} className="text-white hover:text-accent-yellow transition-colors font-medium">
                Home
              </Link>
              <Link href="/about-us/" className="text-white hover:text-accent-yellow transition-colors font-medium">
                About Us
              </Link>

              {/* Services Mega Menu */}
              <div className="dropdown group relative">
                <button className="text-white hover:text-accent-yellow transition-colors font-medium flex items-center gap-1 py-4">
                  Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="dropdown-content center-dropdown absolute top-full left-1/2 mt-2 w-max max-w-7xl bg-white rounded-2xl shadow-2xl border border-teal-100 p-8">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-teal-100 pb-2">
                        Residential & Property
                      </h3>
                      <div className="flex flex-col gap-2">
                        {resServices.map((s) => (
                          <Link
                            key={s.id}
                            href={`${basePath}${s.id}/`}
                            className="px-5 py-2.5 bg-gray-50 hover:bg-teal-600 text-gray-700 hover:text-white rounded-full transition-all text-sm font-medium shadow-sm hover:shadow-md text-center block w-full"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Column 2 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-teal-100 pb-2">
                        Commercial & Industrial
                      </h3>
                      <div className="flex flex-col gap-2">
                        {comServices.map((s) => (
                          <Link
                            key={s.id}
                            href={`${basePath}${s.id}/`}
                            className="px-5 py-2.5 bg-gray-50 hover:bg-teal-600 text-gray-700 hover:text-white rounded-full transition-all text-sm font-medium shadow-sm hover:shadow-md text-center block w-full"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Column 3 */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-teal-100 pb-2">
                        Property Management
                      </h3>
                      <div className="flex flex-col gap-2">
                        {propServices.map((s) => (
                          <Link
                            key={s.id}
                            href={`${basePath}${s.id}/`}
                            className="px-5 py-2.5 bg-gray-50 hover:bg-teal-600 text-gray-700 hover:text-white rounded-full transition-all text-sm font-medium shadow-sm hover:shadow-md text-center block w-full"
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="dropdown group relative">
                <button className="text-white hover:text-accent-yellow transition-colors font-medium flex items-center gap-1 py-4">
                  Locations <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="dropdown-content absolute top-full right-0 mt-2 w-max bg-white rounded-2xl shadow-2xl border border-teal-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                    Service Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {locations.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/${loc.id}/`}
                        className="text-sm text-gray-600 hover:text-teal-600 hover:font-medium transition-all flex items-center gap-2"
                      >
                        <MapPin className="w-3 h-3" /> {loc.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/#reviews" className="text-white hover:text-accent-yellow transition-colors font-medium">
                Reviews
              </Link>
              <Link href="/contact-us/" className="text-white hover:text-accent-yellow transition-colors font-medium">
                Contact
              </Link>

              <Link
                href="/#quote"
                className="bg-accent-yellow text-gray-900 px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle mobile menu"
              className="lg:hidden text-white p-2 hover:bg-teal-700 rounded-lg transition-colors overflow-hidden relative z-[51]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-[55] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-[60] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm overflow-hidden shrink-0">
              <img
                src="/images/logo.webp"
                alt="502 Star Service Logo"
                width="400"
                height="400"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-bold text-gray-900 text-lg">Menu</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
          <Link
            href={basePath}
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link block py-3 text-lg font-medium text-gray-900 border-b border-gray-50"
          >
            Home
          </Link>
          <Link
            href="/about-us/"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link block py-3 text-lg font-medium text-gray-900 border-b border-gray-50"
          >
            About Us
          </Link>

          {/* Mobile Services Accordion */}
          <div className={`accordion-item border-b border-gray-50 ${activeAccordion === "services" ? "active" : ""}`}>
            <button
              onClick={() => toggleAccordion("services")}
              className="accordion-header w-full py-3 flex justify-between items-center text-lg font-medium text-gray-900"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeAccordion === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`accordion-content overflow-hidden transition-all duration-300 ${
                activeAccordion === "services" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-2 pl-4 space-y-4">
                <div>
                  <p className="font-bold text-teal-800 mb-2 text-sm uppercase tracking-wider">
                    Residential & Property
                  </p>
                  <div className="flex flex-col gap-2">
                    {resServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`${basePath}${s.id}/`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-link text-gray-600 text-base hover:text-teal-600"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-teal-800 mb-2 text-sm uppercase tracking-wider">
                    Commercial & Industrial
                  </p>
                  <div className="flex flex-col gap-2">
                    {comServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`${basePath}${s.id}/`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-link text-gray-600 text-base hover:text-teal-600"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-teal-800 mb-2 text-sm uppercase tracking-wider">
                    Property Management
                  </p>
                  <div className="flex flex-col gap-2">
                    {propServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`${basePath}${s.id}/`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-link text-gray-600 text-base hover:text-teal-600"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Locations Accordion */}
          <div className={`accordion-item border-b border-gray-50 ${activeAccordion === "locations" ? "active" : ""}`}>
            <button
              onClick={() => toggleAccordion("locations")}
              className="accordion-header w-full py-3 flex justify-between items-center text-lg font-medium text-gray-900"
            >
              Locations
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeAccordion === "locations" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`accordion-content overflow-hidden transition-all duration-300 ${
                activeAccordion === "locations" ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-2 pl-4 grid grid-cols-1 gap-3">
                {locations.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/${loc.id}/`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-teal-600 text-base flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" /> {loc.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link block py-3 text-lg font-medium text-gray-900 border-b border-gray-50"
          >
            Reviews
          </Link>
          <Link
            href="/contact-us/"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link block py-3 text-lg font-medium text-gray-900 border-b border-gray-50"
          >
            Contact
          </Link>

          <div className="pt-6 pb-8">
            <Link
              href="/#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-accent-yellow text-gray-900 text-center px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
