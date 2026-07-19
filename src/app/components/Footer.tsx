"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Facebook, ArrowUpRight, Mail, Phone, MapPin, Send } from "lucide-react";
import Button3D from "./ui/Button3D";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/thesociea", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Social Media Management",
  "Digital Marketing & SEO",
  "Brand Identity & Design",
  "Content Production",
  "Performance Ads",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0c] text-gray-300 pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Top Ambient Glow Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20 relative border border-white/20">
                <Image
                  src="/sociea.webp"
                  alt="Sociea Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                SOCIEA
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Odisha&apos;s leading 360° digital marketing agency transforming brands into dominant online identities through visual strategy and data-driven execution.
            </p>

            {/* Social Media 3D Pills */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-2xl bg-white/5 hover:bg-blue-600/20 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all shadow-md"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#0071e3]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service} className="hover:text-gray-200 transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              Stay Connected
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe to get exclusive digital marketing strategies and growth updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                />
              </div>
              <Button3D
                type="submit"
                variant="primary"
                size="sm"
                fullWidth
                icon={<Send className="w-3.5 h-3.5" />}
              >
                Subscribe
              </Button3D>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Sociea Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gray-400 transition">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
