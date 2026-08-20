import React from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

/**
 * 📬 Join Mission Section Skeleton
 */
export const JoinMissionSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white/80 border border-slate-200/80 p-6 sm:p-8 md:p-10 text-center flex flex-col items-center space-y-6 shadow-xl">
      {/* Header */}
      <div className="space-y-3 max-w-2xl mx-auto flex flex-col items-center">
        <Skeleton className="h-9 sm:h-11 w-3/4 max-w-lg bg-slate-200/90 rounded-xl" />
        <Skeleton className="h-4 sm:h-5 w-full max-w-md bg-slate-200/60 rounded-lg" />
      </div>

      {/* Divider */}
      <div className="w-full max-w-3xl border-t border-slate-200/60" />

      {/* 3 Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2 flex flex-col items-center">
            <Skeleton className="h-5 w-8 bg-slate-200/80 rounded" />
            <Skeleton className="h-10 w-full bg-slate-200/60 rounded-lg" />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Skeleton className="h-12 w-44 bg-slate-900/80 rounded-xl" />
    </div>
  );
};

/**
 * 📬 Contact Company Form Section Skeleton
 */
export const ContactCompanySkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch w-full max-w-6xl mx-auto my-0">
      {/* Left Column: Contact Info */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xl">
        <div className="space-y-4">
          <Skeleton className="h-9 sm:h-11 w-3/4 bg-slate-200/90 rounded-xl" />
          <Skeleton className="h-12 w-full bg-slate-200/60 rounded-lg" />
        </div>

        <div className="space-y-3 pt-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <Skeleton className="w-10 h-10 bg-slate-200/80 rounded-xl flex-shrink-0" />
              <div className="space-y-1.5 flex-1">
                <Skeleton className="h-3 w-16 bg-slate-200/60 rounded" />
                <Skeleton className="h-4 w-32 bg-slate-200/80 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="lg:col-span-7 bg-white border border-slate-200/80 p-6 sm:p-8 md:p-10 rounded-3xl min-h-[460px] flex flex-col justify-center shadow-xl space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 bg-slate-200/60 rounded" />
            <Skeleton className="h-12 w-full bg-slate-100 rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16 bg-slate-200/60 rounded" />
            <Skeleton className="h-12 w-full bg-slate-100 rounded-xl" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-24 bg-slate-200/60 rounded" />
          <Skeleton className="h-12 w-full bg-slate-100 rounded-xl" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20 bg-slate-200/60 rounded" />
          <Skeleton className="h-28 w-full bg-slate-100 rounded-xl" />
        </div>
        <Skeleton className="h-12 w-full bg-slate-900/80 rounded-xl" />
      </div>
    </div>
  );
};

/**
 * 📬 Composite Contact Page Skeleton
 */
export const ContactSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col w-full min-h-screen space-y-12 py-12 px-4 max-w-6xl mx-auto">
      <JoinMissionSkeleton />
      <ContactCompanySkeleton />
    </div>
  );
};
