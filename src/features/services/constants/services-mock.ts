import { ServiceItem } from '../types';

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Full Length Feature Film Production',
    category: 'Film Production',
    description: 'Produksi film layar lebar profesional dari tahap pengembangan skrip hingga paska produksi.',
    deliverables: ['Script Development', 'Casting & Location Scouting', '4K Cinema Shooting', 'Color Grading & Sound Master'],
    unitSlug: 'production',
  },
  {
    id: 'srv-2',
    title: 'Creative Brand Agency & Commercials',
    category: 'Creative Agency',
    description: 'Pembuatan video komersial brand berkonsep sinematik untuk kampanye pemasaran digital & TV.',
    deliverables: ['Creative Concepting', 'High-end Commercial Shoot', 'VFX & Motion Graphics'],
    unitSlug: 'production',
  },
  {
    id: 'srv-3',
    title: 'Film Exhibition & Distribution Services',
    category: 'Distribution',
    description: 'Layanan penayangan privat, pemutaran eksklusif, dan agregasi tayangan VOD digital.',
    deliverables: ['Private Screening Event', 'Digital Content Aggregation', 'Media PR Campaign'],
    unitSlug: 'screen',
  },
  {
    id: 'srv-4',
    title: 'Filmmaking Masterclass & Corporate Lab',
    category: 'Academy & Workshop',
    description: 'Program pelatihan perfilman dan lokakarya pembuatan video komersial perusahaan.',
    deliverables: ['Custom Mentorship', 'Directing & Cinematography Lab', 'Certificate & Showcase'],
    unitSlug: 'academy',
  },
];
