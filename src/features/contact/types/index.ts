// 1. Join or Mission Section Data
export interface JoinMissionData {
  heading: string;
  subheading: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  benefits: string[];
}

// 2. Contact Company Section Data
export interface ContactInfoItem {
  type: 'email' | 'phone' | 'address';
  label: string;
  value: string;
}

export interface ContactCompanyLabels {
  heading: string;
  subheading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  submittingButton: string;
  successTitle: string;
  successMessage: string;
  sendAnotherButton: string;
}

export interface ContactCompanyData {
  info: ContactInfoItem[];
  labels: ContactCompanyLabels;
}

// Form payload interface
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// State interface for Contact hook
export interface ContactContentState {
  joinMission: JoinMissionData | null;
  contactCompany: ContactCompanyData | null;
  isLoading: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
  statusMessage: string | null;
}
