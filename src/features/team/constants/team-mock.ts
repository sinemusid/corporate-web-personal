import { TeamMember, StructureNode } from '../types';

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Faris Al-Fatih',
    role: 'CEO & Founder',
    department: 'Executive Leadership',
    avatarUrl: '/images/khoas_poster.png',
    bio: 'Pengarah visi strategis ekosistem perfilman Sinemus Indonesia.',
  },
  {
    id: 'team-2',
    name: 'Rifky Kurnia',
    role: 'COO',
    department: 'Operations',
    avatarUrl: '/images/khoas_poster.png',
    bio: 'Mengelola efisiensi operasional dan pelaksanaan strategi produksi.',
  },
  {
    id: 'team-3',
    name: 'Nabila Putri',
    role: 'CTO',
    department: 'Technology & Screen',
    avatarUrl: '/images/khoas_poster.png',
    bio: 'Memimpin inovasi platform eksibisi digital dan infrastruktur teknologi.',
  },
  {
    id: 'team-4',
    name: 'Aisyah Rahma',
    role: 'CMO',
    department: 'Marketing & Brand',
    avatarUrl: '/images/khoas_poster.png',
    bio: 'Merancang strategi pemasaran karya dan pertumbuhan jaringan audiens.',
  },
  {
    id: 'team-5',
    name: 'Samudra Reza',
    role: 'CFO',
    department: 'Finance & Growth',
    avatarUrl: '/images/khoas_poster.png',
    bio: 'Mengawasi perencanaan keuangan dan investasi pengembangan ekosistem.',
  },
];

export const MOCK_DESIGN_STRUCTURE: StructureNode[] = [
  {
    title: 'COMMISSIONER / CEO',
    description: 'Kepemimpinan Utama & Pengarah Visi Ekosistem Sinemus',
    subNodes: ['Faris Al-Fatih'],
  },
  {
    title: 'COO',
    description: 'Chief Operating Officer - Operasional & Eksekusi Produksi',
    subNodes: ['Rifky Kurnia'],
  },
  {
    title: 'CTO',
    description: 'Chief Technology Officer - Infrastruktur Digital & Screen',
    subNodes: ['Nabila Putri'],
  },
  {
    title: 'CMO',
    description: 'Chief Marketing Officer - Brand, Media & Jangkauan Audens',
    subNodes: ['Aisyah Rahma'],
  },
  {
    title: 'CFO',
    description: 'Chief Financial Officer - Keuangan & Pendanaan Proyek',
    subNodes: ['Samudra Reza'],
  },
];

