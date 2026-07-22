import { MOCK_TEAM_MEMBERS, MOCK_DESIGN_STRUCTURE } from '../constants/team-mock';
import { mapTeamMembers, mapDesignStructure } from './data-mapper';

export async function fetchTeamMembers() {
  return mapTeamMembers(MOCK_TEAM_MEMBERS);
}

export async function fetchDesignStructure() {
  return mapDesignStructure(MOCK_DESIGN_STRUCTURE);
}
