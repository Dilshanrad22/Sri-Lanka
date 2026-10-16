import React from "react";
import { Reveal } from "../components/Reveal";

const sections = [
  {
    title: "Booking & Payment",
    body: "Enquiries are confirmed by WhatsApp or email once availability and the final price are agreed. Accepted payment methods and any deposit requirements will be listed here once confirmed with Sigma House.",
  },
  {
    title: "Cancellation & Refunds",
    body: "Cancellation and refund terms (including any notice period and non-refundable amounts) will be published here once confirmed with Sigma House. Please ask us directly before booking if you need this in writing.",
  },
  {
    title: "Weather & Safety",
    body: "Some experiences (waterfalls, nature outings, boat or coastal trips) depend on weather and seasonal access. We'll let you know of any changes as early as possible.",
  },
  {
    title: "Dietary & Accessibility",
    body: "Please tell us about dietary requirements, allergies or accessibility needs when you enquire, so we can confirm what we can accommodate before your stay.",
  },
  {
    title: "Privacy",
    body: "Contact details you share through the enquiry form or WhatsApp are used only to respond to your enquiry and arrange your stay. We do not add you to marketing lists without your consent, and do not sell personal data to third parties.",
  },
  {
    title: "Responsible Tourism",
    body: "We ask guests to respect local customs, dress modestly at temples and in the village, and ask permission before photographing people. Any community or volunteering activity is described accurately and only offered where a real programme and partner are in place.",
  },
];

export const PoliciesPage = () => {
  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Reveal className="text-center mb-12">
          <p className="eyebrow mb-4">Good To Know</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory">Policies</h1>
        </Reveal>

        <Reveal className="bg-gold/10 border border-gold-light/30 text-ivory/70 rounded-2xl px-6 py-4 text-sm text-center mb-12">
          Working draft  these policies are placeholders and should be reviewed and confirmed by Sigma House
          (and legal advice where relevant) before the site goes live.
        </Reveal>

        <div className="space-y-10">
          {sections.map((section, idx) => (
            <Reveal key={idx} delay={(idx % 6) * 0.05}>
              <h2 className="font-display text-xl text-ivory mb-3">{section.title}</h2>
              <p className="text-ivory/70 leading-relaxed">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
