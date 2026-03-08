'use client';

import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'beta' | 'notification';
  children?: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = 'default',
  children,
  className = '',
}: BadgeProps) {
  if (variant === 'notification') {
    return (
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping" />
        <span className={`relative inline-flex rounded-full h-2 w-2 bg-accent ${className}`} />
      </span>
    );
  }

  if (variant === 'beta') {
    return (
      <span
        className={`inline-flex items-center px-1.5 py-px rounded text-[9px] font-bold uppercase tracking-[0.08em] bg-accent-mid text-accent border border-accent-border ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-bg-2 text-text-2 border border-border-light ${className}`}
    >
      {children}
    </span>
  );
}
