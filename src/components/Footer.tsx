import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="grain-texture bg-forest text-ivory">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/30">
                <img src="/logo/sigma-house-logo.png" alt="Sigma House Logo" className="h-full w-full object-cover" />
              </div>
              <h3 className="font-display text-2xl">
                Sigma <span className="text-gold-light">House</span>
              </h3>
            </div>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Experience Authentic Sri Lankan Village Life  local hospitality, traditional cooking, gardens, culture and nature, shaped around you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="eyebrow mb-6">Quick Links</h4>
            <ul className="space-y-3 text-ivory/70">
              <li><a href="/about" className="hover:text-gold-light transition-colors">Our Story</a></li>
              <li><a href="/accommodation" className="hover:text-gold-light transition-colors">Stay With Us</a></li>
              <li><a href="/experiences" className="hover:text-gold-light transition-colors">Experiences</a></li>
              <li><a href="/activities" className="hover:text-gold-light transition-colors">Activities & Volunteering</a></li>
              <li><a href="/south-coast" className="hover:text-gold-light transition-colors">Down South Trips</a></li>
              <li><a href="/packages" className="hover:text-gold-light transition-colors">Packages & Itineraries</a></li>
              <li><a href="/transport" className="hover:text-gold-light transition-colors">Transport & Rentals</a></li>
              <li><a href="/journal" className="hover:text-gold-light transition-colors">Journal</a></li>
              <li><a href="/gallery" className="hover:text-gold-light transition-colors">Gallery</a></li>
              <li><a href="/reviews" className="hover:text-gold-light transition-colors">Guest Stories</a></li>
              <li><a href="/policies" className="hover:text-gold-light transition-colors">Policies</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="eyebrow mb-6">Contact Us</h4>
            <ul className="space-y-4 text-ivory/70">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-light shrink-0" />
                <a href="https://maps.app.goo.gl/yYRufBrzUXRY61Ea8" target="_blank" rel="noreferrer" className="hover:text-gold-light transition-colors">
                  Imaduwa, Sri Lanka (View Map)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold-light shrink-0" />
                <a href="https://wa.me/94763183081" target="_blank" rel="noreferrer" className="hover:text-gold-light transition-colors">+94 76 318 3081 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold-light shrink-0" />
                <a href="mailto:hasithadhananjaya2020@gmail.com" className="hover:text-gold-light transition-colors">hasithadhananjaya2020@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="eyebrow mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/61562298313608/mentions/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/sigmahouse_srilanka/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-ivory/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-ivory/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-ivory/60">
          <p className="text-sm">© {new Date().getFullYear()} Sigma House Sri Lanka. All rights reserved.</p>
          <p className="text-gold-light font-medium italic">Experience Authentic Sri Lankan Village Life.</p>
        </div>
      </div>
    </footer>
  );
};
