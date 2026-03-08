'use client';

import React from 'react';

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
}

export default function ProgressBar({ value, className = '' }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className={`w-full h-1.5 bg-bg-3 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{
          width: `${clamped}%`,
          background: `linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-60) 100%)`,
        }}
      />
    </div>
  );
}
