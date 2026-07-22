import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export const CareerSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-48 w-full" />
    </div>
  );
};
