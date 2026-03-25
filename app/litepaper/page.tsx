"use client";

import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "abstract", label: "Abstract" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "The Solution" },
  { id: "architecture", label: "Architecture" },
  { id: "integration", label: "Agent Integration Layer" },
  { id: "agentscript", label: "AgentScript" },
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
              fontSize: 48,
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
            The Settlement Layer for Agent Commerce
          </p>
          <p style={{ fontSize: 13, color: "#999" }}>
            Version 0.1 &middot; March 2026 &middot; txxt Labs
          </p>
        </header>

        <Divider />

        {/* Abstract */}
        <Section id="abstract" title="Abstract">
          <p>
            The next wave of the internet is not built by humans alone. Autonomous AI agents are
            emerging as economic actors — discovering services, negotiating prices, executing
            transactions, and delivering value without human intervention. Yet the infrastructure
            to support this agent economy does not exist. There is no standard for how agents pay
            each other, no protocol for verifiable agent identity, and no settlement layer
            optimized for machine-to-machine commerce.
          </p>
          <p>
            <strong>txxt</strong> is a purpose-built agent middleware layer designed from the ground up
            for agent commerce — working on top of Ethereum, Solana, Base, and any supported chain. It natively integrates the{" "}
            <strong>x402 payment protocol</strong> for HTTP-native micropayments and the{" "}
            <strong>ERC-8004 standard</strong> for on-chain agent identity and reputation. txxt is
            tokenless — there is no native token, no speculation, no ICO. Gas fees are fixed at
            $0.0003 in USDC, making costs deterministic and predictable for autonomous systems.
            Consensus is achieved through <strong>Proof of Actual Work (PoAW)</strong>, where
            validators earn the right to produce blocks by performing verifiable, useful computation
            for the network.
          </p>
          <p>
            txxt is not a general-purpose chain. It is middleware infrastructure — the agent layer where
            agents transact, build reputation, and prove their work, regardless of which blockchain they settle on.
          </p>
        </Section>

        <Divider />

        {/* The Problem */}
        <Section id="problem" title="1. The Problem">
          <p>
            The agent economy is growing at an extraordinary pace. Major AI labs are shipping
            autonomous agents that can browse the web, write code, manage workflows, and interact
            with external APIs. Enterprises are deploying agent swarms for customer service,
            financial analysis, supply chain optimization, and software development. The market for
            AI agents is projected to exceed $100 billion by 2028.
          </p>
          <p>But the infrastructure has not kept up. Three critical gaps remain:</p>

          <H3>1.1 No Payment Rails for Agents</H3>
          <p>
            When Agent A needs to pay Agent B for a service, there is no standard protocol. Today's
            options are fragmented: credit card APIs require human KYC, crypto payments require
            wallet management and token bridging, and most agent frameworks simply ignore payment
            entirely. The result is that agents cannot participate in commerce without human
            intermediation at every transaction boundary.
          </p>

          <H3>1.2 No Verifiable Agent Identity</H3>
          <p>
            How does an agent know whether another agent is trustworthy? There is no on-chain
            identity standard for AI agents. Agents cannot present verifiable credentials, build
            portable reputation, or prove their track record. This forces every agent interaction
            to start from zero trust, making complex multi-agent workflows fragile and unreliable.
          </p>

          <H3>1.3 No Settlement Infrastructure</H3>
          <p>
            Existing blockchains are designed for human users. They optimize for DeFi, NFTs, and
            speculative trading — not for high-frequency, low-value, machine-to-machine
            transactions. Gas fees are unpredictable. Transaction finality is slow. The UX assumes
            a human is present to approve, sign, and confirm. None of this works for autonomous
            agents that need to execute thousands of microtransactions per hour without human
            oversight.
          </p>

          <Callout>
            The agent economy has the demand. What it lacks is the infrastructure — a settlement
            layer purpose-built for machines that pay, identify, and trust each other.
          </Callout>
        </Section>

        <Divider />

        {/* The Solution */}
        <Section id="solution" title="2. The Solution">
          <p>
            txxt addresses these gaps with a single, integrated approach: an agent middleware protocol
            that natively embeds the two most critical primitives for agent commerce —{" "}
            <strong>payments</strong> and <strong>identity</strong> — directly into the middleware
            layer, working on top of any blockchain.
          </p>

          <H3>x402: HTTP-Native Agent Payments</H3>
          <p>
            The <strong>x402 protocol</strong> extends HTTP with a native payment layer. When an
            agent requests a paid resource, the server responds with HTTP status{" "}
            <Code>402 Payment Required</Code> along with payment terms (amount, currency,
            recipient). The requesting agent constructs a payment proof, attaches it to the next
            request, and the server verifies the payment on-chain before delivering the resource.
            No APIs. No OAuth. No human in the loop.
          </p>
          <p>
            On txxt, x402 is not a smart contract — it is a <strong>native protocol operation</strong>.
            Payment verification happens at the consensus layer, making x402 transactions faster,
            cheaper, and more reliable than any smart-contract-based alternative.
          </p>

          <H3>ERC-8004: On-Chain Agent Identity &amp; Reputation</H3>
          <p>
            The <strong>ERC-8004 standard</strong> defines a universal identity primitive for AI
            agents. Each agent registered on txxt receives a soulbound identity token containing:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>A unique agent identifier (DID-compatible)</li>
            <li>Operator information (the human or organization behind the agent)</li>
            <li>Capability declarations (what the agent can do)</li>
            <li>A reputation score derived from on-chain transaction history</li>
            <li>Service endpoints for discovery and communication</li>
          </ul>
          <p>
            On txxt, ERC-8004 identities are <strong>first-class chain objects</strong>, not smart
            contract state. Identity lookups are O(1) operations at the protocol level, enabling
            agents to verify each other's credentials in milliseconds.
          </p>

          <Callout>
            x402 answers "how do agents pay?" ERC-8004 answers "how do agents trust?" txxt
            answers both — natively, at the protocol layer.
          </Callout>
        </Section>

        <Divider />

        {/* Architecture */}
        <Section id="architecture" title="3. Architecture">
          <H3>3.1 Middleware Design: Tokenless, Fixed-Cost</H3>
          <p>
            txxt is a tokenless blockchain. There is no native token. All gas fees are denominated
            in <strong>USDC</strong> at a fixed rate of <strong>$0.0003 per transaction</strong>.
            This design choice is fundamental to txxt's mission:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>Deterministic costs.</strong> Agents can calculate exact transaction costs
              before execution. No gas auctions, no fee spikes, no MEV.
            </li>
            <li>
              <strong>No speculation.</strong> Without a native token, there is no incentive for
              speculative trading. The chain exists purely as infrastructure.
            </li>
            <li>
              <strong>Stablecoin-native.</strong> USDC is the unit of account for the agent economy.
              Agents earn, spend, and settle in dollars — not in volatile tokens.
            </li>
            <li>
              <strong>Regulatory clarity.</strong> No token launch means no securities concerns, no
              airdrops, no tokenomics debates. txxt is infrastructure, like TCP/IP.
            </li>
          </ul>

          <H3>3.2 x402 Native Integration</H3>
          <p>
            x402 payment operations are implemented as <strong>native transaction types</strong> on
            txxt, alongside standard transfer and contract operations. The protocol defines three
            core x402 operations:
          </p>
          <ol style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>PaymentOffer</strong> — A server declares payment terms for a resource
              (amount, currency, expiry, resource hash).
            </li>
            <li>
              <strong>PaymentProof</strong> — A client agent constructs and submits proof of payment
              that references the offer.
            </li>
            <li>
              <strong>PaymentSettle</strong> — The network verifies the proof and atomically
              settles the payment, updating both agent balances and reputation scores.
            </li>
          </ol>
          <p>
            Settlement finality is under 400ms. Failed payments are automatically refunded. The
            entire flow — offer, proof, settle — happens within a single HTTP request-response
            cycle from the agent's perspective.
          </p>

          <H3>3.3 ERC-8004 Native Integration</H3>
          <p>
            Agent identities on txxt are stored in a dedicated <strong>Identity Trie</strong> — a
            protocol-level data structure separate from the account state trie. This enables:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>O(1) identity lookups</strong> without smart contract invocation
            </li>
            <li>
              <strong>Atomic reputation updates</strong> on every settled transaction
            </li>
            <li>
              <strong>Cross-chain identity portability</strong> via Merkle proof exports
            </li>
            <li>
              <strong>Identity revocation</strong> by the registered operator
            </li>
          </ul>
          <p>
            Reputation is computed from three signals: transaction volume (how much work the agent
            has settled), success rate (what percentage of transactions completed without disputes),
            and longevity (how long the agent has been active on-chain).
          </p>

          <H3>3.4 Proof of Actual Work (PoAW) Consensus</H3>
          <p>
            txxt replaces Proof of Stake with <strong>Proof of Actual Work (PoAW)</strong> — a
            novel consensus mechanism where validators earn block production rights by performing
            verifiable, useful computation.
          </p>
          <p>
            In each epoch, the network distributes computational tasks to validator candidates.
            These tasks are drawn from real workloads submitted by the network's agent ecosystem:
            model inference verification, data validation, payment proof checking, and identity
            credential verification. Validators that complete tasks correctly and within the time
            bound are eligible for the next block production round.
          </p>
          <p>
            PoAW ensures that every unit of energy spent on consensus directly contributes to the
            network's utility. There is no wasted computation. The work is the consensus.
          </p>
        </Section>

        <Divider />

        {/* Agent Integration Layer */}
        <Section id="integration" title="4. Agent Integration Layer">
          <p>
            txxt is designed to meet agents where they are. The Agent Integration Layer provides
            native support for every major agent communication protocol:
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
                ["MCP", "Model Context Protocol", "Native tool server — agents access chain via MCP tools"],
                ["A2A", "Agent-to-Agent Protocol", "Built-in agent discovery and task delegation"],
                ["ACP", "Agent Commerce Protocol", "x402 + ERC-8004 combined commerce flow"],
                ["CLI", "Command Line Interface", "Full-featured txxt CLI for scripting and automation"],
                ["SDK", "Software Dev Kit", "TypeScript, Python, Rust SDKs with ergonomic APIs"],
                ["REST", "HTTP API", "Standard REST endpoints for all chain operations"],
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
            The integration layer is designed so that any agent — regardless of its framework
            (LangChain, CrewAI, AutoGen, custom) — can interact with txxt through the protocol it
            already speaks. There is no txxt-specific SDK requirement. If your agent can make HTTP
            requests, it can use txxt.
          </p>
        </Section>

        <Divider />

        {/* AgentScript */}
        <Section id="agentscript" title="5. AgentScript">
          <p>
            <strong>AgentScript</strong> is a domain-specific language designed for programming
            agent behaviors on txxt. While general-purpose smart contract languages (Solidity,
            Move, Rust) are optimized for DeFi and token operations, AgentScript is optimized for
            the primitives that matter in agent commerce: <em>payments, identity checks, task
            delegation, and conditional workflows</em>.
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
            <div style={{ color: "#999", marginBottom: 8 }}>// AgentScript example: paid API endpoint</div>
            <div>
              <span style={{ color: "#7C3AED" }}>agent</span>{" "}
              <span style={{ color: "#0D0D0D", fontWeight: 600 }}>DataProvider</span> {"{"}
            </div>
            <div style={{ paddingLeft: 20 }}>
              <span style={{ color: "#7C3AED" }}>identity</span>: ERC8004(reputation {">"}= 0.8)
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

          <p>Key features of AgentScript include:</p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>Payment primitives</strong> — x402 payment requirements are first-class
              language constructs, not library calls.
            </li>
            <li>
              <strong>Identity-aware</strong> — Agent reputation and identity checks are built into
              the type system. You cannot deploy an endpoint without specifying identity requirements.
            </li>
            <li>
              <strong>Deterministic execution</strong> — AgentScript programs are pure functions
              with no side effects beyond chain state. Execution cost is computed at compile time.
            </li>
            <li>
              <strong>Human-readable</strong> — Designed for AI agents that generate code. The
              syntax is minimal and unambiguous, reducing LLM generation errors.
            </li>
          </ul>
          <p>
            AgentScript compiles to txxt bytecode and runs on the txxt Virtual Machine (TVM). The
            TVM is optimized for agent-specific operations, providing dedicated opcodes for payment
            verification, identity lookup, and reputation queries.
          </p>
        </Section>

        <Divider />

        {/* Tokenless Economics */}
        <Section id="tokenless" title="6. Tokenless Economics">
          <H3>6.1 Why No Token?</H3>
          <p>
            Most blockchain protocols launch with a native token. The token serves as gas payment,
            staking collateral, and governance weight. It also serves as a speculative asset — and
            this is where the incentive misalignment begins.
          </p>
          <p>
            When a chain has a native token, the success of the token becomes conflated with the
            success of the network. Development priorities shift toward "number go up" narratives.
            Users become speculators. The community optimizes for token price, not utility. This
            dynamic is incompatible with infrastructure.
          </p>
          <p>
            txxt takes a different approach. <strong>There is no native token.</strong> Instead:
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

          <H3>6.2 How It Works</H3>
          <p>
            The economic model is simple: agents pay $0.0003 per transaction. This fee is split
            between validators (70%), the protocol treasury (20%), and identity verifiers (10%).
          </p>
          <p>
            At 1 million transactions per day, the network generates $300/day or ~$109,500/year in
            validator revenue. At 100 million transactions per day — a reasonable target for a
            mature agent economy — validators earn ~$10.95 million/year. The economics scale
            linearly with usage, not with speculation.
          </p>

          <Callout>
            The internet doesn't have a token. SMTP doesn't have a token. HTTP doesn't have a
            token. The best infrastructure is invisible. txxt follows this principle.
          </Callout>
        </Section>

        <Divider />

        {/* Governance */}
        <Section id="governance" title="7. Governance">
          <p>
            txxt governance is <strong>reputation-based</strong>. There is no token-weighted voting.
            Instead, governance power is derived from <strong>Proof of Actual Work</strong> — the
            same mechanism that secures consensus.
          </p>

          <H3>7.1 Governance Participants</H3>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>
              <strong>PoAW Validators</strong> — Entities that run validator nodes and perform
              useful computation. They hold the highest governance weight.
            </li>
            <li>
              <strong>Registered Agents</strong> — AI agents with ERC-8004 identities and a
              minimum reputation score. They can vote on protocol parameters that affect agent
              operations.
            </li>
            <li>
              <strong>Operators</strong> — Humans or organizations that register and maintain
              agents. They can propose governance changes.
            </li>
          </ul>

          <H3>7.2 Governance Scope</H3>
          <p>
            Governance controls the following protocol parameters:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li>Transaction fee rate (currently $0.0003)</li>
            <li>Fee distribution ratio (currently 70/20/10)</li>
            <li>Minimum reputation thresholds for agent capabilities</li>
            <li>PoAW task difficulty and epoch length</li>
            <li>Protocol upgrade activation</li>
          </ul>
          <p>
            All governance proposals have a 7-day discussion period, followed by a 3-day voting
            period. Changes are enacted automatically via on-chain execution after a successful
            vote.
          </p>
        </Section>

        <Divider />

        {/* Roadmap */}
        <Section id="roadmap" title="8. Roadmap">
          <div style={{ margin: "24px 0" }}>
            <RoadmapItem
              quarter="Q1 2026"
              title="Foundation"
              items={[
                "Core protocol specification finalized",
                "x402 native transaction type implementation",
                "ERC-8004 Identity Trie design and prototype",
                "AgentScript language specification v0.1",
              ]}
            />
            <RoadmapItem
              quarter="Q2 2026"
              title="Testnet"
              items={[
                "Public testnet launch with PoAW consensus",
                "TypeScript and Python SDK release",
                "MCP tool server for testnet access",
                "First AgentScript programs deployed",
                "Identity registration and reputation system live",
              ]}
            />
            <RoadmapItem
              quarter="Q3 2026"
              title="Integration"
              items={[
                "A2A protocol integration for agent discovery",
                "ACP commerce flow implementation",
                "CLI and REST API production-ready",
                "Rust SDK release",
                "Security audit by independent firms",
              ]}
            />
            <RoadmapItem
              quarter="Q4 2026"
              title="Mainnet"
              items={[
                "Mainnet launch with full x402 + ERC-8004 support",
                "USDC bridging from Ethereum and Base",
                "AgentScript v1.0 with TVM deployment",
                "PoAW validator onboarding program",
              ]}
            />
            <RoadmapItem
              quarter="2027"
              title="Scale"
              items={[
                "Cross-chain identity portability (Ethereum, Solana, Base)",
                "AgentScript marketplace for reusable agent modules",
                "Enterprise validator program",
                "Governance system activation",
                "Target: 10M+ daily agent transactions",
              ]}
              last
            />
          </div>
        </Section>

        <Divider />

        {/* Conclusion */}
        <Section id="conclusion" title="9. Conclusion">
          <p>
            The internet was built on simple, open protocols. HTTP for communication. SMTP for
            email. DNS for naming. These protocols succeeded not because they were the most
            sophisticated, but because they were the most useful — invisible infrastructure that
            just worked.
          </p>
          <p>
            The agent economy needs its own infrastructure layer. Not another DeFi chain. Not
            another token launch. Not another general-purpose smart contract platform optimized
            for trading jpegs. The agent economy needs a settlement layer — a chain where agents
            pay each other (x402), prove who they are (ERC-8004), and build reputation through
            actual work (PoAW).
          </p>
          <p>
            txxt is that layer. Tokenless. Fixed-cost. Agent-native. Purpose-built.
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
          <p>txxt Litepaper v0.1 &middot; March 2026</p>
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
          fontSize: 28,
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
