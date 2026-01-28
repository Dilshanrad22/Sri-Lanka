import React from "react";
import { Waves, Mountain, Sun, Anchor, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Location = () => {
  return (
    <section className="py-20 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Southern Sri Lanka</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-stone-300 text-lg leading-relaxed">
              Located in the heart of the Southern Province, our homestay offers the perfect balance between tranquility and adventure. We are just minutes away from the famous Galle Fort and the surf breaks of Weligama.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg text-emerald-400">
                  <Waves size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Beaches & Surfing</h4>
                  <p className="text-stone-400">Minutes away from Unawatuna and Weligama. Perfect for swimming, surfing, or watching the sunset.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg text-emerald-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Galle Fort</h4>
                  <p className="text-stone-400">Explore the historic Dutch Fort in Galle, a UNESCO World Heritage site full of charm and history.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-lg text-emerald-400">
                  <Anchor size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Mirissa & Wildlife</h4>
                  <p className="text-stone-400">Easy day trips to Mirissa for whale watching or Yala National Park for safari adventures.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
               <div className="rounded-xl overflow-hidden aspect-[3/4]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1767710048839-4bead77ab4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYWxsZSUyMEZvcnQlMjBTcmklMjBMYW5rYSUyMGxpZ2h0aG91c2V8ZW58MXx8fHwxNzY5NTM3MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Galle Fort Lighthouse"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
            <div className="space-y-4">
               <div className="rounded-xl overflow-hidden aspect-[3/4]">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581420455889-0797ceee7b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMGNvY29udXQlMjB0cmVlJTIwc3dpbmclMjBiZWFjaHxlbnwxfHx8fDE3Njk1MzcyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Coconut Tree Swing"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
