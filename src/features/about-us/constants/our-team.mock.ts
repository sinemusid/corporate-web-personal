import { OurTeamData } from '../types';

export const MOCK_OUR_TEAM: OurTeamData = {
  heading: 'Tim & Praktisi Sinemus',
  subheading: 'Para profesional dan sineas di balik pengembangan ekosistem.',
  members: [
    { id: 't-1', name: 'Ahmad Fauzi', role: 'Executive Producer', photoUrl: '/images/khoas_poster.png', bio: 'Produser film berpengalaman dalam produksi layar lebar.' },
    { id: 't-2', name: 'Siti Rahma', role: 'Head of Academy', photoUrl: '/images/khoas_poster.png', bio: 'Pengembang kurikulum dan inkubasi talenta muda.' },
    { id: 't-3', name: 'Budi Santoso', role: 'Technical Director', photoUrl: '/images/khoas_poster.png', bio: 'Spesialis pasca-produksi dan teknologi sinema.' },
    { id: 't-4', name: 'Dewi Lestari', role: 'Community Lead', photoUrl: '/images/khoas_poster.png', bio: 'Koordinator jejaring sineas dan eksibisi regional.' },
  ],
};
