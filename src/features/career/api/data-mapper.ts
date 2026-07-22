import { RoadmapMilestone, CareerOpportunity } from '../types';

export function mapRoadmap(data: unknown[]): RoadmapMilestone[] {
  return data as RoadmapMilestone[];
}

export function mapCareers(data: unknown[]): CareerOpportunity[] {
  return data as CareerOpportunity[];
}
