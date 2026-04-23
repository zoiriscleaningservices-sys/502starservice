import React from "react";
import { Phone, ShieldCheck, Clock, Award, Star } from "lucide-react";

export default function HomeContact() {
  return (
    <section id="quote" className="relative py-24 overflow-hidden bg-gray-50">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-100 rounded-full blur-[120px] mix-blend-multiply transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-yellow/20 rounded-full blur-[100px] mix-blend-multiply transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Pitch */}
          <div className="reveal active order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-8 border border-gray-200 shadow-sm">
              <Star className="w-5 h-5 text-accent-yellow fill-current" />
              <span className="text-teal-700 font-bold tracking-wide uppercase text-sm">Instant Transparent Pricing</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              Let's Transform <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                Your Space.
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 font-medium leading-relaxed max-w-lg">
              Get a fast, free, no-obligation quote in seconds. Experience Louisville's most trusted cleaning service with zero hidden fees.
            </p>

            <div className="space-y-6">
              {/* Floating Trust Badge 1 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 transform transition duration-500 hover:scale-105 hover:bg-teal-50/50 shadow-md hover:shadow-lg">
                <div className="flex-shrink-0 bg-teal-100 p-3 rounded-xl">
                  <Clock className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">2-Hour Response Time</h4>
                  <p className="text-gray-600 text-sm">We value your time. Expect a lightning-fast response from our local team.</p>
                </div>
              </div>

              {/* Floating Trust Badge 2 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 transform transition duration-500 hover:scale-105 hover:bg-yellow-50/50 shadow-md hover:shadow-lg">
                <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-xl">
                  <ShieldCheck className="w-8 h-8 text-accent-yellow" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">100% Satisfaction Guarantee</h4>
                  <p className="text-gray-600 text-sm">If you aren't completely thrilled, we'll re-clean for free.</p>
                </div>
              </div>

              {/* Floating Trust Badge 3 */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 transform transition duration-500 hover:scale-105 hover:bg-purple-50/50 shadow-md hover:shadow-lg">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-xl">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-1">Vetted Professionals</h4>
                  <p className="text-gray-600 text-sm">Background-checked, highly trained, and fully insured for your peace of mind.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest font-semibold">Or Call Us Directly</p>
              <a
                href="tel:5028351870"
                className="group inline-flex items-center gap-4 text-gray-900 hover:text-teal-600 transition-colors"
              >
                <div className="bg-teal-100 p-4 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-3xl font-bold">(502) 835-1870</span>
              </a>
            </div>
          </div>

          {/* Right Column: The Form Container */}
          <div className="reveal active order-1 lg:order-2">
            <div className="relative group">
              {/* Glowing animated background shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-accent-yellow rounded-[2.5rem] blur opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Clean White Form Card */}
              <div className="relative bg-white rounded-[2rem] p-2 sm:p-4 shadow-2xl border border-gray-100 overflow-hidden">
                <div style={{ height: "922px", minHeight: "922px" }} className="w-full relative z-10">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/v8olXj1AgIuDePlOGajN"
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "1.5rem" }}
                    id="inline-v8olXj1AgIuDePlOGajN"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact Us"
                    data-height="922"
                    data-layout-iframe-id="inline-v8olXj1AgIuDePlOGajN"
                    data-form-id="v8olXj1AgIuDePlOGajN"
                    title="Contact Us"
                  ></iframe>
                </div>
                {/* Note: In a real Next.js app, external scripts like form_embed.js are better loaded via next/script */}
                <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
