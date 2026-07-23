import { CompanyInfo, CompanyStat, MilestoneItem } from '../types';

export const MOCK_COMPANY_INFO: CompanyInfo = {
  id: 'comp-1',
  name: 'Sinemus Indonesia',
  tagline: 'One Ecosystem, Many Stories, For Everyone',
  shortDescription: 'PT Sineas Muslim Indonesia adalah entitas dan perusahaan perfilman di Indonesia yang bergerak dalam pilar ekosistem sinema terintegrasi untuk menyatukan nilai-nilai kebaikan, keindahan, kecerdasan, dan keberagaman yang berakar pada nilai-nilai Islam universal, relevan, dan organik ke panggung nasional hingga global.',
  fullAbout: 'Sinemus Indonesia adalah perusahaan ekosistem perfilman berbasis nilai-nilai Islam yang berfokus pada pengembangan industri sinema melalui empat pilar utama: produksi, eksibisi, edukasi, dan jejaring komunitas sinema.',
  vision: 'Menjadi ekosistem kreatif Muslim terdepan di Indonesia yang menghasilkan karya berdampak dan bermanfaat untuk ummah.',
  mission: [
    'Integrasi sistem produksi & eksibisi film berkualitas secara berkelanjutan.',
    'Program edukasi & inkubasi komprehensif bagi kreator sinema muda.',
    'Pemberdayaan ekosistem kreatif yang inklusif, mandiri, dan berkesinambungan.',
    'Jangkauan karya ke pasar global dengan akar budaya dan nilai lokal yang kuat.',
  ],
  values: [
    { title: 'Ekosistem Terintegrasi', description: 'Menghubungkan seluruh elemen sinema dari ide hingga distribusi.' },
    { title: 'Berbasis Nilai', description: 'Mengusung pesan kebaikan dan keberagaman yang relevan.' },
    { title: 'Berdampak Global', description: 'Mendorong perfilman Indonesia berdaya saing di kancah internasional.' },
  ],
};

export const MOCK_COMPANY_STATS: CompanyStat[] = [
  { label: 'Film Diproduksi', value: '20+', description: 'Film feature, dokumenter, & web series' },
  { label: 'Penghargaan', value: '15+', description: 'Festival film nasional & internasional' },
  { label: 'Anggota Komunitas', value: '500+', description: 'Filmmaker & kreator aktif' },
  { label: 'Mitra Strategis', value: '10+', description: 'Kolaborator ekosistem sinema' },
  { label: 'Unit Bisnis', value: '4', description: 'Pilar utama ekosistem sinemus' },
];

export const MOCK_MILESTONES: MilestoneItem[] = [
  { id: 'm-1', year: '2021', title: 'Pendirian Sinemus', description: 'Awal mula gerakan komunitas dan rumah produksi perfilman.' },
  { id: 'm-2', year: '2023', title: 'Peluncuran Unit Bisnis', description: 'Integrasi pilar produksi, eksibisi, academy, dan komunitas.' },
  { id: 'm-3', year: '2025', title: 'Ekspansi Ekosistem', description: 'Perluasan jejaring distribusi dan kolaborasi internasional.' },
];

