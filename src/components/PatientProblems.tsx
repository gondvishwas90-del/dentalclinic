"use client";

import React from "react";
import { ArrowRight, Zap, ShieldAlert, Sparkles, Smile, Layers, Baby, HelpCircle } from "lucide-react";
import { PATIENT_PROBLEMS, PatientProblem } from "@/data/clinic-data";

interface PatientProblemsProps {
  onSelectProblem: (problemTitle: string) => void;
}

export function PatientProblems({ onSelectProblem }: PatientProblemsProps) {
  const getProblemIcon = (id: string) => {
    switch (id) {
      case "tooth-pain":
        return <Zap className="w-5 h-5 text-red-500" />;
      case "cavity-damaged":
        return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      case "teeth-cleaning":
        return <Sparkles className="w-5 h-5 text-[#0082c9]" />;
      case "braces-alignment":
        return <Smile className="w-5 h-5 text-[#76bc21]" />;
      case "smile-concerns":
        return <Sparkles className="w-5 h-5 text-[#0082c9]" />;
      case "missing-teeth":
        return <Layers className="w-5 h-5 text-[#003B65]" />;
      case "child-dental":
        return <Baby className="w-5 h-5 text-[#76bc21]" />;
      default:
        return <HelpCircle className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="problems" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12 sm:mb-16" data-animate="fade-up">
          <div className="text-xs sm:text-sm font-bold tracking-wider text-[#0082c9] uppercase font-mono-clinical">
            PATIENT CONCIERGE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
            Care tailored to how you feel.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Select your dental goal or symptom below to schedule a tailored consultation with Dr. Aria Sharma.
          </p>
        </div>

        {/* Staggered Symptom Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          data-animate-stagger="100"
        >
          {PATIENT_PROBLEMS.map((problem: PatientProblem) => {
            const isUrgent = problem.id === "tooth-pain";

            return (
              <div
                key={problem.id}
                data-animate="fade-up"
                onClick={() => onSelectProblem(problem.title)}
                className={`bg-slate-50 rounded-3xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 group hover:bg-white ${
                  isUrgent
                    ? "border-red-200 hover:border-red-400 ring-1 ring-red-100"
                    : "border-slate-200 hover:border-[#0082c9]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-100">
                      {getProblemIcon(problem.id)}
                    </div>
                    {problem.urgency && (
                      <span className="text-[10px] font-mono-clinical font-bold uppercase bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                        {problem.urgency}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#0082c9] transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {problem.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0082c9] group-hover:text-[#76bc21] transition-colors">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info note */}
        <div className="mt-12 text-center text-xs font-mono-clinical text-slate-500">
          • ALL INITIAL VISITS INCLUDE A COMPLETE PHYSICAL ASSESSMENT • ZERO HIDDEN CHARGES
        </div>

      </div>
    </section>
  );
}
