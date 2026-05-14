import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  crosshairs?: ('tl' | 'tr' | 'bl' | 'br')[];
  hoverable?: boolean;
}

export default function Card({ children, className = '', crosshairs = [], hoverable = false, ...props }: CardProps) {
  const crosshairClasses = crosshairs.length > 0 ? 'crosshair ' + crosshairs.map(c => `crosshair-${c}`).join(' ') : '';
  const hoverClasses = hoverable ? 'hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200' : '';
  
  return (
    <div className={`border border-black bg-white p-5 relative ${crosshairClasses} ${hoverClasses} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
