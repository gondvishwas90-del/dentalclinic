"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

export function WhatsAppCTA() {
  const cleanPhone = CLINIC_INFO.phoneRaw.replace(/\D/g, "");
  const defaultWhatsAppMsg = encodeURIComponent(
    `Hello ${CLINIC_INFO.name}, I would like to book a dental appointment. My name is [Your Name]. Please let me know the available timings.`
  );

  return (
    <section className="py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#003B65] via-[#004B78] to-[#003B65] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl" data-animate="fade-up">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono-clinical uppercase tracking-wider text-cyan-200 font-bold">
              Instant Concierge
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Prefer Direct WhatsApp Communication?
            </h3>
            <p className="text-sm text-white/80 max-w-lg">
              Send us your preferred date and time on WhatsApp, and our clinic desk will assist you promptly.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={`https://wa.me/${cleanPhone}?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#76bc21] hover:bg-[#639f19] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-lg shadow-[#76bc21]/30 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
