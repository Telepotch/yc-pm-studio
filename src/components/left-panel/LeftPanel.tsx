'use client';

import React from 'react';
import TabBar from '@/components/ui/TabBar';
import EditorialRoom from './EditorialRoom';
import AgentTimeline from './AgentTimeline';
import { IconPenLine, IconChartBar, IconMicrophone, IconCompass } from '@/components/ui/Icons';
import { useAppStore } from '@/store/app-store';
import { LeftTab } from '@/lib/types';

interface LeftPanelProps {
  onInterventionResolve?: () => void;
  onDataSourceResolve?: () => void;
}

export default function LeftPanel({
  onInterventionResolve,
  onDataSourceResolve,
}: LeftPanelProps) {
  const activeTab = useAppStore((s) => s.activeLeftTab);
  const setActiveTab = useAppStore((s) => s.setActiveLeftTab);
  const tabNotifications = useAppStore((s) => s.tabNotifications);
  const clearTabNotification = useAppStore((s) => s.clearTabNotification);

  const tabs = [
    {
      id: 'editorial',
      label: 'Editorial Room',
      icon: <IconPenLine size={14} />,
      hasNotification: tabNotifications['editorial'],
    },
    {
      id: 'nova',
      label: 'Nova',
      icon: <IconChartBar size={14} />,
      hasNotification: tabNotifications['nova'],
    },
    {
      id: 'iris',
      label: 'Iris',
      icon: <IconMicrophone size={14} />,
      hasNotification: tabNotifications['iris'],
    },
    {
      id: 'scout',
      label: 'Scout',
      icon: <IconCompass size={14} />,
      hasNotification: tabNotifications['scout'],
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as LeftTab);
    clearTabNotification(tabId);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-bg-0">
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 'editorial' && (
        <EditorialRoom
          onInterventionResolve={onInterventionResolve}
          onDataSourceResolve={onDataSourceResolve}
        />
      )}
      {activeTab === 'nova' && <AgentTimeline agentId="nova" />}
      {activeTab === 'iris' && <AgentTimeline agentId="iris" />}
      {activeTab === 'scout' && <AgentTimeline agentId="scout" />}
    </div>
  );
}
