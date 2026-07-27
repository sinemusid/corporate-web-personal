export interface CollaboratorItemData {
  id: string;
  name: string;
  category: string;
  logoUrl?: string;
  description: string;
}

export interface CollaboratorPartnersData {
  heading: string;
  subheading: string;
  partners: CollaboratorItemData[];
}

export interface CollaboratorContentState {
  partnersData: CollaboratorPartnersData | null;
  isLoading: boolean;
}
