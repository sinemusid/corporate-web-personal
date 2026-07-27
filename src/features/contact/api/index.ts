import { MOCK_JOIN_MISSION } from '../constants/join-mission.mock';
import { MOCK_CONTACT_COMPANY } from '../constants/contact-company.mock';
import { mapJoinMission, mapContactCompany } from './data-mapper';
import { ContactFormData } from '../types';

export async function fetchJoinMission() {
  return mapJoinMission(MOCK_JOIN_MISSION);
}

export async function fetchContactCompany() {
  return mapContactCompany(MOCK_CONTACT_COMPANY);
}

export async function submitContactForm(payload: ContactFormData): Promise<boolean> {
  // Simulate server API latency
  await new Promise((res) => setTimeout(res, 800));
  if (!payload.email || !payload.name) {
    throw new Error('Name and email are required');
  }
  return true;
}
