export const CONTACT_INFO = {
  name: 'Rebeca Fermiano',
  role: 'Psicanalista & Hipnoterapeuta Clínica',
  instagram: 'psicoanalista_rebeca',
  instagramUrl: 'https://instagram.com/psicoanalista_rebeca',
  whatsappNumber: '5511980353174',
  whatsappDisplay: '+55 (11) 98035-3174',
  address: 'Dr. Ramos Azevedo, 159 - Centro, Guarulhos - SP',
  mapsUrl: 'https://maps.app.goo.gl/tM3Sz4fiBq1UADGy8',
  mainPhoto: 'https://i.imgur.com/QDdnlcG.jpeg',
  aboutPhoto: 'https://i.imgur.com/4HUfRy7.jpeg',
  speakerPhoto: 'https://i.imgur.com/nygynNF.jpeg',
  logoUrl: 'https://i.imgur.com/JoVCEtu.png',
};

export const COLOR_PALETTE = {
  petrol: '#0A3D42',
  petrolDark: '#072B2F',
  petrolLight: '#12555C',
  sand: '#F8EFE7',
  sandLight: '#FCF8F4',
  sandDark: '#ECDCCE',
  sandCard: '#F4E7DA',
};

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encoded}`;
}
