import { HomeHeroData, HomeWhoWeAreData, HomeUnitPreviewData, HomeServicesData } from '../types';

export function mapHomeHero(raw: HomeHeroData): HomeHeroData {
  return {
    title: raw.title || '',
    tagline: raw.tagline || '',
    backgroundImage: raw.backgroundImage || '',
    backgroundVideo: raw.backgroundVideo || undefined,
  };
}

export function mapHomeWhoWeAre(raw: HomeWhoWeAreData): HomeWhoWeAreData {
  return {
    title: raw.title || '',
    heading: raw.heading || '',
    subheading: raw.subheading || '',
    description: raw.description || '',
    ctaText: raw.ctaText || '',
    ctaHref: raw.ctaHref || '',
    backgroundImage: raw.backgroundImage || '',
    backgroundVideo: raw.backgroundVideo || undefined,
  };
}

export function mapHomeUnitPreview(raw: HomeUnitPreviewData): HomeUnitPreviewData {
  return {
    heading: raw.heading || '',
    subheading: raw.subheading || '',
    units: raw.units || [],
  };
}

export function mapHomeServices(raw: HomeServicesData): HomeServicesData {
  return {
    heading: raw.heading || '',
    subheading: raw.subheading || '',
    description: raw.description || '',
    services: raw.services || [],
  };
}

