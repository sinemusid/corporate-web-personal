import { BaseEntity } from '@/types';

export interface TeamMember extends BaseEntity {
  name: string;
  role: string;
  department: string;
  avatarUrl: string;
  bio: string;
  linkedinUrl?: string;
}

export interface StructureNode {
  title: string;
  description: string;
  subNodes?: string[];
}
