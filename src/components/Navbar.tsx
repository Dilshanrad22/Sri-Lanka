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
    { name: "About", href: "/about" },
    { name: "Rooms", href: "/rooms" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  // For this Salumika-inspired design, we will use a consistent dark theme navbar that 
  // becomes glassmorphic when scrolled.
  const isOnSubPage = location.pathname !== "/";
  // If we're on a subpage that doesn't have a dark hero, we might need dark text, 
  // but to match Salumika exactly, the navbar itself is always dark/glassmorphic on scroll.
  // We'll use a deep dark background when scrolled.

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOnSubPage
            ? "bg-stone-950/85 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-center">
            
            {/* 1. Logo (Left) */}
            <Link to="/" className="flex items-center gap-3 relative z-50 group">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-stone-950 font-black text-xl leading-none">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                Sigma<span className="text-emerald-400 font-medium">House</span>
              </span>
            </Link>

            {/* 2. Desktop Navigation (Center) */}
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? "text-emerald-400" 
                        : "text-stone-300 hover:text-emerald-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* 3. CTA Button (Right) */}
            <div className="hidden lg:block relative z-50">
              <Link 
                to="/booking" 
                className="px-7 py-2.5 rounded-full font-bold text-sm bg-emerald-500 text-stone-950 hover:bg-white hover:text-stone-900 transition-colors duration-300 shadow-lg shadow-emerald-500/20"
              >
                Book Now
              </Link>
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
            className="fixed inset-0 z-40 bg-stone-950 flex flex-col pt-24 px-6 pb-6 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-3xl font-bold transition-colors ${
                      isActive ? "text-emerald-400" : "text-stone-300 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-auto pt-8">
              <Link 
                to="/booking" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-emerald-500 hover:bg-white text-stone-950 rounded-full font-bold text-lg transition-colors"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
