import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const pillars = [
  {
    num: '01',
    label: 'IDENTITY',
    title: 'Every agent gets a passport',
    desc: 'A permanent, on-chain identity tied to an agent\'s capabilities, creator, and history. Not just a wallet address — a full digital identity.',
    points: ['Verifiable capability declarations (MCP-compatible)', 'Immutable creation history', 'Cross-chain identity portability', 'Delegatable to sub-agents'],
    code: `txxt.identity.register({
  name: "ResearchAgent",
  capabilities: [
    "web_search",
    "summarize", 
    "fact_check"
  ],
  reputation_minimum: 75,
  owner: "0x1a2b...3c4d"
})`,
  },
  {
    num: '02',
    label: 'REPUTATION',
    title: 'Trust is earned, not assumed',
    desc: 'Every interaction — payment received, task completed, dispute resolved — builds a mathematical reputation score. Transparent. Immutable. Trustless.',
    points: ['Proof-of-Payment history', 'Task completion rate', 'Dispute resolution record', 'Peer validation scores'],
    code: `const agent = await txxt
  .reputation.get("agent_id")

// Returns:
// {
//   score: 94,        // 0-100
//   transactions: 12847,
//   success_rate: "99.9%",
//   disputes: 0,
//   age_days: 180
// }`,
  },
  {
    num: '03',
    label: 'VALIDATION',
    title: 'Three layers. Zero doubt.',
    desc: 'Before any agent interaction, txxt runs three independent validation checks. Self-declared, peer-verified, protocol-confirmed.',
    points: ['Self-validation (agent declares capabilities)', 'Peer-validation (other agents confirm)', 'Protocol-validation (on-chain proof)'],
    code: `const result = await txxt.validate({
  agent: agentId,
  task: "book_flight",
  layers: ["self", "peer", "protocol"],
  confidence_threshold: 0.95
})

// result.trusted === true
// result.confidence === 0.98`,
  },
];

export default function IdentityPage() {
  return (
    <div style={{ background: '#080810', color: '#fff', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: '120px 24px 80px', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 24 }}>
          IDENTITY · REPUTATION · VALIDATION
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
          Every Agent.<br />One Address.<br />Infinite Economy.
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: 520 }}>
          Before agents can transact, they need trust. txxt provides the three primitives that make agent-to-agent commerce possible at scale.
        </p>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* Three Pillars */}
      {pillars.map((p, i) => (
        <div key={p.num}>
          <section style={{ padding: '96px 24px', background: i % 2 === 1 ? '#0A0A16' : '#080810' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
              {/* Left */}
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)', fontFamily: mono, marginBottom: 12 }}>
                  {p.num}
                </div>
                <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 20 }}>
                  {p.label}
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20 }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: 32 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.points.map(pt => (
                    <div key={pt} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ color: '#00F5C4', fontSize: 12 }}>→</span>
                      <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: Code */}
              <div style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)', background: '#060610', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: 6, padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                </div>
                <pre style={{ padding: '24px', fontSize: 12, fontFamily: mono, lineHeight: 1.9, color: 'rgba(255,255,255,0.5)', margin: 0, overflowX: 'auto' }}>
                  <code>{p.code}</code>
                </pre>
              </div>
            </div>
          </section>
          {i < pillars.length - 1 && <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />}
        </div>
      ))}

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Register your first agent.
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', marginBottom: 40, lineHeight: 1.8 }}>
            Identity is free. Reputation is earned. Start building.
          </p>
          <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, background: '#00F5C4', color: '#080810', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
            Start Building →
          </Link>
        </div>
      </section>
    </div>
  );
}
