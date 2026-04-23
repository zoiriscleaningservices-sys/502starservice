import React from "react";
import { CheckCircle2, Leaf, Clock, HeartHandshake } from "lucide-react";

export default function WhyUs({ location = "Louisville", keyword = "Cleaning Services" }: { location?: string, keyword?: string }) {
  const reasons = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Eco-Friendly Products",
      desc: "We use pet-safe, family-friendly cleaning solutions that protect your loved ones while delivering a spotless clean.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
      title: "100% Satisfaction Guarantee",
      desc: `If you aren't completely thrilled with your ${location} home, we'll return within 24 hours to re-clean it for free.`,
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-rose-500" />,
      title: "Vetted & Trusted Staff",
      desc: "Every cleaner undergoes a rigorous background check and intensive training before stepping foot in your home.",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-500" />,
      title: "Reliable & Punctual",
      desc: `We respect your time. Our ${location} teams arrive on schedule and complete the job efficiently without cutting corners.`,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal active">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Why Choose Our <span className="text-teal-600">{keyword} in {location}</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are more than just a {keyword.toLowerCase()} provider. We are {location}'s premier property care team, 
            dedicated to elevating your standard of living through meticulous cleaning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl reveal active"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
