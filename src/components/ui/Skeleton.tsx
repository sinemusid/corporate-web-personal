import React from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * 🧱 Skeleton Primitive (Single Source of Truth)
 * Base atomic pulsing placeholder for all loading states across the application.
 */
export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-pulse bg-slate-200/80 rounded-2xl', className)}
      {...props}
    />
  );
};
