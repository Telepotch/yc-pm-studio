'use client';

import React from 'react';

interface CardProps {
  elevated?: boolean;
  accentBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Card({
  elevated = false,
  accentBorder = false,
  className = '',
  children,
}: CardProps) {
  return (
    <div
      className={`
        bg-bg-0 rounded-xl border transition-shadow duration-200
        ${accentBorder
          ? 'border-l-[3px] border-l-accent border-border-default'
          : 'border-border-default'
        }
        ${elevated
          ? 'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]'
          : 'shadow-[0_1px_2px_rgba(0,0,0,0.03)]'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
