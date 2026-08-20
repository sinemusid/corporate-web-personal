// 1. About Company Overview
export interface AboutCompanyOverviewData {
  heading: string;
  subheading: string;
}

// 2. Vision, Mission & Value
export interface SocialChannelData {
  name: string;
  label: string;
  href: string;
  type: 'website' | 'instagram' | 'youtube' | 'twitter' | 'linkedin' | 'tiktok';
}

export interface ValueItemData {
  title: string;
  description: string;
}

export interface VisionMissionValueData {
  heading: string;
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missions: string[];
  valuesTitle: string;
  values: ValueItemData[];
  socialChannelsTitle: string;
  socials: SocialChannelData[];
}

// 3. Project Stats (Number Project)
export interface ProjectStatItem {
  label: string;
  value: string;
  description: string;
}

export interface ProjectStatsData {
  heading: string;
  subheading: string;
  stats: ProjectStatItem[];
}

// 4. Milestones Timeline
export interface MilestoneItemData {
  id: string;
  year: string;
  title: string;
}

export interface MilestonesTimelineData {
  heading: string;
  subheading: string;
  milestones: MilestoneItemData[];
}

// 5. Career Roadmap
export interface RoadmapStepData {
  step: string;
  title: string;
}

export interface CareerRoadmapData {
  heading: string;
  subheading: string;
  steps: RoadmapStepData[];
}

// 6. Design Structure
export interface StructureNodeData {
  id: string;
  role: string;
  title: string;
  description?: string;
  parentRole?: string;
  level?: 1 | 2 | 3 | 4;
  badge?: string;
  focusAreas?: string[];
  icon?: string;
}

export interface DesignStructureData {
  heading: string;
  subheading?: string;
  nodes: StructureNodeData[];
}

// 7. Our Team / Leadership
export interface TeamMemberSocialData {
  type: 'instagram' | 'email';
  href: string;
  label?: string;
}

export interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  bio: string;
  badge?: string;
  skills?: string[];
  socials?: TeamMemberSocialData[];
}

export interface LeadershipData {
  heading: string;
  subheading: string;
  members: TeamMemberData[];
}

// 8. Portfolio (Karya Kami)
export interface PortfolioItemData {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  description: string;
  director?: string;
  duration?: string;
  synopsis?: string;
  tags?: string[];
  trailerUrl?: string;
}


export interface PortfolioData {
  heading: string;
  subheading: string;
  items: PortfolioItemData[];
}

// State interface for About Us hook
export interface AboutUsContentState {
  companyOverview: AboutCompanyOverviewData | null;
  visionMissionValue: VisionMissionValueData | null;
  projectStats: ProjectStatsData | null;
  milestonesTimeline: MilestonesTimelineData | null;
  careerRoadmap: CareerRoadmapData | null;
  designStructure: DesignStructureData | null;
  leadership: LeadershipData | null;
  portfolio: PortfolioData | null;
  isLoading: boolean;
}
