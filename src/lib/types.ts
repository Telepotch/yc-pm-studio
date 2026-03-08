export type AgentId = 'nova' | 'iris' | 'scout';

export type AgentBeat = 'Quantitative' | 'Qualitative' | 'Market';

export interface Agent {
  id: AgentId;
  name: string;
  beat: AgentBeat;
  icon: string;
  initial: string;
}

export type SourceType = 'quantitative' | 'interview' | 'survey' | 'review' | 'web' | 'integration';

export interface Source {
  type: SourceType;
  name: string;
  detail?: string;
}

export type MessageTier = 'compact' | 'elevated';

export type MessageType =
  | 'report'
  | 'hypothesis'
  | 'intervention'
  | 'data-source-request'
  | 'edition-announcement'
  | 'pm-message';

export interface Message {
  id: string;
  agentId?: AgentId;
  type: MessageType;
  tier: MessageTier;
  content: string;
  timestamp: string;
  sources?: Source[];
  // Hypothesis
  hypothesisText?: string;
  confidence?: number;
  confidenceDelta?: string;
  missingData?: string;
  // Intervention
  interventionOptions?: InterventionOption[];
  interventionResolved?: boolean;
  selectedOption?: number;
  // Data source request
  dataSourceName?: string;
  dataSourceResolved?: boolean;
  dataSourceApproved?: boolean;
  // Edition
  editionConfidenceFrom?: number;
  editionConfidenceTo?: number;
}

export interface InterventionOption {
  label: string;
  description: string;
}

export type LeftTab = 'editorial' | 'nova' | 'iris' | 'scout';
export type RightTab = 'edition' | 'recommendations' | 'roadmap';

export interface Edition {
  headline: string;
  confidence: number;
  confidenceDelta: string;
  hypothesis: string;
  quantitative: EditionSection;
  qualitative: EditionSection;
  market: EditionSection;
}

export interface EditionSection {
  title: string;
  items: EditionItem[];
}

export interface EditionItem {
  text: string;
  source?: Source;
}

export type Priority = 'P0' | 'P1' | 'P2';

export interface Recommendation {
  id: string;
  priority: Priority;
  title: string;
  rationale: string;
  impact: string;
  approach: string;
}

export interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  timeline: string;
  items: string[];
}

export interface OnboardingData {
  productUrl: string;
  goals: string[];
  dataSource: string | null;
}

export type ScenarioActionType =
  | 'typing'
  | 'message'
  | 'intervention'
  | 'data-source-request'
  | 'edition-publish'
  | 'update-right-panel'
  | 'pause';

export interface ScenarioStep {
  id: number;
  action: ScenarioActionType;
  delay: number; // ms before this step executes
  agentId?: AgentId;
  message?: Omit<Message, 'id'>;
  edition?: Edition;
  recommendations?: Recommendation[];
  roadmap?: RoadmapPhase[];
  targetTab?: LeftTab;
  // For timeline messages
  timelineTarget?: AgentId;
}
