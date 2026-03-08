'use client';

import React from 'react';
import AgentAvatar from '@/components/agents/AgentAvatar';
import { AgentId } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import { getAgentSide } from '@/lib/agent-sides';

interface TypingIndicatorProps {
  agentId: AgentId;
}

export default function TypingIndicator({ agentId }: TypingIndicatorProps) {
  const agent = AGENTS[agentId];
  const side = getAgentSide(agentId);
  const isRight = side === 'right';

  return (
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'} px-4 py-2 animate-fade-up`}>
      <div className={`flex items-center gap-3 ${isRight ? 'flex-row-reverse' : ''}`}>
        <AgentAvatar agentId={agentId} size="lg" />
        <div className={`flex items-center gap-2.5 ${isRight ? 'flex-row-reverse' : ''}`}>
          <span className="text-[13px] font-semibold text-text-0">
            {agent.name}
          </span>
          <div className="flex items-center gap-[3px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-[5px] h-[5px] rounded-full bg-accent/50"
                style={{
                  animation: `bounce-dot 1.4s infinite ease-in-out both`,
                  animationDelay: `${i * 0.16}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
