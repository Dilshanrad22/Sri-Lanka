import React from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { 
    TreePine, 
    UtensilsCrossed, 
    Leaf, 
    Waves, 
    Footprints, 
    Heart, 
    Users, 
    PartyPopper 
} from "lucide-react";

export const ExperiencesPage = () => {
  const experiences = [
    {
      title: "Traditional Food Making & Cooking",
      emoji: "🍛",
      icon: UtensilsCrossed,
      tagline: "Cook and enjoy traditional Sri Lankan meals",
      description: "Experience authentic Sri Lankan home cooking. Learn to prepare traditional dishes using fresh village ingredients, clay pots, firewood, and aromatic spices.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Tea Picking Experiences",
      emoji: "🍃",
      icon: Leaf,
      tagline: "Step into lush tea plantations",
      description: "Try tea picking and learn how fresh leaves become world-famous Ceylon Tea. A perfect opportunity to walk through the green estates and enjoy fresh brews.",
      image: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Waterfall Visits",
      emoji: "🌊",
      icon: Waves,
      tagline: "Discover hidden natural wonders",
      description: "Hike to stunning local waterfalls nestled within the jungle. Swim in natural pools and enjoy the breathtaking tropical scenery.",
      image: "https://images.unsplash.com/photo-1703566567802-e1945c83f0cb?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Village Tours",
      emoji: "🚶",
      icon: Footprints,
      tagline: "Explore authentic Sri Lankan village life",
      description: "Walk through paddy fields, meet friendly locals, and discover daily rural traditions. Experience the peaceful and warm lifestyle of the village.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Sri Lankan New Year Games",
      emoji: "🎉",
      icon: PartyPopper,
      tagline: "Celebrate culture with traditional fun",
      description: "Engage in exciting local games typically played during the Sinhala & Tamil New Year. Fun for all ages, promoting cultural exchange.",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=800&fit=crop&q=80",
    },
    {
      title: "Family-Friendly Activities",
      emoji: "👨‍👩‍👧‍👦",
      icon: Users,
      tagline: "Joyful moments for the whole family",
      description: "We offer safe, engaging, and fun activities designed specifically for families with children, ensuring everyone has a memorable stay.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop&q=80",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-emerald-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6">
            Our Experiences
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            Authentic experiences that connect you with Sri Lankan culture and nature.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <ImageWithFallback src={exp.image} alt={exp.title} className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-emerald-500 p-3 rounded-xl shadow-lg">
                      <exp.icon size={24} className="text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 text-5xl drop-shadow-lg">{exp.emoji}</div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-800">{exp.title}</h2>
                  <p className="text-emerald-600 font-medium italic">{exp.tagline}</p>
                  <p className="text-stone-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
