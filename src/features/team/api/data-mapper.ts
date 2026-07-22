import { TeamMember, StructureNode } from '../types';

export function mapTeamMembers(data: unknown[]): TeamMember[] {
  return data as TeamMember[];
}

export function mapDesignStructure(data: unknown[]): StructureNode[] {
  return data as StructureNode[];
}
