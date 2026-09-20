"use client";

import React from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppointmentCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "primary" | "secondary" | "tertiary" | "outline-dark" | "dark-gold";
  size?: "sm" | "md" | "lg";
  context?: string;
  doctor?: string;
  source?: string;
  showIcon?: boolean;
  onOpenBooking?: (context?: { treatment?: string; doctor?: string; source?: string }) => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({
  label = "Book an Appointment",
  variant = "primary",
  size = "md",
  context,
  doctor,
  source = "page",
  showIcon = true,
  onOpenBooking,
  className,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (onOpenBooking) {
      onOpenBooking({ treatment: context, doctor, source });
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-tight";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 min-h-[40px] gap-1.5",
    md: "text-sm px-6 py-3 min-h-[46px] gap-2",
    lg: "text-base px-8 py-4 min-h-[54px] gap-2.5",
  };

  const variantStyles = {
    // 10% Luxury Bronze Primary CTA
    primary:
      "bg-[#B38C61] text-white hover:bg-[#9E7951] focus-visible:ring-[#B38C61] shadow-sm hover:shadow-md active:scale-[0.99]",
    
    // Deep Charcoal secondary button
    secondary:
      "bg-[#14151D] text-[#F7F8F6] hover:bg-[#252733] focus-visible:ring-[#14151D] active:scale-[0.99]",
    
    // Subtle luxury border button
    "outline-dark":
      "border border-[#14151D] text-[#14151D] bg-transparent hover:bg-[#14151D] hover:text-[#F7F8F6] focus-visible:ring-[#14151D]",
    
    // Bronze highlight button for dark sections
    "dark-gold":
      "bg-[#B38C61] text-white hover:bg-[#C49B6E] focus-visible:ring-[#B38C61] shadow-md",

    // Minimal editorial link with arrow
    tertiary:
      "p-0 text-[#14151D] hover:text-[#B38C61] underline-offset-4 hover:underline bg-transparent min-h-0",
  };

  return (
    <button
      type="button"
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      onClick={handleClick}
      aria-label={label}
      {...props}
    >
      <span>{label}</span>
      {showIcon && (
        variant === "tertiary" ? (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : (
          <Calendar className="w-4 h-4 opacity-85" />
        )
      )}
    </button>
  );
};
