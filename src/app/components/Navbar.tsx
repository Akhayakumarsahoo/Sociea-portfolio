"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { href: "/about", label: "About Us" },
    { href: "/packages", label: "Our Packages" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <Image
              src="/sociea.webp"
              alt="sociea"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-gray-900 text-xl sm:text-2xl font-extrabold tracking-wide">
              SOCEIA
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-gray-900 text-sm tracking-wide">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#1368D6] transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-900 hover:text-[#1368D6] transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Side Menu */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={closeMenu}
                  >
                    <Image
                      src="/sociea.webp"
                      alt="sociea"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-gray-900 text-lg font-extrabold tracking-wide">
                      SOCEIA
                    </span>
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-gray-900 hover:text-[#1368D6] transition"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block py-3 text-gray-900 hover:text-[#1368D6] transition text-base font-medium border-b border-gray-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
