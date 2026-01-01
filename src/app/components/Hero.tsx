"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-gray-900 flex items-center pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
            SCALE YOUR BRAND ON DIGITAL PLATFORM WITH{" "}
            <span className="text-[#1368D6] font-extrabold text-3xl sm:text-4xl md:text-5xl">
              SOCIEA
            </span>
          </h1>

          <p className="text-base sm:text-2xl text-gray-600 mt-4 sm:mt-6 max-w-md">
            your gateway to social media success
          </p>

          <Link href="contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#1368D6] text-white font-medium hover:bg-[#0F5AB8] transition cursor-pointer text-sm sm:text-base"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          <Image
            src="/image.png"
            alt="Team working"
            fill
            className="rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
