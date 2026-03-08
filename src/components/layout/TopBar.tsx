'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { IconActivity } from '@/components/ui/Icons';
import { useAppStore } from '@/store/app-store';
import { AGENT_LIST } from '@/lib/constants';

export default function TopBar() {
  const typingAgents = useAppStore((s) => s.typingAgents);
  const scenarioRunning = useAppStore((s) => s.scenarioRunning);

  const activeCount: number = scenarioRunning ? AGENT_LIST.length : 0;

  return (
    <header className="h-12 flex items-center justify-between px-5 bg-bg-0/80 backdrop-blur-md border-b border-border-default shrink-0 relative z-10">
      <div className="flex items-center gap-2.5">
        <Image
          src="/pm-studio-logo.png"
          alt="PM Studio"
          width={120}
          height={27}
          priority
        />
        <Badge variant="beta">BETA</Badge>
      </div>

      <div className="flex items-center gap-4 text-[12px]">
        <div className="flex items-center gap-1.5 text-text-2">
          <IconActivity size={13} className="text-text-3" />
          <span>
            {activeCount} agent{activeCount !== 1 ? 's' : ''} active
          </span>
        </div>
        {typingAgents.length > 0 && (
          <div className="flex items-center gap-1.5 text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-gentle-pulse" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="font-medium">
              {typingAgents.length} typing
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
