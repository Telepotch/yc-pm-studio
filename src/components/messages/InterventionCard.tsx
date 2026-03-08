'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import AgentAvatar from '@/components/agents/AgentAvatar';
import { IconAtSign, IconCheck } from '@/components/ui/Icons';
import { Message } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import { useAppStore } from '@/store/app-store';
import { getAgentSide } from '@/lib/agent-sides';

interface InterventionCardProps {
  message: Message;
  onResolve?: () => void;
}

export default function InterventionCard({
  message,
  onResolve,
}: InterventionCardProps) {
  const resolveIntervention = useAppStore((s) => s.resolveIntervention);
  const agent = message.agentId ? AGENTS[message.agentId] : null;
  const isResolved = message.interventionResolved;
  const side = getAgentSide(message.agentId);
  const isRight = side === 'right';

  const handleSelect = (index: number) => {
    if (isResolved) return;
    resolveIntervention(message.id, index);
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

            <div className="mt-3 space-y-2">
              {message.interventionOptions?.map((option, i) => {
                const isSelected = isResolved && message.selectedOption === i;
                const isDisabled = isResolved && !isSelected;

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={isResolved}
                    className={`
                      w-full text-left px-3.5 py-3 rounded-xl border transition-all duration-200 text-[13px] group
                      ${isSelected
                        ? 'border-accent bg-accent-light ring-1 ring-accent-border'
                        : isDisabled
                          ? 'border-border-light bg-bg-1 opacity-40'
                          : 'border-border-default bg-bg-0 hover:border-accent-border hover:bg-accent-light hover:shadow-[0_0_0_3px_rgba(0,162,255,0.06)] cursor-pointer'
                      }
                    `}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 w-[18px] h-[18px] rounded-full border-[1.5px] shrink-0 flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-accent bg-accent'
                            : 'border-text-3 group-hover:border-accent'
                        }`}
                      >
                        {isSelected && (
                          <IconCheck size={10} className="text-white" strokeWidth={3} />
                        )}
                      </span>
                      <div>
                        <div className={`font-semibold ${isSelected ? 'text-text-0' : isDisabled ? 'text-text-2' : 'text-text-1'}`}>
                          {option.label}
                        </div>
                        <div className="text-[12px] text-text-2 mt-0.5 leading-relaxed">
                          {option.description}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
