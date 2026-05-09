import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  crosshairs?: ('tl' | 'tr' | 'bl' | 'br')[];
}

export default function Card({ children, className = '', crosshairs = [], ...props }: CardProps) {
  const crosshairClasses = crosshairs.length > 0 ? 'crosshair ' + crosshairs.map(c => `crosshair-${c}`).join(' ') : '';
  
  return (
    <div className={`border border-black bg-white p-4 relative ${crosshairClasses} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
