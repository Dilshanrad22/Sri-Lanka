import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AnimatedCarouselProps {
  media: { type: "image" | "video"; src: string }[];
  title?: string;
  subtitle?: string;
}

export const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({ media, title, subtitle }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="w-full relative py-10">
      {(title || subtitle) && (
        <div className="text-center mb-10 px-6">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">{title}</h2>}
          {title && <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-4"></div>}
          {subtitle && <p className="text-stone-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {media.map((item, idx) => (
            <div
              key={idx}
              className="flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 pl-4 sm:pl-6 first:pl-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[3/2] group">
                {item.type === "image" ? (
                  <ImageWithFallback
                    src={item.src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="p-3 rounded-full bg-white text-stone-800 shadow-md hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-stone-100"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 rounded-full bg-white text-stone-800 shadow-md hover:bg-emerald-50 hover:text-emerald-600 transition-colors border border-stone-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
