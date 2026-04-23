import React from "react";
import { CheckCircle, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal active">
            <div className="relative">
              <img
                src="/images/clean_mansion_interior.png"
                alt="Ultra realistic clean interior of a modern mansion"
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-yellow p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold text-gray-900">5+</p>
                <p className="text-gray-800 font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="reveal active">
            <p className="text-teal-800 font-bold text-lg uppercase tracking-wider mb-2">About Us</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              #1 RATED CLEANING SERVICES IN LOUISVILLE KY
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Thanks so much for visiting <strong>502 Star Service</strong>. If you are looking for top-tier <strong>cleaning services in Louisville KY</strong>, you have found the right team. We are the area's highest-rated and most trusted residential and commercial cleaning company. Our rapid growth is entirely due to our elite customer service, hyper-attention to detail, and a rigorous 100% satisfaction guarantee.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Whether you need a top-to-bottom move-out deep clean in The Highlands, regular maid service in Anchorage,
              or meticulous window cleaning in Old Louisville, we have you covered. We provide fully transparent,
              flat-rate pricing up front, so you can easily budget for eco-friendly, expert house cleaning without
              hidden fees.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We consistently maintain a five-star rating on Google because we only hire the best. Our rigorous
              screening process means every cleaner in your Louisville home is background-checked, thoroughly trained in
              modern sanitization protocols, and fully bonded and insured. You are in safe, capable hands with 502 Star
              Service.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Background Checked</h3>
                  <p className="text-sm text-gray-600">All staff verified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Quality Guarantee</h3>
                  <p className="text-sm text-gray-600">100% satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
