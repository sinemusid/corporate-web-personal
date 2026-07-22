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
  const baseStyle = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg disabled:opacity-50 cursor-pointer';
  
  const variants = {
    primary: 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20',
    secondary: 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700',
    outline: 'border border-red-600 text-red-500 hover:bg-red-600/10',
    ghost: 'text-zinc-300 hover:text-white hover:bg-zinc-800/50',
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
