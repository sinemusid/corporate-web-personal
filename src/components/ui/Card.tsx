import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-bg-elevated border border-borderToken-subtle text-content-primary rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-borderToken-default ${className}`}>
      {children}
    </div>
  );
};
