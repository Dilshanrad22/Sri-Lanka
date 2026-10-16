import React, { useState } from "react";
import { Calendar, Users, Home, Coffee, MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { Reveal } from "../components/Reveal";

const EXPERIENCE_OPTIONS = [
  "Village Cooking / Nature Kitchen",
  "Cinnamon & Spice Garden",
  "Tea Factory Visit",
  "Waterfalls & Nature",
  "Village & Culture",
  "Tailor-Made Itinerary",
];

const TRANSPORT_OPTIONS = ["Not needed", "Tuk-tuk", "Car / Van", "Not sure  advise me"];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-ivory/15 focus:border-gold focus:ring-gold/20 bg-ivory/5 text-ivory outline-none transition-all";

export const BookingPage = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: "One-Bedroom",
    meal: "Breakfast",
    name: "",
    email: "",
    experiences: [] as string[],
    dietary: "",
    transport: "Not sure  advise me",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleExperience = (exp: string) => {
    setFormData((prev) => ({
      ...prev,
      experiences: prev.experiences.includes(exp)
        ? prev.experiences.filter((e) => e !== exp)
        : [...prev.experiences, exp],
    }));
  };

  const buildSummary = () =>
    [
      "Hello Sigma House! I'd like to book a stay.",
      "",
      `Check-in: ${formData.checkIn || "flexible"}`,
      `Check-out: ${formData.checkOut || "flexible"}`,
      `Guests: ${formData.guests}`,
      `Room: ${formData.room}`,
      `Meals: ${formData.meal}`,
      formData.experiences.length ? `Experiences: ${formData.experiences.join(", ")}` : "",
      `Transport: ${formData.transport}`,
      formData.dietary ? `Dietary / accessibility notes: ${formData.dietary}` : "",
      formData.message ? `Message: ${formData.message}` : "",
      "",
      `My Name: ${formData.name}`,
      `My Email: ${formData.email}`,
    ]
      .filter((line) => line !== "")
      .join("\n");

  const handleWhatsAppBooking = () => {
    window.open(buildWhatsAppLink(buildSummary()), "_blank");
    setSubmitted(true);
  };

  const handleEmailRequest = () => {
    const subject = encodeURIComponent("Booking Enquiry  Sigma House Sri Lanka");
    const body = encodeURIComponent(buildSummary());
    window.location.href = `mailto:hasithadhananjaya2020@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Plan Your Stay</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">Book Your Homestay in Sri Lanka</h1>
          <p className="text-lg text-ivory/60">
            Fill out the form below or message us directly on WhatsApp. We'll confirm availability
            and the final price before anything is booked.
          </p>
        </Reveal>

        {submitted && (
          <div className="flex items-center gap-3 bg-forest-light/15 border border-forest-light/30 text-ivory rounded-2xl px-6 py-4 mb-8">
            <CheckCircle2 size={22} className="shrink-0 text-gold-light" />
            <p className="text-sm">
              Thanks! Your enquiry details are ready  if WhatsApp didn't open automatically, please
              send the message manually, or we'll reply to the email you provided.
            </p>
          </div>
        )}

        <Reveal delay={0.1} className="card-dark p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Check-in Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gold-light" size={20} />
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className={`${inputClass} pl-10`} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Check-out Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gold-light" size={20} />
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className={`${inputClass} pl-10`} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 text-gold-light" size={20} />
                <select name="guests" value={formData.guests} onChange={handleChange} className={`${inputClass} pl-10`}>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Room Preference</label>
              <div className="relative">
                <Home className="absolute left-3 top-3 text-gold-light" size={20} />
                <select name="room" value={formData.room} onChange={handleChange} className={`${inputClass} pl-10`}>
                  <option value="One-Bedroom">One-Bedroom</option>
                  <option value="Family Room">Family Room</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Meal Preference</label>
              <div className="relative">
                <Coffee className="absolute left-3 top-3 text-gold-light" size={20} />
                <select name="meal" value={formData.meal} onChange={handleChange} className={`${inputClass} pl-10`}>
                  <option value="Breakfast">Breakfast Included</option>
                  <option value="Half Board">Half Board (Breakfast + Dinner)</option>
                  <option value="Full Board">Full Board (All meals)</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Experiences You're Interested In</label>
              <div className="flex flex-wrap gap-2">
                {EXPERIENCE_OPTIONS.map((exp) => (
                  <button
                    type="button"
                    key={exp}
                    onClick={() => toggleExperience(exp)}
                    className={`px-3 py-2 rounded-full text-xs font-semibold border transition-colors ${
                      formData.experiences.includes(exp)
                        ? "bg-gold text-charcoal border-gold"
                        : "bg-ivory/5 text-ivory/70 border-ivory/15 hover:border-gold/50"
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Transport Needs</label>
              <select name="transport" value={formData.transport} onChange={handleChange} className={inputClass}>
                {TRANSPORT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Your Name</label>
              <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Dietary / Accessibility Notes</label>
              <input type="text" name="dietary" placeholder="e.g. vegetarian, nut allergy, step-free access" value={formData.dietary} onChange={handleChange} className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-ivory/70 mb-2">Anything Else?</label>
              <textarea name="message" rows={3} placeholder="Tell us more about your trip..." value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
            </div>
          </div>

          <p className="text-xs text-ivory/40 mb-6">
            Your details are used only to respond to this enquiry and arrange your stay  see our{" "}
            <a href="/policies" className="underline hover:text-gold-light">Policies</a> page for details.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleEmailRequest}
              className="flex-1 py-4 bg-ivory/10 hover:bg-ivory/15 text-ivory font-bold rounded-xl transition-all border border-ivory/15"
            >
              Request to Book (Email)
            </button>
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle size={22} />
              Book via WhatsApp
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
