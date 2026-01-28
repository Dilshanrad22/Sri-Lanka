import React from "react";
import { Heart, Globe, Users } from "lucide-react";

export const Impact = () => {
  return (
    <section className="py-24 bg-emerald-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Your Stay Makes a Difference</h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Support Local Families</h3>
            <p className="text-stone-600">Your contribution directly supports the livelihood of our family and the surrounding community.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Responsible Tourism</h3>
            <p className="text-stone-600">We prioritize eco-friendly practices and sustainable tourism that respects nature.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">Cultural Learning</h3>
            <p className="text-stone-600">Foster genuine understanding and connection between cultures through shared experiences.</p>
          </div>
        </div>

        <p className="mt-16 text-xl text-stone-700 italic font-medium max-w-2xl mx-auto">
          "Every stay creates a positive impact — for visitors and for the local community."
        </p>
      </div>
    </section>
  );
};
