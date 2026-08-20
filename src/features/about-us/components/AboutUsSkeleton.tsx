import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 🏢 Company Overview & Vision Mission Skeleton
 */
export const AboutCompanyOverviewSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Overview Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <Skeleton className="h-10 sm:h-12 w-3/4 bg-slate-200/90 rounded-xl" />
          <Skeleton className="h-28 w-full bg-slate-200/60 rounded-xl" />
        </div>
        <div className="lg:col-span-6">
          <Skeleton className="h-64 sm:h-80 w-full bg-slate-200/70 rounded-3xl" />
        </div>
      </div>

      {/* Vision Mission Values Block */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-4">
            <Skeleton className="h-8 w-8 bg-slate-200/80 rounded-xl" />
            <Skeleton className="h-6 w-1/2 bg-slate-200/90 rounded-lg" />
            <Skeleton className="h-20 w-full bg-slate-200/60 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 📊 Project Stats Metric Banner Skeleton
 */
export const ProjectStatsSkeleton: React.FC = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/10 border border-slate-200/60">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center text-center space-y-2">
            <Skeleton className="h-10 sm:h-12 w-20 bg-slate-200/90 rounded-lg" />
            <Skeleton className="h-4 w-28 bg-slate-200/60 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * ⏳ Milestones Timeline Horizontal Skeleton
 */
export const MilestonesTimelineSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-2/3 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-1/2 bg-slate-200/60 rounded" />
      </div>
      <div className="flex gap-4 overflow-hidden py-4 justify-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-60 flex-shrink-0 space-y-4 flex flex-col items-center">
            <Skeleton className="h-6 w-16 bg-slate-200/80 rounded-full" />
            <Skeleton className="h-5 w-5 bg-slate-200/90 rounded-full" />
            <Skeleton className="h-28 w-full bg-slate-200/70 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🗺️ Career Roadmap Horizontal Skeleton
 */
export const CareerRoadmapSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-2/3 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-1/2 bg-slate-200/60 rounded" />
      </div>
      <div className="flex gap-4 overflow-hidden py-4 justify-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-60 flex-shrink-0 space-y-4 flex flex-col items-center">
            <Skeleton className="h-6 w-20 bg-slate-200/80 rounded-full" />
            <Skeleton className="h-5 w-5 bg-slate-200/90 rounded-full" />
            <Skeleton className="h-28 w-full bg-slate-200/70 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🏛️ Design / Org Structure Tree Skeleton
 */
export const DesignStructureSkeleton: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-3/4 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-1/2 bg-slate-200/60 rounded" />
      </div>

      {/* CEO node */}
      <div className="flex justify-center">
        <Skeleton className="h-24 w-64 bg-slate-200/80 rounded-2xl" />
      </div>

      {/* C-Suite row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-20 w-full bg-slate-200/70 rounded-2xl" />
            <Skeleton className="h-16 w-full bg-slate-200/50 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 👔 Leadership / Founder Section Skeleton
 */
export const LeadershipSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-1/2 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-2/3 bg-slate-200/60 rounded" />
      </div>
      <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <Skeleton className="w-full max-w-xs sm:max-w-sm aspect-[4/5] bg-slate-200/80 rounded-2xl" />
        </div>
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-5 w-24 bg-slate-200/70 rounded" />
            <Skeleton className="h-8 sm:h-10 w-3/4 bg-slate-200/90 rounded-xl" />
          </div>
          <Skeleton className="h-24 w-full bg-slate-200/60 rounded-xl" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32 bg-slate-200/70 rounded-xl" />
            <Skeleton className="h-10 w-32 bg-slate-200/70 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 🎨 Portfolio Showcase Grid Skeleton
 */
export const PortfolioGridSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-1/2 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-2/3 bg-slate-200/60 rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white p-4 space-y-3">
            <Skeleton className="h-48 w-full bg-slate-200/80 rounded-xl" />
            <Skeleton className="h-6 w-3/4 bg-slate-200/90 rounded-lg" />
            <Skeleton className="h-4 w-1/2 bg-slate-200/60 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🏢 Composite About Us Page Skeleton
 */
export const AboutUsSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AboutCompanyOverviewSkeleton />
      <ProjectStatsSkeleton />
      <MilestonesTimelineSkeleton />
      <CareerRoadmapSkeleton />
      <DesignStructureSkeleton />
      <LeadershipSkeleton />
      <PortfolioGridSkeleton />
    </div>
  );
};
