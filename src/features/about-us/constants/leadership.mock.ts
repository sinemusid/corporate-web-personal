import { LeadershipData } from '../types';

export const MOCK_LEADERSHIP: LeadershipData = {
  heading: 'LEADERSHIP',
  subheading: 'MEET THE FOUNDERS',
  members: [
    {
      id: 'founder-ceo',
      name: 'Yusuf Al-Bukhari',
      role: 'Chief Executive Officer & Founder',
      photoUrl: '/images/leadership/ceo-img.jpeg',
      bio: 'Profesional perfilman dengan pengalaman 4 tahun yang mencakup ranah manajemen produksi (produserial), penyutradaraan, dan pascaproduksi. Memiliki keahlian yang solid dalam manajemen proyek dan pengembangan konsep kreatif untuk menghasilkan karya yang berdampak. Berkomitmen penuh untuk mengintegrasikan nilai-nilai Islam dalam setiap narasi visual sebagai bentuk kontribusi nyata bagi dakwah di industri kreatif.',
      socials: [
        { type: 'instagram', href: 'https://www.instagram.com/ucupilem', label: 'Instagram' },
        { type: 'email', href: 'mailto:yusufalbukhari05@gmail.com', label: 'Email' },
      ],
    },
  ],
};

