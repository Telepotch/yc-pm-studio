'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { IconArrowRight, IconArrowLeft } from '@/components/ui/Icons';

const GOAL_OPTIONS = [
  'Reduce churn',
  'Grow enterprise',
  'Increase activation',
  'Improve retention',
  'Competitive response',
  'Expand to new market',
  'Improve NPS',
  'Reduce support load',
];

const MAX_GOALS = 3;

interface StepGoalsProps {
  value: string[];
  onChange: (value: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepGoals({
  value,
  onChange,
  onNext,
  onBack,
}: StepGoalsProps) {
  const toggle = (goal: string) => {
    if (value.includes(goal)) {
      onChange(value.filter((g) => g !== goal));
    } else if (value.length < MAX_GOALS) {
      onChange([...value, goal]);
    }
  };

  return (
    <div className="px-8 pb-8 pt-6">
      <div className="text-[11px] text-text-3 font-semibold uppercase tracking-wider mb-1">
        Step 2 of 3
      </div>
      <h2 className="text-[18px] font-display italic text-text-0 mb-1">
        What are your current goals?
      </h2>
      <p className="text-[12px] text-text-2 mb-5">
        This helps pm24 score recommendations against your strategy. Pick 1–3.
      </p>
      <div className="flex flex-wrap gap-2.5">
        {GOAL_OPTIONS.map((goal) => {
          const selected = value.includes(goal);
          const disabled = !selected && value.length >= MAX_GOALS;
          return (
            <button
              key={goal}
              type="button"
              onClick={() => toggle(goal)}
              disabled={disabled}
              className={`px-4 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-150 cursor-pointer
                ${
                  selected
                    ? 'bg-accent/15 border-accent text-accent'
                    : 'bg-bg-1 border-border-default text-text-1 hover:border-text-3'
                }
                ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
              `}
            >
              {goal}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between mt-8">
        <Button variant="ghost" onClick={onBack}>
          <IconArrowLeft size={14} />
          Back
        </Button>
        <Button onClick={onNext} disabled={value.length === 0}>
          Continue
          <IconArrowRight size={14} />
        </Button>
      </div>
    </div>
  );
}
