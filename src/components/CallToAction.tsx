import React from "react";
import { Mail, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";

export const CallToAction = () => {
  return (
    <section id="contact" className="grain-texture bg-gradient-to-br from-terracotta via-terracotta-light to-gold py-20 text-ivory sm:py-28">
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Let's Plan Your Village Experience</h2>
          <p className="text-ivory/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Tell us your dates and interests  we'll help shape a more personal Sri Lankan village stay.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://booking-pearl-phi.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-charcoal text-ivory font-semibold text-lg shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-charcoal-light">
              <Calendar size={22} />
              Plan Your Stay
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-ivory/40 px-8 py-4 text-ivory font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-ivory/10">
              <Mail size={22} />
              Contact Hasitha
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
