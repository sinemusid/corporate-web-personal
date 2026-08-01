export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
  description?: string;
  subItems?: NavItem[];
}

export interface ApiResponse<T> {
  data: T | null;
  message?: string;
  success: boolean;
  error?: string;
}
