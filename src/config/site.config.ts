export const siteConfig = {
  name: 'Sineas Muslim Indonesia (Sinemus)',
  brandName: 'Sinemus Indonesia',
  legalName: 'PT Sineas Muslim Indonesia',
  alternateName: ['Sinemus', 'Sinemus Indonesia'],
  description:
    'Sineas Muslim Indonesia (Sinemus) adalah platform ekosistem sinema dan penyedia solusi teknologi terintegrasi. Menghadirkan layanan produksi film, event screening komunitas, hingga solusi digital terpercaya di Indonesia.',
  productionUrl: 'https://sinemus.id',
  url: process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`
    : process.env.VERCEL
      ? 'https://sinemus.vercel.app'
      : 'https://sinemus.id',
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

