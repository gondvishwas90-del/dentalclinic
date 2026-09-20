"use client";

import React from "react";
import { ShieldCheck, Clock, MapPin, Sparkles, Award, Layers } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/clinic-data";

export function WhyChooseApex() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-5 h-5 text-amber-500" />;
      case "MapPin":
        return <MapPin className="w-5 h-5 text-red-500" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-[#0082c9]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#003B65]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#76bc21]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#0082c9]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#EBF6FC]/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 sm:mb-16" data-animate="fade-up">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#0082c9] uppercase font-mono-clinical">
            PATIENT FIRST PHILOSOPHY
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
            Why Patients Choose Aura Dental Studio
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Combining clinical excellence with genuine warmth, transparent pricing, and local convenience.
          </p>
        </div>

        {/* 6 Structured Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate-stagger="100">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={index}
              data-animate="fade-up"
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0082c9] transition-all space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
