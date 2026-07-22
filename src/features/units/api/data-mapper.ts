import { BusinessUnit } from '../types';

export function mapBusinessUnits(data: unknown[]): BusinessUnit[] {
  return data as BusinessUnit[];
}

export function mapSingleUnit(data: unknown): BusinessUnit | null {
  return (data as BusinessUnit) || null;
}
