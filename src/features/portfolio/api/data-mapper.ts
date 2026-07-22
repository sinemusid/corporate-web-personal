import { PortfolioItem } from '../types';

export function mapPortfolioItems(data: unknown[]): PortfolioItem[] {
  return data as PortfolioItem[];
}
