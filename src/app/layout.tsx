import type { Metadata } from "next";
import { Poppins, DM_Mono, Inter } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-inter",
});

export const metadata: Metadata = {
  title: "In Your Pocket",
  description: "Your favourite guides in one place",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmMono.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
