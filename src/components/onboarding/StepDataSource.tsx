'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { IconCheck, IconArrowLeft, IconArrowRight } from '@/components/ui/Icons';
import { AGENT_LIST } from '@/lib/constants';
import { AgentId } from '@/lib/types';

interface StepDataSourceProps {
  goals: string[];
  onSelect: (source: string | null) => void;
  onBack: () => void;
}

/* ── Service definitions ─────────────────────────── */

const ALL_SOURCES = [
  { id: 'stripe', name: 'Stripe', desc: 'Revenue & payments' },
  { id: 'slack', name: 'Slack', desc: 'Team conversations' },
  { id: 'google-drive', name: 'Google Drive', desc: 'Docs & reports' },
  { id: 'hubspot', name: 'HubSpot', desc: 'CRM & pipeline' },
  { id: 'zendesk', name: 'Zendesk', desc: 'Support tickets' },
  { id: 'mixpanel', name: 'Mixpanel', desc: 'Product analytics' },
] as const;

const GOAL_SOURCES: Record<string, string[]> = {
  'Reduce churn': ['stripe', 'zendesk', 'mixpanel'],
  'Grow enterprise': ['hubspot', 'slack', 'google-drive'],
  'Increase activation': ['mixpanel', 'stripe', 'slack'],
  'Improve retention': ['stripe', 'mixpanel', 'slack'],
  'Competitive response': ['google-drive', 'slack', 'hubspot'],
  'Expand to new market': ['google-drive', 'hubspot', 'slack'],
  'Improve NPS': ['zendesk', 'slack', 'mixpanel'],
  'Reduce support load': ['zendesk', 'slack', 'stripe'],
};

/* Reverse map: source id → agent id (from AGENT_LIST) */
const SOURCE_TO_AGENT: Record<string, AgentId> = {
  mixpanel: 'nova',
  slack: 'iris',
  zendesk: 'scout',
};

/* ── Service Logos ───────────────────────────────── */

function SourceLogo({ id, size = 28 }: { id: string; size?: number }) {
  const r = size * 0.25;
  switch (id) {
    case 'stripe':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx={r} fill="#635BFF" />
          <path
            d="M13.2 10c-.9 0-1.4.35-1.4.9 0 1.1 2.8.8 2.8 2.6 0 1.3-1.1 2-2.6 2a5.4 5.4 0 01-2.2-.48v-1.6c.7.38 1.6.62 2.2.62.8 0 1.1-.3 1.1-.75 0-1.15-2.8-.85-2.8-2.7 0-1.2 1-1.9 2.4-1.9.7 0 1.4.13 2 .38v1.55A4.5 4.5 0 0013.2 10z"
            fill="white"
          />
        </svg>
      );
    case 'slack':
      return (
        <Image
          src="/slack_logo.png"
          alt="Slack"
          width={size}
          height={size}
          className="rounded-[7px]"
        />
      );
    case 'google-drive':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx={r} fill="#F8F9FA" stroke="#E8E8E5" strokeWidth="0.5" />
          <path d="M10.5 7.5L6.5 14.5h5.5l4-7H10.5z" fill="#4285F4" opacity="0.9" />
          <path d="M16 7.5l4 7H14.5l-4-7H16z" fill="#FBBC04" opacity="0.9" />
          <path d="M6.5 14.5L8.5 18h11l2-3.5H6.5z" fill="#34A853" opacity="0.9" />
        </svg>
      );
    case 'hubspot':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx={r} fill="#FF7A59" />
          <circle cx="14" cy="13.5" r="2.8" stroke="white" strokeWidth="1.4" fill="none" />
          <line x1="14" y1="9" x2="14" y2="10.7" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="14" y1="16.3" x2="14" y2="18" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="10.3" y1="11.2" x2="11.5" y2="12" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="16.5" y1="15" x2="17.7" y2="15.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case 'zendesk':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx={r} fill="#03363D" />
          <path
            d="M10 10h8l-8 8h8"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case 'mixpanel':
      return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx={r} fill="#7856FF" />
          <rect x="9" y="14.5" width="2.5" height="4.5" rx="0.8" fill="white" opacity="0.6" />
          <rect x="12.8" y="12" width="2.5" height="7" rx="0.8" fill="white" opacity="0.8" />
          <rect x="16.5" y="9" width="2.5" height="10" rx="0.8" fill="white" />
        </svg>
      );
    default:
      return <div className="w-7 h-7 rounded-lg bg-bg-2" />;
  }
}

/* ── Component ───────────────────────────────────── */

type Phase = 'scanning' | 'connecting' | 'ready';

export default function StepDataSource({ goals, onSelect, onBack }: StepDataSourceProps) {
  const [phase, setPhase] = useState<Phase>('scanning');
  const [connected, setConnected] = useState<Set<string>>(new Set());

  // Pick sources based on selected goals
  const sources = useMemo(() => {
    const ids = new Set<string>();
    goals.forEach((g) => GOAL_SOURCES[g]?.forEach((s) => ids.add(s)));
    if (ids.size === 0) {
      ['stripe', 'slack', 'zendesk', 'mixpanel'].forEach((s) => ids.add(s));
    }
    return ALL_SOURCES.filter((s) => ids.has(s.id)).slice(0, 5);
  }, [goals]);

  // Which agents are "live" (their source has connected)
  const liveAgents = useMemo(() => {
    const set = new Set<string>();
    connected.forEach((srcId) => {
      const agentId = SOURCE_TO_AGENT[srcId];
      if (agentId) set.add(agentId);
    });
    return set;
  }, [connected]);

  // Auto-play animation sequence
  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];

    // scanning → connecting
    t.push(setTimeout(() => setPhase('connecting'), 1200));

    // Connect sources one by one
    sources.forEach((s, i) => {
      t.push(
        setTimeout(() => {
          setConnected((prev) => new Set([...prev, s.id]));
        }, 1200 + 700 * (i + 1)),
      );
    });

    // After all sources connected → ready
    const afterAll = 1200 + 700 * sources.length + 600;
    t.push(setTimeout(() => setPhase('ready'), afterAll));

    return () => t.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headlines: Record<Phase, [string, string]> = {
    scanning: [
      'Analyzing your goals\u2026',
      'Matching the right data pipelines to your strategy.',
    ],
    connecting: [
      'Connecting data sources',
      'Establishing secure links to your tools.',
    ],
    ready: [
      'Your newsroom is ready',
      'Field agents are fully briefed and connected.',
    ],
  };

  return (
    <div className="px-8 pb-8 pt-6">
      {/* Header */}
      <div className="text-[11px] text-text-3 font-semibold uppercase tracking-wider mb-1">
        Step 3 of 3
      </div>
      <h2 className="text-[18px] font-display italic text-text-0 mb-0.5">
        {headlines[phase][0]}
      </h2>
      <p className="text-[12px] text-text-2 mb-5">{headlines[phase][1]}</p>

      {/* ── Scanning pulse (full width) ── */}
      {phase === 'scanning' && (
        <div className="flex flex-col items-center justify-center py-10 gap-4 animate-fade-in">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping" />
            <div className="absolute inset-1.5 rounded-full bg-accent/15 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-accent flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {goals.map((g) => (
              <span
                key={g}
                className="text-[11px] px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium animate-gentle-pulse"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ── 2-column layout: Sources (left) + Agents (right) ── */}
      {phase !== 'scanning' && (
        <div className="flex gap-6 animate-fade-in mb-4">
          {/* Left: Source connection list */}
          <div className="flex-1 min-w-0 space-y-1.5">
            {sources.map((source) => {
              const done = connected.has(source.id);
              return (
                <div
                  key={source.id}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-500 ${
                    done
                      ? 'bg-bg-0 border-border-default'
                      : 'bg-bg-1/60 border-transparent'
                  }`}
                >
                  <div
                    className={`shrink-0 transition-opacity duration-500 ${
                      done ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    <SourceLogo id={source.id} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-[13px] font-semibold transition-colors duration-500 ${
                        done ? 'text-text-0' : 'text-text-3'
                      }`}
                    >
                      {source.name}
                    </span>
                    <span
                      className={`text-[11px] ml-1.5 transition-colors duration-500 ${
                        done ? 'text-text-2' : 'text-text-3/50'
                      }`}
                    >
                      {source.desc}
                    </span>
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {done ? (
                      <div className="w-[18px] h-[18px] rounded-full bg-emerald-500 flex items-center justify-center animate-check-pop">
                        <IconCheck size={11} className="text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border-[2px] border-bg-3 border-t-text-3 animate-spin" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Agent column — always shows all 3 */}
          <div className="w-[180px] shrink-0 flex flex-col gap-2">
            <div className="text-[10px] text-text-3 font-semibold uppercase tracking-wider mb-0.5">
              Field Agents
            </div>
            {AGENT_LIST.map((agent) => {
              const live = liveAgents.has(agent.id);
              return (
                <div
                  key={agent.id}
                  className={`flex flex-col items-center gap-1 py-3 px-2 rounded-xl border transition-all duration-500 ${
                    live
                      ? 'bg-bg-0 border-border-default shadow-sm'
                      : 'bg-bg-1/40 border-border-light'
                  }`}
                  style={
                    live
                      ? { animation: 'agent-materialize 0.6s cubic-bezier(0.22,1,0.36,1)' }
                      : {}
                  }
                >
                  {/* Avatar */}
                  <div className="relative">
                    {live && (
                      <div
                        className="absolute -inset-1.5 rounded-full animate-pulse opacity-20 blur-sm"
                        style={{ backgroundColor: agent.id === 'nova' ? '#7856FF' : agent.id === 'iris' ? '#4A154B' : '#03363D' }}
                      />
                    )}
                    <div
                      className={`relative w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                        live
                          ? 'border-border-default bg-bg-0'
                          : 'border-border-light bg-bg-2 grayscale opacity-30'
                      }`}
                    >
                      <Image
                        src={agent.avatar}
                        alt={agent.name}
                        width={56}
                        height={56}
                        className="object-cover scale-110"
                      />
                    </div>
                  </div>
                  {/* Info */}
                  <div className="text-center">
                    <div
                      className={`text-[12px] font-semibold transition-colors duration-500 ${
                        live ? 'text-text-0' : 'text-text-3'
                      }`}
                    >
                      {agent.name}
                    </div>
                    <div className="text-[10px] text-text-3 leading-tight">
                      {agent.beat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[13px] text-text-2 hover:text-text-0 transition-colors cursor-pointer"
        >
          <IconArrowLeft size={14} />
          Back
        </button>

        {phase === 'ready' && (
          <button
            onClick={() => onSelect(Array.from(connected).join(',') || null)}
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[13px] font-semibold rounded-xl hover:bg-accent/90 transition-all cursor-pointer shadow-[0_2px_12px_rgba(0,162,255,0.25)] animate-fade-up"
          >
            Launch Editorial Room
            <IconArrowRight size={14} />
          </button>
        )}

        {phase === 'connecting' && (
          <button
            onClick={() => onSelect(Array.from(connected).join(',') || null)}
            className="text-[12px] text-text-3 hover:text-text-2 transition-colors cursor-pointer"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
