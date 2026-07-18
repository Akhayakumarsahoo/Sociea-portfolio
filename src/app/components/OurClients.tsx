"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const clients = [
  { name: "Bharat Masala", logo: "/Clients/bharatMasala.png" },
  { name: "Cheesecake Masters", logo: "/Clients/cheesecake_masters.svg" },
  { name: "Puffique", logo: "/Clients/Puffique Logo.jpg" },
  { name: "Nawab Biriyani", logo: "/Clients/nawabBiriyani.png" },
  { name: "Flash Now", logo: "/Clients/flash_now.png" },
  { name: "JNG Homes", logo: "/Clients/JNG_Homes.jpg" },
  { name: "Kikai", logo: "/Clients/kikai.jpeg" },
  { name: "SIP & Score", logo: "/Clients/sip&Score.jpeg" },
  { name: "Pahadi", logo: "/Clients/pahadi.jpeg" },
  { name: "RK Studio", logo: "/Clients/RK_Studio.png" },
  { name: "Pickle Park", logo: "/Clients/pickle_park.jpeg" },
  { name: "La Pino'z Pizza", logo: "/Clients/La_Pinoz_Pizza.jpeg" },
  { name: "Origanoz", logo: "/Clients/origanoz.png" },
  { name: "GP Constructions", logo: "/Clients/GP.jpg" },
  { name: "Barg N Furs", logo: "/Clients/barkNfurs.png" },
  { name: "36 China Town", logo: "/Clients/36ChinaTown.jpeg" },
  { name: "Shree Radha Groups", logo: "/Clients/shree_radha.jpg" },
  { name: "Next Era Green Energies", logo: "/Clients/nextEra.png" },
  { name: "DBC", logo: "/Clients/DBC.jpeg" },
  { name: "Apna Bazar", logo: "/Clients/AB.jpg" },
  { name: "Snak'd", logo: "/Clients/snackd.jpg" },
  { name: "trikaya", logo: "/Clients/trikaya.png" },
  { name: "balasore", logo: "/Clients/balasore.jpg" },
  { name: "carzone", logo: "/Clients/carzone.jpg" },
];

export default function OurClients() {
  return (
    <section className="py-20 bg-[#f4f4f7] relative overflow-hidden border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
          <span>Trusted Industry Leaders</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1d1f] tracking-tight">
          Brands Powering Growth With <span className="text-gradient-blue">Sociea</span>
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative w-full flex overflow-hidden py-4 mask-gradient">
        {/* Left & Right Glass Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#f4f4f7] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#f4f4f7] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex items-center gap-6 shrink-0"
        >
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="w-36 h-24 sm:w-44 sm:h-28 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center p-4 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
