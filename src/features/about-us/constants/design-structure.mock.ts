import { DesignStructureData } from '../types';

export const MOCK_DESIGN_STRUCTURE: DesignStructureData = {
  heading: 'Struktur Organisasi Perusahaan',
  nodes: [
    // Level 1: CEO
    {
      id: 'n-ceo',
      role: 'CEO',
      title: 'Chief Executive Officer',
      description: 'Executive Direction & Vision — Strategic Planning, Leadership, Big-picture Expansion',
      level: 1,
    },
    // Level 2: C-Suite Officers
    {
      id: 'n-cao',
      role: 'CAO',
      title: 'Chief Administrative Officer',
      description: 'Admin & Ops — Operations, Legal Compliance & HR Governance',
      parentRole: 'CEO',
      level: 2,
    },
    {
      id: 'n-cfo',
      role: 'CFO',
      title: 'Chief Financial Officer',
      description: 'Finance & Budget — Capital Allocation & Financial Strategy',
      parentRole: 'CEO',
      level: 2,
    },
    {
      id: 'n-cto',
      role: 'CTO',
      title: 'Chief Technology Officer',
      description: 'Tech & Architecture — Streaming Infrastructure & Digital Platform',
      parentRole: 'CEO',
      level: 2,
    },
    {
      id: 'n-cmo',
      role: 'CMO',
      title: 'Chief Marketing Officer',
      description: 'Brand & Growth — Marketing Campaign & User Acquisition',
      parentRole: 'CEO',
      level: 2,
    },
    // Level 3: Departmental Staff
    {
      id: 'n-staff-cao',
      role: 'Staff CAO',
      title: 'Staff CAO',
      description: 'Operations & Legal Support',
      parentRole: 'CAO',
      level: 3,
    },
    {
      id: 'n-staff-cfo',
      role: 'Staff CFO',
      title: 'Staff CFO',
      description: 'Accounting & Financial Tracking',
      parentRole: 'CFO',
      level: 3,
    },
    {
      id: 'n-staff-cto',
      role: 'Staff CTO',
      title: 'Staff CTO',
      description: 'System Maintenance & Development',
      parentRole: 'CTO',
      level: 3,
    },
    {
      id: 'n-staff-cmo',
      role: 'Staff CMO',
      title: 'Staff CMO',
      description: 'Social Media, Marketing & Community',
      parentRole: 'CMO',
      level: 3,
    },
    // Level 4: Special Unit (Production Division) under CTO stream
    {
      id: 'n-pud',
      role: 'PUD',
      title: 'Production Unit Director',
      description: 'Event & Live Coverage Director',
      parentRole: 'Staff CTO',
      level: 4,
    },
    {
      id: 'n-uco',
      role: 'UCO',
      title: 'Unit Chief Officer',
      description: 'Technical Lead & On-site Supervisor',
      parentRole: 'PUD',
      level: 4,
    },
    {
      id: 'n-us',
      role: 'Unit Staff',
      title: 'Unit Staff',
      description: 'Field Technicians, Operators, & Sound/Video Crew',
      parentRole: 'UCO',
      level: 4,
    },
  ],
};
