import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Guest Stories</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">Guest Stories from Our Sri Lanka Homestay</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="fill-gold-light text-gold-light" size={32} />
            ))}
          </div>
          <p className="text-lg text-ivory/60 max-w-2xl mx-auto">
            We only publish genuine, permissioned guest feedback  never invented quotes or ratings.
          </p>
        </Reveal>

        <Reveal className="card-dark p-10 text-center mb-10">
          <h2 className="font-display text-xl text-ivory mb-3">Read Our Verified Reviews</h2>
          <p className="text-ivory/60 mb-6 max-w-xl mx-auto">
            The most reliable, up-to-date guest reviews for Sigma House Sri Lanka live on our Google
            Business Profile. Have a look before you book.
          </p>
          <a
            href="https://maps.app.goo.gl/yYRufBrzUXRY61Ea8"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            View Reviews on Google
            <ExternalLink size={18} />
          </a>
        </Reveal>

        <Reveal className="bg-gold/10 border border-gold-light/30 text-ivory/70 rounded-2xl px-6 py-5 text-sm text-center">
          Guest stories and photos shared with us  with permission  will be added here over time.
          If you've stayed with us and would like your story featured, let us know on WhatsApp.
        </Reveal>
      </div>
    </div>
  );
};
