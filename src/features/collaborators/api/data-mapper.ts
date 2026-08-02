import { CollaboratorPartnersData } from '../types';

export function mapCollaboratorPartners(raw: CollaboratorPartnersData): CollaboratorPartnersData {
  return {
    heading: raw.heading || '',
    subheading: raw.subheading || '',
    collaboratorsHeading: raw.collaboratorsHeading || 'Mitra & Kolaborator Strategis',
    collaboratorsSubheading: raw.collaboratorsSubheading || '',
    vendorsHeading: raw.vendorsHeading || 'Mitra Vendor & Produksi',
    vendorsSubheading: raw.vendorsSubheading || '',
    collaborators: raw.collaborators || [],
    vendors: raw.vendors || [],
  };
}

