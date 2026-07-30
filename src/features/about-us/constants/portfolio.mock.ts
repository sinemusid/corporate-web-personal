import { PortfolioData } from '../types';

export const MOCK_PORTFOLIO: PortfolioData = {
  heading: 'Karya & Portofolio Kami',
  subheading: 'Koleksi karya sinema yang telah diproduksi dan didistribusikan dalam ekosistem.',
  items: [
    {
      id: 'p-1',
      title: 'Jeje & Khoas',
      category: 'Feature Film',
      year: '2024',
      imageUrl: '/images/khoas_poster.png',
      description: 'Film drama naratif tentang perjalanan nilai-nilai kebaikan dan persahabatan.',
      director: 'Sinemus Production Team',
      duration: '108 Menit',
      synopsis:
        'Jeje & Khoas mengisahkan perjalanan dua sahabat dalam mengarungi dinamika kehidupan perkotaan dan nilai-nilai kebaikan yang diuji oleh waktu. Diproduksi dengan pendekatan visual sinematik tinggi dan narasi mendalam yang menggugah empati.',
      tags: ['Feature Film', 'Drama Naratif', 'Sinemus Original', 'Bioskop XXI'],
      trailerUrl: '#',
    },
    {
      id: 'p-2',
      title: 'Jejak Sineas Universal',
      category: 'Documentary Series',
      year: '2023',
      imageUrl: '/images/khoas_poster.png',
      description: 'Seri dokumenter merekam kiprah kreator muda di berbagai penjuru Nusantara.',
      director: 'Tim Dokumenter Sinemus',
      duration: '6 Episode x 30 Menit',
      synopsis:
        'Seri dokumenter inspiratif yang merekam dedikasi, perjuangan, serta karya inovatif para sineas muda di berbagai pelosok Nusantara dalam melestarikan budaya serta menyuarakan aspirasi lokal ke panggung internasional.',
      tags: ['Documentary', 'Seri Nusantara', 'Kreator Muda', 'Edukasi Sinema'],
      trailerUrl: '#',
    },
    {
      id: 'p-3',
      title: 'Layar Kebaikan',
      category: 'Short Film Anthology',
      year: '2023',
      imageUrl: '/images/khoas_poster.png',
      description: 'Antologi film pendek karya alumni Sinemus Academy.',
      director: 'Alumni Sinemus Academy',
      duration: '45 Menit (5 Film Pendek)',
      synopsis:
        'Kompilasi 5 film pendek karya lulusan terbaik Sinemus Academy yang mengangkat potret sosial dan pesan kemanusiaan. Proyek ini menjadi wadah aktualisasi bakat sinematografi generasi penerus industri audio visual.',
      tags: ['Short Film', 'Antologi', 'Sinemus Academy', 'Social Impact'],
      trailerUrl: '#',
    },
  ],
};
