import { BaseEntity } from '@/types';

export interface CompanyInfo extends BaseEntity {
  name: string;
  tagline: string;
  shortDescription: string;
  fullAbout: string;
  vision: string;
  mission: string[];
  values: {
    title: string;
    description: string;
  }[];
}

export interface CompanyStat {
  label: string;
  value: string;
  description: string;
}

export interface MilestoneItem extends BaseEntity {
  year: string;
  title: string;
  description: string;
}
