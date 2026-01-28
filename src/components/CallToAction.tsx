import React from "react";
import { Mail, Calendar } from "lucide-react";

export const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Come Stay With Us</h2>
        <p className="text-stone-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Whether you travel solo, with friends, or family, we welcome you to experience real Sri Lanka.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-emerald-500/20 text-lg">
            <Mail size={22} />
            Contact Us
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-stone-600 hover:border-white hover:bg-white/5 text-white font-bold rounded-full transition-all flex items-center justify-center gap-3 text-lg">
            <Calendar size={22} />
            Plan Your Stay
          </button>
        </div>
      </div>
    </section>
  );
};
