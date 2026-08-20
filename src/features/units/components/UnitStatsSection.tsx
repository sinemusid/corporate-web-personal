import React from 'react';
import { FadeInStagger, FadeIn, CounterNumber } from '@/components/motion';
import { UnitStat } from '../types';

interface UnitStatsSectionProps {
  stats?: UnitStat[];
}

export const UnitStatsSection: React.FC<UnitStatsSectionProps> = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="w-full bg-blue-600 text-white py-10 sm:py-14 px-6 sm:px-12 my-4 shadow-sm">
      <div className="w-full max-w-7xl mx-auto">
        <FadeInStagger staggerDelay={0.1} className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 text-center mx-auto">
          {stats.map((st, i) => (
            <FadeIn key={i} direction="scale" className="flex flex-col items-center justify-center min-w-[130px] sm:min-w-[170px] space-y-1.5 group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-none">
                <CounterNumber value={st.value} duration={1.6} />
              </div>
              <div className="text-xs sm:text-sm font-medium text-blue-100 tracking-wide max-w-[180px] leading-snug text-center">
                {st.label}
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
};
