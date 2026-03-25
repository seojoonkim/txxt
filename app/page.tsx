'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const CheckIcon = ({color='#00C896',size=16}:{color?:string,size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle'}}>
    <path d="M2.5 8l4 4 7-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const XIcon = ({color='#E53E3E',size=16}:{color?:string,size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle'}}>
    <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

function TerminalCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn(v => !v), 500);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 1 : 0, color: '#00C896' }}>▋</span>;
}

export default function Home() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>

      {/* ===== HERO — Split layout ===== */}
      <section style={{
        background: '#FFFFFF',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', alignItems: 'stretch' }} className="hero-inner">
        {/* Left text block */}
        <div style={{
          flex: '0 0 50%',
          maxWidth: '50%',
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 3vw, 48px) clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} className="hero-left">
        <style>{`
          @media (max-width: 1023px) {
            .hero-inner { flex-direction: column !important; }
            .hero-left { flex: 0 0 100% !important; max-width: 100% !important; padding-bottom: 0 !important; }
            .hero-right { flex: 0 0 100% !important; max-width: 100% !important; display: flex !important; border-bottom-left-radius: 0 !important; min-height: 320px; }
          }
          @media (max-width: 600px) {
            .hero-right { min-height: 240px; }
          }
        `}</style>
          <div style={{ maxWidth: 640, width: '100%' }}>
            {/* Small label */}
            {/* Giant txxt logo */}
            <div style={{
              fontSize: 'clamp(80px, 28vw, 200px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: '#00C896',
              fontFamily: mono,
              marginBottom: 20,
            }}>
              txxt
            </div>

            {/* Tagline */}
            <p style={{
              fontSize: 'clamp(15px, 3.5vw, 22px)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.4,
              color: '#555555',
              marginBottom: 32,
              maxWidth: 480,
            }}>
              Every blockchain.<br />
              Every agent. One layer.
            </p>

            {/* Sub */}
            <p style={{
              fontSize: 'clamp(14px, 3vw, 18px)', color: '#444444', lineHeight: 1.75,
              marginBottom: 40, maxWidth: 480,
            }}>
              txxt is the middleware that makes any blockchain agent-ready. x402 payments. ERC-8004 identity. Works on top of Ethereum, Solana, Base, and more.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap' as const }} className="hero-buttons">
              <Link href="/build" style={{
                padding: '13px 0', borderRadius: 10,
                background: '#00C896',
                color: '#fff', fontWeight: 700, fontSize: 'clamp(13px, 3.5vw, 16px)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(0,200,150,0.25)',
                textAlign: 'center' as const,
                whiteSpace: 'nowrap' as const,
                flex: '1 1 0',
              }}>Start Building</Link>
              <Link href="/protocol" style={{
                padding: '13px 0', borderRadius: 10,
                background: '#fff',
                border: '1.5px solid rgba(0,0,0,0.15)',
                color: '#0A0A0A', fontWeight: 500, fontSize: 'clamp(13px, 3.5vw, 16px)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                textAlign: 'center' as const,
                whiteSpace: 'nowrap' as const,
                flex: '1 1 0',
              }}>Read the Protocol</Link>
            </div>
          </div>
        </div>

        {/* Right video panel */}
        <div className="hero-right" style={{
          flex: '0 0 50%',
          maxWidth: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 40,
          padding: '40px 24px',
        }}>
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              maxWidth: 520,
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        </div>
      </section>



      {/* ===== THE PROBLEM — Why agents need a middleware layer ===== */}
      <section style={{
        textAlign: 'center',
        position: 'relative',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(167,139,250,0.04) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(100px, 15vh, 180px) 24px', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.12em', color: '#FF3366',
            fontFamily: mono, marginBottom: 24, fontWeight: 700,
          }}>
            THE PROBLEM
          </p>

          <h2 style={{
            fontSize: 'clamp(32px, 7vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            margin: '0 0 24px 0',
            color: '#0D0D0D',
          }}>
            Agents need to pay<br />and trust each other.
          </h2>
          <h3 style={{
            fontSize: 'clamp(18px, 3vw, 28px)',
            fontWeight: 600,
            color: '#FF3366',
            margin: '0 0 40px 0',
          }}>
            No middleware unifies both — until now.
          </h3>

          {/* Two protocol cards */}
          <div style={{
            maxWidth: 800, margin: '0 auto 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 16,
          }}>
            <div style={{
              padding: 'clamp(24px, 3vw, 32px)',
              borderRadius: 14,
              border: '1px solid rgba(0,200,150,0.15)',
              background: 'rgba(0,200,150,0.03)',
              textAlign: 'left' as const,
            }}>
              <div style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#00C896', letterSpacing: '0.08em', marginBottom: 12 }}>x402 PROTOCOL</div>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: '#0D0D0D', margin: '0 0 8px', lineHeight: 1.3 }}>
                How agents pay each other.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#555555', lineHeight: 1.75, margin: 0 }}>
                HTTP-native payments, any token, any amount, at machine speed. The spec exists — but no middleware unifies it across chains.
              </p>
            </div>

            <div style={{
              padding: 'clamp(24px, 3vw, 32px)',
              borderRadius: 14,
              border: '1px solid rgba(91,79,255,0.15)',
              background: 'rgba(91,79,255,0.03)',
              textAlign: 'left' as const,
            }}>
              <div style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#5B4FFF', letterSpacing: '0.08em', marginBottom: 12 }}>ERC-8004 STANDARD</div>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: '#0D0D0D', margin: '0 0 8px', lineHeight: 1.3 }}>
                How agents prove who they are.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#555555', lineHeight: 1.75, margin: 0 }}>
                Verifiable identity, reputation, and capabilities on-chain. The spec exists — but every chain treats it as a plugin. txxt makes it native across all of them.
              </p>
            </div>
          </div>

          {/* The punchline */}
          <div style={{
            maxWidth: 700, margin: '0 auto',
            padding: '28px 32px',
            borderRadius: 14,
            background: 'rgba(229,62,62,0.04)',
            border: '1px solid rgba(229,62,62,0.12)',
          }}>
            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: '#444444',
              lineHeight: 1.75,
              margin: 0,
            }}>
              <strong style={{ color: '#E53E3E' }}>The catch:</strong> when these protocols live on different layers, atomic transactions are impossible. You can&apos;t verify identity and settle payment in one step — unless a middleware layer unifies them across every chain.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THE SOLUTION — Why txxt ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ padding: 'clamp(80px, 12vh, 140px) 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.1em', color: '#00C896',
            fontFamily: mono, margin: 0, fontWeight: 700,
          }}>
            THE SOLUTION
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700, color: '#0D0D0D',
            margin: '24px 0 16px', letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            txxt: both protocols,<br />on every chain.
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#666666', lineHeight: 1.6,
            margin: '0 auto', maxWidth: 600,
          }}>
            Other chains bolt these on separately. txxt is the middleware layer that makes both native — on any blockchain.
          </p>
        </div>

        {/* Four differentiators */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 0' }}>
          {[
            { letter: 'x', word: 'x402 Native', title: 'Payments as infrastructure.', desc: 'On Ethereum, implementing x402 means custom contracts and unpredictable gas. Through txxt, every agent payment is a middleware operation — $0.0003, on any chain, no exceptions.', color: '#00C896', num: '01' },
            { letter: '8', word: 'ERC-8004 Native', title: 'Identity without overhead.', desc: 'On other chains, ERC-8004 requires a smart contract layer that adds latency and cost. Through txxt, every agent gets a verified identity at registration — instant, free, and chain-agnostic.', color: '#5B4FFF', num: '02' },
            { letter: '+', word: 'Atomic Integration', title: 'One transaction does both.', desc: 'Verify identity AND execute payment in a single atomic transaction. This is impossible when the protocols live on different layers. txxt\'s middleware makes it inevitable — on every chain.', color: '#FF3366', num: '03' },
            { letter: '→', word: 'The Result', title: 'Agent commerce at machine speed.', desc: 'Check identity → confirm capabilities → settle payment → update reputation. One atomic transaction. Under 10ms. Always $0.0003 in gas — regardless of the underlying chain.', color: '#FB923C', num: '04' },
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
                  fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.75,
                  margin: 0, maxWidth: '65ch',
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{ padding: '48px 24px clamp(80px, 12vh, 140px)', textAlign: 'center' }}>
          <p style={{
            fontSize: 14, color: '#666666', fontStyle: 'italic',
            fontFamily: mono, margin: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
          }}>
            &ldquo;x402 tells agents how to pay. ERC-8004 tells agents who to trust. txxt is the middleware layer where both work natively — on every blockchain.&rdquo;
          </p>
        </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — Three Pillars ===== */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ padding: '100px 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.1em', color: '#00C896',
            fontFamily: mono, marginBottom: 20, fontWeight: 700,
          }}>
            HOW IT WORKS
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
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.8, maxWidth: 400 }}>
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
              color: '#444444', lineHeight: 2, margin: 0,
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
              color: '#444444', lineHeight: 2, margin: 0,
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
            <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#00C896', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>REPUTATION</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Trust is earned<br />on-chain.
            </h3>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.8, maxWidth: 400 }}>
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
            <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#FB923C', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>VALIDATION</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
              Three layers.<br />Zero doubt.
            </h3>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.8, maxWidth: 400 }}>
              Before any agent-to-agent deal closes, three checks run: the agent checks itself, peers verify it, and the protocol confirms it. All in under 10ms.
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
              color: '#444444', lineHeight: 2, margin: 0,
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
        </div>
      </section>

      {/* ===== PROOF — Tokenless + Comparison ===== */}
      <section style={{
        textAlign: 'center',
        position: 'relative',
        background: '#F8F8F8',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 40% 50% at 50% 50%, rgba(251,146,60,0.04) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(120px, 18vh, 200px) 24px', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.12em', color: '#FB923C',
            fontFamily: mono, marginBottom: 24, fontWeight: 700,
          }}>
            THE PROOF
          </p>

          <h2 style={{
            fontSize: 'clamp(36px, 8vw, 96px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            margin: '0 0 32px 0',
            color: '#FB923C',
          }}>
            No token.<br />
            <span style={{ fontSize: '0.6em', color: '#00C896' }}>Stable gas.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#555555',
            lineHeight: 1.8,
            maxWidth: 560,
            margin: '0 auto 16px',
          }}>
            Other chains force you to hold a volatile native token to pay gas. When token prices spike, agent operating costs spike — breaking autonomous systems that can&apos;t predict costs.
          </p>

          <p style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            color: '#00C896',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 56px',
            fontWeight: 700,
            fontFamily: mono,
          }}>
            txxt gas: USDC/USDT. $0.0003 per tx. Always.
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
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              background: '#F0F0F0',
              borderBottom: '1px solid rgba(0,0,0,0.12)',
            }}>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#555555', fontWeight: 600, letterSpacing: '0.05em' }}></div>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#555555', fontWeight: 600, letterSpacing: '0.05em', textAlign: 'center' }}>Others</div>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#00C896', fontWeight: 700, letterSpacing: '0.05em', textAlign: 'center' }}>txxt</div>
            </div>
            {[
              { label: 'Gas fees', them: 'Volatile tokens', us: 'USDC stable' },
              { label: 'Cost', them: 'Can spike 100×', us: 'Always $0.0003' },
              { label: 'x402', them: 'Custom contracts', us: 'Native middleware' },
              { label: 'ERC-8004', them: 'Plugin/Contract', us: 'Native middleware' },
              { label: 'Atomic ID+pay', them: 'Impossible', us: 'Yes, <10ms' },
              { label: 'Governance', them: 'Token theater', us: 'Pure utility' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < 5 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                background: '#FFFFFF',
              }}>
                <div style={{ padding: '14px 20px', fontSize: 13, fontFamily: mono, color: '#0D0D0D', fontWeight: 600 }}>{row.label}</div>
                <div style={{ padding: '14px 20px', fontSize: 13, color: '#666666', textAlign: 'center' }}>
                  <XIcon size={14} />{' '}{row.them}
                </div>
                <div style={{ padding: '14px 20px', fontSize: 13, color: '#00C896', fontWeight: 600, textAlign: 'center' }}>
                  <CheckIcon size={14} />{' '}{row.us}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(80px, 10vw, 140px) 24px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          {/* Eyebrow */}
          <p style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#5B4FFF', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            INTEGRATIONS
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            txxt speaks every<br />agent language.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#444', lineHeight: 1.75, maxWidth: 600, marginBottom: 64 }}>
            Whether you&apos;re building with MCP, A2A, CLI, or raw SDK — txxt is the agent layer underneath. One middleware. Every protocol. Every chain.
          </p>

          {/* 연동 다이어그램 — 중앙 txxt 허브 + 주변 프로토콜 */}
          <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto 64px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* 중앙 txxt 노드 */}
            <div style={{
              position: 'absolute', zIndex: 2,
              width: 120, height: 120, borderRadius: '50%',
              background: '#00C896', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(0,200,150,0.3)',
            }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: '#fff', fontFamily: mono }}>txxt</span>
            </div>

            {/* 주변 프로토콜 노드 8개 */}
            {[
              { label: 'MCP', color: '#FF6B35', angle: 0, desc: 'Anthropic' },
              { label: 'A2A', color: '#4285F4', angle: 45, desc: 'Google' },
              { label: 'ACP', color: '#10A37F', angle: 90, desc: 'OpenAI' },
              { label: 'x402', color: '#00C896', angle: 135, desc: 'Payments' },
              { label: 'SDK', color: '#5B4FFF', angle: 180, desc: '@txxt/sdk' },
              { label: 'CLI', color: '#FB923C', angle: 225, desc: 'Terminal' },
              { label: 'REST', color: '#FF3366', angle: 270, desc: 'Universal' },
              { label: 'ERC-8004', color: '#5B4FFF', angle: 315, desc: 'Identity' },
            ].map(({ label, color, angle, desc }) => {
              const rad = (angle * Math.PI) / 180;
              const r = 260;
              const x = 50 + (r / 7) * Math.cos(rad);
              const y = 50 + (r / 7) * Math.sin(rad);
              return (
                <div key={label} style={{
                  position: 'absolute',
                  left: `${x}%`, top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: '#fff', border: `2px solid ${color}`,
                    display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 16px ${color}22`,
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color, fontFamily: mono }}>{label}</span>
                    <span style={{ fontSize: 9, color: '#888', marginTop: 2 }}>{desc}</span>
                  </div>
                </div>
              );
            })}

            {/* 연결선 SVG */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }} viewBox="0 0 100 100">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const r = 37;
                const x2 = 50 + r * Math.cos(rad);
                const y2 = 50 + r * Math.sin(rad);
                return (
                  <line key={angle} x1="50" y1="50" x2={x2} y2={y2}
                    stroke="rgba(0,200,150,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
                );
              })}
            </svg>
          </div>

          {/* Supported Chains */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 13, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
              WORKS ON TOP OF
            </p>
            <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' as const }}>
              {[
                { name: 'Ethereum', color: '#627EEA' },
                { name: 'Solana', color: '#9945FF' },
                { name: 'Base', color: '#0052FF' },
                { name: 'Polygon', color: '#8247E5' },
                { name: 'Arbitrum', color: '#28A0F0' },
                { name: 'More →', color: '#888' },
              ].map(chain => (
                <div key={chain.name} style={{
                  padding: '10px 20px', borderRadius: 10,
                  border: `1px solid ${chain.color}33`,
                  background: `${chain.color}08`,
                  fontSize: 14, fontWeight: 600, color: chain.color, fontFamily: mono,
                }}>
                  {chain.name}
                </div>
              ))}
            </div>
          </div>

          {/* 프로토콜 설명 그리드 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[
              { label: 'MCP', fullName: 'Model Context Protocol', by: 'Anthropic', desc: 'AI assistants like Claude connect directly to txxt as a tool. Register agents, send payments, verify identity — all from natural language.', color: '#FF6B35' },
              { label: 'A2A', fullName: 'Agent-to-Agent Protocol', by: 'Google', desc: 'Agents discover and communicate with other agents on txxt. Native handshakes, capability negotiation, and task delegation.', color: '#4285F4' },
              { label: 'CLI', fullName: 'Command Line Interface', by: 'txxt', desc: 'Deploy and manage agents from your terminal. txxt register, txxt pay, txxt identity — the fastest path from idea to deployed agent.', color: '#FB923C' },
              { label: 'SDK', fullName: '@txxt/sdk', by: 'txxt', desc: 'TypeScript-first SDK with full x402 and ERC-8004 support. One package. Every protocol. Python SDK coming Q2.', color: '#5B4FFF' },
              { label: 'REST', fullName: 'Universal REST API', by: 'txxt', desc: 'HTTP endpoints for any language or platform. If you can make an HTTP request, you can build on txxt.', color: '#FF3366' },
              { label: 'x402 + ERC-8004', fullName: 'Native Middleware Protocols', by: 'Built-in', desc: 'Not an add-on. Not a smart contract. Payment and identity live at the middleware layer — atomic, instant, chain-agnostic.', color: '#00C896' },
            ].map((item) => (
              <div key={item.label} style={{
                padding: 28, borderRadius: 16,
                background: '#F8F8F8',
                border: '1px solid rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: item.color, fontFamily: mono }}>{item.label}</span>
                  <span style={{ fontSize: 11, color: '#888', letterSpacing: '0.05em' }}>{item.by}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0D0D0D', marginBottom: 8 }}>{item.fullName}</div>
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AGENTSCRIPT — Code showcase ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(100px, 12vh, 160px) 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{
              fontSize: 13, letterSpacing: '0.1em', color: '#00C896',
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
              AgentScript is the native language of txxt. Discover, verify, pay, and update reputation — all first-class operations in one coherent syntax.
            </p>
            <p style={{
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              color: '#00C896',
              lineHeight: 1.6,
              maxWidth: 520,
              margin: 0,
              fontFamily: mono,
              fontWeight: 600,
            }}>
              x402 + ERC-8004 = native primitives. Not plugins. Not imports.
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
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: mono, marginLeft: 8 }}>
                travel_planner.agent
              </span>
              <span style={{ marginLeft: 'auto' }}><TerminalCursor /></span>
            </div>
            <div style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
              <pre style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', fontFamily: mono, lineHeight: 2, margin: 0, overflowX: 'auto' as const }}>
                <code>
                  <span style={{ color: '#5B4FFF' }}>agent</span>{' '}
                  <span style={{ color: '#00C896' }}>TravelPlanner</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// ERC-8004: on-chain identity auto-registered'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.75)' }}>identity:</span>{' '}
                  <span style={{ color: '#f59e0b' }}>&quot;txxt:0x1a2b...verified&quot;</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.75)' }}>reputation_minimum:</span>{' '}
                  <span style={{ color: '#00C896' }}>80</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// ERC-8004 score gate'}</span>{'\n'}
                  {'\n'}
                  {'  '}<span style={{ color: '#5B4FFF' }}>task</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>hire_flight_agent</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(destination)</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// ERC-8004: verify counterpart identity'}</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>agent</span>{' = '}
                  <span style={{ color: '#00C896' }}>discover</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>capability: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;flight_search&quot;</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>,</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>min_reputation: </span>
                  <span style={{ color: '#00C896' }}>85</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// ERC-8004 check'}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// x402: atomic payment — same tx as identity check'}</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>result</span>{' = '}
                  <span style={{ color: '#00C896' }}>delegate</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(agent, search(destination), </span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>payment: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;0.004 USDC&quot;</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// x402 native'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>gas: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;0.0003 USDC&quot;</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// always fixed'}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{'// x402 receipt + ERC-8004 reputation update'}</span>{'\n'}
                  {'    '}<span style={{ color: '#00C896' }}>rate</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(agent, score: </span>
                  <span style={{ color: '#00C896' }}>95</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>, proof: result.receipt)</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{
        padding: 'clamp(120px, 22vh, 280px) 24px',
        textAlign: 'center',
        position: 'relative',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(167,139,250,0.05) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1300, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(28px, 6vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: '0 0 16px 0',
            color: '#0D0D0D',
          }}>
            The agent layer for<br />
            <span style={{ color: '#00C896' }}>every</span> blockchain.
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#555555',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 48px',
            fontFamily: mono,
          }}>
            txxt doesn&apos;t replace your blockchain. It makes your blockchain agent-ready.
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
