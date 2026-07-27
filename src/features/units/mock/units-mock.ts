import { BusinessUnit } from '../types';

export const MOCK_UNITS: BusinessUnit[] = [
  {
    id: 'unit-production',
    slug: 'production',
    title: 'SINEMUS PRODUCTION',
    subtitle: 'Film Feature & Studio Content Studio',
    description: 'Rumah produksi film layar lebar, dokumenter, dan konten audio-visual berstandar internasional.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Feature Film Production', 'Commercial & Music Video', 'Post-Production & VFX'],
    stats: [
      { label: 'Judul Film', value: '20+' },
      { label: 'Penghargaan', value: '15+' },
    ],
  },
  {
    id: 'unit-screen',
    slug: 'screen',
    title: 'SINEMUS SCREEN',
    subtitle: 'Exhibition & Digital Screening Platform',
    description: 'Jaringan eksibisi sinema, pemutaran independen, dan platform penayangan digital.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Private Screening Hub', 'Digital VOD Platform', 'Film Festival Partner'],
    stats: [
      { label: 'Layar Penayangan', value: '150+' },
      { label: 'Penonton Aktif', value: '50K+' },
    ],
  },
  {
    id: 'unit-academy',
    slug: 'academy',
    title: 'SINEMUS ACADEMY',
    subtitle: 'Creative Talent & Technical Education',
    description: 'Inkubator dan lembaga pelatihan intensif untuk mencetak talenta perfilman masa depan.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Masterclass Director', 'Screenwriting Lab', 'Technical Workshop'],
    stats: [
      { label: 'Alumni Trainee', value: '1,200+' },
      { label: 'Mentor Spesialis', value: '30+' },
    ],
  },
  {
    id: 'unit-community',
    slug: 'community',
    title: 'SINEMUS COMMUNITY',
    subtitle: 'Filmmakers Network & Arts Collective',
    description: 'Wadah jejaring sineas independen, apresiasi film, dan forum apresiasi karya.',
    bannerUrl: '/images/khoas_poster.png',
    features: ['Community Screening', 'Filmmaker Gathering', 'Funding Lab Grants'],
    stats: [
      { label: 'Anggota Komunitas', value: '500+' },
      { label: 'Mitra Kota', value: '18' },
    ],
  },
];
