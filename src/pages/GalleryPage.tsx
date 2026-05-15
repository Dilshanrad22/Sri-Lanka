import React from "react";
import { imagePaths } from "../utils/imagePaths";
import { AnimatedMasonryGallery } from "../components/AnimatedMasonryGallery";

export const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Gallery</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Moments captured at Sigma House  from cozy rooms to beautiful nature and traditional experiences.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-6"></div>
        </div>
      </div>

      <AnimatedMasonryGallery
        images={imagePaths["Accomodation"] || []}
        title="Our Accommodation"
        subtitle="Relaxing stays in the heart of nature"
      />

      <AnimatedMasonryGallery
        images={imagePaths["Experience Cinnomon and Tea"] || []}
        title="Cinnamon & Tea"
        subtitle="Authentic agricultural experiences"
      />

      <AnimatedMasonryGallery
        images={imagePaths["Cooking"] || []}
        title="Cooking Experiences"
        subtitle="Delicious Sri Lankan cuisine and family cooking"
      />

      <AnimatedMasonryGallery
        images={imagePaths["Volunteering"] || []}
        title="Volunteering"
        subtitle="Making a lasting impact in the community"
      />
    </div>
  );
};
