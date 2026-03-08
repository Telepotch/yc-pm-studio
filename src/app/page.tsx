'use client';

import React, { useEffect, useRef } from 'react';
import TopBar from '@/components/layout/TopBar';
import SplitPane from '@/components/layout/SplitPane';
import LeftPanel from '@/components/left-panel/LeftPanel';
import RightPanel from '@/components/right-panel/RightPanel';
import OnboardingModal from '@/components/onboarding/OnboardingModal';
import { useAppStore } from '@/store/app-store';
import { useScenario } from '@/hooks/useScenario';

export default function Home() {
  const onboardingComplete = useAppStore((s) => s.onboardingComplete);
  const { startScenario, resumeScenario } = useScenario();
  const scenarioStarted = useRef(false);

  useEffect(() => {
    if (onboardingComplete && !scenarioStarted.current) {
      scenarioStarted.current = true;
      // Small delay so UI renders first
      setTimeout(startScenario, 500);
    }
  }, [onboardingComplete, startScenario]);

  if (!onboardingComplete) {
    return (
      <div className="h-screen flex items-center justify-center bg-bg-2">
        <OnboardingModal />
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-bg-2">
      <TopBar />
      <SplitPane
        left={
          <LeftPanel
            onInterventionResolve={resumeScenario}
            onDataSourceResolve={resumeScenario}
          />
        }
        right={<RightPanel />}
      />
    </div>
  );
}
