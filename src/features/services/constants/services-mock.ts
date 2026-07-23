import { ServiceItem } from '../types';

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Film Production',
    category: 'Production',
    description: 'Produksi film layar lebar dan seri sinematik penuh nilai estetika dan narasi luhur.',
    deliverables: ['Scriptwriting', 'Directing & Production', 'Post-Production & VFX', 'Sound Scoring'],
    unitSlug: 'production',
  },
  {
    id: 'srv-2',
    title: 'Creative Agency',
    category: 'Agency',
    description: 'Layanan narasi visual dan strategi komersial sinematik untuk brand dan korporasi.',
    deliverables: ['Brand Storytelling', 'Digital Campaign', 'Commercial Film', 'Content Creation'],
    unitSlug: 'production',
  },
  {
    id: 'srv-3',
    title: 'Media & Academy',
    category: 'Education',
    description: 'Program inkubasi, lokakarya, dan pendampingan intensif bagi kreator sinema muda.',
    deliverables: ['Filmmaking Workshop', 'Mentorship Program', 'Masterclass Series', 'Cinema School'],
    unitSlug: 'academy',
  },
  {
    id: 'srv-4',
    title: 'Distribution & Event',
    category: 'Exhibition',
    description: 'Jaringan distribusi film, penayangan khusus, dan festival sinema berskala nasional.',
    deliverables: ['Film Festival', 'Community Screening', 'OTT Distribution', 'Cinema Release'],
    unitSlug: 'screen',
  },
];

