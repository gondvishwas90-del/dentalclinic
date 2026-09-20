"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Sparkles,
  Send,
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

interface BookingWizardProps {
  initialProblem?: string;
}

const PROBLEMS_LIST = [
  "Invisalign & Clear Aligners",
  "Cosmetic Dentistry & Veneers",
  "Tooth Pain / Toothache",
  "Teeth Cleaning & Polishing",
  "Cavity / Dental Filling",
  "Root Canal Treatment (RCT)",
  "Dental Implants & Restorative",
  "Child's Dental Problem",
  "General Dental Check-up",
  "Not Sure / Other Concern",
];

const MORNING_SLOTS = [
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
];

const EVENING_SLOTS = [
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
  "07:00 PM - 08:00 PM",
  "08:00 PM - 09:00 PM",
];

export function BookingWizard({ initialProblem }: BookingWizardProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedProblem, setSelectedProblem] = useState<string>(
    initialProblem || "General Dental Check-up"
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientNote, setPatientNote] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (initialProblem) {
      setSelectedProblem(initialProblem);
      setStep(2);
    }
  }, [initialProblem]);

  const availableDates = Array.from({ length: 10 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayName = d.toLocaleDateString("en-IN", { weekday: "short" });
    const dayNum = d.getDate();
    const month = d.toLocaleDateString("en-IN", { month: "short" });
    const fullFormatted = `${dayName}, ${dayNum} ${month}`;
    const isoDate = d.toISOString().split("T")[0];
    return { dayName, dayNum, month, fullFormatted, isoDate, isToday: i === 0 };
  });

  useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      setSelectedDate(availableDates[0].fullFormatted);
    }
    if (!selectedSlot) {
      setSelectedSlot(MORNING_SLOTS[0]);
    }
  }, []);

  const handleStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (step === 1) {
      if (!selectedProblem) {
        setErrorMsg("Please select your concern.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedDate) {
        setErrorMsg("Please choose your preferred date.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!selectedSlot) {
        setErrorMsg("Please select a time slot.");
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!patientName.trim()) {
        setErrorMsg("Please enter patient name.");
        return;
      }
      if (!patientPhone.trim() || patientPhone.trim().length < 10) {
        setErrorMsg("Please enter a valid 10-digit mobile number.");
        return;
      }
      setStep(5);
    }
  };

  const buildWhatsAppUrl = () => {
    const rawMsg = `Hello ${CLINIC_INFO.name}, I would like to book a dental appointment.
*Name:* ${patientName || "Patient"}
*Phone:* ${patientPhone || ""}
*Reason/Problem:* ${selectedProblem}
*Preferred Date:* ${selectedDate}
*Preferred Slot:* ${selectedSlot}
${patientNote ? `*Note:* ${patientNote}` : ""}

Please confirm my appointment. Thank you!`;

    const encoded = encodeURIComponent(rawMsg);
    const cleanNumber = CLINIC_INFO.phoneRaw.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  };

  return (
    <section
      id="booking-section"
      className="py-16 sm:py-24 bg-[#EBF6FC]/60 border-b border-slate-200/80 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2.5 mb-10 sm:mb-12" data-animate="fade-up">
          <div className="inline-flex items-center gap-1 text-xs font-mono-clinical uppercase tracking-wider text-[#0082c9] bg-[#0082c9]/10 px-3 py-1 rounded-full border border-[#0082c9]/20 font-bold">
            Easy Online Booking
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight">
            Book Your Dental Visit
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Quick online scheduling • Pay during your visit • Fast WhatsApp confirmation
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden" data-animate="scale-up">
          
          {/* Progress Bar Header: #003B65 */}
          <div className="bg-[#003B65] text-white px-6 py-4">
            <div className="flex items-center justify-between max-w-lg mx-auto text-xs font-mono-clinical">
              {[
                { num: 1, label: "01 CONCERN" },
                { num: 2, label: "02 DATE" },
                { num: 3, label: "03 TIME" },
                { num: 4, label: "04 DETAILS" },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <span
                    className={`font-semibold ${
                      step === s.num
                        ? "text-[#76bc21] underline underline-offset-4"
                        : step > s.num
                        ? "text-white/90"
                        : "text-white/40"
                    }`}
                  >
                    {step > s.num ? `✓ ${s.label.split(" ")[1]}` : s.label}
                  </span>
                  {s.num < 4 && <span className="text-white/20">/</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            
            {errorMsg && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono-clinical font-semibold">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* STEP 1: Concern */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    Step 1: What can we help you with?
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select the option that best describes your dental goal or symptom.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROBLEMS_LIST.map((problem) => {
                    const isSelected = selectedProblem === problem;
                    return (
                      <button
                        key={problem}
                        type="button"
                        onClick={() => setSelectedProblem(problem)}
                        className={`text-left p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-[#0082c9] border-[#0082c9] text-white font-bold shadow-md"
                            : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-white hover:border-[#0082c9]"
                        }`}
                      >
                        <span>{problem}</span>
                        {isSelected && (
                          <span className="text-xs font-mono-clinical text-cyan-200 font-bold">
                            SELECTED
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleStepSubmit}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#76bc21] hover:bg-[#639f19] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                  >
                    <span>Proceed to Date Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Date */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      Step 2: Choose Preferred Date
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Upcoming appointment slots at our studio.
                    </p>
                  </div>
                  <span className="text-xs font-mono-clinical bg-cyan-50 text-[#0082c9] px-3 py-1 rounded-full border border-cyan-200 font-semibold">
                    {selectedProblem.split("/")[0]}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {availableDates.map((dateObj) => {
                    const isSelected = selectedDate === dateObj.fullFormatted;
                    return (
                      <button
                        key={dateObj.isoDate}
                        type="button"
                        onClick={() => setSelectedDate(dateObj.fullFormatted)}
                        className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                          isSelected
                            ? "bg-[#0082c9] border-[#0082c9] text-white shadow-md"
                            : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-white"
                        }`}
                      >
                        <span
                          className={`text-[10px] font-mono-clinical uppercase ${
                            isSelected ? "text-cyan-200 font-bold" : "text-slate-500"
                          }`}
                        >
                          {dateObj.dayName} {dateObj.isToday && "(Today)"}
                        </span>
                        <span className="text-2xl font-serif font-bold">
                          {dateObj.dayNum}
                        </span>
                        <span
                          className={`text-[11px] font-mono-clinical ${
                            isSelected ? "text-white/90" : "text-slate-600"
                          }`}
                        >
                          {dateObj.month}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-clinical font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    BACK
                  </button>

                  <button
                    type="button"
                    onClick={handleStepSubmit}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#76bc21] hover:bg-[#639f19] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                  >
                    <span>Proceed to Time Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Time Slot */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    Step 3: Select Shift &amp; Time
                  </h3>
                  <p className="text-xs font-mono-clinical text-slate-500 mt-1">
                    Date: <strong className="text-slate-900">{selectedDate}</strong>
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Morning Shift */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono-clinical uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#0082c9]" />
                      Morning Shift ({CLINIC_INFO.hours.morning})
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {MORNING_SLOTS.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-3.5 rounded-xl border text-xs font-mono-clinical text-left transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? "bg-[#0082c9] border-[#0082c9] text-white font-bold shadow-sm"
                                : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-white"
                            }`}
                          >
                            <span>{slot}</span>
                            {isSelected && (
                              <span className="text-[10px] text-cyan-200">SELECTED</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Evening Shift */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono-clinical uppercase tracking-wider text-slate-700 flex items-center gap-1.5 font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#76bc21]" />
                      Evening Shift ({CLINIC_INFO.hours.evening})
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {EVENING_SLOTS.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-3.5 rounded-xl border text-xs font-mono-clinical text-left transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? "bg-[#0082c9] border-[#0082c9] text-white font-bold shadow-sm"
                                : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-white"
                            }`}
                          >
                            <span>{slot}</span>
                            {isSelected && (
                              <span className="text-[10px] text-cyan-200">SELECTED</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-clinical font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    BACK
                  </button>

                  <button
                    type="button"
                    onClick={handleStepSubmit}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#76bc21] hover:bg-[#639f19] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                  >
                    <span>Proceed to Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Details */}
            {step === 4 && (
              <form onSubmit={handleStepSubmit} className="space-y-5 animate-in fade-in duration-200">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    Step 4: Patient Contact Information
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    We will send appointment reminders and confirmation to this number.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono-clinical uppercase tracking-wider text-slate-900 mb-1.5 font-bold">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0082c9] text-sm outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-clinical uppercase tracking-wider text-slate-900 mb-1.5 font-bold">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0082c9] text-sm outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-clinical uppercase tracking-wider text-slate-900 mb-1.5 font-bold">
                      Specific Symptoms or Questions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={patientNote}
                      onChange={(e) => setPatientNote(e.target.value)}
                      placeholder="e.g. Toothache while eating..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#0082c9] text-sm outline-hidden transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5 text-xs font-mono-clinical text-slate-600">
                  <div className="flex justify-between">
                    <span>CONCERN:</span>
                    <span className="font-bold text-slate-900">{selectedProblem}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DATE &amp; TIME:</span>
                    <span className="font-bold text-slate-900">{selectedDate} ({selectedSlot})</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-200 text-[#0082c9]">
                    <span>CONSULTATION:</span>
                    <span className="font-bold">Pay during visit</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-clinical font-semibold text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    BACK
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#76bc21] hover:bg-[#639f19] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>
                </div>
              </form>
            )}

            {/* STEP 5: Confirmation */}
            {step === 5 && (
              <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#76bc21]/20 text-[#4c840e] flex items-center justify-center mx-auto ring-8 ring-[#76bc21]/10">
                  <CheckCircle2 className="w-10 h-10 text-[#76bc21]" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    Appointment Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{patientName}</strong>. Aura Dental Studio will confirm your slot shortly.
                  </p>
                </div>

                {/* Receipt */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 max-w-md mx-auto text-left space-y-2 text-xs font-mono-clinical text-slate-600">
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span>CONCERN:</span>
                    <span className="font-bold text-slate-900">{selectedProblem}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span>DATE:</span>
                    <span className="font-bold text-slate-900">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-200">
                    <span>SLOT:</span>
                    <span className="font-bold text-slate-900">{selectedSlot}</span>
                  </div>
                  <div className="flex justify-between pt-1 text-[#0082c9] font-bold">
                    <span>CONSULTATION:</span>
                    <span>Pay during visit</span>
                  </div>
                </div>

                {/* Instant Actions */}
                <div className="space-y-3 max-w-md mx-auto pt-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#76bc21] hover:bg-[#639f19] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Confirm Instantly via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-full font-mono-clinical text-xs font-semibold transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0082c9]" />
                    <span>Direct Call: {CLINIC_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
