import React from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export const AboutSummary = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Who We Are</h2>
            <div className="h-1 w-20 bg-emerald-500 mb-8 rounded-full"></div>
            <p className="text-stone-600 mb-6 text-lg leading-relaxed">
              We are a family-run homestay and local experience provider in Sri Lanka, created for travelers who want more than just a place to sleep. Our home is not a hotel — it’s a place where travelers become part of the family.
            </p>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed">
              We have welcomed guests from over 25 countries, sharing simple living, local culture, and genuine hospitality.
            </p>
            <Link to="/about" className="inline-flex text-emerald-600 font-semibold items-center gap-2 hover:text-emerald-700 transition-colors group">
              Read More About Us 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square">
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1509763988163-d54b5f5d5b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYW4lMjBmYW1pbHklMjB2aWxsYWdlJTIwc21pbGluZ3xlbnwxfHx8fDE3Njk1MzY0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sri Lankan Family"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
