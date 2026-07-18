"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Star } from "lucide-react";
import Button3D from "./ui/Button3D";

const socialFloatingAssets = [
  {
    id: "instagram",
    src: "/social-media/instagram.png",
    alt: "3D Instagram Icon",
    label: "Instagram Growth",
    sub: "+240% Engagement",
    pos: "top-[-10%] left-[-5%] sm:top-[-8%] sm:left-[-8%]",
    animation: "animate-levitate-slow",
    size: "w-20 h-20 sm:w-24 sm:h-24",
    glow: "shadow-pink-500/30",
  },
  {
    id: "youtube",
    src: "/social-media/youtube.png",
    alt: "3D YouTube Icon",
    label: "YouTube Video SEO",
    sub: "1.2M Views",
    pos: "top-[-6%] right-[-6%] sm:top-[-4%] sm:right-[-6%]",
    animation: "animate-levitate-delayed",
    size: "w-22 h-22 sm:w-28 sm:h-28",
    glow: "shadow-red-500/30",
  },
  {
    id: "meta",
    src: "/social-media/meta.png",
    alt: "3D Meta Icon",
    label: "Meta & Facebook Ads",
    sub: "9.8x ROAS",
    pos: "bottom-[20%] left-[-10%] sm:left-[-12%]",
    animation: "animate-levitate-fast",
    size: "w-20 h-20 sm:w-24 sm:h-24",
    glow: "shadow-blue-500/30",
  },
  {
    id: "google",
    src: "/social-media/google.png",
    alt: "3D Google Icon",
    label: "Google Search & Ads",
    sub: "#1 Rank Targeted",
    pos: "bottom-[-4%] right-[-5%] sm:bottom-[-2%] sm:right-[-6%]",
    animation: "animate-levitate-slow",
    size: "w-22 h-22 sm:w-26 sm:h-26",
    glow: "shadow-amber-500/30",
  },
  {
    id: "likes",
    src: "/social-media/likes.png",
    alt: "3D Likes Heart Icon",
    label: "Viral Likes",
    sub: "500k+ Interactions",
    pos: "bottom-[-10%] left-[15%] sm:bottom-[-8%] sm:left-[10%]",
    animation: "animate-levitate-delayed",
    size: "w-18 h-18 sm:w-22 sm:h-22",
    glow: "shadow-rose-500/30",
  },
  {
    id: "verify",
    src: "/social-media/verified.png",
    alt: "3D Verified Badge",
    label: "Verified Brand",
    sub: "Authority Status",
    pos: "top-[35%] right-[-12%] sm:right-[-14%]",
    animation: "animate-levitate-fast",
    size: "w-18 h-18 sm:w-22 sm:h-22",
    glow: "shadow-sky-500/30",
  },
];

export default function Hero() {
  // Smooth Hardware-Accelerated Motion Values (No React State Re-renders)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const smoothX = useSpring(rawX, { stiffness: 60, damping: 25, mass: 0.5 });
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const targetX = ((e.clientX / innerWidth) - 0.5) * 24;
      const targetY = ((e.clientY / innerHeight) - 0.5) * 24;
      rawX.set(targetX);
      rawY.set(targetY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#fbfbfd]">
      {/* Background Apple Ambient Lights & Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-purple-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-sky-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-sm shadow-black/5 text-xs sm:text-sm font-semibold text-gray-800"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071e3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071e3]"></span>
              </span>
              <span>Odisha&apos;s Premier 360° Digital Agency</span>
              <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.1]">
              SCALE YOUR BRAND ON DIGITAL PLATFORMS WITH{" "}
              <span className="block mt-2 text-gradient-blue font-black tracking-tight">
                SOCIEA
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Your Gateway To Social Media Success. We blend Apple-inspired 3D visuals, high-impact branding, and performance ads to dominate online markets.
            </p>

            {/* 3D Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button3D
                href="/packages"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started
              </Button3D>

              <Button3D
                href="/contact"
                variant="glass"
                size="lg"
                icon={<Sparkles className="w-5 h-5 text-[#0071e3]" />}
              >
                Book Free Strategy
              </Button3D>
            </div>

            {/* Social Trust Metrics Pill */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow">S</div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow">O</div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow">C</div>
                </div>
                <div className="text-left">
                  <div className="flex items-center text-amber-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">150+ Brands</span> Scaled
                </div>
              </div>

              <div className="h-6 w-px bg-gray-300 hidden sm:block" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-gray-900">99.4% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - LEVITATING 3D SOCIAL MEDIA SHOWCASE */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-center items-center">
            
            {/* Smooth Spring Hardware-Accelerated Container */}
            <motion.div 
              style={{ x: smoothX, y: smoothY }}
              className="relative w-full max-w-[460px] sm:max-w-[540px] aspect-square flex items-center justify-center will-change-transform"
            >
              
              {/* Central Apple Glass Showcase Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative z-20 w-[78%] h-[78%] rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_30px_70px_rgba(0,113,227,0.18)] p-6 flex flex-col justify-between overflow-hidden group"
              >
                {/* Gloss Top Reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-3xl" />
                
                {/* Agency Brand Banner Inside Frame */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg border border-white">
                      <Image
                        src="/sociea.webp"
                        alt="Sociea Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-base tracking-tight">SOCIEA</h3>
                      <p className="text-xs text-blue-600 font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Live Brand Growth
                      </p>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold animate-pulse">
                    ACTIVE
                  </div>
                </div>

                {/* Center Showcase Visual Image */}
                <div className="relative my-4 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-inner border border-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/image.png"
                    alt="Sociea Agency Workspace"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="text-xs font-medium text-gray-200">Featured Campaign</p>
                      <p className="text-sm font-bold">360° Digital Transformation</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Card */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-2.5 rounded-xl bg-gray-50/80 border border-gray-200/60 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Total Reach</p>
                    <p className="text-lg font-black text-gray-900">50M+</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/60 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-blue-600 font-bold">Avg Client ROI</p>
                    <p className="text-lg font-black text-[#0071e3]">10.4x</p>
                  </div>
                </div>
              </motion.div>

              {/* ------------------------------------------------------------------- */}
              {/* LEVITATING 3D SOCIAL MEDIA FLOATING ELEMENTS (6 IMAGES) */}
              {/* ------------------------------------------------------------------- */}

              {socialFloatingAssets.map((asset, index) => (
                <motion.div
                  key={asset.id}
                  initial={{ opacity: 0, scale: 0.5, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute z-30 ${asset.pos} ${asset.animation} group cursor-pointer`}
                >
                  <div className="relative">
                    {/* Floating Glow & Soft Drop Shadow */}
                    <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-white to-gray-100 opacity-60 blur-md group-hover:opacity-100 transition-opacity ${asset.glow}`} />

                    {/* 3D Image Container */}
                    <div className={`relative ${asset.size} rounded-3xl overflow-hidden p-2.5 bg-white/90 backdrop-blur-xl border-2 border-white shadow-2xl hover:scale-110 hover:-rotate-3 transition-all duration-300`}>
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                        <Image
                          src={asset.src}
                          alt={asset.alt}
                          fill
                          className="object-contain p-1 group-hover:scale-115 transition-transform duration-500"
                        />
                      </div>

                      {/* Top Specular Sheen */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/70 to-transparent pointer-events-none rounded-t-2xl" />
                    </div>

                    {/* Levitating Tooltip Pill on Hover */}
                    <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-gray-900/90 text-white text-[11px] font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-200 shadow-lg pointer-events-none">
                      {asset.label}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Central Pulsing Ambient Ring */}
              <div className="absolute inset-0 m-auto w-72 h-72 border border-blue-500/20 rounded-full animate-pulse-glow pointer-events-none" />
              <div className="absolute inset-0 m-auto w-[380px] h-[380px] border border-dashed border-indigo-400/20 rounded-full pointer-events-none" />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
