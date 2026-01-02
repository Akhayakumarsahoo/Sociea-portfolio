"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Bishmay Sahoo",
    role: "Marketing Lead",
    image: "/bishmaySahoo.jpeg",
  },
  {
    name: "Satyaprakash",
    role: "Videographer",
    image: "/satyaprakash.jpeg",
  },
  {
    name: "Subhashree",
    role: "Content Creator",
    image: "subhashree.jpeg",
  },
  {
    name: "Chinmay",
    role: "Video Editer",
    image: "/chinmay.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 text-gray-900 px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-24 md:py-32">
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Team
        </h2>

        <p className="mt-3 sm:mt-4 text-gray-600">Meet Our Experts</p>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-700 leading-relaxed px-4">
          At Sociea, our strength liesin our people.We are a passionate team of
          creative strategists, designers, content creators, and marketing
          experts who believe in turning ideas into impact. Each member
          bringsunique skills and fresh perspectives,working together to
          craftpowerful campaigns that help brandsgrow.
        </p>
      </motion.div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-12 sm:my-16 md:my-24" />

      {/* TEAM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-14 md:gap-16 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] mb-4 sm:mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>

            <p className="text-gray-600 mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
