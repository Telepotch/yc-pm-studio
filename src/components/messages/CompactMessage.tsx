'use client';

import React from 'react';
import AgentAvatar from '@/components/agents/AgentAvatar';
import SourceBadge from './SourceBadge';
import { Message } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import { getAgentSide } from '@/lib/agent-sides';

interface CompactMessageProps {
  message: Message;
}

export default function CompactMessage({ message }: CompactMessageProps) {
  const side = getAgentSide(message.agentId);
  const isRight = side === 'right';

  if (message.type === 'pm-message') {
    return (
      <div className="flex justify-end px-4 py-2 animate-fade-up">
        <div className="flex items-start gap-3 max-w-[85%] flex-row-reverse">
          <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-white text-[14px] font-bold shrink-0 shadow-[0_0_0_2px_rgba(0,162,255,0.15)] border border-accent-60/20">
            Y
          </div>
          <div className="text-right">
            <div className="flex items-baseline gap-2 justify-end">
              <span className="text-[11px] text-text-3">{message.timestamp}</span>
              <span className="text-[13px] font-semibold text-text-0">You</span>
            </div>
            <div className="mt-1.5 bg-accent/[0.06] border border-accent-border/50 rounded-2xl rounded-tr-md px-4 py-2.5">
              <p className="text-[13px] text-text-1 whitespace-pre-wrap leading-relaxed">
                {message.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const agent = message.agentId ? AGENTS[message.agentId] : null;

  return (
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'} px-4 py-2 animate-fade-up`}>
      <div className={`flex items-start gap-3 max-w-[85%] ${isRight ? 'flex-row-reverse' : ''}`}>
        {message.agentId && <AgentAvatar agentId={message.agentId} size="lg" />}
        <div className={isRight ? 'text-right' : ''}>
          <div className={`flex items-baseline gap-2 ${isRight ? 'justify-end' : ''}`}>
            {isRight && <span className="text-[11px] text-text-3">{message.timestamp}</span>}
            {agent && (
              <>
                {isRight && <span className="text-[11px] text-text-3 font-medium">{agent.beat}</span>}
                {isRight && <span className="text-[10px] text-text-3/60 font-medium">{agent.source}</span>}
                <span className="text-[13px] font-semibold text-text-0">
                  {agent.name}
                </span>
                {!isRight && <span className="text-[10px] text-text-3/60 font-medium">{agent.source}</span>}
                {!isRight && <span className="text-[11px] text-text-3 font-medium">{agent.beat}</span>}
              </>
            )}
            {!isRight && <span className="text-[11px] text-text-3">{message.timestamp}</span>}
          </div>
          <div className={`mt-1.5 bg-bg-1 border border-border-light rounded-2xl ${isRight ? 'rounded-tr-md' : 'rounded-tl-md'} px-4 py-2.5`}>
            <p className={`text-[13px] text-text-1 whitespace-pre-wrap leading-relaxed ${isRight ? 'text-right' : 'text-left'}`}>
              {message.content}
            </p>
            {message.sources && message.sources.length > 0 && (
              <div className={`flex flex-wrap gap-1.5 mt-2.5 ${isRight ? 'justify-end' : ''}`}>
                {message.sources.map((source, i) => (
                  <SourceBadge key={i} source={source} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
