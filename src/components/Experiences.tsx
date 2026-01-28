import React from "react";
import { ArrowRight, Utensils, Leaf, Map, ChefHat, Waves, Anchor, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const LocalExperiences = () => {
  const experiences = [
    {
      title: "Surfing Lessons",
      desc: "Catch your first wave in Weligama or Ahangama, the best surf spots for beginners.",
      icon: Waves,
    },
    {
      title: "Whale Watching",
      desc: "Take a morning boat trip from Mirissa to see Blue Whales and Dolphins in the wild.",
      icon: Anchor,
    },
    {
      title: "Cinnamon Experience",
      desc: "Visit local Southern plantations and see how world-famous Ceylon Cinnamon is peeled.",
      icon: Leaf,
    },
    {
      title: "Turtle Conservation",
      desc: "Visit conservation projects along the southern coast and help release baby turtles safely.",
      icon: Heart,
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Local Experiences You’ll Love</h2>
             <div className="h-1 w-20 bg-emerald-500 mb-8 rounded-full"></div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {experiences.map((exp, index) => (
                 <div key={index} className="p-6 bg-stone-50 rounded-xl hover:bg-emerald-50 transition-colors border border-stone-100">
                    <exp.icon className="w-10 h-10 text-emerald-600 mb-4" />
                    <h3 className="text-lg font-bold text-stone-800 mb-2">{exp.title}</h3>
                    <p className="text-stone-600 text-sm">{exp.desc}</p>
                 </div>
               ))}
             </div>

             <div className="mt-10">
                <button className="text-emerald-600 font-bold border-b-2 border-emerald-600 pb-1 hover:text-emerald-800 hover:border-emerald-800 transition-all flex items-center gap-2 w-fit">
                  Explore Experiences <ArrowRight size={18} />
                </button>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640662203313-a635150984aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHN1cmZpbmclMjBXZWxpZ2FtYXxlbnwxfHx8fDE3Njk1MzcyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Surfing in Weligama"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
