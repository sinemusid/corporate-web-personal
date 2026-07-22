import { MOCK_ROADMAP, MOCK_CAREERS } from '../constants/career-mock';
import { mapRoadmap, mapCareers } from './data-mapper';

export async function fetchRoadmap() {
  return mapRoadmap(MOCK_ROADMAP);
}

export async function fetchCareers() {
  return mapCareers(MOCK_CAREERS);
}
