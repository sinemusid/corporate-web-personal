import { BaseEntity } from '@/types';

export interface ServiceItem extends BaseEntity {
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  unitSlug: string;
}
