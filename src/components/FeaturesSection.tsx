"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";

interface FeaturesSectionProps {
  onDoctorClick: () => void;
}

export function FeaturesSection({ onDoctorClick }: FeaturesSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20">
          <div className="space-y-1">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-tight">
              Experience the difference.
            </h2>
          </div>

          <button
            onClick={onDoctorClick}
            className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-700 hover:text-[#0082c9] transition-colors cursor-pointer group"
          >
            <span>About Our Practice</span>
            <div className="w-8 h-8 rounded-full bg-[#0082c9] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* 2-Column Grid with Staggered Offset */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Column 01: Spa-Like Setting */}
          <div className="space-y-6">
            
            {/* Huge Watermark 01 */}
            <div className="font-serif text-7xl sm:text-8xl lg:text-9xl font-bold text-[#D6ECF8] leading-none select-none">
              01
            </div>

            {/* Photo with Pastel Sky-Blue Curved Backdrop */}
            <div className="relative p-2 sm:p-3 rounded-[32px] bg-[#EBF6FC] border border-[#D6ECF8] shadow-sm">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl sm:rounded-[24px] overflow-hidden bg-slate-100 shadow-sm">
                <img
                  src="https://cdn.prod.website-files.com/6a29d43f03b10014aa9b0c8c/6a2af281e2180b15853172d9_d38f2cfb36856c9a05d709a3eaa8aac210050287.webp"
                  alt="Curved modern dental office corridor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Body */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Spa-Like Setting
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Aromatherapy, a tranquil atmosphere, and meticulous attention to detail create an environment that feels more like a spa than a dental practice. Behind that welcoming setting, we use 3D digital imaging, digital X-rays, and precision dental diagnostics.
              </p>

              {/* 3 Pills with Blue Checkmarks */}
              <div className="flex flex-wrap gap-2.5 pt-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold bg-white text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-[#0082c9]" />
                  <span>3D Digital Diagnostics</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold bg-white text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-[#0082c9]" />
                  <span>Digital X-Rays</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold bg-white text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-[#0082c9]" />
                  <span>Digital Impressions</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 02: Transparent Treatment Planning */}
          <div className="space-y-6 lg:mt-24">
            
            {/* Huge Watermark 02 */}
            <div className="font-serif text-7xl sm:text-8xl lg:text-9xl font-bold text-[#E2F5D3] leading-none select-none">
              02
            </div>

            {/* Photo with Pastel Sage-Green Curved Backdrop */}
            <div className="relative p-2 sm:p-3 rounded-[32px] bg-[#F2FBEB] border border-[#E2F5D3] shadow-sm">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl sm:rounded-[24px] overflow-hidden bg-slate-100 shadow-sm">
                <img
                  src="https://cdn.prod.website-files.com/6a29d43f03b10014aa9b0c8c/6a332f983b09c5509b4097a2_Dr%20Shah%20with%20Patient.webp"
                  alt="Doctor treating patient in dental office"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Body */}
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Transparent Treatment Planning
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Every treatment starts with an open conversation. We explain what we see, discuss your options, and provide upfront pricing so you're always in control of your care. No pressure, no surprises.
              </p>

              {/* 3 Pills with Green Checkmarks */}
              <div className="flex flex-wrap gap-2.5 pt-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold bg-white text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-[#76bc21]" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold bg-white text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-[#76bc21]" />
                  <span>Itemized Quotes</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold bg-white text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-[#76bc21]" />
                  <span>Zero Hidden Costs</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
