import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  {
    label: 'Beranda',
    href: '/',
    description: 'Halaman Utama Ekosistem Sinemus Indonesia',
  },
  {
    label: 'Unit',
    href: '/units/production',
    description: '4 Pilar Unit Bisnis (Production, Screen, Academy, Community)',
    subItems: [
      {
        label: 'Sinemus Production',
        href: '/units/production',
        description: 'Rumah produksi film layar lebar, dokumenter, dan konten audio-visual.',
      },
      {
        label: 'Sinemus Screen',
        href: '/units/screen',
        description: 'Jaringan eksibisi sinema, pemutaran independen, dan penayangan digital.',
      },
      {
        label: 'Sinemus Academy',
        href: '/units/academy',
        description: 'Inkubator dan pelatihan intensif talenta perfilman masa depan.',
      },
      {
        label: 'Sinemus Community',
        href: '/units/community',
        description: 'Wadah jejaring sineas independen dan apresiasi karya.',
      },
    ],
  },
  {
    label: 'Tentang Kami',
    href: '/about',
    description: 'Tentang Perusahaan, Visi Misi, Tim, dan Portofolio',
  },
  {
    label: 'Kolaborator',
    href: '/collaborator',
    description: 'Mitra & Kolaborator Strategis Sinemus',
  },
  {
    label: 'Hubungi Kami',
    href: '/contact',
    description: 'Hubungi Kami & Bergabung dalam Misi',
  },
];
