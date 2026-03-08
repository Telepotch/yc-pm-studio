'use client';

import React, { useState } from 'react';
import { IconSend } from '@/components/ui/Icons';
import { useAppStore } from '@/store/app-store';
import { Message } from '@/lib/types';

export default function MessageInput() {
  const [text, setText] = useState('');
  const addEditorialMessage = useAppStore((s) => s.addEditorialMessage);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const msg: Message = {
      id: `pm-${Date.now()}`,
      type: 'pm-message',
      tier: 'compact',
      content: trimmed,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      }),
    };

    addEditorialMessage(msg);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const hasText = text.trim().length > 0;

  return (
    <div className="border-t border-border-default bg-bg-0 p-3">
      <div className="flex items-center gap-2 bg-bg-1 border border-border-default rounded-xl px-3 py-1.5 transition-all duration-200 focus-within:border-accent-border focus-within:shadow-[0_0_0_3px_rgba(0,162,255,0.08)]">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message the editorial room..."
          className="flex-1 bg-transparent py-1.5 text-[13px] text-text-1 placeholder:text-text-3 focus:outline-none"
        />
        <button
          onClick={handleSend}
          disabled={!hasText}
          className={`flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-150 ${
            hasText
              ? 'bg-accent text-white shadow-[0_1px_2px_rgba(0,162,255,0.3)] hover:brightness-110 active:scale-95'
              : 'text-text-3 cursor-not-allowed'
          }`}
        >
          <IconSend size={14} />
        </button>
      </div>
    </div>
  );
}
