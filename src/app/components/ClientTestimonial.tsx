"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Quote } from "lucide-react";
import GlassCard3D from "./ui/GlassCard3D";

const testimonials = [
  {
    name: "Parikshit Mimani",
    role: "Business Owner",
    quote:
      "Working with Sociea has been a game-changer for my social media presence. Their innovative strategies and content execution significantly boosted our online engagement and brand visibility.",
    glow: "rgba(0, 113, 227, 0.12)",
    initial: "P",
  },
  {
    name: "Shuvam Somani",
    role: "Digital Entrepreneur",
    quote:
      "I highly recommend Sociea for anyone looking to enhance their social media reach. The team’s dedication, creative visuals, and expertise helped us achieve remarkable ROI growth in record time.",
    glow: "rgba(99, 102, 241, 0.12)",
    initial: "S",
  },
  {
    name: "Amit Patel",
    role: "Retail Director",
    quote:
      "Sociea transformed our social media marketing efforts. Their tailored campaign structures and high attention to detail directly led to a massive increase in verified leads and foot-traffic conversions.",
    glow: "rgba(16, 185, 129, 0.12)",
    initial: "A",
  },
];

export default function ClientTestimonials() {
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
            <span>Client Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">
            What Brands Say About <span className="text-gradient-blue">Sociea</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our clients are at the heart of everything we build. Here is their experience working with our agency.
          </p>
        </motion.div>

        {/* Testimonials 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <GlassCard3D
              key={item.name}
              glowColor={item.glow}
              className="flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-600/20" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0071e3] to-blue-400 text-white font-extrabold flex items-center justify-center shadow-md">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-[#1d1d1f] text-base">{item.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">{item.role}</p>
                </div>
              </div>
            </GlassCard3D>
          ))}
        </div>

      </div>
    </section>
  );
}
