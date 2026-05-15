import React, { useState } from "react";
import { Calendar, Users, Home, Coffee, MessageCircle } from "lucide-react";

export const BookingPage = () => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: "One-Bedroom",
    meal: "Breakfast",
    name: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = () => {
    const message = `Hello Sigma House! I'd like to book a stay.%0A%0ACheck-in: ${formData.checkIn}%0ACheck-out: ${formData.checkOut}%0AGuests: ${formData.guests}%0ARoom: ${formData.room}%0AMeals: ${formData.meal}%0A%0AMy Name: ${formData.name}%0AMy Email: ${formData.email}`;
    window.open(`https://wa.me/94763183081?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Book Your Stay</h1>
          <p className="text-lg text-stone-600">
            Fill out the form below or message us directly on WhatsApp to secure your booking at Sigma House.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="bg-stone-50 rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Check-in Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-emerald-600" size={20} />
                <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Check-out Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-emerald-600" size={20} />
                <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Number of Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 text-emerald-600" size={20} />
                <select name="guests" value={formData.guests} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Room Preference</label>
              <div className="relative">
                <Home className="absolute left-3 top-3 text-emerald-600" size={20} />
                <select name="room" value={formData.room} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white">
                  <option value="One-Bedroom">One-Bedroom</option>
                  <option value="Family Room">Family Room</option>
                </select>
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-stone-700 mb-2">Meal Preference</label>
              <div className="relative">
                <Coffee className="absolute left-3 top-3 text-emerald-600" size={20} />
                <select name="meal" value={formData.meal} onChange={handleChange} className="w-full pl-10 pr-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white">
                  <option value="Breakfast">Breakfast Included</option>
                  <option value="Half Board">Half Board (Breakfast + Dinner)</option>
                  <option value="Full Board">Full Board (All meals)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Your Name</label>
              <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white" />
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => alert("Booking request sent via Email. We will contact you shortly!")}
              className="flex-1 py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl transition-all"
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
        </div>
      </div>
    </div>
  );
};
