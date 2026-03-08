'use client';

import React from 'react';
import ProgressBar from '@/components/ui/ProgressBar';

interface ConfidenceBarProps {
  value: number;
  label?: string;
}

export default function ConfidenceBar({ value, label }: ConfidenceBarProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-medium text-text-2 uppercase tracking-wide">
        {label || 'Confidence'}
      </span>
      <ProgressBar value={value} className="flex-1 max-w-[120px]" />
      <span className="text-[12px] font-bold text-text-0 tabular-nums">{value}%</span>
    </div>
  );
}
