import { BaseEntity } from '@/types';

export type UnitSlug = 'screen' | 'production' | 'academy' | 'community';

export interface BusinessUnit extends BaseEntity {
  slug: UnitSlug;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  bannerUrl?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}
