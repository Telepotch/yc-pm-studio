'use client';

import React from 'react';
import Image from 'next/image';
import { AgentId } from '@/lib/types';
import { AGENTS } from '@/lib/constants';

interface AgentAvatarProps {
  agentId: AgentId;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { container: 24, className: 'w-6 h-6' },
  md: { container: 32, className: 'w-8 h-8' },
  lg: { container: 44, className: 'w-11 h-11' },
};

export default function AgentAvatar({ agentId, size = 'md' }: AgentAvatarProps) {
  const agent = AGENTS[agentId];
  const s = sizeMap[size];

  return (
    <div
      className={`${s.className} rounded-full overflow-hidden shrink-0 border border-border-light bg-bg-1`}
      title={`${agent.name} — ${agent.source}`}
    >
      <Image
        src={agent.avatar}
        alt={agent.name}
        width={s.container}
        height={s.container}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
