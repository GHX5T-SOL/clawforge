import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {
  BarChart3,
  Briefcase,
  CheckSquare,
  CircleDollarSign,
  Compass,
  LayoutDashboard,
  Network,
  ShieldCheck
} from "lucide-react";
import {
  type Deal,
  adBudget,
  agents,
  company,
  deals,
  executionChecklist,
  forecastScenarios,
  marketStats,
  monthlyPerformance,
  roadmap,
  sourceLinks,
  synthesisNotes,
  toolsStack
} from "./data/mockData";

type TabKey =
  | "overview"
  | "strategy"
  | "market"
  | "blueprint"
  | "dashboard"
  | "finance"
  | "execution"
  | "investor";

const tabs: { key: TabKey; label: string; icon: ReactNode }[] = [
  { key: "overview", label: "Mission Control", icon: <Compass size={16} /> },
  { key: "strategy", label: "Unified Strategy", icon: <Network size={16} /> },
  { key: "market", label: "Market Intel", icon: <BarChart3 size={16} /> },
  { key: "blueprint", label: "Tech Blueprint", icon: <Briefcase size={16} /> },
  {
    key: "dashboard",
    label: "Swarm Dashboard",
    icon: <LayoutDashboard size={16} />
  },
  {
    key: "finance",
    label: "Finance Engine",
    icon: <CircleDollarSign size={16} />
  },
  { key: "execution", label: "Execution Ops", icon: <CheckSquare size={16} /> },
  {
    key: "investor",
    label: "Investor Story",
    icon: <ShieldCheck size={16} />
  }
];

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [nicheFilter, setNicheFilter] = useState("all");
  const [selectedAgentId, setSelectedAgentId] = useState(agents[0]?.id ?? "");
  const [scenario, setScenario] = useState<
    "conservative" | "base" | "aggressive"
  >("base");
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") {
      return {};
    }
    try {
      const raw = window.localStorage.getItem("nexa-checklist");
      return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    window.localStorage.setItem("nexa-checklist", JSON.stringify(completed));
  }, [completed]);

  const niches = useMemo(
    () => ["all", ...Array.from(new Set(agents.map((agent) => agent.niche)))],
    []
  );

  const filteredAgents = useMemo(
    () =>
      nicheFilter === "all"
        ? agents
        : agents.filter((agent) => agent.niche === nicheFilter),
    [nicheFilter]
  );

  const selectedAgent =
    filteredAgents.find((agent) => agent.id === selectedAgentId) ??
    filteredAgents[0] ??
    agents[0];

  const totalFollowers = filteredAgents.reduce(
    (sum, agent) => sum + agent.followers,
    0
  );
  const totalMonthlyRevenue = filteredAgents.reduce(
    (sum, agent) => sum + agent.monthlyRevenueUsd,
    0
  );
  const avgEngagement =
    filteredAgents.length > 0
      ? filteredAgents.reduce((sum, agent) => sum + agent.engagementRate, 0) /
        filteredAgents.length
      : 0;

  const dealsByStage = {
    lead: deals.filter((deal) => deal.stage === "lead"),
    proposal: deals.filter((deal) => deal.stage === "proposal"),
    active: deals.filter((deal) => deal.stage === "active"),
    delivered: deals.filter((deal) => deal.stage === "delivered")
  };

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <section className="hero">
              <div>
                <p className="eyebrow">Internal Founder Whitepaper</p>
                <h1>{company.name}</h1>
                <p className="hero-tagline">{company.tagline}</p>
                <p className="hero-subtitle">{company.internalSubtitle}</p>
              </div>
              <div className="hero-kpis">
                <StatCard label="Total Swarm Followers" value="0.49M+" />
                <StatCard label="Monthly Revenue (Mock)" value="$146k" />
                <StatCard label="Active Personas" value="8 live / 2 training" />
                <StatCard label="Current Break-even Model" value="Month 2–3" />
              </div>
            </section>

            <section className="panel">
              <h2>Mission</h2>
              <p>{company.mission}</p>
              <h2>Vision</h2>
              <p>{company.vision}</p>
              <h2>Core Pillars</h2>
              <ul className="bullet-list">
                {company.pillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
            </section>

            <section className="grid two">
              <article className="panel">
                <h2>Brand Rename Decision</h2>
                <p>
                  <strong>New Name:</strong> <code>NexaPersona Labs</code>
                </p>
                <p>
                  Why this wins over previous naming: less aggressive tone,
                  clearer enterprise signal, scalable beyond one influencer
                  niche, and stronger fit for investor/brand trust.
                </p>
                <ul className="bullet-list">
                  <li>
                    <strong>Nexa</strong> signals next-gen operating layer
                  </li>
                  <li>
                    <strong>Persona</strong> anchors creator-identity IP
                  </li>
                  <li>
                    <strong>Labs</strong> communicates R&D + systems rigor
                  </li>
                </ul>
              </article>
              <article className="panel image-panel">
                <h2>Persona Mock Preview</h2>
                <div className="image-grid">
                  <img src="/assets/agent-tech.svg" alt="Tech persona mock" />
                  <img
                    src="/assets/agent-fashion.svg"
                    alt="Fashion persona mock"
                  />
                  <img
                    src="/assets/agent-cooking.svg"
                    alt="Cooking persona mock"
                  />
                  <img src="/assets/agent-auto.svg" alt="Auto persona mock" />
                </div>
              </article>
            </section>
          </>
        );

      case "strategy":
        return (
          <>
            <section className="panel">
              <h2>Unified Plan Synthesis</h2>
              <p>
                This operating model merges all reviewed agent plans plus the UVI
                package into a single founder OS. Primary blueprint baseline:
                <code> ai_influencer_agency_blueprint_e52c5155.plan.md </code>
                with tactical enrichments from the remaining plan set.
              </p>
              <div className="timeline">
                {synthesisNotes.map((note) => (
                  <div className="timeline-item" key={note.source}>
                    <p className="timeline-source">{note.source}</p>
                    <p>{note.takeaway}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid two">
              <article className="panel">
                <h2>What Changes in the Unified Version</h2>
                <ul className="bullet-list">
                  <li>
                    One command center for founders, investors, and operator
                    playbooks (instead of scattered docs).
                  </li>
                  <li>
                    Compliance-by-default architecture with explicit red-lines
                    (disclosure, policy gates, audit logs).
                  </li>
                  <li>
                    Scenario-based finance engine (conservative/base/aggressive)
                    to support fundraising and bootstrapped decisions.
                  </li>
                  <li>
                    Persona-level KPI accountability tied to brand-deal and ad
                    spend workflows.
                  </li>
                </ul>
              </article>

              <article className="panel">
                <h2>Founder Governance Model (Ghost & Zoro)</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Domain</th>
                      <th>Primary Owner</th>
                      <th>Cadence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sales + Brand Pipeline</td>
                      <td>Ghost</td>
                      <td>Daily</td>
                    </tr>
                    <tr>
                      <td>Product + Agent Runtime</td>
                      <td>Zoro</td>
                      <td>Daily</td>
                    </tr>
                    <tr>
                      <td>Compliance + Contracts</td>
                      <td>Joint</td>
                      <td>Weekly</td>
                    </tr>
                    <tr>
                      <td>Fundraising Narrative</td>
                      <td>Joint</td>
                      <td>Bi-weekly</td>
                    </tr>
                  </tbody>
                </table>
              </article>
            </section>
          </>
        );

      case "market":
        return (
          <>
            <section className="panel">
              <h2>Market Intelligence Snapshot</h2>
              <div className="grid four">
                {marketStats.map((stat) => (
                  <StatCard
                    key={stat.metric}
                    label={stat.metric}
                    value={stat.value}
                    detail={stat.detail}
                  />
                ))}
              </div>
            </section>

            <section className="grid two">
              <article className="panel chart-panel">
                <h2>Swarm Performance Trend (Mock)</h2>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={monthlyPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="followersK"
                      name="Followers (k)"
                      stroke="#00d4ff"
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenueK"
                      name="Revenue ($k)"
                      stroke="#5a7bff"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </article>
              <article className="panel">
                <h2>Source Registry</h2>
                <ul className="source-list">
                  {sourceLinks.map((link) => (
                    <li key={link}>
                      <a href={link} target="_blank" rel="noreferrer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </section>
          </>
        );

      case "blueprint":
        return (
          <>
            <section className="panel">
              <h2>Technical Blueprint</h2>
              <p>
                Runtime pattern: <strong>OpenClaw Orchestrator</strong> spawns
                one sub-agent per influencer, plus dedicated research,
                publishing, engagement, and analytics supervisors.
              </p>
              <div className="architecture-box">
                <p>Orchestrator → Research Queue → Content Generation</p>
                <p>Content Generation → QA Gate → Scheduled Publishing</p>
                <p>Publishing → Engagement Loop → KPI Feedback → Retraining</p>
              </div>
            </section>

            <section className="panel">
              <h2>Tools, Cost, and Signup Map</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Tool</th>
                    <th>Purpose</th>
                    <th>Cost Baseline</th>
                    <th>Signup</th>
                  </tr>
                </thead>
                <tbody>
                  {toolsStack.map((tool) => (
                    <tr key={tool.tool}>
                      <td>{tool.category}</td>
                      <td>{tool.tool}</td>
                      <td>{tool.purpose}</td>
                      <td>{tool.cost}</td>
                      <td>
                        <a href={tool.signup} target="_blank" rel="noreferrer">
                          Open
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </>
        );

      case "dashboard":
        return (
          <>
            <section className="panel controls">
              <div>
                <h2>Autonomous Swarm Dashboard (Mock Data)</h2>
                <p>
                  Every influencer is modeled as an OpenClaw sub-agent with its
                  own identity, queue, publishing schedule, and KPI profile.
                </p>
              </div>
              <label className="select-group">
                Niche Filter
                <select
                  value={nicheFilter}
                  onChange={(event) => {
                    const next = event.target.value;
                    setNicheFilter(next);
                    const first = (
                      next === "all"
                        ? agents
                        : agents.filter((agent) => agent.niche === next)
                    )[0];
                    setSelectedAgentId(first?.id ?? "");
                  }}
                >
                  {niches.map((niche) => (
                    <option key={niche} value={niche}>
                      {niche}
                    </option>
                  ))}
                </select>
              </label>
            </section>

            <section className="grid four">
              <StatCard
                label="Filtered Agents"
                value={String(filteredAgents.length)}
                detail="Live + training"
              />
              <StatCard
                label="Followers"
                value={Intl.NumberFormat("en-US").format(totalFollowers)}
                detail="Across filtered set"
              />
              <StatCard
                label="Avg Engagement"
                value={`${avgEngagement.toFixed(2)}%`}
                detail="7-day moving average"
              />
              <StatCard
                label="Monthly Revenue"
                value={`$${Intl.NumberFormat("en-US").format(
                  totalMonthlyRevenue
                )}`}
                detail="Attributed to active campaigns"
              />
            </section>

            <section className="grid two">
              <article className="panel">
                <h2>Agent Registry</h2>
                <div className="agent-list">
                  {filteredAgents.map((agent) => (
                    <button
                      type="button"
                      key={agent.id}
                      className={
                        selectedAgent?.id === agent.id
                          ? "agent-row selected"
                          : "agent-row"
                      }
                      onClick={() => setSelectedAgentId(agent.id)}
                    >
                      <div>
                        <strong>{agent.codename}</strong>
                        <p>
                          {agent.niche} · {agent.persona}
                        </p>
                      </div>
                      <span className={`pill ${agent.status}`}>
                        {agent.status}
                      </span>
                    </button>
                  ))}
                </div>
              </article>

              <article className="panel">
                <h2>Selected Agent Detail</h2>
                {selectedAgent ? (
                  <div className="agent-detail">
                    <img src={selectedAgent.avatar} alt={selectedAgent.codename} />
                    <div>
                      <h3>{selectedAgent.codename}</h3>
                      <p>{selectedAgent.persona}</p>
                      <p>
                        <strong>Region:</strong> {selectedAgent.region}
                      </p>
                      <p>
                        <strong>Channels:</strong>{" "}
                        {Object.values(selectedAgent.channels).join(" · ")}
                      </p>
                      <p>
                        <strong>KPIs:</strong> {selectedAgent.engagementRate}% ER ·{" "}
                        {selectedAgent.conversionRate}% CVR · $
                        {selectedAgent.monthlyRevenueUsd.toLocaleString()} / month
                      </p>
                    </div>
                  </div>
                ) : (
                  <p>No agent available for this filter.</p>
                )}

                {selectedAgent ? (
                  <div className="subgrid">
                    <div>
                      <h3>Weekly Tasks</h3>
                      <ul className="bullet-list">
                        {selectedAgent.weeklyTasks.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3>Posting Windows</h3>
                      <ul className="bullet-list">
                        {selectedAgent.postingWindows.map((window) => (
                          <li key={window}>{window}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </article>
            </section>

            <section className="grid two">
              <article className="panel chart-panel">
                <h2>Growth + Revenue Curve</h2>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={monthlyPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="followersK"
                      name="Followers (k)"
                      stroke="#22d3ee"
                      fill="#22d3ee33"
                    />
                    <Area
                      type="monotone"
                      dataKey="revenueK"
                      name="Revenue ($k)"
                      stroke="#818cf8"
                      fill="#818cf833"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </article>

              <article className="panel chart-panel">
                <h2>Ad Manager Budget Mix</h2>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={adBudget}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="platform" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="monthly" name="Monthly Spend ($)" fill="#6366f1" />
                  </BarChart>
                </ResponsiveContainer>
                <table className="table compact">
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>ROAS</th>
                      <th>CAC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adBudget.map((row) => (
                      <tr key={row.platform}>
                        <td>{row.platform}</td>
                        <td>{row.roas}x</td>
                        <td>${row.cac}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            </section>

            <section className="panel">
              <h2>Brand Deal Pipeline</h2>
              <div className="kanban">
                <DealColumn title="Lead" deals={dealsByStage.lead} />
                <DealColumn title="Proposal" deals={dealsByStage.proposal} />
                <DealColumn title="Active" deals={dealsByStage.active} />
                <DealColumn title="Delivered" deals={dealsByStage.delivered} />
              </div>
            </section>
          </>
        );

      case "finance":
        return (
          <>
            <section className="panel controls">
              <div>
                <h2>Financial Scenario Engine</h2>
                <p>
                  Toggle forecast scenarios to pressure-test hiring pace,
                  ad-spend appetite, and runway strategy.
                </p>
              </div>
              <label className="select-group">
                Scenario
                <select
                  value={scenario}
                  onChange={(event) =>
                    setScenario(
                      event.target.value as
                        | "conservative"
                        | "base"
                        | "aggressive"
                    )
                  }
                >
                  <option value="conservative">Conservative</option>
                  <option value="base">Base Case</option>
                  <option value="aggressive">Aggressive</option>
                </select>
              </label>
            </section>
            <section className="grid two">
              <article className="panel chart-panel">
                <h2>Revenue vs Profit by Year</h2>
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={forecastScenarios[scenario]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue (USD)" fill="#0ea5e9" />
                    <Bar dataKey="profit" name="Profit (USD)" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </article>
              <article className="panel">
                <h2>Model Notes</h2>
                <ul className="bullet-list">
                  <li>
                    Conservative scenario reflects slower creator growth and
                    lower campaign volume.
                  </li>
                  <li>
                    Base scenario aligns with validated plan assumptions from the
                    merged plan corpus.
                  </li>
                  <li>
                    Aggressive scenario assumes one viral breakout persona and
                    enterprise deal acceleration.
                  </li>
                  <li>
                    Recommended operating mode for first-time founders: track
                    against base, budget like conservative.
                  </li>
                </ul>
              </article>
            </section>
          </>
        );

      case "execution":
        return (
          <>
            <section className="panel">
              <h2>Step-by-Step Roadmap</h2>
              <div className="timeline">
                {roadmap.map((item) => (
                  <div className="timeline-item" key={item.phase}>
                    <p className="timeline-source">
                      {item.phase} · {item.window}
                    </p>
                    <h3>{item.objective}</h3>
                    <ul className="bullet-list">
                      {item.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <h2>Founder Execution Checklist</h2>
              <div className="checklist">
                {executionChecklist.map((item, index) => {
                  const key = `item-${index}`;
                  const isDone = completed[key] ?? false;
                  return (
                    <label key={key} className={isDone ? "check done" : "check"}>
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() =>
                          setCompleted((prev) => ({
                            ...prev,
                            [key]: !prev[key]
                          }))
                        }
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            </section>
          </>
        );

      case "investor":
        return (
          <>
            <section className="panel">
              <h2>Investor / Co-Founder Narrative</h2>
              <p>
                NexaPersona Labs is positioned as an infrastructure layer, not a
                single creator brand. The product is the orchestration system
                and high-converting persona portfolio, with operating leverage
                from automation.
              </p>
              <div className="grid three">
                <StatCard label="Seed Ask" value="$500k–$1M" />
                <StatCard label="Pre-Money" value="$5M target" />
                <StatCard label="12-Month Goal" value="$100k MRR" />
              </div>
            </section>

            <section className="grid two">
              <article className="panel">
                <h2>Use of Funds</h2>
                <ul className="bullet-list">
                  <li>40% product and infrastructure (agent platform hardening)</li>
                  <li>30% growth and customer acquisition engine</li>
                  <li>15% legal/compliance and policy resilience</li>
                  <li>15% operating buffer and specialist hires</li>
                </ul>
              </article>
              <article className="panel">
                <h2>Dataroom Checklist</h2>
                <ul className="bullet-list">
                  <li>3-year model with scenario tabs and assumption sheet</li>
                  <li>Compliance matrix: FTC, platform policy, disclosure SOP</li>
                  <li>Case studies from first 10 paid campaigns</li>
                  <li>Agent reliability report (uptime, task completion, safety)</li>
                </ul>
              </article>
            </section>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <p className="eyebrow">Founder OS</p>
          <h2>{company.name}</h2>
          <p className="muted">Ghost & Zoro Internal Workspace</p>
        </div>
        <nav>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={activeTab === tab.key ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">{renderTab()}</main>
    </div>
  );
}

function StatCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <article className="stat-card">
      <p className="muted">{label}</p>
      <h3>{value}</h3>
      {detail ? <p className="small">{detail}</p> : null}
    </article>
  );
}

function DealColumn({ title, deals }: { title: string; deals: Deal[] }) {
  return (
    <div className="deal-column">
      <h3>{title}</h3>
      {deals.map((deal) => (
        <article className="deal-card" key={deal.id}>
          <p className="deal-brand">{deal.brand}</p>
          <p className="small">{deal.vertical}</p>
          <p>
            <strong>${deal.valueUsd.toLocaleString()}</strong>
          </p>
          <p className="small">Owner: {deal.owner}</p>
          <p className="small">Focus: {deal.productFocus}</p>
          <p className="small">Due: {deal.dueWeek}</p>
        </article>
      ))}
      {deals.length === 0 ? <p className="small">No deals in this stage.</p> : null}
    </div>
  );
}

export default App;
