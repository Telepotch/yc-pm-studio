import { Agent, SourceType } from './types';

export const AGENTS: Record<string, Agent> = {
  nova: {
    id: 'nova',
    name: 'Nova',
    beat: 'Quantitative',
    icon: '📊',
    initial: 'N',
  },
  iris: {
    id: 'iris',
    name: 'Iris',
    beat: 'Qualitative',
    icon: '🎙️',
    initial: 'I',
  },
  scout: {
    id: 'scout',
    name: 'Scout',
    beat: 'Market',
    icon: '🔍',
    initial: 'S',
  },
};

export const SOURCE_ICONS: Record<SourceType, string> = {
  quantitative: '📊',
  interview: '🎙️',
  survey: '📋',
  review: '⭐',
  web: '🔗',
  integration: '🔌',
};

export const AGENT_LIST = [AGENTS.nova, AGENTS.iris, AGENTS.scout] as const;
