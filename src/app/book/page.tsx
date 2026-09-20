"use client";

import React, { useState, useMemo, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Phone, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown, 
  Navigation, 
  ExternalLink,
  Share2,
  Stethoscope
} from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

const MORNING_SLOTS = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"];
const EVENING_SLOTS = ["05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"];

const COMMON_SERVICES = [
  "Comprehensive Dental Check-up",
  "Tooth Pain / Urgent Care",
  "Teeth Cleaning & Scaling",
  "Root Canal Treatment (RCT)",
  "Tooth-Colored Restorations",
  "Braces / Teeth Alignment",
  "Pediatric (Kids) Dentistry"
];

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialService = searchParams.get("service") || "Comprehensive Dental Check-up";

  // Form State
  const [patientName, setPatientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedService, setSelectedService] = useState(initialService);
  
  // Date State
  const [selectedDate, setSelectedDate] = useState(() => {
    // If today is Sunday, default to tomorrow (Monday)
    const d = new Date();
    if (d.getDay() === 0) {
      d.setDate(d.getDate() + 1);
    }
    return d.toISOString().split("T")[0];
  });

  // Calendar Dropdown State
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Current viewing month in calendar
  const [viewYear, setViewYear] = useState(() => new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => new Date().getMonth()); // 0-indexed

  // Time Slot State
  const [selectedSlot, setSelectedSlot] = useState("10:00 AM");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Close calendar popover on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    }
    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

  // Formatted date string for preview
  const formattedSelectedDate = useMemo(() => {
    try {
      const parts = selectedDate.split("-");
      const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      return d.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
      });
    } catch {
      return selectedDate;
    }
  }, [selectedDate]);

  // Calendar month days calculation
  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
    const lastDayOfMonth = new Date(viewYear, viewMonth + 1, 0);
    const totalDays = lastDayOfMonth.getDate();
    
    // Day of week for 1st of month: 0 (Sun) to 6 (Sat)
    // Convert to Monday-start index: 0 = Mon, ..., 6 = Sun
    let startDayIndex = firstDayOfMonth.getDay() - 1;
    if (startDayIndex < 0) startDayIndex = 6;

    type CalendarCell = 
      | { type: "empty"; key: string }
      | { 
          type: "day"; 
          day: number; 
          iso: string; 
          isSunday: boolean; 
          isPast: boolean; 
          isPacked: boolean; 
          isAvailable: boolean; 
          isSelected: boolean; 
          key: string; 
        };

    const days: CalendarCell[] = [];

    // Empty cells before start of month
    for (let i = 0; i < startDayIndex; i++) {
      days.push({ type: "empty", key: `empty-${i}` });
    }

    const todayStr = new Date().toISOString().split("T")[0];

    // Days in current month
    for (let day = 1; day <= totalDays; day++) {
      const d = new Date(viewYear, viewMonth, day);
      const iso = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isSunday = d.getDay() === 0;
      const isPast = iso < todayStr;
      
      // Deterministic availability status:
      // Sundays are closed
      // Past days disabled
      // Deterministic booked days for clinical realism (every 4th day or today evening)
      const isPacked = !isPast && !isSunday && ((day % 4 === 0) || (iso === todayStr && new Date().getHours() >= 18));
      const isAvailable = !isPast && !isSunday && !isPacked;

      days.push({
        type: "day",
        day,
        iso,
        isSunday,
        isPast,
        isPacked,
        isAvailable,
        isSelected: iso === selectedDate,
        key: iso
      });
    }

    return days;
  }, [viewYear, viewMonth, selectedDate]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  const handleSelectDate = (iso: string, isAvailable: boolean) => {
    if (!isAvailable) return;
    setSelectedDate(iso);
    setIsCalendarOpen(false);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phoneNumber.trim()) {
      alert("Please enter both patient name and contact number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const genId = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingId(genId);
      setIsSubmitting(false);
      setIsConfirmed(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  const sendWhatsAppReminder = () => {
    const text = `*${CLINIC_INFO.name} — Appointment Request*\n\n` +
      `Booking ID: ${bookingId}\n` +
      `Patient Name: ${patientName}\n` +
      `Mobile: +91 ${phoneNumber}\n` +
      `Date: ${formattedSelectedDate}\n` +
      `Time Slot: ${selectedSlot}\n` +
      `Concern: ${selectedService}\n` +
      `Doctor: ${CLINIC_INFO.doctor.name} (${CLINIC_INFO.doctor.title})\n` +
      `Clinic Address: ${CLINIC_INFO.name}, ${CLINIC_INFO.address}\n\n` +
      `Google Maps: ${CLINIC_INFO.googleMapsUrl}`;
    
    const cleanNumber = CLINIC_INFO.phoneRaw.replace(/\D/g, "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative flex flex-col justify-between font-sans">
      
      {/* Top Header */}
      <header className="relative z-20 border-b border-slate-200 bg-white shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
          
          <Link 
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#0082c9] transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5 group hover:opacity-95 transition-opacity">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-xs overflow-hidden border border-slate-200/90 p-0.5 shrink-0 group-hover:scale-105 transition-transform">
              <img src="/aura-logo.png" alt="Aura Dental Studio Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div className="text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-900 block leading-tight group-hover:text-[#0082c9] transition-colors">
                Aura Dental
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#0082c9] uppercase block -mt-0.5">
                Studio • Mumbai
              </span>
            </div>
          </Link>

          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0082c9] bg-slate-100 hover:bg-sky-50 px-3 py-1.5 rounded-full border border-slate-200 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#0082c9]" />
            <span className="hidden sm:inline">Call Clinic:</span>
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>

        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-2xl mx-auto px-4 sm:px-8 py-8 sm:py-12 w-full flex-1">
        
        {!isConfirmed ? (
          /* =========================================
             BOOKING INTAKE FORM
             ========================================= */
          <div className="space-y-6">
            
            {/* Clean Section Header (No Stickers / Badges) */}
            <div className="text-center space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                Schedule Your Appointment
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Choose your date, preferred slot, and enter patient contact details below.
              </p>
            </div>

            {/* Form Card */}
            <form 
              onSubmit={handleConfirm}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6"
            >
              
              {/* Patient Details */}
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider text-slate-800 uppercase flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#0082c9]" />
                  <span>Patient Information</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 block">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Rahul Patil"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0082c9]/30 focus:border-[#0082c9] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 block">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-xs text-slate-500 font-medium">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                        placeholder="9876543210"
                        className="w-full pl-11 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0082c9]/30 focus:border-[#0082c9] transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Selection with Dropdown Popover */}
              <div className="space-y-3 pt-3 border-t border-slate-100 relative" ref={calendarRef}>
                <div className="text-xs font-bold tracking-wider text-slate-800 uppercase flex items-center gap-2">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#0082c9]" />
                  <span>Select Date</span>
                </div>

                {/* Date Preview Button */}
                <button
                  type="button"
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all flex items-center justify-between text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0082c9]/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0082c9] shadow-2xs">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Appointment Date</div>
                      <div className="text-sm font-semibold text-slate-900">
                        {formattedSelectedDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#0082c9]">
                    <span>{isCalendarOpen ? "Close Calendar" : "Change Date"}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCalendarOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Popover Calendar */}
                {isCalendarOpen && (
                  <div className="mt-2 p-4 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-3 z-30 relative animate-in fade-in slide-in-from-top-1 duration-200">
                    
                    {/* Calendar Month & Navigation */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-sm font-bold text-slate-900">
                        {monthNames[viewMonth]} {viewYear}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition-colors"
                          aria-label="Previous Month"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition-colors"
                          aria-label="Next Month"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Day Headers (Mon to Sun) */}
                    <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-slate-500">
                      <span>Mo</span>
                      <span>Tu</span>
                      <span>We</span>
                      <span>Th</span>
                      <span>Fr</span>
                      <span>Sa</span>
                      <span className="text-rose-500">Su</span>
                    </div>

                    {/* Calendar Days Grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {calendarDays.map((item) => {
                        if (item.type === "empty") {
                          return <div key={item.key} className="h-10" />;
                        }

                        const { day, iso, isSunday, isPast, isPacked, isAvailable, isSelected } = item;

                        if (isPast) {
                          return (
                            <div
                              key={iso}
                              className="h-10 rounded-xl flex flex-col items-center justify-center text-xs text-slate-300 cursor-not-allowed bg-slate-50/50"
                            >
                              <span>{day}</span>
                            </div>
                          );
                        }

                        if (isSunday) {
                          return (
                            <div
                              key={iso}
                              title="Clinic Closed on Sundays"
                              className="h-10 rounded-xl flex flex-col items-center justify-center text-xs text-slate-400 bg-slate-100/70 cursor-not-allowed"
                            >
                              <span>{day}</span>
                              <span className="text-[9px] text-slate-400 font-medium -mt-0.5">Off</span>
                            </div>
                          );
                        }

                        if (isPacked) {
                          return (
                            <div
                              key={iso}
                              title="Fully Booked"
                              className="h-10 rounded-xl flex flex-col items-center justify-center text-xs text-rose-500 bg-rose-50/80 border border-rose-200/60 cursor-not-allowed"
                            >
                              <span className="font-medium">{day}</span>
                              <span className="text-[9px] font-semibold text-rose-600 uppercase -mt-0.5">Full</span>
                            </div>
                          );
                        }

                        return (
                          <button
                            type="button"
                            key={iso}
                            onClick={() => handleSelectDate(iso, isAvailable)}
                            className={`h-10 rounded-xl flex flex-col items-center justify-center text-xs transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#0082c9] text-white font-bold shadow-sm"
                                : "bg-white hover:bg-sky-50 text-slate-800 border border-slate-200/90 hover:border-[#0082c9]"
                            }`}
                          >
                            <span>{day}</span>
                            <span className={`w-1 h-1 rounded-full ${isSelected ? "bg-white" : "bg-emerald-500"} mt-0.5`} />
                          </button>
                        );
                      })}
                    </div>

                    {/* Status Legend */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Available</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span>Packed / Full</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                        <span>Closed</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Dedicated Time Slot Selection (Separate Section) */}
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold tracking-wider text-slate-800 uppercase flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#0082c9]" />
                    <span>Select Time Slot</span>
                  </div>
                  <span className="text-xs font-semibold text-[#0082c9]">
                    Selected: {selectedSlot}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Morning Shift */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium text-slate-500">
                      Morning Shift (10:00 AM – 02:00 PM)
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {MORNING_SLOTS.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center ${
                              isSelected
                                ? "bg-[#0082c9] text-white border-[#0082c9] shadow-xs font-semibold"
                                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Evening Shift */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium text-slate-500">
                      Evening Shift (05:00 PM – 09:00 PM)
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {EVENING_SLOTS.map((slot) => {
                        const isSelected = selectedSlot === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer text-center ${
                              isSelected
                                ? "bg-[#0082c9] text-white border-[#0082c9] shadow-xs font-semibold"
                                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Concern Selection */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <div className="text-xs font-bold tracking-wider text-slate-800 uppercase flex items-center gap-2">
                  <Stethoscope className="w-3.5 h-3.5 text-[#0082c9]" />
                  <span>Reason for Visit</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {COMMON_SERVICES.map((srv) => {
                    const isSelected = selectedService === srv;
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setSelectedService(srv)}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-slate-900 text-white border-slate-900 font-semibold"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#0082c9] hover:bg-[#006ea8] text-white rounded-xl font-bold text-sm shadow-md transition-all active:scale-[0.99] cursor-pointer disabled:opacity-75"
                >
                  <CalendarIcon className="w-4 h-4" />
                  <span>{isSubmitting ? "Confirming..." : "Confirm Appointment"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>

          </div>
        ) : (
          /* =========================================
             CONFIRMATION DETAILS VIEW (LIGHT THEMED)
             ========================================= */
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h1 className="font-serif text-3xl font-normal text-slate-900 tracking-tight">
                Appointment Requested
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Booking Reference: <strong className="text-slate-900">{bookingId}</strong>
              </p>
            </div>

            {/* Receipt Card */}
            <div className="rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-5">
              
              {/* Doctor Info */}
              <div className="border-b border-slate-100 pb-4">
                <div className="text-xs font-semibold text-[#0082c9] uppercase tracking-wider">
                  Attending Doctor
                </div>
                <div className="font-serif text-xl font-bold text-slate-900 mt-0.5">
                  {CLINIC_INFO.doctor.name}
                </div>
                <div className="text-xs text-slate-500">
                  {CLINIC_INFO.doctor.qualification} • {CLINIC_INFO.doctor.specialization}
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-[11px] font-medium text-slate-500 uppercase flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-[#0082c9]" />
                    <span>Appointment Date & Slot</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {formattedSelectedDate}
                  </div>
                  <div className="text-xs text-slate-600">
                    Time Slot: {selectedSlot}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-[11px] font-medium text-slate-500 uppercase flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0082c9]" />
                    <span>Patient Details</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {patientName}
                  </div>
                  <div className="text-xs text-slate-600">
                    +91 {phoneNumber}
                  </div>
                </div>

              </div>

              {/* Service */}
              <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center justify-between text-xs">
                <span className="text-slate-600">Reason for Visit:</span>
                <span className="font-semibold text-[#0082c9]">{selectedService}</span>
              </div>

              {/* Clinic Address Box (LIGHT THEMED) */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0082c9]" />
                    <span>Clinic Location</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {CLINIC_INFO.locality}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {CLINIC_INFO.address}
                </p>

                <div className="pt-1 flex flex-wrap gap-2.5">
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200 transition-colors shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#0082c9]" />
                    <span>Google Maps Directions</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200 transition-colors shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0082c9]" />
                    <span>Call Reception</span>
                  </a>
                </div>
              </div>

              {/* Actions: WhatsApp & Home */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={sendWhatsAppReminder}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer"
                >
                  <span>Return Home</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 py-5 text-center text-xs text-slate-500 border-t border-slate-200 bg-white">
        © {new Date().getFullYear()} {CLINIC_INFO.name} • {CLINIC_INFO.locality}
      </footer>

    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600 text-sm">
        Loading Appointment Portal...
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
