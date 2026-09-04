export interface AssessmentAnswers {
  moment: string;
  cycle: string;
  objective: string;
  commitment: string;
  methodPreference?: string;
}

export interface PillarItem {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  benefits: string[];
  ctaLabel: string;
  whatsappMessage: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  city: string;
  audioDuration: string;
  audioUrl?: string; // Link direto do arquivo de áudio (.mp3, WhatsApp, etc.)
  tag: string;
  text: string;
  highlight: string;
}

export interface VideoTestimonialItem {
  id: string;
  name: string;
  role: string;
  city: string;
  theme: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string; // Link do vídeo (.mp4 ou link incorporado)
}
