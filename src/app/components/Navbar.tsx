"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-gray-900 text-sm tracking-wide">
          <li>
            <Link href="/about" className="hover:text-[#1368D6] transition">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/packages" className="hover:text-[#1368D6] transition">
              Our Packages
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#1368D6] transition">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
