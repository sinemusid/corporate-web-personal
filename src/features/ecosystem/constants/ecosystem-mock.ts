import { EcosystemNode, EcosystemFlowStep } from '../types';

export const MOCK_ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'eco-1',
    title: 'Sinemus Production',
    category: 'Original Content Studio',
    description: 'Rumah produksi film fitur, dokumenter, dan iklan komersial berkualitas internasional.',
  },
  {
    id: 'eco-2',
    title: 'Sinemus Screen',
    category: 'Exhibition & Distribution',
    description: 'Platform tayang sinematik dan pengalaman eksibisi media audio-visual interaktif.',
  },
  {
    id: 'eco-3',
    title: 'Sinemus Academy',
    category: 'Talent & Skills Incubator',
    description: 'Pusat pelatihan inkubasi talenta muda film dan riset perkembangan teknologi media.',
  },
  {
    id: 'eco-4',
    title: 'Sinemus Community',
    category: 'Network & Collective',
    description: 'Jaringan pembuat film independen, kritikus, dan pegiat seni sinema tanah air.',
  },
];

export const MOCK_ECOSYSTEM_FLOW: EcosystemFlowStep[] = [
  {
    stepNumber: 1,
    title: 'IDEASI',
    description: 'Brainstorming, penulisan naskah, dan konseptualisasi karya berbasis nilai.',
    unitInvolved: 'Sinemus Production',
  },
  {
    stepNumber: 2,
    title: 'PRODUKSI',
    description: 'Eksekusi pengambilan gambar dan penataan suara berstandar profesional.',
    unitInvolved: 'Sinemus Production',
  },
  {
    stepNumber: 3,
    title: 'EKSIBISI',
    description: 'Distribusi dan penayangan film melalui jaringan bioskop dan platform layar.',
    unitInvolved: 'Sinemus Screen',
  },
  {
    stepNumber: 4,
    title: 'EDUKASI',
    description: 'Workshop, masterclass, dan inkubasi talenta muda di industri sinema.',
    unitInvolved: 'Sinemus Academy',
  },
  {
    stepNumber: 5,
    title: 'KOMUNITAS',
    description: 'Apresiasi karya, jaringan diskusi, dan penguatan hubungan sineas & penonton.',
    unitInvolved: 'Sinemus Community',
  },
];

