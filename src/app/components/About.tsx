"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 md:mb-20"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="relative w-full h-[300px] sm:h-[360px] md:h-[420px]"
          >
            <Image
              src="/image-2.png"
              alt="About Storriz"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          >
            <p className="uppercase tracking-widest text-xl sm:text-2xl md:text-3xl text-gray-600 mb-4 sm:mb-6">
              Our Mission
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-xl">
              Welcome to Sociea, Odisha's leading 360&deg; marketing agency
              dedicated to transforming brands into powerful digital identities.
              We believe marketing isn't just about promotion, it's about
              creating meaningful connections, building trust, and driving real
              growth.
            </p>

            <Link href="/about">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#1368D6] text-white font-medium hover:bg-[#0F5AB8] transition cursor-pointer text-sm sm:text-base"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
