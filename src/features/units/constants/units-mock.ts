import { BusinessUnit } from '../types';

export const MOCK_UNITS: BusinessUnit[] = [
  {
    id: 'unit-screen',
    slug: 'screen',
    title: 'Sinemus Screen',
    subtitle: 'Exhibition & Digital Streaming Platform',
    description: 'Layanan pemutaran film sinematik dan distribusi digital berfokus pada pengalaman penonton modern.',
    features: ['Private Screening Hub', 'Digital VOD Platform', 'Film Festival Partner'],
    stats: [
      { label: 'Layaran Penayangan', value: '150+' },
      { label: 'Penonton Aktif', value: '50K+' },
    ],
  },
  {
    id: 'unit-production',
    slug: 'production',
    title: 'Sinemus Production',
    subtitle: 'Film Feature & Commercial Production Studio',
    description: 'Studio pembuatan film independen, dokumenter, dan iklan komersial berkualitas tinggi.',
    features: ['Feature Film Production', 'Commercial & Music Video', 'Post-Production & VFX'],
    stats: [
      { label: 'Judul Film', value: '25+' },
      { label: 'Penghargaan', value: '12' },
    ],
  },
  {
    id: 'unit-academy',
    slug: 'academy',
    title: 'Sinemus Academy',
    subtitle: 'Creative Talent & Technical Education',
    description: 'Inkubator dan sekolah akselerasi talenta perfilman nasional berbasis industri.',
    features: ['Masterclass Director', 'Screenwriting Lab', 'Technical Workshop'],
    stats: [
      { label: 'Alumni Trainee', value: '1,200+' },
      { label: 'Mentor Spesialis', value: '30+' },
    ],
  },
  {
    id: 'unit-community',
    slug: 'community',
    title: 'Sinemus Community',
    subtitle: 'Filmmakers Network & Arts Collective',
    description: 'Wadah kolaborasi jejaring pegiat film, apresiasi sinema, dan forum diskusi independen.',
    features: ['Community Screening', 'Filmmaker Gathering', 'Funding Lab Grants'],
    stats: [
      { label: 'Anggota Komunitas', value: '5,000+' },
      { label: 'Kota Jaringan', value: '18' },
    ],
  },
];
