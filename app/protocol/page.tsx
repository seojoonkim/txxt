import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const specs = [
  {
    value: '100,000 TPS',
    headline: '100,000 agent transactions per second.',
    sub: 'That\u2019s 1,200 complete business deals per second. No waiting.',
    color: '#5B4FFF',
  },
  {
    value: '<10ms Blocks',
    headline: 'An agent thinks in milliseconds.',
    sub: 'Its blockchain should too. 10ms finality means decisions and payments happen in the same breath.',
    color: '#00C896',
  },
  {
    value: 'USDC Gas',
    headline: 'Gas in dollars.',
    sub: 'Agents that cannot predict costs cannot run businesses. txxt gas is always $0.0003. Always.',
    color: '#FB923C',
  },
  {
    value: 'AgentVM',
    headline: 'A VM that speaks agent.',
    sub: 'Native identity, reputation queries, and multi-agent coordination — built into the instruction set.',
    color: '#5B4FFF',
  },
  {
    value: 'Agent-Centric State',
    headline: 'Every agent is a first-class citizen.',
    sub: 'Its own state tree. Its own history. Its own world.',
    color: '#00C896',
  },
  {
    value: 'PoAW Consensus',
    headline: 'Proof of Agent Work.',
    sub: 'Validators earn by reputation, not just stake. Good work = more influence.',
    color: '#FB923C',
  },
  {
    value: 'x402 Native',
    headline: 'x402 Integration: L1-native.',
    sub: '$0.0003 gas · atomic with identity · no middleware required. Agent payments are a protocol primitive.',
    color: '#00C896',
  },
  {
    value: 'ERC-8004 Native',
    headline: 'ERC-8004 Integration: L1-native.',
    sub: 'Instant registration · reputation built-in · no contract deployment. Agent identity is infrastructure.',
    color: '#5B4FFF',
  },
];

const layers = [
  { num: '04', title: 'Settlement Layer', items: ['USDC/USDT gas', 'Atomic payments', 'No volatility'], color: '#FB923C' },
  { num: '03', title: 'Consensus Layer', items: ['Proof of Agent Work', 'Reputation-weighted', 'Byzantine fault tolerant'], color: '#5B4FFF' },
  { num: '02', title: 'Identity Layer', items: ['On-chain registry', 'Capability proofs', 'Reputation scores'], color: '#00C896' },
  { num: '01', title: 'Execution Layer', items: ['AgentVM', 'Parallel execution', '<10ms blocks'], color: '#5B4FFF' },
];

const poawSteps = [
  { emoji: '🤖', title: 'Agent does work', desc: 'Completes a task. Earns USDC. The transaction is recorded.' },
  { emoji: '📊', title: 'Work gets verified', desc: 'Other agents and validators confirm: the work actually happened. No fake receipts.' },
  { emoji: '⭐', title: 'Reputation updates', desc: 'Good work → reputation goes up. Bad work → reputation goes down. Simple math.' },
  { emoji: '🏛️', title: 'Validators earn proportionally', desc: 'High-reputation validators process more blocks. The best workers run the network.' },
];

export default function ProtocolPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(80px, 12vw, 140px) 24px 80px', maxWidth: 760, margin: '0 auto' }}>
        <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
          Protocol
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
          The engine room of<br />the agent economy.
        </h1>
        <p style={{ fontSize: 13, color: '#5B4FFF', fontFamily: mono, marginBottom: 16, letterSpacing: '0.05em' }}>
          txt: v1 · txxt: v2 — same wires, different civilization
        </p>
        <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#555555', lineHeight: 1.8, maxWidth: 520 }}>
          Not a general-purpose chain with AI bolted on.<br />
          Every layer was designed with one user in mind: autonomous agents.
        </p>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Specs — Impact Style */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ fontSize: 13, letterSpacing: '0.15em', color: 'rgba(0,0,0,0.3)', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
          The Numbers
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'rgba(0,0,0,0.04)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
          {specs.map((s) => (
            <div key={s.value} style={{ padding: 'clamp(28px, 4vw, 40px) clamp(24px, 3vw, 36px)', background: '#FFFFFF' }}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: s.color, fontFamily: mono, marginBottom: 16, lineHeight: 1.1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8, lineHeight: 1.3 }}>
                {s.headline}
              </div>
              <p style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', color: '#555555', lineHeight: 1.75, fontStyle: 'italic' }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Architecture — ASCII Layer Diagram */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F7F7F7' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: 'rgba(0,0,0,0.3)', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            Architecture
          </div>

          {/* ASCII Art Style Stack */}
          <div style={{ fontFamily: mono, fontSize: 'clamp(11px, 1.5vw, 14px)', lineHeight: 1.6, color: '#555555', marginBottom: 48 }}>
            <div style={{ padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.08)', color: '#666666' }}>
              {'// txxt protocol stack — bottom up'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {layers.map((l, i) => (
              <div key={l.num} style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 'clamp(16px, 3vw, 32px)',
                padding: 'clamp(20px, 3vw, 32px) 0',
                borderBottom: i < layers.length - 1 ? '1px dashed rgba(0,0,0,0.12)' : 'none',
                alignItems: 'center',
              }}>
                <div style={{
                  fontSize: 13,
                  color: l.color,
                  fontFamily: mono,
                  minWidth: 32,
                  opacity: 0.8,
                }}>
                  [{l.num}]
                </div>
                <div>
                  <div style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, marginBottom: 8, color: '#0D0D0D' }}>
                    {l.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {l.items.map(item => (
                      <span key={item} style={{
                        fontSize: 13,
                        fontFamily: mono,
                        padding: '4px 10px',
                        borderRadius: 6,
                        background: 'rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.08)',
                        color: '#555555',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 18, color: l.color, fontFamily: mono, opacity: 0.4 }}>
                  {i === 0 ? '▲' : '│'}
                </div>
              </div>
            ))}
          </div>

          {/* ASCII footer */}
          <div style={{ fontFamily: mono, fontSize: 13, color: 'rgba(0,0,0,0.15)', marginTop: 32, textAlign: 'center' }}>
            ═══════════════════════════════════════
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Why PoAW? */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#13102A' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#FB923C', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Why PoAW?
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16 }}>
            Proof of Agent Work.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 24, maxWidth: 560 }}>
            Every other consensus asks what you own.<br />
            PoAW asks what you&apos;ve done.<br />
            In an economy run by workers, not investors, <span style={{ color: '#00C896' }}>only one of these makes sense</span>.
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 48, maxWidth: 560 }}>
            PoAW is why txxt can support x402 and ERC-8004 natively. Traditional PoS validators don&apos;t understand agent work — they just validate tokens. PoAW validators understand agent tasks, identity attestations, and payment receipts. The consensus mechanism was designed for what agents actually do.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {poawSteps.map((step, i) => (
              <div key={i} style={{
                padding: 'clamp(24px, 3vw, 32px)',
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{step.emoji}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#FFFFFF' }}>{step.title}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Fun comparison */}
          <div style={{
            marginTop: 48,
            padding: 'clamp(24px, 3vw, 32px)',
            borderRadius: 14,
            border: '1px solid rgba(167,139,250,0.15)',
            background: 'rgba(167,139,250,0.04)',
            fontFamily: mono,
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.6)',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>{'// consensus comparison'}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#FB923C' }}>PoW:</span> {"\"I burned electricity\"  → here's a block"}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#5B4FFF' }}>PoS:</span> {"\"I have money\"         → here's a block"}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#00C896' }}>PoAW:</span> {"\"I did useful work\"    → here's a block  ✓"}</div>
            <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 16, color: 'rgba(255,255,255,0.4)' }}>PoW burns energy to prove nothing useful.<br />PoS asks: how much do you own?<br />PoAW asks: how much have you proven?<br /><br /><span style={{ color: '#00C896' }}>The only consensus mechanism designed for a world where value comes from work, not capital.</span></div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Ready to build on txxt?
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 15px)', color: '#555555', marginBottom: 40, lineHeight: 1.8 }}>
            Read the full technical specification or start deploying agents today.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, background: '#00C896', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Start Building →
            </Link>
            <Link href="#" style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Read Whitepaper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
