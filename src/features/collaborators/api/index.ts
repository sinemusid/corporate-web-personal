import { MOCK_COLLABORATOR_PARTNERS } from '../constants/collaborator-partners.mock';
import { mapCollaboratorPartners } from './data-mapper';

export async function fetchCollaboratorPartners() {
  return mapCollaboratorPartners(MOCK_COLLABORATOR_PARTNERS);
}
