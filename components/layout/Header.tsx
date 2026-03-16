"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";

export default function Header() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomepage = pathname === "/";
  const isTransparent = isHomepage && scrollY < 60;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isTransparent
            ? "bg-transparent text-white"
            : "bg-brand-dark/95 backdrop-blur-md text-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/logo-solutech.png"
              alt="Solutech Asia"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white border-b border-brand-accent pb-0.5"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="border border-brand-accent/50 text-brand-accent text-xs px-3 py-1 rounded-full hover:bg-brand-accent/10 transition-colors">
              Industries We Help
            </button>
            <Link
              href={WHATSAPP_URL}
              className="bg-brand-accent text-black text-sm font-semibold px-5 py-2 rounded-sm hover:bg-brand-accent/90 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark z-50 flex flex-col pt-20 px-8 lg:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl font-bold border-b border-white/10 pb-4"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8 space-y-3">
              <button className="w-full border border-brand-accent/50 text-brand-accent text-sm px-4 py-3 rounded-sm hover:bg-brand-accent/10 transition-colors">
                Industries We Help
              </button>
              <Link
                href={WHATSAPP_URL}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-brand-accent text-black text-sm font-semibold px-4 py-3 rounded-sm hover:bg-brand-accent/90 transition-colors text-center"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
