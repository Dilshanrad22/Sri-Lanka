import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

const itineraries = [
  {
    length: "2 Days / 1 Night",
    desc: "Arrival and welcome, a village or garden experience, a cooking or cinnamon activity, and one nature or cultural outing.",
  },
  {
    length: "3 Days / 2 Nights",
    desc: "A relaxed village stay with cooking, garden and spice learning, a tea or nature outing, and time to enjoy the stay itself.",
  },
  {
    length: "5 Days / 4 Nights",
    desc: "Village-based experiences plus a carefully planned extension toward the south coast, where travel time allows.",
  },
  {
    length: "7 Days / 6 Nights",
    desc: "A slower custom journey combining the village stay, food, nature, tea or cinnamon, culture, and selected onward stops.",
  },
];

export const LocalExperiences = () => {
  return (
    <section id="itineraries" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="eyebrow mb-4">Plan Ahead</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">Sample Itineraries</h2>
          <p className="text-ivory/60 max-w-2xl mx-auto text-sm">
            Sample concepts only — routes, partners and pricing are confirmed with you before booking.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {itineraries.map((item, index) => (
            <Reveal key={index} delay={index * 0.08} className="h-full">
              <div className="card-dark flex h-full flex-col text-center">
                <h3 className="font-display text-2xl text-gold-light mb-3">{item.length}</h3>
                <p className="text-ivory/60 text-sm leading-relaxed flex-1">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-gold-light font-semibold border-b-2 border-gold-light/60 pb-1 hover:text-gold hover:border-gold transition-all"
          >
            Customise This Trip <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
