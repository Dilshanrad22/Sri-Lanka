import React, { useState } from "react";
import { X, PhoneCall, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Custom Chat Icon for the main button
const ChatBubbleIcon = ({ size = 26 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: <WhatsAppIcon />,
      href: "https://wa.me/94763183081",
      color: "bg-[#25D366] text-white hover:bg-[#1DA851]",
    },
    {
      id: "call",
      label: "Call Now",
      icon: <PhoneCall size={22} />,
      href: "tel:0763183081",
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      id: "email",
      label: "Email Us",
      icon: <Mail size={22} />,
      href: "/contact",
      color: "bg-stone-800 text-white hover:bg-stone-900",
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-4 mb-4 items-end"
          >
            {contactOptions.map((option) => (
              <a
                key={option.id}
                href={option.href}
                target={option.id === "email" ? "_self" : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-stone-900 border border-stone-100 text-[15px] tracking-wide font-bold py-1.5 px-4 rounded-xl shadow-lg">
                  {option.label}
                </span>
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 ${option.color}`}
                >
                  {option.icon}
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#b0c4b1] text-stone-900 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 hover:bg-[#9cae9d] transition-all duration-300"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X size={30} strokeWidth={2.5} /> : <ChatBubbleIcon />}
        </motion.div>
      </button>
    </div>
  );
};
