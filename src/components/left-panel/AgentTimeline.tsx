'use client';

import React from 'react';
import { useAppStore } from '@/store/app-store';
import { AgentId } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import AgentAvatar from '@/components/agents/AgentAvatar';
import TimelineEntry from './TimelineEntry';
import TypingIndicator from '@/components/messages/TypingIndicator';
import { useAutoScroll } from '@/hooks/useAutoScroll';

interface AgentTimelineProps {
  agentId: AgentId;
}

const AGENT_DESCRIPTIONS: Record<AgentId, string> = {
  nova: 'Analyzes Mixpanel data to surface quantitative insights on subscription behavior and retention patterns.',
  iris: 'Scans Slack conversations to extract qualitative insights from user voices, team discussions, and sentiment signals.',
  scout: 'Reviews Zendesk tickets to investigate market trends, competitor movements, and customer support patterns.',
};

const AGENT_STATUS_LABELS: Record<AgentId, string> = {
  nova: 'Analyzing Mixpanel data',
  iris: 'Scanning Slack channels',
  scout: 'Reviewing Zendesk tickets',
};

const SOURCE_LOGOS: Record<AgentId, { label: string; color: string; bgColor: string }> = {
  nova: { label: 'Mixpanel', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  iris: { label: 'Slack', color: 'text-violet-600', bgColor: 'bg-violet-50' },
  scout: { label: 'Zendesk', color: 'text-amber-600', bgColor: 'bg-amber-50' },
};

export default function AgentTimeline({ agentId }: AgentTimelineProps) {
  const messages = useAppStore((s) => s.agentTimelineMessages[agentId]);
  const isTyping = useAppStore((s) => s.typingAgents.includes(agentId));
  const containerRef = useAutoScroll([messages.length, isTyping]);

  const agent = AGENTS[agentId];
  const sourceMeta = SOURCE_LOGOS[agentId];
  const hasMessages = messages.length > 0;

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto">
      {/* Agent Profile Header */}
      <div className="px-5 pt-5 pb-4 border-b border-border-default bg-bg-0">
        <div className="flex items-start gap-3.5">
          <AgentAvatar agentId={agentId} size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-[15px] font-semibold text-text-0">{agent.name}</h2>
              <span className="text-[11px] font-medium text-text-3">{agent.beat}</span>
            </div>
            <p className="text-[12px] text-text-2 mt-0.5 leading-relaxed">
              {AGENT_DESCRIPTIONS[agentId]}
            </p>
          </div>
        </div>

        {/* Connected source badge */}
        <div className="mt-3 flex items-center gap-2">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${sourceMeta.bgColor} border border-border-light`}>
            <div className={`w-1.5 h-1.5 rounded-full ${
              agentId === 'nova' ? 'bg-blue-500' : agentId === 'iris' ? 'bg-violet-500' : 'bg-amber-500'
            } ${hasMessages || isTyping ? 'animate-gentle-pulse' : ''}`} />
            <span className={`text-[11px] font-semibold ${sourceMeta.color}`}>
              {sourceMeta.label}
            </span>
            <span className="text-[11px] text-text-3">connected</span>
          </div>
          {(hasMessages || isTyping) && (
            <span className="text-[11px] text-text-3 italic">
              {AGENT_STATUS_LABELS[agentId]}...
            </span>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 pt-4 pb-8">
        {!hasMessages && !isTyping && (
          <div className="flex flex-col items-center justify-center py-16 text-center px-8 gap-3">
            <div className={`w-10 h-10 rounded-full ${sourceMeta.bgColor} flex items-center justify-center`}>
              <div className={`w-3 h-3 rounded-full ${
                agentId === 'nova' ? 'bg-blue-400' : agentId === 'iris' ? 'bg-violet-400' : 'bg-amber-400'
              } opacity-50`} />
            </div>
            <p className="text-[13px] text-text-3">
              Waiting for analysis to begin...
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <TimelineEntry
            key={message.id}
            message={message}
            isLast={index === messages.length - 1 && !isTyping}
          />
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div className="flex flex-col items-center shrink-0 w-3">
              <div className={`w-2.5 h-2.5 rounded-full ${
                agentId === 'nova' ? 'bg-blue-500' : agentId === 'iris' ? 'bg-violet-500' : 'bg-amber-500'
              } mt-1.5 shrink-0 ring-2 ring-bg-0 animate-gentle-pulse`} />
            </div>
            <div className="flex-1 pb-5">
              <TypingIndicator agentId={agentId} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
