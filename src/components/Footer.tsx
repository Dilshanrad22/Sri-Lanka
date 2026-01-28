import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Sri Lanka <span className="text-emerald-500">Volunteer</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Experience Real Sri Lanka – Live Local, Volunteer with Purpose. Join our family for an unforgettable cultural exchange.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#activities" className="hover:text-emerald-500 transition-colors">Activities</a></li>
              <li><a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a></li>
              <li><a href="#accommodation" className="hover:text-emerald-500 transition-colors">Accommodation</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-emerald-500 shrink-0" />
                <span>123 Village Road, Southern Province, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-emerald-500 shrink-0" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-emerald-500 shrink-0" />
                <span>hello@srilankavolunteer.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-900 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Sri Lanka Volunteer. All rights reserved.</p>
          <p className="text-emerald-500 font-medium italic">Stay Local. Travel with Purpose.</p>
        </div>
      </div>
    </footer>
  );
};
