'use client';

import React from 'react';
import TabBar from '@/components/ui/TabBar';
import EditorialRoom from './EditorialRoom';
import AgentTimeline from './AgentTimeline';
import Image from 'next/image';
import { IconPenLine } from '@/components/ui/Icons';
import { AGENTS } from '@/lib/constants';
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
      icon: <Image src={AGENTS.nova.avatar} alt="Nova" width={18} height={18} className="rounded-full" />,
      hasNotification: tabNotifications['nova'],
    },
    {
      id: 'iris',
      label: 'Iris',
      icon: <Image src={AGENTS.iris.avatar} alt="Iris" width={18} height={18} className="rounded-full" />,
      hasNotification: tabNotifications['iris'],
    },
    {
      id: 'scout',
      label: 'Scout',
      icon: <Image src={AGENTS.scout.avatar} alt="Scout" width={18} height={18} className="rounded-full" />,
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
