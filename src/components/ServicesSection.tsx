"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const services = [
    {
      id: "invisalign",
      title: "Invisalign Clear Aligners",
      desc: "Achieve the straight, beautiful smile you've always wanted with Invisalign—a discreet and comfortable alternative to traditional braces.",
      btnText: "Schedule your Invisalign appointment",
      imgUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      desc: "Veneers, Zoom whitening, dental bonding, and smile makeovers designed to help you look and feel your best.",
      btnText: "Schedule your cosmetic consult",
      imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "implants",
      title: "Implants & Restorative Care",
      desc: "Dental implants, All-on-6, crowns, bridges, and dentures. Planned with digital precision and impressions.",
      btnText: "Schedule your restorative consult",
      imgUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "general",
      title: "General & Preventive Dentistry",
      desc: "Cleanings, exams, digital X-rays, fluoride, sealants, and oral cancer screenings. We focus on catching concerns early.",
      btnText: "Schedule your general wellness consult",
      imgUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "emergency",
      title: "Emergency Dental Care",
      desc: "Toothache or dental injury? Our team works to accommodate urgent visits as quickly as possible. We're here to help.",
      btnText: "Schedule your emergency visit",
      imgUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  // Pinned Page Scroll -> Translates Horizontal Track Smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far down the user has scrolled through this pinned section
      const totalScrollable = sectionHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -sectionTop;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

      setScrollProgress(progress);

      // Total horizontal distance the track needs to travel
      const trackWidth = trackRef.current.scrollWidth;
      const visibleWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - visibleWidth + 120);

      setTranslateX(progress * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#EBF6FC] h-[260vh] sm:h-[280vh]"
    >
      {/* Pinned Sticky Viewport Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        
        {/* Background Waves Texture */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://cdn.prod.website-files.com/6a29d43f03b10014aa9b0c8c/6a2bdb1b581b66e08278910a_abstract-waves.jpg%20(1).webp"
            alt="Abstract blue and white wave background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#EBF6FC]/50 via-[#F2FAFE]/30 to-[#EBF6FC]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full mb-6 sm:mb-8">
          
          {/* Header Row */}
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-tight">
              Meet clinical expertise.
            </h2>
          </div>

        </div>

        {/* Horizontal Card Track Driven by Page Scroll */}
        <div className="relative w-full overflow-hidden pl-4 sm:pl-8 lg:pl-16">
          <div
            ref={trackRef}
            style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
            className="flex gap-6 sm:gap-8 will-change-transform transition-transform duration-75 ease-out"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[300px] sm:min-w-[460px] lg:min-w-[500px] max-w-[520px] bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shrink-0"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.imgUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 space-y-2.5">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Card Button */}
                <div className="px-6 sm:px-8 pb-7 pt-1">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#76bc21] hover:bg-[#639f19] active:bg-[#528414] text-white rounded-full font-bold text-xs sm:text-sm shadow-md shadow-[#76bc21]/25 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <span>{service.btnText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Bar at Bottom */}
        <div className="max-w-xs mx-auto mt-6 sm:mt-8 bg-slate-300/60 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-[#0082c9] h-full rounded-full transition-all duration-75"
            style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
          />
        </div>

      </div>
    </section>
  );
}
