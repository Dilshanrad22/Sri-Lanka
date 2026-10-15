import React from "react";
import { Link } from "react-router-dom";
import { ChefHat, Leaf, Coffee, Waves, Landmark, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal } from "./Reveal";

export const Activities = () => {
  const experiences = [
    {
      title: "Village Cooking — Nature Kitchen",
      desc: "Learn Sri Lankan spices and prepare traditional dishes with your host, then share the meal you helped create.",
      image: "/experience-photos/village-cooking-nature-kitchen.jpeg",
      icon: ChefHat,
    },
    {
      title: "Cinnamon & Spice Garden",
      desc: "Walk the garden to see cinnamon, pepper, ginger and turmeric growing, and how they find their way into everyday cooking.",
      image: "/experience-photos/cinnamon-spice-garden.jpeg",
      icon: Leaf,
    },
    {
      title: "Tea Factory Visit",
      desc: "A guided outing to understand Ceylon tea production, with time to taste and learn about the plantations.",
      image: "/experience-photos/tea-factory-visit.jpeg",
      icon: Coffee,
    },
    {
      title: "Nature & Waterfalls",
      desc: "Locally guided visits to nearby waterfalls and green landscapes, with trail and weather notes shared beforehand.",
      image: "/experience-photos/waterfall-nature-outing.jpeg",
      icon: Waves,
    },
    {
      title: "Village & Culture",
      desc: "Respectful village walks and optional temple visits, with guidance on etiquette, dress and photography.",
      image: "/experience-photos/village-culture-walk.jpeg",
      icon: Landmark,
    },
    {
      title: "Tailor-Made Itinerary",
      desc: "Tell us your dates, pace and interests — we'll help shape a more personal village experience around them.",
      image: "/experience-photos/tree-house.jpeg",
      icon: Sparkles,
    },
  ];

  return (
    <section id="activities" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Explore</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory">Signature Experiences</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={(index % 3) * 0.1}>
              <Link
                to="/experiences"
                className="group block h-full overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold-light backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                    <exp.icon size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ivory mb-3">{exp.title}</h3>
                  <p className="text-ivory/60 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="italic mb-8 max-w-2xl mx-auto border-l-4 border-gold/60 pl-4 py-2 bg-ivory/5 rounded-r-lg text-ivory/60">
            Ask us about available sessions, dietary needs, and combining any experience with an overnight stay.
          </p>
          <Link to="/experiences" className="btn-outline-ivory">
            See All Experiences
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
