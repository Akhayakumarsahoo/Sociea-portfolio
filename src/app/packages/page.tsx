"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "₹18,000 / month",
    highlight: false,
    features: [
      "Instagram Management Only",
      "20 UGC reels/videos per month",
      "10 Designed Feed Posts per month",
      "Strategic posting + SEO captions & hashtags",
    ],
    notIncluded: [
      "YouTube & Facebook Management",
      " Meta Ads Campaign",
      "Advanced SEO Strategy",
    ],
  },
  {
    name: "Standard",
    price: "₹26,000 / month",
    highlight: true,
    features: [
      "Instagram + YouTube Management",
      "20 UGC reels/videos/shorts per month",
      "10 Designed Feed Posts per month",
      "SEO-optimized captions, titles & hashtags",
    ],
    notIncluded: [
      "Facebook Management",
      "Meta Ads Campaign",
      "Advanced SEO Strategy Level 2",
    ],
  },
  {
    name: "Premium",
    price: "₹32,000 / month",
    highlight: false,
    features: [
      "Instagram, YouTube, Facebook & Meta Ads Campaign",
      "20 UGC reels/videos/shorts per month",
      "10 Designed Feed Posts per platform",
      "Advanced SEO strategy + maximum reach",
    ],
    notIncluded: [],
  },
];

export default function PackagesPage() {
  return (
    <section className="bg-white text-gray-900 min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Our Packages
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Choose the plan that fits your business goals. Every package is
          designed to help your brand grow, engage, and dominate social media.
        </p>
      </motion.div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-2xl border p-8 ${
              plan.highlight
                ? "border-[#1368D6] shadow-[0_0_25px_rgba(19,104,214,0.3)] bg-gray-50"
                : "border-gray-300"
            }`}
          >
            <h2 className="text-2xl font-bold">{plan.name}</h2>

            <p className="text-[#1368D6] text-xl font-semibold mt-2">
              {plan.price}
            </p>

            <Link href="/contact">
              <button className="mt-8 w-full py-3 rounded-full bg-[#1368D6] hover:bg-[#0F5AB8] transition font-medium text-white cursor-pointer">
                Choose Plan
              </button>
            </Link>
            {/* Included Features */}
            <ul className="mt-6 space-y-3 text-gray-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-green-500">✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Not Included Features */}
            {plan.notIncluded.length > 0 && (
              <>
                <div className="h-px bg-gray-300 my-6" />

                <p className="text-sm font-semibold text-gray-500">
                  Not Included in this plan:
                </p>

                <ul className="mt-3 space-y-2 text-gray-500">
                  {plan.notIncluded.map((item) => (
                    <li key={item} className="flex gap-2 opacity-70">
                      <span className="text-red-500">✖</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
