import { TeamMember, StructureNode } from '../types';

export const MOCK_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Raditya Pratama',
    role: 'Executive Chairman & Group CEO',
    department: 'Executive Leadership',
    avatarUrl: '/images/team-1.jpg',
    bio: 'Produser film senior berpengalaman 15+ tahun di industri perfilman nasional.',
  },
  {
    id: 'team-2',
    name: 'Amanda Wijaya',
    role: 'Chief Creative Officer (CCO)',
    department: 'Creative & Development',
    avatarUrl: '/images/team-2.jpg',
    bio: 'Sutradara dan penulisan naskah penerima berbagai penghargaan festival film.',
  },
  {
    id: 'team-3',
    name: 'Hendra Kusuma',
    role: 'Head of Sinemus Screen & Distribution',
    department: 'Exhibition & Media',
    avatarUrl: '/images/team-3.jpg',
    bio: 'Spesialis strategi distribusi konten audio-visual digital dan eksibisi.',
  },
  {
    id: 'team-4',
    name: 'Maya Srikandi',
    role: 'Head of Academy & Community',
    department: 'Talent Incubation',
    avatarUrl: '/images/team-4.jpg',
    bio: 'Penggiat edukasi sinema dan pengembang jejaring pembuat film muda.',
  },
];

export const MOCK_DESIGN_STRUCTURE: StructureNode[] = [
  {
    title: 'Board of Directors & Executive',
    description: 'Penentu kebijakan strategis dan kapabilitas ekosistem.',
    subNodes: ['Group CEO', 'Chief Creative Officer', 'Chief Financial Officer'],
  },
  {
    title: 'Content & Studio Directorate',
    description: 'Unit eksekusi karya dan pilar kreatif.',
    subNodes: ['Sinemus Production', 'Sinemus Screen'],
  },
  {
    title: 'Incubation & Network Directorate',
    description: 'Pilar edukasi talenta dan pengembangan komunitas.',
    subNodes: ['Sinemus Academy', 'Sinemus Community'],
  },
];
