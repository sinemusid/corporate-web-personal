'use client';

import { useState, useEffect } from 'react';
import {
  AboutCompanyOverviewData,
  VisionMissionValueData,
  ProjectStatsData,
  MilestonesTimelineData,
  CareerRoadmapData,
  DesignStructureData,
  OurTeamData,
  ServicesData,
  PortfolioData,
} from '../types';
import {
  fetchAboutCompanyOverview,
  fetchVisionMissionValue,
  fetchProjectStats,
  fetchMilestonesTimeline,
  fetchCareerRoadmap,
  fetchDesignStructure,
  fetchOurTeam,
  fetchServices,
  fetchPortfolio,
} from '../api';

export function useAboutUs() {
  const [companyOverview, setCompanyOverview] = useState<AboutCompanyOverviewData | null>(null);
  const [visionMissionValue, setVisionMissionValue] = useState<VisionMissionValueData | null>(null);
  const [projectStats, setProjectStats] = useState<ProjectStatsData | null>(null);
  const [milestonesTimeline, setMilestonesTimeline] = useState<MilestonesTimelineData | null>(null);
  const [careerRoadmap, setCareerRoadmap] = useState<CareerRoadmapData | null>(null);
  const [designStructure, setDesignStructure] = useState<DesignStructureData | null>(null);
  const [ourTeam, setOurTeam] = useState<OurTeamData | null>(null);
  const [services, setServices] = useState<ServicesData | null>(null);
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
          teamData,
          servicesData,
          portfolioData,
        ] = await Promise.all([
          fetchAboutCompanyOverview(),
          fetchVisionMissionValue(),
          fetchProjectStats(),
          fetchMilestonesTimeline(),
          fetchCareerRoadmap(),
          fetchDesignStructure(),
          fetchOurTeam(),
          fetchServices(),
          fetchPortfolio(),
        ]);

        setCompanyOverview(overviewData);
        setVisionMissionValue(vmvData);
        setProjectStats(statsData);
        setMilestonesTimeline(milestonesData);
        setCareerRoadmap(roadmapData);
        setDesignStructure(structureData);
        setOurTeam(teamData);
        setServices(servicesData);
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
    ourTeam,
    services,
    portfolio,
    isLoading,
  };
}
