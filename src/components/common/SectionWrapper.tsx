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

  return (
    <section
      id={id}
      className={`${spacingClass} px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${
        darkBg ? 'bg-slate-50/80' : 'bg-white'
      } ${className}`}
    >
      {children}
    </section>
  );
};

