import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 rounded-lg disabled:opacity-50 cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 shadow-md shadow-blue-600/20',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200',
    outline: 'border border-slate-300 text-slate-800 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
