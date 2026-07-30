export interface HomeServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface HomeServicesData {
  heading: string;
  subheading: string;
  services: HomeServiceItem[];
}

export const MOCK_HOME_SERVICES: HomeServicesData = {
  heading: 'LAYANAN KAMI',
  subheading:
    'Layanan holistik ekosistem perfilman terintegrasi untuk mendukung produksi, eksibisi, hingga inkubasi karya berkualitas.',
  services: [
    {
      id: 'service-production',
      icon: '🎬',
      title: 'Produksi Film & Audiovisual',
      description: 'Layanan produksi film layar lebar, dokumenter, dan serial dengan standar teknis dan artistik tinggi.',
      features: ['Feature Film & Series', 'Commercial & Corporate Media', 'Post-Production & Sound Design'],
    },
    {
      id: 'service-screen',
      icon: '📽️',
      title: 'Eksibisi & Distribusi Sinema',
      description: 'Penayangan sinema, eksibisi komunitas, dan jejaring distribusi karya ke pemirsa nasional dan internasional.',
      features: ['Alternative Screening Hub', 'Film Festival Distribution', 'Digital Screening Network'],
    },
    {
      id: 'service-academy',
      icon: '🎓',
      title: 'Inkubasi & Pelatihan Sineas',
      description: 'Program masterclass, workshop teknis, dan inkubasi talenta muda untuk mematangkan ide dan skenario karya.',
      features: ['Scriptwriting Incubator', 'Technical Filmmaking Lab', 'Directing & Producing Workshop'],
    },
  ],
};
