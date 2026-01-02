import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/sociea.webp"
            alt="sociea"
            width={40}
            height={40}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
          />
          <span className="text-lg sm:text-xl font-semibold">SOCIEA</span>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-12 h-px w-full bg-white/30" />

        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
          {/* Contact */}
          <div className="space-y-2 text-white/80 flex flex-col">
            <div className="flex flex-row items-center">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+91 6371130556" className="text-sm sm:text-base">
                +91 6371130556
              </a>
            </div>
            <div className="flex flex-row items-center">
              <Mail className="mr-2 h-4 w-4" />
              <a
                href="mail:sociea.co@gmail.com"
                className="text-sm sm:text-base"
              >
                sociea.co@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2 text-white/80 md:border-x md:border-white/30 md:px-6 lg:px-12 flex flex-row items-start space-x-2">
            <MapPin className="h-4 w-4 mt-1" />
            <p className="text-sm sm:text-base">Bhubaneswar, Odisha</p>
          </div>

          {/* Links */}
          <div className="space-y-3 text-white/80">
            <Link
              href="#"
              className="block hover:text-[#1368D6] transition text-sm sm:text-base"
            >
              Privacy policy
            </Link>
            <Link
              href="#"
              className="block hover:text-[#1368D6] transition text-sm sm:text-base"
            >
              Accessibility statement
            </Link>

            <p className="pt-4 sm:pt-6 text-xs sm:text-sm text-white/60">
              © 2025 by Sociea.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
