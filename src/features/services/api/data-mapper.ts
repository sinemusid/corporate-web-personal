import { ServiceItem } from '../types';

export function mapServices(data: unknown[]): ServiceItem[] {
  return data as ServiceItem[];
}
