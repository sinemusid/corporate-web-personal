import React from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darkBg?: boolean;
  isTopSection?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className = '',
  children,
  darkBg = false,
  isTopSection = false,
}) => {
  const spacingClass = isTopSection
    ? 'pt-[88px] sm:pt-[108px] lg:pt-[112px] pb-12 sm:pb-16 lg:pb-20'
    : 'py-12 sm:py-16 lg:py-20';

  const bgStyle = darkBg 
    ? 'bg-slate-950 text-white' 
    : 'bg-white text-slate-900 bg-white-pattern bg-repeat';

  return (
    <section id={id} className={`w-full ${bgStyle}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${spacingClass} ${className}`}>
        {children}
      </div>
    </section>
  );
};

