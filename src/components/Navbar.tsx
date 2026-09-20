"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Calendar, Phone, ChevronRight, Sparkles } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinic-data";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      )}
    >
      <header className="max-w-6xl mx-auto glass-panel shadow-sm hover:shadow-md rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between pointer-events-auto transition-all">
        
        {/* Brand Identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFFFFF] flex items-center justify-center border border-[#D6D1D0] group-hover:border-[#B38C61] transition-colors shrink-0 p-0.5 shadow-xs">
            <Image
              src="/aura-logo.png"
              alt="Aura Dental Studio"
              width={32}
              height={32}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div>
            <div className="font-display text-base sm:text-lg text-[#14151D] tracking-tight flex items-center gap-1.5 leading-none">
              Aura Dental
            </div>
            <div className="text-[10px] text-[#6B6D70] font-medium tracking-wider uppercase leading-none mt-1">
              Studio • Mumbai
            </div>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-[#424346]">
          <button
            onClick={() => scrollToSection("treatments")}
            className="hover:text-[#14151D] transition-colors cursor-pointer py-1"
          >
            Treatments
          </button>
          <button
            onClick={() => scrollToSection("technology")}
            className="hover:text-[#14151D] transition-colors cursor-pointer py-1"
          >
            Technology
          </button>
          <button
            onClick={() => scrollToSection("doctor")}
            className="hover:text-[#14151D] transition-colors cursor-pointer py-1"
          >
            Meet Dr. Aria
          </button>
          <button
            onClick={() => scrollToSection("standards")}
            className="hover:text-[#14151D] transition-colors cursor-pointer py-1"
          >
            Clinical Standards
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="hover:text-[#14151D] transition-colors cursor-pointer py-1"
          >
            Patient Stories
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-[#14151D] transition-colors cursor-pointer py-1"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className="hover:text-[#14151D] transition-colors cursor-pointer py-1"
          >
            Location
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 text-xs font-medium text-white bg-[#B38C61] hover:bg-[#9E7951] active:scale-[0.98] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer tracking-tight"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#14151D] hover:bg-[#EAE8E8] rounded-full transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-[#F7F8F6]/98 backdrop-blur-2xl border border-[#D6D1D0] rounded-3xl p-6 shadow-2xl space-y-4 pointer-events-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#D6D1D0]/60">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B38C61]">Navigation</span>
            <span className="text-xs text-[#6B6D70]">Aura Dental Studio</span>
          </div>

          <div className="space-y-1 text-sm font-medium text-[#14151D]">
            <button
              onClick={() => scrollToSection("treatments")}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] flex justify-between items-center transition-colors"
            >
              <span>Treatments &amp; Multi-Speciality Care</span>
              <ChevronRight className="w-4 h-4 text-[#6B6D70]" />
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] flex justify-between items-center transition-colors"
            >
              <span>Technology &amp; Digital Precision</span>
              <ChevronRight className="w-4 h-4 text-[#6B6D70]" />
            </button>
            <button
              onClick={() => scrollToSection("doctor")}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] flex justify-between items-center transition-colors"
            >
              <span>Lead Dental Surgeon (Dr. Aria Sharma)</span>
              <ChevronRight className="w-4 h-4 text-[#6B6D70]" />
            </button>
            <button
              onClick={() => scrollToSection("standards")}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] flex justify-between items-center transition-colors"
            >
              <span>Clinical Standards &amp; Sterilization</span>
              <ChevronRight className="w-4 h-4 text-[#6B6D70]" />
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] flex justify-between items-center transition-colors"
            >
              <span>Patient Reviews (4.9★ Google)</span>
              <ChevronRight className="w-4 h-4 text-[#6B6D70]" />
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-[#FFFFFF] flex justify-between items-center transition-colors"
            >
              <span>Studio Hours &amp; Mumbai Location</span>
              <ChevronRight className="w-4 h-4 text-[#6B6D70]" />
            </button>
          </div>

          <div className="pt-3 border-t border-[#D6D1D0]/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 bg-[#B38C61] text-white rounded-full font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="w-full py-2.5 text-center text-xs font-medium text-[#14151D] bg-[#FFFFFF] border border-[#D6D1D0] rounded-full inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38C61]" />
              <span>Call Clinic: {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
