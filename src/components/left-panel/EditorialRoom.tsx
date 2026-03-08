'use client';

import React from 'react';
import MessageList from '@/components/messages/MessageList';
import MessageInput from './MessageInput';
import { useAppStore } from '@/store/app-store';

interface EditorialRoomProps {
  onInterventionResolve?: () => void;
  onDataSourceResolve?: () => void;
}

export default function EditorialRoom({
  onInterventionResolve,
  onDataSourceResolve,
}: EditorialRoomProps) {
  const messages = useAppStore((s) => s.editorialMessages);
  const typingAgents = useAppStore((s) => s.typingAgents);

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <MessageList
        messages={messages}
        typingAgents={typingAgents}
        onInterventionResolve={onInterventionResolve}
        onDataSourceResolve={onDataSourceResolve}
      />
      <MessageInput />
    </div>
  );
}
