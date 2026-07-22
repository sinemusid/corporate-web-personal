import { CompanyInfo, CompanyStat, MilestoneItem } from '../types';

export function mapCompanyInfo(data: unknown): CompanyInfo {
  return data as CompanyInfo;
}

export function mapCompanyStats(data: unknown[]): CompanyStat[] {
  return data as CompanyStat[];
}

export function mapMilestones(data: unknown[]): MilestoneItem[] {
  return data as MilestoneItem[];
}
