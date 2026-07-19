"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Video, Search, Film } from "lucide-react";
import GlassCard3D from "./ui/GlassCard3D";

const strategies = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "We partner with the right influencers to build authentic brand trust, expand your audience base, and create a strong market presence.",
    glow: "rgba(0, 113, 227, 0.12)",
  },
  {
    icon: Video,
    title: "Trending Content Production",
    description: "We craft creative and trend-driven video reels following the latest social algorithms to keep your brand ahead of competitors.",
    glow: "rgba(99, 102, 241, 0.12)",
  },
  {
    icon: Search,
    title: "High SEO Posting & Ranking",
    description: "Powerful technical and on-page SEO strategies allowing your brand to rank #1 for local & national search terms.",
    glow: "rgba(16, 185, 129, 0.12)",
  },
  {
    icon: Film,
    title: "Daily High-Quality Reels",
    description: "Consistent creation of engaging visual shorts and reels designed to capture attention and convert viewers into customers.",
    glow: "rgba(236, 72, 153, 0.12)",
  },
];

export default function StrategySection() {
  return (
    <section className="py-24 bg-[#fbfbfd] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">
            Our 360° Growth <span className="text-gradient-blue">Strategy</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A proven framework that combines viral content creation, search dominance, and influencer partnerships.
          </p>
        </motion.div>

        {/* 3D Bento Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <GlassCard3D key={item.title} glowColor={item.glow} className="flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071e3]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1d1d1f]">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </GlassCard3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
