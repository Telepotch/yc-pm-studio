# PM Studio — Product Concept Specification

> **Version:** 0.2.0 (Draft — Journalism Metaphor Update)
> **Date:** 2026-03-08
> **Author:** iMago Lab / iQ Lab Inc.
> **Status:** Pre-seed / Investor Pitch Stage

---

## 1. Executive Summary

PM Studio is an AI-powered product management platform built on a journalism metaphor: three specialized **Field Agents** act as embedded correspondents — dispatched to data sources, user environments, and competitive landscapes — continuously filing reports back to a shared **Editorial Room** where the PM operates as **Editor-in-Chief**.

The product replaces the traditional PM workflow of manually gathering data, synthesizing insights, and building reports with an autonomous "agent loop." Field Agents investigate, cross-reference, and debate hypotheses in the Editorial Room, then publish their findings as **Editions** — living documents that evolve with each research cycle. The PM's role shifts from executor to decision-maker, intervening only at critical junctures through a choice-based interface.

**Theoretical foundation:** PM Studio automates **Digital Ethnography** — the established methodology of deep observational research that reveals tacit knowledge, cultural models, and behavioral patterns. Ethnography has always been the most powerful lens for understanding the "why" behind data, but its cost made it a luxury reserved for large consultancies. By deploying Field Agents as always-on ethnographic observers, PM Studio reduces the cost of ethnographic insight to near-zero.

**One-liner:** *"Your AI newsroom that never sleeps — three Field Agents, one Editorial Room, zero busywork."*

---

## 2. Problem Statement

Startup PMs (1–10 person teams) face a critical resource gap: they need the analytical depth of a McKinsey engagement but operate with the budget of a seed-stage company. Current tools address fragments of the workflow:

- **Dovetail / Maze** handle user research but lack quantitative analysis and market intelligence
- **Notion AI / Gamma** generate documents but don't conduct original research
- **Traditional consulting** delivers depth but at $50K+ per engagement and weeks of lead time

The deeper issue is methodological. Ethnography — the gold standard for understanding user behavior, organizational dynamics, and market context — has always required professional researchers, weeks of fieldwork, and significant cost. This means the richest form of product insight has been inaccessible to the teams that need it most.

No existing product provides an integrated, autonomous research loop that combines quantitative data analysis, qualitative insight synthesis, and competitive intelligence — powered by ethnographic methodology — with human-in-the-loop oversight.

---

## 3. Target User

| Attribute | Detail |
|-----------|--------|
| **Persona** | Product Manager at an early-stage startup |
| **Team size** | 1–10 people |
| **Pain point** | Needs research depth but lacks dedicated analysts |
| **Current workaround** | Manual research + spreadsheets + scattered tools |
| **Willingness to pay** | SaaS budget mentality, per-seat pricing |

---

## 4. Product Architecture

### 4.1 Core Layout — Split-Screen Interface

The UI is a split-screen layout inspired by Linear/Notion's light-mode aesthetic.

```
┌─────────────────────────────────────────────────────────┐
│  PM Studio   [BETA]         3 field agents active │ Proj │
├───────────────────────────┬─────────────────────────────┤
│  ✏️ Editorial │ Nova │ Iris │ Scout │ 📰 Edition │ 💡 Rec │ 🗺️ Roadmap │
├───────────────────────────┤─────────────────────────────┤
│                           │                             │
│   Left Panel              │   Right Panel               │
│   Editorial Room (Chat)   │   Edition Viewer            │
│   + Agent Timelines       │   (Published by agents)     │
│                           │                             │
│   ┌─────────────────┐    │                             │
│   │ [Option A]      │    │                             │
│   │ [Option B]      │    │                             │
│   │ [Option C]      │    │                             │
│   └─────────────────┘    │                             │
│                           │                             │
├───────────────────────────┤                             │
│  [Message input...]  [Send]│                             │
└───────────────────────────┴─────────────────────────────┘
```

**Left Panel (55% width):** The Editorial Room — a shared chat where Field Agents file reports, debate findings, and flag issues. Individual agent tabs show each agent's **Timeline** (a Twitter-like feed of their observations). PM intervention points and data source connection requests appear here.

**Right Panel (45% width):** The Edition viewer — auto-generated and published when agents declare an update. Includes recommendations and roadmap tabs.

### 4.2 The Three Field Agents

Field Agents are fixed (not customizable) for v1. Each operates as a specialized **correspondent** with a distinct beat, dispatched to relevant data sources to conduct ethnographic observation and file reports back to the Editorial Room.

| Field Agent | Beat | Specialty | Behavior |
|-------------|------|-----------|----------|
| **Nova** 📊 | Quantitative Beat | Statistical analysis, survey design, data modeling | Data-first, precise, cites numbers with confidence intervals |
| **Iris** 🎙️ | Qualitative Beat | User interviews, sentiment analysis, behavioral patterns | Empathetic, identifies latent needs, flags emotional signals |
| **Scout** 🔍 | Market Beat | Competitive analysis, market sizing, trend detection | Strategic, connects dots across industries, finds white spaces |

Field Agents communicate with each other in the Editorial Room, building on each other's findings, challenging hypotheses, and identifying data gaps collaboratively — like reporters in a newsroom's editorial meeting.

#### Agent Timelines (Individual Tabs)

Each Field Agent has a dedicated **Timeline** tab — a Twitter-like feed where they post real-time observations from their beat. Unlike the Editorial Room (which is a structured conversation), Timelines are a stream of consciousness: raw data sightings, preliminary observations, and work-in-progress notes.

```
┌─ Nova Timeline ──────────────────────────────────┐
│                                                  │
│  📊 2:01 PM                                      │
│  Pulled subscription data from Payment API.      │
│  12,847 valid samples after preprocessing.       │
│  📎 Payment Data API · n=12,847                  │
│                                                  │
│  📊 2:08 PM                                      │
│  Interesting — top 10% of spenders account for   │
│  38% of total subscription spend. Skewed dist.   │
│  📎 Payment Data API                             │
│                                                  │
│  📊 2:12 PM                                      │
│  Cross-referencing with Iris's interview data.    │
│  Seeing alignment on "experience fatigue" theme.  │
│                                                  │
│  💬 Reply to Nova...                              │
└──────────────────────────────────────────────────┘
```

**Key behaviors of Timelines:**
- PMs can browse Timelines to sense each agent's "working temperature" without being overwhelmed
- PMs can reply to any Timeline post to ask questions or redirect focus — other agents can see these interactions and adjust their own work accordingly
- When agents find something significant, they escalate it to the Editorial Room (or mention the PM directly)
- Agents can reference each other's Timeline posts in their Editorial Room messages

### 4.3 The Agent Loop

The agent loop is the core product mechanic — the "editorial cycle" that drives continuous investigation. It follows a cyclical pattern:

```
  ┌─────────────┐
  │  Kickoff     │  PM provides goal + first data source
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │  Field Work  │  Field Agents investigate data sources autonomously
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │  Editorial   │  Agents share findings, cross-reference, debate
  │  Meeting     │  in the Editorial Room
  └──────┬──────┘
         ▼
  ┌─────────────┐
  │  Hypothesis  │  Agents propose hypotheses with confidence scores
  └──────┬──────┘
         ▼
  ┌──────┴──────┐
  │  Gap Check   │  Are there data gaps that block validation?
  └──┬───────┬──┘
     │       │
    Yes      No
     │       │
     ▼       ▼
  ┌──────┐  ┌──────────────┐
  │Addtl │  │ New Edition   │  Agents publish update → Right panel refreshes
  │Research│  │ Published     │
  └──┬───┘  └──────┬───────┘
     │             │
     │             ▼
     │       ┌──────────────┐
     │       │  Loop again   │  Or stop if agents judge sufficient confidence
     │       │  or Stop      │
     │       └──────────────┘
     ▼
  ┌──────────────┐
  │ PM Approval  │  Agent requests data connection or survey approval
  │ (if needed)  │  PM selects from presented options
  └──────┬───────┘
         │
         └──── back to Field Work ────►
```

**Stopping condition:** Field Agents autonomously judge when the analysis has reached sufficient confidence and stop the loop. The PM can also intervene at any time.

---

## 5. User Flows

### 5.1 Onboarding Flow

The onboarding is a focused 3-step sequence designed to get agents running within 2 minutes.

**Step 1 — Product URL**
```
"What product are you researching?"
┌─────────────────────────────────┐
│  https://your-product.com       │
└─────────────────────────────────┘
```

**Step 2 — Goals**
```
"What are your current goals?"
┌─────────────────────────────────┐
│  e.g., "Validate whether Gen-Z  │
│  would pay for personalized     │
│  experience subscriptions"      │
└─────────────────────────────────┘
```

**Step 3 — First Data Source Connection**
```
"Connect your first data source so agents can start researching."
┌──────────┐  ┌──────────┐  ┌──────────┐
│ G Drive  │  │  Slack   │  │  CSV     │
│ Connect  │  │ Connect  │  │ Upload   │
└──────────┘  └──────────┘  └──────────┘
```

After completing onboarding, the Editorial Room opens and Field Agents begin their first research cycle.

### 5.2 Data Source Connection (Agent-Initiated)

A key differentiator: Field Agents proactively request data connections when they identify a need — like a correspondent requesting press credentials for a new venue — rather than requiring the PM to anticipate it.

```
┌───────────────────────────────────────────┐
│ 📊 Nova                           14:09   │
│                                           │
│ I need access to your Google Analytics    │
│ to validate the subscription spend data.  │
│ Could you connect it?                     │
│                                           │
│  ┌──────────────┐  ┌──────────────┐      │
│  │ ✓ Connect GA │  │ ✕ Skip       │      │
│  └──────────────┘  └──────────────┘      │
└───────────────────────────────────────────┘
```

**Autonomy level: Light** — Field Agents request permission only for data source connections (accessing new "venues"). All other analytical actions (field work, hypothesizing, cross-referencing, edition publishing) are performed autonomously.

### 5.3 PM Intervention (Choice-Based)

When Field Agents reach a decision point requiring editorial direction, they present multiple options rather than open-ended questions. This minimizes PM cognitive load — the Editor-in-Chief picks a direction, and agents execute.

```
┌───────────────────────────────────────────┐
│ 🎙️ Iris                           14:14   │
│                                           │
│ We've identified two directions for the   │
│ next research phase. Which should we      │
│ prioritize?                               │
│                                           │
│  ○ Deep-dive: Interview 8 heavy users     │
│    about personalization expectations     │
│                                           │
│  ○ Broad survey: n=500 on subscription    │
│    willingness-to-pay across segments     │
│                                           │
│  ○ Both (parallel track, 2x timeline)     │
│                                           │
└───────────────────────────────────────────┘
```

### 5.4 Edition Publishing

Editions are not generated on-demand — they are **published** organically as Field Agents reach milestones, just as a newspaper edition goes to print when there's enough material. Agents declare "New Edition" in the Editorial Room when they've synthesized enough new data to warrant an update.

**Edition publish trigger example:**
```
┌───────────────────────────────────────────┐
│ 📊 Nova                           14:30   │
│                                           │
│ 📰 New Edition Published                  │
│                                           │
│ Field reports have been compiled into the │
│ latest edition. Hypothesis confidence     │
│ upgraded: 65% → 82%.                      │
└───────────────────────────────────────────┘
```

The right panel then refreshes automatically with the new Edition.

---

## 6. Right Panel — Edition Viewer

The right panel has three tabs, each serving a distinct purpose in the PM's workflow.

### 6.1 Edition Tab

A living document — like a newspaper edition — that evolves as Field Agents gather more data. Each time agents publish a new Edition, the content updates with the latest findings.

| Section | Content |
|---------|---------|
| **Headline: Hypothesis Confidence** | Numerical score (0–100%) with delta from last edition |
| **Lead Story: Core Hypothesis** | Single-sentence thesis being validated |
| **Quantitative Section** | Charts, statistics, data visualizations from Nova's beat |
| **Qualitative Section** | Themes, quotes, sentiment patterns from Iris's beat |
| **Market Section** | Competitive landscape, positioning, trends from Scout's beat |

**Source transparency:** Every data point in the Edition includes a citation badge showing its origin (e.g., "Google Analytics", "User Interview #7", "App Store Reviews"). This is the primary trust-building mechanism.

### 6.2 Recommendation Tab

Actionable next steps derived from the analysis, prioritized by impact.

| Priority | Description |
|----------|-------------|
| **P0** | Critical actions that directly validate/invalidate the core hypothesis |
| **P1** | High-impact actions that strengthen the business case |
| **P2** | Exploratory actions for future consideration |

Each recommendation includes: title, rationale, expected impact, and suggested approach.

### 6.3 Roadmap Tab

A phased execution plan generated from the recommendations, typically spanning 3–12 months. Presented as a vertical timeline with milestones and deliverables.

### 6.4 Export

Editions can be exported as PDF for sharing with stakeholders, investors, and team members.

---

## 7. UI/UX Design Guidelines

### 7.1 Design Philosophy

PM Studio follows a **Notion-inspired light-mode aesthetic**: clean, quiet surfaces where content hierarchy is established through subtle white-to-gray gradients — not through color saturation. The interface should feel like a calm workspace, not a dashboard overloaded with signals.

**Core principle:** White-on-white hierarchy with a single accent color for actionable elements.

### 7.2 Color System

#### Accent Color

| Token | Value | Usage |
|-------|-------|-------|
| `accent` | `#00a2ff` | Primary buttons, active tab indicators, links, key interactive elements |
| `accent-light` | `#00a2ff12` | Hover states, selected row backgrounds |
| `accent-mid` | `#00a2ff20` | Active tag backgrounds, focus rings |
| `accent-border` | `#00a2ff30` | Borders on accent-highlighted elements |

The `#00a2ff` blue is reserved exclusively for elements that invite interaction: primary buttons, active states, and navigation indicators. It should never be used for passive or decorative surfaces.

#### White Hierarchy (Surface System)

The visual structure comes from layered whites, not from color. Inspired by Notion's approach of subtle tonal shifts.

| Token | Value | Usage |
|-------|-------|-------|
| `bg-0` | `#ffffff` | Primary surface — chat bubbles, cards, modals |
| `bg-1` | `#fafafa` | Secondary surface — sidebar backgrounds, input area |
| `bg-2` | `#f5f5f4` | Tertiary surface — page background, recessed areas |
| `bg-3` | `#eeeeec` | Tags, badges, divider backgrounds |

```
Surface layering example:

┌─ bg-2 (#f5f5f4) ─ Page background ──────────────┐
│  ┌─ bg-0 (#ffffff) ─ Left panel ───┐  ┌─ bg-1 ──┐│
│  │                                 │  │  Right   ││
│  │  ┌─ bg-0 ─ Chat bubble ──────┐ │  │  panel   ││
│  │  │ Message content            │ │  │          ││
│  │  └────────────────────────────┘ │  │  ┌─bg-0─┐││
│  │                                 │  │  │Card  │││
│  │  ┌─ bg-1 ─ Input area ───────┐ │  │  └──────┘││
│  │  │ [Type here...]        [Send]│ │  │          ││
│  │  └────────────────────────────┘ │  │          ││
│  └─────────────────────────────────┘  └──────────┘│
└───────────────────────────────────────────────────┘
```

#### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `text-0` | `#1a1a1a` | Headings, agent names, primary content |
| `text-1` | `#37352f` | Body text, message content |
| `text-2` | `#787774` | Secondary labels, timestamps, role tags |
| `text-3` | `#b4b4b0` | Placeholder text, disabled states |

#### Border Colors

| Token | Value | Usage |
|-------|-------|-------|
| `border` | `#e8e8e5` | Default borders (panels, cards, dividers) |
| `border-light` | `#f0f0ee` | Subtle separators (between chat messages) |

#### Agent Identity

Each Field Agent will have a unique avatar image (to be designed). Until then, a gray placeholder is used.

| Agent | Avatar | Placeholder |
|-------|--------|-------------|
| Nova | Image (TBD) | `bg-3` (`#eeeeec`) circle with initial "N" |
| Iris | Image (TBD) | `bg-3` (`#eeeeec`) circle with initial "I" |
| Scout | Image (TBD) | `bg-3` (`#eeeeec`) circle with initial "S" |

Agent identity is conveyed through avatar + name label — no color coding. This keeps the interface monochromatic and ensures `#00a2ff` remains the only chromatic element on screen.

#### Priority Colors (Recommendations)

All priorities use the single accent color `#00a2ff` — differentiated by opacity and weight, not by hue.

| Priority | Style | Implementation |
|----------|-------|----------------|
| P0 | Full accent, bold | `#00a2ff` solid background, white text |
| P1 | Medium accent | `#00a2ff60` background, `text-0` text |
| P2 | Light accent | `#00a2ff20` background, `text-2` text |

### 7.3 Message Hierarchy — Two-Tier Visual Density

A key UX insight: PMs should not have to read every message. The Editorial Room uses a **two-tier visual density** system to separate signal from context.

#### Tier 1 — Compact Messages (Default)

Standard agent reports and updates. These are visually quiet: no border, no background color, minimal vertical spacing.

```
  N  Nova · Quantitative · 2:01 PM
     Gen-Z spend an average of ¥8,420/month on subscriptions,
     up 23% YoY. Experience-based subs growing fastest.
     ┌─────────────────────────────────────┐
     │ 📊 Payment Data API · n=12,847     │
     └─────────────────────────────────────┘
```

#### Tier 2 — Elevated Messages (Hypothesis / PM Request)

Hypothesis proposals and PM intervention requests. These get a card treatment with subtle background and border to break the visual rhythm and draw attention.

```
  ┌────────────────────────────────────────────────┐
  │  N  Nova · Quantitative · 2:09 PM              │
  │                                                │
  │  💡 Hypothesis Proposed                         │
  │                                                │
  │  "AI-powered hyper-personalization can improve  │
  │   retention by 40%+ vs. existing services"      │
  │                                                │
  │  Confidence: 65%  ████████░░░░                  │
  │  Missing: Gen-Z churn factor data               │
  │                                                │
  │  📊 Payment Data API · n=12,847                │
  │  🎙️ User Interviews · n=24                     │
  └────────────────────────────────────────────────┘
```

```
  ┌─ accent border ────────────────────────────────┐
  │  @You                                          │
  │  I  Iris · Qualitative · 2:14 PM               │
  │                                                │
  │  Additional research needed to improve          │
  │  hypothesis confidence. Two data gaps:          │
  │                                                │
  │  • Gen-Z churn reason survey (n=200+)           │
  │  • Competitor churn rates (last 6 months)       │
  │                                                │
  │  ┌────────────┐ ┌────────────┐ ┌────────────┐ │
  │  │ ✓ Approve  │ │  Option B  │ │  Option C  │ │
  │  └────────────┘ └────────────┘ └────────────┘ │
  └────────────────────────────────────────────────┘
```

The `@You` tag and accent-colored left border make PM-targeted messages impossible to miss.

### 7.4 Source Citation Badges

Every agent message that references data must include an inline citation badge. This is the primary trust mechanism and should be visible in both the chat and the Edition panel.

**Badge format:**
```
┌──────────────────────────────────┐
│ {icon} {source name} · {detail}  │
└──────────────────────────────────┘
```

**Badge styling:** `bg-2` background, `border-light` border, `text-2` color, small rounded corners. No accent color — citations are informational, not interactive.

**Icon mapping:**

| Source Type | Icon |
|-------------|------|
| Quantitative data / API | 📊 |
| User interviews | 🎙️ |
| Survey results | 📋 |
| App Store / review data | ⭐ |
| Web research / reports | 🔗 |
| Connected integration | 🔌 |

### 7.5 Right Panel — Update Notifications

When a Field Agent declares a new Edition, the right panel must provide clear feedback through three mechanisms:

1. **Tab notification dot:** A small `accent`-colored dot appears on the relevant tab (Edition / Recommendation / Roadmap)
2. **Update banner:** A transient banner at the top of the panel displaying the change (e.g., "New Edition published — confidence 65% → 82%")
3. **Change highlighting:** Newly updated sections pulse briefly with an `accent-light` background that fades to `bg-0` over 2 seconds

### 7.6 Onboarding Flow

The onboarding is a 3-step modal sequence shown on first project creation. Each step occupies a centered card over a blurred background.

**Step 1 — Product URL**
```
┌──────────────────────────────────────────────┐
│           Step 1 of 3                         │
│                                              │
│   What product are you researching?          │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │  https://                            │   │
│   └──────────────────────────────────────┘   │
│                                              │
│   Agents will analyze your product's public  │
│   presence as a starting point.              │
│                                              │
│                            [Continue →]       │
└──────────────────────────────────────────────┘
```

**Step 2 — Goals**
```
┌──────────────────────────────────────────────┐
│           Step 2 of 3                         │
│                                              │
│   What are your current goals?               │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │  e.g., "Validate product-market fit  │   │
│   │  for Gen-Z subscription model"       │   │
│   └──────────────────────────────────────┘   │
│                                              │
│   This shapes what agents investigate.       │
│                                              │
│                            [Continue →]       │
└──────────────────────────────────────────────┘
```

**Step 3 — Connect First Data Source**
```
┌──────────────────────────────────────────────┐
│           Step 3 of 3                         │
│                                              │
│   Connect your first data source             │
│                                              │
│   ┌────────────┐ ┌────────────┐              │
│   │ G  Google  │ │ S  Slack   │              │
│   │   Drive    │ │            │              │
│   └────────────┘ └────────────┘              │
│   ┌────────────┐ ┌────────────┐              │
│   │ 📄 Upload  │ │ ⏭  Skip   │              │
│   │    CSV     │ │  for now   │              │
│   └────────────┘ └────────────┘              │
│                                              │
│   Agents will request more sources           │
│   as they identify data gaps.                │
│                                              │
│                        [Launch Editorial Room →]    │
└──────────────────────────────────────────────┘
```

"Continue" and "Launch Editorial Room" buttons use `accent` (`#00a2ff`). "Skip for now" is a secondary quiet action.

### 7.7 Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| App title | System sans-serif | 700 | 15px |
| Agent name | System sans-serif | 600 | 13px |
| Body text | System sans-serif | 400 | 14px |
| Source badges | System sans-serif | 500 | 11px |
| Timestamps | System sans-serif | 400 | 12px |
| Tab labels | System sans-serif | 500 | 13px |

System sans-serif stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` — following Notion's approach of letting the OS font provide native clarity.

### 7.8 Component Principles

**Buttons:**
- Primary: `accent` bg, white text — used sparingly (Send, Approve, Launch, Continue)
- Secondary: `bg-0` bg, `border` border, `text-1` text — all other actions
- Destructive: `bg-0` bg, `text-2` text, underline on hover — reject, cancel

**Cards:**
- Default: `bg-0`, `border` border, 8px radius
- Elevated (hypothesis / PM request): `bg-0`, `border` border, 8px radius, subtle shadow `0 1px 3px rgba(0,0,0,0.04)`

**Tabs:**
- Inactive: `text-2`, no indicator
- Active: `text-0`, 2px bottom border in `accent`

**Scrolling:**
- Thin 4px scrollbar, `bg-3` color, only visible on hover

### 7.9 Key UX Improvement Notes

The following issues were identified during initial mockup implementation and should be addressed in future iterations:

1. **Message hierarchy was flat** — all messages had equal visual weight, making it hard for PMs to spot what needs attention. Solved by the two-tier density system (7.3).
2. **Source citations were missing from chat** — the spec defined trust through data transparency, but the chat UI had no citation mechanism. Solved by inline source badges (7.4).
3. **Right panel had no update feedback** — when agents published a new Edition, the right panel gave no visual signal. Solved by notification dots, banners, and change highlighting (7.5).
4. **Color was overused** — agent-colored backgrounds on every message created visual noise. Solved by restricting agent color to dot indicators and name labels only.
5. **Onboarding was absent** — the most compelling demo moment (first launch → agents start working) was not represented. Solved by the 3-step onboarding flow (7.6).

---

## 8. Trust & Transparency

For AI-driven analysis to be actionable, PMs must trust the outputs. PM Studio addresses this through **data source transparency** as the primary trust mechanism.

### 8.1 Citation System

Every claim in the Edition is tagged with its source:

```
"Gen-Z subscription spending averages ¥8,420/month (+23% YoY)"
 └── 📊 Source: Payment Data API (n=12,847) | Confidence: High
```

### 8.2 Agent Reasoning Visibility

Individual Field Agent **Timelines** (Nova / Iris / Scout) expose the full reasoning chain:
- Raw data accessed
- Preprocessing steps taken
- Analytical methods applied
- Intermediate conclusions

This allows PMs to audit any finding by scrolling through the agent's Timeline — like reviewing a correspondent's field notes.

### 8.3 Decision History

All PM interventions (approvals, rejections, selections) are logged in the Editorial Room chat, creating an auditable trail of human-AI collaborative decisions.

---

## 9. Competitive Positioning

### 9.1 Market Map

```
                    High Autonomy
                         │
          PM Studio      │
          ●──────────────┤
                         │
   ───────────────────────────────── Full-stack Analysis
   Research Only         │
                         │
          Dovetail ●     │     ● Notion AI
          Maze ●         │     ● Gamma
                         │
                    Low Autonomy
```

### 9.2 Key Differentiators vs. Dovetail / Maze

| Dimension | Dovetail / Maze | PM Studio |
|-----------|----------------|-----------|
| **Scope** | User research only | Quantitative + Qualitative + Market |
| **Methodology** | Manual tagging & analysis | Automated Digital Ethnography |
| **Automation** | PM drives every step | Autonomous Field Agent loop |
| **Output** | Research repository | Published Editions + roadmap |
| **Data sources** | Interview/survey imports | Agent-initiated multi-source |
| **PM workflow** | PM as executor | PM as Editor-in-Chief |
| **Time to insight** | Days to weeks | Hours (async agent loop) |

### 9.3 Moat

- **Digital Ethnography at zero cost:** The established methodology of ethnographic research — observation, contextual inquiry, pattern recognition — automated through always-on Field Agents. This is not just monitoring; it's structured understanding of "why."
- **Multi-agent collaboration:** Three specialized Field Agents that cross-reference and challenge each other's findings create outputs no single-agent system can match — like a newsroom where reporters from different beats connect the dots.
- **Agent-initiated data sourcing:** The "connect me to X" pattern is a novel UX that inverts the traditional integration setup flow. Agents request access to new venues like correspondents requesting press credentials.
- **Hypothesis confidence scoring:** A quantified, evolving trust metric that gives PMs a clear signal on when analysis is "done enough."

---

## 10. Business Model

### 10.1 Pricing Structure

**SaaS monthly subscription, per-seat pricing.**

| Tier | Price (tentative) | Included |
|------|-------------------|----------|
| **Starter** | $49/seat/mo | 3 projects/month, basic integrations |
| **Pro** | $149/seat/mo | Unlimited projects, all integrations, PDF export |
| **Team** | $99/seat/mo (min 3) | Pro features + shared project history |

### 10.2 Unit Economics Assumptions

| Metric | Target |
|--------|--------|
| **CAC** | < $200 (PLG + content marketing) |
| **LTV** | $2,400+ (24-month retention at Pro) |
| **LTV:CAC** | > 12:1 |
| **Gross Margin** | 70%+ (LLM costs are primary COGS) |

---

## 11. Technical Architecture (MVP)

### 11.1 MVP Scope

The MVP uses **mock agent responses** to validate the UX hypothesis before investing in full LLM integration.

```
┌─────────────────────────────────────────┐
│                Frontend                  │
│        React (Next.js) + Tailwind       │
│   Split-screen: Editorial Room + Edition │
└──────────┬──────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│              Backend API                 │
│           (Node.js / Python)             │
│   Orchestrator: manages agent turns,     │
│   message routing, state machine         │
└──────────┬──────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│          Agent Layer (MVP: Mock)         │
│                                          │
│   Nova Agent ─── scripted responses      │
│   Iris Agent ─── scripted responses      │
│   Scout Agent ── scripted responses      │
│                                          │
│   (Post-MVP: LLM-powered, TBD)          │
└──────────┬──────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│          Data & Storage                  │
│   Firestore: projects, chat logs         │
│   OAuth: Google Drive, Slack (future)    │
│   PDF generation: Edition export          │
└─────────────────────────────────────────┘
```

### 11.2 Post-MVP: LLM Integration (Future)

| Component | Approach (TBD) |
|-----------|----------------|
| **Agent orchestration** | Multi-agent framework (LangGraph / custom) |
| **LLM backbone** | To be determined per agent |
| **Data ingestion** | RAG pipeline for uploaded documents |
| **Web research** | Agent-driven web search for market data |
| **Report generation** | Structured output from agent consensus → Edition publishing |

### 11.3 Integrations

| Integration | Purpose | Trigger |
|-------------|---------|---------|
| **Google Drive** | Document & spreadsheet analysis | Agent-requested |
| **Slack** | Team communication context | Agent-requested |
| **CSV/PDF Upload** | Direct data ingestion | User-initiated |
| **PDF Export** | Edition sharing | User-initiated |

---

## 12. Project Structure

| Rule | Detail |
|------|--------|
| **1 Project = 1 Editorial Room** | Each analysis project gets a fresh Editorial Room |
| **No cross-project knowledge** | Field Agents start clean each time |
| **Rationale** | Keeps scope clear, avoids data contamination, simplifies permission model |

---

## 13. Language

| Component | Language |
|-----------|----------|
| **UI** | English |
| **Agent communication** | English |
| **Reports & exports** | English |
| **Documentation** | English |

---

## 14. Development Roadmap

| Phase | Timeline | Deliverables |
|-------|----------|-------------|
| **Phase 1: Interactive Mockup** | Month 1 | React prototype with scripted agent conversations, investor pitch demo |
| **Phase 2: MVP Backend** | Month 2–3 | Real-time chat infrastructure, project management, PDF export |
| **Phase 3: Agent Intelligence** | Month 4–6 | LLM integration, data source connectors, autonomous loop |
| **Phase 4: Beta Launch** | Month 7–8 | Closed beta with 20 startup PMs, feedback loop |
| **Phase 5: Public Launch** | Month 9–10 | PLG launch, content marketing, seed fundraising |

---

## 15. Open Questions

Items not yet resolved that should be addressed in subsequent iterations.

| # | Question | Context |
|---|----------|---------|
| 1 | What is the maximum loop duration before auto-stop? | Field Agents decide autonomously when to stop, but there may need to be a ceiling (e.g., token budget or time limit) |
| 2 | How does confidence scoring work mechanically? | The 0–100% score needs a defined rubric (data completeness? source count? cross-validation?) |
| 3 | Multi-user collaboration within an Editorial Room? | v1 is single PM per room, but teams may need shared access |
| 4 | Notification system for async agent work? | If Field Agents run overnight, how does the PM get notified of new Editions? |
| 5 | Rate limiting / cost control for LLM usage? | Per-project token budgets? Usage dashboards? |
| 6 | Data retention & privacy policy? | Especially for connected data sources (Google Drive, Slack) |
| 7 | Field Agent disagreement resolution? | What happens when Nova and Iris reach conflicting conclusions? |
| 8 | Edition versioning? | Can PMs view historical snapshots of past Editions at each publish point? |
| 9 | Timeline interaction model? | How deep can PMs engage with Timeline posts — reply only, or redirect the agent's focus? |

---

## 15.5. Vision: The Daily Edition

While not part of the v1 specification, the long-term vision extends the journalism metaphor to its natural conclusion: a **Daily Edition** — a morning newspaper published by Field Agents summarizing what happened yesterday, what's developing now, and what to watch for today.

The Daily Edition would include:
- **Headlines:** The most significant findings or changes from the past 24 hours
- **Serials:** Ongoing stories being tracked across multiple days (e.g., a bug's progression, a user behavior trend)
- **Forecasts:** Predictions based on current data trajectories ("This metric is likely to spike today")
- **Good news and bad news:** A balanced view of the product's health

This edition would be readable not just by the PM, but by the entire team — engineers, designers, executives — creating a **shared language** about the product's state. The day begins with "Did you see today's front page?"

This vision is grounded in the ethnographic principle that continuous, contextualized observation creates a fundamentally different relationship with a product — one where invisible patterns become visible, and every day is engaging.

---

## 16. Success Metrics

### 16.1 Product Metrics (MVP / Beta)

| Metric | Target |
|--------|--------|
| **Time to first insight** | < 10 minutes from project kickoff |
| **PM interventions per session** | < 5 (validates "low-touch" thesis) |
| **Edition export rate** | > 60% of completed projects |
| **Return usage** | > 3 projects per user in first month |

### 16.2 Business Metrics (Post-Launch)

| Metric | Target |
|--------|--------|
| **MRR** | $50K within 6 months of launch |
| **Seat expansion** | 1.5x within first 90 days per account |
| **NPS** | > 50 |
| **Churn** | < 5% monthly |

---

## Appendix A: Glossary

| Term | Definition |
|------|-----------|
| **Editorial Room** | The main chat interface where all three Field Agents communicate, debate, and collaborate — the newsroom's editorial meeting |
| **Field Agent** | A specialized AI correspondent dispatched to a specific data domain (quantitative, qualitative, or market) to conduct ethnographic observation |
| **Timeline** | An individual Field Agent's Twitter-like feed of real-time observations, work-in-progress notes, and raw data sightings from their beat |
| **Edition** | A published snapshot of the current analysis — the right-panel document that evolves each time Field Agents compile their findings, like a newspaper edition |
| **Agent Loop** | The cyclical editorial process: field work → editorial meeting → hypothesis → gap check → additional research |
| **Additional Research** | Agent-initiated request for more data, requiring PM approval for new data source connections |
| **Confidence Score** | A 0–100% metric representing how well-validated the current hypothesis is |
| **Editor-in-Chief** | The PM's role — overseeing the Editorial Room, making strategic decisions, approving directions |
| **Digital Ethnography** | The theoretical foundation — automating the established methodology of observational research through always-on Field Agents |
| **Choice-Based Intervention** | The PM's primary interaction mode — selecting from agent-presented options rather than free-form input |

---

## Appendix B: UI Reference

Interactive mockup available as React component: `pm-studio.jsx`

The mockup demonstrates:
- Editorial Room chat with three Field Agents (Nova, Iris, Scout)
- Individual agent Timeline tabs
- PM intervention with choice-based selection
- Right panel with Edition, Recommendation, and Roadmap tabs
- Animated message delivery and typing indicators
- Source citation badges on data points
