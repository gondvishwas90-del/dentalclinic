"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";

interface FooterProps {
  onBookClick: () => void;
}

// Circular Social Icons (Exact Match to Screenshot)
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.053 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

function MapsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Footer({ onBookClick }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#122638] text-white/70 text-xs font-sans border-t border-white/10 pb-20 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-20 pb-8">
        
        {/* Main 4-Column Grid (Exact Match to Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand, Tagline & 4 Social Icons (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Official Circular Logo Emblem */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden p-0.5 shrink-0">
                <img src="/aura-logo.png" alt="Aura Dental Studio Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <div className="font-heading text-base font-extrabold text-white tracking-tight leading-none flex items-center gap-1.5">
                  Aura Dental Studio
                </div>
                <div className="text-[10px] text-white/60 font-medium leading-none mt-1">
                  Multi-Speciality Practice
                </div>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-normal">
              Where advanced dentistry meets genuine warmth. Quality luxury care for modern families.
            </p>

            {/* 4 Circular Social Icon Buttons (Exact Match) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://instagram.com/${CLINIC_INFO.doctor.instagram?.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="Google Reviews"
              >
                <GoogleIcon className="w-4 h-4" />
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
                aria-label="Google Maps"
              >
                <MapsIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Column 2: SERVICES (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-normal">
              <li>
                <button onClick={() => scrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Cosmetic Dentistry
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Endodontic Treatments (RCT)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                  General &amp; Preventive Dentistry
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Orthodontic Treatment (Invisalign)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Restorative &amp; Prosthodontic Dentistry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: PRACTICE (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              PRACTICE
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-normal">
              <li>
                <button onClick={() => scrollTo("doctor")} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("doctor")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Dr. Aria Sharma
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Technology &amp; Hygiene
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("location")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Patient Information
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("location")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Transparent Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("faq")} className="hover:text-white transition-colors cursor-pointer text-left">
                  Blog &amp; FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              CONTACT
            </h4>

            <div className="space-y-3 text-xs text-white/70">
              <div>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="text-white hover:text-[#76bc21] transition-colors font-medium text-sm"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="text-white/70">
                hello@auradentalstudio.com
              </div>

              <div className="leading-relaxed text-white/70">
                Suite 102, The Wellness Pavilion, Central Boulevard, <br />
                Bandra West, Mumbai, Maharashtra 400050
              </div>

              {/* Green Pill Book Appointment Button (Exact Match) */}
              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-[#76bc21] hover:bg-[#639f19] active:bg-[#528414] text-white rounded-full font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Sub-bar (Exact Match to Screenshot) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 font-normal">
          <div>
            © 2026 Aura Dental Studio. All rights reserved.
          </div>

          <div className="flex items-center gap-5 text-white/60">
            <a href="#" className="hover:text-white transition-colors underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors underline-offset-2 hover:underline">
              Terms of Use
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors underline-offset-2 hover:underline">
              Accessibility Statement
            </a>
          </div>

          <div className="text-white/40 font-mono-clinical">
            Powered by Aura Dental Studio
          </div>
        </div>

      </div>
    </footer>
  );
}
