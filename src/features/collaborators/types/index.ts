export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  logoUrl: string;
  description?: string;
  websiteUrl?: string;
}

export type CollaboratorItemData = PartnerItem;

export interface CollaboratorPartnersData {
  heading: string;
  subheading: string;
  collaboratorsHeading?: string;
  collaboratorsSubheading?: string;
  vendorsHeading?: string;
  vendorsSubheading?: string;
  collaborators: PartnerItem[];
  vendors: PartnerItem[];
}

export interface CollaboratorContentState {
  partnersData: CollaboratorPartnersData | null;
  isLoading: boolean;
}

