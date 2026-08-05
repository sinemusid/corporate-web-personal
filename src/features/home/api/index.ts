import { MOCK_HOME_HERO } from '../constants/home-hero.mock';
import { MOCK_HOME_WHO_WE_ARE } from '../constants/home-who-we-are.mock';
import { MOCK_HOME_UNIT_PREVIEW } from '../constants/home-unit-preview.mock';
import { MOCK_HOME_SERVICES } from '../constants/home-services.mock';
import { mapHomeHero, mapHomeWhoWeAre, mapHomeUnitPreview, mapHomeServices } from './data-mapper';

export async function fetchHomeHero() {
  return mapHomeHero(MOCK_HOME_HERO);
}

export async function fetchHomeWhoWeAre() {
  return mapHomeWhoWeAre(MOCK_HOME_WHO_WE_ARE);
}

export async function fetchHomeUnitPreview() {
  return mapHomeUnitPreview(MOCK_HOME_UNIT_PREVIEW);
}

export async function fetchHomeServices() {
  return mapHomeServices(MOCK_HOME_SERVICES);
}

