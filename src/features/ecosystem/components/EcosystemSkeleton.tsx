import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export const EcosystemSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-1/3 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-40 w-full" />
        ))}
      </div>
    </div>
  );
};
