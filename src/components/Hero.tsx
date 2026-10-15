import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const images = [
    "/banner/banner1.jpeg",
    "/banner/banner2.jpeg",
    "/banner/banner3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden text-ivory">
      {/* Background Slideshow  Ken Burns zoom */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <ImageWithFallback
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/85" />

      {/* Decorative glow orbs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-forest/25 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-gold-light/30 bg-ivory/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <Leaf size={14} className="text-gold-light" />
          <span className="eyebrow">Experience Authentic Sri Lankan Village Life</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mb-6 text-4xl leading-tight md:text-6xl"
        >
          Experience the Sri Lanka <br />
          you came to discover.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12 max-w-2xl text-lg text-ivory/80 md:text-xl"
        >
          Stay close to village life through home-style hospitality, garden ingredients,
          traditional cooking, local culture and nature at <span className="text-gold-light">Sigma House</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a href="https://booking-pearl-phi.vercel.app/" target="_blank" rel="noreferrer" className="btn-terracotta">
            Plan Your Stay
            <ArrowRight size={20} />
          </a>
          <Link to="/experiences" className="btn-outline-ivory">
            Explore Experiences
          </Link>
        </motion.div>
      </div>

      {/* Slide controls  prev / dash indicators / next */}
      <div className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-4 z-20">
        <button
          aria-label="Previous background"
          onClick={() => setCurrentIndex((i) => (i - 1 + images.length) % images.length)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-ivory/50 hover:text-ivory"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to background ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-gold-light" : "w-1.5 bg-ivory/35"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next background"
          onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-ivory/50 hover:text-ivory"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};
