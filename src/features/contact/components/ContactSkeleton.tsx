import React from 'react';

export const ContactSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-8 max-w-5xl mx-auto py-12 px-4">
      <div className="h-48 bg-bg-tertiary rounded-3xl w-full" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <div className="h-10 bg-bg-tertiary rounded-xl w-3/4" />
          <div className="h-20 bg-bg-tertiary rounded-xl w-full" />
        </div>
        <div className="lg:col-span-6 h-96 bg-bg-tertiary rounded-3xl" />
      </div>
    </div>
  );
};
