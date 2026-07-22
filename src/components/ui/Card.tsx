import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 ${className}`}>
      {children}
    </div>
  );
};
