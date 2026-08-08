import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-blue-300/60 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
