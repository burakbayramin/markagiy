import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { SplashScreen } from "@/components/splash-screen";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollFadeLogo } from "@/components/scroll-fade-logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarkaGiy",
  description: "Premium streetwear and comfortable hoodies",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        <SplashScreen />
        {/* ScrollFadeLogo will be client-side rendered and handle the fade effect */}
        <ScrollFadeLogo />
        {children}
        <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
          <div className="container mx-auto text-center">
            <p>&copy; MarkaGiy. Her hakkı saklıdır.</p>
          </div>
        </footer>
        <CustomCursor />
      </body>
    </html>
  );
}
