"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GlassCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
}

export default function GlassCard3D({
  children,
  className = "",
  glowColor = "rgba(0, 113, 227, 0.15)",
  enableTilt = true,
}: GlassCard3DProps) {
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6; // max 6 deg tilt
    const rotY = ((x - centerX) / centerX) * 6;

    rotateXRaw.set(rotX);
    rotateYRaw.set(rotY);
  };

  const handleMouseLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          boxShadow: `0 20px 40px -15px ${glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.6) inset`,
        }}
        className={`
          relative rounded-3xl p-6 sm:p-8
          bg-white/80 backdrop-blur-xl
          border border-white/80 shadow-2xl shadow-black/5
          hover:shadow-3xl transition-shadow duration-300
          overflow-hidden group preserve-3d will-change-transform
          ${className}
        `}
      >
        {/* Subtle Ambient Light Gradient on Hover */}
        <div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
          }}
        />

        {/* Specular Light Reflection Sheen */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none rounded-t-3xl" />

        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
