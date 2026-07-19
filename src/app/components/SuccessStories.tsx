"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, TrendingUp } from "lucide-react";
import GlassCard3D from "./ui/GlassCard3D";

const successCases = [
  {
    title: "Gourmet Food Brand",
    category: "Culinary & Restaurant",
    image: "/food.png",
    metric: "+150%",
    metricLabel: "Engagement Surge",
    description: "Multi-channel visual campaign resulting in 150% boost in organic social orders.",
    glow: "rgba(239, 68, 68, 0.15)",
  },
  {
    title: "Solar Green Energy",
    category: "Clean Tech & Sustainability",
    image: "/solar.png",
    metric: "1M+",
    metricLabel: "Weekly Impressions",
    description: "Targeted B2B & B2C lead generation pipeline scaling solar inquiries across Odisha.",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    title: "Luxury Shopping Mall",
    category: "Retail & Experiences",
    image: "/shopping_mall.png",
    metric: "+300%",
    metricLabel: "Follower Growth",
    description: "Foot-traffic amplification campaign driving over 100k weekend mall visitors.",
    glow: "rgba(0, 113, 227, 0.15)",
  },
  {
    title: "Premium Fleet Rental",
    category: "Automotive & Transport",
    image: "/car-rent.png",
    metric: "+200%",
    metricLabel: "Direct Bookings",
    description: "Visual show-reel strategy turning social views into instant luxury rentals.",
    glow: "rgba(168, 85, 247, 0.15)",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-[#fbfbfd] relative overflow-hidden">
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
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">
            Our Client <span className="text-gradient-blue">Success Stories</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Real performance metrics and real digital growth achieved for our partner brands.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successCases.map((story, idx) => (
            <GlassCard3D
              key={story.title}
              glowColor={story.glow}
              className="p-0 overflow-hidden group flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
                  
                  {/* Category Pill */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
                      {story.category}
                    </span>

                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-black/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
                      <TrendingUp className="w-3.5 h-3.5" /> Verified Result
                    </div>
                  </div>

                  {/* Title & Metric */}
                  <div className="text-white flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl font-black">{story.title}</h3>
                      <p className="text-xs text-gray-300 font-medium">{story.description}</p>
                    </div>

                    <div className="shrink-0 ml-4 text-right">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/90 backdrop-blur-md text-[#0071e3] border-2 border-white flex flex-col items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <span className="text-lg sm:text-xl font-black leading-tight">{story.metric}</span>
                        <span className="text-[9px] text-gray-500 font-semibold uppercase">{story.metricLabel.split(" ")[0]}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </GlassCard3D>
          ))}
        </div>

      </div>
    </section>
  );
}
