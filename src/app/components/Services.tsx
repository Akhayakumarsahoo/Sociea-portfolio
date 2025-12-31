"use client";

import { motion } from "framer-motion";

const serviceVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.8,
    },
  }),
};

export default function Services() {
  return (
    <section className="bg-white text-gray-900 py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-10">
            Services
          </h2>

          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
            What We Offer
          </p>

          <p className="text-base sm:text-lg text-gray-700">
            Explore our range of services tailored to meet your social media
            needs
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-12 sm:my-16 md:my-20 h-px bg-gray-300" />

        {/* Services List */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {/* Service 1 */}
          <motion.div
            custom={0}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ease: [0.42, 0, 0.58, 1] as const }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center"
          >
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Social Media Management
              </p>
              <h3 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-6">
                Strategic Planning
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                Our social media management services include content creation,
                community engagement, analytics, and strategy development. We
                work closely with you to build a strong online presence and
                drive engagement with your target audience.
              </p>
            </div>

            <AnimatedDots />
          </motion.div>

          <Divider />

          {/* Service 2 */}
          <motion.div
            custom={1}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center"
          >
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Digital Marketing
              </p>
              <h3 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-6">
                Comprehensive Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                From SEO to PPC, our digital marketing solutions are designed to
                boost your brand visibility, increase website traffic, and
                generate leads. Let us optimize your online presence and
                maximize your digital marketing efforts.
              </p>
            </div>

            <AnimatedDots />
          </motion.div>

          <Divider />

          {/* Service 3 */}
          <motion.div
            custom={2}
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center"
          >
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Branding
              </p>
              <h3 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-6">
                Brand Development
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-xl">
                Our branding services focus on creating a unique identity for
                your brand, including logo design, brand messaging, and visual
                elements. We help you establish a strong brand presence that
                resonates with your target audience.
              </p>
            </div>

            <AnimatedDots />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function Divider() {
  return <div className="h-px bg-gray-300" />;
}

function AnimatedDots() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gray-400 flex items-center justify-center ml-auto"
    >
      <div className="w-2 h-2 bg-[#1368D6] rounded-full animate-ping" />
    </motion.div>
  );
}
