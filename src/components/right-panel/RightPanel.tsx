'use client';

import React from 'react';
import TabBar from '@/components/ui/TabBar';
import EditionView from './EditionView';
import RecommendationsView from './RecommendationsView';
import RoadmapView from './RoadmapView';
import UpdateBanner from './UpdateBanner';
import { IconNewspaper, IconLightbulb, IconRoute } from '@/components/ui/Icons';
import { useAppStore } from '@/store/app-store';
import { RightTab } from '@/lib/types';

export default function RightPanel() {
  const activeTab = useAppStore((s) => s.activeRightTab);
  const setActiveTab = useAppStore((s) => s.setActiveRightTab);
  const tabNotifications = useAppStore((s) => s.tabNotifications);
  const clearTabNotification = useAppStore((s) => s.clearTabNotification);

  const tabs = [
    {
      id: 'edition',
      label: 'Edition',
      icon: <IconNewspaper size={14} />,
      hasNotification: tabNotifications['edition'],
    },
    {
      id: 'recommendations',
      label: 'Recommendations',
      icon: <IconLightbulb size={14} />,
      hasNotification: tabNotifications['recommendations'],
    },
    {
      id: 'roadmap',
      label: 'Roadmap',
      icon: <IconRoute size={14} />,
      hasNotification: tabNotifications['roadmap'],
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as RightTab);
    clearTabNotification(tabId);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-bg-1">
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <UpdateBanner />
      {activeTab === 'edition' && <EditionView />}
      {activeTab === 'recommendations' && <RecommendationsView />}
      {activeTab === 'roadmap' && <RoadmapView />}
    </div>
  );
}
