'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';
import ProgressBar from '@/components/ui/ProgressBar';
import SourceBadge from '@/components/messages/SourceBadge';
import ExportButton from './ExportButton';
import { IconChartBar, IconMicrophone, IconCompass, IconNewspaper } from '@/components/ui/Icons';

const sectionIcons: Record<string, React.FC<{ size?: number; className?: string }>> = {
  quantitative: IconChartBar,
  qualitative: IconMicrophone,
  market: IconCompass,
};

export default function EditionView() {
  const edition = useAppStore((s) => s.edition);
  const highlight = useAppStore((s) => s.editionHighlight);

  if (!edition) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 gap-4">
        <div className="w-12 h-12 rounded-full bg-bg-2 flex items-center justify-center">
          <IconNewspaper size={22} className="text-text-3" />
        </div>
        <div>
          <p className="text-[13px] text-text-2 font-medium">No edition published yet</p>
          <p className="text-[12px] text-text-3 mt-1">
            Agents will compile their findings and publish an edition when ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex-1 overflow-y-auto ${highlight ? 'animate-pulse-highlight' : ''}`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-[20px] font-display italic text-text-0 leading-tight">{edition.headline}</h2>
            <p className="text-[12px] text-text-2 mt-1.5 font-medium">{edition.confidenceDelta}</p>
          </div>
          <ExportButton />
        </div>

        {/* Confidence */}
        <div className="flex items-center gap-3 mb-8 p-3 bg-bg-2/50 rounded-xl border border-border-light">
          <span className="text-[12px] font-semibold text-text-2 uppercase tracking-wide">
            Confidence
          </span>
          <ProgressBar value={edition.confidence} className="flex-1" />
          <span className="text-[15px] font-bold text-text-0 tabular-nums">
            {edition.confidence}%
          </span>
        </div>

        {/* Hypothesis */}
        <div className="mb-8 pl-4 border-l-2 border-accent">
          <h3 className="text-[10px] font-bold text-text-2 uppercase tracking-[0.08em] mb-2">
            Core Hypothesis
          </h3>
          <p className="text-[15px] font-display italic text-text-0 leading-relaxed">
            &ldquo;{edition.hypothesis}&rdquo;
          </p>
        </div>

        {/* Sections */}
        <Section sectionKey="quantitative" title="Quantitative Findings" section={edition.quantitative} />
        <Section sectionKey="qualitative" title="Qualitative Insights" section={edition.qualitative} />
        <Section sectionKey="market" title="Market Intelligence" section={edition.market} />
      </div>
    </div>
  );
}

function Section({
  sectionKey,
  title,
  section,
}: {
  sectionKey: string;
  title: string;
  section: { title: string; items: { text: string; source?: { type: string; name: string; detail?: string } }[] };
}) {
  const Icon = sectionIcons[sectionKey] || IconChartBar;

  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={14} className="text-accent" />
        <h3 className="text-[11px] font-bold text-text-2 uppercase tracking-[0.06em]">
          {title}
        </h3>
      </div>
      <div className="space-y-3 pl-[22px]">
        {section.items.map((item, i) => (
          <div key={i} className="group">
            <p className="text-[13px] text-text-1 leading-relaxed">{item.text}</p>
            {item.source && (
              <div className="mt-1.5">
                <SourceBadge source={item.source as import('@/lib/types').Source} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
