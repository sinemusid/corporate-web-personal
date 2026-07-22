import { CompanyInfo, CompanyStat, MilestoneItem } from '../types';

export const MOCK_COMPANY_INFO: CompanyInfo = {
  id: 'comp-1',
  name: 'Sinemus Indonesia',
  tagline: 'Empowering Creative Ecosystems & Cinematic Innovation',
  shortDescription: 'Sinemus Indonesia adalah ekosistem media sinematik terpadu yang menghubungkan talenta, produksi, eksibisi, dan komunitas di Indonesia.',
  fullAbout: 'Didirikan dengan semangat membawa karya visual Indonesia ke panggung global, Sinemus Indonesia menaungi 4 pilar utama: Screen, Production, Academy, dan Community untuk memfasilitasi siklus kreasi tanpa batas.',
  vision: 'Menjadi ekosistem sinema dan media kreatif terdepan di Asia Tenggara yang mendorong inovasi bercerita serta pertumbuhan industri independen.',
  mission: [
    'Mengakselerasi generasi baru pembuat film melalui pendidikan inklusif.',
    'Menghasilkan konten sinematik dengan standar internasional.',
    'Membangun infrastruktur distribusi dan eksibisi digital yang mandiri.',
    'Memperkuat jejaring komunitas seni sinema di seluruh Indonesia.',
  ],
  values: [
    { title: 'Inovasi Tanpa Batas', description: 'Memadukan teknologi terkini dengan kekuatan narasi sinematik.' },
    { title: 'Kolaborasi Inklusif', description: 'Wadah bagi seluruh kreator lintas disiplin untuk berkembang bersama.' },
    { title: 'Integritas Karya', description: 'Menjaga kejujuran dan estetika dalam setiap proyek yang dihasilkan.' },
  ],
};

export const MOCK_COMPANY_STATS: CompanyStat[] = [
  { label: 'Project Diproduksi', value: '45+', description: 'Film feature, dokumenter, & iklan' },
  { label: 'Talenta Terlatih', value: '1.2K+', description: 'Alumni program Sinemus Academy' },
  { label: 'Penghargaan', value: '18', description: 'Festival film nasional & internasional' },
  { label: 'Jaringan Komunitas', value: '18 Kota', description: 'Titik kolaborasi aktif di Indonesia' },
];

export const MOCK_MILESTONES: MilestoneItem[] = [
  { id: 'm-1', year: '2021', title: 'Pendirian Sinemus', description: 'Awal mula gerakan komuniter dan rumah produksi skala kolektif.' },
  { id: 'm-2', year: '2023', title: 'Peluncuran Sinemus Academy', description: 'Perluasan ke inkubasi edukasi talenta sinema muda.' },
  { id: 'm-3', year: '2025', title: 'Perluasan Ekosistem Digital', description: 'Peluncuran jaringan eksibisi Sinemus Screen & platform agregasi.' },
];
