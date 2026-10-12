"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Our Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F5EF]/95 backdrop-blur-md shadow-sm border-b border-[#E7D8C5]/60 py-3.5"
          : "bg-transparent py-5 lg:py-6"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#hero"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78660] rounded-sm"
            aria-label="Farooq and Sons Homepage"
          >
            <span className="font-serif text-xl sm:text-2xl lg:text-[26px] tracking-[0.18em] font-normal text-[#211914] group-hover:text-[#A78660] transition-colors duration-300">
              FAROOQ & SONS
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A78660] font-medium -mt-0.5">
              Bespoke Woodwork & Joinery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm uppercase tracking-[0.16em] font-medium text-[#292725]/85 hover:text-[#A78660] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A78660] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 bg-[#30231D] text-[#F8F5EF] hover:bg-[#A78660] transition-all duration-300 rounded-sm shadow-sm hover:shadow group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78660]"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#211914] hover:text-[#A78660] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78660] rounded-sm transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5EF] border-b border-[#E7D8C5] shadow-xl px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.18em] font-medium text-[#211914] hover:text-[#A78660] py-2 border-b border-[#E7D8C5]/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] font-medium px-5 py-3 bg-[#30231D] text-[#F8F5EF] hover:bg-[#A78660] transition-colors rounded-sm text-center"
              >
                Request a Quote
              </a>
              <p className="text-[11px] text-center text-[#292725]/60 flex items-center justify-center gap-1.5">
                <Phone className="w-3 h-3 text-[#A78660]" /> Handcrafted with bespoke precision
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
