import { ScenarioStep, Edition, Recommendation, RoadmapPhase } from './types';

// ─── Edition Data ───────────────────────────────────────────────────────────

const EDITION_V1: Edition = {
  headline: 'Edition #1 — Gen-Z Subscription Analysis',
  confidence: 82,
  confidenceDelta: 'Confidence upgraded: 65% → 82%',
  hypothesis:
    'AI-powered hyper-personalization can improve retention by 40%+ vs. existing services',
  quantitative: {
    title: 'Quantitative Findings',
    items: [
      {
        text: 'Gen-Z spend an average of ¥8,420/month on subscriptions, up 23% YoY. Experience-based subs growing fastest at 34% YoY.',
        source: {
          type: 'quantitative',
          name: 'Payment Data API',
          detail: 'n=12,847',
        },
      },
      {
        text: 'Top 10% of spenders account for 38% of total subscription spend. Power-law distribution suggests high-value segment opportunity.',
        source: {
          type: 'quantitative',
          name: 'Payment Data API',
          detail: 'cohort analysis',
        },
      },
      {
        text: 'Churn rate peaks at month 3 (28%) and month 7 (19%). Personalization interventions at these points could recover ~$2.1M ARR.',
        source: {
          type: 'survey',
          name: 'Churn Survey',
          detail: 'n=340',
        },
      },
    ],
  },
  qualitative: {
    title: 'Qualitative Insights',
    items: [
      {
        text: '"I cancel when it stops feeling like it knows me." Recurring theme: personalization decay after initial honeymoon period.',
        source: {
          type: 'interview',
          name: 'User Interviews',
          detail: 'n=24',
        },
      },
      {
        text: 'Experience fatigue is real — 67% of interviewees mentioned feeling "bored" by month 4. Content rotation alone doesn\'t solve it.',
        source: {
          type: 'interview',
          name: 'User Interviews',
          detail: 'sentiment analysis',
        },
      },
      {
        text: 'Users who felt "understood" by the product had 3.2x higher retention. The key driver is contextual awareness, not just recommendation accuracy.',
        source: {
          type: 'interview',
          name: 'User Interviews',
          detail: 'n=24',
        },
      },
    ],
  },
  market: {
    title: 'Market Intelligence',
    items: [
      {
        text: 'No competitor currently offers AI-driven personalization beyond basic collaborative filtering. White space confirmed.',
        source: { type: 'web', name: 'Competitive Analysis', detail: '12 competitors' },
      },
      {
        text: 'Market for personalized subscription experiences projected at $4.2B by 2028 (CAGR 28%). Japan market under-penetrated.',
        source: { type: 'web', name: 'Market Reports', detail: 'Gartner + CB Insights' },
      },
      {
        text: 'Two incumbents testing AI features in beta. Window for first-mover advantage estimated at 6–9 months.',
        source: { type: 'web', name: 'Product Hunt + TechCrunch' },
      },
    ],
  },
};

const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'rec-1',
    priority: 'P0',
    title: 'Run Month-3 Churn Intervention Experiment',
    rationale:
      'Data shows 28% churn at month 3. A personalization reset at this point could recover ~$2.1M ARR.',
    impact: 'High — directly validates core hypothesis',
    approach:
      'A/B test personalization re-calibration for users entering month 3. Target n=500 over 4 weeks.',
  },
  {
    id: 'rec-2',
    priority: 'P0',
    title: 'Build Contextual Awareness MVP',
    rationale:
      'Users who felt "understood" had 3.2x retention. Current system lacks contextual signals beyond usage history.',
    impact: 'High — foundational for differentiation',
    approach:
      'Integrate time-of-day, mood signals, and recent browsing context into recommendation engine.',
  },
  {
    id: 'rec-3',
    priority: 'P1',
    title: 'Launch Gen-Z Power User Interview Series',
    rationale:
      'Top 10% spenders drive 38% of revenue. Understanding their specific needs is critical for retention strategy.',
    impact: 'Medium — informs product roadmap',
    approach:
      'Recruit 15 power users for in-depth interviews. Focus on personalization expectations and switching triggers.',
  },
  {
    id: 'rec-4',
    priority: 'P1',
    title: 'Competitive Feature Parity Analysis',
    rationale:
      'Two incumbents testing AI features. Need to understand their approach to maintain differentiation.',
    impact: 'Medium — defensive positioning',
    approach:
      'Sign up for competitor beta programs. Document feature gaps and positioning opportunities.',
  },
  {
    id: 'rec-5',
    priority: 'P2',
    title: 'Explore Social Subscription Features',
    rationale:
      'Several interviewees mentioned wanting to share discoveries with friends. Social layer could reduce churn.',
    impact: 'Exploratory — potential future differentiator',
    approach:
      'Concept test with 5 users. If positive signal, add to Q3 roadmap.',
  },
];

const ROADMAP: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phase: 'Phase 1',
    title: 'Validate & Experiment',
    timeline: 'Weeks 1–4',
    items: [
      'Run month-3 churn intervention A/B test (n=500)',
      'Complete power user interview series (n=15)',
      'Analyze competitor beta features',
    ],
  },
  {
    id: 'phase-2',
    phase: 'Phase 2',
    title: 'Build Contextual Engine',
    timeline: 'Weeks 5–10',
    items: [
      'Develop contextual awareness MVP',
      'Integrate time, mood, and browsing signals',
      'Internal alpha testing with team',
    ],
  },
  {
    id: 'phase-3',
    phase: 'Phase 3',
    title: 'Scale & Differentiate',
    timeline: 'Weeks 11–16',
    items: [
      'Launch contextual personalization to 10% of users',
      'Measure retention impact vs. control',
      'Explore social subscription features if signal positive',
    ],
  },
];

// ─── Scenario Steps ─────────────────────────────────────────────────────────

let msgId = 0;
function nextId() {
  return `msg-${++msgId}`;
}

export const SCENARIO_STEPS: ScenarioStep[] = [
  // ── Act 1: Kickoff ──────────────────────────────────────────────────────
  {
    id: 1,
    action: 'typing',
    delay: 1000,
    agentId: 'nova',
  },
  {
    id: 2,
    action: 'message',
    delay: 2000,
    agentId: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Starting quantitative analysis. Pulling subscription data from the Payment API — will have initial findings shortly.',
      timestamp: '2:00 PM',
    },
  },
  {
    id: 3,
    action: 'typing',
    delay: 1500,
    agentId: 'iris',
  },
  {
    id: 4,
    action: 'message',
    delay: 2000,
    agentId: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Beginning qualitative research. I\'ve identified 24 recent user interviews in the connected data. Starting sentiment analysis now.',
      timestamp: '2:00 PM',
    },
  },
  {
    id: 5,
    action: 'typing',
    delay: 1000,
    agentId: 'scout',
  },
  {
    id: 6,
    action: 'message',
    delay: 2000,
    agentId: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Mapping the competitive landscape. Scanning 12 direct and adjacent competitors for positioning gaps.',
      timestamp: '2:01 PM',
    },
  },

  // ── Nova Timeline (Mixpanel) ──────────────────────────────────────────
  {
    id: 7,
    action: 'message',
    delay: 800,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Connected to Mixpanel workspace. Starting subscription funnel analysis on the "Gen-Z Subscription" project.',
      timestamp: '2:00 PM',
      sourceContext: 'Mixpanel — Project Setup',
      sources: [
        { type: 'quantitative', name: 'Mixpanel', detail: 'workspace connected' },
      ],
    },
  },
  {
    id: 100,
    action: 'message',
    delay: 600,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Pulled subscription event data. 12,847 valid user profiles after preprocessing. Sample quality is high — 94% event completeness rate.',
      timestamp: '2:01 PM',
      sourceContext: 'Mixpanel — Event Export',
      dataSnippet: 'Total events: 2,847,321\nUnique users: 12,847\nDate range: 2024-01 to 2025-02\nEvent completeness: 94.2%',
      sources: [
        { type: 'quantitative', name: 'Mixpanel', detail: 'n=12,847' },
      ],
    },
  },
  {
    id: 101,
    action: 'message',
    delay: 800,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Subscription spend analysis complete. Gen-Z spend is up 23% YoY, with experience-based subs growing fastest.',
      timestamp: '2:04 PM',
      sourceContext: 'Mixpanel — Revenue Analysis',
      dataSnippet: 'Avg monthly spend: ¥8,420\nYoY growth: +23%\nExperience subs: +34% YoY\nContent subs: +12% YoY\nUtility subs: +8% YoY',
      analysisNote: 'Experience-based subscriptions are the clear growth driver. This segment deserves dedicated analysis.',
      sources: [
        { type: 'quantitative', name: 'Mixpanel', detail: 'revenue cohort' },
      ],
    },
  },
  {
    id: 102,
    action: 'message',
    delay: 700,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Power-law distribution detected. Top 10% of spenders account for 38% of total subscription spend. High-value segment opportunity is significant.',
      timestamp: '2:08 PM',
      sourceContext: 'Mixpanel — Cohort Analysis',
      dataSnippet: 'Top 1%: ¥28,400/mo (12% of spend)\nTop 10%: ¥14,200/mo (38% of spend)\nMedian: ¥6,800/mo\nBottom 25%: ¥2,100/mo',
      analysisNote: 'Revenue is highly concentrated. A retention strategy focused on the top 10% could have outsized impact.',
      sources: [{ type: 'quantitative', name: 'Mixpanel', detail: 'cohort analysis' }],
    },
  },

  // ── Iris Timeline (Slack) ──────────────────────────────────────────
  {
    id: 103,
    action: 'message',
    delay: 500,
    agentId: 'iris',
    timelineTarget: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Connected to Slack workspace. Scanning #product-feedback, #support, and #user-research channels for qualitative signals.',
      timestamp: '2:00 PM',
      sourceContext: 'Slack — Workspace Connected',
      sources: [
        { type: 'interview', name: 'Slack', detail: '3 channels' },
      ],
    },
  },
  {
    id: 104,
    action: 'message',
    delay: 700,
    agentId: 'iris',
    timelineTarget: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Found recurring theme in #product-feedback. Users are describing a "personalization decay" — the product recommendations feel less relevant over time.',
      timestamp: '2:02 PM',
      sourceContext: 'Slack — #product-feedback',
      dataSnippet: '@tanaka_m: "First month was amazing, every recommendation was spot on. By month 3, it felt like it forgot about me."\n\n@sato_y: "The suggestions used to be so good. Now it\'s just the same stuff recycled."',
      analysisNote: 'Two independent users describing the same pattern. The "honeymoon period" for personalization appears to end around month 3.',
      sources: [
        { type: 'interview', name: 'Slack', detail: '#product-feedback' },
      ],
    },
  },
  {
    id: 105,
    action: 'message',
    delay: 600,
    agentId: 'iris',
    timelineTarget: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Scanning #support channel. Sentiment analysis shows significant negative shift around month 4 of user lifecycle.',
      timestamp: '2:05 PM',
      sourceContext: 'Slack — #support',
      dataSnippet: '@customer_success: "We\'re seeing a spike in cancellation requests from users in their 3rd-4th month. Common complaint: \'it stopped knowing me.\'"\n\n@pm_lead: "Same pattern in the NPS data. Score drops from 72 to 41 between M2 and M4."',
      analysisNote: 'Internal team is already aware of the pattern but hasn\'t identified the root cause. This aligns with our quantitative churn data.',
      sources: [
        { type: 'interview', name: 'Slack', detail: '#support' },
      ],
    },
  },

  // ── Scout Timeline (Zendesk) ──────────────────────────────────────
  {
    id: 106,
    action: 'message',
    delay: 500,
    agentId: 'scout',
    timelineTarget: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Connected to Zendesk. Scanning 4,200+ support tickets from the last 6 months for churn patterns and competitor mentions.',
      timestamp: '2:01 PM',
      sourceContext: 'Zendesk — Ticket Analysis',
      sources: [
        { type: 'web', name: 'Zendesk', detail: '4,200+ tickets' },
      ],
    },
  },
  {
    id: 107,
    action: 'message',
    delay: 700,
    agentId: 'scout',
    timelineTarget: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Ticket category analysis complete. Cancellation requests are up 34% QoQ, with "recommendation quality" cited as the #1 reason.',
      timestamp: '2:04 PM',
      sourceContext: 'Zendesk — Cancellation Tickets',
      dataSnippet: 'Cancellation reasons (top 5):\n1. Recommendation quality — 38%\n2. Price vs. value — 22%\n3. Found alternative — 18%\n4. No longer needed — 14%\n5. Technical issues — 8%',
      analysisNote: 'Recommendation quality is the dominant churn driver — nearly double the next reason. This strongly supports the personalization hypothesis.',
      sources: [
        { type: 'web', name: 'Zendesk', detail: 'n=1,247 tickets' },
      ],
    },
  },
  {
    id: 108,
    action: 'message',
    delay: 600,
    agentId: 'scout',
    timelineTarget: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Interesting competitor signal in recent tickets. Some users are explicitly mentioning switching to competitors for "better AI."',
      timestamp: '2:06 PM',
      sourceContext: 'Zendesk — Ticket #4521',
      dataSnippet: 'Ticket #4521 — Cancellation Request\nUser: Premium subscriber (8 months)\n\n"I\'m switching to [CompetitorX]. Their AI actually learns from my feedback and gets better over time. Yours seems to plateau after a few weeks."',
      analysisNote: 'Direct competitor threat signal. CompetitorX is being perceived as having better personalization. Need to investigate their approach.',
      sources: [
        { type: 'web', name: 'Zendesk', detail: 'Ticket #4521' },
      ],
    },
  },

  // ── Act 2: Field Reports ────────────────────────────────────────────────
  {
    id: 9,
    action: 'typing',
    delay: 2000,
    agentId: 'nova',
  },
  {
    id: 10,
    action: 'message',
    delay: 2500,
    agentId: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Gen-Z spend an average of ¥8,420/month on subscriptions, up 23% YoY. Experience-based subs growing fastest at 34% YoY.',
      timestamp: '2:01 PM',
      sources: [
        { type: 'quantitative', name: 'Payment Data API', detail: 'n=12,847' },
      ],
    },
  },
  {
    id: 11,
    action: 'typing',
    delay: 1500,
    agentId: 'iris',
  },
  {
    id: 12,
    action: 'message',
    delay: 2500,
    agentId: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Key theme emerging from interviews: "experience fatigue." Users report feeling bored by month 4, regardless of content quality. 67% mentioned this unprompted.',
      timestamp: '2:05 PM',
      sources: [
        {
          type: 'interview',
          name: 'User Interviews',
          detail: 'n=24',
        },
      ],
    },
  },

  // Iris timeline — deeper Slack findings
  {
    id: 13,
    action: 'message',
    delay: 800,
    agentId: 'iris',
    timelineTarget: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Critical emotional signal found. "Personalization decay" is the core churn driver — not content quality, not pricing.',
      timestamp: '2:06 PM',
      sourceContext: 'Slack — #user-research',
      dataSnippet: '@ux_researcher: "Ran exit interviews this week. Direct quote from 3 separate users: \'I cancel when it stops feeling like it knows me.\' This is consistent across segments."\n\n@data_analyst: "Correlates with our M3 retention cliff. Something breaks in the personalization model around week 10-12."',
      analysisNote: 'The qualitative and quantitative evidence are converging. Personalization decay around month 3 is the #1 churn driver.',
      sources: [
        { type: 'interview', name: 'Slack', detail: '#user-research' },
      ],
    },
  },
  {
    id: 109,
    action: 'message',
    delay: 600,
    agentId: 'iris',
    timelineTarget: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Found positive signal too — users who feel "understood" have dramatically higher retention. The opportunity is real.',
      timestamp: '2:08 PM',
      sourceContext: 'Slack — #product-feedback',
      dataSnippet: '@power_user_k: "Honestly this is the only subscription I\'ve kept for over a year. It actually gets better at knowing what I want."\n\n@user_nina: "Love how it remembers I hate horror and adjusts everything accordingly. Feels like it knows me."',
      analysisNote: 'Users who feel "understood" show 3.2x higher retention. Contextual awareness — not just accuracy — is the key differentiator.',
      sources: [
        { type: 'interview', name: 'Slack', detail: '#product-feedback' },
      ],
    },
  },

  {
    id: 14,
    action: 'typing',
    delay: 2000,
    agentId: 'scout',
  },
  {
    id: 15,
    action: 'message',
    delay: 2500,
    agentId: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'No competitor currently offers AI-driven personalization beyond basic collaborative filtering. Two incumbents are testing AI features in beta, but they\'re focused on content recommendation, not contextual awareness. White space confirmed.',
      timestamp: '2:07 PM',
      sources: [
        { type: 'web', name: 'Competitive Analysis', detail: '12 competitors' },
      ],
    },
  },

  // Cross-reference
  {
    id: 16,
    action: 'typing',
    delay: 1500,
    agentId: 'nova',
  },
  {
    id: 17,
    action: 'message',
    delay: 2000,
    agentId: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Cross-referencing with Iris\'s interview data. Users who felt "understood" by the product had 3.2x higher retention. The quantitative data aligns — churn rate peaks at month 3 (28%) and month 7 (19%).',
      timestamp: '2:09 PM',
      sources: [
        { type: 'quantitative', name: 'Payment Data API', detail: 'cohort analysis' },
        { type: 'interview', name: 'User Interviews', detail: 'n=24' },
      ],
    },
  },

  // Nova timeline — churn analysis + cross-reference
  {
    id: 111,
    action: 'message',
    delay: 500,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Retention curve analysis reveals two critical churn cliffs. Month 3 and Month 7 are the key intervention points.',
      timestamp: '2:09 PM',
      sourceContext: 'Mixpanel — Retention Curves',
      dataSnippet: 'Retention by month:\nM1: 94% → M2: 82% → M3: 54% (−28%!)\nM4: 48% → M5: 44% → M6: 41%\nM7: 22% (−19%!) → M8: 20% → M12: 18%',
      analysisNote: 'Two clear cliffs at M3 and M7. Personalization interventions at these points could recover ~$2.1M ARR based on current ARPU.',
      sources: [
        { type: 'quantitative', name: 'Mixpanel', detail: 'retention analysis' },
      ],
    },
  },
  {
    id: 112,
    action: 'message',
    delay: 600,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Cross-referencing Mixpanel data with Iris\'s Slack findings. The quantitative and qualitative data are converging on the same story.',
      timestamp: '2:12 PM',
      sourceContext: 'Mixpanel + Slack — Cross-reference',
      dataSnippet: 'Mixpanel: M3 churn cliff at 28%\nSlack #support: "M3 cancellation spike"\nSlack #user-research: "personalization breaks at week 10-12"\n\nCorrelation: 0.91 between personalization engagement score decay and churn timing.',
      analysisNote: 'Strong convergence across data sources. Confidence in personalization-decay hypothesis is building — ready to formalize.',
      sources: [
        { type: 'quantitative', name: 'Mixpanel', detail: 'cross-reference' },
        { type: 'interview', name: 'Slack', detail: '#support + #user-research' },
      ],
    },
  },

  // ── Act 3: Hypothesis + PM Intervention ────────────────────────────────
  {
    id: 18,
    action: 'typing',
    delay: 2000,
    agentId: 'nova',
  },
  {
    id: 19,
    action: 'message',
    delay: 3000,
    agentId: 'nova',
    message: {
      agentId: 'nova',
      type: 'hypothesis',
      tier: 'elevated',
      content: '',
      timestamp: '2:09 PM',
      hypothesisText:
        'AI-powered hyper-personalization can improve retention by 40%+ vs. existing services',
      confidence: 65,
      missingData: 'Gen-Z churn factor data',
      sources: [
        { type: 'quantitative', name: 'Payment Data API', detail: 'n=12,847' },
        { type: 'interview', name: 'User Interviews', detail: 'n=24' },
      ],
    },
  },
  {
    id: 20,
    action: 'typing',
    delay: 2000,
    agentId: 'iris',
  },
  {
    id: 21,
    action: 'intervention',
    delay: 2500,
    agentId: 'iris',
    message: {
      agentId: 'iris',
      type: 'intervention',
      tier: 'elevated',
      content:
        'We\'ve identified two directions for the next research phase. Which should we prioritize?',
      timestamp: '2:14 PM',
      interventionOptions: [
        {
          label: 'Deep-dive: Interview 8 heavy users',
          description:
            'Focus on personalization expectations and what triggers cancellation',
        },
        {
          label: 'Broad survey: n=500 on willingness-to-pay',
          description:
            'Quantitative validation of pricing across segments',
        },
        {
          label: 'Both (parallel track, 2x timeline)',
          description:
            'Run both simultaneously for comprehensive coverage',
        },
      ],
      interventionResolved: false,
    },
  },

  // ── Act 4: Data Source Request ──────────────────────────────────────────
  {
    id: 22,
    action: 'typing',
    delay: 2000,
    agentId: 'nova',
  },
  {
    id: 23,
    action: 'data-source-request',
    delay: 2500,
    agentId: 'nova',
    message: {
      agentId: 'nova',
      type: 'data-source-request',
      tier: 'elevated',
      content:
        'I need access to your Google Analytics to validate the subscription spend data against actual conversion funnels. Could you connect it?',
      timestamp: '2:18 PM',
      dataSourceName: 'Google Analytics',
      dataSourceResolved: false,
    },
  },

  // ── Act 5: Post-approval reports + Edition ─────────────────────────────
  {
    id: 24,
    action: 'typing',
    delay: 1500,
    agentId: 'iris',
  },
  {
    id: 25,
    action: 'message',
    delay: 2500,
    agentId: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Additional interview analysis complete. Users who received personalized re-engagement at the month-3 mark showed 2.1x higher retention in the follow-up period. This strengthens the hypothesis significantly.',
      timestamp: '2:22 PM',
      sources: [
        { type: 'interview', name: 'User Interviews', detail: 'n=24' },
        { type: 'survey', name: 'Churn Survey', detail: 'n=340' },
      ],
    },
  },

  // Scout timeline — Zendesk competitor intel
  {
    id: 26,
    action: 'message',
    delay: 800,
    agentId: 'scout',
    timelineTarget: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Zendesk ticket data confirms the competitive landscape gap. Customers who mention competitors are mostly citing basic recommendation engines — no one has contextual AI.',
      timestamp: '2:20 PM',
      sourceContext: 'Zendesk — Competitor Mentions',
      dataSnippet: 'Competitor mentions in tickets (last 6mo):\nCompetitorX — 89 mentions (basic CF filtering)\nCompetitorY — 47 mentions (editorial curation)\nCompetitorZ — 23 mentions (price-based)\n\nNone mention advanced AI personalization.',
      analysisNote: 'The competitive moat is wider than expected. No competitor is doing contextual personalization — this is genuine white space.',
      sources: [
        { type: 'web', name: 'Zendesk', detail: 'competitor analysis' },
      ],
    },
  },
  {
    id: 110,
    action: 'message',
    delay: 600,
    agentId: 'scout',
    timelineTarget: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Market sizing from external reports aligns with Zendesk demand signals. The opportunity is large and the Japan market is under-penetrated.',
      timestamp: '2:24 PM',
      sourceContext: 'Zendesk + Market Reports',
      dataSnippet: 'TAM: $4.2B by 2028 (CAGR 28%)\nJapan penetration: ~12% vs 34% US\n\nZendesk feature requests (last quarter):\n"Better personalization" — 312 tickets\n"AI recommendations" — 198 tickets\n"Learn my preferences" — 156 tickets',
      analysisNote: 'Customer demand for personalization is clearly present in support data. Combined with market projections, this validates the opportunity size.',
      sources: [
        { type: 'web', name: 'Zendesk + Gartner', detail: 'market analysis' },
      ],
    },
  },

  {
    id: 27,
    action: 'typing',
    delay: 2000,
    agentId: 'scout',
  },
  {
    id: 28,
    action: 'message',
    delay: 2500,
    agentId: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Updated competitive analysis: window for first-mover advantage estimated at 6–9 months. Two incumbents still in beta — their AI personalization lacks contextual awareness entirely.',
      timestamp: '2:25 PM',
      sources: [
        { type: 'web', name: 'Product Hunt + TechCrunch' },
      ],
    },
  },

  // Edition announcement
  {
    id: 29,
    action: 'typing',
    delay: 2000,
    agentId: 'nova',
  },
  {
    id: 30,
    action: 'edition-publish',
    delay: 2500,
    agentId: 'nova',
    message: {
      agentId: 'nova',
      type: 'edition-announcement',
      tier: 'elevated',
      content:
        'Field reports have been compiled into the latest edition. All three beats have contributed findings.',
      timestamp: '2:30 PM',
      editionConfidenceFrom: 65,
      editionConfidenceTo: 82,
    },
    edition: EDITION_V1,
    recommendations: RECOMMENDATIONS,
    roadmap: ROADMAP,
  },

  // Post-edition timeline summaries for each agent
  {
    id: 113,
    action: 'message',
    delay: 500,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Edition published. All Mixpanel findings have been compiled. The retention cliff data was the strongest signal — recommending A/B test at the M3 intervention point next.',
      timestamp: '2:30 PM',
      sourceContext: 'Mixpanel — Analysis Summary',
      dataSnippet: 'Key Mixpanel findings contributed:\n• ¥8,420/mo avg spend (+23% YoY)\n• Power-law: top 10% = 38% of spend\n• M3 churn cliff: 28% drop\n• M7 secondary cliff: 19% drop\n• Potential recovery: ~$2.1M ARR',
      analysisNote: 'Next cycle: design the M3 intervention experiment in Mixpanel. Target n=500 users entering month 3.',
    },
  },
  {
    id: 114,
    action: 'message',
    delay: 400,
    agentId: 'iris',
    timelineTarget: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Edition published. Slack analysis provided the emotional layer behind the numbers. "Personalization decay" is now our working term for the core problem.',
      timestamp: '2:30 PM',
      sourceContext: 'Slack — Analysis Summary',
      dataSnippet: 'Key Slack findings contributed:\n• "I cancel when it stops knowing me" — #1 theme\n• Experience fatigue sets in at M3-M4\n• NPS drops 72 → 41 between M2 and M4\n• Users who feel "understood" = 3.2x retention\n• Internal team aware but lacks root cause',
      analysisNote: 'Next cycle: monitor #product-feedback for responses to M3 intervention. Will flag new cancellation patterns.',
    },
  },
  {
    id: 115,
    action: 'message',
    delay: 400,
    agentId: 'scout',
    timelineTarget: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Edition published. Zendesk data provided the competitive context. The first-mover window is real — 6-9 months before competitors ship comparable features.',
      timestamp: '2:30 PM',
      sourceContext: 'Zendesk — Analysis Summary',
      dataSnippet: 'Key Zendesk findings contributed:\n• Cancellation reason #1: recommendation quality (38%)\n• Competitor threat: CompetitorX perceived as better AI\n• No competitor has contextual personalization\n• First-mover window: 6-9 months\n• Feature demand: 312 tickets requesting "better personalization"',
      analysisNote: 'Next cycle: continue monitoring competitor beta programs via Zendesk ticket mentions. Will flag any significant product launches.',
    },
  },

  // ── Act 6: Wrap-up ────────────────────────────────────────────────────
  {
    id: 31,
    action: 'typing',
    delay: 3000,
    agentId: 'iris',
  },
  {
    id: 32,
    action: 'message',
    delay: 2500,
    agentId: 'iris',
    message: {
      agentId: 'iris',
      type: 'report',
      tier: 'compact',
      content:
        'Edition published. Key takeaway: personalization decay is the #1 churn driver, and contextual awareness is the differentiation opportunity. Recommend focusing the next research cycle on the month-3 intervention experiment.',
      timestamp: '2:32 PM',
    },
  },
  {
    id: 33,
    action: 'typing',
    delay: 1500,
    agentId: 'scout',
  },
  {
    id: 34,
    action: 'message',
    delay: 2000,
    agentId: 'scout',
    message: {
      agentId: 'scout',
      type: 'report',
      tier: 'compact',
      content:
        'Agreed. The competitive window is real — 6 to 9 months before incumbents ship comparable features. I\'ll continue monitoring their beta programs and flag any significant updates.',
      timestamp: '2:33 PM',
    },
  },
  {
    id: 35,
    action: 'typing',
    delay: 1500,
    agentId: 'nova',
  },
  {
    id: 36,
    action: 'message',
    delay: 2500,
    agentId: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Next research cycle suggestion: if the month-3 intervention A/B test shows positive signal, we can upgrade the hypothesis confidence to 90%+. I\'ll prepare the experiment design.',
      timestamp: '2:34 PM',
    },
  },
];
