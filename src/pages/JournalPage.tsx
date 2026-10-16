import React from "react";
import { BookOpen } from "lucide-react";
import { Reveal } from "../components/Reveal";

const topics = [
  {
    title: "What Happens in a Sri Lankan Cooking Class",
    desc: "What to expect from a hands-on village cooking session, from spices to the shared meal.",
  },
  {
    title: "How Ceylon Cinnamon Is Made",
    desc: "A plain-language look at harvesting, peeling and drying cinnamon the traditional way.",
  },
  {
    title: "Sri Lankan Food for Beginners",
    desc: "A gentle introduction to rice and curry, hoppers, and everyday village meals.",
  },
  {
    title: "What to Pack for a Waterfall Day Trip",
    desc: "Footwear, weather and practical notes for nature outings near Sigma House.",
  },
  {
    title: "Planning a Village Stay in Sri Lanka",
    desc: "How to think about pace, dates and interests when planning time with a local host.",
  },
];

export const JournalPage = () => {
  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal className="text-center mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-4">Stories & Guides</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">Sri Lanka Travel Guides &amp; Food Stories</h1>
          <p className="text-lg text-ivory/60">
            Sri Lanka guides, food stories and practical trip-planning notes from Sigma House.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, idx) => (
            <Reveal key={idx} delay={(idx % 4) * 0.08}>
              <div className="card-dark flex gap-5">
                <div className="bg-gold/10 text-gold-light w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ivory mb-2">{topic.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed mb-2">{topic.desc}</p>
                  <span className="eyebrow">Coming soon</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
