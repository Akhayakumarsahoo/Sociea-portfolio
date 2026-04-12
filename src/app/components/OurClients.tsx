"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Bharat Masala", logo: "/Clients/bharatMasala.png" },
  { name: "Cheesecake Masters", logo: "/Clients/cheesecake_masters.svg" },
  { name: "Puffique", logo: "/Clients/Puffique Logo.jpg" },
  { name: "Nawab Biriyani", logo: "/Clients/nawabBiriyani.png" },
  { name: "Flash Now", logo: "/Clients/flash_now.png" },
  { name: "JNG Homes", logo: "/Clients/JNG_homes.jpg" },
  { name: "Kikai", logo: "/Clients/kikai.jpeg" },
   { name: "SIP & Score", logo: "/Clients/sip&Score.jpeg" },
  { name: "Pahadi", logo: "/Clients/pahadi.jpeg" },
  { name: "RK Studio", logo: "/Clients/RK_Studio.png" },
  { name: "Pickle Park", logo: "/Clients/pickle_park.jpeg" },
  { name: "La Pino'z Pizza", logo: "/Clients/la_Pinoz_pizza.jpeg" },
  { name: "Origanoz", logo: "/Clients/origanoz.png" },
  { name: "GP Constructions", logo: "/Clients/GP.jpg" },
  { name: "Barg N Furs", logo: "/Clients/barkNfurs.png" },
  { name: "36 China Town", logo: "/Clients/36ChinaTown.jpeg" },
  { name: "Shree Radha Groups", logo: "/Clients/shree_radha.jpg" },
  {
    name: "Next Era Green Energies",
    logo: "/Clients/nextEra.png",
  },
  { name: "DBC", logo: "/Clients/DBC.jpeg" },
  { name: "Apna Bazar", logo: "/Clients/" },
   { name: "Snak'd", logo: "/Clients/snackd.jpg" },
   { name: "trikaya", logo: "/Clients/trikaya.png" },
   { name: "balasore", logo: "/Clients/balasore.jpg" },
    { name: "carzone", logo: "/Clients/carzone.jpg" },
  // { name: "DJ Associiate", logo: "/Clients/djassociiates.jpeg" },
];

export default function OurClients() {
  return (
    <section className="relative w-full py-16 text-black">
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
          <span className="text-xs sm:text-sm uppercase tracking-widest text-black/70">
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
          className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-center text-black/80 px-4"
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
                width={100}
                height={50}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
