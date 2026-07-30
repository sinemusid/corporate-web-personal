import React from 'react';

interface TeamFilterTabsProps {
  departments: string[];
  selectedDepartment: string;
  onSelectDepartment: (dept: string) => void;
}

export const TeamFilterTabs: React.FC<TeamFilterTabsProps> = ({
  departments,
  selectedDepartment,
  onSelectDepartment,
}) => {
  if (departments.length === 0) return null;

  const allTabs = ['ALL', ...departments];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-2 pb-4">
      {allTabs.map((dept) => {
        const isActive = selectedDepartment.toUpperCase() === dept.toUpperCase();
        return (
          <button
            key={dept}
            onClick={() => onSelectDepartment(dept)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
              isActive
                ? 'bg-amber-500/10 text-amber-500 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {dept}
          </button>
        );
      })}
    </div>
  );
};
