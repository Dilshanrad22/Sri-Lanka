import React from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export const AboutSummary = () => {
  return (
    <section id="about" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <Reveal className="w-full md:w-1/2">
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">Hosted Locally, Lived Authentically</h2>
            <p className="text-ivory/70 mb-6 text-lg leading-relaxed">
              Sigma House is a locally hosted village stay and experience base, created for travelers who want more than just a place to sleep. Our home is not a hotel — it's a place where you connect with everyday Sri Lankan life through food, gardens, people and nature.
            </p>
            <p className="text-ivory/70 mb-8 text-lg leading-relaxed">
              We've welcomed guests from many countries, sharing simple village living, local culture and genuine hospitality — and every visit can be tailored to your time, interests and pace.
            </p>
            <Link to="/about" className="inline-flex text-gold-light font-semibold items-center gap-2 hover:text-gold transition-colors group">
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          {/* Image */}
          <Reveal delay={0.1} className="w-full md:w-1/2">
            <div className="grain-texture relative rounded-3xl overflow-hidden shadow-xl shadow-black/30 border border-ivory/10 aspect-video md:aspect-square">
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1509763988163-d54b5f5d5b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYW4lMjBmYW1pbHklMjB2aWxsYWdlJTIwc21pbGluZ3xlbnwxfHx8fDE3Njk1MzY0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sri Lankan Family"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
