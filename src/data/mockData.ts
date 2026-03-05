export type AgentProfile = {
  id: string;
  codename: string;
  niche: string;
  persona: string;
  region: string;
  status: "active" | "training" | "hold";
  channels: {
    instagram: string;
    tiktok: string;
    youtube?: string;
    fanvue?: string;
  };
  followers: number;
  engagementRate: number;
  conversionRate: number;
  monthlyRevenueUsd: number;
  weeklyTasks: string[];
  postingWindows: string[];
  researchFocus: string[];
  avatar: string;
  identityPrompt: string;
  launchPriority?: "first-three" | "later";
};

export type Deal = {
  id: string;
  brand: string;
  vertical: string;
  valueUsd: number;
  stage: "lead" | "proposal" | "active" | "delivered";
  owner: string;
  influencers: string[];
  productFocus: string;
  dueWeek: string;
};

export type PlatformOption = {
  platform: string;
  bestFor: string;
  characterConsistencyMethod: string;
  difficulty: "easy" | "medium" | "advanced";
  monthlyCost: string;
  link: string;
  note: string;
};

export const company = {
  name: "NexaPersona Labs",
  tagline: "Autonomous Influence Infrastructure",
  internalSubtitle:
    "Founder Strategy Hub for Ghost & Zoro — Internal Whitepaper + Operating OS",
  mission:
    "Build an autonomous AI influencer operating system that launches, scales, and optimizes lifelike creator personas across global niches with measurable brand ROI.",
  vision:
    "Become the control plane for post-human creator commerce, powering thousands of autonomous influencer agents by 2030.",
  pillars: [
    "Autonomous multi-agent orchestration (OpenClaw core)",
    "Photorealistic content engine with character consistency",
    "Compliance-by-design workflows and audit trails",
    "Performance-led growth loops and attribution discipline"
  ]
};

export const synthesisNotes = [
  {
    source: "ai_influencer_agency_blueprint_e52c5155.plan.md (primary)",
    takeaway:
      "Governance-first architecture: research corpus, compliance workflow, and scenario-led forecasting."
  },
  {
    source: "ai_influencer_agency_blueprint_5856b7b0.plan.md",
    takeaway:
      "High operational depth on tool stack, timeline, and margin structure."
  },
  {
    source: "ai_influencer_agency_business_plan_c07c8117.plan.md",
    takeaway:
      "Clear customer JTBD framing and stronger sales narrative language."
  },
  {
    source: "ai_influencer_agency_business_plan_f9bba5e4.plan.md",
    takeaway:
      "Useful sequencing for deliverables and execution checkpoints."
  },
  {
    source: "clawforge_AI_agency_plan.md",
    takeaway:
      "Comprehensive multi-phase implementation from research to pitch collateral."
  },
  {
    source: "clawforge_business_plan_e82ba66f.plan.md",
    takeaway:
      "Practical documentation and HTML/PDF production flow."
  },
  {
    source: "nexusclaw_ai_agency_blueprint_8940c971.plan.md",
    takeaway:
      "Strong concise architecture framing and investor pitch clarity."
  },
  {
    source: "UVI package (BUSINESS_PLAN, MARKET_RESEARCH, CHECKLIST, DECK, etc.)",
    takeaway:
      "Most complete tactical details: legal, launch checklist, campaign operations, KPI loops."
  }
];

export const marketStats = [
  {
    metric: "Virtual Influencer Market",
    value: "$9.75B → $154.83B",
    detail: "2025 to 2033 projection, ~41.29% CAGR"
  },
  {
    metric: "Alternative Projection",
    value: "$6.06B → $45.88B",
    detail: "2024 to 2030 projection, ~40.8% CAGR"
  },
  {
    metric: "Broader Influencer Market",
    value: "$33B (2025)",
    detail: "Projected to exceed $44B by 2030"
  },
  {
    metric: "AI Content Segment",
    value: "$1.48B → $3.66B",
    detail: "2025 to 2029 projection, ~25.3% CAGR"
  },
  {
    metric: "Benchmarked Case Study",
    value: "€3k–€10k/month",
    detail: "Aitana-level single-persona revenue range"
  }
];

export const toolsStack = [
  {
    category: "Orchestration",
    tool: "OpenClaw",
    purpose: "Main orchestrator + sub-agent runtime",
    cost: "$0 self-hosted",
    signup: "https://github.com/openclaw/openclaw"
  },
  {
    category: "Character Visual Identity",
    tool: "Midjourney Character/Omni Reference",
    purpose: "Lock character look across stills and scene variations",
    cost: "$10+ / month plan based",
    signup: "https://docs.midjourney.com/docs/character-reference"
  },
  {
    category: "Video Consistency",
    tool: "Runway Gen-4 References",
    purpose: "Consistent character video shots from image references",
    cost: "$12–$99/mo",
    signup: "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References"
  },
  {
    category: "Video Consistency",
    tool: "Kling",
    purpose: "Fast short-form photoreal clips with reference workflows",
    cost: "$7–$26/mo typical",
    signup: "https://klingai.com"
  },
  {
    category: "Voice",
    tool: "ElevenLabs",
    purpose: "Persona voice cloning + emotional synthesis",
    cost: "$22/mo creator baseline",
    signup: "https://elevenlabs.io/pricing"
  },
  {
    category: "Advanced Character Control",
    tool: "ComfyUI + IPAdapter + ControlNet",
    purpose: "Highest control for same-person consistency and pose control",
    cost: "$0 software + GPU cost",
    signup: "https://www.runcomfy.com/comfyui-nodes/ComfyUI_IPAdapter_plus"
  },
  {
    category: "Distribution",
    tool: "Instagram Graph API",
    purpose: "Safe publishing, insights, moderation hooks",
    cost: "Free API access tier",
    signup: "https://developers.facebook.com/docs/instagram-graph-api"
  },
  {
    category: "Distribution",
    tool: "TikTok Business API",
    purpose: "Posting + scheduling + business analytics",
    cost: "API access approval",
    signup: "https://developers.tiktok.com"
  },
  {
    category: "Trend Data",
    tool: "SERP / Trend APIs",
    purpose: "Daily keyword + topic intelligence",
    cost: "$0–$100/mo",
    signup: "https://serpapi.com"
  }
];

export const firstThreeLaunchBlueprint = [
  {
    codename: "ArjunPulse",
    title: "South African Indian Tech Influencer",
    targetAudience: "English-speaking tech buyers in South Africa + global diaspora",
    contentStyle: "AI tool explainers, gadget reviews, productivity workflows",
    refImage: "/assets/persona-sa-indian-tech.jpg",
    launchGoal: "Publish 10 short videos in first 7 days and hit 1k followers"
  },
  {
    codename: "NiaPips",
    title: "Nigerian Forex Trader Persona",
    targetAudience: "Africa-first retail finance and trading learners",
    contentStyle: "Educational trading explainers, risk-management snippets, market recaps",
    refImage: "/assets/persona-nigerian-forex.jpg",
    launchGoal: "Build trust series with 14-day educational content plan"
  },
  {
    codename: "LunaVogue",
    title: "Fashion & Lifestyle Girl",
    targetAudience: "Gen Z/young millennial style and beauty audiences",
    contentStyle: "Outfit changes, lifestyle storytelling, product try-on activations",
    refImage: "/assets/persona-fashion-girl.png",
    launchGoal: "Create daily lookbook reels and first 3 brand-style mock activations"
  }
];

export const platformOptions: PlatformOption[] = [
  {
    platform: "Midjourney + Runway + ElevenLabs (Easiest starter stack)",
    bestFor: "First-time founders who need quality quickly",
    characterConsistencyMethod:
      "Use Midjourney character references for still identity + Runway Gen-4 references for video continuity",
    difficulty: "easy",
    monthlyCost: "~$45–$160 depending usage",
    link: "https://docs.midjourney.com/docs/character-reference",
    note: "Best balance of low technical overhead and high output quality."
  },
  {
    platform: "Kling + reference workflows + ElevenLabs",
    bestFor: "Fast short-form clip generation",
    characterConsistencyMethod:
      "Keep a locked reference pack (face, full body, side angle) and reuse for all clips",
    difficulty: "medium",
    monthlyCost: "~$30–$130",
    link: "https://klingai.com",
    note: "Fast production cadence; quality depends on prompt discipline."
  },
  {
    platform: "ComfyUI + IPAdapter + ControlNet + local models",
    bestFor: "Maximum consistency and full control at scale",
    characterConsistencyMethod:
      "Train LoRA + use IPAdapter FaceID and ControlNet pose maps for deterministic identity",
    difficulty: "advanced",
    monthlyCost: "Software free; compute/GPU cost variable",
    link: "https://www.runcomfy.com/comfyui-nodes/ComfyUI_IPAdapter_plus",
    note: "Most powerful long-term if you have technical support."
  },
  {
    platform: "HeyGen (avatar-first) + social editing stack",
    bestFor: "Talking-head explainers with minimal setup",
    characterConsistencyMethod:
      "Template avatar identity with voice clone and scripted scenes",
    difficulty: "easy",
    monthlyCost: "$29+",
    link: "https://www.heygen.com",
    note: "Great for explainers but less ideal for full-body lifestyle content."
  }
];

export const dayOneGuide = [
  "Create business workspace: Gmail + Notion + Drive + 1Password for shared credentials.",
  "Sign up accounts: OpenClaw, Midjourney (or preferred image platform), Runway, Kling, ElevenLabs, Meta Developer, TikTok Developer.",
  "Create folder structure: /personas, /scripts, /assets, /published, /analytics.",
  "Pick first 3 launch personas (ArjunPulse, NiaPips, LunaVogue) and lock their identity reference images.",
  "Write each persona's identity card: age, tone, values, slang style, content boundaries, taboo topics.",
  "Generate 20 image references per persona (same face, varied clothes/scenes).",
  "Generate 3 voice samples and finalize one voice per persona in ElevenLabs.",
  "Create Instagram and TikTok accounts for each persona and fill profile bios + avatar.",
  "Configure OpenClaw sub-agent for each persona with identity prompt and research points.",
  "Publish first 2 onboarding posts per persona and start daily research→content→posting loop."
];

export const weekOneDetailedPlan = [
  {
    day: "Day 1",
    title: "Identity and Accounts Setup",
    actions: [
      "Finalize persona identity sheets (voice, style, values, boundaries)",
      "Open all platform accounts and save credentials in shared vault",
      "Create social bios with clear persona positioning"
    ]
  },
  {
    day: "Day 2",
    title: "Visual Consistency Pack",
    actions: [
      "Generate base look images (front, side, full-body, three lighting setups)",
      "Create wardrobe variants for each persona",
      "Approve a 'golden identity pack' used in every generation"
    ]
  },
  {
    day: "Day 3",
    title: "Video and Voice Pipeline",
    actions: [
      "Generate first 6 videos per persona with references",
      "Apply voice clone and subtitles",
      "Review quality checklist: realism, audio, script clarity"
    ]
  },
  {
    day: "Day 4",
    title: "OpenClaw Agent Wiring",
    actions: [
      "Create 3 sub-agents and assign identity prompts",
      "Attach research points and posting windows",
      "Run dry test: research output, script output, publish queue"
    ]
  },
  {
    day: "Day 5",
    title: "Go Live",
    actions: [
      "Publish first content wave (2 posts per persona)",
      "Reply to early comments manually for tone calibration",
      "Collect baseline metrics (reach, watch time, saves)"
    ]
  },
  {
    day: "Day 6",
    title: "Optimization Loop",
    actions: [
      "A/B test hooks and thumbnails",
      "Refine scripts based on retention drop points",
      "Update agent memory with best-performing structures"
    ]
  },
  {
    day: "Day 7",
    title: "System Review",
    actions: [
      "Review weekly KPI dashboard",
      "Finalize week-2 content sprint",
      "Prepare mini-case-study deck to show progress to co-founder"
    ]
  }
];

export const openClawPersonaPromptTemplate = `SYSTEM ROLE:
You are {{CODENAME}}, an autonomous AI influencer managed by NexaPersona Labs.

IDENTITY:
- Persona: {{PERSONA_DESCRIPTION}}
- Audience: {{TARGET_AUDIENCE}}
- Voice style: {{VOICE_STYLE}}
- Content pillars: {{PILLARS}}

DAILY LOOP:
1) Research trends for your niche and region.
2) Produce script ideas (hooks + CTA + caption draft).
3) Generate content queue (video + image + caption assets).
4) Publish to Instagram and TikTok on approved windows.
5) Monitor comments and reply in-character.
6) Log metrics and write next-day optimization notes.

RESEARCH POINTS:
- Trending hashtags and sounds
- Competitor content angle gaps
- Audience questions in comments
- Brand product fit for soft integrations

SAFETY:
- No financial or health claims without disclaimers.
- Never impersonate real people.
- Follow disclosure rules for sponsored content.`;

export const agents: AgentProfile[] = [
  {
    id: "ag-001",
    codename: "ArjunPulse",
    niche: "Tech",
    persona:
      "South African Indian early-30s tech influencer focused on practical AI and gadget education.",
    region: "South Africa + global diaspora",
    status: "active",
    channels: {
      instagram: "@arjunpulse.ai",
      tiktok: "@arjunpulse.tech",
      youtube: "@arjunpulse.explains"
    },
    followers: 12800,
    engagementRate: 6.4,
    conversionRate: 2.7,
    monthlyRevenueUsd: 1800,
    weeklyTasks: [
      "Create 4 AI tool explainers",
      "Publish 2 gadget demo reels",
      "Answer top 80 comments with beginner-friendly responses"
    ],
    postingWindows: ["Mon–Thu 10:00", "Mon–Thu 19:00", "Sun 09:00"],
    researchFocus: ["AI apps", "consumer tech trends", "productivity workflows"],
    avatar: "/assets/persona-sa-indian-tech.jpg",
    identityPrompt:
      "Calm, trustworthy, practical educator tone. Explain in simple English. No hype claims.",
    launchPriority: "first-three"
  },
  {
    id: "ag-002",
    codename: "NiaPips",
    niche: "Forex",
    persona:
      "Nigerian forex trader persona delivering educational market commentary and risk-first trading lessons.",
    region: "Nigeria + Africa + UK",
    status: "active",
    channels: {
      instagram: "@niapips.fx",
      tiktok: "@niapips",
      youtube: "@niapips.education"
    },
    followers: 9400,
    engagementRate: 7.1,
    conversionRate: 3.2,
    monthlyRevenueUsd: 1400,
    weeklyTasks: [
      "Publish 5 market recap shorts",
      "Create 3 risk-management explainers",
      "Route beginner questions into FAQ highlight reels"
    ],
    postingWindows: ["Mon–Fri 08:30", "Mon–Fri 17:30"],
    researchFocus: ["forex education", "economic calendar", "risk framework content"],
    avatar: "/assets/persona-nigerian-forex.jpg",
    identityPrompt:
      "Educational, cautious, no guaranteed return claims, always include risk disclaimers.",
    launchPriority: "first-three"
  },
  {
    id: "ag-003",
    codename: "LunaVogue",
    niche: "Fashion",
    persona:
      "Fashion and lifestyle girl persona for outfit storytelling, beauty routines, and brand-friendly lifestyle content.",
    region: "Global English-speaking",
    status: "active",
    channels: {
      instagram: "@lunavogue.daily",
      tiktok: "@lunavogue",
      fanvue: "@lunavogue.club"
    },
    followers: 15700,
    engagementRate: 8.5,
    conversionRate: 3.8,
    monthlyRevenueUsd: 2200,
    weeklyTasks: [
      "Publish 5 lookbook reels",
      "Generate 3 product activation mock campaigns",
      "Run style poll stories to collect preference data"
    ],
    postingWindows: ["Thu 16:00", "Fri 18:00", "Sat 20:30"],
    researchFocus: ["fashion trends", "beauty routines", "outfit transitions"],
    avatar: "/assets/persona-fashion-girl.png",
    identityPrompt:
      "Aspirational but friendly tone. High visual polish, short hooks, upbeat CTA style.",
    launchPriority: "first-three"
  },
  {
    id: "ag-004",
    codename: "ApexTorque",
    niche: "Automotive",
    persona: "Performance and EV deep-dive reviewer",
    region: "US + Germany",
    status: "active",
    channels: {
      instagram: "@apextorque.auto",
      tiktok: "@apextorque",
      youtube: "@apextorque-garage"
    },
    followers: 73600,
    engagementRate: 5.9,
    conversionRate: 2.3,
    monthlyRevenueUsd: 12200,
    weeklyTasks: [
      "Publish 3 EV comparison reels",
      "Deliver sponsored tire brand integrations",
      "Build poll-driven follower Q&A content"
    ],
    postingWindows: ["Tue 10:30", "Wed 20:00", "Sat 09:00"],
    researchFocus: ["EV range updates", "car accessories", "sports coupe trends"],
    avatar: "/assets/agent-auto.svg",
    identityPrompt:
      "Technical but energetic presenter. Focus on specs and practical ownership tips.",
    launchPriority: "later"
  },
  {
    id: "ag-005",
    codename: "PulseArena",
    niche: "Sports",
    persona: "Data-backed sports commentator persona",
    region: "US + UK + South Africa",
    status: "active",
    channels: {
      instagram: "@pulsearena.live",
      tiktok: "@pulsearena",
      youtube: "@pulsearena-stats"
    },
    followers: 65400,
    engagementRate: 6.4,
    conversionRate: 2.1,
    monthlyRevenueUsd: 9700,
    weeklyTasks: [
      "Create match prediction content blocks",
      "Inject sponsor pre-roll hooks in post-match clips",
      "Run fan sentiment digest after events"
    ],
    postingWindows: ["Wed 19:00", "Fri 19:00", "Sun 20:30"],
    researchFocus: ["fixture schedules", "fan sentiment", "betting-safe content"],
    avatar: "/assets/agent-tech.svg",
    identityPrompt:
      "Neutral analyst voice, engaging match insights, avoid misleading betting signals.",
    launchPriority: "later"
  },
  {
    id: "ag-006",
    codename: "GridJester",
    niche: "Comedy",
    persona: "Meme-native sketch persona with trend remixes",
    region: "US + India",
    status: "active",
    channels: {
      instagram: "@gridjester.fun",
      tiktok: "@gridjester"
    },
    followers: 153900,
    engagementRate: 10.3,
    conversionRate: 1.4,
    monthlyRevenueUsd: 8600,
    weeklyTasks: [
      "Drop 6 topical sketch shorts",
      "Test 3 hook variants per short",
      "Moderate replies with tone-safe humor rules"
    ],
    postingWindows: ["Daily 20:00", "Sat 21:30"],
    researchFocus: ["viral sounds", "reaction memes", "culture moments"],
    avatar: "/assets/agent-fashion.svg",
    identityPrompt:
      "High-energy humor, no sensitive-topic escalation, always keep brand-safe mode toggle.",
    launchPriority: "later"
  }
];

export const deals: Deal[] = [
  {
    id: "dl-100",
    brand: "NeuroSip",
    vertical: "Beverage",
    valueUsd: 18000,
    stage: "active",
    owner: "Ghost",
    influencers: ["ArjunPulse", "LunaVogue"],
    productFocus: "Nootropic drink launch",
    dueWeek: "Week 2"
  },
  {
    id: "dl-101",
    brand: "ForexPilot EDU",
    vertical: "Finance Education",
    valueUsd: 22000,
    stage: "proposal",
    owner: "Zoro",
    influencers: ["NiaPips"],
    productFocus: "Forex learning app campaign",
    dueWeek: "Week 3"
  },
  {
    id: "dl-102",
    brand: "LumaWear",
    vertical: "Fashion",
    valueUsd: 14000,
    stage: "lead",
    owner: "Ghost",
    influencers: ["LunaVogue"],
    productFocus: "Lifestyle lookbook campaign",
    dueWeek: "Week 4"
  },
  {
    id: "dl-103",
    brand: "TorqueGrid",
    vertical: "Automotive",
    valueUsd: 12000,
    stage: "active",
    owner: "Zoro",
    influencers: ["ApexTorque"],
    productFocus: "EV charger kit campaign",
    dueWeek: "Week 2"
  },
  {
    id: "dl-104",
    brand: "PulseMax Nutrition",
    vertical: "Supplements",
    valueUsd: 26000,
    stage: "delivered",
    owner: "Ghost",
    influencers: ["ArjunPulse", "LunaVogue"],
    productFocus: "8-week conversion campaign",
    dueWeek: "Completed"
  }
];

export const adBudget = [
  { platform: "Meta Ads", monthly: 2200, roas: 4.2, cac: 122 },
  { platform: "TikTok Ads", monthly: 1800, roas: 4.9, cac: 98 },
  { platform: "Google Search", monthly: 1200, roas: 3.4, cac: 155 },
  { platform: "YouTube Shorts", monthly: 900, roas: 2.6, cac: 190 }
];

export const monthlyPerformance = [
  { month: "Jan", followersK: 12, revenueK: 0, engagement: 4.1, deals: 0 },
  { month: "Feb", followersK: 26, revenueK: 3, engagement: 5.2, deals: 2 },
  { month: "Mar", followersK: 43, revenueK: 8, engagement: 6.1, deals: 4 },
  { month: "Apr", followersK: 67, revenueK: 15, engagement: 6.8, deals: 7 },
  { month: "May", followersK: 92, revenueK: 24, engagement: 7.2, deals: 10 },
  { month: "Jun", followersK: 128, revenueK: 36, engagement: 7.6, deals: 13 }
];

export const forecastScenarios = {
  conservative: [
    { year: "Y1", revenue: 180000, profit: 82000 },
    { year: "Y2", revenue: 420000, profit: 241000 },
    { year: "Y3", revenue: 820000, profit: 502000 }
  ],
  base: [
    { year: "Y1", revenue: 369000, profit: 310000 },
    { year: "Y2", revenue: 742000, profit: 658000 },
    { year: "Y3", revenue: 1170000, profit: 1060000 }
  ],
  aggressive: [
    { year: "Y1", revenue: 510000, profit: 402000 },
    { year: "Y2", revenue: 1180000, profit: 962000 },
    { year: "Y3", revenue: 2460000, profit: 2010000 }
  ]
};

export const roadmap = [
  {
    phase: "Phase 0",
    window: "Week 1",
    objective: "Founder Setup + Persona Definition",
    outcomes: [
      "Set up legal/compliance and shared credential vault",
      "Create first 3 persona identity cards",
      "Sign up and verify all required platforms"
    ]
  },
  {
    phase: "Phase 1",
    window: "Weeks 2–3",
    objective: "First 3 Influencers Live",
    outcomes: [
      "Generate identity-consistent visuals and first content bank",
      "Wire OpenClaw sub-agents with prompts and research points",
      "Launch Instagram and TikTok profiles"
    ]
  },
  {
    phase: "Phase 2",
    window: "Weeks 4–6",
    objective: "Follower Growth Engine",
    outcomes: [
      "Run daily posting and engagement loop",
      "Track retention, saves, and comments by persona",
      "Hit first follower milestones before active deal outreach"
    ]
  },
  {
    phase: "Phase 3",
    window: "Weeks 7–12",
    objective: "Deal Readiness",
    outcomes: [
      "Build case studies with real account metrics",
      "Start outbound to brand targets with proof assets",
      "Close first paid sponsorships"
    ]
  }
];

export const executionChecklist = [
  "Finalize brand identity and domain lock for NexaPersona Labs",
  "Create 3 persona identity cards (ArjunPulse, NiaPips, LunaVogue)",
  "Sign up: OpenClaw, Midjourney/ComfyUI, Runway, Kling, ElevenLabs, Meta Developer, TikTok Developer",
  "Build golden reference packs for each persona (front/side/full-body/light variants)",
  "Generate first 10 videos and 20 photos per persona",
  "Create Instagram and TikTok profiles and publish onboarding posts",
  "Set OpenClaw daily loops: research -> script -> generate -> post -> engage",
  "Measure week-1 metrics and update persona prompts from audience feedback",
  "Run growth sprint until each persona has enough proof metrics for deal outreach",
  "Prepare outreach deck and begin first brand conversations"
];

export const sourceLinks = [
  "https://www.snsinsider.com/reports/virtual-influencer-market-5924",
  "https://www.grandviewresearch.com/industry-analysis/virtual-influencer-market-report",
  "https://www.euronews.com/next/2024/12/27/meet-the-first-spanish-ai-model-earning-up-to-10000-per-month",
  "https://runwayml.com/research/introducing-runway-gen-4",
  "https://help.runwayml.com/hc/en-us/articles/40042718905875-Creating-with-Gen-4-Image-References",
  "https://docs.midjourney.com/docs/character-reference",
  "https://elevenlabs.io/docs/creative-platform/voices/voice-cloning/instant-voice-cloning",
  "https://developers.facebook.com/docs/instagram-graph-api",
  "https://developers.tiktok.com"
];
