import React from 'react';
import { CompanyStat } from '../types';

interface NumberProjectsProps {
  stats: CompanyStat[];
}

export const NumberProjects: React.FC<NumberProjectsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-6">
      {stats.map((st, i) => (
        <div
          key={i}
          className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl text-center space-y-2 backdrop-blur-sm hover:border-zinc-700 transition-colors"
        >
          <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">{st.value}</div>
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{st.label}</div>
        </div>
      ))}
    </div>
  );
};

