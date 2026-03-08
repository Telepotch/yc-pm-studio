'use client';

import React from 'react';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  hasNotification?: boolean;
}

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function TabBar({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}: TabBarProps) {
  return (
    <div
      className={`flex items-center gap-0.5 px-2 pt-1.5 pb-0 bg-bg-0 border-b border-border-default ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium rounded-t-lg transition-all duration-150
              ${isActive
                ? 'text-text-0 bg-bg-1'
                : 'text-text-2 hover:text-text-1 hover:bg-bg-2/50'
              }
            `}
          >
            {tab.icon && (
              <span className={`transition-colors duration-150 ${isActive ? 'text-accent' : 'text-text-3'}`}>
                {tab.icon}
              </span>
            )}
            <span>{tab.label}</span>
            {tab.hasNotification && (
              <span className="relative flex h-1.5 w-1.5 ml-0.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-40 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
            )}
            {isActive && (
              <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-t-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
