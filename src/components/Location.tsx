import React from "react";
import { Waves, Anchor, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal } from "./Reveal";

const highlights = [
  {
    icon: Waves,
    title: "Beaches & Coast",
    desc: "Day trips toward Unawatuna and Weligama for swimming, surfing or watching the sunset  route and timing confirmed with us.",
  },
  {
    icon: MapPin,
    title: "Galle Fort",
    desc: "The historic Dutch Fort in Galle, a UNESCO World Heritage site full of charm and history.",
  },
  {
    icon: Anchor,
    title: "Mirissa & Ahangama",
    desc: "Possible extensions toward Mirissa or Ahangama as part of a longer itinerary  ask us what's feasible for your dates.",
  },
];

export const Location = () => {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Nearby</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">Beyond the Village</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Reveal className="space-y-8">
            <p className="text-ivory/70 text-lg leading-relaxed">
              Sigma House sits in Imaduwa, in Sri Lanka's Southern Province  a good base for combining a slower village stay with nearby south-coast highlights, where travel time and routes allow.
            </p>

            <div className="space-y-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="bg-ivory/10 p-3 rounded-lg text-gold-light">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-ivory mb-2">{item.title}</h4>
                    <p className="text-ivory/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
               <div className="grain-texture rounded-2xl overflow-hidden border border-ivory/10 aspect-[3/4]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1767710048839-4bead77ab4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYWxsZSUyMEZvcnQlMjBTcmklMjBMYW5rYSUyMGxpZ2h0aG91c2V8ZW58MXx8fHwxNzY5NTM3MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Galle Fort Lighthouse"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
            <div className="space-y-4">
               <div className="grain-texture rounded-2xl overflow-hidden border border-ivory/10 aspect-[3/4]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581420455889-0797ceee7b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGNvY29udXQlMjB0cmVlJTIwc3dpbmclMjBiZWFjaHxlbnwxfHx8fDE3Njk1MzcyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coconut Tree Swing"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
