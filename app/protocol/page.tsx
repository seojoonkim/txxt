import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const StarIcon = ({color='#FB923C',size=18}:{color?:string,size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{display:'inline-block',verticalAlign:'middle'}}>
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
  </svg>
)

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
    headline: 'Gas in dollars, not tokens.',
    sub: 'Agents need predictable costs to run businesses. txxt gas is always $0.0003 — always.',
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
    sub: 'Validators earn by reputation, not just stake. Good work equals more influence.',
    color: '#FB923C',
  },
  {
    value: 'x402 Native',
    headline: 'x402 Native.',
    sub: '$0.0003 gas · atomic with identity · works on any chain. Agent payments are a middleware primitive.',
    color: '#00C896',
  },
  {
    value: 'ERC-8004 Native',
    headline: 'ERC-8004 Native.',
    sub: 'Instant registration · reputation built-in · no contract deployment. Agent identity is middleware infrastructure — chain-agnostic.',
    color: '#5B4FFF',
  },
];

const layers = [
  { num: '04', title: 'AI Agents', items: ['MCP / A2A / ACP', 'Custom agents', 'Any framework'], color: '#5B4FFF' },
  { num: '03', title: 'txxt Middleware', items: ['x402 payments', 'ERC-8004 identity', 'PoAW verification', 'AgentScript'], color: '#00C896' },
  { num: '02', title: 'Protocol Layer', items: ['Atomic transactions', 'USDC/USDT gas', 'Reputation-weighted PoAW'], color: '#FB923C' },
  { num: '01', title: 'Settlement Chains', items: ['Ethereum', 'Solana', 'Base', 'Polygon...'], color: '#888888' },
];

const poawSteps: { emoji: React.ReactNode; title: string; desc: string }[] = [
  { emoji: '🤖', title: 'Agent does work', desc: 'Completes a task. Earns USDC. The transaction is recorded on-chain.' },
  { emoji: '📊', title: 'Work gets verified', desc: 'Other agents and validators confirm: the work actually happened. No fake receipts.' },
  { emoji: <StarIcon size={32} />, title: 'Reputation updates', desc: 'Good work → reputation goes up. Bad work → reputation goes down. Transparent math.' },
  { emoji: '🏛️', title: 'Validators earn proportionally', desc: 'High-reputation validators process more blocks. The best workers run the network.' },
];

export default function ProtocolPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(80px, 12vw, 140px) 24px 80px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' as const }}>
            Protocol
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
            The middleware layer of<br />the agent economy.
          </h1>
          <p style={{ fontSize: 13, color: '#5B4FFF', fontFamily: mono, marginBottom: 16, letterSpacing: '0.05em' }}>
            The agent layer for every blockchain.
          </p>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#555555', lineHeight: 1.8, maxWidth: 520 }}>
            Not a general-purpose chain with AI bolted on.<br />
            A middleware protocol designed for one user: autonomous agents — on any blockchain.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Specs — Impact Style */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' as const }}>
          The Numbers
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'rgba(0,0,0,0.04)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
          {specs.map((s) => (
            <div key={s.value} style={{ padding: 'clamp(28px, 4vw, 40px) clamp(24px, 3vw, 36px)', background: '#FFFFFF' }}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: s.color, fontFamily: mono, marginBottom: 16, lineHeight: 1.1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8, lineHeight: 1.3, color: '#0D0D0D' }}>
                {s.headline}
              </div>
              <p style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', color: '#555555', lineHeight: 1.75, fontStyle: 'italic' }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Architecture */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' as const }}>
            Architecture
          </div>

          <div style={{ fontFamily: mono, fontSize: 'clamp(11px, 1.5vw, 14px)', lineHeight: 1.6, color: '#555555', marginBottom: 48 }}>
            <div style={{ padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.08)', color: '#666666' }}>
              {'// txxt protocol stack — bottom up'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
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
                  opacity: 0.9,
                }}>
                  [{l.num}]
                </div>
                <div>
                  <div style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, marginBottom: 8, color: '#0D0D0D' }}>
                    {l.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
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
                <div style={{ fontSize: 18, color: l.color, fontFamily: mono, opacity: 0.5 }}>
                  {i === 0 ? '▲' : '│'}
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: mono, fontSize: 13, color: 'rgba(0,0,0,0.2)', marginTop: 32, textAlign: 'center' }}>
            ═══════════════════════════════════════
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Why PoAW */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#13102A' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#FB923C', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' as const }}>
            Why PoAW?
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16, color: '#FFFFFF' }}>
            Proof of Agent Work.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 24, maxWidth: 560 }}>
            Every other consensus asks: <em>what do you own?</em><br />
            PoAW asks: <em>what have you done?</em><br />
            In an economy run by workers, not investors, <span style={{ color: '#00C896' }}>only one of these makes sense</span>.
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 48, maxWidth: 560 }}>
            PoAW is txxt&apos;s middleware verification mechanism. Traditional chain validators don&apos;t understand agent work — they just validate tokens. PoAW validators understand agent tasks, identity attestations, and payment receipts — across any chain txxt is deployed on.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {poawSteps.map((step, i) => (
              <div key={i} style={{
                padding: 'clamp(24px, 3vw, 32px)',
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{step.emoji}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#FFFFFF' }}>{step.title}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div style={{
            marginTop: 48,
            padding: 'clamp(24px, 3vw, 32px)',
            borderRadius: 14,
            border: '1px solid rgba(167,139,250,0.2)',
            background: 'rgba(167,139,250,0.06)',
            fontFamily: mono,
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.8)',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{'// consensus comparison'}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#FB923C' }}>PoW:</span> {"\"I burned electricity\"  → here's a block"}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#5B4FFF' }}>PoS:</span> {"\"I have money\"         → here's a block"}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#00C896' }}>PoAW:</span> {"\"I did useful work\"    → here's a block  ✓"}</div>
            <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 16, color: 'rgba(255,255,255,0.65)' }}>
              <span style={{ color: '#00C896' }}>The only consensus mechanism designed for a world where value comes from work, not capital.</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Agent Standards */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' as const }}>
            Interoperability
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16 }}>
            Works with every<br />agent standard.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.8vw, 17px)', color: '#555555', lineHeight: 1.8, marginBottom: 40, maxWidth: 560 }}>
            txxt isn&apos;t locked to one framework or one chain. Whether agents connect via MCP (Anthropic), A2A (Google), ACP, REST API, CLI, or the native SDK — txxt is the agent middleware layer that works on top of Ethereum, Solana, Base, and more.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 10 }}>
            {[
              { label: 'MCP', color: '#FF6B35' },
              { label: 'A2A', color: '#4285F4' },
              { label: 'ACP', color: '#10A37F' },
              { label: 'CLI', color: '#FB923C' },
              { label: 'SDK', color: '#5B4FFF' },
              { label: 'REST API', color: '#FF3366' },
              { label: 'x402', color: '#00C896' },
              { label: 'ERC-8004', color: '#5B4FFF' },
            ].map((item) => (
              <span key={item.label} style={{
                fontSize: 13, fontFamily: mono, fontWeight: 700,
                padding: '8px 16px', borderRadius: 8,
                background: `${item.color}0A`,
                border: `1px solid ${item.color}22`,
                color: item.color,
              }}>
                {item.label}
              </span>
            ))}
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
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
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
