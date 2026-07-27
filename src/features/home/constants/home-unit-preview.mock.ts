import { HomeUnitPreviewData } from '../types';

export const MOCK_HOME_UNIT_PREVIEW: HomeUnitPreviewData = {
  heading: 'SATU EKOSISTEM TERINTEGRASI',
  subheading:
    'Kami mengintegrasikan kreativitas, teknologi, dan nilai-nilai luhur untuk menghadirkan karya perfilman yang berdampak melalui beberapa unit:',
  units: [
    {
      id: 'unit-production',
      slug: 'production',
      title: 'SINEMUS PRODUCTION',
      subtitle: 'Film Feature & Studio Content Studio',
      description: 'Rumah produksi film layar lebar, dokumenter, dan konten audio-visual berstandar internasional.',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Feature Film Production', 'Commercial & Music Video', 'Post-Production & VFX'],
    },
    {
      id: 'unit-screen',
      slug: 'screen',
      title: 'SINEMUS SCREEN',
      subtitle: 'Exhibition & Digital Screening Platform',
      description: 'Jaringan eksibisi sinema, pemutaran independen, dan platform penayangan digital.',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Private Screening Hub', 'Digital VOD Platform', 'Film Festival Partner'],
    },
    {
      id: 'unit-academy',
      slug: 'academy',
      title: 'SINEMUS ACADEMY',
      subtitle: 'Creative Talent & Technical Education',
      description: 'Inkubator dan lembaga pelatihan intensif untuk mencetak talenta perfilman masa depan.',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Masterclass Director', 'Screenwriting Lab', 'Technical Workshop'],
    },
    {
      id: 'unit-community',
      slug: 'community',
      title: 'SINEMUS COMMUNITY',
      subtitle: 'Filmmakers Network & Arts Collective',
      description: 'Wadah jejaring sineas independen, apresiasi film, dan forum apresiasi karya.',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Community Screening', 'Filmmaker Gathering', 'Funding Lab Grants'],
    },
  ],
};
