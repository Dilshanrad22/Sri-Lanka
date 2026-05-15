import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Navigation } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Contact Us</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Have questions or want to plan your stay? Reach out to Hasitha, your host at Sigma House.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-800 mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <a href="tel:0763183081" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Call or WhatsApp</p>
                  <p className="text-lg font-bold text-stone-800">076 318 3081</p>
                </div>
              </a>

              <a href="mailto:hasithadhananjaya2020@gmail.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-stone-800">hasithadhananjaya2020@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 font-medium">Location</p>
                  <p className="text-lg font-bold text-stone-800">Udakaduruwaka Watta, Imaduwa, Sri Lanka</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-stone-800 mt-12 mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/61562298313608/mentions/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-stone-100 text-stone-600 rounded-xl flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/sigmahouse_srilanka/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-stone-100 text-stone-600 rounded-xl flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-bold text-stone-800 mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message Sent! We will reply soon.'); }}>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Your Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-stone-50 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-stone-50 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Message</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border-stone-200 focus:border-emerald-500 focus:ring-emerald-500 bg-stone-50 outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/30">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-4 rounded-[2rem] shadow-2xl border border-stone-100 overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-2 flex items-center gap-2">
                <Navigation size={24} className="text-emerald-600" />
                Find Us in Imaduwa
              </h2>
              <p className="text-stone-600">Udakaduruwaka Watta, Imaduwa 80130, Sri Lanka</p>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Sigma+House+Sri+Lanka" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3 bg-stone-900 text-white font-bold rounded-full hover:bg-emerald-600 transition-all shadow-lg flex items-center gap-2"
            >
              Get Directions
            </a>
          </div>
          
          <div className="w-full h-[450px] rounded-[1.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6541578433436!2d80.4026474757303!3d6.042044393943949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae16b0076768753%3A0xf383ec25b0b60d00!2sSigma%20House%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1715764953456!5m2!1sen!2slk"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sigma House Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
