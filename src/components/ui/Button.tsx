import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'inverted';
  hasArrow?: boolean;
}

export default function Button({ children, variant = 'primary', hasArrow, className = '', ...props }: ButtonProps) {
  const baseClass = "btn";
  const variantClass = variant === 'inverted' ? "!bg-white !text-black hover:!bg-black hover:!text-white" : "";
  
  return (
    <button className={`${baseClass} ${variantClass} ${className}`.trim()} {...props}>
      {children}
      {hasArrow && <span>→</span>}
    </button>
  );
}
