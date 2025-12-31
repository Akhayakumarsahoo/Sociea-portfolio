"use client";

import { motion } from "framer-motion";

export default function StrategySection() {
  return (
    <section className="bg-white text-gray-900 px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 border-b border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300">
        {/* LEFT BIG HEADING */}
        <div className="p-8 sm:p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-300 flex items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Our <br /> Strategy
          </motion.h2>
        </div>

        {/* TOP RIGHT BOX */}
        <div className="p-8 sm:p-10 md:p-16 border-b border-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl italic font-semibold">
              Influencer Marketing
            </h3>
            <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed">
              We partner with the right influencers to build authentic brand
              trust, expand your audience base, and create a strong market
              presence.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="p-8 sm:p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl italic font-semibold">
              Trending Content
            </h3>
            <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed">
              We craft creative and trend-driven content that follows the latest
              market trends and helps your brand stay ahead of the competition.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM RIGHT SIDE SPLIT */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* HIGH SEO */}
          <div className="p-8 sm:p-10 md:p-16 border-b md:border-b-0 md:border-r border-gray-300">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl italic font-semibold">
                High SEO Posting
              </h3>
              <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                We implement powerful SEO strategies to help your brand rank
                higher, increase organic traffic, and build strong online
                authority.
              </p>
            </motion.div>
          </div>

          {/* DAILY REELS */}
          <div className="p-8 sm:p-10 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl sm:text-2xl italic font-semibold">
                Daily Basic Reels
              </h3>
              <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed">
                We consistently create high-quality, engaging reels to grab
                attention, boost your brand visibility, and build audience
                connection.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
