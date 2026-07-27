'use client';

import React from 'react';

export const AboutUsSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-12 max-w-5xl mx-auto py-12 px-4">
      <div className="h-48 bg-bg-tertiary rounded-2xl w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 bg-bg-tertiary rounded-2xl" />
        <div className="h-64 bg-bg-tertiary rounded-2xl" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-28 bg-bg-tertiary rounded-xl" />
        ))}
      </div>
    </div>
  );
};
