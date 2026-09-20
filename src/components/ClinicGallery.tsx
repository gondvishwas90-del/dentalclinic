"use client";

import React from "react";
import { ShieldCheck, Check } from "lucide-react";

export function ClinicGallery() {
  const spaces = [
    {
      title: "Ergonomic Treatment Chair",
      caption: "Engineered for maximum lumbar support and relaxation during examinations and dental treatments.",
      badge: "PATIENT COMFORT",
      icon: "💺",
    },
    {
      title: "Autoclave Sterilization Unit",
      caption: "Hospital-grade multi-stage autoclave sterilization ensuring 100% sterile instruments for every patient.",
      badge: "HYGIENE STANDARD",
      icon: "🧪",
    },
    {
      title: "Digital Consultation Lounge",
      caption: "Comfortable private discussion space to review digital imaging and personalized treatment plans.",
      badge: "DIGITAL DIAGNOSTICS",
      icon: "💻",
    },
    {
      title: "Clean Reception & Lounge",
      caption: "Welcoming, air-cooled reception lounge conveniently located at Central Boulevard, Bandra West, Mumbai.",
      badge: "RECEPTION",
      icon: "🏢",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FBFBFA] border-b border-[#121815]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16" data-animate="fade-up">
          <div className="inline-flex items-center gap-1 text-xs font-mono-clinical uppercase tracking-wider text-[#0E2C22] bg-[#7AA885]/20 px-3 py-1 rounded-full border border-[#7AA885]/40 font-bold">
            Clinic Environment &amp; Hygiene
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121815] tracking-tight">
            A Relaxing, <em className="italic font-serif text-[#0E2C22]">Sanitized Space</em>
          </h2>
          <p className="text-sm sm:text-base text-[#5A6860]">
            Experience dental care in an environment designed for your comfort, privacy, and safety.
          </p>
        </div>

        {/* 4 Spaces Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-animate-stagger="100">
          {spaces.map((space, i) => (
            <div
              key={i}
              data-animate="fade-up"
              className="bg-white rounded-2xl border border-[#121815]/8 p-6 flex flex-col justify-between shadow-xs hover:border-[#7AA885] hover:shadow-md transition-all"
            >
              <div>
                <div className="h-36 rounded-xl bg-[#0E2C22] flex flex-col items-center justify-center text-white relative overflow-hidden mb-5">
                  <span className="text-4xl mb-1">{space.icon}</span>
                  <span className="text-[9px] font-mono-clinical text-[#A3D9C9] tracking-wider uppercase bg-white/10 px-2 py-0.5 rounded">
                    {space.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#121815] mb-2">
                  {space.title}
                </h3>
                <p className="text-xs text-[#5A6860] leading-relaxed">
                  {space.caption}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#121815]/5 flex items-center gap-1.5 text-[11px] font-mono-clinical text-[#7AA885] font-bold">
                <Check className="w-4 h-4" />
                <span>Verified Sterilization Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Guarantee */}
        <div className="mt-12 bg-[#0E2C22] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl" data-animate="fade-up">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
              <ShieldCheck className="w-6 h-6 text-[#A3D9C9]" />
            </div>
            <div>
              <div className="font-heading text-lg font-bold">
                Hospital-Grade Infection Control
              </div>
              <p className="text-xs text-white/70 mt-0.5">
                Every instrument undergoes strict chemical and autoclave heat sterilization before each patient visit.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono-clinical text-[#FFD230] font-semibold bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 shrink-0">
            100% AUTOCLAVED TOOLS
          </div>
        </div>

      </div>
    </section>
  );
}
