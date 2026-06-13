"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/navLinks";
import { trackOutboundClick } from "@/lib/analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape and trap focus
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5" aria-label="Global Coco Exports — Home">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
            <Image src="/images/logo-icon.svg" alt="" width={32} height={32} className="w-full h-full" />
          </div>
          <span
            className={`text-lg font-bold tracking-wide transition-colors duration-500 ${
              scrolled ? "text-[#1B4332]" : "text-white"
            }`}
          >
            GLOBAL COCO <span className="text-[#D4A017]">EXPORTS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#D4A017] ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* Product detail dropdown — keyboard accessible */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onKeyDown={(e) => e.key === "Escape" && setDropdownOpen(false)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#D4A017] ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Products ▾
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2" role="menu" aria-label="Product categories">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  {/* Whole Coconut category */}
                  <div className="px-5 pt-2 pb-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4A017] font-semibold">Whole Coconut</span>
                  </div>
                  <a
                    href="/products/fresh-brown-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Fresh Brown Coconut
                  </a>
                  <a
                    href="/products/pollachi-fresh-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Pollachi Fresh Coconut
                  </a>
                  <a
                    href="/products/high-grade-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    High Grade Coconut
                  </a>
                  {/* Processed category */}
                  <div className="border-t border-gray-100 mt-1 pt-2 px-5 pb-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4A017] font-semibold">Processed</span>
                  </div>
                  <a
                    href="/products/copra-coconut"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Copra Coconut
                  </a>
                  <a
                    href="/products/coco-peat"
                    className="block px-5 py-2 text-sm text-gray-700 hover:text-[#1B4332] hover:bg-[#1B4332]/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1B4332]"
                    role="menuitem"
                  >
                    Coco Peat
                  </a>
                  <div className="border-t border-gray-100 mt-1 pt-2 px-5 pb-2">
                    <a
                      href="/#products"
                      className="block text-xs font-semibold text-[#1B4332] hover:text-[#D4A017] transition-colors text-center"
                      role="menuitem"
                    >
                      View All Products →
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          onClick={() => trackOutboundClick({ type: "request_quote", label: "Navbar Request Quote" })}
          className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-[#1B4332] text-white hover:bg-[#143A28]"
              : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/30"
          }`}
        >
          Request Quote
        </a>

        {/* Mobile Hamburger */}
        <button
          ref={hamburgerRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-3 min-w-[44px] min-h-[44px] items-center justify-center transition-colors ${
            scrolled ? "text-[#1B4332]" : "text-white"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden rounded-b-2xl absolute w-full left-0"
          >
            <div className="px-5 py-4 flex flex-col gap-0.5 max-h-[85vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isProducts = link.label === "Products";
                
                if (isProducts) {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="flex items-center justify-between w-full text-gray-700 font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-all min-h-[48px]"
                        aria-expanded={mobileProductsOpen}
                      >
                        <span className="text-[15px]">{link.label}</span>
                        <motion.span
                          animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-[#D4A017] text-xs"
                        >
                          {mobileProductsOpen ? "▾" : "▸"}
                        </motion.span>
                      </button>
                      
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden bg-gray-50/50 rounded-lg mx-1 my-1"
                          >
                            <div className="pl-6 pr-4 py-2 flex flex-col gap-0.5 border-l-2 border-[#D4A017]/30 ml-2">
                              {[
                                { name: "Fresh Brown Coconut", href: "/products/fresh-brown-coconut" },
                                { name: "Pollachi Fresh Coconut", href: "/products/pollachi-fresh-coconut" },
                                { name: "High Grade Coconut", href: "/products/high-grade-coconut" },
                                { name: "Copra Coconut", href: "/products/copra-coconut" },
                                { name: "Coco Peat", href: "/products/coco-peat" },
                              ].map((product) => (
                                <a
                                  key={product.name}
                                  href={product.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-[13px] text-gray-600 font-medium py-2 hover:text-[#1B4332] transition-colors flex items-center"
                                >
                                  {product.name}
                                </a>
                              ))}
                              <a
                                href="/#products"
                                onClick={() => setMobileOpen(false)}
                                className="text-[11px] font-bold text-[#1B4332] pt-2 pb-1 hover:text-[#D4A017] transition-colors"
                              >
                                View All Products →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-700 font-semibold py-2.5 px-3 rounded-lg hover:bg-gray-50 hover:text-[#1B4332] transition-all min-h-[48px] flex items-center text-[15px]"
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="/#contact"
                onClick={() => {
                  setMobileOpen(false);
                  trackOutboundClick({ type: "request_quote", label: "Mobile Navbar Request Quote" });
                }}
                className="mt-3 bg-[#1B4332] text-white text-center px-6 py-3 rounded-xl font-bold hover:bg-[#143A28] transition-all shadow-md active:scale-[0.98] flex items-center justify-center text-sm"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
