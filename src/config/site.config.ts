export const siteConfig = {
  name: 'Sinemus Indonesia',
  description: 'Sinemus Indonesia adalah platform ekosistem sinema dan solusi teknologi terintegrasi. Menghadirkan layanan streaming film, event screening komunitatis, hingga solusi digital terpercaya di Indonesia.',
  url: process.env.NEXT_PUBLIC_SITE_URL
    ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
        ? process.env.NEXT_PUBLIC_SITE_URL
        : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
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
