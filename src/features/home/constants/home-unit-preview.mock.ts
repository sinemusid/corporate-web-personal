import { HomeUnitPreviewData } from '../types';

export const MOCK_HOME_UNIT_PREVIEW: HomeUnitPreviewData = {
  heading: 'Satu Ekosistem Terintegrasi',
  subheading:
    'Kami mengintegrasikan kreativitas, teknologi, dan nilai-nilai luhur untuk menghadirkan karya perfilman yang berdampak melalui beberapa unit:',
  units: [
    {
      id: 'unit-production',
      slug: 'production',
      title: 'Production Unit',
      subtitle: 'Film Feature & Studio Content Studio',
      description: 'Mesin kreatif yang berfokus pada penciptaan karya visual berkualitas tinggi',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Feature Film Production', 'Commercial & Music Video', 'Post-Production & VFX'],
    },
    {
      id: 'unit-screen',
      slug: 'screen',
      title: 'Screen Unit',
      subtitle: 'Exhibition & Digital Screening Platform',
      description: 'Solusi untuk memastikan setiap karya sampai ke tangan penonton yang tepat.',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Private Screening Hub', 'Digital VOD Platform', 'Film Festival Partner'],
    },
    {
      id: 'unit-academy',
      slug: 'academy',
      title: 'Academy Unit',
      subtitle: 'Creative Talent & Technical Education',
      description: 'Pusat pengembangan skill perfilman untuk mencetak generasi sineas muslim yang profesional',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Masterclass Director', 'Screenwriting Lab', 'Technical Workshop'],
    },
    {
      id: 'unit-community',
      slug: 'community',
      title: 'Community Unit',
      subtitle: 'Filmmakers Network & Arts Collective',
      description: 'Wadah berkumpulnya para sineas dan penggiat dakwah visual',
      bannerUrl: '/images/khoas_poster.png',
      features: ['Community Screening', 'Filmmaker Gathering', 'Funding Lab Grants'],
    },
  ],
};
