import { JoinMissionData, ContactCompanyData } from '../types';

export function mapJoinMission(raw: JoinMissionData): JoinMissionData {
  return { ...raw };
}

export function mapContactCompany(raw: ContactCompanyData): ContactCompanyData {
  return { ...raw };
}
