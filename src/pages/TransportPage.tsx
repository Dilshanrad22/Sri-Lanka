import React from "react";
import { Car, Bike, MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { Reveal } from "../components/Reveal";

export const TransportPage = () => {
  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">Getting Around</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">Transport & Rentals</h1>
          <p className="text-lg text-ivory/60">
            Getting around during your stay — tuk-tuk, car or van arrangements, and bike or car rental.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Reveal className="card-dark">
            <div className="bg-gold/10 text-gold-light w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Car size={28} />
            </div>
            <h3 className="font-display text-xl text-ivory mb-3">Tuk-Tuk</h3>
            <p className="text-ivory/70 leading-relaxed">
              May suit a small group — previous planning assumed up to three passengers, depending on luggage
              and local rules. Good for short village and nearby trips.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="card-dark">
            <div className="bg-gold/10 text-gold-light w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Bike size={28} />
            </div>
            <h3 className="font-display text-xl text-ivory mb-3">Car / Van & Rentals</h3>
            <p className="text-ivory/70 leading-relaxed">
              For larger groups or longer day trips, a car or van can be arranged. Vehicle capacity, driver
              licence, insurance and fuel terms are confirmed with you before the trip.
            </p>
          </Reveal>
        </div>

        <Reveal className="bg-gold/10 border border-gold-light/30 text-ivory/70 rounded-2xl px-6 py-4 text-sm text-center mb-12">
          Prices, vehicle capacity and insurance/licence terms shown here are placeholders — please confirm
          with Sigma House before relying on them.
        </Reveal>

        <Reveal className="text-center">
          <a
            href={buildWhatsAppLink("Hello Sigma House! I'd like to ask about transport and rental options.")}
            target="_blank"
            rel="noreferrer"
            className="btn-terracotta"
          >
            <MessageCircle size={20} />
            Ask About Transport
          </a>
        </Reveal>
      </div>
    </div>
  );
};
