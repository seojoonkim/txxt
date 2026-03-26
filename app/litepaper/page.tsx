"use client";

import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "The Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "integration", label: "Integration Layer" },
  { id: "tokenless", label: "Tokenless Economics" },
  { id: "governance", label: "Governance" },
  { id: "roadmap", label: "Roadmap" },
  { id: "conclusion", label: "Conclusion" },
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      {/* TOC - Left sidebar */}
      <nav
        style={{
          position: "fixed",
          left: 0,
          top: 100,
          width: 220,
          padding: "20px 0 20px 24px",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        className="litepaper-toc"
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#999",
            marginBottom: 12,
            paddingLeft: 12,
          }}
        >
          Contents
        </div>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              display: "block",
              textAlign: "left",
              fontSize: 13,
              padding: "6px 12px",
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              background: activeSection === id ? "rgba(0,200,150,0.08)" : "transparent",
              color: activeSection === id ? "#00C896" : "#888",
              fontWeight: activeSection === id ? 600 : 400,
              transition: "all 0.2s",
              borderLeft: activeSection === id ? "2px solid #00C896" : "2px solid transparent",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "60px 24px 120px",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          color: "#333",
          fontSize: 16,
          lineHeight: 1.9,
        }}
      >
        {/* Title */}
        <header style={{ marginBottom: 48, textAlign: "center" }}>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#0D0D0D",
              lineHeight: 1.2,
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            txxt Litepaper
          </h1>
          <p style={{ fontSize: 20, color: "#666", fontWeight: 400, marginBottom: 24 }}>
            The Agent Middleware Layer
          </p>
          <p style={{ fontSize: 13, color: "#999" }}>
            Version 0.2 &middot; March 2026 &middot; txxt Labs
          </p>
        </header>

        <Divider />

        {/* ──────────── Abstract ──────────── */}
        <Section id="abstract" title="Abstract">
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
        </Section>

        <Divider />

        {/* ──────────── The Problem ──────────── */}
        <Section id="problem" title="1. The Problem">
          <p>
            The agent economy is growing at an extraordinary pace. Major AI labs ship autonomous
            agents that browse the web, write code, manage workflows, and interact with external
            APIs. The market for AI agents is projected to exceed $100 billion by 2028. But the
            infrastructure has not kept up. Three critical gaps remain:
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
        </Section>

        <Divider />

        {/* ──────────── The Solution ──────────── */}
        <Section id="solution" title="2. The Solution: txxt Middleware">
          <p>
            txxt is not another L1. It is a <strong>middleware layer</strong> that sits between AI
            agents and the blockchains they transact on, providing three missing primitives as
            native protocol operations.
          </p>

          {/* Architecture Diagram */}
          <div
            style={{
              background: "#F8F8F8",
              borderRadius: 8,
              padding: "24px 28px",
              margin: "24px 0",
              fontFamily: "var(--font-fira), monospace",
              fontSize: 13,
              lineHeight: 1.7,
              color: "#333",
              border: "1px solid #E8E8E8",
              overflowX: "auto",
            }}
          >
            <div style={{ color: "#999", marginBottom: 12 }}>// txxt middleware stack</div>
            <div style={{ borderBottom: "1px solid #DDD", paddingBottom: 10, marginBottom: 10 }}>
              <span style={{ color: "#7C3AED", fontWeight: 600 }}>Layer 3</span>
              {"  "}AI Agents (MCP / A2A / ACP / CLI / SDK / REST)
            </div>
            <div style={{ borderBottom: "1px solid #DDD", paddingBottom: 10, marginBottom: 10 }}>
              <span style={{ color: "#00C896", fontWeight: 600 }}>Layer 2</span>
              {"  "}txxt Middleware
              <div style={{ paddingLeft: 20, marginTop: 4, fontSize: 12, color: "#555" }}>
                x402 Payment &middot; ERC-8004 Identity &middot; PoAW Consensus &middot; AgentScript
              </div>
            </div>
            <div>
              <span style={{ color: "#7C3AED", fontWeight: 600 }}>Layer 1</span>
              {"  "}ETH &middot; SOL &middot; Base &middot; Polygon &middot; Arbitrum &middot; ...
            </div>
          </div>

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
              ecosystem of existing L1s. No need to bootstrap a new validator set or bridge assets
              from scratch.
            </li>
            <li>
              <strong>Chain-agnostic.</strong> Agents on Ethereum, Solana, Base, or Polygon all
              use the same txxt middleware. One integration, every chain.
            </li>
            <li>
              <strong>Composable.</strong> txxt doesn't replace existing DeFi, NFT, or DAO
              infrastructure. It adds the agent layer on top.
            </li>
            <li>
              <strong>Upgradable.</strong> Middleware can evolve independently of L1 consensus.
              New agent protocols can be added without hard forks on the base layer.
            </li>
          </ul>
        </Section>

        <Divider />

        {/* ──────────── Architecture ──────────── */}
        <Section id="architecture" title="3. Architecture">
          <H3>3.1 x402 Payment Layer</H3>
          <p>
            The <strong>x402 protocol</strong> extends HTTP with a native payment layer for
            agents. When an agent requests a paid resource, the server responds with HTTP status{" "}
            <Code>402 Payment Required</Code> along with payment terms (amount, currency,
            recipient). The requesting agent constructs a payment proof, attaches it to the next
            request, and the middleware verifies the payment before delivering the resource.
            No APIs. No OAuth. No human in the loop.
          </p>
          <p>
            txxt implements three core x402 operations as <strong>native middleware
            operations</strong>:
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
              settles the payment on the underlying chain, updating both agent balances and
              reputation scores.
            </li>
          </ol>
          <p>
            Settlement finality is under 400ms. Failed payments are automatically refunded. The
            entire flow — offer, proof, settle — happens within a single HTTP request-response
            cycle from the agent's perspective, regardless of which L1 the settlement lands on.
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
            Because txxt is middleware, an agent's ERC-8004 identity is{" "}
            <strong>portable across chains</strong>. An agent that builds reputation on Ethereum
            carries that same reputation when transacting on Solana or Base. Identity lookups are
            O(1) at the middleware level, enabling agents to verify each other's credentials in
            milliseconds.
          </p>
          <p>
            Reputation is computed from three signals: transaction volume (how much work the agent
            has settled), success rate (what percentage of transactions completed without
            disputes), and longevity (how long the agent has been active).
          </p>

          <H3>3.3 Proof of Actual Work (PoAW) Consensus</H3>
          <p>
            txxt replaces traditional consensus with{" "}
            <strong>Proof of Actual Work (PoAW)</strong> — a mechanism where validators earn the
            right to participate by performing verifiable, useful computation for the network.
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", margin: "24px 0", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E5E5" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>Property</th>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>PoW</th>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>PoS</th>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#00C896" }}>PoAW</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["Work type", "Hash puzzles", "Capital lockup", "Useful computation"],
                ["Energy waste", "Massive", "Minimal", "Zero — work is the product"],
                ["Barrier", "Hardware cost", "Capital cost", "Skill + compute"],
                ["Sybil resistance", "Hash rate", "Stake amount", "Verified task completion"],
                ["Value creation", "None (puzzles)", "None (staking)", "Real work for agents"],
              ] as const).map(([prop, pow, pos, poaw], i) => (
                <tr key={i} style={{ borderBottom: "1px solid #F0F0F0" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 500 }}>{prop}</td>
                  <td style={{ padding: "10px 12px", color: "#555" }}>{pow}</td>
                  <td style={{ padding: "10px 12px", color: "#555" }}>{pos}</td>
                  <td style={{ padding: "10px 12px", color: "#00C896", fontWeight: 500 }}>{poaw}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            In each epoch, the network distributes computational tasks to validator candidates:
            model inference verification, data validation, payment proof checking, and identity
            credential verification. Validators that complete tasks correctly and within the time
            bound are eligible for the next block production round. Every unit of energy spent on
            consensus directly contributes to the network's utility.
          </p>

          <H3>3.4 AgentScript</H3>
          <p>
            <strong>AgentScript</strong> is a domain-specific language for programming agent
            behaviors on txxt. While Solidity and Move optimize for DeFi and token operations,
            AgentScript is optimized for the primitives that matter in agent commerce:{" "}
            <em>payments, identity checks, task delegation, and conditional workflows</em>.
          </p>

          <div
            style={{
              background: "#F8F8F8",
              borderRadius: 8,
              padding: "20px 24px",
              margin: "24px 0",
              fontFamily: "var(--font-fira), monospace",
              fontSize: 13,
              lineHeight: 1.8,
              color: "#333",
              border: "1px solid #E8E8E8",
              overflowX: "auto",
            }}
          >
            <div style={{ color: "#999", marginBottom: 8 }}>// AgentScript: paid API endpoint on any chain</div>
            <div>
              <span style={{ color: "#7C3AED" }}>agent</span>{" "}
              <span style={{ color: "#0D0D0D", fontWeight: 600 }}>DataProvider</span> {"{"}
            </div>
            <div style={{ paddingLeft: 20 }}>
              <span style={{ color: "#7C3AED" }}>identity</span>: ERC8004(reputation {">"}= 0.8)
            </div>
            <div style={{ paddingLeft: 20 }}>
              <span style={{ color: "#7C3AED" }}>settle</span>: [&quot;base&quot;, &quot;ethereum&quot;, &quot;polygon&quot;]
            </div>
            <div style={{ paddingLeft: 20, marginTop: 8 }}>
              <span style={{ color: "#7C3AED" }}>endpoint</span> /api/market-data {"{"}
            </div>
            <div style={{ paddingLeft: 40 }}>
              <span style={{ color: "#7C3AED" }}>require</span> x402.payment(amount: 0.001, currency: &quot;USDC&quot;)
            </div>
            <div style={{ paddingLeft: 40 }}>
              <span style={{ color: "#7C3AED" }}>require</span> caller.reputation {">"}= 0.5
            </div>
            <div style={{ paddingLeft: 40, marginTop: 8 }}>
              <span style={{ color: "#7C3AED" }}>return</span> fetch_market_data(caller.params)
            </div>
            <div style={{ paddingLeft: 20 }}>{"}"}</div>
            <div>{"}"}</div>
          </div>

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
              specifies which L1s the agent accepts for settlement.
            </li>
            <li>
              <strong>Human-readable</strong> — Designed for AI agents that generate code.
              Minimal, unambiguous syntax reduces LLM generation errors.
            </li>
          </ul>

          <H3>3.5 Multi-Chain Adapters</H3>
          <p>
            txxt connects to underlying blockchains through a standardized adapter interface.
            Each adapter handles chain-specific operations — transaction submission, finality
            confirmation, USDC balance management, and Merkle proof generation — while exposing
            a unified API to the middleware layer.
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", margin: "24px 0", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E5E5" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>Chain</th>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>Status</th>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>Settlement</th>
              </tr>
            </thead>
            <tbody>
              {([
                ["Ethereum", "Launch", "Native USDC"],
                ["Base", "Launch", "Native USDC"],
                ["Polygon", "Launch", "Native USDC"],
                ["Solana", "Q2 2026", "SPL USDC"],
                ["Arbitrum", "Q3 2026", "Native USDC"],
              ] as const).map(([chain, status, settlement], i) => (
                <tr key={i} style={{ borderBottom: "1px solid #F0F0F0" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 500 }}>{chain}</td>
                  <td style={{ padding: "10px 12px", color: status === "Launch" ? "#00C896" : "#555" }}>
                    {status}
                  </td>
                  <td style={{ padding: "10px 12px", color: "#555" }}>{settlement}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            New chains are added by implementing the adapter interface. The middleware layer
            handles routing, so agents never interact with chain-specific APIs directly.
          </p>
        </Section>

        <Divider />

        {/* ──────────── Integration Layer ──────────── */}
        <Section id="integration" title="4. Integration Layer">
          <p>
            txxt meets agents where they are. The integration layer provides native support for
            every major agent communication protocol — no txxt-specific SDK required:
          </p>

          <table style={{ width: "100%", borderCollapse: "collapse", margin: "24px 0", fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #E5E5E5" }}>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>Protocol</th>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>Purpose</th>
                <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 600, color: "#0D0D0D" }}>txxt Support</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["MCP", "Model Context Protocol", "Native tool server — agents access txxt via MCP tools"],
                ["A2A", "Agent-to-Agent Protocol", "Built-in agent discovery, task delegation, and x402 settlement"],
                ["ACP", "Agent Commerce Protocol", "x402 + ERC-8004 combined commerce flow"],
                ["CLI", "Command Line Interface", "Full-featured txxt CLI for scripting and automation"],
                ["SDK", "@txxt/sdk", "TypeScript, Python, Rust SDKs with ergonomic APIs"],
                ["REST", "HTTP API", "Standard REST endpoints for all middleware operations"],
              ].map(([protocol, purpose, support], i) => (
                <tr key={i} style={{ borderBottom: "1px solid #F0F0F0" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 500 }}>
                    <Code>{protocol}</Code>
                  </td>
                  <td style={{ padding: "10px 12px", color: "#555" }}>{purpose}</td>
                  <td style={{ padding: "10px 12px", color: "#555" }}>{support}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>
            Any agent — regardless of framework (LangChain, CrewAI, AutoGen, OpenAI Agents SDK,
            custom) — can interact with txxt through the protocol it already speaks. If your
            agent can make HTTP requests, it can use txxt.
          </p>

          <div
            style={{
              background: "#F8F8F8",
              borderRadius: 8,
              padding: "20px 24px",
              margin: "24px 0",
              fontFamily: "var(--font-fira), monospace",
              fontSize: 13,
              lineHeight: 1.8,
              color: "#333",
              border: "1px solid #E8E8E8",
              overflowX: "auto",
            }}
          >
            <div style={{ color: "#999", marginBottom: 8 }}>// @txxt/sdk — 3 lines to pay an agent</div>
            <div>
              <span style={{ color: "#7C3AED" }}>import</span> {"{"} txxt {"}"}{" "}
              <span style={{ color: "#7C3AED" }}>from</span>{" "}
              <span style={{ color: "#00C896" }}>&quot;@txxt/sdk&quot;</span>;
            </div>
            <div style={{ marginTop: 8 }}>
              <span style={{ color: "#7C3AED" }}>const</span> result ={" "}
              <span style={{ color: "#7C3AED" }}>await</span> txxt.pay({"{"}
            </div>
            <div style={{ paddingLeft: 20 }}>
              to: <span style={{ color: "#00C896" }}>&quot;agent:data-provider.eth&quot;</span>,
            </div>
            <div style={{ paddingLeft: 20 }}>
              amount: <span style={{ color: "#00C896" }}>0.001</span>,
            </div>
            <div style={{ paddingLeft: 20 }}>
              chain: <span style={{ color: "#00C896" }}>&quot;base&quot;</span>,
            </div>
            <div>{"}"});</div>
          </div>
        </Section>

        <Divider />

        {/* ──────────── Tokenless Economics ──────────── */}
        <Section id="tokenless" title="5. Tokenless Economics">
          <H3>5.1 Why No Token?</H3>
          <p>
            Most blockchain protocols launch with a native token. The token serves as gas payment,
            staking collateral, and governance weight — but also as a speculative asset. When a
            chain has a native token, the success of the token becomes conflated with the success
            of the network. Development priorities shift toward &ldquo;number go up&rdquo;
            narratives. The community optimizes for token price, not utility. This dynamic is
            incompatible with infrastructure.
          </p>
          <p>
            txxt takes a different approach. <strong>There is no native token.</strong>
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>Gas is paid in USDC</strong> at a fixed rate of $0.0003 per transaction.
              This rate is set by governance and adjusted quarterly based on operating costs.
            </li>
            <li>
              <strong>Validators are compensated in USDC</strong> from transaction fees. There is
              no block reward inflation.
            </li>
            <li>
              <strong>Governance is reputation-weighted</strong>, not token-weighted. Voting power
              comes from verified contribution to the network, not from capital.
            </li>
          </ul>

          <H3>5.2 Fee Distribution</H3>
          <p>
            The economic model is simple: agents pay $0.0003 per transaction. This fee is split:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li><strong>70%</strong> — PoAW validators</li>
            <li><strong>20%</strong> — Protocol treasury</li>
            <li><strong>10%</strong> — Identity verifiers</li>
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
            The internet doesn't have a token. SMTP doesn't have a token. HTTP doesn't have a
            token. The best infrastructure is invisible. txxt follows this principle.
          </Callout>
        </Section>

        <Divider />

        {/* ──────────── Governance ──────────── */}
        <Section id="governance" title="6. Governance">
          <p>
            txxt governance is <strong>reputation-based</strong>. There is no token-weighted
            voting. Governance power is derived from <strong>Proof of Actual Work</strong> — the
            same mechanism that secures consensus.
          </p>

          <H3>6.1 Participants</H3>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>PoAW Validators</strong> — Entities that run validator nodes and perform
              useful computation. Highest governance weight.
            </li>
            <li>
              <strong>Registered Agents</strong> — AI agents with ERC-8004 identities and a
              minimum reputation score. Can vote on protocol parameters.
            </li>
            <li>
              <strong>Operators</strong> — Humans or organizations that register and maintain
              agents. Can propose governance changes.
            </li>
          </ul>

          <H3>6.2 Scope</H3>
          <p>Governance controls the following middleware parameters:</p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>Transaction fee rate (currently $0.0003)</li>
            <li>Fee distribution ratio (currently 70/20/10)</li>
            <li>Minimum reputation thresholds for agent capabilities</li>
            <li>PoAW task difficulty and epoch length</li>
            <li>New chain adapter activation</li>
            <li>Middleware upgrade process</li>
          </ul>

          <H3>6.3 Process</H3>
          <p>
            All governance proposals have a 7-day discussion period, followed by a 3-day voting
            period. Changes are enacted automatically via on-chain execution after a successful
            vote. Because txxt is middleware, governance upgrades do not require hard forks on
            the underlying L1s — they are applied at the middleware layer and propagated to
            chain adapters.
          </p>
        </Section>

        <Divider />

        {/* ──────────── Roadmap ──────────── */}
        <Section id="roadmap" title="7. Roadmap">
          <div style={{ margin: "24px 0" }}>
            <RoadmapItem
              quarter="Q1 2026"
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
              quarter="Q2 2026"
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
              quarter="Q3 2026"
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
              quarter="Q4 2026"
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
              quarter="2027"
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
        </Section>

        <Divider />

        {/* ──────────── Conclusion ──────────── */}
        <Section id="conclusion" title="8. Conclusion">
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
          <p
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#0D0D0D",
              textAlign: "center",
              margin: "48px 0 24px",
              lineHeight: 1.6,
            }}
          >
            The internet runs on txt.
            <br />
            The agent economy runs on txxt.
          </p>
        </Section>

        {/* Footer */}
        <div
          style={{
            marginTop: 80,
            paddingTop: 32,
            borderTop: "1px solid #E5E5E5",
            textAlign: "center",
            color: "#999",
            fontSize: 13,
          }}
        >
          <p>txxt Litepaper v0.2 &middot; March 2026</p>
          <p style={{ marginTop: 4 }}>
            Contact:{" "}
            <a href="https://txxt.xyz" style={{ color: "#00C896", textDecoration: "none" }}>
              txxt.xyz
            </a>
          </p>
        </div>
      </article>

      {/* Hide TOC on small screens */}
      <style>{`
        @media (max-width: 1100px) {
          .litepaper-toc { display: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ─── Shared Components ─── */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ scrollMarginTop: 100, marginBottom: 0 }}>
      <h2
        style={{
          fontSize: 26,
          fontWeight: 700,
          color: "#0D0D0D",
          marginBottom: 20,
          marginTop: 48,
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
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
        marginTop: 28,
        marginBottom: 4,
        lineHeight: 1.4,
      }}
    >
      {children}
    </h3>
  );
}

function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid #E5E5E5", margin: "32px 0" }} />;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        background: "#F4F4F4",
        padding: "2px 6px",
        borderRadius: 4,
        fontSize: 14,
        fontFamily: "var(--font-fira), monospace",
        color: "#0D0D0D",
      }}
    >
      {children}
    </code>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderLeft: "3px solid #00C896",
        background: "rgba(0,200,150,0.04)",
        padding: "16px 20px",
        borderRadius: "0 6px 6px 0",
        margin: "24px 0",
        fontSize: 15,
        color: "#444",
        lineHeight: 1.8,
      }}
    >
      {children}
    </div>
  );
}

function RoadmapItem({
  quarter,
  title,
  items,
  last = false,
}: {
  quarter: string;
  title: string;
  items: string[];
  last?: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: 20, marginBottom: last ? 0 : 32 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 20 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#00C896",
            flexShrink: 0,
            marginTop: 6,
          }}
        />
        {!last && (
          <div style={{ width: 2, flexGrow: 1, background: "#E5E5E5", marginTop: 4 }} />
        )}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#00C896", marginBottom: 2 }}>
          {quarter}
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, color: "#0D0D0D", marginBottom: 8 }}>
          {title}
        </div>
        <ul style={{ paddingLeft: 18, color: "#555", fontSize: 15, lineHeight: 1.8 }}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
