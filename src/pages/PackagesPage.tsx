import React from "react";
import { CalendarDays, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { Reveal } from "../components/Reveal";

const packages = [
  {
    length: "2 Days / 1 Night",
    concept:
      "Arrival and welcome, a village or garden experience, a cooking or cinnamon activity, a local meal, and one nature or cultural outing depending on travel time.",
  },
  {
    length: "3 Days / 2 Nights",
    concept:
      "A relaxed village stay with cooking, garden and spice learning, a tea or nature outing, and time to enjoy the accommodation.",
  },
  {
    length: "5 Days / 4 Nights",
    concept:
      "Village-based experiences plus a carefully planned extension toward the south coast, if location and transfers make sense.",
  },
  {
    length: "7 Days / 6 Nights",
    concept:
      "A slower custom journey combining village stay, food, nature, tea or cinnamon, cultural stops and selected onward destinations.",
  },
];

export const PackagesPage = () => {
  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="text-center mb-12 max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Plan Ahead</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">Packages & Itineraries</h1>
          <p className="text-lg text-ivory/60">
            Flexible plans combining a village stay with cooking, nature, tea, cinnamon and culture.
            These are sample concepts, not final itineraries  day-by-day details, travel time and pricing
            are confirmed with you before booking.
          </p>
        </Reveal>

        <Reveal className="bg-gold/10 border border-gold-light/30 text-ivory/70 rounded-2xl px-6 py-4 text-sm max-w-3xl mx-auto mb-16 text-center">
          Sample itinerary  routes, partners and prices to be confirmed before publishing or booking.
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="card-dark flex h-full flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gold/10 text-gold-light p-3 rounded-xl">
                    <CalendarDays size={24} />
                  </div>
                  <h2 className="font-display text-xl text-ivory">{pkg.length}</h2>
                </div>
                <p className="text-ivory/70 leading-relaxed flex-1 mb-6">{pkg.concept}</p>

                <dl className="text-sm text-ivory/50 space-y-1 mb-6 border-t border-ivory/10 pt-4">
                  <div className="flex justify-between"><dt>Lodging & meals</dt><dd>To confirm</dd></div>
                  <div className="flex justify-between"><dt>Group size assumptions</dt><dd>To confirm</dd></div>
                  <div className="flex justify-between"><dt>Price</dt><dd>Request a quote</dd></div>
                </dl>

                <a
                  href={buildWhatsAppLink(
                    `Hello Sigma House! I'd like to ask about the ${pkg.length} sample itinerary.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-terracotta"
                >
                  <MessageCircle size={18} />
                  Ask About This Itinerary
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
