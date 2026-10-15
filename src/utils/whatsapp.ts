export const SIGMA_HOUSE_WHATSAPP_NUMBER = "94763183081";

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${SIGMA_HOUSE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
