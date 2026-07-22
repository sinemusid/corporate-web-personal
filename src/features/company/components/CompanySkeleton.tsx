import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export const CompanySkeleton: React.FC = () => {
  return (
    <div className="space-y-8">
      <Skeleton className="h-48 w-full" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 w-full" />
        ))}
      </div>
    </div>
  );
};
