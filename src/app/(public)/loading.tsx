import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

/**
 * ⚡ Next.js App Router Global Route Transition Fallback
 * Displayed automatically across the (public) route group during client-side navigation.
 */
export default function PublicLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary w-full">
      {/* Top Navbar Placeholder */}
      <div className="h-20 bg-slate-950/90 border-b border-slate-800/40 w-full" />

      {/* Main Content Loading Skeleton */}
      <div className="flex-1 flex flex-col gap-8 px-6 py-16 max-w-6xl mx-auto w-full">
        {/* Hero banner skeleton */}
        <Skeleton className="h-64 sm:h-80 w-full bg-slate-200/80 rounded-3xl" />

        {/* Heading skeleton */}
        <div className="space-y-4 text-center max-w-xl mx-auto w-full">
          <Skeleton className="h-9 w-2/3 mx-auto bg-slate-200/90 rounded-xl" />
          <Skeleton className="h-5 w-1/2 mx-auto bg-slate-200/60 rounded-lg" />
        </div>

        {/* 3-Column Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 space-y-4">
              <Skeleton className="h-36 w-full bg-slate-200/80 rounded-xl" />
              <Skeleton className="h-6 w-3/4 bg-slate-200/90 rounded-lg" />
              <Skeleton className="h-12 w-full bg-slate-200/60 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
