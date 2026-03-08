'use client';

import { useRef, useCallback } from 'react';
import { ScenarioRunner } from '@/lib/scenario-runner';
import { SCENARIO_STEPS } from '@/lib/scenario';

export function useScenario() {
  const runnerRef = useRef<ScenarioRunner | null>(null);

  const startScenario = useCallback(() => {
    if (runnerRef.current) {
      runnerRef.current.stop();
    }
    const runner = new ScenarioRunner(SCENARIO_STEPS);
    runnerRef.current = runner;
    runner.start();
  }, []);

  const resumeScenario = useCallback(() => {
    runnerRef.current?.resume();
  }, []);

  const stopScenario = useCallback(() => {
    runnerRef.current?.stop();
    runnerRef.current = null;
  }, []);

  return { startScenario, resumeScenario, stopScenario };
}
