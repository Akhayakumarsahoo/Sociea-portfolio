"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye, Target, ArrowRight } from "lucide-react";
import GlassCard3D from "../components/ui/GlassCard3D";
import Button3D from "../components/ui/Button3D";
import StrategySection from "../components/StrategySection";
import TeamSection from "../components/TeamSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] pt-32 pb-24 relative overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Story & Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1d1d1f] tracking-tight">
            Crafting Digital <span className="text-gradient-blue">Success</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Welcome to Sociea, Odisha&apos;s leading 360° digital agency dedicated to transforming brands into strong online identities. We believe marketing isn&apos;t just about promotion — it&apos;s about creating meaningful connections, building trust, and driving real growth.
          </p>

          <div className="pt-4 flex justify-center">
            <Button3D href="/packages" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Explore Packages
            </Button3D>
          </div>
        </motion.div>

        {/* Vision & Mission Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <GlassCard3D glowColor="rgba(0, 113, 227, 0.15)">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071e3]">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#1d1d1f]">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To empower brands with innovative 360° digital marketing strategies that drive real growth, boost online visibility, and build lasting customer trust across India and beyond.
              </p>
            </div>
          </GlassCard3D>

          <GlassCard3D glowColor="rgba(99, 102, 241, 0.15)">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#0071e3]">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#1d1d1f]">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To become Odisha&apos;s most trusted and result-driven marketing partner, delivering high-impact 3D visuals, strategic campaign execution, and measurable business returns.
              </p>
            </div>
          </GlassCard3D>
        </div>

      </div>

      <StrategySection />
      <TeamSection />
    </main>
  );
}
