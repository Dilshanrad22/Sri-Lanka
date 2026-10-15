import React from "react";
import { ArrowRight, Coffee, Home, Sunset, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedCarousel } from "./AnimatedCarousel";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

const accommodationMedia = [
  { type: "video" as const, src: "/images/Accomodation/room_video.mp4" },
  { type: "image" as const, src: "/images/Accomodation/room1.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room2.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room3.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room4.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room5.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room6.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room7.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room8.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room9.jpeg" },
  { type: "image" as const, src: "/images/Accomodation/room10.jpeg" },
];

const features = [
  { icon: Home, title: "Comfortable Living", desc: "Clean, comfortable rooms and a unique tree house experience nestled in nature." },
  { icon: Sunset, title: "Relaxation & Slow Living", desc: "A calm environment perfect for yoga, meditation, and unwinding at your own pace." },
  { icon: Coffee, title: "Authentic Meals", desc: "Enjoy delicious, home-cooked Sri Lankan meals prepared with fresh local ingredients." },
  { icon: ShieldCheck, title: "Safe Atmosphere", desc: "A safe, friendly family atmosphere where you are always welcome." },
];

export const Homestay = () => {
  return (
    <section id="accommodation" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <Reveal className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="grain-texture relative rounded-3xl overflow-hidden shadow-xl shadow-black/30 border border-ivory/10">
               <ImageWithFallback
                src="/images/Accomodation/room1.jpeg"
                alt="Southern Village Home Garden"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-charcoal/90 to-transparent p-8">
                <p className="text-ivory italic text-lg font-light">
                  "Many guests say they feel relaxed, safe, and truly at home."
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="w-full lg:w-1/2 order-1 lg:order-2">
            <p className="eyebrow mb-4">Stay With Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-8">Stay Like Family</h2>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-gold/10 p-3 rounded-full h-fit text-gold-light">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-ivory mb-2">{feature.title}</h4>
                    <p className="text-ivory/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
               <Link to="/accommodation" className="btn-terracotta">
                View the Stay
                <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>

      <div className="mt-20">
        <AnimatedCarousel
          media={accommodationMedia}
          title="Our Accommodations"
          subtitle="Take a look at where you'll be staying during your unforgettable time with us."
        />
      </div>
    </section>
  );
};
