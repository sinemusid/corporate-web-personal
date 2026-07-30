import { DesignStructureData, StructureNodeData } from '../../../types';

export interface CSuiteColumnData {
  head?: StructureNodeData;
  staff?: StructureNodeData;
}

export interface UseDesignStructureDataReturn {
  heading: string;
  subheading: string;
  ceoNode?: StructureNodeData;
  cSuiteColumns: CSuiteColumnData[];
  pudNode?: StructureNodeData;
  ucoNode?: StructureNodeData;
  usNode?: StructureNodeData;
}

export const useDesignStructureData = (data: DesignStructureData): UseDesignStructureDataReturn => {
  const ceoNode = data.nodes.find((n) => n.role === 'CEO') || data.nodes[0];

  const caoNode = data.nodes.find((n) => n.role === 'CAO');
  const cfoNode = data.nodes.find((n) => n.role === 'CFO');
  const ctoNode = data.nodes.find((n) => n.role === 'CTO');
  const cmoNode = data.nodes.find((n) => n.role === 'CMO');

  const staffCaoNode = data.nodes.find((n) => n.role === 'Staff CAO') || {
    title: 'STAFF CAO',
    description: 'Operations & Legal Support',
  } as StructureNodeData;

  const staffCfoNode = data.nodes.find((n) => n.role === 'Staff CFO') || {
    title: 'STAFF CFO',
    description: 'Accounting & Financial Tracking',
  } as StructureNodeData;

  const staffCtoNode = data.nodes.find((n) => n.role === 'Staff CTO') || {
    title: 'STAFF CTO',
    description: 'System Maintenance & Development',
  } as StructureNodeData;

  const staffCmoNode = data.nodes.find((n) => n.role === 'Staff CMO') || {
    title: 'STAFF CMO',
    description: 'Social Media, Marketing & Community',
  } as StructureNodeData;

  const pudNode = data.nodes.find((n) => n.role === 'PUD' || n.title.includes('Production Unit Director')) || {
    title: 'PRODUCTION UNIT DIRECTOR',
    description: 'Unit Leadership',
  } as StructureNodeData;

  const ucoNode = data.nodes.find((n) => n.role === 'UCO' || n.title.includes('Unit Chief Officer')) || {
    title: 'UNIT CHIEF OFFICER',
    description: 'Operational Lead',
  } as StructureNodeData;

  const usNode = data.nodes.find((n) => n.role === 'Unit Staff' || n.title.includes('Unit Staff')) || {
    title: 'UNIT STAFF',
    description: 'Field Execution',
  } as StructureNodeData;

  const cSuiteColumns: CSuiteColumnData[] = [
    { head: caoNode, staff: staffCaoNode },
    { head: cfoNode, staff: staffCfoNode },
    { head: ctoNode, staff: staffCtoNode },
    { head: cmoNode, staff: staffCmoNode },
  ];

  return {
    heading: data.heading || 'STRUKTUR ORGANISASI PERUSAHAAN',
    subheading: data.subheading || 'Tata kelola kepemimpinan dan manajerial Sinemus Indonesia.',
    ceoNode,
    cSuiteColumns,
    pudNode,
    ucoNode,
    usNode,
  };
};
