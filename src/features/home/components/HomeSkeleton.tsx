import React from 'react';

export const HomeSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-12 max-w-5xl mx-auto py-12 px-4">
      <div className="h-64 bg-bg-tertiary rounded-2xl w-full" />
      <div className="space-y-4">
        <div className="h-8 bg-bg-tertiary rounded-lg w-1/3 mx-auto" />
        <div className="h-20 bg-bg-tertiary rounded-xl w-3/4 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-48 bg-bg-tertiary rounded-2xl" />
        ))}
      </div>
    </div>
  );
};
