"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote, ShieldCheck } from "lucide-react";

interface Testimonial {
  id: string;
  author: string;
  initials: string;
  avatarColor: string;
  treatment: string;
  quote: string;
  timeAgo: string;
  rating: number;
}

const REVIEWS: Testimonial[] = [
  {
    id: "1",
    author: "Prashant K.",
    initials: "PK",
    avatarColor: "bg-sky-100 text-[#0082c9]",
    treatment: "Dental Consultation & Cleaning",
    quote: "Dr. Aria Sharma and her team are the absolute best. So kind, thorough, and unhurried. She walked me through my digital diagnosis with zero pressure.",
    timeAgo: "1 month ago",
    rating: 5,
  },
  {
    id: "2",
    author: "Snehal D.",
    initials: "SD",
    avatarColor: "bg-emerald-100 text-[#639f19]",
    treatment: "Root Canal Treatment",
    quote: "The level of clinical honesty at Aura Dental Studio is unmatched. Dr. Aria Sharma will not recommend anything you don't need. Spotless studio and completely painless care.",
    timeAgo: "2 months ago",
    rating: 5,
  },
  {
    id: "3",
    author: "Amol P.",
    initials: "AP",
    avatarColor: "bg-amber-100 text-amber-700",
    treatment: "Tooth Restoration",
    quote: "Transparent consultation with genuine guidance. No unnecessary procedures were pushed. Exceptional follow-up care and reassuring ambience.",
    timeAgo: "3 months ago",
    rating: 5,
  },
  {
    id: "4",
    author: "Kavita S.",
    initials: "KS",
    avatarColor: "bg-purple-100 text-purple-700",
    treatment: "Pediatric Dental Care",
    quote: "Visited for my son's dental filling. The doctor handled him with so much patience and warmth that he felt completely at ease from the first minute.",
    timeAgo: "4 months ago",
    rating: 5,
  },
  {
    id: "5",
    author: "Rohan M.",
    initials: "RM",
    avatarColor: "bg-cyan-100 text-cyan-700",
    treatment: "Emergency Tooth Sensitivity",
    quote: "I had severe sensitivity and sudden toothache. Dr. Aria Sharma diagnosed it immediately with digital imaging and explained the entire treatment clearly.",
    timeAgo: "5 months ago",
    rating: 5,
  },
  {
    id: "6",
    author: "Pooja V.",
    initials: "PV",
    avatarColor: "bg-teal-100 text-teal-700",
    treatment: "Teeth Scaling & Hygiene",
    quote: "Clean, hygienic, and very professional studio at Central Boulevard. Convenient evening hours until 9:00 PM make it effortless for working professionals.",
    timeAgo: "6 months ago",
    rating: 5,
  },
];

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group into pairs of 2 for desktop split
  const pairs = [
    [REVIEWS[0], REVIEWS[1]],
    [REVIEWS[2], REVIEWS[3]],
    [REVIEWS[4], REVIEWS[5]],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pairs.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [pairs.length]);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + pairs.length) % pairs.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % pairs.length);

  const currentPair = pairs[currentIndex];

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#fafbfc] text-slate-900 relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Subtle Ambient Lighting Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#0082c9]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#76bc21]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Fine Background Dot Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #003e66 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Strip: Tagline, Editorial Title & Nav */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
              Trusted by families across{" "}
              <span className="relative inline-block font-normal">
                <span className="relative z-10 bg-gradient-to-r from-[#0082c9] via-[#005f94] to-[#76bc21] bg-clip-text text-transparent italic font-serif inline-block pr-1.5">
                  Mumbai.
                </span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[6px] bg-[#76bc21]/20 -z-0 rounded-full" />
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
              Real experiences from patients who appreciate our unhurried consultations, crystal-clear pricing, and gentle approach.
            </p>
          </div>

          {/* Slider Pagination Controls */}
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="flex items-center gap-1.5">
              {pairs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-[#0082c9]" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 pl-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0082c9] transition-all active:scale-95 cursor-pointer"
                aria-label="Previous review pair"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center text-slate-700 hover:text-[#0082c9] transition-all active:scale-95 cursor-pointer"
                aria-label="Next review pair"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dual Card Showcase (Light-Themed Glassmorphic Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {currentPair.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl p-7 sm:p-8 bg-white/95 backdrop-blur-xl border border-slate-200/90 hover:border-[#0082c9]/35 hover:shadow-xl hover:shadow-sky-950/5 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              {/* Subtle Decorative Quote Watermark */}
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-sky-50 transition-colors pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-4 relative z-1">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Info Strip */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 relative z-1">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs font-sans ${review.avatarColor} shadow-xs`}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-slate-900 text-base flex items-center gap-1.5">
                      {review.author}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline" />
                    </div>
                    <div className="text-xs text-slate-500 font-sans">
                      Verified Patient • {review.timeAgo}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-800">100% Genuine Clinical Feedback</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Overall Score: <strong className="text-slate-900 font-bold">4.9 / 5.0</strong></span>
            <span>Total Reviews: <strong className="text-slate-900 font-bold">350+</strong></span>
            <span className="text-[#0082c9] font-bold">Bandra West, Mumbai</span>
          </div>
        </div>

      </div>
    </section>
  );
}
