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

      {/* Section 1 skeleton */}
      <div className="space-y-6">
        <div className="h-7 bg-bg-tertiary rounded-lg w-1/3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={`skel-1-${i}`} className="h-48 bg-bg-tertiary rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Section 2 skeleton */}
      <div className="space-y-6">
        <div className="h-7 bg-bg-tertiary rounded-lg w-1/4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={`skel-2-${i}`} className="h-48 bg-bg-tertiary rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
};
