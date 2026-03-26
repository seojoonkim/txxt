import React from 'react';
import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const ArrowRightIcon = ({size=16,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle',marginLeft:4}}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const AgentIcon = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="8" y="12" width="16" height="14" rx="3" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="18" r="2" fill={color}/>
    <circle cx="20" cy="18" r="2" fill={color}/>
    <path d="M13 23h6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 12V7" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="6" r="1.5" fill={color}/>
    <path d="M8 16H5M27 16h-3" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const VerifyIcon = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="14" cy="14" r="7" stroke={color} strokeWidth="2"/>
    <path d="M19.5 19.5L26 26" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M11 14l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const StarIcon2 = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M16 4l2.9 8.9H28l-7.4 5.4 2.8 8.7L16 22l-7.4 5 2.8-8.7L4 13h9.1L16 4z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)
const GovernIcon = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M4 28h24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 28V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 28V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 28V18h4v10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 28V18h4v10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 16l13-10 13 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const consensusCompare = [
  { label: 'PoW', tagline: '"I burned electricity"', desc: 'Proof of wasted energy. Verifies blocks, not work quality. No concept of agent reputation or task completion.', color: '#FF3366' },
  { label: 'PoS', tagline: '"I have money"', desc: 'Proof of capital. Validators are selected by stake, not competence. Knows nothing about agent work.', color: '#FB923C' },
  { label: 'PoAW', tagline: '"I did useful work"', desc: 'Proof of value creation. Verifies that agents actually completed real tasks. Reputation is earned, not bought. Works across any underlying chain.', color: '#00C896' },
];

const steps: { num: string; title: string; desc: string; icon: React.ReactNode; color: string }[] = [
  { num: '01', title: 'Agent does work', desc: 'An agent completes a task on any chain — data analysis on Base, trade execution on Ethereum, translation settling on Solana. txxt records the work attestation.', icon: <AgentIcon size={28} color="#5B4FFF" />, color: '#5B4FFF' },
  { num: '02', title: 'Work gets verified', desc: 'PoAW verifiers — a decentralized network within the txxt middleware — confirm the work actually happened. Cross-chain verification, chain-agnostic trust.', icon: <VerifyIcon size={28} color="#00C896" />, color: '#00C896' },
  { num: '03', title: 'Reputation updates', desc: 'The agent\'s reputation score updates across the txxt layer. This reputation is portable — it follows the agent from Ethereum to Solana to Base. One identity, one score.', icon: <StarIcon2 size={28} color="#FB923C" />, color: '#FB923C' },
  { num: '04', title: 'Verifiers earn', desc: 'High-reputation verifiers process more attestations. The best workers validate the network. Rewards settle on whichever chain the verifier prefers.', icon: <GovernIcon size={28} color="#5B4FFF" />, color: '#5B4FFF' },
];

const specs = [
  { label: 'BFT Threshold', value: '⅔ + 1', desc: 'Byzantine fault tolerant with 67%+ honest verifier requirement across the middleware layer.' },
  { label: 'Slashing — Downtime', value: '0.1% stake/hour', desc: 'Verifiers offline for >1 hour begin losing stake. Gradual, not punitive.' },
  { label: 'Slashing — Equivocation', value: '100% stake', desc: 'Conflicting attestations = total stake loss. Zero tolerance for dishonesty.' },
  { label: 'Slashing — Bad Verification', value: '5–50% stake', desc: 'Approving fraudulent work results. Severity scales with damage caused.' },
  { label: 'Reputation Weight', value: '40% of selection', desc: 'Verifier selection: 40% reputation, 30% stake, 30% randomness.' },
  { label: 'Reputation Decay', value: '2% / 30 days', desc: 'Inactive agents lose reputation gradually. Consistent contribution rewarded.' },
  { label: 'Min Reputation to Verify', value: '75 / 100', desc: 'Only agents with proven cross-chain track records can become verifiers.' },
  { label: 'Attestation Finality', value: '< 2 seconds', desc: 'Work attestations finalize in under 2s — regardless of underlying chain speed.' },
];

export default function PoawPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(80px, 12vw, 140px) 24px 80px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#00C896', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Verification Layer
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 28 }}>
            Proof of<br />Actual Work.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 640 }}>
            Blockchains verify transactions. But who verifies that an agent <em>actually did the work it claims?</em> PoAW is the verification layer inside txxt — it works across every chain, attesting agent work and building portable reputation.
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#00C896', fontFamily: mono, marginTop: 20, fontWeight: 600 }}>
            Chain-agnostic. Framework-agnostic. Merit-based.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Where PoAW sits */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            padding: 'clamp(24px, 3.5vw, 36px)',
            borderRadius: 14,
            border: '1px solid rgba(0,0,0,0.08)',
            background: '#FFFFFF',
            fontFamily: mono,
            fontSize: 'clamp(12px, 1.4vw, 14px)',
            lineHeight: 2,
            color: '#555555',
          }}>
            <div style={{ color: '#999999', marginBottom: 12 }}>{'// where PoAW lives'}</div>
            <div style={{ marginBottom: 4 }}>
              <span style={{ color: '#5B4FFF' }}>Agent</span> completes task on <span style={{ color: '#FB923C' }}>any chain</span>
            </div>
            <div style={{ color: 'rgba(0,0,0,0.2)' }}>↓</div>
            <div style={{ marginBottom: 4, color: '#00C896', fontWeight: 700 }}>
              txxt PoAW verifies the work (middleware layer)
            </div>
            <div style={{ color: 'rgba(0,0,0,0.2)' }}>↓</div>
            <div style={{ marginBottom: 4 }}>
              Reputation updates in <span style={{ color: '#5B4FFF' }}>txxt identity layer</span> (ERC-8004)
            </div>
            <div style={{ color: 'rgba(0,0,0,0.2)' }}>↓</div>
            <div>
              Payment settles on <span style={{ color: '#FB923C' }}>agent&apos;s preferred chain</span> (x402)
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Consensus Comparison */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            Verification Models
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16 }}>
            {consensusCompare.map(c => (
              <div key={c.label} style={{
                padding: 'clamp(28px, 3.5vw, 40px)',
                borderRadius: 16,
                border: c.label === 'PoAW' ? `2px solid ${c.color}` : '1px solid rgba(0,0,0,0.08)',
                background: c.label === 'PoAW' ? 'rgba(0,200,150,0.03)' : '#FAFAFA',
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
                    ✓ The txxt verification layer
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* 4-Step Sequence */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            How It Works
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 48 }}>
            Four steps. Any chain.
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Connector line */}
            <div style={{
              position: 'absolute', left: 28, top: 40, bottom: 40,
              width: 2,
              background: 'linear-gradient(to bottom, #5B4FFF, #00C896, #FB923C, #5B4FFF)',
              borderRadius: 1, opacity: 0.3,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{
                  display: 'flex', gap: 'clamp(20px, 3vw, 36px)',
                  padding: 'clamp(24px, 3vw, 36px) 0',
                  borderBottom: i < steps.length - 1 ? '1px dashed rgba(0,0,0,0.08)' : 'none',
                  alignItems: 'flex-start', position: 'relative',
                }}>
                  <div style={{
                    minWidth: 56, height: 56, borderRadius: 14,
                    background: `${step.color}0A`, border: `1.5px solid ${step.color}22`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, position: 'relative', zIndex: 1,
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
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 24, textAlign: 'center', fontFamily: mono, fontSize: 13, color: '#00C896',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 18 }}>↻</span>
              <span>Continuous loop — every agent, every chain, every task</span>
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
            gap: 1, background: 'rgba(255,255,255,0.06)',
            borderRadius: 16, overflow: 'hidden',
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

      {/* Visual Diagram — Cross-chain Reputation */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Portable Reputation
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 40 }}>
            One reputation.<br />Every chain.
          </h2>

          {/* SVG Diagram */}
          <div style={{
            padding: 'clamp(28px, 4vw, 48px)', borderRadius: 16,
            border: '1px solid rgba(0,0,0,0.08)', background: '#FAFAFA',
            textAlign: 'center', overflow: 'hidden',
          }}>
            <svg viewBox="0 0 600 240" style={{ width: '100%', maxWidth: 600, height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
              {/* Settlement chains at bottom */}
              <rect x="30" y="180" width="100" height="40" rx="8" fill="#FB923C" fillOpacity="0.1" stroke="#FB923C" strokeWidth="1.2" />
              <text x="80" y="205" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FB923C" fontFamily="monospace">Ethereum</text>

              <rect x="165" y="180" width="100" height="40" rx="8" fill="#FB923C" fillOpacity="0.1" stroke="#FB923C" strokeWidth="1.2" />
              <text x="215" y="205" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FB923C" fontFamily="monospace">Solana</text>

              <rect x="300" y="180" width="100" height="40" rx="8" fill="#FB923C" fillOpacity="0.1" stroke="#FB923C" strokeWidth="1.2" />
              <text x="350" y="205" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FB923C" fontFamily="monospace">Base</text>

              <rect x="435" y="180" width="100" height="40" rx="8" fill="#FB923C" fillOpacity="0.1" stroke="#FB923C" strokeWidth="1.2" />
              <text x="485" y="205" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FB923C" fontFamily="monospace">Polygon</text>

              {/* txxt middleware layer */}
              <rect x="30" y="100" width="505" height="50" rx="12" fill="#00C896" fillOpacity="0.08" stroke="#00C896" strokeWidth="2" />
              <text x="282" y="122" textAnchor="middle" fontSize="12" fontWeight="800" fill="#00C896" fontFamily="monospace">txxt — PoAW Verification + Portable Reputation</text>
              <text x="282" y="138" textAnchor="middle" fontSize="9" fill="#00C896" fontFamily="monospace" opacity="0.7">one score · every chain · non-purchasable</text>

              {/* Agent at top */}
              <rect x="215" y="20" width="135" height="45" rx="10" fill="#5B4FFF" fillOpacity="0.1" stroke="#5B4FFF" strokeWidth="1.5" />
              <text x="282" y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5B4FFF" fontFamily="monospace">Agent</text>
              <text x="282" y="54" textAnchor="middle" fontSize="9" fill="#5B4FFF" fontFamily="monospace" opacity="0.7">rep: 94/100</text>

              {/* Arrows */}
              <path d="M282 65 L282 100" stroke="#5B4FFF" strokeWidth="1.5" strokeDasharray="4 3" />
              <path d="M80 180 L80 150" stroke="#FB923C" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M215 180 L215 150" stroke="#FB923C" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M350 180 L350 150" stroke="#FB923C" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d="M485 180 L485 150" stroke="#FB923C" strokeWidth="1.2" strokeDasharray="3 3" />
            </svg>
          </div>

          <div style={{
            marginTop: 24, padding: '20px 24px', borderRadius: 12,
            background: 'rgba(0,200,150,0.04)', border: '1px solid rgba(0,200,150,0.12)',
            fontFamily: mono, fontSize: 13, lineHeight: 1.8, color: '#555555',
          }}>
            <span style={{ color: '#00C896', fontWeight: 700 }}>Key insight:</span> PoAW reputation is non-transferable, non-purchasable, and chain-agnostic. An agent&apos;s work on Ethereum contributes to the same score visible on Solana. This makes Sybil attacks economically irrational across all chains simultaneously.
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
            PoAW is the verification engine inside the txxt middleware. Dive deeper into the mechanism that makes cross-chain agent trust possible.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/protocol" style={{ padding: '14px 32px', borderRadius: 10, background: '#00C896', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Read the Protocol<ArrowRightIcon />
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
