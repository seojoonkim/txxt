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

/* ===== Layered Architecture Diagram (Card-based) ===== */
function LayeredArchDiagram() {
  const agents = [
    { label: 'TravelBot', color: '#5B4FFF' },
    { label: 'TradeAgent', color: '#FB923C' },
    { label: 'DataBot', color: '#FF3366' },
    { label: 'LegalAI', color: '#4285F4' },
    { label: 'SearchAgent', color: '#00C896' },
  ];
  const chains = [
    { label: 'Ethereum', color: '#627EEA' },
    { label: 'Solana', color: '#9945FF' },
    { label: 'Base', color: '#0052FF' },
    { label: 'Polygon', color: '#8247E5' },
    { label: 'Arbitrum', color: '#28A0F0' },
  ];
  const protocols = [
    { label: 'x402 Payments', color: '#00C896' },
    { label: 'ERC-8004 Identity', color: '#5B4FFF' },
    { label: 'PoAW Validation', color: '#FB923C' },
  ];

  const cardBase: React.CSSProperties = {
    borderRadius: 16,
    padding: 'clamp(20px, 3vw, 32px)',
    width: '100%',
    maxWidth: 640,
  };

  const pillBase: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 14px',
    borderRadius: 999,
    fontSize: 'clamp(11px, 1.4vw, 13px)',
    fontWeight: 600,
    fontFamily: mono,
    whiteSpace: 'nowrap' as const,
  };

  const ArrowConnector = () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
      <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
        <line x1="1" y1="0" x2="1" y2="24" stroke="#00C896" strokeWidth="1.5" strokeDasharray="4,3"/>
        <path d="M-4 22L1 28L6 22" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%' }}>
      {/* Layer 1: AI Agents */}
      <div style={{
        ...cardBase,
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <p style={{
          fontSize: 11, letterSpacing: '0.14em', fontWeight: 700,
          color: '#888', fontFamily: mono, margin: '0 0 14px',
          textTransform: 'uppercase', textAlign: 'center',
        }}>
          AI Agents Layer
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, justifyContent: 'center' }}>
          {agents.map(a => (
            <span key={a.label} style={{
              ...pillBase,
              background: `${a.color}0A`,
              border: `1px solid ${a.color}25`,
              color: a.color,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: a.color, flexShrink: 0,
              }} />
              {a.label}
            </span>
          ))}
        </div>
      </div>

      <ArrowConnector />

      {/* Layer 2: txxt Middleware (emphasized) */}
      <div style={{
        ...cardBase,
        background: '#FFFFFF',
        border: '2px solid #00C896',
        boxShadow: '0 0 0 4px rgba(0,200,150,0.08), 0 4px 16px rgba(0,200,150,0.1)',
        padding: 'clamp(24px, 3.5vw, 40px)',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, justifyContent: 'center' }}>
          <span style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 900,
            color: '#00C896', fontFamily: mono,
          }}>
            txxt
          </span>
          <span style={{
            fontSize: 11, letterSpacing: '0.14em', fontWeight: 700,
            color: '#888', fontFamily: mono, textTransform: 'uppercase',
          }}>
            Middleware Layer
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, justifyContent: 'center' }}>
          {protocols.map(p => (
            <span key={p.label} style={{
              ...pillBase,
              background: `${p.color}0F`,
              border: `1.5px solid ${p.color}40`,
              color: p.color,
              fontWeight: 700,
            }}>
              {p.label}
            </span>
          ))}
        </div>
        <p style={{
          fontSize: 12, color: 'rgba(0,0,0,0.4)', fontFamily: mono,
          margin: '14px 0 0', lineHeight: 1.6, textAlign: 'center',
        }}>
          Identity + Payment + Validation → one atomic transaction, any chain
        </p>
      </div>

      <ArrowConnector />

      {/* Layer 3: Settlement Chains */}
      <div style={{
        ...cardBase,
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <p style={{
          fontSize: 11, letterSpacing: '0.14em', fontWeight: 700,
          color: '#888', fontFamily: mono, margin: '0 0 14px',
          textTransform: 'uppercase', textAlign: 'center',
        }}>
          Settlement Chains
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, justifyContent: 'center' }}>
          {chains.map(c => (
            <span key={c.label} style={{
              ...pillBase,
              background: '#FFFFFF',
              border: `1.5px solid ${c.color}50`,
              color: c.color,
            }}>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [txCount, setTxCount] = useState(10000);
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
          padding: 'clamp(24px, 4vw, 60px) clamp(24px, 3vw, 48px) clamp(24px, 4vw, 60px) clamp(24px, 5vw, 80px)',
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
          <div style={{ maxWidth: 640, width: '100%', textAlign: 'center' as const }}>
            {/* Tagline — above logo */}
            <p style={{
              fontSize: 'clamp(16px, 3vw, 22px)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.5,
              color: '#555555',
              marginBottom: 16,
            }}>
              The internet runs on txt.<br />
              <span style={{ color: '#00C896' }}>The agent economy runs on <strong>txxt</strong>.</span>
            </p>

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
              }}>Build</Link>
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
              }}>Protocol</Link>
              <Link href="https://docs.txxt.network" target="_blank" style={{
                padding: '13px 0', borderRadius: 10,
                background: 'transparent',
                border: '1.5px solid rgba(0,200,150,0.3)',
                color: '#00C896', fontWeight: 500, fontSize: 'clamp(13px, 3.5vw, 16px)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                textAlign: 'center' as const,
                whiteSpace: 'nowrap' as const,
                flex: '1 1 0',
              }}>Docs</Link>
            </div>

            <div style={{
              display: 'flex', gap: 'clamp(12px, 4vw, 32px)', justifyContent: 'center', flexWrap: 'nowrap',
              marginTop: 40, paddingTop: 32,
              borderTop: '1px solid rgba(0,0,0,0.06)',
            }}>
              {[
                { value: '<10ms', label: 'Latency' },
                { value: '$0.0003', label: 'Per tx' },
                { value: '5+', label: 'Chains' },
                { value: '100%', label: 'USDC Gas' },
              ].map(({ value, label }) => (
                <div key={label} style={{ textAlign: 'center', flex: '1 1 0', minWidth: 0 }}>
                  <div style={{ fontSize: 'clamp(14px, 3.5vw, 26px)', fontWeight: 800, color: '#00C896', fontFamily: mono, whiteSpace: 'nowrap' }}>{value}</div>
                  <div style={{ fontSize: 'clamp(9px, 2vw, 12px)', color: '#888', letterSpacing: '0.06em', marginTop: 4, whiteSpace: 'nowrap' }}>{label}</div>
                </div>
              ))}
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
          <video src="/hero-video.mp4" autoPlay loop muted playsInline
            style={{ width: '100%', maxWidth: 520, height: 'auto', objectFit: 'contain', display: 'block' }} />
        </div>

        </div>
      </section>



      {/* ===== THE PROBLEM — Why agents need a middleware layer ===== */}
      <section style={{
        textAlign: 'center',
        position: 'relative',
        background: '#0D1117',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 70%)',
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
            color: '#FFFFFF',
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
              border: '1px solid rgba(0,200,150,0.2)',
              background: 'rgba(0,200,150,0.08)',
              textAlign: 'left' as const,
            }}>
              <div style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#00C896', letterSpacing: '0.08em', marginBottom: 12 }}>x402 PROTOCOL</div>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.3 }}>
                How agents pay each other.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                HTTP-native payments, any token, any amount, at machine speed. The spec exists — but no middleware unifies it across chains.
              </p>
            </div>

            <div style={{
              padding: 'clamp(24px, 3vw, 32px)',
              borderRadius: 14,
              border: '1px solid rgba(91,79,255,0.2)',
              background: 'rgba(91,79,255,0.08)',
              textAlign: 'left' as const,
            }}>
              <div style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#5B4FFF', letterSpacing: '0.08em', marginBottom: 12 }}>ERC-8004 STANDARD</div>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.3 }}>
                How agents prove who they are.
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                Verifiable identity, reputation, and capabilities on-chain. The spec exists — but every chain treats it as a plugin. txxt makes it native across all of them.
              </p>
            </div>
          </div>

          {/* The punchline */}
          <div style={{
            maxWidth: 700, margin: '0 auto',
            padding: '28px 32px',
            borderRadius: 14,
            background: 'rgba(229,62,62,0.08)',
            border: '1px solid rgba(229,62,62,0.15)',
          }}>
            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
              margin: 0,
            }}>
              <strong style={{ color: '#E53E3E' }}>The catch:</strong> when these protocols live on different layers, atomic transactions are impossible. You can&apos;t verify identity and settle payment in one step — unless a middleware layer unifies them across every chain.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — Layered Architecture ===== */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(80px, 10vw, 140px) 24px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <p style={{
            fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00C896',
            fontFamily: mono, marginBottom: 16, textTransform: 'uppercase', textAlign: 'center',
          }}>
            HOW IT WORKS
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: '#0D0D0D',
            textAlign: 'center', marginBottom: 16, letterSpacing: '-0.03em',
          }}>
            txxt sits between<br />agents and blockchains.
          </h2>
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#666666',
            textAlign: 'center', maxWidth: 560, margin: '0 auto 64px', lineHeight: 1.75,
          }}>
            Any agent. Any chain. txxt handles the identity, the payment, and the trust — so you don&apos;t have to.
          </p>
          <LayeredArchDiagram />
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
            { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><rect x="12" y="18" width="32" height="20" rx="4" stroke="white" strokeWidth="2.5"/><path d="M12 26h32" stroke="white" strokeWidth="2.5"/><rect x="16" y="30" width="8" height="3" rx="1.5" fill="white"/><rect x="27" y="30" width="5" height="3" rx="1.5" fill="white"/></svg>, word: 'x402 Native', title: 'Payments as infrastructure.', desc: 'On Ethereum, implementing x402 means custom contracts and unpredictable gas. Through txxt, every agent payment is a middleware operation — $0.0003, on any chain, no exceptions.', color: '#00C896', num: '01' },
            { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><circle cx="28" cy="21" r="7" stroke="white" strokeWidth="2.5"/><path d="M14 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>, word: 'ERC-8004 Native', title: 'Identity without overhead.', desc: 'On other chains, ERC-8004 requires a smart contract layer that adds latency and cost. Through txxt, every agent gets a verified identity at registration — instant, free, and chain-agnostic.', color: '#5B4FFF', num: '02' },
            { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><path d="M28 12L34 22H44L36 29L39 40L28 33L17 40L20 29L12 22H22L28 12Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/></svg>, word: 'Atomic Integration', title: 'One transaction does both.', desc: 'Verify identity AND execute payment in a single atomic transaction. This is impossible when the protocols live on different layers. txxt\'s middleware makes it inevitable — on every chain.', color: '#FF3366', num: '03' },
            { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><path d="M28 10L30.5 20H40L32.5 26L35 36L28 30.5L21 36L23.5 26L16 20H25.5L28 10Z" fill="white"/><circle cx="28" cy="46" r="2.5" fill="white"/></svg>, word: 'The Result', title: 'Agent commerce at machine speed.', desc: 'Check identity → confirm capabilities → settle payment → update reputation. One atomic transaction. Under 10ms. Always $0.0003 in gas — regardless of the underlying chain.', color: '#FB923C', num: '04' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 32,
              padding: '40px 0',
              borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              alignItems: 'flex-start',
            }}>
              <div style={{ flexShrink: 0 }}>
                {item.icon(item.color)}
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

      {/* ===== WHY TXXT — DIY vs txxt comparison + code ===== */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(80px, 10vw, 140px) 24px' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.15em', color: '#FF3366', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' as const, fontWeight: 700 }}>
            WHY TXXT
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            DIY agent infra<br />vs txxt middleware.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 580, marginBottom: 48 }}>
            You could wire up x402 adapters, deploy identity contracts, and build reputation oracles on every chain — or you could use the middleware layer that already does all of it.
          </p>

          {/* Comparison Table — vertical card per row */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 64 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ padding: '12px 20px', borderRadius: 10, background: '#F5F5F5', fontFamily: mono, fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                DIY Approach
              </div>
              <div style={{ padding: '12px 20px', borderRadius: 10, background: 'rgba(0,200,150,0.08)', fontFamily: mono, fontSize: 11, fontWeight: 700, color: '#00C896', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                With txxt
              </div>
            </div>
            {[
              { area: 'Agent Identity', diy: 'Build custom ERC-8004 contracts per chain', txxt: 'One SDK call — works on ETH, SOL, Base, Polygon', color: '#5B4FFF' },
              { area: 'Agent Payments', diy: 'Implement x402 adapters for each chain', txxt: 'txxt.pay() — settles on whichever chain you choose', color: '#00C896' },
              { area: 'Work Verification', diy: 'Roll your own oracle + reputation system', txxt: 'PoAW built-in — cross-chain work verification', color: '#FB923C' },
              { area: 'Multi-chain Support', diy: 'Separate deployments, separate state', txxt: 'One agent identity, portable across every chain', color: '#5B4FFF' },
              { area: 'Onboarding Time', diy: 'Weeks per chain integration', txxt: '< 5 minutes — any chain, any agent framework', color: '#FF3366' },
            ].map(row => (
              <div key={row.area} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {/* DIY */}
                <div style={{ padding: '20px', borderRadius: 12, background: '#FAFAFA', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontFamily: mono, color: row.color, fontWeight: 700, marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{row.area}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="8" cy="8" r="7" fill="#FEE2E2"/>
                      <path d="M5 5l6 6M11 5l-6 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#777', lineHeight: 1.6 }}>{row.diy}</span>
                  </div>
                </div>
                {/* txxt */}
                <div style={{ padding: '20px', borderRadius: 12, background: 'rgba(0,200,150,0.04)', border: '1px solid rgba(0,200,150,0.15)' }}>
                  <div style={{ fontSize: 11, fontFamily: mono, color: row.color, fontWeight: 700, marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{row.area}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="8" cy="8" r="7" fill="#D1FAE5"/>
                      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#1a1a1a', lineHeight: 1.6, fontWeight: 500 }}>{row.txxt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Code Comparison */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, letterSpacing: '0.15em', color: '#FB923C', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const, fontWeight: 700 }}>
              Code Comparison
            </p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 40 }}>
              100+ lines of glue code<br />vs 5 lines.
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 16 }}>
            {/* DIY */}
            <div style={{ borderRadius: 16, border: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <div style={{
                padding: '12px 20px', background: '#F0F0F0',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#666666' }}>DIY Multi-chain</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#FF3366', fontWeight: 600 }}>~100+ lines per chain</span>
              </div>
              <pre style={{
                padding: 20, margin: 0, fontFamily: mono,
                fontSize: 'clamp(11px, 1.2vw, 13px)', lineHeight: 1.65,
                color: '#444444', background: '#FAFAFA',
                overflow: 'auto', maxHeight: 400,
              }}>{`// DIY: agent payments across chains
import { ethers } from 'ethers';
import { Connection } from '@solana/web3.js';
import { PaymentChannel } from './custom-x402-adapter';
import { IdentityRegistry } from './custom-erc8004';

// 1. Deploy identity on Ethereum
const ethIdentity = await IdentityRegistry.deploy(
  ethProvider, agentMetadata
);
// 2. Deploy identity on Solana (different SDK!)
const solIdentity = await createSolanaIdentity(
  connection, agentKeypair, metadata
);
// 3. Build payment channel per chain
const ethPayment = await PaymentChannel.create(
  ethProvider, USDC_ETH, recipient
);
// 4. Route payments based on chain
// 5. Sync identity across chains
// ... 100+ lines of glue code per chain`}</pre>
            </div>

            {/* txxt */}
            <div style={{ borderRadius: 16, border: '2px solid #00C896', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,200,150,0.12)' }}>
              <div style={{
                padding: '12px 20px', background: 'rgba(0,200,150,0.06)',
                borderBottom: '1px solid rgba(0,200,150,0.15)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#00C896' }}>txxt Middleware</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#00C896', fontWeight: 600 }}>5 lines · any chain</span>
              </div>
              <div style={{ padding: 20, fontFamily: mono, fontSize: 'clamp(11px, 1.2vw, 13px)', lineHeight: 2, background: '#FFFFFF', overflow: 'auto' }}>
                <div style={{ color: '#94A3B8' }}>{'// txxt middleware: one layer for everything'}</div>
                <div><span style={{ color: '#5B4FFF' }}>import</span>{' '}<span style={{ color: '#0D0D0D' }}>{'{ txxt }'}</span>{' '}<span style={{ color: '#5B4FFF' }}>from</span>{' '}<span style={{ color: '#00C896' }}>{`'@txxt/sdk'`}</span>;</div>
                <div>&nbsp;</div>
                <div><span style={{ color: '#5B4FFF' }}>const</span>{' '}<span style={{ color: '#FB923C', fontWeight: 600 }}>agent</span>{' = '}<span style={{ color: '#0D0D0D' }}>txxt</span>.<span style={{ color: '#00C896', fontWeight: 600 }}>connect</span>{'({'}</div>
                <div>&nbsp;&nbsp;<span style={{ color: '#0D0D0D' }}>apiKey</span>: <span style={{ color: '#00C896' }}>API_KEY</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: '#0D0D0D' }}>chains</span>: [<span style={{ color: '#00C896' }}>{`'ethereum'`}</span>, <span style={{ color: '#00C896' }}>{`'solana'`}</span>, <span style={{ color: '#00C896' }}>{`'base'`}</span>]</div>
                <div>{'});'}</div>
                <div>&nbsp;</div>
                <div style={{ color: '#94A3B8' }}>{'// Identity — works on every chain'}</div>
                <div><span style={{ color: '#5B4FFF' }}>await</span>{' '}agent.<span style={{ color: '#00C896', fontWeight: 600 }}>register</span>{'({ capabilities: ['}<span style={{ color: '#00C896' }}>{`'translate'`}</span>{'] });'}</div>
                <div>&nbsp;</div>
                <div style={{ color: '#94A3B8' }}>{'// Payments — settles wherever you want'}</div>
                <div><span style={{ color: '#5B4FFF' }}>await</span>{' '}agent.<span style={{ color: '#00C896', fontWeight: 600 }}>pay</span>{'(url, '}<span style={{ color: '#00C896' }}>{`'$0.01'`}</span>{', { chain: '}<span style={{ color: '#00C896' }}>{`'base'`}</span>{' });'}</div>
                <div>&nbsp;</div>
                <div style={{ color: '#94A3B8' }}>{'// Done. One identity. Any chain. Any framework.'}</div>
              </div>
              <div style={{
                padding: '16px 20px', background: 'rgba(0,200,150,0.04)',
                borderTop: '1px solid rgba(0,200,150,0.1)',
                fontSize: 13, color: '#00C896', fontFamily: mono, fontWeight: 600,
              }}>
                One identity. One payment layer. Any chain underneath.
              </div>
            </div>
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

          {/* Gas Cost Simulator */}
          <div style={{
            maxWidth: 560, margin: '0 auto 40px',
            padding: '28px 32px',
            borderRadius: 14,
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <p style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 16 }}>GAS COST SIMULATOR</p>
            <input
              type="range"
              min={1000}
              max={1000000}
              step={1000}
              value={txCount}
              onChange={(e) => setTxCount(+e.target.value)}
              style={{ width: '100%', accentColor: '#00C896', marginBottom: 16 }}
            />
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', margin: '0 0 12px', fontFamily: mono }}>
              At <strong style={{ color: '#0D0D0D' }}>{txCount.toLocaleString()}</strong> transactions/month:
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: 8, background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.1)' }}>
                <div style={{ fontSize: 11, color: '#888', fontFamily: mono, marginBottom: 4 }}>Others</div>
                <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800, color: '#EF4444', fontFamily: mono }}>${(txCount * 0.05).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: 8, background: 'rgba(0,200,150,0.05)', border: '1px solid rgba(0,200,150,0.1)' }}>
                <div style={{ fontSize: 11, color: '#888', fontFamily: mono, marginBottom: 4 }}>txxt</div>
                <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800, color: '#00C896', fontFamily: mono }}>${(txCount * 0.0003).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#00C896', fontWeight: 700, fontFamily: mono, marginTop: 12, textAlign: 'center' }}>
              You save: ${((txCount * 0.05) - (txCount * 0.0003)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

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
                <div style={{ padding: '14px 20px', fontSize: 13, color: '#EF4444', textAlign: 'center' }}>
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
                    width: 92, height: 92, borderRadius: '50%',
                    background: '#FFFFFF', border: `2.5px solid ${color}`,
                    display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 4px 20px ${color}30, 0 0 0 6px #FFFFFF`,
                    position: 'relative', zIndex: 3,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color, fontFamily: mono }}>{label}</span>
                    <span style={{ fontSize: 11, color: '#666', marginTop: 3 }}>{desc}</span>
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



          {/* 프로토콜 설명 그리드 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {[
              { label: 'MCP', fullName: 'Model Context Protocol', by: 'Anthropic', desc: 'AI assistants like Claude connect directly to txxt as a tool. Register agents, send payments, verify identity — all from natural language.', color: '#FF6B35' },
              { label: 'A2A', fullName: 'Agent-to-Agent Protocol', by: 'Google', desc: 'Agents discover and communicate with other agents on txxt. Native handshakes, capability negotiation, and task delegation.', color: '#4285F4' },
              { label: 'ACP', fullName: 'Agent Communication Protocol', by: 'OpenAI', desc: 'Standardized agent messaging over txxt. Agents exchange structured tasks, results, and payment receipts through a shared protocol.', color: '#10A37F' },
              { label: 'ERC-8004', fullName: 'Agent Identity Standard', by: 'Built-in', desc: 'On-chain identity for every agent — portable across chains. One registration. Reputation follows the agent everywhere.', color: '#5B4FFF' },
              { label: 'x402', fullName: 'Agent Payment Protocol', by: 'Built-in', desc: 'HTTP-native payment protocol for agents. Pay per call, per result, or per task — settled on any chain for $0.0003.', color: '#00C896' },
              { label: 'CLI', fullName: 'Command Line Interface', by: 'txxt', desc: 'Deploy and manage agents from your terminal. txxt register, txxt pay, txxt identity — the fastest path from idea to deployed agent.', color: '#FB923C' },
              { label: 'SDK', fullName: '@txxt/sdk', by: 'txxt', desc: 'TypeScript-first SDK with full x402 and ERC-8004 support. One package. Every protocol. Python SDK coming Q2.', color: '#5B4FFF' },
              { label: 'REST', fullName: 'Universal REST API', by: 'txxt', desc: 'HTTP endpoints for any language or platform. If you can make an HTTP request, you can build on txxt.', color: '#FF3366' },
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

      {/* ===== LOGO MARQUEE ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '48px 0', overflow: 'hidden' }}>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <p style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, textAlign: 'center', marginBottom: 24, textTransform: 'uppercase' }}>
          BUILT WITH
        </p>
        <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} style={{ display: 'flex', gap: 16, paddingRight: 16 }}>
              {['Ethereum', 'Solana', 'Base', 'Polygon', 'Arbitrum', 'MCP', 'A2A', 'x402', 'ERC-8004', 'USDC', 'PoAW'].map((name) => (
                <span key={`${setIdx}-${name}`} style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: 999,
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.08)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#555',
                  fontFamily: mono,
                  whiteSpace: 'nowrap',
                }}>
                  {name}
                </span>
              ))}
            </div>
          ))}
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
              <button
                onClick={() => {
                  const code = `agent TravelPlanner {
  identity: "txxt:0x1a2b...verified"
  reputation_minimum: 80

  task hire_flight_agent(destination) {
    let agent = discover({
      capability: "flight_search",
      min_reputation: 85
    })

    let result = delegate(agent, search(destination), {
      payment: "0.004 USDC",
      gas: "0.0003 USDC"
    })

    rate(agent, score: 95, proof: result.receipt)
  }
}`;
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                style={{
                  marginLeft: 'auto',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '4px 10px',
                  color: copied ? '#00C896' : 'rgba(255,255,255,0.5)',
                  fontSize: 12,
                  fontFamily: mono,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
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
