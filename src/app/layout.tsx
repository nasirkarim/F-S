import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FAROOQ & SONS | Bespoke Carpentry & Luxury Furniture Studio",
  description:
    "Handcrafted bespoke furniture, luxury kitchens, custom wardrobes, doors, cabinets, and architectural woodwork built to endure with timeless craftsmanship.",
  keywords: [
    "FAROOQ & SONS",
    "bespoke furniture",
    "custom carpentry",
    "luxury woodwork",
    "bespoke kitchens",
    "handcrafted cabinets",
    "architectural woodwork",
  ],
  authors: [{ name: "FAROOQ & SONS" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#211914] antialiased selection:bg-[#A78660] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
