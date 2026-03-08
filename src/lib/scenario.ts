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

  // Timeline posts
  {
    id: 7,
    action: 'message',
    delay: 1500,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Pulled subscription data from Payment API. 12,847 valid samples after preprocessing.',
      timestamp: '2:01 PM',
      sources: [
        { type: 'quantitative', name: 'Payment Data API', detail: 'n=12,847' },
      ],
    },
  },
  {
    id: 8,
    action: 'message',
    delay: 1000,
    agentId: 'nova',
    timelineTarget: 'nova',
    message: {
      agentId: 'nova',
      type: 'report',
      tier: 'compact',
      content:
        'Interesting — top 10% of spenders account for 38% of total subscription spend. Skewed distribution.',
      timestamp: '2:08 PM',
      sources: [{ type: 'quantitative', name: 'Payment Data API' }],
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

  // Timeline post
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
        'Strong emotional signal: "I cancel when it stops feeling like it knows me." Personalization decay is the core churn driver, not content quality.',
      timestamp: '2:06 PM',
      sources: [
        { type: 'interview', name: 'User Interviews', detail: 'sentiment analysis' },
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

  // Timeline
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
        'Market for personalized subscription experiences projected at $4.2B by 2028 (CAGR 28%). Japan market significantly under-penetrated.',
      timestamp: '2:24 PM',
      sources: [
        { type: 'web', name: 'Market Reports', detail: 'Gartner + CB Insights' },
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
