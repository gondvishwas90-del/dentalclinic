"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/clinic-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F5F4F0] border-b border-[#121815]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12" data-animate="fade-up">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121815] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6860]">
            Clear, honest answers about fees, appointments, and what to expect during your visit.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3" data-animate-stagger="100">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                data-animate="fade-up"
                className="bg-white rounded-2xl border border-[#121815]/8 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading text-lg sm:text-xl font-bold text-[#121815] hover:text-[#0E2C22] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono-clinical text-[#7AA885]">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F5F4F0] flex items-center justify-center text-[#121815] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#7AA885]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5A6860] leading-relaxed border-t border-[#121815]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
