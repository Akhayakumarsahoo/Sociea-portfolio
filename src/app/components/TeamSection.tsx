"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Linkedin, Instagram } from "lucide-react";
import GlassCard3D from "./ui/GlassCard3D";

const teamMembers = [
  {
    name: "Bishmay Sahoo",
    role: "Marketing Lead",
    image: "/team/bishmaySahoo.jpeg",
    glow: "rgba(0, 113, 227, 0.15)",
  },
  {
    name: "Satyaprakash",
    role: "Lead Videographer",
    image: "/team/satyaprakash.jpeg",
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    name: "Subhashree",
    role: "Content Creator",
    image: "/team/subhashree.jpeg",
    glow: "rgba(236, 72, 153, 0.15)",
  },
  {
    name: "Chinmay",
    role: "Video Editor",
    image: "/team/chinmay.jpeg",
    glow: "rgba(16, 185, 129, 0.15)",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#f4f4f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Creative Experts</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">
            Meet Our <span className="text-gradient-blue">Team</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A passionate team of creative strategists, designers, content creators, and marketing experts driving digital success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <GlassCard3D
              key={member.name}
              glowColor={member.glow}
              className="text-center flex flex-col items-center justify-between p-6"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-[#1d1d1f]">{member.name}</h3>
                <p className="text-xs font-semibold text-[#0071e3] mt-1 uppercase tracking-wider">{member.role}</p>
              </div>
            </GlassCard3D>
          ))}
        </div>

      </div>
    </section>
  );
}
