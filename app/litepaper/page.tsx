"use client";

import { useEffect, useState, useRef } from "react";

const mono = "'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace";
const sans = "var(--font-inter), system-ui, -apple-system, sans-serif";

const sections = [
  { id: "abstract", num: "00", label: "Abstract" },
  { id: "problem", num: "01", label: "The Problem" },
  { id: "solution", num: "02", label: "The Solution" },
  { id: "architecture", num: "03", label: "Architecture" },
  { id: "integration", num: "04", label: "Integration Layer" },
  { id: "tokenless", num: "05", label: "Tokenless Economics" },
  { id: "governance", num: "06", label: "Governance" },
  { id: "roadmap", num: "07", label: "Roadmap" },
  { id: "conclusion", num: "08", label: "Conclusion" },
];

export default function LitepaperPage() {
  const [activeSection, setActiveSection] = useState("abstract");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topmost.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <style>{`
        body, main { overflow-x: visible !important; }
      `}</style>
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "0 24px",
        }}
        className="litepaper-layout"
      >
        <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
        {/* ─── TOC ─── */}
        <nav
          className="litepaper-toc"
          style={{
            width: 280,
            flexShrink: 0,
            position: "sticky",
            top: 80,
            alignSelf: "flex-start",
            paddingRight: 48,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              fontWeight: 700,
              color: "#BBBBBB",
              fontFamily: mono,
              marginBottom: 28,
              textTransform: "uppercase",
              margin: "0 0 28px 0",
            }}
          >
            Contents
          </p>
          {sections.map(({ id, num, label }) => (
            <div
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={(e) => {
                if (activeSection !== id)
                  (e.currentTarget as HTMLElement).style.color = "#333";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id)
                  (e.currentTarget as HTMLElement).style.color = "#AAAAAA";
              }}
              style={{
                fontSize: 15,
                lineHeight: 2.2,
                cursor: "pointer",
                color: activeSection === id ? "#00C896" : "#AAAAAA",
                fontWeight: activeSection === id ? 600 : 400,
                borderLeft:
                  activeSection === id
                    ? "2px solid #00C896"
                    : "2px solid transparent",
                paddingLeft: 14,
                paddingTop: 2,
                paddingBottom: 2,
                transition: "all 0.2s ease",
                fontFamily: sans,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 11, color: "#CCCCCC", marginRight: 8, fontFamily: mono, flexShrink: 0 }}>{num}.</span>
              {label}
            </div>
          ))}
        </nav>

        {/* ─── Vertical Divider ─── */}
        <div style={{ width: 1, background: "rgba(0,0,0,0.06)", flexShrink: 0, alignSelf: "stretch" }} />

        {/* ─── Main Content ─── */}
        <article
          className="litepaper-content"
          style={{
            flex: 1,
            minWidth: 0,
            paddingLeft: 64,
            paddingTop: 40,
            paddingBottom: 80,
            fontFamily: sans,
            color: "#333",
            fontSize: 16,
            lineHeight: 1.9,
          }}
        >
          {/* Title */}
          <header style={{ marginBottom: 56, textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 700,
                color: "#0D0D0D",
                lineHeight: 1.1,
                marginBottom: 10,
                letterSpacing: "-0.03em",
              }}
            >
              txxt Litepaper
            </h1>
            <p
              style={{
                fontSize: 20,
                color: "#666",
                fontWeight: 400,
                marginBottom: 24,
                letterSpacing: "-0.01em",
              }}
            >
              The Agent Middleware Layer
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#999",
                fontFamily: mono,
                letterSpacing: "0.04em",
              }}
            >
              Version 0.2 &middot; March 2026 &middot; txxt Labs
            </p>
          </header>

          <SectionDivider />

          {/* ──────────── Abstract ──────────── */}
          <SectionBlock id="abstract" num="00" title="Abstract">
            <p>
              Autonomous AI agents are becoming economic actors — discovering services, negotiating
              prices, executing transactions, and delivering value without human intervention. Yet
              no standard middleware exists for agents to pay each other, verify identity, or settle
              work across chains.
            </p>
            <p>
              <strong>txxt is not a new blockchain.</strong> It is the middleware that makes any
              blockchain agent-ready. Sitting on top of Ethereum, Solana, Base, Polygon, and any
              supported chain, txxt provides three critical primitives as a unified middleware layer:{" "}
              <strong>x402</strong> for HTTP-native agent payments,{" "}
              <strong>ERC-8004</strong> for on-chain agent identity and reputation, and{" "}
              <strong>Proof of Actual Work (PoAW)</strong> for consensus grounded in verifiable
              computation. txxt is tokenless — gas fees are fixed at $0.0003 in USDC. No native
              token, no speculation, no ICO. Just infrastructure.
            </p>
            <Callout>
              txxt is not a new blockchain. It is the middleware that makes any blockchain
              agent-ready.
            </Callout>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── The Problem ──────────── */}
          <SectionBlock id="problem" num="01" title="The Problem">
            <p>
              The agent economy is growing at an extraordinary pace. Major AI labs ship autonomous
              agents that browse the web, write code, manage workflows, and interact with external
              APIs. The market for AI agents is projected to exceed{" "}
              <StatInline>$100 billion</StatInline> by 2028. But the infrastructure has not kept up.
              Three critical gaps remain:
            </p>

            <H3>1.1 No Payment Rails for Agents</H3>
            <p>
              When Agent A needs to pay Agent B for a service, there is no standard protocol.
              Credit card APIs require human KYC. Crypto payments require wallet management and
              token bridging. Most agent frameworks simply ignore payment entirely. Agents cannot
              participate in commerce without human intermediation at every transaction boundary.
            </p>

            <H3>1.2 No Verifiable Agent Identity</H3>
            <p>
              How does an agent know whether another agent is trustworthy? There is no on-chain
              identity standard for AI agents. Agents cannot present verifiable credentials, build
              portable reputation, or prove their track record. Every agent interaction starts from
              zero trust, making complex multi-agent workflows fragile and unreliable.
            </p>

            <H3>1.3 No Cross-Chain Settlement</H3>
            <p>
              Existing blockchains are designed for human users — optimized for DeFi, NFTs, and
              speculative trading. Gas fees are unpredictable. Transaction finality is slow. The UX
              assumes a human is present to approve, sign, and confirm. Agents operating across
              Ethereum, Solana, Base, and Polygon have no way to atomically settle work across
              chains. None of this works for autonomous agents executing thousands of
              microtransactions per hour.
            </p>

            <Callout>
              The agent economy has the demand. What it lacks is a middleware layer — one that
              bridges payments, identity, and settlement across every chain agents already use.
            </Callout>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── The Solution ──────────── */}
          <SectionBlock id="solution" num="02" title="The Solution: txxt Middleware">
            <p>
              txxt is not another L1. It is a <strong>middleware layer</strong> that sits between AI
              agents and the blockchains they transact on, providing three missing primitives as
              native protocol operations.
            </p>

            {/* Architecture Diagram */}
            <CodeBlock title="txxt middleware stack" noSyntax>
              <div style={{ color: "#8b949e", marginBottom: 12 }}>// txxt middleware stack</div>
              <div
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <span style={{ color: "#d2a8ff", fontWeight: 600 }}>Layer 3</span>
                {"  "}
                <span style={{ color: "#e6edf3" }}>
                  AI Agents (MCP / A2A / ACP / CLI / SDK / REST)
                </span>
              </div>
              <div
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <span style={{ color: "#7ee787", fontWeight: 600 }}>Layer 2</span>
                {"  "}
                <span style={{ color: "#e6edf3" }}>txxt Middleware</span>
                <div
                  style={{
                    paddingLeft: 20,
                    marginTop: 4,
                    fontSize: 12,
                    color: "#8b949e",
                  }}
                >
                  x402 Payment · ERC-8004 Identity · PoAW Consensus · AgentScript
                </div>
              </div>
              <div>
                <span style={{ color: "#d2a8ff", fontWeight: 600 }}>Layer 1</span>
                {"  "}
                <span style={{ color: "#e6edf3" }}>
                  ETH · SOL · Base · Polygon · Arbitrum · ...
                </span>
              </div>
            </CodeBlock>

            <p>
              Agents interact with txxt through their preferred protocol — MCP, A2A, ACP, CLI, SDK,
              or plain REST. txxt handles payment, identity, and verification, then settles on
              whichever L1 the agent or its operator has chosen. The agent never needs to know which
              chain it is settling on. The middleware abstracts it away.
            </p>

            <H3>Why Middleware, Not a Chain?</H3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                <strong>No cold-start problem.</strong> txxt inherits the security, liquidity, and
                ecosystem of existing L1s.
              </li>
              <li>
                <strong>Chain-agnostic.</strong> Agents on Ethereum, Solana, Base, or Polygon all
                use the same txxt middleware. One integration, every chain.
              </li>
              <li>
                <strong>Composable.</strong> txxt doesn&apos;t replace existing DeFi, NFT, or DAO
                infrastructure. It adds the agent layer on top.
              </li>
              <li>
                <strong>Upgradable.</strong> Middleware can evolve independently of L1 consensus.
                New agent protocols can be added without hard forks.
              </li>
            </ul>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Architecture ──────────── */}
          <SectionBlock id="architecture" num="03" title="Architecture">
            <H3>3.1 x402 Payment Layer</H3>
            <p>
              The <strong>x402 protocol</strong> extends HTTP with a native payment layer for
              agents. When an agent requests a paid resource, the server responds with HTTP status{" "}
              <Code>402 Payment Required</Code> along with payment terms. The requesting agent
              constructs a payment proof, attaches it to the next request, and the middleware
              verifies the payment before delivering the resource. No APIs. No OAuth. No human in
              the loop.
            </p>
            <p>
              txxt implements three core x402 operations as{" "}
              <strong>native middleware operations</strong>:
            </p>
            <ol style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                <strong>PaymentOffer</strong> — A server declares payment terms for a resource.
              </li>
              <li>
                <strong>PaymentProof</strong> — A client agent constructs and submits proof of
                payment referencing the offer.
              </li>
              <li>
                <strong>PaymentSettle</strong> — The middleware verifies the proof and atomically
                settles the payment on the underlying chain.
              </li>
            </ol>
            <p>
              Settlement finality is under <StatInline>400ms</StatInline>. Failed payments are
              automatically refunded. The entire flow — offer, proof, settle — happens within a
              single HTTP request-response cycle.
            </p>

            <H3>3.2 ERC-8004 Identity Layer</H3>
            <p>
              The <strong>ERC-8004 standard</strong> defines a universal identity primitive for AI
              agents. Each agent registered through txxt receives a soulbound identity token
              containing:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>A unique agent identifier (DID-compatible)</li>
              <li>Operator information (the human or organization behind the agent)</li>
              <li>Capability declarations (what the agent can do)</li>
              <li>A reputation score derived from cross-chain transaction history</li>
              <li>Service endpoints for discovery and communication</li>
            </ul>
            <p>
              Because txxt is middleware, an agent&apos;s ERC-8004 identity is{" "}
              <strong>portable across chains</strong>. An agent that builds reputation on Ethereum
              carries that same reputation when transacting on Solana or Base. Identity lookups are
              O(1) at the middleware level.
            </p>
            <p>
              Reputation is computed from three signals: transaction volume, success rate, and
              longevity.
            </p>

            <H3>3.3 Proof of Actual Work (PoAW) Consensus</H3>
            <p>
              txxt replaces traditional consensus with{" "}
              <strong>Proof of Actual Work (PoAW)</strong> — a mechanism where validators earn the
              right to participate by performing verifiable, useful computation.
            </p>

            <ComparisonTable />

            <p>
              In each epoch, the network distributes computational tasks to validator candidates:
              model inference verification, data validation, payment proof checking, and identity
              credential verification. Every unit of energy spent on consensus directly contributes
              to the network&apos;s utility.
            </p>

            <H3>3.4 AgentScript</H3>
            <p>
              <strong>AgentScript</strong> is a domain-specific language for programming agent
              behaviors on txxt. While Solidity and Move optimize for DeFi and token operations,
              AgentScript is optimized for the primitives that matter in agent commerce.
            </p>

            <CodeBlock title="AgentScript">
              <div style={{ color: "#8b949e" }}>
                // AgentScript: paid API endpoint on any chain
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: "#d2a8ff" }}>agent</span>{" "}
                <span style={{ color: "#e6edf3", fontWeight: 600 }}>DataProvider</span>{" "}
                {"{"}
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#d2a8ff" }}>identity</span>
                <span style={{ color: "#8b949e" }}>:</span>{" "}
                <span style={{ color: "#e6edf3" }}>
                  ERC8004(reputation {">"} = 0.8)
                </span>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#d2a8ff" }}>settle</span>
                <span style={{ color: "#8b949e" }}>:</span>{" "}
                <span style={{ color: "#7ee787" }}>
                  [&quot;base&quot;, &quot;ethereum&quot;, &quot;polygon&quot;]
                </span>
              </div>
              <div style={{ paddingLeft: 20, marginTop: 12 }}>
                <span style={{ color: "#d2a8ff" }}>endpoint</span>{" "}
                <span style={{ color: "#e6edf3" }}>/api/market-data</span> {"{"}
              </div>
              <div style={{ paddingLeft: 40 }}>
                <span style={{ color: "#ff7b72" }}>require</span>{" "}
                <span style={{ color: "#e6edf3" }}>
                  x402.payment(amount: 0.001, currency: &quot;USDC&quot;)
                </span>
              </div>
              <div style={{ paddingLeft: 40 }}>
                <span style={{ color: "#ff7b72" }}>require</span>{" "}
                <span style={{ color: "#e6edf3" }}>
                  caller.reputation {">"} = 0.5
                </span>
              </div>
              <div style={{ paddingLeft: 40, marginTop: 8 }}>
                <span style={{ color: "#d2a8ff" }}>return</span>{" "}
                <span style={{ color: "#e6edf3" }}>fetch_market_data(caller.params)</span>
              </div>
              <div style={{ paddingLeft: 20 }}>{"}"}</div>
              <div>{"}"}</div>
            </CodeBlock>

            <p>Key features:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                <strong>Payment primitives</strong> — x402 payment requirements are first-class
                language constructs.
              </li>
              <li>
                <strong>Identity-aware</strong> — Reputation and identity checks are built into
                the type system.
              </li>
              <li>
                <strong>Chain-agnostic settlement</strong> — The <Code>settle</Code> directive
                specifies which L1s the agent accepts.
              </li>
              <li>
                <strong>Human-readable</strong> — Designed for AI agents that generate code.
                Minimal syntax reduces LLM errors.
              </li>
            </ul>

            <H3>3.5 Multi-Chain Adapters</H3>
            <p>
              txxt connects to underlying blockchains through a standardized adapter interface.
              Each adapter handles chain-specific operations while exposing a unified API to the
              middleware layer.
            </p>

            <ChainTable />

            <p>
              New chains are added by implementing the adapter interface. Agents never interact
              with chain-specific APIs directly.
            </p>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Integration Layer ──────────── */}
          <SectionBlock id="integration" num="04" title="Integration Layer">
            <p>
              txxt meets agents where they are. The integration layer provides native support for
              every major agent communication protocol:
            </p>

            <ProtocolTable />

            <p>
              Any agent — regardless of framework (LangChain, CrewAI, AutoGen, OpenAI Agents SDK,
              custom) — can interact with txxt through the protocol it already speaks. If your
              agent can make HTTP requests, it can use txxt.
            </p>

            <CodeBlock title="@txxt/sdk">
              <div style={{ color: "#8b949e" }}>
                // @txxt/sdk — 3 lines to pay an agent
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: "#d2a8ff" }}>import</span>{" "}
                <span style={{ color: "#e6edf3" }}>{"{"} txxt {"}"}</span>{" "}
                <span style={{ color: "#d2a8ff" }}>from</span>{" "}
                <span style={{ color: "#7ee787" }}>&quot;@txxt/sdk&quot;</span>;
              </div>
              <div style={{ marginTop: 12 }}>
                <span style={{ color: "#d2a8ff" }}>const</span>{" "}
                <span style={{ color: "#e6edf3" }}>result</span>{" "}
                <span style={{ color: "#8b949e" }}>=</span>{" "}
                <span style={{ color: "#d2a8ff" }}>await</span>{" "}
                <span style={{ color: "#e6edf3" }}>txxt.pay({"{"}</span>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#e6edf3" }}>to:</span>{" "}
                <span style={{ color: "#7ee787" }}>
                  &quot;agent:data-provider.eth&quot;
                </span>
                ,
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#e6edf3" }}>amount:</span>{" "}
                <span style={{ color: "#79c0ff" }}>0.001</span>,
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#e6edf3" }}>chain:</span>{" "}
                <span style={{ color: "#7ee787" }}>&quot;base&quot;</span>,
              </div>
              <div>
                <span style={{ color: "#e6edf3" }}>{"}"});</span>
              </div>
            </CodeBlock>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Tokenless Economics ──────────── */}
          <SectionBlock id="tokenless" num="05" title="Tokenless Economics">
            <H3>5.1 Why No Token?</H3>
            <p>
              Most blockchain protocols launch with a native token. The token serves as gas payment,
              staking collateral, and governance weight — but also as a speculative asset. When a
              chain has a native token, development priorities shift toward &ldquo;number go
              up&rdquo; narratives. This dynamic is incompatible with infrastructure.
            </p>
            <p>
              txxt takes a different approach. <strong>There is no native token.</strong>
            </p>

            {/* Stats highlight */}
            <div
              style={{
                display: "flex",
                gap: 40,
                margin: "32px 0",
                flexWrap: "wrap",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#00C896",
                    fontFamily: mono,
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  $0.0003
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#666",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  per transaction, always
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#00C896",
                    fontFamily: mono,
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  0%
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#666",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  inflation — no block rewards
                </span>
              </div>
            </div>

            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                <strong>Gas is paid in USDC</strong> at a fixed rate of $0.0003 per transaction,
                adjusted quarterly by governance.
              </li>
              <li>
                <strong>Validators are compensated in USDC</strong> from transaction fees. No
                block reward inflation.
              </li>
              <li>
                <strong>Governance is reputation-weighted</strong>, not token-weighted. Voting
                power comes from verified contribution.
              </li>
            </ul>

            <H3>5.2 Fee Distribution</H3>
            <p>
              The economic model is simple: agents pay $0.0003 per transaction. This fee is split:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                <strong>70%</strong> — PoAW validators
              </li>
              <li>
                <strong>20%</strong> — Protocol treasury
              </li>
              <li>
                <strong>10%</strong> — Identity verifiers
              </li>
            </ul>
            <p>
              At 1M transactions/day, validators earn ~$76,650/year. At 100M transactions/day —
              a reasonable target for a mature agent economy — validators earn ~$7.665M/year. The
              economics scale linearly with usage, not with speculation.
            </p>

            <Callout>
              No token volatility. No speculation. Just infrastructure.
              <br />
              <br />
              The internet doesn&apos;t have a token. SMTP doesn&apos;t have a token. HTTP
              doesn&apos;t have a token. The best infrastructure is invisible. txxt follows this
              principle.
            </Callout>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Governance ──────────── */}
          <SectionBlock id="governance" num="06" title="Governance">
            <p>
              txxt governance is <strong>reputation-based</strong>. There is no token-weighted
              voting. Governance power is derived from <strong>Proof of Actual Work</strong>.
            </p>

            <H3>6.1 Participants</H3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                <strong>PoAW Validators</strong> — Entities that run validator nodes and perform
                useful computation. Highest governance weight.
              </li>
              <li>
                <strong>Registered Agents</strong> — AI agents with ERC-8004 identities and a
                minimum reputation score.
              </li>
              <li>
                <strong>Operators</strong> — Humans or organizations that register and maintain
                agents.
              </li>
            </ul>

            <H3>6.2 Scope</H3>
            <p>Governance controls the following middleware parameters:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>Transaction fee rate (currently $0.0003)</li>
              <li>Fee distribution ratio (currently 70/20/10)</li>
              <li>Minimum reputation thresholds</li>
              <li>PoAW task difficulty and epoch length</li>
              <li>New chain adapter activation</li>
              <li>Middleware upgrade process</li>
            </ul>

            <H3>6.3 Process</H3>
            <p>
              All governance proposals have a 7-day discussion period, followed by a 3-day voting
              period. Changes are enacted automatically via on-chain execution. Because txxt is
              middleware, upgrades do not require hard forks on the underlying L1s.
            </p>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Roadmap ──────────── */}
          <SectionBlock id="roadmap" num="07" title="Roadmap">
            <div style={{ margin: "32px 0" }}>
              <RoadmapItem
                date="Q1 2026"
                title="Foundation"
                items={[
                  "Middleware protocol specification finalized",
                  "x402 native operations implementation",
                  "ERC-8004 Identity Layer design and prototype",
                  "AgentScript language specification v0.1",
                  "Ethereum + Base adapter prototypes",
                ]}
              />
              <RoadmapItem
                date="Q2 2026"
                title="Testnet"
                items={[
                  "Public testnet with PoAW consensus",
                  "TypeScript and Python SDK (@txxt/sdk) release",
                  "MCP tool server for testnet access",
                  "Polygon adapter live",
                  "Solana adapter beta",
                  "Identity registration and reputation system live",
                ]}
              />
              <RoadmapItem
                date="Q3 2026"
                title="Integration"
                items={[
                  "A2A protocol integration for cross-chain agent discovery",
                  "ACP commerce flow implementation",
                  "Arbitrum adapter live",
                  "CLI and REST API production-ready",
                  "Rust SDK release",
                  "Security audit by independent firms",
                ]}
              />
              <RoadmapItem
                date="Q4 2026"
                title="Mainnet"
                items={[
                  "Mainnet launch — ETH, Base, Polygon, Solana, Arbitrum",
                  "Full x402 + ERC-8004 cross-chain support",
                  "AgentScript v1.0 deployment",
                  "PoAW validator onboarding program",
                  "USDC settlement live on all supported chains",
                ]}
              />
              <RoadmapItem
                date="2027"
                title="Scale"
                items={[
                  "Additional chain adapters (Avalanche, Optimism, Sui, Aptos)",
                  "Cross-chain identity portability — full Merkle proof system",
                  "AgentScript marketplace for reusable agent modules",
                  "Enterprise validator program",
                  "Governance system activation",
                  "Target: 10M+ daily agent transactions across 10+ chains",
                ]}
                last
              />
            </div>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Conclusion ──────────── */}
          <SectionBlock id="conclusion" num="08" title="Conclusion">
            <p>
              The internet was built on simple, open protocols. HTTP for communication. SMTP for
              email. DNS for naming. These protocols succeeded not because they were the most
              sophisticated, but because they were the most useful — invisible infrastructure that
              just worked.
            </p>
            <p>
              The agent economy needs its own infrastructure layer. Not another L1 chain. Not
              another token launch. Not another general-purpose smart contract platform. The agent
              economy needs <strong>middleware</strong> — a layer where agents pay each other
              (x402), prove who they are (ERC-8004), and build reputation through actual work
              (PoAW), on any chain they already use.
            </p>
            <p>
              txxt is that middleware. Tokenless. Fixed-cost. Agent-native. Chain-agnostic.
              Purpose-built.
            </p>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0D0D0D",
                textAlign: "center",
                margin: "56px 0 24px",
                lineHeight: 1.6,
                letterSpacing: "-0.02em",
              }}
            >
              The internet runs on txt.
              <br />
              The agent economy runs on{" "}
              <span style={{ color: "#00C896" }}>txxt</span>.
            </div>
          </SectionBlock>

          {/* Footer */}
          <div
            style={{
              marginTop: 80,
              paddingTop: 32,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              textAlign: "center",
              color: "#999",
              fontSize: 13,
              fontFamily: mono,
            }}
          >
            <p style={{ margin: 0 }}>txxt Litepaper v0.2 · March 2026</p>
            <p style={{ marginTop: 8 }}>
              <a
                href="https://txxt.xyz"
                style={{ color: "#00C896", textDecoration: "none" }}
              >
                txxt.xyz
              </a>
            </p>
          </div>
        </article>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .litepaper-toc::-webkit-scrollbar { display: none; }
        @media (max-width: 1024px) {
          .litepaper-toc { display: none !important; }
          .litepaper-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .litepaper-content {
            padding-left: 20px !important;
            padding-right: 20px !important;
            font-size: 15px !important;
            line-height: 2 !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Shared Components ─── */

function SectionBlock({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ scrollMarginTop: 100 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          marginBottom: 20,
          marginTop: 56,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontFamily: mono,
            color: "#00C896",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          {num}
        </span>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 700,
            color: "#0D0D0D",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 20,
        fontWeight: 600,
        color: "#0D0D0D",
        marginTop: 32,
        marginBottom: 4,
        lineHeight: 1.4,
      }}
    >
      {children}
    </h3>
  );
}

function SectionDivider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        margin: "56px 0",
      }}
    />
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        background: "#F4F4F4",
        padding: "2px 7px",
        borderRadius: 4,
        fontSize: 14,
        fontFamily: mono,
        color: "#0D0D0D",
      }}
    >
      {children}
    </code>
  );
}

function StatInline({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontWeight: 700, color: "#00C896" }}>{children}</span>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderLeft: "3px solid #00C896",
        background: "rgba(0,200,150,0.03)",
        borderRadius: "0 8px 8px 0",
        padding: "16px 20px",
        margin: "32px 0",
      }}
    >
      <div
        style={{
          fontSize: 16,
          fontStyle: "italic",
          color: "#333",
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function CodeBlock({
  title,
  children,
  noSyntax = false,
}: {
  title: string;
  children: React.ReactNode;
  noSyntax?: boolean;
}) {
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", margin: "24px 0" }}>
      <div
        style={{
          background: "#1a1a2e",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div
            key={c}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            fontFamily: mono,
            marginLeft: 8,
          }}
        >
          {title}
        </span>
      </div>
      <div
        style={{
          margin: 0,
          padding: 20,
          background: "#0d1117",
          fontFamily: mono,
          fontSize: 13,
          lineHeight: 1.8,
          color: "#e6edf3",
          overflowX: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    ["Work type", "Hash puzzles", "Capital lockup", "Useful computation"],
    ["Energy waste", "Massive", "Minimal", "Zero — work is the product"],
    ["Barrier", "Hardware cost", "Capital cost", "Skill + compute"],
    ["Sybil resistance", "Hash rate", "Stake amount", "Verified task completion"],
    ["Value creation", "None (puzzles)", "None (staking)", "Real work for agents"],
  ];

  return (
    <div style={{ overflowX: "auto", margin: "24px 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr style={{ background: "#F8F8F8" }}>
            {["Property", "PoW", "PoS", "PoAW"].map((h, i) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: i === 3 ? "#00C896" : "#0D0D0D",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([prop, pow, pos, poaw], i) => (
            <tr
              key={i}
              style={{
                borderBottom: "1px solid #F0F0F0",
                background:
                  i === rows.length - 1
                    ? "rgba(0,200,150,0.04)"
                    : "transparent",
              }}
            >
              <td
                style={{
                  padding: "12px 14px",
                  fontWeight: 600,
                  color: "#0D0D0D",
                }}
              >
                {prop}
              </td>
              <td style={{ padding: "12px 14px", color: "#777" }}>{pow}</td>
              <td style={{ padding: "12px 14px", color: "#777" }}>{pos}</td>
              <td
                style={{
                  padding: "12px 14px",
                  color: "#00C896",
                  fontWeight: 500,
                }}
              >
                {poaw}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChainTable() {
  const chains = [
    ["Ethereum", "Launch", "Native USDC"],
    ["Base", "Launch", "Native USDC"],
    ["Polygon", "Launch", "Native USDC"],
    ["Solana", "Q2 2026", "SPL USDC"],
    ["Arbitrum", "Q3 2026", "Native USDC"],
  ];

  return (
    <div style={{ overflowX: "auto", margin: "24px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#F8F8F8" }}>
            {["Chain", "Status", "Settlement"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: "#0D0D0D",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {chains.map(([chain, status, settlement], i) => (
            <tr key={i} style={{ borderBottom: "1px solid #F0F0F0" }}>
              <td
                style={{
                  padding: "12px 14px",
                  fontWeight: 600,
                  color: "#0D0D0D",
                }}
              >
                {chain}
              </td>
              <td
                style={{
                  padding: "12px 14px",
                  color: status === "Launch" ? "#00C896" : "#555",
                  fontWeight: status === "Launch" ? 600 : 400,
                }}
              >
                {status}
              </td>
              <td style={{ padding: "12px 14px", color: "#555" }}>
                {settlement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProtocolTable() {
  const protocols = [
    ["MCP", "Model Context Protocol", "Native tool server — agents access txxt via MCP tools"],
    ["A2A", "Agent-to-Agent Protocol", "Built-in agent discovery, task delegation, and x402 settlement"],
    ["ACP", "Agent Commerce Protocol", "x402 + ERC-8004 combined commerce flow"],
    ["CLI", "Command Line Interface", "Full-featured txxt CLI for scripting and automation"],
    ["SDK", "@txxt/sdk", "TypeScript, Python, Rust SDKs with ergonomic APIs"],
    ["REST", "HTTP API", "Standard REST endpoints for all middleware operations"],
  ];

  return (
    <div style={{ overflowX: "auto", margin: "24px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#F8F8F8" }}>
            {["Protocol", "Purpose", "txxt Support"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: "#0D0D0D",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {protocols.map(([protocol, purpose, support], i) => (
            <tr key={i} style={{ borderBottom: "1px solid #F0F0F0" }}>
              <td
                style={{
                  padding: "12px 14px",
                  fontWeight: 600,
                  color: "#0D0D0D",
                }}
              >
                <Code>{protocol}</Code>
              </td>
              <td style={{ padding: "12px 14px", color: "#555" }}>{purpose}</td>
              <td style={{ padding: "12px 14px", color: "#555" }}>{support}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RoadmapItem({
  date,
  title,
  items,
  last = false,
}: {
  date: string;
  title: string;
  items: string[];
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        marginBottom: last ? 0 : 36,
      }}
    >
      {/* Timeline line + node */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 20,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#00C896",
            flexShrink: 0,
            marginTop: 5,
            boxShadow: "0 0 0 4px rgba(0,200,150,0.12)",
          }}
        />
        {!last && (
          <div
            style={{
              width: 2,
              flexGrow: 1,
              background: "rgba(0,200,150,0.2)",
              marginTop: 4,
            }}
          />
        )}
      </div>
      {/* Content */}
      <div style={{ paddingBottom: last ? 0 : 4 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#00C896",
            fontFamily: mono,
            letterSpacing: "0.05em",
            marginBottom: 2,
          }}
        >
          {date}
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#0D0D0D",
            marginBottom: 8,
          }}
        >
          {title}
        </div>
        <ul
          style={{
            paddingLeft: 18,
            color: "#555",
            fontSize: 14,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
