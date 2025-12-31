"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

export default function SuccessStories() {
  return (
    <section className="bg-gray-50 text-gray-900 py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Success Stories
          </h2>

          <p className="text-base sm:text-lg text-gray-700">
            Discover how we've transformed our clients' online presence with
            impactful social media strategies
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-12 sm:my-16 md:my-20 h-px bg-gray-300" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 sm:gap-y-24 md:gap-y-32 gap-x-12 sm:gap-x-16 md:gap-x-20">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <CircleImage src="/image-3.png" />
            <h3 className="text-xl sm:text-2xl font-medium mt-6 sm:mt-8">
              Brand Transformation
            </h3>
            <p className="text-gray-600 mt-2">Apparel Company</p>

            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <p className="text-gray-600 text-center sm:text-left">
                Boosting <br /> Engagement by
              </p>
              <CircleStat value="150%" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <CircleImage src="/image-4.png" />
            <h3 className="text-xl sm:text-2xl font-medium mt-6 sm:mt-8">
              Viral Campaign
            </h3>
            <p className="text-gray-600 mt-2">Beauty Firm</p>

            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <p className="text-gray-600 text-center sm:text-left">
                Impressions <br /> in a Week
              </p>
              <CircleStat value="$1MM" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <CircleImage src="/image-5.png" />
            <h3 className="text-xl sm:text-2xl font-medium mt-6 sm:mt-8">
              Rebranding Success
            </h3>
            <p className="text-gray-600 mt-2">Culinary Service</p>

            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <p className="text-gray-600 text-center sm:text-left">
                Increased <br /> Followers by
              </p>
              <CircleStat value="300%" />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <CircleImage src="/image-6.png" />
            <h3 className="text-xl sm:text-2xl font-medium mt-6 sm:mt-8">
              Community Building
            </h3>
            <p className="text-gray-600 mt-2">Pet Shop</p>

            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <p className="text-gray-600 text-center sm:text-left">
                Growth in User <br /> Interaction
              </p>
              <CircleStat value="200%" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function CircleImage({ src }: { src: string }) {
  return (
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden">
      <Image src={src} alt="Success story" fill className="object-cover" />
    </div>
  );
}

function CircleStat({ value }: { value: string }) {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#1368D6] flex items-center justify-center bg-white">
      <span className="text-xl sm:text-2xl font-semibold text-gray-900">
        {value}
      </span>
    </div>
  );
}
