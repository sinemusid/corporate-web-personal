import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 🎬 Unit Detail Hero Banner Skeleton
 */
export const UnitHeroSkeleton: React.FC = () => {
  return (
    <div className="relative w-full min-h-[85vh] bg-slate-950 flex flex-col justify-end lg:justify-center px-6 sm:px-12 pt-28 pb-12 sm:pb-16 lg:pb-20">
      <div className="relative z-10 w-full space-y-6 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-16 bg-slate-800 rounded" />
          <Skeleton className="h-4 w-4 bg-slate-800 rounded-full" />
          <Skeleton className="h-4 w-20 bg-slate-800 rounded" />
          <Skeleton className="h-4 w-4 bg-slate-800 rounded-full" />
          <Skeleton className="h-4 w-24 bg-slate-800 rounded" />
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-3">
          <Skeleton className="h-10 sm:h-14 w-3/4 bg-slate-800 rounded-xl" />
          <Skeleton className="h-6 w-1/2 bg-slate-800/70 rounded-lg" />
        </div>

        {/* Description */}
        <Skeleton className="h-20 w-full max-w-2xl bg-slate-800/60 rounded-xl" />

        {/* Button */}
        <Skeleton className="h-11 w-44 bg-slate-800/90 rounded-xl" />
      </div>
    </div>
  );
};

/**
 * 🎬 Unit Capabilities Section Skeleton
 */
export const UnitCapabilitiesSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-2/3 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-1/2 bg-slate-200/60 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-4">
            <Skeleton className="h-10 w-10 bg-slate-200/80 rounded-xl" />
            <Skeleton className="h-6 w-3/4 bg-slate-200/90 rounded-lg" />
            <Skeleton className="h-16 w-full bg-slate-200/60 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🎬 Unit Stats Metric Banner Skeleton
 */
export const UnitStatsSkeleton: React.FC = () => {
  return (
    <div className="w-full py-10 px-6 sm:px-12 bg-blue-600/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2 flex flex-col items-center">
            <Skeleton className="h-10 w-24 bg-blue-200/80 rounded-lg" />
            <Skeleton className="h-4 w-32 bg-blue-200/60 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🎬 Unit Featured Projects Section Skeleton
 */
export const UnitProjectsSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-1/2 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-2/3 bg-slate-200/60 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-4">
            <Skeleton className="h-48 w-full bg-slate-200/80 rounded-xl" />
            <Skeleton className="h-6 w-3/4 bg-slate-200/90 rounded-lg" />
            <Skeleton className="h-12 w-full bg-slate-200/60 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🎬 Unit Workflow Steps Skeleton
 */
export const UnitWorkflowSkeleton: React.FC = () => {
  return (
    <div className="w-full py-12 sm:py-16 px-6 sm:px-12 max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-1/2 bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 w-2/3 bg-slate-200/60 rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-3">
            <Skeleton className="h-6 w-10 bg-slate-200/80 rounded-md" />
            <Skeleton className="h-6 w-3/4 bg-slate-200/90 rounded-lg" />
            <Skeleton className="h-16 w-full bg-slate-200/60 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🎬 Unit CTA Section Skeleton
 */
export const UnitCtaSkeleton: React.FC = () => {
  return (
    <div className="w-full py-10 px-6 sm:px-12 max-w-5xl mx-auto text-center space-y-6">
      <Skeleton className="h-8 w-2/3 mx-auto bg-slate-200/90 rounded-xl" />
      <Skeleton className="h-12 w-48 mx-auto bg-slate-900/80 rounded-xl" />
    </div>
  );
};

/**
 * 🎬 Composite Unit Detail Page Skeleton (`/units/[slug]`)
 */
export const UnitDetailSkeleton: React.FC = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <UnitHeroSkeleton />
      <UnitCapabilitiesSkeleton />
      <UnitStatsSkeleton />
      <UnitProjectsSkeleton />
      <UnitWorkflowSkeleton />
      <UnitCtaSkeleton />
    </div>
  );
};

/**
 * 🎬 4-Column Unit Cards Grid Skeleton
 */
export const UnitGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-64 w-full bg-slate-200/80 rounded-2xl" />
      ))}
    </div>
  );
};

/**
 * @deprecated Alias backward compatibility
 */
export const UnitSkeleton = UnitGridSkeleton;
