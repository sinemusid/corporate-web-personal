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
    },
    {
      id: 'p-2',
      title: 'Jejak Sineas Universal',
      category: 'Documentary Series',
      year: '2023',
      imageUrl: '/images/khoas_poster.png',
      description: 'Seri dokumenter merekam kiprah kreator muda di berbagai penjuru Nusantara.',
    },
    {
      id: 'p-3',
      title: 'Layar Kebaikan',
      category: 'Short Film Anthology',
      year: '2023',
      imageUrl: '/images/khoas_poster.png',
      description: 'Antologi film pendek karya alumni Sinemus Academy.',
    },
  ],
};
