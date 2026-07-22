import { PartnerItem } from '../types';

export function mapPartners(data: unknown[]): PartnerItem[] {
  return data as PartnerItem[];
}
