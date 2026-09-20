"use client";

import React, { useState } from "react";
import { Sparkles, Layers, Cpu, ShieldCheck, Activity, Eye, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnatomyLayer {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  description: string;
  clinicalBenefit: string;
  color: string;
}

const LAYERS: AnatomyLayer[] = [
  {
    id: "crown",
    name: "Zirconia / Ceramic Crown",
    subtitle: "Aesthetic Restoration Layer",
    tag: "Micro-Engineered",
    description:
      "Precision-milled ceramic crown engineered to replicate natural tooth translucency, light refraction, and long-term chewing resistance.",
    clinicalBenefit: "Zero metal discoloration, 100% biocompatibility, and seamless shade matching.",
    color: "#B38C61",
  },
  {
    id: "pulp",
    name: "Endodontic Canal & Pulp",
    subtitle: "Biological Core Preservation",
    tag: "Clinical Precision",
    description:
      "Microscopic cleansing and hermetic sealing of infected root canals using computerized apex locators and flexible rotary files.",
    clinicalBenefit: "Saves natural tooth roots, relieves severe throbbing pain, and prevents bone resorption.",
    color: "#2F80ED",
  },
  {
    id: "implant",
    name: "Titanium Implant Fixture",
    subtitle: "Permanent Root Foundation",
    tag: "Bio-Integration",
    description:
      "Grade-4 medical titanium fixture surgically positioned into the jawbone, undergoing osteointegration to function as a permanent root.",
    clinicalBenefit: "Lifelong stability, prevents facial collapse, and restores 98%+ natural bite force.",
    color: "#14151D",
  },
  {
    id: "scanner",
    name: "Digital 3D Intraoral Mesh",
    subtitle: "Diagnostic Computer Precision",
    tag: "Zero Impression Goop",
    description:
      "Optical scanning capturing 6,000+ clinical images per second to create high-definition sub-millimeter 3D digital dental impressions.",
    clinicalBenefit: "No gag reflex, instant digital modeling, and immediate crown fabrication planning.",
    color: "#6B6D70",
  },
];

export const DentalViewer: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>("crown");
  const [isRotating, setIsRotating] = useState<boolean>(false);

  const current = LAYERS.find((l) => l.id === activeLayer) || LAYERS[0];

  return (
    <section id="technology" className="py-20 sm:py-32 bg-[#F7F8F6] relative overflow-hidden">
      <div className="editorial-container">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE8E8] text-[#14151D] text-xs uppercase tracking-widest font-medium mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#B38C61]" />
              <span>Technology & Anatomy</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#14151D] tracking-tight font-normal leading-[1.02]">
              Clinical Precision, Explored Anatomically
            </h2>
          </div>
          <p className="text-[#424346] text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Modern dental care succeeds through diagnostic accuracy. Explore the structural layers of our clinical restorations and treatments.
          </p>
        </div>

        {/* Interactive Anatomy Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#D6D1D0] shadow-sm">
          
          {/* Layer Selector & Details (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#6B6D70] block">
              Select Anatomical Layer:
            </span>

            <div className="space-y-2">
              {LAYERS.map((layer) => {
                const isSelected = activeLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(layer.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between",
                      isSelected
                        ? "bg-[#F7F8F6] border-[#B38C61] ring-1 ring-[#B38C61]/50 shadow-sm"
                        : "bg-transparent border-[#D6D1D0]/70 hover:border-[#14151D]/40 hover:bg-[#F7F8F6]/50"
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-[#14151D]">{layer.name}</span>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#EAE8E8] text-[#424346]">
                          {layer.tag}
                        </span>
                      </div>
                      <span className="text-xs text-[#6B6D70] block mt-0.5">{layer.subtitle}</span>
                    </div>

                    <div
                      className={cn(
                        "w-3 h-3 rounded-full transition-transform",
                        isSelected ? "scale-125 bg-[#B38C61]" : "bg-[#D6D1D0]"
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Layer Deep Dive Card */}
            <div className="p-5 rounded-2xl bg-[#F7F8F6] border border-[#D6D1D0] mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-medium tracking-wider text-[#B38C61]">
                  Clinical Specification
                </span>
                <ShieldCheck className="w-4 h-4 text-[#B38C61]" />
              </div>
              <p className="text-xs sm:text-sm text-[#14151D] leading-relaxed font-medium">
                {current.description}
              </p>
              <div className="pt-2 border-t border-[#D6D1D0]/60">
                <span className="text-[11px] text-[#6B6D70] block font-medium uppercase tracking-wider">Patient Benefit:</span>
                <span className="text-xs text-[#424346] mt-0.5 block">{current.clinicalBenefit}</span>
              </div>
            </div>
          </div>

          {/* Interactive Visual Graphic Canvas (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative p-6 sm:p-12 bg-[#F7F8F6] rounded-2xl border border-[#D6D1D0]/80 min-h-[380px] sm:min-h-[460px] order-1 lg:order-2 overflow-hidden">
            
            {/* Ambient Graphic Backdrop Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
              <div className="w-72 h-72 rounded-full border border-[#B38C61]/30 animate-slow-pulse" />
              <div className="w-96 h-96 rounded-full border border-[#D6D1D0]/60 absolute" />
            </div>

            {/* Interactive Anatomical SVG Model */}
            <div className="relative z-10 w-full max-w-sm aspect-square flex items-center justify-center transition-transform duration-700">
              <svg
                viewBox="0 0 320 360"
                className={cn(
                  "w-full h-full drop-shadow-xl transition-all duration-500",
                  isRotating && "rotate-6 scale-105"
                )}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* 1. Jawbone / Periodontal Base */}
                <path
                  d="M40 300 C70 340, 250 340, 280 300 C290 280, 270 260, 240 260 C200 260, 120 260, 80 260 C50 260, 30 280, 40 300 Z"
                  fill="#EAE8E8"
                  stroke="#D6D1D0"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* 2. Titanium Implant Anchor (Active when implant selected) */}
                <g
                  className={cn(
                    "transition-all duration-500",
                    activeLayer === "implant" ? "opacity-100 scale-100" : "opacity-35"
                  )}
                >
                  <rect x="145" y="210" width="30" height="90" rx="4" fill="#14151D" />
                  <line x1="140" y1="230" x2="180" y2="230" stroke="#B38C61" strokeWidth="2" />
                  <line x1="140" y1="250" x2="180" y2="250" stroke="#B38C61" strokeWidth="2" />
                  <line x1="140" y1="270" x2="180" y2="270" stroke="#B38C61" strokeWidth="2" />
                  <line x1="145" y1="290" x2="175" y2="290" stroke="#B38C61" strokeWidth="2" />
                </g>

                {/* 3. Natural Root Anatomy & Canal (Active when pulp selected) */}
                <g
                  className={cn(
                    "transition-all duration-500",
                    activeLayer === "pulp" ? "opacity-100 filter drop-shadow(0 0 8px rgba(47,128,237,0.4))" : "opacity-45"
                  )}
                >
                  {/* Left Root */}
                  <path
                    d="M110 170 C105 210, 115 250, 125 270 C130 250, 135 210, 140 170 Z"
                    fill={activeLayer === "pulp" ? "#DCEBFA" : "#FFFFFF"}
                    stroke="#D6D1D0"
                    strokeWidth="2"
                  />
                  {/* Internal Endodontic Canal Filament */}
                  <path
                    d="M125 180 Q122 220 125 260"
                    stroke={activeLayer === "pulp" ? "#2F80ED" : "#D6D1D0"}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Right Root */}
                  <path
                    d="M180 170 C185 210, 195 250, 205 270 C210 250, 215 210, 210 170 Z"
                    fill={activeLayer === "pulp" ? "#DCEBFA" : "#FFFFFF"}
                    stroke="#D6D1D0"
                    strokeWidth="2"
                  />
                  <path
                    d="M195 180 Q198 220 203 260"
                    stroke={activeLayer === "pulp" ? "#2F80ED" : "#D6D1D0"}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </g>

                {/* 4. Natural Dentin Core */}
                <path
                  d="M100 150 C95 180, 110 210, 160 210 C210 210, 225 180, 220 150 Z"
                  fill="#FFFFFF"
                  stroke="#D6D1D0"
                  strokeWidth="2"
                />

                {/* 5. Ceramic Crown Restoration (Active when crown selected) */}
                <g
                  className={cn(
                    "transition-all duration-500",
                    activeLayer === "crown"
                      ? "opacity-100 filter drop-shadow(0 4px 16px rgba(179,140,97,0.35))"
                      : "opacity-60"
                  )}
                >
                  <path
                    d="M80 150 C75 90, 105 60, 130 65 C145 68, 150 72, 160 72 C170 72, 175 68, 190 65 C215 60, 245 90, 240 150 C235 170, 85 170, 80 150 Z"
                    fill={activeLayer === "crown" ? "#FFFFFF" : "#F7F8F6"}
                    stroke={activeLayer === "crown" ? "#B38C61" : "#D6D1D0"}
                    strokeWidth={activeLayer === "crown" ? "2.5" : "2"}
                  />
                  {/* Subtle Ceramic Refraction Curves */}
                  <path
                    d="M110 85 C105 110, 108 140, 112 150"
                    stroke={activeLayer === "crown" ? "#B38C61" : "#D6D1D0"}
                    strokeWidth="1.5"
                    strokeDasharray="2 3"
                  />
                  <path
                    d="M210 85 C215 110, 212 140, 208 150"
                    stroke={activeLayer === "crown" ? "#B38C61" : "#D6D1D0"}
                    strokeWidth="1.5"
                    strokeDasharray="2 3"
                  />
                </g>

                {/* 6. Digital 3D Mesh Grid Overlay (Active when scanner selected) */}
                {activeLayer === "scanner" && (
                  <g className="animate-in fade-in duration-300">
                    <line x1="70" y1="80" x2="250" y2="80" stroke="#2F80ED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="60" y1="110" x2="260" y2="110" stroke="#2F80ED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="70" y1="140" x2="250" y2="140" stroke="#2F80ED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="80" y1="170" x2="240" y2="170" stroke="#2F80ED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="120" y1="60" x2="120" y2="280" stroke="#2F80ED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="160" y1="60" x2="160" y2="280" stroke="#2F80ED" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="200" y1="60" x2="200" y2="280" stroke="#2F80ED" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="160" cy="110" r="4" fill="#2F80ED" />
                    <circle cx="120" cy="140" r="4" fill="#2F80ED" />
                    <circle cx="200" cy="140" r="4" fill="#2F80ED" />
                  </g>
                )}
              </svg>
            </div>

            {/* Interactive Control Pill */}
            <div className="mt-4 z-10 flex items-center gap-3 bg-[#FFFFFF] px-4 py-2 rounded-full border border-[#D6D1D0] shadow-sm text-xs text-[#424346]">
              <span className="font-medium text-[#14151D] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.color }} />
                Viewing: {current.name}
              </span>
              <span className="text-[#D6D1D0]">|</span>
              <button
                type="button"
                onClick={() => setIsRotating((prev) => !prev)}
                className="hover:text-[#B38C61] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Perspective Shift</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
