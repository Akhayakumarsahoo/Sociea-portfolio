"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Button3D from "./ui/Button3D";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: "/about", label: "About Us" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300">
        <div
          className={`
            max-w-6xl mx-auto rounded-3xl transition-all duration-300
            ${
              scrolled
                ? "bg-white/80 backdrop-blur-2xl border border-white/70 shadow-2xl shadow-black/10 py-2.5 px-6 my-2"
                : "bg-white/60 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/5 py-3.5 px-6 my-3"
            }
          `}
        >
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              onClick={closeMenu}
            >
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 border border-white/80">
                <Image
                  src="/sociea.webp"
                  alt="Sociea Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 text-lg sm:text-xl font-extrabold tracking-tight group-hover:text-[#0071e3] transition-colors">
                  SOCIEA
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase -mt-1">
                  Digital Agency
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100/60 p-1.5 rounded-full border border-gray-200/50">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-full hover:bg-white transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop 3D CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button3D
                href="/packages"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </Button3D>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-800 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-2xl shadow-2xl z-50 md:hidden flex flex-col justify-between p-6 border-l border-gray-100"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/sociea.webp"
                      alt="Sociea Logo"
                      width={32}
                      height={32}
                      className="rounded-xl shadow"
                    />
                    <span className="font-extrabold text-lg tracking-tight">SOCIEA</span>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-600 hover:text-gray-900 rounded-xl bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <nav className="mt-8 space-y-3">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-base font-semibold text-gray-800 hover:text-[#0071e3] hover:bg-blue-50/50 rounded-2xl transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <Button3D
                  href="/packages"
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={closeMenu}
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Explore Packages
                </Button3D>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
