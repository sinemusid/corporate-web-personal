import { MOCK_SERVICES } from '../constants/services-mock';
import { mapServices } from './data-mapper';

export async function fetchServices() {
  return mapServices(MOCK_SERVICES);
}
