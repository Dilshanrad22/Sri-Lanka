import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Stay", href: "/accommodation" },
    { name: "Experiences", href: "/experiences" },
    { name: "Packages", href: "/packages" },
    { name: "Our Story", href: "/about" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ];

  const isOnSubPage = location.pathname !== "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOnSubPage
            ? "bg-charcoal/90 backdrop-blur-md border-b border-ivory/10 py-4 shadow-lg"
            : "border-b border-transparent bg-gradient-to-b from-charcoal/70 via-charcoal/30 to-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-center">

            {/* 1. Logo (Left) */}
            <Link to="/" className="flex items-center gap-3 relative z-50 group">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 bg-white border-2 border-gold/60">
                <img src="/logo/sigma-house-logo.png" alt="Sigma House Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-xl text-ivory tracking-wide">
                Sigma<span className="text-gold-light">House</span>
              </span>
            </Link>

            {/* 2. Desktop Navigation (Center) */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative whitespace-nowrap py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isActive
                        ? "text-gold-light"
                        : "text-ivory/75 hover:text-ivory"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* 3. CTA Button (Right) */}
            <div className="hidden lg:block relative z-50">
              <a
                href="https://booking-pearl-phi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-gold px-6! py-2.5! text-sm"
              >
                Plan Your Stay
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col pt-24 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-display text-3xl transition-colors ${
                      isActive ? "text-gold-light" : "text-ivory/75 hover:text-ivory"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <a
                href="https://booking-pearl-phi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gold w-full"
              >
                Plan Your Stay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
