import { DesignStructureData } from '../types';

export const MOCK_DESIGN_STRUCTURE: DesignStructureData = {
  heading: 'Struktur Organisasi Perusahaan',
  subheading: 'Tata kelola kepemimpinan dan manajerial Sinemus Indonesia.',
  nodes: [
    { id: 'n-1', role: 'CEO', title: 'COMMISSIONER & CHIEF EXECUTIVE', description: 'Pengarah Strategis & Visi Perusahaan' },
    { id: 'n-2', role: 'COO', title: 'CHIEF OPERATING OFFICER', description: 'Operasional & Integrasi Unit Bisnis' },
    { id: 'n-3', role: 'CTO', title: 'CHIEF TECHNOLOGY OFFICER', description: 'Platform Digital & Infrastruktur Eksibisi' },
    { id: 'n-4', role: 'CMO', title: 'CHIEF MARKETING OFFICER', description: 'Jejaring Kemitraan & Media Distribusi' },
    { id: 'n-5', role: 'CFO', title: 'CHIEF FINANCIAL OFFICER', description: 'Manajemen Keuangan & Pendanaan Karya' },
  ],
};
