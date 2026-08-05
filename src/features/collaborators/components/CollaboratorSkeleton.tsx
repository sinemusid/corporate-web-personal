'use client';

import React from 'react';

export const CollaboratorSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-12 max-w-6xl mx-auto py-12 px-4">
      {/* Header skeleton */}
      <div className="space-y-4 max-w-2xl mx-auto text-center flex flex-col items-center">
        <div className="h-10 bg-bg-tertiary rounded-xl w-3/4" />
        <div className="h-5 bg-bg-tertiary rounded-lg w-1/2" />
      </div>

      {/* Section 1 skeleton (10 items in 5-column layout: 2 inline rows x 5 logos) */}
      <div className="space-y-6">
        <div className="h-7 bg-bg-tertiary rounded-lg w-1/3" />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`skel-1-${i}`} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)] h-28 sm:h-32 bg-bg-tertiary rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Section 2 skeleton (4 items) */}
      <div className="space-y-6">
        <div className="h-7 bg-bg-tertiary rounded-lg w-1/4" />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={`skel-2-${i}`} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)] h-28 sm:h-32 bg-bg-tertiary rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
};



