import { EcosystemNode, EcosystemFlowStep } from '../types';

export const MOCK_ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'eco-1',
    title: 'Sinemus Screen',
    category: 'Exhibition & Distribution',
    description: 'Platform tayang sinematik dan pengalaman eksibisi media audio-visual interaktif.',
  },
  {
    id: 'eco-2',
    title: 'Sinemus Production',
    category: 'Original Content Studio',
    description: 'Rumah produksi film fitur, dokumenter, dan iklan komersial berkualitas internasional.',
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
    title: 'Talent Incubation',
    description: 'Pengembangan ide ide cerita serta talenta melalui program Sinemus Academy.',
    unitInvolved: 'Sinemus Academy',
  },
  {
    stepNumber: 2,
    title: 'Content Production',
    description: 'Eksekusi produksi sinematik berstandar tinggi oleh tim Sinemus Production.',
    unitInvolved: 'Sinemus Production',
  },
  {
    stepNumber: 3,
    title: 'Distribution & Screen',
    description: 'Penayangan film di jaringan ekosistem Sinemus Screen dan mitra eksibisi.',
    unitInvolved: 'Sinemus Screen',
  },
  {
    stepNumber: 4,
    title: 'Community Activation',
    description: 'Diskusi, riset audience, dan penguatan jejaring kreatif bersama Sinemus Community.',
    unitInvolved: 'Sinemus Community',
  },
];
