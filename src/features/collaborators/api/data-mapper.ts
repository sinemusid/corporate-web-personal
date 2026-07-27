import { CollaboratorPartnersData } from '../types';

export function mapCollaboratorPartners(raw: CollaboratorPartnersData): CollaboratorPartnersData {
  return {
    heading: raw.heading || '',
    subheading: raw.subheading || '',
    partners: raw.partners || [],
  };
}
