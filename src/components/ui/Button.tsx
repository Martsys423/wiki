import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'inverted';
  hasArrow?: boolean;
}

export default function Button({ children, variant = 'primary', hasArrow, className = '', ...props }: ButtonProps) {
  const baseClass = "btn hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200";
  const variantClass = variant === 'inverted' ? "!bg-white !text-black hover:!bg-black hover:!text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "";
  
  return (
    <button className={`${baseClass} ${variantClass} ${className}`.trim()} {...props}>
      {children}
      {hasArrow && <span>→</span>}
    </button>
  );
}
