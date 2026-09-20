"use client";

import React from "react";
import { Star, ShieldCheck, ExternalLink, Quote } from "lucide-react";
import { CLINIC_INFO, TESTIMONIALS } from "@/data/clinic-data";

export function TrustProof() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FBFBFA] border-b border-[#121815]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Ledger Badge */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-[#121815]/8 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-mono-clinical uppercase tracking-wider text-[#7A8A82]">
              04 / VERIFIED OUTCOME LEDGER
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-[#121815] tracking-tight">
              Backed by 350+ Verified Patient Experiences
            </h2>
          </div>

          {/* Minimalist 4.9 Rating Stamp */}
          <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-xl border border-[#121815]/10 shadow-2xs">
            <div className="font-editorial text-3xl font-bold text-[#121815]">
              4.9
            </div>
            <div className="border-l border-[#121815]/10 pl-3">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <div className="text-[10px] font-mono-clinical uppercase text-[#5A6860] mt-0.5">
                344+ Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((item, i) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-[#121815]/8 hover:border-[#121815]/20 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#121815]/5 mb-4">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, r) => (
                      <Star key={r} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-clinical text-[#7A8A82]">
                    {item.timeAgo}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4A5550] leading-relaxed italic font-serif mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#121815]/5 space-y-1">
                <div className="text-xs font-bold text-[#121815] font-editorial flex items-center justify-between">
                  <span>{item.author}</span>
                  <span className="text-[9px] font-mono-clinical text-[#144A3B] bg-[#144A3B]/10 px-1.5 py-0.5 rounded">
                    VERIFIED
                  </span>
                </div>
                {item.treatmentTag && (
                  <div className="text-[10px] font-mono-clinical text-[#7A8A82]">
                    {item.treatmentTag}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Maps Verified Link */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-clinical text-[#5A6860]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#144A3B]" />
            <span>GENUINE REVIEWS FROM PATIENTS ACROSS MUMBAI &amp; BANDRA WEST</span>
          </div>
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#0D2B22] hover:underline"
          >
            <span>VIEW COMPLETE GOOGLE PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
