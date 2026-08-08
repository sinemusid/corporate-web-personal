import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-xs font-body font-medium text-slate-700 mb-1.5">{label}</label>}
      <input
        className={`w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-body text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all ${className}`}
        {...props}
      />
      {error && <span className="text-xs font-body text-red-500 mt-1 block">{error}</span>}
    </div>
  );
};
