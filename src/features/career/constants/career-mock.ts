import { RoadmapMilestone, CareerOpportunity } from '../types';

export const MOCK_ROADMAP: RoadmapMilestone[] = [
  {
    id: 'rm-1',
    phase: 'Fase 1',
    year: '2021 - 2022',
    title: 'Foundation',
    description: 'Pembangunan pondasi ekosistem sinema dan penguatan ideasi kolektif.',
    status: 'completed',
  },
  {
    id: 'rm-2',
    phase: 'Fase 2',
    year: '2023',
    title: 'Initial Launch',
    description: 'Peluncuran unit bisnis pertama dan integrasi pilar-pilar operasional.',
    status: 'completed',
  },
  {
    id: 'rm-3',
    phase: 'Fase 3',
    year: '2024',
    title: 'Growth',
    description: 'Ekspansi jejaring komunitas, distribusi karya, dan inkubasi talenta.',
    status: 'in-progress',
  },
  {
    id: 'rm-4',
    phase: 'Fase 4',
    year: '2025',
    title: 'Expansion',
    description: 'Ekspansi pasar global, teknologi sinema interaktif, dan kolaborasi strategis.',
    status: 'planned',
  },
];

export const MOCK_CAREERS: CareerOpportunity[] = [
  {
    id: 'car-1',
    title: 'Senior Content Producer',
    department: 'Sinemus Production',
    type: 'Full-time',
    location: 'Jakarta',
  },
  {
    id: 'car-2',
    title: 'Academy Program Coordinator',
    department: 'Sinemus Academy',
    type: 'Full-time',
    location: 'Jakarta / Remote',
  },
];

