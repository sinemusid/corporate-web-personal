import { useMemo, useState } from 'react';
import { OurTeamData } from '../../../types';

const EXECUTIVE_ROLES = ['CEO', 'CAO', 'CFO', 'CTO', 'CMO'];
const STAFF_DIREKSI_ROLES = ['STAFF CAO', 'STAFF CFO', 'STAFF CTO', 'STAFF CMO'];
const INITIAL_LIMIT = 4;

export function useOurTeamData(data: OurTeamData) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('ALL');
  
  // State limit untuk masing-masing section (default: 4)
  const [execLimit, setExecLimit] = useState<number>(INITIAL_LIMIT);
  const [staffDirLimit, setStaffDirLimit] = useState<number>(INITIAL_LIMIT);
  const [opLimit, setOpLimit] = useState<number>(INITIAL_LIMIT);

  // 1. Executive Leadership & Direksi (CEO, CAO, CFO, CTO, CMO)
  const executiveMembers = useMemo(() => {
    return data.members.filter((member) => {
      const roleUpper = member.role.toUpperCase();
      return EXECUTIVE_ROLES.some(
        (execRole) => roleUpper.includes(`(${execRole})`) || roleUpper === execRole
      );
    });
  }, [data.members]);

  const visibleExecutiveMembers = useMemo(() => {
    return executiveMembers.slice(0, execLimit);
  }, [executiveMembers, execLimit]);

  const hasMoreExecutive = executiveMembers.length > execLimit;

  // 2. Staff Direksi (Staff CAO, Staff CFO, Staff CTO, Staff CMO)
  const staffDireksiMembers = useMemo(() => {
    return data.members.filter((member) => {
      const roleUpper = member.role.toUpperCase();
      return STAFF_DIREKSI_ROLES.some((staffRole) => roleUpper.includes(staffRole));
    });
  }, [data.members]);

  const visibleStaffDireksiMembers = useMemo(() => {
    return staffDireksiMembers.slice(0, staffDirLimit);
  }, [staffDireksiMembers, staffDirLimit]);

  const hasMoreStaffDireksi = staffDireksiMembers.length > staffDirLimit;

  // 3. Operational & Departemen Tim (Sisa Anggota Operasional)
  const operationalStaffMembers = useMemo(() => {
    return data.members.filter((member) => {
      const roleUpper = member.role.toUpperCase();
      const isExec = EXECUTIVE_ROLES.some(
        (execRole) => roleUpper.includes(`(${execRole})`) || roleUpper === execRole
      );
      const isStaffDir = STAFF_DIREKSI_ROLES.some((staffRole) => roleUpper.includes(staffRole));
      return !isExec && !isStaffDir;
    });
  }, [data.members]);

  const departments = useMemo(() => {
    const deptSet = new Set<string>();
    operationalStaffMembers.forEach((member) => {
      if (member.department && member.department.toUpperCase() !== 'EXECUTIVE') {
        deptSet.add(member.department);
      }
    });
    return Array.from(deptSet);
  }, [operationalStaffMembers]);

  const filteredOperationalMembers = useMemo(() => {
    if (selectedDepartment === 'ALL') return operationalStaffMembers;
    return operationalStaffMembers.filter(
      (member) => member.department?.toUpperCase() === selectedDepartment.toUpperCase()
    );
  }, [operationalStaffMembers, selectedDepartment]);

  const visibleOperationalMembers = useMemo(() => {
    return filteredOperationalMembers.slice(0, opLimit);
  }, [filteredOperationalMembers, opLimit]);

  const hasMoreOperational = filteredOperationalMembers.length > opLimit;

  return {
    heading: data.heading,
    subheading: data.subheading,
    // Executive
    executiveMembers,
    visibleExecutiveMembers,
    hasMoreExecutive,
    execLimit,
    totalExecutiveCount: executiveMembers.length,
    handleLoadMoreExecutive: () => setExecLimit((prev) => prev + 4),
    handleShowLessExecutive: () => setExecLimit(INITIAL_LIMIT),

    // Staff Direksi
    staffDireksiMembers,
    visibleStaffDireksiMembers,
    hasMoreStaffDireksi,
    staffDirLimit,
    totalStaffDireksiCount: staffDireksiMembers.length,
    handleLoadMoreStaffDireksi: () => setStaffDirLimit((prev) => prev + 4),
    handleShowLessStaffDireksi: () => setStaffDirLimit(INITIAL_LIMIT),

    // Operational Staff
    operationalStaffMembers: filteredOperationalMembers,
    visibleOperationalMembers,
    hasMoreOperational,
    opLimit,
    totalOperationalCount: filteredOperationalMembers.length,
    departments,
    selectedDepartment,
    setSelectedDepartment: (dept: string) => {
      setSelectedDepartment(dept);
      setOpLimit(INITIAL_LIMIT);
    },
    handleLoadMoreOperational: () => setOpLimit((prev) => prev + 4),
    handleShowLessOperational: () => setOpLimit(INITIAL_LIMIT),
  };
}
