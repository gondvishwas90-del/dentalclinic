"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  Stethoscope,
  ChevronRight,
  Activity,
  HeartHandshake
} from "lucide-react";

interface PatientEducationProps {
  onSelectConcern: () => void;
}

interface EducationModule {
  id: string;
  tabTitle: string;
  tabNumber: string;
  tag: string;
  headline: string;
  readTime: string;
  description: string;
  keyInsights: string[];
  steps: {
    stepNumber: string;
    stepTitle: string;
    stepDescription: string;
  }[];
  doctorTip: string;
}

const MODULES: EducationModule[] = [
  {
    id: "preventative",
    tabTitle: "Preventative Longevity",
    tabNumber: "01",
    tag: "ORAL WELLNESS & ENAMEL",
    headline: "Protecting Natural Teeth & Gum Health",
    readTime: "3 min guide",
    description: "Evidence-based protocols to preserve your natural enamel, prevent silent gum recession, and stop plaque acid demineralization before discomfort begins.",
    keyInsights: [
      "Micro-Biofilm control through proper ultrasonic brush angles",
      "Early demineralization reversal with mineral-rich rinses",
      "Regular 6-month checkups prevent 90% of complex treatments"
    ],
    steps: [
      {
        stepNumber: "01",
        stepTitle: "Micro-Plaque Diagnosis",
        stepDescription: "High-definition intraoral camera reveals invisible calculus and early enamel wear on screen."
      },
      {
        stepNumber: "02",
        stepTitle: "Gentle Ultrasonic Polishing",
        stepDescription: "Non-abrasive cavitation removes bacterial biofilm without scraping sensitive root surfaces."
      },
      {
        stepNumber: "03",
        stepTitle: "Enamel Protection Plan",
        stepDescription: "Personalized home regimen tailored to your diet, bite alignment, and oral flora."
      }
    ],
    doctorTip: "“Most dental decay develops silently without pain. Catching micro-lesions early saves you from root canals and costly crowns later.”"
  },
  {
    id: "treatments",
    tabTitle: "Procedure Walkthroughs",
    tabNumber: "02",
    tag: "CLINICAL TRANSPARENCY",
    headline: "Painless Modern Procedures Explained",
    readTime: "4 min guide",
    description: "Clear, transparent walkthroughs of Root Canal Treatment (RCT), Dental Implants, and Ceramic Crowns in plain everyday language.",
    keyInsights: [
      "Single-visit rotary RCTs are virtually painless with modern local anesthesia",
      "Biocompatible titanium implants naturally fuse with bone to restore biting force",
      "Digital 3D impressions eliminate messy, uncomfortable putty trays"
    ],
    steps: [
      {
        stepNumber: "01",
        stepTitle: "3D Digital Mapping",
        stepDescription: "We map the exact root canal anatomy or implant site with pinpoint sub-millimeter precision."
      },
      {
        stepNumber: "02",
        stepTitle: "Gentle Single-Sitting Care",
        stepDescription: "Rotary nickel-titanium instrumentation cleans and disinfects roots smoothly and quickly."
      },
      {
        stepNumber: "03",
        stepTitle: "Precision Ceramic Sealing",
        stepDescription: "Custom-shaded zirconia or ceramic crown restores 100% natural chewing strength and beauty."
      }
    ],
    doctorTip: "“Modern dentistry has made root canals as gentle as a standard filling. We ensure you feel completely comfortable at every moment.”"
  },
  {
    id: "first-visit",
    tabTitle: "First Visit & Cost Clarity",
    tabNumber: "03",
    tag: "ZERO PRESSURE ETHICS",
    headline: "Your First Consultation & Transparent Pricing",
    readTime: "2 min guide",
    description: "What to expect during your initial clinical evaluation: digital X-rays, transparent itemized quotes, and zero pressure.",
    keyInsights: [
      "Comprehensive standard examination with complete oral checkup",
      "Every option is explained on a large digital screen before you decide",
      "You receive written cost estimates before any treatment begins"
    ],
    steps: [
      {
        stepNumber: "01",
        stepTitle: "Comprehensive Exam",
        stepDescription: "Dr. Aria Sharma reviews your teeth, gums, and bite alignment in a relaxed, unhurried environment."
      },
      {
        stepNumber: "02",
        stepTitle: "Open Treatment Discussion",
        stepDescription: "We present all viable treatment paths, explaining pros, cons, and timelines clearly."
      },
      {
        stepNumber: "03",
        stepTitle: "Transparent Written Estimate",
        stepDescription: "Clear itemized pricing so you can make informed decisions that fit your family's budget."
      }
    ],
    doctorTip: "“We will never pressure you into unnecessary dental work. Our goal is to give you honest medical guidance so you can choose confidently.”"
  }
];

export function PatientEducation({ onSelectConcern }: PatientEducationProps) {
  const [activeTab, setActiveTab] = useState(0);
  const current = MODULES[activeTab];

  return (
    <section className="py-24 sm:py-32 bg-[#fafbfc] relative overflow-hidden border-b border-slate-200/80">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#0082c9]/6 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-[#76bc21]/6 rounded-full blur-[110px] pointer-events-none" />

      {/* Geometric Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #003e66 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-tight">
            An informed patient is a{" "}
            <span className="relative inline-block font-normal">
              <span className="relative z-10 bg-gradient-to-r from-[#0082c9] via-[#005f94] to-[#76bc21] bg-clip-text text-transparent italic font-serif inline-block pr-1.5">
                confident patient.
              </span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[6px] bg-[#76bc21]/20 -z-0 rounded-full" />
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1">
            Explore our curated clinical knowledge base. Understand procedures, daily prevention techniques, and what to expect during your visits.
          </p>
        </div>

        {/* Tab Navigator Bar (Segmented Luxury Pill Switcher) */}
        <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 bg-slate-200/70 rounded-2xl max-w-2xl mb-10 backdrop-blur-sm border border-slate-300/40">
          {MODULES.map((mod, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                  isActive
                    ? "bg-white text-[#0082c9] shadow-md shadow-slate-900/5 scale-[1.02] font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <span className={`font-serif italic font-normal text-xs px-1.5 py-0.5 rounded ${isActive ? "bg-sky-50 text-[#0082c9]" : "bg-slate-300/60 text-slate-600"}`}>
                  {mod.tabNumber}
                </span>
                <span>{mod.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Hub Grid (Asymmetric Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Focal Article Overview (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-sky-950/5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-end">
                <span className="text-xs font-sans text-slate-500 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {current.readTime}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Key Takeaway Bullet List */}
              <div className="pt-3 space-y-2.5 border-t border-slate-100">
                <div className="text-xs font-sans font-bold tracking-wider text-slate-400 uppercase">
                  KEY TAKEAWAYS
                </div>
                {current.keyInsights.map((insight, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#76bc21] shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Note Box */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-sans font-bold text-[#0082c9] text-xs uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Physician's Direct Note</span>
              </div>
              <p className="italic text-slate-600 leading-relaxed font-serif">
                {current.doctorTip}
              </p>
            </div>

          </div>

          {/* Right Column: Step-by-Step Clinical Walkthrough & Diagnostic Timeline (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Steps Vertical Timeline */}
            <div className="space-y-4">
              {current.steps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-[#0082c9]/40 hover:shadow-lg transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-sky-50 group-hover:text-[#0082c9] flex items-center justify-center font-serif italic font-bold text-lg shrink-0 transition-colors shadow-2xs">
                    {step.stepNumber}
                  </div>

                  <div className="space-y-1 flex-1">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0082c9] transition-colors">
                      {step.stepTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.stepDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
