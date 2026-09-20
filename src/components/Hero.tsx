"use client";

import React from "react";
import { Calendar, Phone, ArrowRight, BookOpen, Star } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  const leftColImages = [
    {
      imgUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      alt: "Dentist treating patient in dental chair",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      alt: "Modern clinic reception and desk",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      alt: "Dental operatory chair with light",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      alt: "Dentist treating patient in dental chair",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      alt: "Modern clinic reception and desk",
    },
  ];

  const rightColImages = [
    {
      imgUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      alt: "Lead dentist Dr. Aria Sharma standing in dental clinic",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      alt: "Curved corridor and modern dental office",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
      alt: "Autoclave sterile dental tools and equipment",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      alt: "Lead dentist Dr. Aria Sharma standing in dental clinic",
    },
    {
      imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      alt: "Curved corridor and modern dental office",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#004B78]">
      
      {/* 1. Full-Bleed Looping Deep Ocean Water Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://cdn.prod.website-files.com/6a29d43f03b10014aa9b0c8c%2F6a2b283b2dc4436259a050b1_AdobeStock_369817497_poster.0000000.jpg"
          className="w-full h-full object-cover opacity-85"
        >
          <source
            src="https://cdn.prod.website-files.com/6a29d43f03b10014aa9b0c8c%2F6a2b283b2dc4436259a050b1_AdobeStock_369817497_mp4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#002640]/90 via-[#004B78]/70 to-[#00385F]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-[1.08] tracking-tight">
              Advanced <br />
              dentistry <em className="italic font-serif font-light text-white/95">meets</em> <br />
              genuine warmth.
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed font-normal">
              Where advanced dentistry meets genuine warmth. Led by Dr. Aria Sharma— accepting new patients, transparent consultation, morning and evening hours in Bandra West, Mumbai.
            </p>

            {/* Buttons: #76bc21 Green Pill Button + White Outline Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#76bc21] hover:bg-[#639f19] active:bg-[#528414] text-white rounded-full font-bold text-xs sm:text-sm shadow-xl shadow-[#76bc21]/30 hover:shadow-2xl transition-all active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-xs sm:text-sm border border-white/40 backdrop-blur-md transition-all shadow-sm"
              >
                <span>Call Us — {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Two Frosted Glass Translucent Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 max-w-lg">
              
              {/* Card 1: Patient Education */}
              <div
                onClick={() => {
                  const el = document.getElementById("problems");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/15 hover:bg-white/20 backdrop-blur-xl p-5 rounded-2xl border border-white/25 transition-all cursor-pointer group space-y-2.5 shadow-lg"
              >
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 border border-white/25">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-heading text-sm font-bold text-white">
                    Patient Education
                  </div>
                  <div className="text-xs text-white/70 leading-snug">
                    Tips on oral health, treatment guides &amp; answers.
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#90d638] pt-1">
                    <span>Read Blog</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Card 2: Patient Reviews */}
              <div
                onClick={() => {
                  const el = document.getElementById("reviews");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white/15 hover:bg-white/20 backdrop-blur-xl p-5 rounded-2xl border border-white/25 transition-all cursor-pointer group space-y-2.5 shadow-lg"
              >
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 border border-white/25">
                  <Star className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-heading text-sm font-bold text-white">
                    Patient Reviews
                  </div>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-[#FFD230] text-[#FFD230]" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white">4.9</span>
                  </div>
                  <div className="text-xs text-white/70">
                    Trusted by 350+ families
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#90d638] pt-1">
                    <span>See Reviews</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dual Vertical Auto-Scrolling Photo Marquee (lg:col-span-5) */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="relative h-[580px] overflow-hidden rounded-3xl p-1">
              
              {/* Soft Gradient Fade Masks */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#00385F] to-transparent z-10 pointer-events-none rounded-t-3xl" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#00385F] to-transparent z-10 pointer-events-none rounded-b-3xl" />

              <div className="grid grid-cols-2 gap-3.5 h-full">
                
                {/* Left Column Scrolling UP */}
                <div className="space-y-3.5 hero_image-scroll-up">
                  {leftColImages.concat(leftColImages).map((card, i) => (
                    <div
                      key={`left-img-${i}`}
                      className="rounded-2xl overflow-hidden shadow-xl bg-slate-900/60 aspect-[4/5] border border-white/20"
                    >
                      <img
                        src={card.imgUrl}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Right Column Scrolling DOWN */}
                <div className="space-y-3.5 hero_image-scroll-down">
                  {rightColImages.concat(rightColImages).map((card, i) => (
                    <div
                      key={`right-img-${i}`}
                      className="rounded-2xl overflow-hidden shadow-xl bg-slate-900/60 aspect-[4/5] border border-white/20"
                    >
                      <img
                        src={card.imgUrl}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
