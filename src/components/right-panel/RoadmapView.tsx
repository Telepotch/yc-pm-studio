'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';
import { IconRoute } from '@/components/ui/Icons';

export default function RoadmapView() {
  const roadmap = useAppStore((s) => s.roadmap);

  if (roadmap.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10 gap-4">
        <div className="w-12 h-12 rounded-full bg-bg-2 flex items-center justify-center">
          <IconRoute size={22} className="text-text-3" />
        </div>
        <div>
          <p className="text-[13px] text-text-2 font-medium">No roadmap yet</p>
          <p className="text-[12px] text-text-3 mt-1">
            It will be generated after agents publish their first edition.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <h2 className="text-[18px] font-display italic text-text-0 mb-6">Roadmap</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border-default" />

        <div className="space-y-7">
          {roadmap.map((phase, index) => (
            <div key={phase.id} className="relative pl-9 animate-fade-up" style={{ animationDelay: `${index * 60}ms` }}>
              {/* Timeline dot */}
              <div className="absolute left-0 top-0.5">
                {index === 0 ? (
                  <div className="w-[22px] h-[22px] rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_2px_rgba(0,162,255,0.2)]" />
                  </div>
                ) : (
                  <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-border-default bg-bg-0" />
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.08em] ${index === 0 ? 'text-accent' : 'text-text-2'}`}>
                    {phase.phase}
                  </span>
                  <span className="text-[11px] text-text-3 font-medium">{phase.timeline}</span>
                </div>
                <h4 className="text-[13px] font-semibold text-text-0 mt-1">
                  {phase.title}
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[12px] text-text-1 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-text-3 mt-[7px] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
