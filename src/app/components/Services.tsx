"use client";

import { motion } from "framer-motion";
import { Sparkles, Share2, TrendingUp, Palette, Search, ArrowRight, Check } from "lucide-react";
import GlassCard3D from "./ui/GlassCard3D";
import Button3D from "./ui/Button3D";

const servicesList = [
  {
    icon: Share2,
    badge: "01 / Core Service",
    title: "Social Media Management",
    subtitle: "Strategic Organic & Community Growth",
    description:
      "End-to-end management of Instagram, Facebook, LinkedIn, & YouTube. We design content calendars, interact with your audience, and maintain a high-converting digital presence.",
    features: [
      "Custom 3D post & reel designs",
      "Daily engagement & comment management",
      "Monthly performance analytics & reports",
    ],
    glow: "rgba(0, 113, 227, 0.15)",
  },
  {
    icon: TrendingUp,
    badge: "02 / Performance",
    title: "Digital Marketing & Ads",
    subtitle: "High-ROAS Paid Campaigns",
    description:
      "Maximize sales with laser-targeted Meta Ads, Google PPC, and YouTube Video ads. We optimize your ad spend to yield the highest possible return on investment.",
    features: [
      "Precision audience targeting & retargeting",
      "A/B copy & visual testing",
      "Conversion tracking & funnels",
    ],
    glow: "rgba(99, 102, 241, 0.15)",
  },
  {
    icon: Palette,
    badge: "03 / Brand Identity",
    title: "3D Branding & Creative Studio",
    subtitle: "Apple-Inspired Premium Aesthetics",
    description:
      "Elevate your brand perception with custom 3D logos, sleek visual identities, typography guidelines, and luxury promotional banners.",
    features: [
      "3D logo rendering & motion graphics",
      "Brand voice & design system",
      "High-resolution promotional assets",
    ],
    glow: "rgba(236, 72, 153, 0.15)",
  },
  {
    icon: Search,
    badge: "04 / Growth Hacking",
    title: "SEO & Content Production",
    subtitle: "Search Authority & Viral Content",
    description:
      "Dominate local & global search engine rankings while capturing attention with trending short-form video content tailored for TikTok, Reels, & Shorts.",
    features: [
      "On-page & technical SEO optimization",
      "Viral reel scripts & professional editing",
      "Google Business Profile optimization",
    ],
    glow: "rgba(16, 185, 129, 0.15)",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#f4f4f7] relative overflow-hidden">
      {/* Top Gradient Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Our Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">
            Comprehensive <span className="text-gradient-blue">360° Digital Solutions</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Tailored digital services engineered to give your brand an unfair advantage in online markets.
          </p>
        </motion.div>

        {/* 3D Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard3D
                key={service.title}
                glowColor={service.glow}
                className="flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#0071e3]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#1d1d1f] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0071e3] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2 border-t border-gray-100">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#0071e3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-8">
                  <Button3D
                    href="/packages"
                    variant="glass"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4 text-[#0071e3]" />}
                  >
                    View Packages For {service.title}
                  </Button3D>
                </div>
              </GlassCard3D>
            );
          })}
        </div>

        {/* Global CTA Banner */}
        <div className="mt-16 text-center">
          <Button3D
            href="/packages"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Explore All Custom Marketing Packages
          </Button3D>
        </div>

      </div>
    </section>
  );
}
