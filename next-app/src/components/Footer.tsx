"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locations } from "../lib/data";
import { Facebook, Instagram, Twitter, ChevronRight, ArrowRight, PhoneCall, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  const pathname = usePathname() || "";
  const parts = pathname.split("/").filter(Boolean);
  const isLocationSilo = parts.length > 0 && locations.some((l) => l.id === parts[0]);
  const siloId = isLocationSilo ? parts[0] : null;
  const basePath = siloId ? `/${siloId}/` : "/";

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-[#0f172a] to-teal-950 text-gray-300 pt-24 pb-8 overflow-hidden border-t border-white/5">
      {/* Background Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-600/10 blur-[120px]"></div>
        <div className="absolute bottom-0 -right-[5%] w-[40%] h-[40%] rounded-full bg-accent-yellow/5 blur-[100px]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 reveal active">
          {/* Brand & Mission Column (Spans 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href={`${basePath}#home`} className="flex items-center gap-4 mb-6 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-1 shadow-[0_0_20px_rgba(250,201,22,0.15)] group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logo.webp"
                  alt="502 Star Service Louisville Cleaning Company Logo"
                  width="400"
                  height="400"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                502 Star <span className="text-accent-yellow">Service</span>
              </span>
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 pr-4">
              Louisville's premier 5-star cleaning solution. We deliver absolute excellence across residential,
              commercial, and property management spaces. Trusted, licensed, and meticulously thorough.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/61581019032152"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(20,184,166,0.2)] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`${basePath}#home`}
                aria-label="Instagram Profile"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(20,184,166,0.2)] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`${basePath}#home`}
                aria-label="Twitter Profile"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(20,184,166,0.2)] transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Spans 2) */}
          <div className="lg:col-span-2 lg:ml-8">
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-yellow"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`${basePath}#home`}
                  className="text-gray-400 hover:text-accent-yellow hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/"
                  className="text-gray-400 hover:text-accent-yellow hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}#services`}
                  className="text-gray-400 hover:text-accent-yellow hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}#locations`}
                  className="text-gray-400 hover:text-accent-yellow hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}#reviews`}
                  className="text-gray-400 hover:text-accent-yellow hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" />
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Services Column (Spans 3) */}
          <div className="lg:col-span-3 lg:ml-4">
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Popular Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`${basePath}deep-cleaning/`}
                  className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-teal-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  House Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}commercial-cleaning/`}
                  className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  Commercial Janitorial
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}airbnb-cleaning/`}
                  className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  Airbnb / Rental Cleanup
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}move-in-cleaning/`}
                  className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-teal-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  Move-In & Move-Out
                </Link>
              </li>
              <li>
                <Link
                  href={`${basePath}post-construction-cleanup/`}
                  className="text-gray-400 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 flex items-center text-[15px] group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 text-yellow-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  Post-Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column (Spans 3) */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-accent-yellow" />
                Reach Out Today
              </h3>

              <a href="tel:5028351870" className="block mb-6 hover:-translate-y-1 transition-transform group/phone">
                <span className="block text-gray-500 text-[13px] uppercase tracking-wider font-bold mb-1">
                  Call for an Estimate
                </span>
                <span className="text-3xl font-extrabold text-white group-hover/phone:text-accent-yellow transition-colors">
                  (502) 835-1870
                </span>
              </a>

              <div className="space-y-4">
                <a
                  href="mailto:502starservice@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors group/email"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0 text-gray-500 group-hover/email:text-teal-400 transition-colors" />
                  <span className="text-[14px]">502starservice@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gray-500" />
                  <span className="text-[14px] leading-relaxed">
                    Serving Jefferson County &<br />
                    Louisville, KY Metro
                  </span>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0 text-gray-500" />
                  <span className="text-[14px] leading-relaxed">
                    Mon - Sat: 8:00 AM - 6:00 PM<br />
                    Sun: Available by Request
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 reveal active !duration-[1200ms]">
          <div className="flex items-center gap-4 order-2 md:order-1">
            <p className="text-[13px] text-gray-500">&copy; 2026 502 Star Service. All Rights Reserved.</p>
          </div>

          <div className="order-1 md:order-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[13px] font-medium shadow-[0_0_15px_rgba(34,197,94,0.1)]">
              <ShieldCheck className="w-4 h-4" />
              Fully Licensed, Bonded & Insured
            </div>
            <div className="flex gap-4 text-[13px] text-gray-500">
              <a href="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <span>&bull;</span>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
