export const siteConfig = {
  name: 'Sinemus Indonesia – Platform Ekosistem Sinema & Solusi Digital',
  brandName: 'Sinemus Indonesia',
  legalName: 'PT Sineas Muslim Indonesia',
  alternateName: ['Sinemus', 'Sinemus Indonesia', 'Sineas Muslim Indonesia'],
  description:
    'Sinemus Indonesia adalah ekosistem sinema terintegrasi yang menghadirkan layanan produksi film, platform penayangan digital, akademi, dan komunitas sinema.',
  productionUrl: 'https://sinemus.id',
  stagingShareUrl: 'https://sinemus.vercel.app',
  url: process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`
    : 'https://sinemus.vercel.app',
  ogImage: '/share/sinemus-indonesia.PNG',
  links: {
    instagram: 'https://www.instagram.com/sineasmuslim.id',
    tiktok: 'https://www.tiktok.com/@sineasmuslimindonesia',
    youtube: 'https://youtube.com/@sineasmuslim_id',
  },
  contact: {
    email: 'sineasmuslimindonesia@gmail.com',
    phone: '+62 895-2602-0145',
    address: 'Bandung, Indonesia',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },
};
