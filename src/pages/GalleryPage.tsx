import React from "react";
import { imagePaths } from "../utils/imagePaths";
import { AnimatedMasonryGallery } from "../components/AnimatedMasonryGallery";
import { Reveal } from "../components/Reveal";

export const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Gallery</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">Gallery</h1>
          <p className="text-lg text-ivory/60 max-w-2xl mx-auto">
            Moments captured at Sigma House  from cozy rooms to beautiful nature and traditional experiences.
          </p>
        </Reveal>
      </div>

      <div className="bg-charcoal">
        <AnimatedMasonryGallery
          images={imagePaths["Accomodation"] || []}
          title="Our Accommodation"
          subtitle="Relaxing stays in the heart of nature"
        />
      </div>

      <div className="bg-surface">
        <AnimatedMasonryGallery
          images={imagePaths["Experience Cinnomon and Tea"] || []}
          title="Cinnamon & Tea"
          subtitle="Authentic agricultural experiences"
        />
      </div>

      <div className="bg-charcoal">
        <AnimatedMasonryGallery
          images={imagePaths["Cooking"] || []}
          title="Cooking Experiences"
          subtitle="Delicious Sri Lankan cuisine and family cooking"
        />
      </div>

      <div className="bg-surface">
        <AnimatedMasonryGallery
          images={imagePaths["Volunteering"] || []}
          title="Volunteering"
          subtitle="Making a lasting impact in the community"
        />
      </div>
    </div>
  );
};
