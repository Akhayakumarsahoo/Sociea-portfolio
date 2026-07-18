"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Target, Zap, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import GlassCard3D from "./ui/GlassCard3D";
import Button3D from "./ui/Button3D";

const stats = [
  { label: "Total Reach Generated", value: "50M+", icon: Zap },
  { label: "Active Brands Scaled", value: "150+", icon: Award },
  { label: "Client Retention Rate", value: "99.4%", icon: CheckCircle2 },
  { label: "Average Campaign ROI", value: "10.4x", icon: Target },
];

export default function About() {
  return (
    <section className="py-24 bg-[#fbfbfd] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">
            Odisha&apos;s Premier <span className="text-gradient-blue">360° Digital Agency</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We don&apos;t just post content — we craft high-converting 3D brand experiences, strategic social narratives, and high-ROI ad campaigns.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Main Story (Span 7) */}
          <div className="md:col-span-7">
            <GlassCard3D className="h-full flex flex-col justify-between" glowColor="rgba(0, 113, 227, 0.12)">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-[#0071e3]">
                  <Sparkles className="w-6 h-6" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
                  Transforming Local & Global Brands into Digital Powerhouses
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Sociea was built to bridge the gap between traditional business and modern 3D digital dominance. We combine deep market psychology with state-of-the-art visuals to turn target audiences into raving loyal customers.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    "Data-backed social media growth strategies",
                    "High-end 3D graphic design & video animation",
                    "Targeted performance marketing with measurable ROAS",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 flex items-center justify-between">
                <Button3D href="/about" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About Us
                </Button3D>
              </div>
            </GlassCard3D>
          </div>

          {/* Card 2: Visual Image Frame (Span 5) */}
          <div className="md:col-span-5">
            <GlassCard3D className="h-full flex flex-col justify-between p-0 overflow-hidden" glowColor="rgba(99, 102, 241, 0.15)">
              <div className="relative w-full h-64 sm:h-72">
                <Image
                  src="/image-2.png"
                  alt="Sociea Digital Agency Strategy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Creative Excellence</span>
                    <h4 className="text-xl font-bold">Designed to Captivate & Convert</h4>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white/60 backdrop-blur-md">
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Our in-house team of designers, strategists, and performance marketers collaborate seamlessly to ensure every post generates real revenue.
                </p>
              </div>
            </GlassCard3D>
          </div>

          {/* Card 3: Metrics Bar (Span 12) */}
          <div className="md:col-span-12 mt-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-xl shadow-black/5 hover:scale-[1.02] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071e3] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-3xl sm:text-4xl font-black text-[#1d1d1f] tracking-tight">{stat.value}</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
