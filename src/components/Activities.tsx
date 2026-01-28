import React from "react";
import { BookOpen, Users, Sprout, HeartHandshake } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Activities = () => {
  const activities = [
    {
      title: "Teaching English",
      desc: "Help children learn basic English skills and build their confidence for a brighter future.",
      image: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0ZWFjaGluZyUyMGNoaWxkcmVuJTIwZGl2ZXJzZXxlbnwxfHx8fDE3Njk1MzY0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: BookOpen,
    },
    {
      title: "Community Support",
      desc: "Engage in sports, games, and support village initiatives to strengthen community bonds.",
      image: "https://images.unsplash.com/photo-1509763988163-d54b5f5d5b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYW4lMjBmYW1pbHklMjB2aWxsYWdlJTIwc21pbGluZ3xlbnwxfHx8fDE3Njk1MzY0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Users,
    },
    {
      title: "Nature & Gardening",
      desc: "Assist with local gardening, eco-farming, and preserving the beautiful village environment.",
      image: "https://images.unsplash.com/photo-1759716705272-8d1697eccf7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW5pbmclMjBwbGFudGluZ3xlbnwxfHx8fDE3Njk1MzY0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Sprout,
    },
    {
      title: "Cultural Exchange",
      desc: "Immerse yourself in daily life, learn traditions, and share your own culture with locals.",
      image: "https://images.unsplash.com/photo-1544015759-237f87d55ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHRlYSUyMHBsYW50YXRpb258ZW58MXx8fHwxNzY5NTM2NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: HeartHandshake,
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Volunteer & Cultural Activities</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md text-emerald-600">
                  <activity.icon size={24} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-stone-800 mb-3">{activity.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-1">
                  {activity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-500 italic mb-8 max-w-2xl mx-auto border-l-4 border-emerald-300 pl-4 py-2 bg-emerald-50 rounded-r-lg">
            Note: All volunteer activities are short-term, unpaid, and based on cultural exchange — not employment.
          </p>
          <button className="px-8 py-3 bg-stone-800 hover:bg-stone-900 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl">
            View All Activities
          </button>
        </div>
      </div>
    </section>
  );
};
