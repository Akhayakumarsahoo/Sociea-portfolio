import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const myFont = localFont({
  src: [
    { path: "./fonts/Helvetica.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Helvetica.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Helvetica-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-myfont",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sociea",
  description:
    "Odisha's leading 360° marketing agency transforming brands into strong digital identities. We create meaningful connections, build trust, and drive real growth beyond promotion.",
  icons: {
    icon: "/sociea.webp",
  },
  openGraph: {
    title: "Sociea",
    description:
      "Odisha's leading 360° marketing agency transforming brands into strong digital identities. We create meaningful connections, build trust, and drive real growth beyond promotion.",
    images: "/sociea.webp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.variable}  antialiased bg-white`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
