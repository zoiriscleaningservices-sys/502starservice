"use client";
import React, { useRef } from "react";
import { ChevronRight, BadgeCheck } from "lucide-react";

export default function Reviews() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (sliderRef.current && sliderRef.current.firstElementChild) {
      const card = sliderRef.current.firstElementChild as HTMLElement;
      const scrollAmount = card.offsetWidth + 18; // 18px gap
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const StarIcon = () => (
    <svg className="w-[18px] h-[18px] fill-[#fbbc04]" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.755 4.635 1.122 6.545z" />
    </svg>
  );

  const SmallStarIcon = () => (
    <svg className="w-3.5 h-3.5 fill-[#fbbc04]" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.755 4.635 1.122 6.545z" />
    </svg>
  );

  const reviews = [
    {
      name: "Kathleen Daniel",
      time: "a month ago",
      avatar: "https://ui-avatars.com/api/?name=Kathleen+Daniel&background=34a853&color=fff&size=40",
      text: `"I highly recommend 502 Star Service. Yunier and his team were punctual, detail-oriented, and left our home sparkling. All tasks were completed exactly as communicated..."`,
    },
    {
      name: "linda coke",
      time: "6 months ago",
      avatar: "https://ui-avatars.com/api/?name=linda+coke&background=ea4335&color=fff&size=40",
      text: `"The cleaning crew arrived on time and did an amazing job on our deep clean. The attention to detail was incredible. Our house looks brand new!"`,
    },
    {
      name: "Mike T.",
      time: "2 months ago",
      avatar: "https://ui-avatars.com/api/?name=Mike+T&background=4285f4&color=fff&size=40",
      text: `"Best cleaning service in Louisville. Flat rate pricing is great and there were no hidden fees. Will definitely use them again for recurring service."`,
    },
    {
      name: "Sarah J.",
      time: "4 months ago",
      avatar: "https://ui-avatars.com/api/?name=Sarah+J&background=fbbc04&color=fff&size=40",
      text: `"They handled our move-out clean and got our full deposit back. Very professional and the customer service was extremely responsive."`,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal active">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            See What Our Clients Have to Say
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-center justify-center reveal active">
          {/* Left Sidebar (Rating Summary) */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Logo badge */}
            <div className="w-[85px] h-[85px] bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 p-1 shrink-0 overflow-hidden relative">
              <img
                src="/images/logo.webp"
                alt="502 Star Service"
                width="400"
                height="400"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Stats & Button */}
            <div className="flex flex-col items-start text-left">
              <h3 className="font-bold text-gray-900 text-[17px] mb-0.5 tracking-tight">502 Star Cleaning...</h3>

              <div className="flex items-center mb-1">
                <div className="flex">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>

              <p className="text-[14px] text-gray-600 mb-3 font-normal">16 Google reviews</p>

              <a
                href="https://g.page/r/CWc079ZdwyW2EBM/review"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-300 text-gray-800 py-1.5 px-4 rounded text-[14px] font-medium hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm"
              >
                Write a review
              </a>
            </div>
          </div>

          {/* Right Slider (Reviews API Look-a-like) */}
          <div className="w-full lg:w-[800px] relative">
            {/* Nav Button */}
            <button
              onClick={scrollNext}
              aria-label="Next review"
              className="review-nav-next absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all border border-gray-100 hidden sm:flex"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>

            <div
              ref={sliderRef}
              id="google-reviews-slider"
              className="flex overflow-x-auto gap-[18px] pb-4 px-2 snap-x snap-mandatory hide-scroll scroll-smooth"
            >
              {reviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="min-w-[270px] w-[270px] flex-none snap-center bg-white p-[22px] rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.08)] border border-gray-200/60 flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img src={rev.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                      <div className="flex flex-col">
                        <p className="font-bold text-gray-900 text-[15px] leading-tight mb-0.5">{rev.name}</p>
                        <p className="text-[13px] text-gray-500 font-normal">{rev.time}</p>
                      </div>
                    </div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="flex items-center mb-2.5">
                    <div className="flex">
                      <SmallStarIcon />
                      <SmallStarIcon />
                      <SmallStarIcon />
                      <SmallStarIcon />
                      <SmallStarIcon />
                    </div>
                    <BadgeCheck className="w-4 h-4 text-[#1a73e8] fill-white ml-2" />
                  </div>
                  <p className="text-gray-700 text-[14px] leading-relaxed line-clamp-4">{rev.text}</p>
                  <button className="text-gray-500 text-[13px] font-normal hover:text-gray-900 text-left mt-2">
                    Read more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
