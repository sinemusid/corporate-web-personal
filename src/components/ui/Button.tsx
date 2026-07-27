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
  const baseStyle = 'inline-flex items-center justify-center font-body font-medium transition-all duration-300 rounded-lg disabled:opacity-50 cursor-pointer';
  
  const variants = {
    primary: 'bg-accent-solid text-content-inverse hover:bg-accent-solid-hover shadow-sm',
    secondary: 'bg-accent-subtle text-content-primary hover:bg-accent-subtle-hover border border-borderToken-subtle',
    outline: 'border border-borderToken-strong text-content-primary hover:bg-accent-subtle',
    ghost: 'text-content-secondary hover:text-content-primary hover:bg-accent-subtle',
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
