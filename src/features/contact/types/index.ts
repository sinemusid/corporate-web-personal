import { BaseEntity } from '@/types';

export interface PartnerItem extends BaseEntity {
  name: string;
  category: string;
  logoUrl: string;
  websiteUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
