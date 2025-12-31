"use client";

import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";
import StrategySection from "../components/StrategySection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 pt-24 sm:pt-28">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Crafting Social Media <br /> Success
        </h1>

        <p className="mt-12 sm:mt-16 text-xs sm:text-sm uppercase tracking-widest text-gray-600">
          Our Digital Expertise
        </p>

        <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
          Welcome to Sociea, Odisha&apos;s leading 360° marketing agency
          dedicated to transforming brands into powerful digital identities. We
          believe marketing isn&apos;t just about promotion, it&apos;s about
          creating meaningful connections,building trust, and driving real
          growth.
        </p>
      </motion.section>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-12 sm:my-16 md:my-24" />

      {/* VALUES / INFO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To empower brands innovative 360° marketing strategies that drive
            real growth, boost visibility, and build lasting customer trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To become Odisha&apos;s most trusted and result-driven marketing
            agency, helping businesses grow and make a strong impact across
            India.
          </p>
        </motion.div>
      </section>
      <StrategySection />
      <TeamSection />
    </main>
  );
}
