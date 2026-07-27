import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-xs font-body font-medium text-content-secondary mb-1.5">{label}</label>}
      <textarea
        rows={4}
        className={`w-full bg-bg-primary border border-borderToken-default rounded-lg px-4 py-2.5 text-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:border-borderToken-focus transition-colors ${className}`}
        {...props}
      />
      {error && <span className="text-xs font-body text-content-secondary mt-1 block">{error}</span>}
    </div>
  );
};
