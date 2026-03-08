'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AgentAvatar from '@/components/agents/AgentAvatar';
import { IconAtSign, IconCheck, IconX, IconLink } from '@/components/ui/Icons';
import { Message } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import { useAppStore } from '@/store/app-store';
import { getAgentSide } from '@/lib/agent-sides';

interface DataSourceRequestProps {
  message: Message;
  onResolve?: () => void;
}

export default function DataSourceRequest({
  message,
  onResolve,
}: DataSourceRequestProps) {
  const resolveDataSource = useAppStore((s) => s.resolveDataSource);
  const agent = message.agentId ? AGENTS[message.agentId] : null;
  const isResolved = message.dataSourceResolved;
  const side = getAgentSide(message.agentId);
  const isRight = side === 'right';

  const handleAction = (approved: boolean) => {
    if (isResolved) return;
    resolveDataSource(message.id, approved);
    onResolve?.();
  };

  return (
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'} px-4 py-2 animate-fade-up`}>
      <div className={`flex items-start gap-3 max-w-[88%] ${isRight ? 'flex-row-reverse' : ''}`}>
        {message.agentId && <AgentAvatar agentId={message.agentId} size="lg" />}
        <Card elevated accentBorder className="flex-1">
          <div className="p-4">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent-light text-accent text-[10px] font-bold uppercase tracking-wider mb-3">
              <IconAtSign size={11} strokeWidth={2.5} />
              You
            </div>
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
            <p className={`text-[13px] text-text-1 mt-1.5 whitespace-pre-wrap leading-relaxed ${isRight ? 'text-right' : ''}`}>
              {message.content}
            </p>

            {!isResolved ? (
              <div className="flex gap-2 mt-3">
                <Button
                  variant="primary"
                  onClick={() => handleAction(true)}
                >
                  <IconLink size={13} />
                  Connect {message.dataSourceName}
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => handleAction(false)}
                >
                  <IconX size={13} />
                  Skip
                </Button>
              </div>
            ) : (
              <div className="mt-3 flex items-center gap-1.5 text-[12px] text-text-2">
                {message.dataSourceApproved ? (
                  <>
                    <IconCheck size={13} className="text-accent" />
                    <span className="font-medium">{message.dataSourceName} connected</span>
                  </>
                ) : (
                  <>
                    <IconX size={13} className="text-text-3" />
                    <span>Skipped</span>
                  </>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
