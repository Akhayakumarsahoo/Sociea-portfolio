"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "mtvs.news", logo: "/next.svg" },
  { name: "Skripton", logo: "/next.svg" },
  { name: "Energator", logo: "/next.svg" },
  { name: "Gazeit", logo: "/next.svg" },
  { name: "Travelo", logo: "/next.svg" },
  { name: "GLMP.IT", logo: "/next.svg" },
];

export default function OurClients() {
  return (
    <section className="relative w-full bg-gradient-to-r from-gray-900 to-[#1368D6] py-16 sm:py-20 md:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold"
        >
          Our Clients
        </motion.h2>

        {/* Divider */}
        <div className="my-6 sm:my-8 flex items-center justify-center gap-3 sm:gap-4">
          <span className="h-px w-20 sm:w-32 bg-white/40" />
          <span className="text-xs sm:text-sm uppercase tracking-widest text-white/70">
            Trusted Partners
          </span>
          <span className="h-px w-20 sm:w-32 bg-white/40" />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-center text-white/80 px-4"
        >
          We are proud to have collaborated with a diverse range of clients,
          from startups to established brands. Our client-centric approach and
          results-driven strategies have led to successful partnerships and
          impactful outcomes
        </motion.p>

        {/* Logos Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={80}
                className="opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
