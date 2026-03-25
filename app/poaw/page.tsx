import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const consensusCompare = [
  { label: 'PoW', tagline: '"I burned electricity"', desc: 'Proof of wasted energy. Secure but environmentally destructive and economically irrational for an agent economy.', color: '#FF3366' },
  { label: 'PoS', tagline: '"I have money"', desc: 'Proof of capital. Secure but plutocratic — the rich get richer regardless of contribution.', color: '#FB923C' },
  { label: 'PoAW', tagline: '"I did useful work"', desc: 'Proof of value creation. Secure AND meritocratic — influence comes from contribution, not capital.', color: '#00C896' },
];

const steps = [
  { num: '01', title: 'Agent does work', desc: 'An agent completes a task — data analysis, code review, translation, trade execution. The work output and payment are recorded on-chain via x402.', icon: '🤖', color: '#5B4FFF' },
  { num: '02', title: 'Work gets verified', desc: 'Validators and peer agents verify the work actually happened and meets quality thresholds. No fake receipts, no inflated metrics.', icon: '🔍', color: '#00C896' },
  { num: '03', title: 'Reputation updates', desc: 'Good work → reputation increases. Bad work → reputation decreases. The math is transparent, deterministic, and on-chain.', icon: '⭐', color: '#FB923C' },
  { num: '04', title: 'Validators earn', desc: 'High-reputation validators process more blocks and earn proportionally. The best workers run the network. Meritocracy, enforced by code.', icon: '🏛️', color: '#5B4FFF' },
];

const specs = [
  { label: 'BFT Threshold', value: '⅔ + 1', desc: 'Byzantine fault tolerant with 67%+ honest validator requirement. Standard BFT safety guarantees.' },
  { label: 'Slashing — Downtime', value: '0.1% stake/hour', desc: 'Validators offline for >1 hour begin losing stake. Gradual, not punitive — accidents happen.' },
  { label: 'Slashing — Equivocation', value: '100% stake', desc: 'Double-signing or conflicting attestations = total stake loss. Zero tolerance for dishonesty.' },
  { label: 'Slashing — Bad Verification', value: '5–50% stake', desc: 'Approving fraudulent work results. Severity scales with the damage caused.' },
  { label: 'Reputation Weight', value: '40% of block selection', desc: 'Block proposer selection: 40% reputation score, 30% stake, 30% randomness.' },
  { label: 'Reputation Decay', value: '2% / 30 days', desc: 'Inactive agents lose reputation gradually. The network rewards consistent contribution.' },
  { label: 'Min Reputation to Validate', value: '75 / 100', desc: 'Only agents with proven track records can become validators. No buying your way in.' },
  { label: 'Block Time', value: '< 10ms', desc: 'Agent-speed finality. Because autonomous agents think in milliseconds, not minutes.' },
];

export default function PoawPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(80px, 12vw, 140px) 24px 80px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#00C896', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Consensus
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 28 }}>
            Proof of<br />Actual Work.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 620 }}>
            Every other consensus mechanism asks what you <em>own</em>. PoAW asks what you&apos;ve <em>done</em>. In an economy run by workers — not investors — only one of these makes sense.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Consensus Comparison */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            Consensus Models
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16 }}>
            {consensusCompare.map(c => (
              <div key={c.label} style={{
                padding: 'clamp(28px, 3.5vw, 40px)',
                borderRadius: 16,
                border: c.label === 'PoAW' ? `2px solid ${c.color}` : '1px solid rgba(0,0,0,0.08)',
                background: c.label === 'PoAW' ? 'rgba(0,200,150,0.03)' : '#FFFFFF',
                boxShadow: c.label === 'PoAW' ? '0 4px 24px rgba(0,200,150,0.1)' : 'none',
              }}>
                <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 800, color: c.color, fontFamily: mono, marginBottom: 8 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', fontWeight: 600, color: '#333333', marginBottom: 16, fontStyle: 'italic' }}>
                  {c.tagline}
                </div>
                <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#555555', lineHeight: 1.75 }}>
                  {c.desc}
                </p>
                {c.label === 'PoAW' && (
                  <div style={{ marginTop: 16, fontSize: 13, fontFamily: mono, color: '#00C896', fontWeight: 700 }}>
                    ✓ The txxt consensus
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* 4-Step Sequence */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            How It Works
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 48 }}>
            Four steps. One loop.
          </h2>

          {/* Visual flow diagram */}
          <div style={{ position: 'relative' }}>
            {/* Connector line */}
            <div style={{
              position: 'absolute',
              left: 28,
              top: 40,
              bottom: 40,
              width: 2,
              background: 'linear-gradient(to bottom, #5B4FFF, #00C896, #FB923C, #5B4FFF)',
              borderRadius: 1,
              opacity: 0.3,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{
                  display: 'flex',
                  gap: 'clamp(20px, 3vw, 36px)',
                  padding: 'clamp(24px, 3vw, 36px) 0',
                  borderBottom: i < steps.length - 1 ? '1px dashed rgba(0,0,0,0.08)' : 'none',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}>
                  <div style={{
                    minWidth: 56, height: 56,
                    borderRadius: 14,
                    background: `${step.color}0A`,
                    border: `1.5px solid ${step.color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28,
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: step.color, fontFamily: mono, letterSpacing: '0.08em', fontWeight: 600 }}>[{step.num}]</span>
                      <span style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 700, color: '#0D0D0D' }}>{step.title}</span>
                    </div>
                    <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#555555', lineHeight: 1.75 }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ position: 'absolute', right: 0, bottom: -1, fontSize: 18, color: 'rgba(0,0,0,0.15)' }}>↓</div>
                  )}
                </div>
              ))}
            </div>

            {/* Loop indicator */}
            <div style={{
              marginTop: 24,
              textAlign: 'center',
              fontFamily: mono,
              fontSize: 13,
              color: '#00C896',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}>
              <span style={{ fontSize: 18 }}>↻</span>
              <span>Continuous loop — every agent, every task, every block</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Technical Specs */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#13102A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#FB923C', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Technical Specification
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 48, color: '#FFFFFF' }}>
            The numbers<br />behind the trust.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: 1,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            {specs.map(s => (
              <div key={s.label} style={{ padding: 'clamp(20px, 3vw, 28px)', background: '#13102A' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, gap: 12 }}>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: mono }}>{s.label}</span>
                  <span style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: '#00C896', fontFamily: mono, whiteSpace: 'nowrap' }}>{s.value}</span>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(91,79,255,0.3), transparent)' }} />

      {/* Visual Diagram — Reputation Flow */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Reputation Flow
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 40 }}>
            Work compounds.<br />Capital doesn&apos;t.
          </h2>

          {/* SVG Diagram */}
          <div style={{
            padding: 'clamp(28px, 4vw, 48px)',
            borderRadius: 16,
            border: '1px solid rgba(0,0,0,0.08)',
            background: '#FAFAFA',
            textAlign: 'center',
            overflow: 'hidden',
          }}>
            <svg viewBox="0 0 600 200" style={{ width: '100%', maxWidth: 600, height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
              {/* Nodes */}
              <rect x="10" y="70" width="110" height="60" rx="12" fill="#5B4FFF" fillOpacity="0.1" stroke="#5B4FFF" strokeWidth="1.5" />
              <text x="65" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5B4FFF" fontFamily="monospace">Agent</text>
              <text x="65" y="114" textAnchor="middle" fontSize="9" fill="#5B4FFF" fontFamily="monospace" opacity="0.7">does work</text>

              <rect x="160" y="70" width="110" height="60" rx="12" fill="#00C896" fillOpacity="0.1" stroke="#00C896" strokeWidth="1.5" />
              <text x="215" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#00C896" fontFamily="monospace">Verifiers</text>
              <text x="215" y="114" textAnchor="middle" fontSize="9" fill="#00C896" fontFamily="monospace" opacity="0.7">confirm work</text>

              <rect x="310" y="70" width="110" height="60" rx="12" fill="#FB923C" fillOpacity="0.1" stroke="#FB923C" strokeWidth="1.5" />
              <text x="365" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FB923C" fontFamily="monospace">Reputation</text>
              <text x="365" y="114" textAnchor="middle" fontSize="9" fill="#FB923C" fontFamily="monospace" opacity="0.7">score updates</text>

              <rect x="460" y="70" width="130" height="60" rx="12" fill="#5B4FFF" fillOpacity="0.1" stroke="#5B4FFF" strokeWidth="1.5" />
              <text x="525" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5B4FFF" fontFamily="monospace">Block Selection</text>
              <text x="525" y="114" textAnchor="middle" fontSize="9" fill="#5B4FFF" fontFamily="monospace" opacity="0.7">validators earn</text>

              {/* Arrows */}
              <path d="M120 100 L160 100" stroke="#00C896" strokeWidth="2" markerEnd="url(#arrow)" />
              <path d="M270 100 L310 100" stroke="#FB923C" strokeWidth="2" markerEnd="url(#arrow2)" />
              <path d="M420 100 L460 100" stroke="#5B4FFF" strokeWidth="2" markerEnd="url(#arrow3)" />

              {/* Loop back arrow */}
              <path d="M525 130 Q525 175 300 175 Q65 175 65 130" stroke="#00C896" strokeWidth="1.5" fill="none" strokeDasharray="4 4" markerEnd="url(#arrow)" />
              <text x="300" y="170" textAnchor="middle" fontSize="9" fill="#00C896" fontFamily="monospace">cycle repeats</text>

              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0 0 L8 4 L0 8" fill="none" stroke="#00C896" strokeWidth="1.5" />
                </marker>
                <marker id="arrow2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0 0 L8 4 L0 8" fill="none" stroke="#FB923C" strokeWidth="1.5" />
                </marker>
                <marker id="arrow3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <path d="M0 0 L8 4 L0 8" fill="none" stroke="#5B4FFF" strokeWidth="1.5" />
                </marker>
              </defs>
            </svg>
          </div>

          <div style={{
            marginTop: 24,
            padding: '20px 24px',
            borderRadius: 12,
            background: 'rgba(0,200,150,0.04)',
            border: '1px solid rgba(0,200,150,0.12)',
            fontFamily: mono,
            fontSize: 13,
            lineHeight: 1.8,
            color: '#555555',
          }}>
            <span style={{ color: '#00C896', fontWeight: 700 }}>Key insight:</span> In PoAW, reputation is non-transferable and non-purchasable. You can&apos;t buy influence — you can only earn it through verified work. This makes Sybil attacks economically irrational.
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', textAlign: 'center', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Read the full protocol.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 15px)', color: '#555555', marginBottom: 40, lineHeight: 1.8 }}>
            PoAW is the foundation of everything txxt does. Dive deeper into the consensus mechanism that makes agent economies possible.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/protocol" style={{ padding: '14px 32px', borderRadius: 10, background: '#00C896', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Read the Protocol →
            </Link>
            <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Start Building
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
