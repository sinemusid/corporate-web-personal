import { MOCK_ABOUT_COMPANY_OVERVIEW } from '../constants/about-company-overview.mock';
import { MOCK_VISION_MISSION_VALUE } from '../constants/vision-mission-value.mock';
import { MOCK_PROJECT_STATS } from '../constants/project-stats.mock';
import { MOCK_MILESTONES_TIMELINE } from '../constants/milestones-timeline.mock';
import { MOCK_CAREER_ROADMAP } from '../constants/career-roadmap.mock';
import { MOCK_DESIGN_STRUCTURE } from '../constants/design-structure.mock';
import { MOCK_LEADERSHIP } from '../constants/leadership.mock';
import { MOCK_PORTFOLIO } from '../constants/portfolio.mock';
import {
  mapAboutCompanyOverview,
  mapVisionMissionValue,
  mapProjectStats,
  mapMilestonesTimeline,
  mapCareerRoadmap,
  mapDesignStructure,
  mapLeadership,
  mapPortfolio,
} from './data-mapper';

export async function fetchAboutCompanyOverview() {
  return mapAboutCompanyOverview(MOCK_ABOUT_COMPANY_OVERVIEW);
}

export async function fetchVisionMissionValue() {
  return mapVisionMissionValue(MOCK_VISION_MISSION_VALUE);
}

export async function fetchProjectStats() {
  return mapProjectStats(MOCK_PROJECT_STATS);
}

export async function fetchMilestonesTimeline() {
  return mapMilestonesTimeline(MOCK_MILESTONES_TIMELINE);
}

export async function fetchCareerRoadmap() {
  return mapCareerRoadmap(MOCK_CAREER_ROADMAP);
}

export async function fetchDesignStructure() {
  return mapDesignStructure(MOCK_DESIGN_STRUCTURE);
}

export async function fetchLeadership() {
  return mapLeadership(MOCK_LEADERSHIP);
}

export async function fetchPortfolio() {
  return mapPortfolio(MOCK_PORTFOLIO);
}
