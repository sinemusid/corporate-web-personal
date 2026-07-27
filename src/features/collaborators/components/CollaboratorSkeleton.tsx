'use client';

import React from 'react';

export const CollaboratorSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-8 max-w-5xl mx-auto py-12 px-4">
      <div className="h-10 bg-bg-tertiary rounded-xl w-2/3 mx-auto" />
      <div className="h-6 bg-bg-tertiary rounded-lg w-1/2 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-36 bg-bg-tertiary rounded-xl" />
        ))}
      </div>
    </div>
  );
};
