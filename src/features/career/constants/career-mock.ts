import { RoadmapMilestone, CareerOpportunity } from '../types';

export const MOCK_ROADMAP: RoadmapMilestone[] = [
  {
    id: 'rm-1',
    phase: 'Fase 1',
    year: '2024-2025',
    title: 'Konsolidasi Ekosistem & Inkubasi',
    description: 'Integrasi 4 pilar bisnis Sinemus dan akselerasi program pelatihan Sinemus Academy.',
    status: 'completed',
  },
  {
    id: 'rm-2',
    phase: 'Fase 2',
    year: '2025-2026',
    title: 'Ekspansi Jaringan Eksibisi Digital',
    description: 'Peluncuran Sinemus Screen VOD & jaringan pemutaran independen di 25 kota.',
    status: 'in-progress',
  },
  {
    id: 'rm-3',
    phase: 'Fase 3',
    year: '2026-2028',
    title: 'Ko-Produksi Internasional & Tech Lab',
    description: 'Kemitraan pembuatan film fitur skala global dan pemanfaatan AI/VFX sinematik.',
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
