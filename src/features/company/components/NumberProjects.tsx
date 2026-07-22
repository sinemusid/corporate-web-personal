import React from 'react';
import { CompanyStat } from '../types';

interface NumberProjectsProps {
  stats: CompanyStat[];
}

export const NumberProjects: React.FC<NumberProjectsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((st, i) => (
        <div key={i} className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-xl text-center space-y-1">
          <div className="text-3xl font-extrabold text-red-500">{st.value}</div>
          <div className="text-sm font-semibold text-white">{st.label}</div>
          <div className="text-xs text-zinc-500">{st.description}</div>
        </div>
      ))}
    </div>
  );
};
