"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

interface GettingStartedProps {
  onBookClick: () => void;
}

export function GettingStartedSection({ onBookClick }: GettingStartedProps) {
  const scheduleRows = [
    { day: "Monday", hours: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM", isHighlight: true },
    { day: "Tuesday", hours: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM", isHighlight: false },
    { day: "Wednesday", hours: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM", isHighlight: false },
    { day: "Thursday", hours: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM", isHighlight: true },
    { day: "Friday", hours: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM", isHighlight: false },
    { day: "Saturday", hours: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM", isHighlight: false },
    { day: "Sunday", hours: "Closed (Emergency By Request)", isHighlight: false, isClosed: true },
  ];

  const paymentMethods = [
    "UPI / GPay",
    "PhonePe",
    "Credit Cards",
    "Debit Cards",
    "Cash",
    "Installments",
    "+ more",
  ];

  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-[#EBF6FC] relative overflow-hidden border-b border-slate-200/80"
    >
      {/* 1. Exact Flowing Abstract Blue Waves Background on Light Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://cdn.prod.website-files.com/6a29d43f03b10014aa9b0c8c/6a2bdb1b581b66e08278910a_abstract-waves.jpg%20(1).webp"
          alt="Abstract blue and white wave background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EBF6FC]/60 via-[#F2FAFE]/40 to-[#EBF6FC]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + Deep Navy Payment Card (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Top Tagline & Headline */}
            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.12]">
                Getting started is <br className="hidden sm:inline" />
                straightforward.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
                We're actively accepting new patients and would love to welcome you to our practice. Visit our consultation page to learn what to expect at your first visit and how our transparent evaluation works.
              </p>
            </div>

            {/* Light Luxury Card: Insurance & Financing Options */}
            <div className="bg-white/95 text-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl shadow-sky-950/5 space-y-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Insurance &amp; Financing Options
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Every consultation begins with an exhaustive examination and honest recommendations. We support all major digital payments, UPI, Google Pay, debit/credit cards, cash, and flexible installment plans. No unexpected costs, no rushed appointments.
              </p>

              {/* Pill Wrap */}
              <div className="flex flex-wrap gap-2 pt-2">
                {paymentMethods.map((pill, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 text-slate-700 text-xs font-sans font-semibold px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-2xs"
                  >
                    {pill}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Convenient Evening Hours & Schedule Table (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 leading-tight">
                Convenient Evening Hours
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We understand that busy schedules can make it difficult to prioritize dental visits. That's why we offer daily morning and evening hours in Bandra West, Mumbai. Being a dental team modern families can count on means making care accessible when you need it most.
              </p>
            </div>

            {/* Office Hours Timetable */}
            <div className="space-y-3 text-sm">
              {scheduleRows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 border-b border-slate-300/70"
                >
                  <span className="font-medium text-slate-700">
                    {row.day}
                  </span>
                  <span
                    className={`font-sans font-semibold text-xs sm:text-sm ${
                      row.isClosed
                        ? "text-slate-400"
                        : row.isHighlight
                        ? "text-[#0082c9]"
                        : "text-slate-600"
                    }`}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Address Strip with Icon */}
            <div className="pt-2 flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
              <div className="w-10 h-10 rounded-xl bg-[#DFEDFF] flex items-center justify-center text-[#0082c9] shrink-0">
                <MapPin className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="leading-relaxed">
                <div className="font-bold text-slate-900">
                  Suite 102, The Wellness Pavilion
                </div>
                <div className="text-slate-500">
                  Central Boulevard, Bandra West, Mumbai – 400050
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
