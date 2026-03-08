'use client';

import React from 'react';

interface SplitPaneProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function SplitPane({ left, right }: SplitPaneProps) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-[55%] flex flex-col">
        {left}
      </div>
      <div className="w-px bg-border-default" />
      <div className="w-[45%] flex flex-col">
        {right}
      </div>
    </div>
  );
}
