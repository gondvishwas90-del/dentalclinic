"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DoctorSection } from "@/components/DoctorSection";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PatientEducation } from "@/components/PatientEducation";
import { GettingStartedSection } from "@/components/GettingStartedSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { AnimationObserver } from "@/components/AnimationObserver";
import { CLINIC_INFO } from "@/data/clinic-data";

export default function LandingPage() {
  const router = useRouter();

  const handleBooking = (serviceName?: string) => {
    if (serviceName) {
      router.push(`/book?service=${encodeURIComponent(serviceName)}`);
    } else {
      router.push("/book");
    }
  };

  const scrollToDoctor = () => {
    const doctorEl = document.getElementById("doctor");
    if (doctorEl) {
      doctorEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToLocation = () => {
    const locEl = document.getElementById("location");
    if (locEl) {
      locEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Animation Initializer */}
      <AnimationObserver />

      {/* Floating Glassmorphic Pill Navbar with Smart Scroll Hide/Show */}
      <Navbar onBookClick={() => handleBooking()} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section (Ocean water background, serif typography, dual-scrolling cards) */}
        <Hero onBookClick={() => handleBooking()} />

        {/* 2. Doctor Section ("Your trusted dental studio in Mumbai" - Directly Below Hero) */}
        <DoctorSection onBookClick={() => handleBooking()} />

        {/* 3. Patient Testimonials & Social Proof Strip ("WHAT PATIENTS SAY" - 4.9★ Google rating) */}
        <TestimonialsSlider />

        {/* 4. Our Services Horizontal Slider ("OUR SERVICES — Meet clinical expertise.") */}
        <ServicesSection onSelectService={(service) => handleBooking(service)} />

        {/* 5. What Sets Us Apart ("Experience the difference." 01/02 Cards) */}
        <FeaturesSection onDoctorClick={scrollToDoctor} />

        {/* 6. Patient Education ("An informed patient is a confident patient.") */}
        <PatientEducation onSelectConcern={() => scrollToLocation()} />

        {/* 7. Getting Started & Office Shifts ("Getting started is straightforward.") */}
        <GettingStartedSection onBookClick={() => handleBooking()} />

        {/* 8. Frequently Asked Questions (Accordion) */}
        <FAQSection />

        {/* 9. Closing Call-to-Action ("Welcome to a better dental visit.") */}
        <FinalCTA onBookClick={() => handleBooking()} />
      </main>

      {/* Footer */}
      <Footer onBookClick={() => handleBooking()} />

      {/* Fixed Mobile Bottom Command Bar */}
      <MobileBottomBar onBookClick={() => handleBooking()} />
    </div>
  );
}
