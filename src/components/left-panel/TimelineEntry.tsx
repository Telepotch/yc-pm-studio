'use client';

import React from 'react';
import { Message } from '@/lib/types';
import { AGENTS } from '@/lib/constants';
import SourceBadge from '@/components/messages/SourceBadge';

interface TimelineEntryProps {
  message: Message;
  isLast: boolean;
}

export default function TimelineEntry({ message, isLast }: TimelineEntryProps) {
  const agent = message.agentId ? AGENTS[message.agentId] : null;
  const sourceColor = agent
    ? agent.id === 'nova'
      ? 'bg-blue-500'
      : agent.id === 'iris'
        ? 'bg-violet-500'
        : 'bg-amber-500'
    : 'bg-text-3';

  return (
    <div className="flex gap-3 animate-fade-up">
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0 w-3">
        <div className={`w-2.5 h-2.5 rounded-full ${sourceColor} mt-1.5 shrink-0 ring-2 ring-bg-0`} />
        {!isLast && <div className="w-px flex-1 bg-border-default min-h-4" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-5 min-w-0">
        {/* Timestamp + source context */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[11px] font-medium text-text-3">{message.timestamp}</span>
          {message.sourceContext && (
            <span className="text-[11px] font-medium text-text-2 bg-bg-2 px-1.5 py-0.5 rounded">
              {message.sourceContext}
            </span>
          )}
        </div>

        {/* Card */}
        <div className="bg-bg-0 border border-border-default rounded-xl p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          {/* Data snippet (raw data preview) */}
          {message.dataSnippet && (
            <div className="mb-3 bg-bg-1 border border-border-light rounded-lg px-3 py-2.5 font-mono text-[12px] text-text-2 leading-relaxed whitespace-pre-wrap">
              {message.dataSnippet}
            </div>
          )}

          {/* Agent's analysis */}
          <p className="text-[13px] text-text-1 leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>

          {/* Analysis note (interpretation) */}
          {message.analysisNote && (
            <div className="mt-2.5 flex gap-2 items-start">
              <div className={`w-0.5 h-full min-h-4 ${sourceColor} rounded-full shrink-0 mt-0.5 opacity-50`} />
              <p className="text-[12px] text-text-2 italic leading-relaxed">
                {message.analysisNote}
              </p>
            </div>
          )}

          {/* Source badges */}
          {message.sources && message.sources.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {message.sources.map((source, i) => (
                <SourceBadge key={i} source={source} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
