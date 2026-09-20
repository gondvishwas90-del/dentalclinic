"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { 
  Calendar, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star, 
  CheckCircle2, 
  Award, 
  Stethoscope,
  ChevronRight,
  Sparkles,
  MapPin,
  Check,
  Shield,
  HeartHandshake,
  Layers,
  ArrowUpRight
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

interface DoctorSectionProps {
  onBookClick: () => void;
}

interface ShowcaseView {
  id: string;
  image: string;
  imageAlt: string;
  statusBadge: {
    text: string;
    pingColor: string;
    dotColor: string;
  };
  metricBadge: {
    main: string;
    sub: string;
  };
  cardTag: string;
  cardTagColor: string;
  cardTitle: string;
  cardSubtitle: string;
  quote: string;
  telemetryLeft: string;
  telemetryRight: string;
}

interface PillarItem {
  id: string;
  number: string;
  tag: string;
  title: string;
  lead: string;
  details: string;
  badges: string[];
  icon: React.ElementType;
  showcase: ShowcaseView;
}

const PILLARS: PillarItem[] = [
  {
    id: "consultation",
    number: "01",
    tag: "ETHICAL & PRESSURE-FREE",
    title: "Meet Dr. Aria Sharma — Transparent Guidance",
    lead: "Dr. Aria Sharma believes you deserve to understand every option clearly before making any decision about your oral health.",
    details: "She will walk you through your high-definition digital diagnostics and explain each treatment path openly with upfront cost clarity and zero rush.",
    badges: ["Zero-Pressure Diagnosis", "High-Definition Imaging", "Patient-First Ethics"],
    icon: Stethoscope,
    showcase: {
      id: "consultation",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Lead Dental Surgeon Dr. Aria Sharma providing patient consultation",
      statusBadge: {
        text: "CONSULTATIONS ACTIVE",
        pingColor: "bg-emerald-400",
        dotColor: "bg-emerald-500",
      },
      metricBadge: {
        main: "4.9★",
        sub: "(350+ Reviews)",
      },
      cardTag: "LEAD DENTAL SURGEON",
      cardTagColor: "bg-[#76bc21]/20 border-[#76bc21]/40 text-[#76bc21]",
      cardTitle: CLINIC_INFO.doctor.name,
      cardSubtitle: `${CLINIC_INFO.doctor.qualification} • ${CLINIC_INFO.doctor.specialization}`,
      quote: "“Every patient deserves patience, crystal-clear diagnostic understanding, and comfortable treatment with zero rush.”",
      telemetryLeft: "Aura Dental • Bandra West, Mumbai",
      telemetryRight: "10 AM–2 PM • 5 PM–9 PM",
    },
  },
  {
    id: "ambience",
    number: "02",
    tag: "COMFORT & HYGIENE",
    title: "Spa-Like Setting & Hospital-Grade Hygiene",
    lead: "A tranquil atmosphere and meticulous attention to sterile safety designed specifically to put anxious patients at ease.",
    details: "Equipped with strict multi-stage Class-B autoclaved sterilization, soothing ambient acoustics, and ergonomic operatory suites for total calm.",
    badges: ["Class-B Autoclave Protocol", "Serene Atmosphere", "Gentle Care for Anxious Patients"],
    icon: ShieldCheck,
    showcase: {
      id: "ambience",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Modern tranquil dental operatory with hospital-grade sterilization",
      statusBadge: {
        text: "100% STERILE PROTOCOL",
        pingColor: "bg-sky-400",
        dotColor: "bg-sky-500",
      },
      metricBadge: {
        main: "Class-B",
        sub: "Hospital Grade",
      },
      cardTag: "CLINICAL SANCTUARY",
      cardTagColor: "bg-sky-500/20 border-sky-400/40 text-sky-300",
      cardTitle: "Tranquil & Sterile Operatory",
      cardSubtitle: "Multi-Barrier Sterilization • Advanced Ergonomics",
      quote: "“We engineered our clinic to replace the traditional dental smell and fear with soothing comfort and medical-grade hygiene.”",
      telemetryLeft: "Multi-Stage Autoclave Sterilization",
      telemetryRight: "100% Sterile Tools",
    },
  },
  {
    id: "convenience",
    number: "03",
    tag: "TRANSPARENCY & TIMINGS",
    title: "Transparent Pricing & Convenient Evening Hours",
    lead: "Clear upfront estimates for procedures, honest recommendations, and convenient daily dual shifts tailored for busy schedules.",
    details: "Operating daily 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM at Central Boulevard, so quality care fits effortlessly into your family's routine.",
    badges: ["Transparent Evaluation", "Evening Shifts till 9:00 PM", "Zero Hidden Costs"],
    icon: Clock,
    showcase: {
      id: "convenience",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Aura Dental modern welcoming reception and consultation desk",
      statusBadge: {
        text: "EVENING SHIFT TILL 9 PM",
        pingColor: "bg-amber-400",
        dotColor: "bg-amber-500",
      },
      metricBadge: {
        main: "Zero",
        sub: "Hidden Costs",
      },
      cardTag: "PATIENT CONVENIENCE",
      cardTagColor: "bg-amber-500/20 border-amber-400/40 text-amber-300",
      cardTitle: "Flexible Shifts & Honest Fees",
      cardSubtitle: "Dual Daily Shifts • Direct Itemized Estimates",
      quote: "“No unexpected bills and no missed work hours. We provide transparent fee quotes before any procedure starts.”",
      telemetryLeft: "Central Boulevard, Bandra (Valet Parking)",
      telemetryRight: "Open 6 Days • Till 9:00 PM",
    },
  },
];

export function DoctorSection({ onBookClick }: DoctorSectionProps) {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pinnedOpenIndex, setPinnedOpenIndex] = useState<number | null>(null);

  // Active showcase item on the right (defaults to first or hovered)
  const currentPillar = PILLARS[hoveredIndex !== null ? hoveredIndex : selectedPillarIndex];
  const showcase = currentPillar.showcase;

  // 3D Card Interactive Tilt & Parallax Physics
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardTransform, setCardTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    spotlightX: 50,
    spotlightY: 50,
  });
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    
    // Max rotation in degrees
    const maxRotate = 7;
    setCardTransform({
      rotateX: -normY * maxRotate,
      rotateY: normX * maxRotate,
      spotlightX: (x / rect.width) * 100,
      spotlightY: (y / rect.height) * 100,
    });
  }, []);

  const handleMouseEnter = () => setIsCardHovered(true);
  const handleMouseLeave = () => {
    setIsCardHovered(false);
    setCardTransform({
      rotateX: 0,
      rotateY: 0,
      spotlightX: 50,
      spotlightY: 50,
    });
  };

  return (
    <section 
      id="doctor" 
      className="py-24 sm:py-32 bg-[#fafbfc] relative overflow-hidden border-b border-slate-200/80 selection:bg-[#0082c9]/15"
    >
      {/* Background Architectural Mesh & Subtle Lighting Orbs */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#0082c9]/10 to-sky-400/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-24 w-[550px] h-[550px] bg-gradient-to-br from-[#76bc21]/10 to-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Fine-Grain Awwwards Editorial Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #003e66 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main 2-Column Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typography, Dynamic Commitment Accordion & Actions (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Headline & Lead Narrative */}
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-4xl lg:text-[3.5rem] font-normal text-slate-900 tracking-tight leading-[1.08]">
                Your trusted dental studio in{" "}
                <span className="relative inline-block font-normal">
                  <span className="relative z-10 bg-gradient-to-r from-[#0082c9] via-[#005f94] to-[#76bc21] bg-clip-text text-transparent italic font-serif">
                    Mumbai.
                  </span>
                  <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[7px] bg-[#76bc21]/20 -z-0 rounded-full" />
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1 max-w-2xl">
                If you're searching for a dental studio in Mumbai families and individuals can truly rely on, you've found a practice built around patient comfort. Led by <strong className="text-slate-800 font-semibold">{CLINIC_INFO.doctor.name}</strong>, our practice provides crystal-clear consultations, gentle treatments, and daily evening appointments until 9:00 PM.
              </p>
            </div>

            {/* Interactive Kinetic Commitment Cards */}
            <div className="space-y-3.5 pt-2">
              {PILLARS.map((pillar, index) => {
                const isHovered = hoveredIndex === index;
                const isPinned = pinnedOpenIndex === index;
                const isOpen = isHovered || isPinned;
                const isVisualActive = (hoveredIndex !== null ? hoveredIndex : selectedPillarIndex) === index;
                const IconComponent = pillar.icon;
                
                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => {
                      setPinnedOpenIndex(pinnedOpenIndex === index ? null : index);
                      setSelectedPillarIndex(index);
                    }}
                    className={`group cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 relative border ${
                      isVisualActive
                        ? "bg-white shadow-xl shadow-sky-900/8 border-[#0082c9]/35 ring-1 ring-[#0082c9]/15 translate-x-1 sm:translate-x-1.5"
                        : "bg-white/70 hover:bg-white border-slate-200/85 hover:border-slate-300 shadow-2xs hover:shadow-sm"
                    }`}
                  >
                    {/* Active Gradient Side Rim Highlight */}
                    {isVisualActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-[#0082c9] via-[#005f94] to-[#76bc21] rounded-r-full shadow-sm" />
                    )}

                    <div className="flex items-start gap-4 sm:gap-5">
                      
                      {/* Number & Icon Pill */}
                      <div className="flex flex-col items-center gap-1.5 pt-0.5 shrink-0">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isVisualActive
                              ? "bg-gradient-to-br from-[#0082c9] to-[#005f94] text-white shadow-md shadow-[#0082c9]/30 scale-105"
                              : "bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-[#0082c9]"
                          }`}
                        >
                          <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className={`text-xs font-serif italic font-bold transition-colors ${
                          isVisualActive ? "text-[#0082c9]" : "text-slate-400"
                        }`}>
                          {pillar.number}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-sans font-semibold tracking-wider text-[#0082c9] uppercase">
                            {pillar.tag}
                          </span>
                          
                          <div className="flex items-center gap-1.5">
                            <span className={`text-[11px] font-sans font-medium transition-opacity duration-200 hidden sm:inline-block ${
                              isVisualActive ? "text-[#0082c9] opacity-100" : "opacity-0"
                            }`}>
                              Preview Active
                            </span>
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isOpen ? "bg-sky-100 text-[#0082c9] rotate-90" : "text-slate-400 group-hover:translate-x-0.5"
                            }`}>
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>

                        <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mt-1 group-hover:text-[#0082c9] transition-colors">
                          {pillar.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5">
                          {pillar.lead}
                        </p>

                        {/* Expandable Clinical Details (Only opens on hover or pin) */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                            isOpen ? "grid-rows-[1fr] opacity-100 pt-3.5" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="min-h-0 space-y-3">
                            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/90 p-3.5 rounded-xl border border-slate-100 shadow-inner">
                              {pillar.details}
                            </p>

                            {/* Refined Clinical Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                              {pillar.badges.map((badge, bIdx) => (
                                <span
                                  key={bIdx}
                                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200/90 shadow-2xs"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#76bc21]" />
                                  {badge}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Premium Action CTA Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              
              {/* Primary Book Appointment Button with Shimmer */}
              <button
                onClick={onBookClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#76bc21] to-[#639f19] hover:from-[#6cb01b] hover:to-[#578d14] text-white rounded-full font-bold text-sm shadow-lg shadow-[#76bc21]/30 hover:shadow-xl hover:shadow-[#76bc21]/40 transition-all duration-300 active:scale-[0.98] cursor-pointer overflow-hidden"
              >
                {/* Shimmer Sweep Animation Overlay */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer pointer-events-none" />
                
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Call Clinic Button */}
              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white hover:bg-slate-50 text-slate-800 rounded-full font-semibold text-sm border border-slate-200/90 shadow-xs hover:border-[#0082c9]/40 hover:text-[#0082c9] transition-all duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <Phone className="w-4 h-4 text-[#0082c9]" />
                <span>Call Clinic — {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Trust Badges Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/80 text-slate-600">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div className="text-xs font-sans">
                  <div className="font-bold text-slate-900">4.9 / 5.0 Rating</div>
                  <div className="text-[11px] text-slate-500">344+ Google Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center text-[#0082c9] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-sans">
                  <div className="font-bold text-slate-900">Class-B Sterilization</div>
                  <div className="text-[11px] text-slate-500">100% Autoclaved Protocol</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/60 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-[#76bc21] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs font-sans">
                  <div className="font-bold text-slate-900">Dual Daily Shifts</div>
                  <div className="text-[11px] text-slate-500">Evening Care Till 9 PM</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Awwwards 3D Dynamic Interactive Visual Showcase Stage (lg:col-span-5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            
            {/* Quick View Navigation Tabs on Top */}
            <div className="flex items-center justify-between gap-1.5 p-1 mb-3.5 bg-slate-200/60 rounded-xl backdrop-blur-sm border border-slate-300/40">
              {PILLARS.map((p, idx) => {
                const isCur = (hoveredIndex !== null ? hoveredIndex : selectedPillarIndex) === idx;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedPillarIndex(idx);
                      setHoveredIndex(null);
                    }}
                    className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-sans font-semibold tracking-tight transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 ${
                      isCur
                        ? "bg-white text-[#0082c9] shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
                    }`}
                  >
                    <span className="font-serif italic font-normal text-xs">{p.number}</span>
                    <span>{idx === 0 ? "Dr. Aria Sharma" : idx === 1 ? "Sanctuary" : "Convenience"}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive 3D Perspective Card Container */}
            <div 
              style={{ perspective: "1000px" }}
              className="w-full"
            >
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isCardHovered 
                    ? `rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg) translateZ(14px)`
                    : `rotateX(0deg) rotateY(0deg) translateZ(0px)`,
                  transition: isCardHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl shadow-sky-950/10 border border-slate-200/90 bg-slate-100 group select-none h-[540px] sm:h-[620px] w-full"
              >
                {/* Background Dynamic Stage Image with Cross-Fade */}
                {PILLARS.map((p, pIdx) => {
                  const isVisible = (hoveredIndex !== null ? hoveredIndex : selectedPillarIndex) === pIdx;
                  return (
                    <div
                      key={p.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        isVisible ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={p.showcase.image}
                        alt={p.showcase.imageAlt}
                        className="w-full h-full object-cover object-center filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  );
                })}

                {/* Interactive Dynamic Mouse Spotlight Overlay */}
                {isCardHovered && (
                  <div
                    className="absolute inset-0 pointer-events-none z-1 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle 340px at ${cardTransform.spotlightX}% ${cardTransform.spotlightY}%, rgba(255,255,255,0.3), transparent 80%)`,
                    }}
                  />
                )}

                {/* Soft Light Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none z-2" />

                {/* Bottom Luxury Light Frosted Glass Telemetry Card */}
                <div className="absolute inset-x-4 sm:inset-x-5 bottom-4 sm:bottom-5 z-10">
                  <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl text-slate-900 space-y-2.5">
                    {/* Main Title & Subtitle */}
                    <div>
                      <h3 className="font-serif text-2xl sm:text-[1.75rem] font-bold text-slate-900 tracking-tight leading-tight">
                        {showcase.cardTitle}
                      </h3>
                      <p className="text-xs text-slate-600 font-sans mt-0.5 font-medium">
                        {showcase.cardSubtitle}
                      </p>
                    </div>

                    {/* Editorial Doctor / Facility Quote */}
                    <p className="text-xs text-slate-700 leading-relaxed border-t border-slate-100 pt-2.5 italic font-normal">
                      {showcase.quote}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
