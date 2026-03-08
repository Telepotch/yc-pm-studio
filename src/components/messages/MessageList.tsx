'use client';

import React from 'react';
import { Message, AgentId } from '@/lib/types';
import CompactMessage from './CompactMessage';
import ElevatedMessage from './ElevatedMessage';
import InterventionCard from './InterventionCard';
import DataSourceRequest from './DataSourceRequest';
import EditionAnnouncement from './EditionAnnouncement';
import TypingIndicator from './TypingIndicator';
import { useAutoScroll } from '@/hooks/useAutoScroll';

interface MessageListProps {
  messages: Message[];
  typingAgents: AgentId[];
  onInterventionResolve?: () => void;
  onDataSourceResolve?: () => void;
}

export default function MessageList({
  messages,
  typingAgents,
  onInterventionResolve,
  onDataSourceResolve,
}: MessageListProps) {
  const containerRef = useAutoScroll([messages.length, typingAgents.length]);

  const renderMessage = (message: Message) => {
    switch (message.type) {
      case 'intervention':
        return (
          <InterventionCard
            key={message.id}
            message={message}
            onResolve={onInterventionResolve}
          />
        );
      case 'data-source-request':
        return (
          <DataSourceRequest
            key={message.id}
            message={message}
            onResolve={onDataSourceResolve}
          />
        );
      case 'edition-announcement':
        return <EditionAnnouncement key={message.id} message={message} />;
      case 'hypothesis':
        return <ElevatedMessage key={message.id} message={message} />;
      default:
        if (message.tier === 'elevated') {
          return <ElevatedMessage key={message.id} message={message} />;
        }
        return <CompactMessage key={message.id} message={message} />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto py-1"
    >
      {messages.length === 0 && typingAgents.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-center px-8 gap-3">
          <div className="w-10 h-10 rounded-full bg-bg-2 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-3">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="text-[13px] text-text-3">
            Agents will start posting here once the scenario begins
          </p>
        </div>
      )}
      {messages.map(renderMessage)}
      {typingAgents.map((agentId) => (
        <TypingIndicator key={`typing-${agentId}`} agentId={agentId} />
      ))}
    </div>
  );
}
