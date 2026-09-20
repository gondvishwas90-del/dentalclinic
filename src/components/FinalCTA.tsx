"use client";

import React from "react";
import { Phone, Calendar, ArrowRight, Star, ShieldCheck, Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

interface FinalCTAProps {
  onBookClick: () => void;
}

export function FinalCTA({ onBookClick }: FinalCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#fafbfc] via-white to-sky-50/40 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Ambient Lighting Spheres */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#0082c9]/8 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#76bc21]/8 rounded-full blur-[110px] pointer-events-none" />

      {/* Geometric Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #004B78 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Luxury Flagship Card */}
        <div className="rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 bg-white/95 backdrop-blur-2xl border border-slate-200/90 hover:border-[#0082c9]/35 shadow-2xl shadow-sky-950/5 transition-all duration-300 relative overflow-hidden">
          
          {/* Subtle Accent Glow Ring at Top */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-[#0082c9]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14 relative z-1">
            
            {/* Left Narrative Block */}
            <div className="space-y-4 max-w-2xl">
              {/* Main Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-[1.12]">
                Ready for a better{" "}
                <span className="relative inline-block font-normal">
                  <span className="relative z-10 bg-gradient-to-r from-[#0082c9] via-[#005f94] to-[#76bc21] bg-clip-text text-transparent italic font-serif inline-block pr-2">
                    dental visit?
                  </span>
                  <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[6px] bg-[#76bc21]/20 -z-0 rounded-full" />
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Join over 350+ families who rely on Dr. Aria Sharma for gentle care, unhurried consultations, and transparent pricing. Appointments available daily till 9:00 PM.
              </p>
            </div>

            {/* Right Action CTA Column */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3.5 shrink-0 lg:w-72">
              
              {/* Primary Shimmer Button: Book Appointment */}
              <button
                onClick={onBookClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#76bc21] to-[#639f19] hover:from-[#6cb01b] hover:to-[#578d14] text-white rounded-full font-bold text-sm shadow-xl shadow-[#76bc21]/30 hover:shadow-2xl hover:shadow-[#76bc21]/40 transition-all duration-300 active:scale-[0.98] cursor-pointer overflow-hidden text-center"
              >
                {/* Shimmer Sweep Animation Overlay */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer pointer-events-none" />
                
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Call Button with Live Status Indicator */}
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-full font-semibold text-sm border border-slate-200/90 hover:border-[#0082c9]/40 hover:text-[#0082c9] transition-all duration-200 text-center shadow-2xs"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Phone className="w-4 h-4 text-[#0082c9]" />
                <span>Call Clinic Directly</span>
              </a>

            </div>

          </div>

          {/* Bottom Telemetry Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#0082c9]" />
              <span>Suite 102, The Wellness Pavilion, Central Boulevard, Bandra West, Mumbai</span>
            </div>

            <div className="flex items-center gap-4 font-medium">
              <span>Shifts: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM</span>
              <span className="text-[#639f19] font-bold">Open Monday–Saturday</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
