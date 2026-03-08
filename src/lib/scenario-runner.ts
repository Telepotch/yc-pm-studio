import { ScenarioStep } from './types';
import { useAppStore } from '@/store/app-store';

export class ScenarioRunner {
  private steps: ScenarioStep[];
  private currentIndex = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private paused = false;
  private resolveWait: (() => void) | null = null;
  private stopped = false;

  constructor(steps: ScenarioStep[]) {
    this.steps = steps;
  }

  start() {
    const store = useAppStore.getState();
    store.setScenarioRunning(true);
    store.setScenarioPaused(false);
    this.stopped = false;
    this.currentIndex = 0;
    this.executeNext();
  }

  stop() {
    this.stopped = true;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    const store = useAppStore.getState();
    store.setScenarioRunning(false);
  }

  pause() {
    this.paused = true;
    useAppStore.getState().setScenarioPaused(true);
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    useAppStore.getState().setScenarioPaused(false);

    if (this.resolveWait) {
      this.resolveWait();
      this.resolveWait = null;
    }
  }

  private async executeNext() {
    if (this.stopped || this.currentIndex >= this.steps.length) {
      this.stop();
      return;
    }

    const step = this.steps[this.currentIndex];
    const store = useAppStore.getState();

    // Wait for delay
    await this.delay(step.delay);
    if (this.stopped) return;

    switch (step.action) {
      case 'typing':
        if (step.agentId) {
          store.setTypingAgent(step.agentId, true);
        }
        break;

      case 'message':
        if (step.agentId) {
          store.setTypingAgent(step.agentId, false);
        }
        if (step.message) {
          const msg = { ...step.message, id: `msg-${Date.now()}-${step.id}` };
          if (step.timelineTarget) {
            store.addTimelineMessage(step.timelineTarget, msg);
            // Set notification dot for timeline tab if not actively viewing
            if (store.activeLeftTab !== step.timelineTarget) {
              store.setTabNotification(step.timelineTarget, true);
            }
          } else {
            store.addEditorialMessage(msg);
            if (store.activeLeftTab !== 'editorial') {
              store.setTabNotification('editorial', true);
            }
          }
        }
        break;

      case 'intervention':
        if (step.agentId) {
          store.setTypingAgent(step.agentId, false);
        }
        if (step.message) {
          const msg = { ...step.message, id: `msg-${Date.now()}-${step.id}` };
          store.addEditorialMessage(msg);
        }
        // Pause and wait for PM to resolve
        this.pause();
        await this.waitForResume();
        if (this.stopped) return;
        break;

      case 'data-source-request':
        if (step.agentId) {
          store.setTypingAgent(step.agentId, false);
        }
        if (step.message) {
          const msg = { ...step.message, id: `msg-${Date.now()}-${step.id}` };
          store.addEditorialMessage(msg);
        }
        // Pause and wait for PM to resolve
        this.pause();
        await this.waitForResume();
        if (this.stopped) return;
        break;

      case 'edition-publish':
        if (step.agentId) {
          store.setTypingAgent(step.agentId, false);
        }
        if (step.message) {
          const msg = { ...step.message, id: `msg-${Date.now()}-${step.id}` };
          store.addEditorialMessage(msg);
        }
        if (step.edition) {
          store.setEdition(step.edition);
          store.setEditionHighlight(true);
          setTimeout(() => store.setEditionHighlight(false), 2000);
        }
        if (step.recommendations) {
          store.setRecommendations(step.recommendations);
        }
        if (step.roadmap) {
          store.setRoadmap(step.roadmap);
        }
        // Set notification dots on right panel tabs
        store.setTabNotification('edition', true);
        store.setTabNotification('recommendations', true);
        store.setTabNotification('roadmap', true);
        // Show update banner
        const from = step.message?.editionConfidenceFrom ?? 0;
        const to = step.message?.editionConfidenceTo ?? 0;
        store.showUpdateBanner(
          `New Edition published — confidence ${from}% → ${to}%`
        );
        break;

      case 'pause':
        this.pause();
        await this.waitForResume();
        if (this.stopped) return;
        break;
    }

    this.currentIndex++;
    this.executeNext();
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      this.timer = setTimeout(resolve, ms);
    });
  }

  private waitForResume(): Promise<void> {
    return new Promise((resolve) => {
      this.resolveWait = resolve;
    });
  }
}
