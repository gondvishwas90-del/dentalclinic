"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, Check, Calendar, Clock, User, Sparkles, MessageCircle, AlertCircle } from "lucide-react";
import { CLINIC_INFO, SERVICES } from "@/data/clinic-data";
import { cn } from "@/lib/utils";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: string;
  initialDoctor?: string;
}

const REASONS = [
  { id: "checkup", label: "Comprehensive Check-up", desc: "Digital imaging & dental health evaluation" },
  { id: "cleaning", label: "Teeth Scaling & Polishing", desc: "Gentle plaque, stain & tartar removal" },
  { id: "rct", label: "Root Canal Treatment (RCT)", desc: "Toothache relief & natural tooth preservation" },
  { id: "crowns", label: "Ceramic Crowns & Bridges", desc: "Zirconia & porcelain restorative caps" },
  { id: "implants", label: "Dental Implants", desc: "Permanent titanium tooth root replacement" },
  { id: "orthodontics", label: "Braces & Clear Aligners", desc: "Modern smile alignment & spacing correction" },
  { id: "pediatric", label: "Pediatric (Kids) Dentistry", desc: "Gentle, stress-free care for young smiles" },
  { id: "pain", label: "Acute Tooth Pain / Emergency", desc: "Prompt assessment and pain management" },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
  initialDoctor = "Dr. Aria Sharma (Lead Dental Surgeon)",
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedReason, setSelectedReason] = useState<string>(initialTreatment || "checkup");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedShift, setSelectedShift] = useState<"morning" | "evening">("morning");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("11:00 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [contactViaWhatsApp, setContactViaWhatsApp] = useState<boolean>(true);
  const [patientNote, setPatientNote] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // When initialTreatment changes on open
  useEffect(() => {
    if (initialTreatment) {
      setSelectedReason(initialTreatment);
    }
  }, [initialTreatment]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Generate next 7 days for dates
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + (i === 0 ? 0 : 0));
    const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
    const monthName = d.toLocaleDateString("en-US", { month: "short" });
    const dayNum = d.getDate();
    const isSunday = d.getDay() === 0;
    const dateStr = d.toISOString().split("T")[0];
    return { dateStr, dayName, monthName, dayNum, isSunday };
  });

  // Set default date on first load
  useEffect(() => {
    if (!selectedDate && availableDates.length > 0) {
      const firstNonSunday = availableDates.find((d) => !d.isSunday) || availableDates[0];
      setSelectedDate(firstNonSunday.dateStr);
    }
  }, [availableDates, selectedDate]);

  if (!isOpen) return null;

  const morningSlots = ["10:30 AM", "11:30 AM", "12:30 PM", "01:15 PM"];
  const eveningSlots = ["05:30 PM", "06:30 PM", "07:30 PM", "08:15 PM"];
  const currentSlots = selectedShift === "morning" ? morningSlots : eveningSlots;

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 1 && !selectedReason) {
      newErrors.reason = "Please select a reason for your visit.";
    }
    if (currentStep === 2 && !selectedDate) {
      newErrors.date = "Please select an appointment date.";
    }
    if (currentStep === 4) {
      if (!patientName.trim()) {
        newErrors.name = "Please enter your full name.";
      }
      if (!patientPhone.trim() || patientPhone.trim().length < 10) {
        newErrors.phone = "Please provide a valid 10-digit phone number.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setStep(4);
      return;
    }

    setIsSubmitted(true);

    // Format WhatsApp message dispatch if user prefers WhatsApp
    if (contactViaWhatsApp) {
      const reasonLabel = REASONS.find((r) => r.id === selectedReason)?.label || selectedReason;
      const text = `*New Dental Appointment Request*\n\n*Patient:* ${patientName}\n*Phone:* ${patientPhone}\n*Reason:* ${reasonLabel}\n*Date:* ${selectedDate}\n*Shift:* ${selectedShift.toUpperCase()} (${selectedTimeSlot})\n*Doctor:* ${initialDoctor}\n${patientNote ? `*Note:* ${patientNote}\n` : ""}\n_Requested via Aura Dental Studio Website_`;
      const cleanPhone = CLINIC_INFO.phoneRaw.replace(/\D/g, "");
      const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 700);
    }
  };

  const getReasonTitle = () => {
    return REASONS.find((r) => r.id === selectedReason)?.label || selectedReason;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#14151D]/70 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div className="relative w-full max-w-2xl bg-[#F7F8F6] text-[#14151D] rounded-3xl shadow-2xl border border-[#D6D1D0] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#D6D1D0]/70 bg-[#FFFFFF]">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#B38C61]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aura Dental Studio • Mumbai</span>
            </div>
            <h2 id="booking-title" className="font-display text-2xl sm:text-3xl text-[#14151D] mt-0.5 font-normal">
              Book a Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#424346] hover:text-[#14151D] hover:bg-[#EAE8E8] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div className="px-6 sm:px-8 pt-4 pb-2 bg-[#FFFFFF]/60 flex items-center justify-between text-xs text-[#6B6D70] border-b border-[#D6D1D0]/40">
            <span>
              Step <span className="font-semibold text-[#14151D]">{step}</span> of 5:{" "}
              {step === 1 && "Select Treatment"}
              {step === 2 && "Choose Preferred Date"}
              {step === 3 && "Preferred Shift & Time"}
              {step === 4 && "Patient Information"}
              {step === 5 && "Review & Confirm"}
            </span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    s === step
                      ? "w-7 bg-[#B38C61]"
                      : s < step
                      ? "w-3 bg-[#14151D]"
                      : "w-2 bg-[#D6D1D0]"
                  )}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {isSubmitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#B38C61]/15 text-[#B38C61] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-display text-3xl text-[#14151D]">Request Received</h3>
                <p className="text-[#424346] text-sm mt-2 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#14151D]">{patientName}</span>. Your consultation request for{" "}
                  <span className="font-semibold text-[#14151D]">{getReasonTitle()}</span> on{" "}
                  <span className="font-semibold text-[#14151D]">{selectedDate} ({selectedTimeSlot})</span> has been submitted to Dr. Aria Sharma&apos;s team.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#D6D1D0] max-w-md mx-auto text-left text-xs space-y-2 text-[#424346]">
                <div className="flex justify-between">
                  <span className="text-[#6B6D70]">Clinic Locality:</span>
                  <span className="font-medium text-[#14151D]">{CLINIC_INFO.locality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6D70]">Direct Phone:</span>
                  <span className="font-medium text-[#14151D]">{CLINIC_INFO.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6D70]">Clinic Shifts:</span>
                  <span className="font-medium text-[#14151D]">10 AM–2 PM & 5 PM–9 PM</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-full bg-[#14151D] text-[#F7F8F6] text-sm font-medium hover:bg-[#252733] transition-colors"
                >
                  Return to Website
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="px-6 py-3 rounded-full border border-[#D6D1D0] text-[#14151D] text-sm font-medium hover:bg-[#EAE8E8] transition-colors inline-flex items-center justify-center gap-2"
                >
                  Call Clinic Directly
                </a>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: REASON */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#14151D]">Select Your Care Requirement</h3>
                    <p className="text-xs text-[#6B6D70]">Choose the primary reason for your visit so we can prepare your consultation.</p>
                  </div>
                  {errors.reason && <p className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.reason}</p>}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {REASONS.map((reason) => {
                      const isSelected = selectedReason === reason.id || selectedReason === reason.label;
                      return (
                        <button
                          key={reason.id}
                          type="button"
                          onClick={() => setSelectedReason(reason.id)}
                          className={cn(
                            "p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between",
                            isSelected
                              ? "border-[#B38C61] bg-[#B38C61]/10 ring-1 ring-[#B38C61]"
                              : "border-[#D6D1D0] bg-[#FFFFFF] hover:border-[#B38C61]/50 hover:bg-[#FFFFFF]"
                          )}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-medium text-sm text-[#14151D]">{reason.label}</span>
                            {isSelected && <div className="w-4 h-4 rounded-full bg-[#B38C61] text-white flex items-center justify-center shrink-0 text-[10px]"><Check className="w-3 h-3" /></div>}
                          </div>
                          <span className="text-[11px] text-[#6B6D70] mt-1 leading-snug">{reason.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: DATE */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#14151D]">Choose Preferred Date</h3>
                    <p className="text-xs text-[#6B6D70]">Appointments available Monday to Saturday (Sunday by prior appointment).</p>
                  </div>
                  {errors.date && <p className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.date}</p>}

                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 pt-2">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateStr;
                      return (
                        <button
                          key={item.dateStr}
                          type="button"
                          onClick={() => setSelectedDate(item.dateStr)}
                          className={cn(
                            "p-3 rounded-2xl border flex flex-col items-center justify-center text-center transition-all cursor-pointer min-h-[84px]",
                            isSelected
                              ? "border-[#B38C61] bg-[#B38C61] text-white shadow-md"
                              : item.isSunday
                              ? "border-[#D6D1D0]/60 bg-[#EAE8E8]/40 text-[#6B6D70]"
                              : "border-[#D6D1D0] bg-[#FFFFFF] hover:border-[#B38C61]/50 text-[#14151D]"
                          )}
                        >
                          <span className={cn("text-[11px] font-medium", isSelected ? "text-white/80" : "text-[#6B6D70]")}>{item.dayName}</span>
                          <span className="text-xl font-bold font-display mt-0.5">{item.dayNum}</span>
                          <span className={cn("text-[10px]", isSelected ? "text-white/80" : "text-[#6B6D70]")}>
                            {item.isSunday ? "Sunday" : item.monthName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: SHIFT & TIME */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#14151D]">Select Time Preference</h3>
                    <p className="text-xs text-[#6B6D70]">Aura Dental Studio operates in two daily shifts designed around patient convenience.</p>
                  </div>

                  {/* Shift Selection */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedShift("morning");
                        setSelectedTimeSlot(morningSlots[0]);
                      }}
                      className={cn(
                        "p-4 rounded-2xl border text-left transition-all cursor-pointer",
                        selectedShift === "morning"
                          ? "border-[#B38C61] bg-[#B38C61]/10 ring-1 ring-[#B38C61]"
                          : "border-[#D6D1D0] bg-[#FFFFFF] hover:border-[#B38C61]/40"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#B38C61]" />
                        <span className="font-medium text-sm text-[#14151D]">Morning Shift</span>
                      </div>
                      <span className="text-xs text-[#6B6D70] mt-1 block">10:00 AM – 02:00 PM</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedShift("evening");
                        setSelectedTimeSlot(eveningSlots[0]);
                      }}
                      className={cn(
                        "p-4 rounded-2xl border text-left transition-all cursor-pointer",
                        selectedShift === "evening"
                          ? "border-[#B38C61] bg-[#B38C61]/10 ring-1 ring-[#B38C61]"
                          : "border-[#D6D1D0] bg-[#FFFFFF] hover:border-[#B38C61]/40"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#B38C61]" />
                        <span className="font-medium text-sm text-[#14151D]">Evening Shift</span>
                      </div>
                      <span className="text-xs text-[#6B6D70] mt-1 block">05:00 PM – 09:00 PM</span>
                    </button>
                  </div>

                  {/* Slots */}
                  <div className="pt-2">
                    <label className="text-xs font-medium text-[#424346] block mb-2">Preferred Approximate Slot:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {currentSlots.map((slot) => {
                        const isSelected = selectedTimeSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTimeSlot(slot)}
                            className={cn(
                              "py-2.5 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer text-center",
                              isSelected
                                ? "bg-[#14151D] text-[#F7F8F6] border-[#14151D]"
                                : "bg-[#FFFFFF] text-[#14151D] border-[#D6D1D0] hover:border-[#B38C61]"
                            )}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: PATIENT DETAILS */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#14151D]">Patient Information</h3>
                    <p className="text-xs text-[#6B6D70]">We only request essential details to reserve your slot and confirm availability.</p>
                  </div>

                  <div className="space-y-3.5 pt-1">
                    <div>
                      <label className="block text-xs font-medium text-[#14151D] mb-1">
                        Full Name <span className="text-[#B38C61]">*</span>
                      </label>
                      <input
                        type="text"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Rahul Patil"
                        className="w-full px-4 py-3 rounded-xl border border-[#D6D1D0] bg-[#FFFFFF] text-sm text-[#14151D] placeholder:text-[#6B6D70]/60 focus:outline-none focus:border-[#B38C61]"
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#14151D] mb-1">
                        Phone Number <span className="text-[#B38C61]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="e.g. 98230 12345"
                        className="w-full px-4 py-3 rounded-xl border border-[#D6D1D0] bg-[#FFFFFF] text-sm text-[#14151D] placeholder:text-[#6B6D70]/60 focus:outline-none focus:border-[#B38C61]"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="whatsapp-pref"
                        checked={contactViaWhatsApp}
                        onChange={(e) => setContactViaWhatsApp(e.target.checked)}
                        className="w-4 h-4 rounded border-[#D6D1D0] text-[#B38C61] focus:ring-[#B38C61]"
                      />
                      <label htmlFor="whatsapp-pref" className="text-xs text-[#424346] flex items-center gap-1.5 cursor-pointer">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        Send appointment confirmation details via WhatsApp
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#14151D] mb-1">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={patientNote}
                        onChange={(e) => setPatientNote(e.target.value)}
                        placeholder="Any ongoing discomfort, pain level, or medical concerns..."
                        className="w-full px-4 py-2.5 rounded-xl border border-[#D6D1D0] bg-[#FFFFFF] text-xs text-[#14151D] placeholder:text-[#6B6D70]/60 focus:outline-none focus:border-[#B38C61]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: REVIEW */}
              {step === 5 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#14151D]">Review Your Consultation Details</h3>
                    <p className="text-xs text-[#6B6D70]">Please review your selected details before confirming.</p>
                  </div>

                  <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#D6D1D0] space-y-3.5 text-xs text-[#424346]">
                    <div className="flex justify-between items-center py-1 border-b border-[#D6D1D0]/50">
                      <span className="text-[#6B6D70]">Treatment / Reason:</span>
                      <span className="font-semibold text-sm text-[#14151D]">{getReasonTitle()}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#D6D1D0]/50">
                      <span className="text-[#6B6D70]">Doctor:</span>
                      <span className="font-medium text-[#14151D]">{initialDoctor}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#D6D1D0]/50">
                      <span className="text-[#6B6D70]">Date & Time Slot:</span>
                      <span className="font-medium text-[#14151D]">{selectedDate} • {selectedTimeSlot} ({selectedShift})</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-[#D6D1D0]/50">
                      <span className="text-[#6B6D70]">Patient Name:</span>
                      <span className="font-medium text-[#14151D]">{patientName}</span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-[#6B6D70]">Phone Contact:</span>
                      <span className="font-medium text-[#14151D]">{patientPhone}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#6B6D70] text-center">
                    Note: An appointment request does not constitute an auto-billing. Our clinic team will verify the slot and reach out directly.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Controls */}
        {!isSubmitted && (
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#FFFFFF] border-t border-[#D6D1D0]/70">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#D6D1D0] text-[#14151D] text-xs font-medium hover:bg-[#EAE8E8] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#14151D] text-[#F7F8F6] text-xs font-medium hover:bg-[#252733] transition-colors cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#B38C61] text-white text-xs font-semibold hover:bg-[#9E7951] transition-all shadow-md cursor-pointer"
              >
                <span>Request Appointment</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
