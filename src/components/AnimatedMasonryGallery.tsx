import React, { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Camera } from "lucide-react";

interface AnimatedMasonryGalleryProps {
  images: string[];
  title: string;
  subtitle: string;
  tagline?: string;
}

export const AnimatedMasonryGallery: React.FC<AnimatedMasonryGalleryProps> = ({ images, title, subtitle, tagline }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-stone-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">{title}</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg bg-stone-200 transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(idx % 10) * 100}ms` }}
            >
              <ImageWithFallback
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            </div>
          ))}
        </div>

        {tagline && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Camera size={18} className="text-emerald-600" />
              <p className="text-stone-700 font-medium">{tagline}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
