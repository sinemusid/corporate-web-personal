import { MOCK_COMPANY_INFO, MOCK_COMPANY_STATS, MOCK_MILESTONES } from '../constants/company-mock';
import { mapCompanyInfo, mapCompanyStats, mapMilestones } from './data-mapper';

export async function fetchCompanyInfo() {
  return mapCompanyInfo(MOCK_COMPANY_INFO);
}

export async function fetchCompanyStats() {
  return mapCompanyStats(MOCK_COMPANY_STATS);
}

export async function fetchMilestones() {
  return mapMilestones(MOCK_MILESTONES);
}
