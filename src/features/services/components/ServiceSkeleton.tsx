import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export const ServiceSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-64 w-full" />
      ))}
    </div>
  );
};
