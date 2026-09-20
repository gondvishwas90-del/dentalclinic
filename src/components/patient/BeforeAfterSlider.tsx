"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BeforeAfterSliderProps {
  title?: string;
  subtitle?: string;
  treatmentName?: string;
  doctorNotes?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  title = "Clinical Transformations & Care Precision",
  subtitle = "Observed clinical results across restorative crowns, scaling, and cosmetic alignment.",
  treatmentName = "Restorative Ceramic Crown & Hygiene Alignment",
  doctorNotes = "Correction of enamel erosion and anterior alignment restoring full bite functionality and natural dental aesthetics.",
  beforeImage = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  afterImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
  beforeAlt = "Dental clinical condition before treatment",
  afterAlt = "Dental clinical condition after restorative care",
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(5, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(95, prev + 5));
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#D6D1D0]/60 relative overflow-hidden">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE8E8] text-[#14151D] text-xs uppercase tracking-widest font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B38C61]" />
            <span>Clinical Precision</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#14151D] tracking-tight font-normal leading-[1.02]">
            {title}
          </h2>
          <p className="text-[#424346] text-base sm:text-lg mt-4 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-[#F7F8F6] p-4 sm:p-8 rounded-3xl border border-[#D6D1D0] shadow-sm max-w-5xl mx-auto">
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-label="Before and after treatment visual comparison slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none focus:outline-none focus:ring-2 focus:ring-[#B38C61]"
          >
            {/* After Image (Full background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={afterImage}
                alt={afterAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#14151D]/80 backdrop-blur-md text-[#F7F8F6] px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium shadow-sm">
                After Treatment
              </div>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
                <Image
                  src={beforeImage}
                  alt={beforeAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover brightness-95"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#14151D]/80 backdrop-blur-md text-[#F7F8F6] px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium shadow-sm">
                Before Treatment
              </div>
            </div>

            {/* Tactile Split Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FFFFFF] shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FFFFFF] text-[#14151D] shadow-xl border border-[#D6D1D0] flex items-center justify-center pointer-events-auto cursor-ew-resize transition-transform hover:scale-110 active:scale-95">
                <MoveHorizontal className="w-5 h-5 text-[#B38C61]" />
              </div>
            </div>
          </div>

          {/* Clinical Case Footer */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-[#D6D1D0]/70 text-xs">
            <div>
              <span className="text-[#6B6D70] uppercase tracking-wider block font-medium">Case Study Focus:</span>
              <span className="font-semibold text-sm text-[#14151D] mt-0.5 block">{treatmentName}</span>
              <p className="text-[#424346] mt-1 max-w-xl text-xs leading-relaxed">{doctorNotes}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[#B38C61] font-medium bg-[#B38C61]/10 px-3 py-1.5 rounded-full text-xs inline-block">
                Drag slider or use arrow keys ← →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
