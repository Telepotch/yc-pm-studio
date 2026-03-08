'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import AgentAvatar from '@/components/agents/AgentAvatar';
import SourceBadge from './SourceBadge';
import ConfidenceBar from './ConfidenceBar';
import { IconSparkle } from '@/components/ui/Icons';
import { Message } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import { getAgentSide } from '@/lib/agent-sides';

interface ElevatedMessageProps {
  message: Message;
}

export default function ElevatedMessage({ message }: ElevatedMessageProps) {
  const agent = message.agentId ? AGENTS[message.agentId] : null;
  const side = getAgentSide(message.agentId);
  const isRight = side === 'right';

  return (
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'} px-4 py-2 animate-fade-up`}>
      <div className={`flex items-start gap-3 max-w-[88%] ${isRight ? 'flex-row-reverse' : ''}`}>
        {message.agentId && <AgentAvatar agentId={message.agentId} size="lg" />}
        <Card elevated className="flex-1">
          <div className="p-4">
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

            {message.type === 'hypothesis' && (
              <div className="mt-3">
                <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-accent-light text-accent text-[11px] font-semibold uppercase tracking-wide mb-2.5`}>
                  <IconSparkle size={12} />
                  Hypothesis Proposed
                </div>
                {message.hypothesisText && (
                  <p className={`text-[14px] text-text-0 font-medium font-display italic leading-relaxed mb-3 ${isRight ? 'text-right' : ''}`}>
                    &ldquo;{message.hypothesisText}&rdquo;
                  </p>
                )}
                {message.confidence !== undefined && (
                  <ConfidenceBar value={message.confidence} />
                )}
                {message.missingData && (
                  <p className="text-[11px] text-text-2 mt-2 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-text-3 shrink-0" />
                    Missing: {message.missingData}
                  </p>
                )}
              </div>
            )}

            {message.type !== 'hypothesis' && (
              <p className={`text-[13px] text-text-1 mt-1.5 whitespace-pre-wrap leading-relaxed ${isRight ? 'text-right' : ''}`}>
                {message.content}
              </p>
            )}

            {message.sources && message.sources.length > 0 && (
              <div className={`flex flex-wrap gap-1.5 mt-3 ${isRight ? 'justify-end' : ''}`}>
                {message.sources.map((source, i) => (
                  <SourceBadge key={i} source={source} />
                ))}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
