import React from "react";
import { MousePointerClick, Sparkles, Coffee } from "lucide-react";

export default function Process({ location = "Louisville" }: { location?: string }) {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-teal-600" />,
      title: "1. Book Online in 60 Seconds",
      desc: `Select your ${location} service area, pick a date, and get an instant, transparent flat-rate quote. No hidden fees, ever.`,
    },
    {
      icon: <Sparkles className="w-8 h-8 text-teal-600" />,
      title: "2. We Clean Your Home",
      desc: `Our vetted, fully insured cleaning professionals arrive fully equipped with premium supplies to deep clean your ${location} property.`,
    },
    {
      icon: <Coffee className="w-8 h-8 text-teal-600" />,
      title: "3. Sit Back & Relax",
      desc: `Come home to a pristine, fresh-smelling space. If you're not 100% satisfied, our guarantee ensures we will re-clean it for free.`,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal active">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            How Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Cleaning Services in {location} KY</span> Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've simplified the process of hiring a professional maid service in {location}. 
            Get your weekends back in three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-teal-100 via-teal-300 to-teal-100 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center reveal active" style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,165,166,0.15)] border-4 border-teal-50 mb-6 transform transition duration-500 hover:scale-110 hover:border-teal-100">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
