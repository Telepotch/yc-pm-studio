import { create } from 'zustand';
import {
  Message,
  LeftTab,
  RightTab,
  Edition,
  Recommendation,
  RoadmapPhase,
  OnboardingData,
  AgentId,
} from '@/lib/types';

interface AppState {
  // Onboarding
  onboardingComplete: boolean;
  onboardingData: OnboardingData;
  setOnboardingComplete: (data: OnboardingData) => void;

  // Left panel
  activeLeftTab: LeftTab;
  setActiveLeftTab: (tab: LeftTab) => void;
  editorialMessages: Message[];
  agentTimelineMessages: Record<AgentId, Message[]>;
  addEditorialMessage: (msg: Message) => void;
  addTimelineMessage: (agentId: AgentId, msg: Message) => void;

  // Typing indicators
  typingAgents: AgentId[];
  setTypingAgent: (agentId: AgentId, typing: boolean) => void;

  // Right panel
  activeRightTab: RightTab;
  setActiveRightTab: (tab: RightTab) => void;
  edition: Edition | null;
  setEdition: (edition: Edition) => void;
  recommendations: Recommendation[];
  setRecommendations: (recs: Recommendation[]) => void;
  roadmap: RoadmapPhase[];
  setRoadmap: (phases: RoadmapPhase[]) => void;

  // Notification dots
  tabNotifications: Record<string, boolean>;
  setTabNotification: (tab: string, active: boolean) => void;
  clearTabNotification: (tab: string) => void;

  // Update banner
  updateBannerText: string | null;
  showUpdateBanner: (text: string) => void;
  hideUpdateBanner: () => void;

  // Scenario
  scenarioRunning: boolean;
  scenarioPaused: boolean;
  setScenarioRunning: (running: boolean) => void;
  setScenarioPaused: (paused: boolean) => void;

  // Intervention resolution
  resolveIntervention: (messageId: string, optionIndex: number) => void;
  resolveDataSource: (messageId: string, approved: boolean) => void;

  // Edition highlight
  editionHighlight: boolean;
  setEditionHighlight: (highlight: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Onboarding
  onboardingComplete: false,
  onboardingData: { productUrl: '', goals: [], dataSource: null },
  setOnboardingComplete: (data) =>
    set({ onboardingComplete: true, onboardingData: data }),

  // Left panel
  activeLeftTab: 'editorial',
  setActiveLeftTab: (tab) => set({ activeLeftTab: tab }),
  editorialMessages: [],
  agentTimelineMessages: { nova: [], iris: [], scout: [] },
  addEditorialMessage: (msg) =>
    set((state) => ({
      editorialMessages: [...state.editorialMessages, msg],
    })),
  addTimelineMessage: (agentId, msg) =>
    set((state) => ({
      agentTimelineMessages: {
        ...state.agentTimelineMessages,
        [agentId]: [...state.agentTimelineMessages[agentId], msg],
      },
    })),

  // Typing indicators
  typingAgents: [],
  setTypingAgent: (agentId, typing) =>
    set((state) => ({
      typingAgents: typing
        ? [...state.typingAgents.filter((a) => a !== agentId), agentId]
        : state.typingAgents.filter((a) => a !== agentId),
    })),

  // Right panel
  activeRightTab: 'edition',
  setActiveRightTab: (tab) => set({ activeRightTab: tab }),
  edition: null,
  setEdition: (edition) => set({ edition }),
  recommendations: [],
  setRecommendations: (recs) => set({ recommendations: recs }),
  roadmap: [],
  setRoadmap: (phases) => set({ roadmap: phases }),

  // Notification dots
  tabNotifications: {},
  setTabNotification: (tab, active) =>
    set((state) => ({
      tabNotifications: { ...state.tabNotifications, [tab]: active },
    })),
  clearTabNotification: (tab) =>
    set((state) => ({
      tabNotifications: { ...state.tabNotifications, [tab]: false },
    })),

  // Update banner
  updateBannerText: null,
  showUpdateBanner: (text) => set({ updateBannerText: text }),
  hideUpdateBanner: () => set({ updateBannerText: null }),

  // Scenario
  scenarioRunning: false,
  scenarioPaused: false,
  setScenarioRunning: (running) => set({ scenarioRunning: running }),
  setScenarioPaused: (paused) => set({ scenarioPaused: paused }),

  // Intervention resolution
  resolveIntervention: (messageId, optionIndex) =>
    set((state) => ({
      editorialMessages: state.editorialMessages.map((m) =>
        m.id === messageId
          ? { ...m, interventionResolved: true, selectedOption: optionIndex }
          : m
      ),
    })),
  resolveDataSource: (messageId, approved) =>
    set((state) => ({
      editorialMessages: state.editorialMessages.map((m) =>
        m.id === messageId
          ? { ...m, dataSourceResolved: true, dataSourceApproved: approved }
          : m
      ),
    })),

  // Edition highlight
  editionHighlight: false,
  setEditionHighlight: (highlight) => set({ editionHighlight: highlight }),
}));
