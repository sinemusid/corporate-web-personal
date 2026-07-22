import { MOCK_UNITS } from '../constants/units-mock';
import { mapBusinessUnits, mapSingleUnit } from './data-mapper';

export async function fetchUnits() {
  return mapBusinessUnits(MOCK_UNITS);
}

export async function fetchUnitBySlug(slug: string) {
  const found = MOCK_UNITS.find((u) => u.slug === slug);
  return mapSingleUnit(found);
}
