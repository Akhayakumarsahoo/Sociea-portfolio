"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Button3DProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark" | "glass" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button3D({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "right",
  fullWidth = false,
  type = "button",
}: Button3DProps) {
  // Variant styles
  const baseVariantMap = {
    primary:
      "bg-gradient-to-b from-[#0077ed] to-[#0066cc] text-white border-b-4 border-[#004fa3] shadow-lg shadow-blue-500/30 hover:from-[#0080ff] hover:to-[#0071e3] active:border-b-0 active:translate-y-[4px]",
    secondary:
      "bg-gradient-to-b from-[#1d1d1f] to-[#0a0a0c] text-white border-b-4 border-[#000000] shadow-lg shadow-black/20 hover:from-[#2d2d30] hover:to-[#171719] active:border-b-0 active:translate-y-[4px]",
    dark:
      "bg-gradient-to-b from-[#2c2c2e] to-[#1c1c1e] text-white border-b-4 border-[#0d0d0e] shadow-lg shadow-black/30 hover:from-[#3a3a3c] hover:to-[#2c2c2e] active:border-b-0 active:translate-y-[4px]",
    glass:
      "bg-white/80 backdrop-blur-md text-gray-900 border-b-4 border-gray-300/80 border-t border-x border-white/60 shadow-xl shadow-black/5 hover:bg-white active:border-b-0 active:translate-y-[4px]",
    white:
      "bg-gradient-to-b from-white to-gray-100 text-[#0071e3] border-b-4 border-gray-300 shadow-xl shadow-gray-300/50 hover:from-white hover:to-gray-50 active:border-b-0 active:translate-y-[4px]",
  };

  // Size styles
  const sizeMap = {
    sm: "px-4 py-2 text-xs rounded-xl gap-1.5",
    md: "px-6 py-3 text-sm sm:text-base font-semibold rounded-2xl gap-2",
    lg: "px-8 py-4 text-base sm:text-lg font-bold rounded-2xl gap-2.5",
  };

  const combinedClasses = `
    relative inline-flex items-center justify-center font-medium tracking-tight
    transition-all duration-200 ease-out transform cursor-pointer select-none
    hover:-translate-y-0.5 active:scale-[0.98] group overflow-hidden
    ${baseVariantMap[variant]}
    ${sizeMap[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const content = (
    <>
      {/* Top Gloss Highlight Sheen */}
      <span className="absolute top-0 left-0 right-0 h-[35%] bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />
      
      {/* Shimmer sweep on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

      {icon && iconPosition === "left" && (
        <span className="relative z-10 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      
      <span className="relative z-10">{children}</span>

      {icon && iconPosition === "right" && (
        <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={combinedClasses}
    >
      {content}
    </motion.button>
  );
}
