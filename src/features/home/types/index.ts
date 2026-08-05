export interface HomeHeroData {
  title: string;
  tagline: string;
  backgroundImage: string;
}

export interface HomeWhoWeAreData {
  title: string;
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface HomeUnitItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  bannerUrl: string;
  features: string[];
}

export interface HomeUnitPreviewData {
  heading: string;
  subheading: string;
  units: HomeUnitItem[];
}

export interface HomeServiceItem {
  id: string;
  icon?: string;
  title: string;
  description: string;
  features: string[];
}

export interface HomeServicesData {
  heading: string;
  subheading: string;
  description?: string;
  services: HomeServiceItem[];
}

export interface HomeContentState {
  hero: HomeHeroData | null;
  whoWeAre: HomeWhoWeAreData | null;
  unitPreview: HomeUnitPreviewData | null;
  isLoading: boolean;
}

