'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { IconArrowRight, IconGlobe } from '@/components/ui/Icons';

interface StepProductUrlProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export default function StepProductUrl({
  value,
  onChange,
  onNext,
}: StepProductUrlProps) {
  return (
    <div className="px-8 pb-8 pt-6">
      <div className="text-[11px] text-text-3 font-semibold uppercase tracking-wider mb-1">Step 1 of 3</div>
      <h2 className="text-[18px] font-display italic text-text-0 mb-1">
        What product are you researching?
      </h2>
      <p className="text-[12px] text-text-2 mb-5">
        Agents will analyze your product&apos;s public presence as a starting point.
      </p>
      <div className="flex items-center gap-2.5 bg-bg-1 border border-border-default rounded-xl px-3 py-1.5 transition-all duration-200 focus-within:border-accent-border focus-within:shadow-[0_0_0_3px_rgba(0,162,255,0.08)]">
        <IconGlobe size={16} className="text-text-3 shrink-0" />
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://your-product.com"
          className="flex-1 bg-transparent py-2 text-[13px] text-text-1 placeholder:text-text-3 focus:outline-none"
        />
      </div>
      <div className="flex justify-end mt-8">
        <Button onClick={onNext} disabled={!value.trim()}>
          Continue
          <IconArrowRight size={14} />
        </Button>
      </div>
    </div>
  );
}
