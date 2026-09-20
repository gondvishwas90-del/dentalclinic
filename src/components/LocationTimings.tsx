"use client";

import React from "react";
import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

export function LocationTimings() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#EBF6FC]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-slate-200 mb-12" data-animate="fade-up">
          <div className="space-y-2">
            <div className="text-xs sm:text-sm font-bold tracking-wider text-[#0082c9] uppercase font-mono-clinical">
              PRACTICE LOCATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
              Visit Aura Dental Studio in Bandra West, Mumbai
            </h2>
          </div>
          <div className="text-xs font-mono-clinical text-slate-500">
            CENTRAL BOULEVARD • THE WELLNESS PAVILION • BANDRA WEST
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address & Shifts (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6" data-animate="fade-left">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono-clinical uppercase tracking-wider text-[#0082c9] font-bold">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>CLINIC ADDRESS</span>
              </div>
              
              <div className="font-serif text-xl font-bold text-slate-900 leading-snug">
                {CLINIC_INFO.address}
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono-clinical text-slate-600">
                <span className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Landmark: {CLINIC_INFO.landmark}
                </span>
                <span className="bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Area: {CLINIC_INFO.locality}
                </span>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#76bc21] hover:bg-[#639f19] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-slate-50 hover:bg-slate-100 text-slate-800 rounded-full font-mono-clinical text-xs font-bold border border-slate-200 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0082c9]" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono-clinical uppercase tracking-wider text-[#0082c9] font-bold">
                <Clock className="w-4 h-4 text-[#76bc21]" />
                <span>DAILY OPERATING SHIFTS</span>
              </div>

              <div className="space-y-2.5 text-xs font-mono-clinical">
                <div className="flex justify-between items-center p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600">MORNING SHIFT:</span>
                  <span className="font-bold text-slate-900">{CLINIC_INFO.hours.morning}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-600">EVENING SHIFT:</span>
                  <span className="font-bold text-slate-900">{CLINIC_INFO.hours.evening}</span>
                </div>
              </div>

              <div className="text-[11px] font-mono-clinical text-slate-500 italic">
                * {CLINIC_INFO.hours.note}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (lg:col-span-7) */}
          <div className="lg:col-span-7" data-animate="fade-right">
            <div className="bg-white rounded-3xl border border-slate-200 p-3 shadow-md space-y-3">
              <div className="relative w-full h-[390px] sm:h-[450px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Aura Dental Studio Mumbai Map"
                  src="https://maps.google.com/maps?q=Bandra+West+Mumbai+400050&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono-clinical text-slate-600 px-3 py-1">
                <span>BANDRA WEST, MUMBAI • PIN: 400050</span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0082c9] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
