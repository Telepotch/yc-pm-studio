import { AgentId } from './types';

export type MessageSide = 'left' | 'right';

const agentSides: Record<AgentId, MessageSide> = {
  nova: 'left',
  iris: 'right',
  scout: 'left',
};

export function getAgentSide(agentId?: AgentId): MessageSide {
  if (!agentId) return 'right'; // PM messages go right
  return agentSides[agentId] ?? 'left';
}
