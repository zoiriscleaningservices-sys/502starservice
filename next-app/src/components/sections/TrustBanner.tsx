import React from "react";
import { Star, ShieldCheck, ThumbsUp, Medal } from "lucide-react";

export default function TrustBanner({ location = "Louisville" }: { location?: string }) {
  const trustItems = [
    { icon: <Star className="w-5 h-5 text-accent-yellow fill-current" />, text: `Top-Rated Cleaning Services in ${location}` },
    { icon: <ShieldCheck className="w-5 h-5 text-teal-400" />, text: "Fully Insured & Bonded" },
    { icon: <ThumbsUp className="w-5 h-5 text-purple-400" />, text: "100% Satisfaction Guarantee" },
    { icon: <Medal className="w-5 h-5 text-blue-400" />, text: "Vetted Professionals" },
  ];

  return (
    <div className="bg-[#0a0f12] border-y border-white/10 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3 reveal active">
              <div className="flex-shrink-0 bg-white/5 p-2 rounded-full border border-white/5">
                {item.icon}
              </div>
              <span className="text-gray-300 font-medium text-sm md:text-base tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
