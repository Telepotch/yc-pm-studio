'use client';

import React from 'react';
import { Source, SourceType } from '@/lib/types';
import {
  IconChartBar,
  IconMicrophone,
  IconClipboardList,
  IconStar,
  IconGlobe,
  IconPlug,
} from '@/components/ui/Icons';

const sourceIcons: Record<SourceType, React.FC<{ size?: number; className?: string; strokeWidth?: number }>> = {
  quantitative: IconChartBar,
  interview: IconMicrophone,
  survey: IconClipboardList,
  review: IconStar,
  web: IconGlobe,
  integration: IconPlug,
};

interface SourceBadgeProps {
  source: Source;
}

export default function SourceBadge({ source }: SourceBadgeProps) {
  const Icon = sourceIcons[source.type];

  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-bg-2/70 border border-border-light text-[11px] font-medium text-text-2 transition-colors hover:bg-bg-2">
      <Icon size={11} className="text-text-3" strokeWidth={2} />
      <span>{source.name}</span>
      {source.detail && (
        <>
          <span className="text-text-3/50">|</span>
          <span className="text-text-3">{source.detail}</span>
        </>
      )}
    </span>
  );
}
