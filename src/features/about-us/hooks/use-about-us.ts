'use client';

import { useState, useEffect } from 'react';
import {
  AboutCompanyOverviewData,
  VisionMissionValueData,
  ProjectStatsData,
  MilestonesTimelineData,
  CareerRoadmapData,
  DesignStructureData,
  LeadershipData,
  PortfolioData,
} from '../types';
import {
  fetchAboutCompanyOverview,
  fetchVisionMissionValue,
  fetchProjectStats,
  fetchMilestonesTimeline,
  fetchCareerRoadmap,
  fetchDesignStructure,
  fetchLeadership,
  fetchPortfolio,
} from '../api';

export function useAboutUs() {
  const [companyOverview, setCompanyOverview] = useState<AboutCompanyOverviewData | null>(null);
  const [visionMissionValue, setVisionMissionValue] = useState<VisionMissionValueData | null>(null);
  const [projectStats, setProjectStats] = useState<ProjectStatsData | null>(null);
  const [milestonesTimeline, setMilestonesTimeline] = useState<MilestonesTimelineData | null>(null);
  const [careerRoadmap, setCareerRoadmap] = useState<CareerRoadmapData | null>(null);
  const [designStructure, setDesignStructure] = useState<DesignStructureData | null>(null);
  const [leadership, setLeadership] = useState<LeadershipData | null>(null);
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadAllData() {
      try {
        setIsLoading(true);
        const [
          overviewData,
          vmvData,
          statsData,
          milestonesData,
          roadmapData,
          structureData,
          leadershipData,
          portfolioData,
        ] = await Promise.all([
          fetchAboutCompanyOverview(),
          fetchVisionMissionValue(),
          fetchProjectStats(),
          fetchMilestonesTimeline(),
          fetchCareerRoadmap(),
          fetchDesignStructure(),
          fetchLeadership(),
          fetchPortfolio(),
        ]);

        setCompanyOverview(overviewData);
        setVisionMissionValue(vmvData);
        setProjectStats(statsData);
        setMilestonesTimeline(milestonesData);
        setCareerRoadmap(roadmapData);
        setDesignStructure(structureData);
        setLeadership(leadershipData);
        setPortfolio(portfolioData);
      } catch (err) {
        console.error('Failed loading about-us content:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadAllData();
  }, []);

  return {
    companyOverview,
    visionMissionValue,
    projectStats,
    milestonesTimeline,
    careerRoadmap,
    designStructure,
    leadership,
    portfolio,
    isLoading,
  };
}
