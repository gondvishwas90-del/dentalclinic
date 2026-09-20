"use client";

import React from "react";
import { Phone, Calendar, Navigation } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

interface MobileBottomBarProps {
  onBookClick: () => void;
}

export function MobileBottomBar({ onBookClick }: MobileBottomBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#00243E]/95 backdrop-blur-xl border-t border-white/15 shadow-2xl p-2.5 sm:hidden">
      <div className="grid grid-cols-12 gap-2 items-center">
        
        {/* Call button */}
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-white/10 text-white active:bg-white/20 transition-colors border border-white/10"
          aria-label="Call clinic directly"
        >
          <Phone className="w-4 h-4 text-cyan-200 mb-0.5" />
          <span className="text-[10px] font-mono-clinical font-semibold">CALL</span>
        </a>

        {/* Book Button (Dominant in #76bc21) */}
        <button
          onClick={onBookClick}
          className="col-span-6 flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#76bc21] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#76bc21]/30 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>BOOK VISIT</span>
        </button>

        {/* Directions button */}
        <a
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 flex flex-col items-center justify-center py-2 px-1 rounded-2xl bg-white/10 text-white active:bg-white/20 transition-colors border border-white/10"
          aria-label="Directions on Google Maps"
        >
          <Navigation className="w-4 h-4 text-[#FFD230] mb-0.5" />
          <span className="text-[10px] font-mono-clinical font-semibold">MAP</span>
        </a>

      </div>
    </div>
  );
}
