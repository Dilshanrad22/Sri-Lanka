import React from "react";
import { Heart, Leaf, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Personal Hosting",
      desc: "You stay with a local host, not a front desk — questions get answered directly, before and during your trip.",
      icon: Heart,
    },
    {
      title: "Authentic Activities",
      desc: "Cooking, gardens, cinnamon, tea and nature outings shaped around real village life, not a staged show.",
      icon: Leaf,
    },
    {
      title: "Flexible Itineraries",
      desc: "Tell us your dates, pace and interests — stays and experiences can be combined to fit your trip.",
      icon: Sparkles,
    },
    {
      title: "Direct Communication",
      desc: "Reach us on WhatsApp for questions, availability and planning — no call centre in between.",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="eyebrow mb-4">The Sigma House Difference</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-12">Why Guests Choose Us</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="group card-dark h-full text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold-light transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                  <reason.icon size={26} />
                </div>
                <h3 className="text-xl font-semibold text-ivory mb-3">{reason.title}</h3>
                <p className="text-ivory/60">{reason.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
