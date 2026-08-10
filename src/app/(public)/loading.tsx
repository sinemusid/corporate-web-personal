import React from 'react';

/**
 * Next.js App Router loading.tsx — Automatically shown as a Suspense fallback
 * while async Server Components in the (public) route group are streaming.
 * Displayed on route transitions and initial page loads before RSC data resolves.
 */
export default function PublicLoading() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary animate-pulse">
      {/* Navbar placeholder */}
      <div className="h-20 bg-bg-elevated border-b border-borderToken-subtle/30" />

      {/* Hero section placeholder */}
      <div className="flex-1 flex flex-col gap-8 px-6 py-16 max-w-5xl mx-auto w-full">
        <div className="h-64 bg-bg-tertiary rounded-2xl w-full" />
        <div className="space-y-4 text-center">
          <div className="h-8 bg-bg-tertiary rounded-lg w-1/3 mx-auto" />
          <div className="h-5 bg-bg-tertiary rounded-lg w-1/2 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-bg-tertiary rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
