import { ServicesData } from '../types';

export const MOCK_SERVICES: ServicesData = {
  heading: 'Layanan Kami',
  subheading: 'Solusi perfilman end-to-end yang kami hadirkan untuk industri.',
  services: [
    {
      id: 's-1',
      title: 'Produksi Film & Studio',
      description: 'Layanan produksi film layar lebar, dokumenter, dan seri web dari pra-produksi hingga rilis.',
      iconName: 'Clapperboard',
      features: ['Development & Scriptwriting', 'Principal Photography', 'Post-Production & Sound'],
    },
    {
      id: 's-2',
      title: 'Eksibisi & Penayangan Digital',
      description: 'Platform dan jaringan pemutaran film independen, pemutaran privat, dan streaming.',
      iconName: 'Film',
      features: ['Private Screening Hub', 'VOD Distribution', 'Festival Roadshow'],
    },
    {
      id: 's-3',
      title: 'Inkubasi & Masterclass',
      description: 'Program pelatihan intensif, lokakarya sutradara, dan inkubasi penulis sinema muda.',
      iconName: 'GraduationCap',
      features: ['Director Masterclass', 'Screenwriting Workshop', 'Mentorship Program'],
    },
  ],
};
