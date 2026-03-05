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
    source: "ai_influencer_agency_blueprint_e52c5155.plan.md",
    takeaway:
      "Strong governance-first structure: research corpus, compliance framework, and scenario modeling."
  },
  {
    source: "ai_influencer_agency_blueprint_5856b7b0.plan.md",
    takeaway:
      "Best tactical depth on tools, timelines, and unit economics; strong 36-month financial framing."
  },
  {
    source: "ai_influencer_agency_business_plan_c07c8117.plan.md",
    takeaway:
      "Alternative brand framing and sharper customer JTBD language for sales narratives."
  },
  {
    source: "ai_influencer_agency_business_plan_f9bba5e4.plan.md",
    takeaway:
      "Execution checklist rigor and deliverable-driven sequencing useful for founder operations."
  },
  {
    source: "clawforge_AI_agency_plan.md",
    takeaway:
      "Comprehensive phased implementation from research to PDF/deck; useful for project governance."
  },
  {
    source: "clawforge_business_plan_e82ba66f.plan.md",
    takeaway:
      "Practical HTML→PDF tooling approach and visual communication structure."
  },
  {
    source: "nexusclaw_ai_agency_blueprint_8940c971.plan.md",
    takeaway:
      "Clean architecture narrative and concise investor-facing summaries."
  },
  {
    source: "UVI pack (BUSINESS_PLAN, MARKET_RESEARCH, CHECKLIST, DECK)",
    takeaway:
      "Most complete operational artifacts: legal, startup checklist, campaigns, and deployment timeline."
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
    category: "Video Generation",
    tool: "Kling",
    purpose: "Photoreal short-form motion clips",
    cost: "$7–$26/mo typical",
    signup: "https://klingai.com"
  },
  {
    category: "Video Generation",
    tool: "Runway",
    purpose: "Premium cinematic shots, long-form variants",
    cost: "$12–$99/mo",
    signup: "https://runwayml.com"
  },
  {
    category: "Voice",
    tool: "ElevenLabs",
    purpose: "Persona voice cloning + emotional synthesis",
    cost: "$22/mo creator baseline",
    signup: "https://elevenlabs.io/pricing"
  },
  {
    category: "Image",
    tool: "Flux.1 / ComfyUI",
    purpose: "Persona keyframes + consistency library",
    cost: "$0 local to low API cost",
    signup: "https://huggingface.co/black-forest-labs"
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

export const agents: AgentProfile[] = [
  {
    id: "ag-001",
    codename: "VoltRae",
    niche: "Tech",
    persona: "Analytical gadget reviewer, 28, Cape Town voiceprint",
    region: "US + South Africa",
    status: "active",
    channels: {
      instagram: "@voltrae.ai",
      tiktok: "@voltrae.tech",
      youtube: "@voltrae-labs"
    },
    followers: 91200,
    engagementRate: 6.8,
    conversionRate: 2.9,
    monthlyRevenueUsd: 18200,
    weeklyTasks: [
      "Produce 4 product teardown reels",
      "Record 2 AI tool benchmark shorts",
      "Reply to top 120 comments with context-aware scripts"
    ],
    postingWindows: ["Mon–Thu 10:00", "Mon–Thu 19:30", "Sun 09:00"],
    researchFocus: ["AI devices", "consumer robotics", "creator tools"],
    avatar: "/assets/agent-tech.svg"
  },
  {
    id: "ag-002",
    codename: "MiraLuxe",
    niche: "Fashion",
    persona: "Editorial style persona, 25, high-retention story arcs",
    region: "US + UAE + UK",
    status: "active",
    channels: {
      instagram: "@miraluxe.studio",
      tiktok: "@miraluxe.style",
      fanvue: "@miraluxe_afterdark"
    },
    followers: 144300,
    engagementRate: 7.2,
    conversionRate: 3.6,
    monthlyRevenueUsd: 26300,
    weeklyTasks: [
      "Launch 2 brand capsule campaigns",
      "Schedule 5 OOTD reels + 3 carousel posts",
      "Route premium comments to fan-community funnel"
    ],
    postingWindows: ["Thu 16:00", "Fri 17:00", "Sat 20:30"],
    researchFocus: ["streetwear trends", "seasonal lookbooks", "beauty collabs"],
    avatar: "/assets/agent-fashion.svg"
  },
  {
    id: "ag-003",
    codename: "ChefNova",
    niche: "Cooking",
    persona: "Fast recipe authority with global food formats",
    region: "US + LATAM",
    status: "active",
    channels: {
      instagram: "@chefnova.daily",
      tiktok: "@chefnova.kitchen",
      youtube: "@chefnova-mealprep"
    },
    followers: 118500,
    engagementRate: 8.1,
    conversionRate: 4.1,
    monthlyRevenueUsd: 19300,
    weeklyTasks: [
      "Produce 7 meal-prep short videos",
      "Feature 2 sponsored cookware integrations",
      "Publish ingredient substitution comment guide"
    ],
    postingWindows: ["Daily 11:30", "Daily 18:00"],
    researchFocus: ["high protein recipes", "budget meals", "viral plating"],
    avatar: "/assets/agent-cooking.svg"
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
    avatar: "/assets/agent-auto.svg"
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
    avatar: "/assets/agent-auto.svg"
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
    avatar: "/assets/agent-fashion.svg"
  },
  {
    id: "ag-007",
    codename: "SignalCivic",
    niche: "Politics",
    persona: "Non-partisan explainer persona with source-first commentary",
    region: "US + EU",
    status: "training",
    channels: {
      instagram: "@signalcivic.media",
      tiktok: "@signalcivic"
    },
    followers: 22100,
    engagementRate: 4.9,
    conversionRate: 1.1,
    monthlyRevenueUsd: 3400,
    weeklyTasks: [
      "Build verified source pack for policy explainers",
      "Publish 3 neutral issue briefs",
      "Implement escalation workflow for sensitive comments"
    ],
    postingWindows: ["Tue 18:00", "Thu 18:00", "Sun 17:00"],
    researchFocus: ["public policy", "fact checks", "election calendar"],
    avatar: "/assets/agent-tech.svg"
  },
  {
    id: "ag-008",
    codename: "VelvetEcho",
    niche: "Adult Premium",
    persona: "Subscription-led premium persona with strict policy partition",
    region: "Global",
    status: "active",
    channels: {
      instagram: "@velvetecho.tease",
      tiktok: "@velvetecho",
      fanvue: "@velvetecho.vip"
    },
    followers: 98400,
    engagementRate: 8.8,
    conversionRate: 5.2,
    monthlyRevenueUsd: 29200,
    weeklyTasks: [
      "Queue 4 teaser reels for IG/TikTok safe channels",
      "Publish 5 premium Fanvue sets",
      "Run DM conversion automation to premium wall"
    ],
    postingWindows: ["Thu 21:00", "Fri 22:00", "Sat 23:00"],
    researchFocus: ["creator monetization", "retention copy", "offer sequencing"],
    avatar: "/assets/agent-fashion.svg"
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
    influencers: ["VoltRae", "ChefNova"],
    productFocus: "Nootropic drink launch",
    dueWeek: "Week 2"
  },
  {
    id: "dl-101",
    brand: "LumaFit",
    vertical: "Sportswear",
    valueUsd: 22000,
    stage: "proposal",
    owner: "Zoro",
    influencers: ["MiraLuxe", "PulseArena"],
    productFocus: "High-performance apparel drop",
    dueWeek: "Week 3"
  },
  {
    id: "dl-102",
    brand: "TorqueGrid",
    vertical: "Automotive",
    valueUsd: 12000,
    stage: "active",
    owner: "Ghost",
    influencers: ["ApexTorque"],
    productFocus: "EV charger kit campaign",
    dueWeek: "Week 2"
  },
  {
    id: "dl-103",
    brand: "OrbitalSkin",
    vertical: "Beauty",
    valueUsd: 14000,
    stage: "lead",
    owner: "Zoro",
    influencers: ["MiraLuxe", "GridJester"],
    productFocus: "Skincare UGC amplification",
    dueWeek: "Week 4"
  },
  {
    id: "dl-104",
    brand: "PulseMax Nutrition",
    vertical: "Supplements",
    valueUsd: 26000,
    stage: "delivered",
    owner: "Ghost",
    influencers: ["ChefNova", "PulseArena", "VelvetEcho"],
    productFocus: "8-week conversion campaign",
    dueWeek: "Completed"
  }
];

export const adBudget = [
  { platform: "Meta Ads", monthly: 5200, roas: 4.7, cac: 145 },
  { platform: "TikTok Ads", monthly: 3600, roas: 5.1, cac: 118 },
  { platform: "Google Search", monthly: 2400, roas: 3.9, cac: 172 },
  { platform: "YouTube Shorts", monthly: 1400, roas: 2.8, cac: 210 }
];

export const monthlyPerformance = [
  { month: "Jan", followersK: 210, revenueK: 62, engagement: 6.1, deals: 12 },
  { month: "Feb", followersK: 262, revenueK: 78, engagement: 6.6, deals: 16 },
  { month: "Mar", followersK: 318, revenueK: 94, engagement: 6.9, deals: 18 },
  { month: "Apr", followersK: 377, revenueK: 113, engagement: 7.2, deals: 22 },
  { month: "May", followersK: 431, revenueK: 127, engagement: 7.4, deals: 24 },
  { month: "Jun", followersK: 488, revenueK: 146, engagement: 7.7, deals: 27 }
];

export const forecastScenarios = {
  conservative: [
    { year: "Y1", revenue: 260000, profit: 128000 },
    { year: "Y2", revenue: 540000, profit: 341000 },
    { year: "Y3", revenue: 920000, profit: 612000 }
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
    objective: "Foundation",
    outcomes: [
      "Register entity, legal templates, and disclosure policy",
      "Provision Mac Mini infrastructure and secure credentials",
      "Finalize 8 launch personas and voice design"
    ]
  },
  {
    phase: "Phase 1",
    window: "Weeks 2–4",
    objective: "MVP Live",
    outcomes: [
      "Deploy orchestrator + 8 sub-agents",
      "Launch first social surfaces with quality gating",
      "Close 3 pilot brand campaigns"
    ]
  },
  {
    phase: "Phase 2",
    window: "Weeks 5–8",
    objective: "Revenue Validation",
    outcomes: [
      "Reach $15k monthly run rate",
      "Scale to 12 active personas",
      "Publish investor-ready case studies with verified metrics"
    ]
  },
  {
    phase: "Phase 3",
    window: "Months 3–6",
    objective: "Systems Expansion",
    outcomes: [
      "Scale to 20+ personas with per-niche playbooks",
      "Implement ad allocation optimizer and brand deal pipeline automation",
      "Begin enterprise outbound and white-label pilot"
    ]
  }
];

export const executionChecklist = [
  "Finalize new brand identity and domain lock",
  "Set up OpenClaw orchestration environment with staging and production workspaces",
  "Create source-of-truth persona registry and content safety policy",
  "Ship daily trend research pipeline and scoring model",
  "Set weekly content quotas per niche + approval gates",
  "Launch GTM outbound sprint (500 accounts/month)",
  "Stand up ad manager with CAC/ROAS monitoring",
  "Instrument KPI dashboard: engagement, conversion, MRR, churn risk",
  "Implement legal audit trail for sponsorship disclosures",
  "Prepare investor dataroom: deck, model, compliance briefs, case studies"
];

export const sourceLinks = [
  "https://www.snsinsider.com/reports/virtual-influencer-market-5924",
  "https://www.grandviewresearch.com/industry-analysis/virtual-influencer-market-report",
  "https://www.euronews.com/next/2024/12/27/meet-the-first-spanish-ai-model-earning-up-to-10000-per-month",
  "https://elevenlabs.io/pricing",
  "https://developers.facebook.com/docs/instagram-graph-api",
  "https://developers.tiktok.com"
];
