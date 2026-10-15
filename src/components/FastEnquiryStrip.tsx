import React, { useState } from "react";
import { Send } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

const INTERESTS = ["Stay", "Cooking", "Nature", "Culture", "Transport"];

export const FastEnquiryStrip = () => {
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const message = [
    "Hello Sigma House! I'd like to plan a village stay.",
    dates ? `Dates: ${dates}` : "Dates: flexible / to discuss",
    `Guests: ${guests}`,
    selectedInterests.length ? `Interested in: ${selectedInterests.join(", ")}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section className="relative z-20 -mt-10 md:-mt-14">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grain-texture rounded-2xl border border-ivory/10 bg-surface/95 backdrop-blur-md shadow-2xl shadow-black/40 p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr_auto] gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-ivory/60 mb-2">
              Dates (optional)
            </label>
            <input
              type="text"
              placeholder="e.g. 12–16 March"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-ivory/15 focus:border-gold focus:ring-gold/20 bg-ivory/5 text-ivory placeholder:text-ivory/40 outline-none transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-ivory/60 mb-2">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-ivory/15 focus:border-gold focus:ring-gold/20 bg-ivory/5 text-ivory outline-none transition-all text-sm"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n} className="text-charcoal">
                  {n} Guest{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-ivory/60 mb-2">
              Interests
            </label>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <button
                  type="button"
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    selectedInterests.includes(interest)
                      ? "bg-gold text-charcoal border-gold"
                      : "bg-ivory/5 text-ivory/70 border-ivory/15 hover:border-gold/50"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>

          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noreferrer"
            className="btn-terracotta whitespace-nowrap"
          >
            <Send size={18} />
            Send Enquiry
          </a>
        </div>
        <p className="text-center text-ivory/50 text-xs mt-3">
          We'll confirm availability and the final price by WhatsApp or email — no payment required to enquire.
        </p>
      </div>
    </section>
  );
};
