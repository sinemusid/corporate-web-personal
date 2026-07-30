'use client';

import React from 'react';
import { OurTeamData } from '../types';
import {
  useOurTeamData,
  ExecutiveSection,
  StaffDireksiSection,
  StaffSection,
  TeamMemberCard,
} from './our-team';

interface OurTeamGridProps {
  data: OurTeamData;
}

export const OurTeamGrid: React.FC<OurTeamGridProps> = ({ data }) => {
  const {
    heading,
    subheading,
    executiveMembers,
    visibleExecutiveMembers,
    hasMoreExecutive,
    execLimit,
    totalExecutiveCount,
    handleLoadMoreExecutive,
    handleShowLessExecutive,
    staffDireksiMembers,
    visibleStaffDireksiMembers,
    hasMoreStaffDireksi,
    staffDirLimit,
    totalStaffDireksiCount,
    handleLoadMoreStaffDireksi,
    handleShowLessStaffDireksi,
    operationalStaffMembers,
    visibleOperationalMembers,
    hasMoreOperational,
    opLimit,
    totalOperationalCount,
    departments,
    selectedDepartment,
    setSelectedDepartment,
    handleLoadMoreOperational,
    handleShowLessOperational,
  } = useOurTeamData(data);

  const isFlatLayout =
    executiveMembers.length === 0 &&
    staffDireksiMembers.length === 0 &&
    operationalStaffMembers.length === 0;

  return (
    <section className="w-full bg-transparent py-16 sm:py-20 font-sans select-none px-4 sm:px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider font-heading leading-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl text-center leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* 3-Tier Hierarchical Layout */}
        {!isFlatLayout ? (
          <div className="space-y-12 sm:space-y-16">
            {/* 1. Executive Leadership & Direksi (CEO, CAO, CFO, CTO, CMO) */}
            <ExecutiveSection
              executives={executiveMembers}
              visibleExecutives={visibleExecutiveMembers}
              hasMore={hasMoreExecutive}
              limit={execLimit}
              totalCount={totalExecutiveCount}
              onLoadMore={handleLoadMoreExecutive}
              onShowLess={handleShowLessExecutive}
            />

            {/* 2. Staff Direksi (Staff CAO, Staff CFO, Staff CTO, Staff CMO) */}
            <StaffDireksiSection
              members={staffDireksiMembers}
              visibleMembers={visibleStaffDireksiMembers}
              hasMore={hasMoreStaffDireksi}
              limit={staffDirLimit}
              totalCount={totalStaffDireksiCount}
              onLoadMore={handleLoadMoreStaffDireksi}
              onShowLess={handleShowLessStaffDireksi}
            />

            {/* 3. Operational & Departemen Tim (Filterable & Show More) */}
            <StaffSection
              operationalMembers={operationalStaffMembers}
              visibleMembers={visibleOperationalMembers}
              hasMore={hasMoreOperational}
              visibleCount={opLimit}
              totalCount={totalOperationalCount}
              departments={departments}
              selectedDepartment={selectedDepartment}
              onSelectDepartment={setSelectedDepartment}
              onLoadMore={handleLoadMoreOperational}
              onShowLess={handleShowLessOperational}
            />
          </div>
        ) : (
          /* Fallback Single Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {data.members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
