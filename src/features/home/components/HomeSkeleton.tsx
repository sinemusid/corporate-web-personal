import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 🏠 Home Hero Section Skeleton
 */
export const HomeHeroSkeleton: React.FC = () => {
  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-[92vh] bg-slate-950 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center pt-20">
      <div className="space-y-6 max-w-2xl w-full flex flex-col items-center">
        {/* Title / Logo skeleton */}
        <Skeleton className="h-20 sm:h-28 md:h-36 w-64 sm:w-96 bg-slate-900/90 rounded-2xl" />
        <Skeleton className="h-6 w-48 sm:w-72 bg-slate-900/70 rounded-lg" />
      </div>
      <div className="absolute bottom-6 sm:bottom-8 flex flex-col items-center space-y-2">
        <Skeleton className="h-3 w-12 bg-slate-900/60 rounded" />
        <Skeleton className="h-4 w-4 bg-slate-900/60 rounded-full" />
      </div>
    </div>
  );
};

/**
 * 🏠 Home Who We Are Section Skeleton
 */
export const HomeWhoWeAreSkeleton: React.FC = () => {
  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-screen bg-slate-950 flex flex-col justify-end lg:justify-center overflow-hidden px-6 sm:px-12 pb-14 sm:pb-18 lg:pb-0">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="space-y-5 sm:space-y-6 max-w-xl sm:max-w-2xl text-left">
          <Skeleton className="h-10 sm:h-12 w-3/4 bg-slate-900/90 rounded-xl" />
          <Skeleton className="h-24 sm:h-28 w-full bg-slate-900/70 rounded-xl" />
          <Skeleton className="h-12 w-40 bg-slate-900/80 rounded-full" />
        </div>
      </div>
    </div>
  );
};

/**
 * 🏠 Home Unit Preview Section Skeleton (4-card grid)
 */
export const HomeUnitPreviewSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <Skeleton className="h-9 sm:h-11 w-2/3 mx-auto bg-slate-200/80 rounded-xl" />
        <Skeleton className="h-5 w-1/2 mx-auto bg-slate-200/60 rounded-lg" />
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl bg-slate-950/20 border border-slate-200/80 p-6 sm:p-7 space-y-4 min-h-90 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <Skeleton className="h-6 w-3/4 bg-slate-200/90 rounded-lg" />
              <Skeleton className="h-4 w-1/2 bg-slate-200/60 rounded" />
              <Skeleton className="h-16 w-full bg-slate-200/50 rounded-lg" />
            </div>
            <Skeleton className="h-5 w-24 bg-slate-200/70 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🏠 Home Services Section Skeleton (4-card grid)
 */
export const HomeServicesSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <Skeleton className="h-9 sm:h-11 w-2/3 mx-auto bg-slate-200/80 rounded-xl" />
        <Skeleton className="h-5 w-1/2 mx-auto bg-slate-200/60 rounded-lg" />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between space-y-6 h-full min-h-[260px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-6 bg-slate-200/80 rounded" />
                <Skeleton className="h-9 w-9 bg-slate-200/80 rounded-xl" />
              </div>
              <Skeleton className="h-6 w-3/4 bg-slate-200/90 rounded-lg" />
              <Skeleton className="h-12 w-full bg-slate-200/60 rounded-lg" />
            </div>
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
              <Skeleton className="h-6 w-16 bg-slate-200/60 rounded-md" />
              <Skeleton className="h-6 w-20 bg-slate-200/60 rounded-md" />
              <Skeleton className="h-6 w-14 bg-slate-200/60 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🏠 Composite Full Page Home Skeleton
 */
export const HomeSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HomeHeroSkeleton />
      <HomeWhoWeAreSkeleton />
      <HomeUnitPreviewSkeleton />
      <HomeServicesSkeleton />
    </div>
  );
};
