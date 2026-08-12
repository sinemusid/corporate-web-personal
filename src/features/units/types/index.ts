import { BaseEntity } from '@/types';

export type UnitSlug = 'screen' | 'production' | 'academy' | 'community';

export interface UnitCapability {
  title: string;
  description: string;
  tags?: string[];
}

export interface UnitProject {
  title: string;
  category: string;
  year: string;
  imageUrl?: string;
  highlight: string;
}

export interface UnitWorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface UnitStat {
  label: string;
  value: string;
}

export interface BusinessUnit extends BaseEntity {
  slug: UnitSlug;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  about: string;
  features: string[];
  bannerUrl?: string;
  ogImage?: string;
  externalUrl?: string;
  stats?: UnitStat[];
  capabilities: UnitCapability[];
  featuredProjects: UnitProject[];
  workflow: UnitWorkflowStep[];
}


