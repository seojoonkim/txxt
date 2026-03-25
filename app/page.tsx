'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

function TerminalCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn(v => !v), 500);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 1 : 0, color: '#007A5E' }}>▋</span>;
}

export default function Home() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>

      {/* ===== HERO — Split layout ===== */}
      <section style={{
        minHeight: '100vh',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
        maxWidth: '100%',
      }}>
        {/* Left text block */}
        <div style={{
          flex: '0 0 55%',
          maxWidth: '55%',
          padding: 'clamp(80px, 10vw, 120px) clamp(24px, 4vw, 64px) 80px',
          display: 'flex',
          alignItems: 'center',
        }} className="hero-left">
        <style>{`
          @media (max-width: 1023px) {
            .hero-left { flex: 0 0 100% !important; max-width: 100% !important; }
            .hero-right { display: none !important; }
          }
        `}</style>
          <div style={{ maxWidth: 560, width: '100%' }}>
            {/* Small label */}
            <p style={{
              fontSize: 13, letterSpacing: '0.12em', color: '#555555',
              fontFamily: mono, marginBottom: 32, fontWeight: 600,
            }}>
              LIVE MAINNET · NO TOKEN · GAS IN $0.0003
            </p>

            {/* Giant txxt logo */}
            <div style={{
              fontSize: 'clamp(72px, 18vw, 200px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: '#00C896',
              fontFamily: mono,
              marginBottom: 20,
            }}>
              txxt
            </div>

            {/* Tagline — smaller, muted */}
            <p style={{
              fontSize: 'clamp(15px, 3.5vw, 22px)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.4,
              color: '#555555',
              marginBottom: 32,
              maxWidth: 480,
            }}>
              The internet runs on txt.<br />
              The agent economy runs on txxt.
            </p>

            {/* Sub */}
            <p style={{
              fontSize: 'clamp(14px, 3vw, 18px)', color: '#444', lineHeight: 1.75,
              marginBottom: 40, maxWidth: 480,
            }}>
              x402 payments. ERC-8004 identity. Both native to txxt — the only chain built for autonomous agents.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }} className="hero-buttons">
              <Link href="/build" style={{
                padding: '16px 40px', borderRadius: 10,
                background: '#00C896',
                color: '#fff', fontWeight: 700, fontSize: 18,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(0,200,150,0.25)',
                textAlign: 'center' as const,
              }}>Start Building</Link>
              <Link href="/protocol" style={{
                padding: '16px 32px', borderRadius: 10,
                background: '#fff',
                border: '1.5px solid rgba(0,0,0,0.15)',
                color: '#0A0A0A', fontWeight: 500, fontSize: 18,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                textAlign: 'center' as const,
              }}>Read the Protocol</Link>
            </div>
          </div>
        </div>

        {/* Right video panel */}
        <div className="hero-right" style={{
          flex: '0 0 45%',
          maxWidth: '45%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 40,
        }}>
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

      </section>



      {/* ===== PROBLEM — The Integration Problem ===== */}
      <section style={{
        padding: 'clamp(120px, 15vh, 200px) 24px',
        textAlign: 'center',
        position: 'relative',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        {/* Subtle purple glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(167,139,250,0.04) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <p style={{
            fontSize: 13, letterSpacing: '0.12em', color: '#FF3366',
            fontFamily: mono, marginBottom: 24, fontWeight: 700,
          }}>
            THE INTEGRATION PROBLEM
          </p>

          {/* Giant headline */}
          <h2 style={{
            fontSize: 'clamp(32px, 8vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            margin: '0 0 24px 0',
            color: '#0D0D0D',
          }}>
            x402 and ERC-8004 exist.<br />But not together.
          </h2>

          {/* Sub */}
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: '#555555',
            margin: '0 0 48px 0',
            fontFamily: mono,
          }}>
            The protocols for agent payments and agent identity are already written. The problem? No blockchain supports both natively.
          </p>

          {/* Protocol badges — 4 items */}
          <div style={{
            maxWidth: 700, margin: '0 auto 48px',
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#444',
            lineHeight: 1.75,
            textAlign: 'left' as const,
          }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
              <span style={{ color: '#00C896', fontFamily: mono, fontWeight: 700, flexShrink: 0 }}>x402 ✓</span>
              <span>Defines how agents pay each other — in any currency, any amount, any speed.</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
              <span style={{ color: '#5B4FFF', fontFamily: mono, fontWeight: 700, flexShrink: 0 }}>ERC-8004 ✓</span>
              <span>Defines how agents prove who they are — identity, reputation, capabilities.</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
              <span style={{ color: '#E53E3E', fontFamily: mono, fontWeight: 700, flexShrink: 0 }}>Other chains ✗</span>
              <span>Require custom middleware, separate contract layers, unpredictable gas. When x402 and ERC-8004 live on different layers, atomic transactions are impossible.</span>
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'flex-start' }}>
              <span style={{ color: '#007A5E', fontFamily: mono, fontWeight: 700, flexShrink: 0 }}>txxt ✓</span>
              <span>Built with both from block zero. Native, integrated, atomic. The chain that makes it all work.</span>
            </div>
          </div>

          {/* Emphasis */}
          <div style={{
            maxWidth: 700, margin: '0 auto',
            padding: '32px',
            borderRadius: 16,
            background: 'rgba(0,200,150,0.04)',
            border: '1px solid rgba(0,200,150,0.12)',
          }}>
            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: '#444',
              lineHeight: 1.75,
              margin: 0,
            }}>
              <strong style={{ color: '#E53E3E' }}>Without L1-native integration:</strong> every agent interaction requires stitching middleware across layers.{' '}
              <strong style={{ color: '#007A5E' }}>With txxt:</strong> verify identity + complete payment in a single 10ms transaction.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY TXXT — x402 + ERC-8004 Native Integration ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        {/* Section label */}
        <div style={{ padding: '80px 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.1em', color: '#007A5E',
            fontFamily: mono, margin: 0, fontWeight: 700,
          }}>
            WHY TXXT
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, color: '#0D0D0D',
            margin: '24px 0 16px', letterSpacing: '-0.02em', lineHeight: 1.2,
          }}>
            x402. ERC-8004. Natively integrated.
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#666', lineHeight: 1.6,
            margin: '0 auto', maxWidth: 600,
          }}>
            Other chains bolt these on. txxt was built with them from block zero.
          </p>
        </div>

        {/* Four items */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 0' }}>
          {[
            { letter: 'x', word: 'x402 Native', title: 'Agent payments, finally reliable.', desc: 'x402 defines how agents pay each other. On Ethereum, implementing x402 means custom contracts, unpredictable gas spikes, and middleware that breaks under load. On txxt, x402 is wired into the L1. Every agent payment costs $0.0003. No exceptions. No surprises.', color: '#00C896', num: '01' },
            { letter: '8', word: 'ERC-8004 Native', title: 'Agent identity, without the overhead.', desc: 'ERC-8004 defines how agents establish trusted identities. On other chains, it requires a smart contract layer that adds latency, cost, and failure points. On txxt, every agent gets a verified identity at registration — instant, free, immutable. No contract deployment needed.', color: '#5B4FFF', num: '02' },
            { letter: '+', word: 'Atomic Integration', title: 'One transaction. Identity + payment.', desc: 'The breakthrough: when x402 and ERC-8004 live on the same L1, agents can verify a counterpart\u2019s identity AND execute a payment in a single atomic transaction. This is impossible when the protocols live on different layers. txxt makes it inevitable.', color: '#FF3366', num: '03' },
            { letter: '→', word: 'The Result', title: 'Seamless agent commerce at scale.', desc: 'Agent A needs to hire Agent B. With txxt: check B\u2019s ERC-8004 identity (reputation: 94/100) → confirm capabilities → execute x402 payment ($0.004 USDC) → update reputation. All in one atomic transaction. Under 10ms. Always $0.0003 in gas.', color: '#FF8C00', num: '04' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 32,
              padding: '40px 0',
              borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              alignItems: 'flex-start',
            }}>
              <div style={{
                fontSize: 'clamp(48px, 10vw, 80px)',
                fontWeight: 900,
                color: item.color,
                fontFamily: mono,
                minWidth: '1ch',
                flexShrink: 0,
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}>
                {item.letter}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: item.color,
                  fontFamily: mono, marginBottom: 8, letterSpacing: '0.08em',
                }}>{item.word}</div>
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: '#0D0D0D',
                  margin: '0 0 8px 0', letterSpacing: '-0.01em',
                }}>{item.title}</h3>
                <p style={{
                  fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', lineHeight: 1.75,
                  margin: 0, maxWidth: '65ch',
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{ padding: '48px 24px 80px', textAlign: 'center' }}>
          <p style={{
            fontSize: 14, color: '#555555', fontStyle: 'italic',
            fontFamily: mono, margin: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
          }}>
            &ldquo;x402 tells agents how to pay. ERC-8004 tells agents who to trust. txxt is the only chain where both work natively — together.&rdquo;
          </p>
        </div>
      </section>

      {/* ===== THREE PILLARS — Stacked full-width, split layout (Stripe style) ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        {/* Section header */}
        <div style={{ padding: '100px 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.1em', color: '#007A5E',
            fontFamily: mono, marginBottom: 20, fontWeight: 700,
          }}>
            CORE INFRASTRUCTURE
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700,
            letterSpacing: '-0.04em', margin: '0 0 80px 0',
          }}>
            Three pillars.<br />Zero compromise.
          </h2>
        </div>

        {/* Pillar 1 — Identity */}
        <div style={{
          display: 'flex', flexWrap: 'wrap' as const,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          minHeight: 480,
        }}>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', flexDirection: 'column' as const, justifyContent: 'center',
            padding: 'clamp(48px, 6vw, 80px)',
          }}>
            <div style={{
              fontSize: 'clamp(80px, 12vw, 160px)', fontWeight: 900,
              color: 'rgba(167,139,250,0.08)', fontFamily: mono,
              lineHeight: 1, marginBottom: 24, letterSpacing: '-0.05em',
            }}>01</div>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#5B4FFF', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>IDENTITY</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Every agent gets<br />a passport.
            </h3>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', lineHeight: 1.8, maxWidth: 400 }}>
              Permanent. Portable. Unfakeable. A sovereign identity on-chain — not a plugin, not an afterthought.
            </p>
          </div>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(32px, 4vw, 64px)',
            background: '#F0F0F0',
            borderLeft: '1px solid rgba(0,0,0,0.08)',
          }}>
            <pre style={{
              fontSize: 'clamp(11px, 1.2vw, 13px)', fontFamily: mono,
              color: '#444', lineHeight: 2, margin: 0,
              whiteSpace: 'pre-wrap' as const, wordBreak: 'break-all' as const,
            }}>
              <code>
{`txxt.identity.register({
  name: "TravelBot",
  capabilities: ["search", "book"],
  owner: "0x1a2b...3c4d"
})`}
              </code>
            </pre>
          </div>
        </div>

        {/* Pillar 2 — Reputation (reversed) */}
        <div style={{
          display: 'flex', flexWrap: 'wrap-reverse' as const,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          minHeight: 480,
        }}>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(32px, 4vw, 64px)',
            background: '#F0F0F0',
            borderRight: '1px solid rgba(0,0,0,0.08)',
          }}>
            <pre style={{
              fontSize: 'clamp(11px, 1.2vw, 13px)', fontFamily: mono,
              color: '#444', lineHeight: 2, margin: 0,
              whiteSpace: 'pre-wrap' as const, wordBreak: 'break-all' as const,
            }}>
              <code>
{`const score = await txxt
  .reputation.get(agentId)

// { score: 94,
//   txCount: 12847,
//   disputes: 0,
//   uptime: 99.9 }`}
              </code>
            </pre>
          </div>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', flexDirection: 'column' as const, justifyContent: 'center',
            padding: 'clamp(48px, 6vw, 80px)',
          }}>
            <div style={{
              fontSize: 'clamp(80px, 12vw, 160px)', fontWeight: 900,
              color: 'rgba(0,245,196,0.06)', fontFamily: mono,
              lineHeight: 1, marginBottom: 24, letterSpacing: '-0.05em',
            }}>02</div>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#007A5E', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>REPUTATION</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Trust is earned<br />on-chain.
            </h3>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', lineHeight: 1.8, maxWidth: 400 }}>
              No reviews. No stars. Pure math. 94/100 means 12,847 tasks, zero disputes, 99.9% uptime.
            </p>
          </div>
        </div>

        {/* Pillar 3 — Validation */}
        <div style={{
          display: 'flex', flexWrap: 'wrap' as const,
          borderTop: '1px solid rgba(0,0,0,0.08)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          minHeight: 480,
        }}>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', flexDirection: 'column' as const, justifyContent: 'center',
            padding: 'clamp(48px, 6vw, 80px)',
          }}>
            <div style={{
              fontSize: 'clamp(80px, 12vw, 160px)', fontWeight: 900,
              color: 'rgba(251,146,60,0.06)', fontFamily: mono,
              lineHeight: 1, marginBottom: 24, letterSpacing: '-0.05em',
            }}>03</div>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#FF8C00', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>VALIDATION</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Three layers.<br />Zero doubt.
            </h3>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', lineHeight: 1.8, maxWidth: 400 }}>
              Before any agent-to-agent deal closes, three things happen: the agent checks itself, peers verify it, and the protocol confirms it. All in under 10ms.
            </p>
          </div>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(32px, 4vw, 64px)',
            background: '#F0F0F0',
            borderLeft: '1px solid rgba(0,0,0,0.08)',
          }}>
            <pre style={{
              fontSize: 'clamp(11px, 1.2vw, 13px)', fontFamily: mono,
              color: '#444', lineHeight: 2, margin: 0,
              whiteSpace: 'pre-wrap' as const, wordBreak: 'break-all' as const,
            }}>
              <code>
{`txxt.validate({
  agent: agentId,
  layers: [
    "self",
    "peer",
    "protocol"
  ]
})
// ✓ triple-verified`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* ===== TOKENLESS — Giant statement with comparison table ===== */}
      <section style={{
        padding: 'clamp(140px, 20vh, 240px) 24px',
        textAlign: 'center',
        position: 'relative',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 40% 50% at 50% 50%, rgba(251,146,60,0.04) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Giant headline */}
          <h2 style={{
            fontSize: 'clamp(40px, 10vw, 120px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            margin: '0 0 32px 0',
            color: '#FF8C00',
          }}>
            No token.<br />
            <span style={{ fontSize: '0.6em', color: '#007A5E' }}>x402 gas.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: '#0D0D0D',
            fontWeight: 700,
            margin: '0 0 24px 0',
          }}>
            Always predictable.
          </p>

          {/* Explanation */}
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#555555',
            lineHeight: 1.8,
            maxWidth: 560,
            margin: '0 auto 16px',
          }}>
            Other chains force you to hold a volatile native token to pay gas. When token prices spike, agent operating costs spike. An agent budgeted to spend $5/month suddenly spends $50. That breaks autonomous systems.
          </p>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#555555',
            lineHeight: 1.8,
            maxWidth: 560,
            margin: '0 auto 16px',
          }}>
            txxt uses USDC and USDT for gas — the same tokens agents use for x402 payments. No token to manage. No price volatility. No broken agents.
          </p>

          <p style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            color: '#007A5E',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 56px',
            fontWeight: 700,
            fontFamily: mono,
          }}>
            Gas cost: $0.0003 per transaction. Always. Budget it once. Never think about it again.
          </p>

          {/* Comparison table */}
          <div style={{
            maxWidth: 560, margin: '0 auto',
            overflowX: 'auto' as const,
          }}>
          <div style={{
            minWidth: 360,
            borderRadius: 12,
            border: '1px solid rgba(0,0,0,0.12)',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
          }}>
            {/* Table header */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              background: '#F0F0F0',
              borderBottom: '1px solid rgba(0,0,0,0.12)',
            }}>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#555555', fontWeight: 600, letterSpacing: '0.05em' }}></div>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#555555', fontWeight: 600, letterSpacing: '0.05em', textAlign: 'center' }}>Others</div>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#007A5E', fontWeight: 700, letterSpacing: '0.05em', textAlign: 'center' }}>txxt</div>
            </div>
            {/* Table rows */}
            {[
              { label: 'Gas fees', them: 'Volatile tokens', us: 'USDC stable' },
              { label: 'Cost', them: 'Can spike 100×', us: 'Always $0.0003' },
              { label: 'x402 support', them: 'Custom contracts', us: 'Native L1' },
              { label: 'ERC-8004', them: 'Plugin/Contract', us: 'Native L1' },
              { label: 'Atomic ID+pay', them: 'Impossible', us: 'Yes, <10ms' },
              { label: 'Launch', them: 'Token & hype', us: 'Infra first' },
              { label: 'Governance', them: 'Theater', us: 'Pure utility' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < 6 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                background: '#FFFFFF',
              }}>
                <div style={{ padding: '14px 20px', fontSize: 13, fontFamily: mono, color: '#0D0D0D', fontWeight: 600 }}>{row.label}</div>
                <div style={{ padding: '14px 20px', fontSize: 13, color: '#888888', textAlign: 'center', textDecoration: 'line-through' }}>
                  <span style={{ fontSize: 14, marginRight: 6 }}>✗</span>{row.them}
                </div>
                <div style={{ padding: '14px 20px', fontSize: 13, color: '#007A5E', fontWeight: 600, textAlign: 'center' }}>
                  <span style={{ fontSize: 14, marginRight: 6 }}>✓</span>{row.us}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ===== AGENTSCRIPT — Code showcase ===== */}
      <section style={{ background: '#F8F8F8', padding: 'clamp(100px, 12vh, 160px) 24px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{
              fontSize: 13, letterSpacing: '0.1em', color: '#007A5E',
              fontFamily: mono, marginBottom: 16, fontWeight: 700,
            }}>
              AGENTSCRIPT
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700,
              letterSpacing: '-0.04em', margin: '0 0 16px 0', lineHeight: 1.2,
            }}>
              Code for agents,<br />by agents.
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: '#555555',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: '0 0 16px 0',
            }}>
              AgentScript is what agents speak natively on txxt. x402 payments and ERC-8004 identity checks are first-class operations — discover, verify, pay, and update reputation in one coherent syntax.
            </p>
            <p style={{
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              color: '#007A5E',
              lineHeight: 1.6,
              maxWidth: 520,
              margin: 0,
              fontFamily: mono,
              fontWeight: 600,
            }}>
              x402 + ERC-8004 = native AgentScript primitives. Not plugins. Not imports.
            </p>
          </div>

          {/* Terminal */}
          <div style={{
            borderRadius: 16,
            border: '1px solid rgba(0,0,0,0.08)',
            background: '#0A0C1E',
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          }}>
            {/* Title bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.03)',
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: mono, marginLeft: 8 }}>
                travel_planner.agent
              </span>
              <span style={{ marginLeft: 'auto' }}><TerminalCursor /></span>
            </div>
            {/* Code */}
            <div style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
              <pre style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', fontFamily: mono, lineHeight: 2, margin: 0, overflowX: 'auto' as const }}>
                <code>
                  <span style={{ color: '#5B4FFF' }}>agent</span>{' '}
                  <span style={{ color: '#00C896' }}>TravelPlanner</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'{'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// ERC-8004: on-chain identity auto-registered'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>identity:</span>{' '}
                  <span style={{ color: '#f59e0b' }}>&quot;txxt:0x1a2b...verified&quot;</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>reputation_minimum:</span>{' '}
                  <span style={{ color: '#00C896' }}>80</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// ERC-8004 score gate'}</span>{'\n'}
                  {'\n'}
                  {'  '}<span style={{ color: '#5B4FFF' }}>task</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>hire_flight_agent</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(destination)</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'{'}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// ERC-8004: verify counterpart identity'}</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>agent</span>{' = '}
                  <span style={{ color: '#00C896' }}>discover</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'{'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>capability: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;flight_search&quot;</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>,</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>min_reputation: </span>
                  <span style={{ color: '#00C896' }}>85</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// ERC-8004 check'}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// x402: atomic payment — same tx as identity check'}</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>result</span>{' = '}
                  <span style={{ color: '#00C896' }}>delegate</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(agent, search(destination), </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'{'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>payment: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;0.004 USDC&quot;</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// x402 native'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>gas: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;0.0003 USDC&quot;</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// always fixed'}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.4)' }}>{'// x402 receipt + ERC-8004 reputation update'}</span>{'\n'}
                  {'    '}<span style={{ color: '#00C896' }}>rate</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(agent, score: </span>
                  <span style={{ color: '#00C896' }}>95</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>, proof: result.receipt)</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{
        padding: 'clamp(120px, 22vh, 280px) 24px',
        textAlign: 'center',
        position: 'relative',
        background: '#0A0A0A',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(28px, 6vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: '0 0 16px 0',
            color: '#FFFFFF',
          }}>
            The only chain that supports<br />
            <span style={{ color: '#00C896' }}>x402</span> and <span style={{ color: '#5B4FFF' }}>ERC-8004</span> natively.
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 48px',
            fontFamily: mono,
          }}>
            Build agents that can actually trust — and pay — each other.
          </p>

          <Link href="/build" className="cta-final-btn" style={{
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: 10,
            background: '#00C896',
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 14px rgba(0,200,150,0.25)',
            textAlign: 'center' as const,
          }}>
            Start Building
          </Link>
        </div>
      </section>

    </div>
  );
}
// Wed Mar 25 23:15:51 KST 2026
