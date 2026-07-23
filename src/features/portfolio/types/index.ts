import { BaseEntity } from '@/types';

export type PortfolioCategory = 'all' | 'Film' | 'Series' | 'Documentary' | string;

export interface PortfolioItem extends BaseEntity {
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  year: string;
  director: string;
  thumbnailUrl: string;
  synopsis: string;
  unitSlug: string;
}

