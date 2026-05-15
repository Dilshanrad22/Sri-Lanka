import React from "react";
import { Wifi, Wind, Coffee, Droplets, BedDouble } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const RoomsPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-6">
            Our Rooms
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
            Comfortable stays with beautiful views and modern amenities.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Room Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-80">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop" 
                alt="Deluxe Room"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-stone-800 mb-2">One-Bedroom Stay</h3>
              <p className="text-stone-600 mb-6">Perfect for couples or solo travelers looking for a cozy and authentic retreat with modern comforts.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-stone-700">
                  <Wind size={20} className="text-emerald-500" /> Air Conditioning
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Wifi size={20} className="text-emerald-500" /> Free WiFi
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Droplets size={20} className="text-emerald-500" /> Hot Water
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <BedDouble size={20} className="text-emerald-500" /> Balcony View
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl mb-8">
                <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                  <Coffee size={18} className="text-emerald-600"/> Meal Packages
                </h4>
                <ul className="text-stone-600 space-y-1 text-sm">
                  <li>• Breakfast Included</li>
                  <li>• Half Board (Breakfast + Dinner) available</li>
                  <li>• Full Board (All meals) available</li>
                </ul>
              </div>

              <a href="/booking" className="block w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-center font-bold rounded-xl transition-all">
                Request to Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
