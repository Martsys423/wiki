import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'red' | 'outline' | 'inverted-hover';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  let variantClass = "border-black text-black bg-transparent"; // outline
  if (variant === 'primary') variantClass = "border-black bg-black text-white";
  if (variant === 'red') variantClass = "text-accent-red border-accent-red bg-transparent";
  if (variant === 'inverted-hover') variantClass = "border-black bg-accent-primary text-white group-hover:bg-white group-hover:text-black transition-none";

  return (
    <span className={`font-mono text-[10px] px-2 py-0.5 border uppercase ${variantClass} ${className}`.trim()}>
      {children}
    </span>
  );
}
