import React from "react";
import { ArrowRight, Coffee, Home, Sunset, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Homestay = () => {
  return (
    <section id="accommodation" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <ImageWithFallback
                src="https://images.unsplash.com/photo-1590487426620-e62c929bfe5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcmklMjBMYW5rYSUyMHNvdXRoZXJuJTIwdmlsbGFnZSUyMGhvbWUlMjBnYXJkZW58ZW58MXx8fHwxNzY5NTM3MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Southern Village Home Garden"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white italic text-lg font-light">
                  "Many guests say they feel relaxed, safe, and truly at home."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Stay Like Family</h2>
            <div className="h-1 w-20 bg-emerald-500 mb-8 rounded-full"></div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit text-emerald-600">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-800 mb-2">Comfortable Living</h4>
                  <p className="text-stone-600">Clean, comfortable rooms and a unique tree house experience nestled in nature.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit text-emerald-600">
                  <Sunset size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-800 mb-2">Relaxation & Yoga</h4>
                  <p className="text-stone-600">A calm environment perfect for yoga, meditation, and unwinding after a day of volunteering.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit text-emerald-600">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-800 mb-2">Authentic Meals</h4>
                  <p className="text-stone-600">Enjoy delicious, home-cooked Sri Lankan meals prepared with fresh local ingredients.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm h-fit text-emerald-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-stone-800 mb-2">Safe Atmosphere</h4>
                  <p className="text-stone-600">A safe, friendly family atmosphere where you are always welcome.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                Accommodation & Meals
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
