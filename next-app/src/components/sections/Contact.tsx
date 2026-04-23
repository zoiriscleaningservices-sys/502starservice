import React from "react";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="quote" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:col-span-1 max-w-lg mx-auto">
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,165,166,0.1)] border-2 border-teal-50 reveal active">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Quote</h3>
            <p className="text-gray-500 text-sm mb-6">We respond within 2 hours — fast, free &amp; no-obligation!</p>
            <div style={{ height: "922px", minHeight: "922px" }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/v8olXj1AgIuDePlOGajN"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
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
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <a
                href="tel:5028351870"
                className="text-teal-700 font-bold text-lg hover:text-teal-900 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> (502) 835-1870
              </a>
              <p className="text-gray-500 text-xs mt-1">Call or text anytime — 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
