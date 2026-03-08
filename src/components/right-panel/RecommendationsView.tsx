'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';
import Card from '@/components/ui/Card';
import { IconLightbulb, IconTarget } from '@/components/ui/Icons';
import { Priority } from '@/lib/types';

const priorityConfig: Record<Priority, { bg: string; text: string; label: string }> = {
  P0: { bg: 'bg-accent', text: 'text-white', label: 'Critical' },
  P1: { bg: 'bg-accent/20', text: 'text-accent', label: 'High' },
  P2: { bg: 'bg-bg-3', text: 'text-text-2', label: 'Medium' },
};

export default function RecommendationsView() {
  const recommendations = useAppStore((s) => s.recommendations);

  if (recommendations.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 gap-4">
        <div className="w-12 h-12 rounded-full bg-bg-2 flex items-center justify-center">
          <IconLightbulb size={22} className="text-text-3" />
        </div>
        <div>
          <p className="text-[13px] text-text-2 font-medium">No recommendations yet</p>
          <p className="text-[12px] text-text-3 mt-1">
            They will appear after agents publish their first edition.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <h2 className="text-[18px] font-display italic text-text-0 mb-5">Recommendations</h2>
      <div className="space-y-3">
        {recommendations.map((rec) => {
          const prio = priorityConfig[rec.priority];
          return (
            <Card key={rec.id} className="overflow-hidden">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <span
                    className={`inline-flex items-center justify-center px-2 py-[3px] rounded-md text-[10px] font-bold shrink-0 ${prio.bg} ${prio.text}`}
                  >
                    {rec.priority}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-semibold text-text-0 leading-snug">
                      {rec.title}
                    </h4>
                    <p className="text-[12px] text-text-1 mt-1.5 leading-relaxed">{rec.rationale}</p>
                    <div className="mt-2.5 flex items-start gap-1.5 text-[11px] text-text-2">
                      <IconTarget size={12} className="text-text-3 mt-0.5 shrink-0" />
                      <span><strong className="font-semibold text-text-1">Impact:</strong> {rec.impact}</span>
                    </div>
                    <p className="text-[11px] text-text-2 mt-1 pl-[18px]">
                      <strong className="font-semibold text-text-1">Approach:</strong> {rec.approach}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
