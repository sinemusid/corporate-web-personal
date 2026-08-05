export interface HomeServiceItem {
  id: string;
  icon?: string;
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
      title: 'Produksi',
      description: 'Layanan pembuatan karya sinema, film dokumenter, dan media audiovisual dengan standar teknis & kualitas visual tinggi.',
      features: ['Film & Serial', 'Video Komersial & Branding'],
    },
    {
      id: 'service-screen',
      title: 'Distribusi',
      description: 'Penayangan karya, event eksebisi, serta jejaring distribusi film ke audiens yang luas.',
      features: ['Festival Film', 'Platform Penayangan Digital'],
    },
    {
      id: 'service-academy',
      title: 'Edukasi',
      description: 'Program pelatihan intensif, workshop teknis sinema, dan kelas praktisi untuk meningkatkan kapasitas sineas.',
      features: ['Kelas Film', 'Workshop Film', 'E-Course Film'],
    },
    {
      id: 'service-community',
      title: 'Inkubasi',
      description: 'Pemberdayaan sineas dan pengembangan relasi hingga dapat berkolaborasi dalam karya.',
      features: ['Forum Networking', 'Event Collaborasi'],
    },
  ],
};
