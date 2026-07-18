"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import GlassCard3D from "../components/ui/GlassCard3D";
import Button3D from "../components/ui/Button3D";

const plans = [
  {
    id: "basic",
    name: "Basic Growth",
    badge: "Essential Social Presence",
    popular: false,
    description:
      "Ideal for local businesses looking to establish a consistent, professional Instagram presence.",
    features: [
      "Instagram Management Only",
      "15 High-converting UGC reels/videos per month",
      "5 Custom Designed Feed Posts per month",
      "Strategic posting + SEO captions & hashtags",
      "Monthly growth report & analytics",
    ],
    notIncluded: [
      "YouTube & Facebook Management",
      "Paid Meta Ads Campaign",
      "Advanced Multi-Channel SEO",
    ],
    glow: "rgba(0, 113, 227, 0.12)",
  },
  {
    id: "standard",
    name: "Standard Scale",
    badge: "MOST POPULAR FOR SCALING",
    popular: true,
    description:
      "Designed for ambitious brands expanding across both Instagram & YouTube short-form video ecosystems.",
    features: [
      "Instagram + YouTube Management",
      "15 UGC reels / shorts / videos per month",
      "5 Custom Designed Feed Posts per month",
      "SEO-optimized captions, titles & hashtags",
      "Community engagement & comment responses",
      "Dedicated account manager",
    ],
    notIncluded: ["Facebook Cross-Posting", "Paid Meta & Google Ads Campaigns"],
    glow: "rgba(99, 102, 241, 0.2)",
  },
  {
    id: "premium",
    name: "360° Premium Dominance",
    badge: "FULL DIGITAL SUITE",
    popular: false,
    description:
      "Complete omnipresence marketing: Instagram, YouTube, Facebook, and targeted paid Meta Ads campaigns.",
    features: [
      "Instagram, YouTube & Facebook Management",
      "Meta Ads Campaign Setup & Management",
      "15 UGC reels / shorts / videos per month",
      "5 Custom Designed Feed Posts per platform",
      "Advanced SEO strategy + maximum algorithmic reach",
      "High-priority 24/7 dedicated agency support",
    ],
    notIncluded: [],
    glow: "rgba(236, 72, 153, 0.15)",
  },
];

export default function PackagesPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">(
    "monthly",
  );

  return (
    <main className="min-h-screen bg-[#fbfbfd] pt-32 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Growth Packages</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1d1d1f] tracking-tight">
            Flexible Plans Built For{" "}
            <span className="text-gradient-blue">Impact</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Choose the package that aligns with your growth targets. Every plan
            is engineered to amplify reach, build trust, and drive measurable
            ROI.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1.5 rounded-full bg-gray-200/80 border border-gray-300/80 flex items-center gap-2 shadow-inner">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly Retainer
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  billingCycle === "quarterly"
                    ? "bg-[#0071e3] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>Quarterly Partner</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black uppercase">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="relative flex"
            >
              <GlassCard3D
                glowColor={plan.glow}
                className={`w-full flex flex-col justify-between ${
                  plan.popular
                    ? "border-2 border-[#0071e3] ring-4 ring-blue-500/10 shadow-3xl"
                    : ""
                }`}
              >
                <div>
                  {/* Popular Floating Badge */}
                  {plan.popular ? (
                    <div className="absolute  -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#0071e3] to-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1 ">
                      <Zap className="w-3 h-3 fill-white" />
                      <span>{plan.badge}</span>
                    </div>
                  ) : (
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      {plan.badge}
                    </span>
                  )}

                  <div className={"" + (plan.popular ? "pt-8" : "pt-0")}>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#1d1d1f] tracking-tight">
                      {plan.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Action Button */}
                    <div className="pt-4 pb-6 border-b border-gray-100">
                      <Button3D
                        href="/contact"
                        variant={plan.popular ? "primary" : "glass"}
                        size="md"
                        fullWidth
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Choose {plan.name}
                      </Button3D>
                    </div>

                    {/* Features Included */}
                    <div className="pt-2">
                      <p className="text-xs font-extrabold uppercase text-gray-900 tracking-wider mb-3">
                        What&apos;s Included:
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm font-medium text-gray-800"
                          >
                            <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-emerald-600" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included */}
                    {plan.notIncluded.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-400 tracking-wider mb-2">
                          Not Included:
                        </p>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((item, nIdx) => (
                            <li
                              key={nIdx}
                              className="flex items-center gap-2.5 text-xs text-gray-400 opacity-80"
                            >
                              <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Guarantee Footer */}
                <div className="pt-6 mt-6 border-t border-gray-100 text-center">
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0071e3]" />
                    <span>Cancel or Upgrade Anytime</span>
                  </div>
                </div>
              </GlassCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
