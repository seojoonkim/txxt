import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const specs = [
  { label: 'Consensus', value: 'Proof of Agent Work', desc: 'Validators scored by reputation, not just stake. Higher-reputation validators earn proportionally more.' },
  { label: 'Throughput', value: '100,000 TPS', desc: 'Parallel execution engine optimized for agent-to-agent micro-transactions. Sub-second finality.' },
  { label: 'Block Time', value: '400ms', desc: 'Near-instant finality for real-time agent interactions and high-frequency autonomous operations.' },
  { label: 'Gas Token', value: 'USDC / USDT', desc: 'No volatile native token. Stablecoin gas means predictable agent operating costs. Forever.' },
  { label: 'VM', value: 'AgentVM', desc: 'Custom virtual machine with native identity verification, reputation queries, and multi-agent coordination.' },
  { label: 'State Model', value: 'Agent-Centric', desc: 'State organized around agent identities. Each agent is a first-class citizen with its own state tree.' },
];

const layers = [
  { num: '01', title: 'Execution Layer', desc: 'AgentVM processes transactions. Parallel execution for A2A interactions. 400ms block time.' },
  { num: '02', title: 'Identity Layer', desc: 'Every agent registered on-chain. Capabilities, reputation, history — all verifiable.' },
  { num: '03', title: 'Consensus Layer', desc: 'Proof of Agent Work. Validators weighted by reputation score, not just token stake.' },
  { num: '04', title: 'Settlement Layer', desc: 'USDC/USDT gas. Stablecoin-denominated fees. No speculation, no volatility.' },
];

export default function ProtocolPage() {
  return (
    <div style={{ background: '#080810', color: '#fff', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: '120px 24px 80px', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 24 }}>
          PROTOCOL
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
          Built for agents.<br />From the ground up.
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 520 }}>
          txxt is not a general-purpose chain retrofitted for AI. Every layer — execution, identity, consensus, settlement — was designed with autonomous agents as the primary user.
        </p>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* Specs Grid */}
      <section style={{ padding: '96px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', fontFamily: mono, marginBottom: 48 }}>
          TECHNICAL SPECIFICATIONS
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          {specs.map((s, i) => (
            <div key={s.label} style={{ padding: '36px 32px', background: '#080810' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)', fontFamily: mono, marginBottom: 12 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: '#00F5C4', fontFamily: mono, marginBottom: 12 }}>
                {s.value}
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* Architecture Layers */}
      <section style={{ padding: '96px 24px', background: '#0A0A16' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', fontFamily: mono, marginBottom: 48 }}>
            ARCHITECTURE
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {layers.map((l, i) => (
              <div key={l.num} style={{
                display: 'flex', gap: 32, padding: '32px 0',
                borderBottom: i < layers.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                alignItems: 'flex-start',
              }}>
                <div style={{ fontSize: 13, color: '#00F5C4', fontFamily: mono, minWidth: 32, paddingTop: 3 }}>{l.num}</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{l.title}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Ready to build on txxt?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', marginBottom: 40, lineHeight: 1.8 }}>
            Read the full technical specification or start deploying agents today.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{ padding: '12px 28px', borderRadius: 10, background: '#00F5C4', color: '#080810', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Start Building →
            </Link>
            <Link href="#" style={{ padding: '12px 28px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none' }}>
              Read Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
