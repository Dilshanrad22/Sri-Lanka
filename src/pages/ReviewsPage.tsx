import React from "react";
import { Star, Quote } from "lucide-react";

export const ReviewsPage = () => {
  const reviews = [
    {
      name: "John & Emily",
      country: "United Kingdom",
      rating: 5,
      text: "Sigma House was the highlight of our Sri Lanka trip! Hasitha was an incredible host. The food was amazing, and the village tour gave us such a unique perspective. Highly recommended for couples looking for an authentic experience.",
    },
    {
      name: "David M.",
      country: "Australia",
      rating: 5,
      text: "A beautiful homestay with nature all around. We loved waking up to the sounds of birds. The room was perfectly clean, AC worked great, and the breakfast was out of this world.",
    },
    {
      name: "Sarah L.",
      country: "Germany",
      rating: 5,
      text: "If you want real Sri Lankan hospitality, this is the place. We went to a nearby waterfall and cooked with the family. Unforgettable memories. Thank you Hasitha!",
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Guest Reviews</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="fill-amber-500 text-amber-500" size={32} />)}
          </div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            See what our guests say about their stay at Sigma House.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg relative">
              <Quote size={40} className="text-emerald-100 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed italic mb-8 relative z-10">"{rev.text}"</p>
              <div>
                <h4 className="font-bold text-stone-900">{rev.name}</h4>
                <p className="text-emerald-600 text-sm font-medium">{rev.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
