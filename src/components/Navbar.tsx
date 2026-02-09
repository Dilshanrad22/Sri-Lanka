import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Activities", href: "/activities" },
    { name: "Experience", href: "/experience" },
    { name: "Accommodation", href: "/accommodation" },
  ];

  // Check if we're on a page other than home (for navbar styling)
  const isOnSubPage = location.pathname !== "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isOnSubPage ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold tracking-tight ${isScrolled || isOnSubPage ? "text-stone-800" : "text-white"}`}>
          🌿 Sri Lanka <span className="text-emerald-500">Volunteer</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-lg font-medium hover:text-emerald-500 transition-colors ${isScrolled || isOnSubPage ? "text-stone-700" : "text-white"
                } ${location.pathname === link.href ? "text-emerald-500" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || isOnSubPage ? "text-stone-800" : "text-white"} />
          ) : (
            <Menu className={isScrolled || isOnSubPage ? "text-stone-800" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-stone-800 font-medium hover:text-emerald-500 ${location.pathname === link.href ? "text-emerald-500" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
