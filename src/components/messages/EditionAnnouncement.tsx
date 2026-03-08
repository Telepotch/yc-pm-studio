'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import AgentAvatar from '@/components/agents/AgentAvatar';
import { IconBookOpen } from '@/components/ui/Icons';
import { Message } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import { getAgentSide } from '@/lib/agent-sides';

interface EditionAnnouncementProps {
  message: Message;
}

export default function EditionAnnouncement({
  message,
}: EditionAnnouncementProps) {
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
                  <span className="text-[13px] font-semibold text-text-0">{agent.name}</span>
                  {!isRight && <span className="text-[10px] text-text-3/60 font-medium">{agent.source}</span>}
                  {!isRight && <span className="text-[11px] text-text-3 font-medium">{agent.beat}</span>}
                </>
              )}
              {!isRight && <span className="text-[11px] text-text-3">{message.timestamp}</span>}
            </div>
            <div className="mt-2.5">
              <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-text-0">
                <IconBookOpen size={15} className="text-accent" />
                New Edition Published
              </div>
              <p className="text-[13px] text-text-1 mt-1 leading-relaxed">
                {message.content}
              </p>
              {message.editionConfidenceFrom !== undefined &&
                message.editionConfidenceTo !== undefined && (
                  <div className="mt-2 flex items-center gap-2 text-[12px] font-medium text-accent">
                    <span className="inline-flex items-center gap-1">
                      Confidence
                      <span className="text-text-2">{message.editionConfidenceFrom}%</span>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-accent">
                        <path d="M1 5h10M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-accent font-bold">{message.editionConfidenceTo}%</span>
                    </span>
                  </div>
                )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
