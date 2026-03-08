import { Agent, SourceType } from './types';

export const AGENTS: Record<string, Agent> = {
  nova: {
    id: 'nova',
    name: 'Nova',
    beat: 'Quantitative',
    icon: '📊',
    initial: 'N',
    avatar: '/mixpanel-agent-avater.png',
    source: 'Mixpanel',
  },
  iris: {
    id: 'iris',
    name: 'Iris',
    beat: 'Qualitative',
    icon: '🎙️',
    initial: 'I',
    avatar: '/slack-agent-avater.png',
    source: 'Slack',
  },
  scout: {
    id: 'scout',
    name: 'Scout',
    beat: 'Market',
    icon: '🔍',
    initial: 'S',
    avatar: '/zendesk-agent-avater.png',
    source: 'Zendesk',
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
