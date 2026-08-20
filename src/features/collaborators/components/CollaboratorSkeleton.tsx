import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 🤝 Collaborator Page Header Skeleton
 */
export const CollaboratorHeaderSkeleton: React.FC = () => {
  return (
    <div className="space-y-3 max-w-3xl mx-auto flex flex-col items-center text-center">
      <Skeleton className="h-10 sm:h-12 md:h-14 w-3/4 max-w-xl bg-slate-200/90 rounded-xl" />
      <Skeleton className="h-5 sm:h-6 w-full max-w-lg bg-slate-200/60 rounded-lg" />
    </div>
  );
};

/**
 * 🤝 Partner / Vendor Grid Section Skeleton
 */
export const PartnerGridSkeleton: React.FC<{ count?: number; cols?: 4 | 5 }> = ({
  count = 10,
  cols = 5,
}) => {
  const gridClass =
    cols === 5
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
      : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="space-y-6 w-full pt-4">
      {/* Title */}
      <div className="text-center flex flex-col items-center justify-center space-y-1.5 pb-2 max-w-md mx-auto">
        <Skeleton className="h-7 w-48 bg-slate-200/90 rounded-lg" />
      </div>

      {/* Grid */}
      <div className={`grid ${gridClass} gap-4 sm:gap-5 w-full`}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="w-full h-24 sm:h-28 p-4 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center shadow-xs"
          >
            <Skeleton className="w-24 h-12 bg-slate-200/70 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 🤝 Composite Collaborator Page Skeleton
 */
export const CollaboratorSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-[88px] sm:pt-[108px] pb-20 space-y-10 sm:space-y-12">
      <CollaboratorHeaderSkeleton />
      <PartnerGridSkeleton count={10} cols={5} />
      <PartnerGridSkeleton count={4} cols={4} />
    </div>
  );
};
