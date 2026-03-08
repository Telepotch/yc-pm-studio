'use client';

import React from 'react';
import { AgentId } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import { IconChartBar, IconMicrophone, IconCompass } from '@/components/ui/Icons';

const agentStyles: Record<AgentId, { bg: string; text: string; ring: string }> = {
  nova: {
    bg: 'bg-blue-50',
    text: 'text-blue-500',
    ring: 'ring-blue-200',
  },
  iris: {
    bg: 'bg-violet-50',
    text: 'text-violet-500',
    ring: 'ring-violet-200',
  },
  scout: {
    bg: 'bg-amber-50',
    text: 'text-amber-500',
    ring: 'ring-amber-200',
  },
};

const agentIcons: Record<AgentId, React.FC<{ size?: number; className?: string; strokeWidth?: number }>> = {
  nova: IconChartBar,
  iris: IconMicrophone,
  scout: IconCompass,
};

interface AgentAvatarProps {
  agentId: AgentId;
  size?: 'sm' | 'md' | 'lg';
}

export default function AgentAvatar({ agentId, size = 'md' }: AgentAvatarProps) {
  const agent = AGENTS[agentId];
  const style = agentStyles[agentId];
  const Icon = agentIcons[agentId];

  const sizeMap = {
    sm: { container: 'w-6 h-6', icon: 12, stroke: 2 },
    md: { container: 'w-8 h-8', icon: 15, stroke: 1.8 },
    lg: { container: 'w-11 h-11', icon: 20, stroke: 1.6 },
  };

  const s = sizeMap[size];

  return (
    <div
      className={`${s.container} rounded-full ${style.bg} ${style.text} flex items-center justify-center shrink-0 border border-border-light`}
      title={`${agent.name} — ${agent.beat}`}
    >
      <Icon size={s.icon} strokeWidth={s.stroke} />
    </div>
  );
}
