import React from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darkBg?: boolean;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  className = '',
  children,
  darkBg = false,
}) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${
        darkBg ? 'bg-bg-secondary' : 'bg-bg-primary'
      } ${className}`}
    >
      {children}
    </section>
  );
};
