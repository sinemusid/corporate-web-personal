import { MilestonesTimelineData } from '../types';

export const MOCK_MILESTONES_TIMELINE: MilestonesTimelineData = {
  heading: 'Milestones Perusahaan',
  subheading: 'Perjalanan perkembangan Sinemus dari komunitas hingga ekosistem perfilman terintegrasi.',
  milestones: [
    { id: 'm-1', year: '2021', title: 'Pendirian Sinemus', description: 'Awal mula gerakan komunitas dan rumah produksi perfilman.' },
    { id: 'm-2', year: '2023', title: 'Peluncuran Unit Bisnis', description: 'Integrasi pilar produksi, eksibisi, academy, dan komunitas.' },
    { id: 'm-3', year: '2025', title: 'Ekspansi Ekosistem', description: 'Perluasan jejaring distribusi dan kolaborasi internasional.' },
  ],
};
