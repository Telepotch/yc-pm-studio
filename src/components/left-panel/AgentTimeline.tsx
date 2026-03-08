'use client';

import React from 'react';
import MessageList from '@/components/messages/MessageList';
import { useAppStore } from '@/store/app-store';
import { AgentId } from '@/lib/types';

interface AgentTimelineProps {
  agentId: AgentId;
}

export default function AgentTimeline({ agentId }: AgentTimelineProps) {
  const messages = useAppStore(
    (s) => s.agentTimelineMessages[agentId]
  );
  const typingAgents = useAppStore((s) =>
    s.typingAgents.filter((a) => a === agentId)
  );

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <MessageList messages={messages} typingAgents={typingAgents} />
    </div>
  );
}
