import React from "react";
import Link from "next/link";
import { Star, ArrowRight, ShieldCheck, Users, Award, Phone } from "lucide-react";

interface HeroProps {
  isVideo?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  desc?: React.ReactNode;
  bannerImage?: string;
  isLocal?: boolean;
}

export default function Hero({ isVideo = false, title, subtitle, desc, bannerImage, isLocal }: HeroProps) {
  if (isVideo) {
    return (
      <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <video autoPlay loop muted playsInline aria-hidden="true" className="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70">
            <source src="/hero-vid/Drone_City_View_Video_Generation.mp4" type="video/mp4" />
            <source src="/hero-vid/Drone_City_View_Video_Generation (1).mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/60 to-gray-900/90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-16 pb-8">
          <div className="reveal active w-full max-w-5xl mx-auto backdrop-blur-[2px] p-4 sm:p-6 rounded-[2rem]">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4 sm:mb-6 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform transition hover:scale-105">
              <div className="flex bg-accent-yellow p-1 rounded-full">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900 fill-current" />
              </div>
              <span className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase">5.0 Rating on Google (16 Reviews)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 mb-4 leading-[1.1] tracking-tight filter drop-shadow-lg">
              Cleaning Services in Louisville KY
            </h1>

            <h2 className="text-xl md:text-2xl text-teal-300 font-bold max-w-4xl mx-auto leading-snug mb-4 tracking-wide text-shadow-sm">
              Top-rated Louisville Kentucky cleaning services for residential homes, apartments, and move-in/move-out needs.
            </h2>

            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
              Get a transparent flat-rate quote and book your Louisville cleaning service in 60 seconds. 100% Satisfaction Guaranteed!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#quote"
                className="group w-full sm:w-auto bg-accent-yellow text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(251,208,39,0.3)] hover:shadow-[0_0_60px_rgba(251,208,39,0.5)] flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10">Get Free Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#services"
                className="group w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/20 hover:border-teal-400/50 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                Our Services 
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 items-center text-white/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-medium text-sm sm:text-base">Loved by Louisville homeowners</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-medium text-sm sm:text-base">Top 1% of applicants</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="font-medium text-sm sm:text-base">High-quality equipment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>
    );
  }

  // Dynamic Hero for service/location pages - 100vh Ultra Modern Cinematic Design
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0f12]">
      {/* Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 animate-slow-zoom">
          <img
            src={bannerImage || "/images/WhatsApp Image 2026-02-27 at 11.40.23 PM (1).jpeg"}
            alt={typeof title === 'string' ? title : "502 Star Service"}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Complex Deep Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f12]/90 via-[#0a0f12]/40 to-[#0a0f12]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 via-transparent to-teal-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(10,15,18,0.8)_100%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center flex-grow pt-16 pb-8 reveal active">
        {/* Glassmorphic Rating Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-4 sm:mb-6 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform transition hover:scale-105">
          <div className="flex bg-accent-yellow p-1 rounded-full">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900 fill-current" />
          </div>
          <span className="text-white font-medium text-xs sm:text-sm tracking-wide uppercase">Louisville's Premier Cleaning</span>
        </div>

        {/* Ultra-Modern Typography */}
        <div className="text-center max-w-5xl mx-auto backdrop-blur-[2px] p-4 sm:p-6 rounded-[2rem]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 mb-4 leading-[1.1] tracking-tight filter drop-shadow-lg">
            {title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-teal-300 font-bold max-w-4xl mx-auto leading-snug mb-4 tracking-wide text-shadow-sm">
            {subtitle}
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            {desc || "Experience a spotless environment with our top-rated, fully insured professionals. Book your service instantly without hidden fees."}
          </p>

          {/* High-End Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:5028351870"
              className="group w-full sm:w-auto bg-accent-yellow text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(251,208,39,0.3)] hover:shadow-[0_0_60px_rgba(251,208,39,0.5)] flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" /> 
              <span className="relative z-10">(502) 835-1870</span>
            </a>
            
            <Link
              href="#quote"
              className="group w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/20 hover:border-teal-400/50 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all shadow-xl flex items-center justify-center gap-3"
            >
              Get Free Quote 
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform text-teal-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modern Bouncing Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer animate-bounce">
        <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
