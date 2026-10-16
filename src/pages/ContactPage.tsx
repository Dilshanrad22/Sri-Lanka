import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Navigation } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-charcoal pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">Contact Us</h1>
          <p className="text-lg text-ivory/60 max-w-2xl mx-auto">
            Have questions or want to plan your stay? Reach out to Hasitha, your host at Sigma House.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Info */}
          <Reveal className="card-dark p-8">
            <h3 className="font-display text-2xl text-ivory mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <a href="tel:0763183081" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gold/10 text-gold-light rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-ivory/50 font-medium">Call or WhatsApp</p>
                  <p className="text-lg font-semibold text-ivory">076 318 3081</p>
                </div>
              </a>

              <a href="mailto:hasithadhananjaya2020@gmail.com" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gold/10 text-gold-light rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-ivory/50 font-medium">Email Us</p>
                  <p className="text-lg font-semibold text-ivory">hasithadhananjaya2020@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-gold/10 text-gold-light rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-ivory/50 font-medium">Location</p>
                  <p className="text-lg font-semibold text-ivory">Udakaduruwaka Watta, Imaduwa, Sri Lanka</p>
                </div>
              </div>
            </div>

            <h3 className="font-display text-xl text-ivory mt-12 mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/61562298313608/mentions/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-ivory/10 text-ivory rounded-xl flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/sigmahouse_srilanka/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-ivory/10 text-ivory rounded-xl flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="card-dark p-8">
            <h3 className="font-display text-2xl text-ivory mb-8">Send a Message</h3>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const subject = encodeURIComponent("Enquiry from Sigma House website");
                const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
                window.location.href = `mailto:hasithadhananjaya2020@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label className="block text-sm font-semibold text-ivory/70 mb-2">Your Name</label>
                <input name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-ivory/15 focus:border-gold focus:ring-gold/20 bg-ivory/5 text-ivory outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ivory/70 mb-2">Email Address</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-ivory/15 focus:border-gold focus:ring-gold/20 bg-ivory/5 text-ivory outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ivory/70 mb-2">Message</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-ivory/15 focus:border-gold focus:ring-gold/20 bg-ivory/5 text-ivory outline-none transition-all resize-none"></textarea>
              </div>
              <p className="text-xs text-ivory/40">
                This opens your email app with the message ready to send. See our{" "}
                <a href="/policies" className="underline hover:text-gold-light">Policies</a> page for how we use your details.
              </p>
              <button type="submit" className="btn-terracotta w-full">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>

        {/* Map Section */}
        <Reveal className="card-dark p-4 overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="font-display text-2xl text-ivory mb-2 flex items-center gap-2">
                <Navigation size={24} className="text-gold-light" />
                Find Us in Imaduwa
              </h2>
              <p className="text-ivory/60">Udakaduruwaka Watta, Imaduwa 80130, Sri Lanka</p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Sigma+House+Sri+Lanka"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              Get Directions
            </a>
          </div>

          <div className="w-full h-[450px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
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
        </Reveal>
      </div>
    </div>
  );
};
