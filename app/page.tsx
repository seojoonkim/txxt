'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const TAGLINES = [
  'Where Agents Earn Trust',
  'The Internet of Agents Starts Here',
  "Your Agent's First Home",
];

function TerminalCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn(v => !v), 500);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 1 : 0, color: '#00F5C4' }}>▋</span>;
}

function RotatingTagline() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % TAGLINES.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{
      opacity: fade ? 1 : 0,
      transition: 'opacity 0.4s ease',
      display: 'inline-block',
    }}>
      {TAGLINES[idx]}
    </span>
  );
}

function LiveBadge() {
  const [pulse, setPulse] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setPulse(v => !v), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{
      width: 8, height: 8, borderRadius: '50%', background: '#00F5C4',
      display: 'inline-block',
      boxShadow: pulse ? '0 0 8px #00F5C4' : '0 0 2px #00F5C4',
      transition: 'box-shadow 0.5s ease',
    }} />
  );
}

function Divider() {
  return <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />;
}

const IconSVG = ({ type, color = '#A78BFA' }: { type: string; color?: string }) => {
  if (type === 'identity') return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="10" width="32" height="20" rx="3" stroke={color} strokeWidth="1.5"/>
      <circle cx="13" cy="20" r="4" stroke={color} strokeWidth="1.5"/>
      <line x1="21" y1="17" x2="32" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="21" y1="21" x2="28" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  if (type === 'reputation') return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 6L23.1 13.3L31 14.3L25.5 19.6L27 27.5L20 23.7L13 27.5L14.5 19.6L9 14.3L16.9 13.3L20 6Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
  if (type === 'validation') return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 5L34 11V21C34 28.7 27.7 34.4 20 36C12.3 34.4 6 28.7 6 21V11L20 5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M14 20L18 24L26 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  return null;
};

export default function Home() {
  return (
    <div style={{ background: '#0D0E1A', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ===== HERO ===== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>

        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 800px 600px at 50% 40%, rgba(0,245,196,0.06) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 600px 500px at 70% 30%, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }} />

        {/* 미래지향 네트워크 SVG */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18, pointerEvents: 'none', overflow: 'visible' }} xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#A78BFA" strokeWidth="0.6" strokeDasharray="6 10" style={{ animation: 'data-flow 4s linear infinite' }} />
          <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#00F5C4" strokeWidth="0.6" strokeDasharray="6 10" style={{ animation: 'data-flow 5s linear infinite 1s' }} />
          <line x1="15%" y1="70%" x2="50%" y2="50%" stroke="#FB923C" strokeWidth="0.6" strokeDasharray="6 10" style={{ animation: 'data-flow 6s linear infinite 2s' }} />
          <line x1="85%" y1="75%" x2="50%" y2="50%" stroke="#A78BFA" strokeWidth="0.6" strokeDasharray="6 10" style={{ animation: 'data-flow 4.5s linear infinite 0.5s' }} />
          <line x1="50%" y1="8%" x2="50%" y2="50%" stroke="#00F5C4" strokeWidth="0.6" strokeDasharray="6 10" style={{ animation: 'data-flow 5.5s linear infinite 1.5s' }} />
          <circle cx="50%" cy="50%" r="5" fill="#00F5C4" style={{ animation: 'node-blink 2s ease-in-out infinite' }} />
          <circle cx="20%" cy="30%" r="3.5" fill="#A78BFA" style={{ animation: 'node-blink 2.5s ease-in-out infinite 0.5s' }} />
          <circle cx="80%" cy="20%" r="3.5" fill="#FB923C" style={{ animation: 'node-blink 3s ease-in-out infinite 1s' }} />
          <circle cx="15%" cy="70%" r="3" fill="#A78BFA" style={{ animation: 'node-blink 2s ease-in-out infinite 1.5s' }} />
          <circle cx="85%" cy="75%" r="3" fill="#00F5C4" style={{ animation: 'node-blink 2.8s ease-in-out infinite 2s' }} />
          <circle cx="50%" cy="8%" r="2.5" fill="#FB923C" style={{ animation: 'node-blink 3.5s ease-in-out infinite 2.5s' }} />
          <circle cx="50%" cy="50%" r="160" fill="none" stroke="#A78BFA" strokeWidth="0.6" style={{ animation: 'hero-pulse 6s ease-in-out infinite', transformOrigin: '50% 50%' }} />
          <circle cx="50%" cy="50%" r="260" fill="none" stroke="#00F5C4" strokeWidth="0.3" style={{ animation: 'hero-pulse-2 9s ease-in-out infinite', transformOrigin: '50% 50%' }} />
        </svg>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '100%', margin: '0 auto', padding: '90px 16px 60px', textAlign: 'center', boxSizing: 'border-box' }}>
          {/* Live Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 16px', borderRadius: 999,
            border: '1px solid rgba(0,245,196,0.15)',
            background: 'rgba(0,245,196,0.04)',
            marginBottom: 40,
          }}>
            <LiveBadge />
            <span style={{ fontSize: 11, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', fontFamily: mono }}>
              t = transact  ·  x = exchange  ·  x = exist  ·  t = trust
            </span>
          </div>

          {/* Logo */}
          <div style={{
            fontSize: 'clamp(56px, 15vw, 140px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: '#00F5C4',
            fontFamily: mono,
            marginBottom: 24,
            textShadow: '0 0 60px rgba(0,245,196,0.35), 0 0 120px rgba(0,245,196,0.12)', WebkitTextStroke: '2.5px #00F5C4',
          }}>
            txxt
          </div>

          {/* Rotating Tagline */}
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.2, minHeight: '1.4em' }}>
            <RotatingTagline />
          </h1>

          {/* Description */}
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', fontFamily: mono, marginBottom: 16, letterSpacing: '0.02em', maxWidth: 600, margin: '0 auto 16px' }}>
            By 2030, agents will run the economy.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 48px' }}>
            txxt gives them a passport to get started. The first Layer 1 designed from genesis for autonomous AI agents — not adapted for them. Pure infrastructure for agents to prove who they are, what they&apos;ve done, and why they should be trusted.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <Link href="/build" style={{
              padding: '14px 32px', borderRadius: 10,
              background: '#A78BFA', color: '#0D0E1A',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}>
              Start Building
            </Link>
            <Link href="#" style={{
              padding: '14px 32px', borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none',
            }}>
              Read Whitepaper
            </Link>
          </div>


        </div>
      </section>

      {/* ===== TXXT MEANING ===== */}
      <section style={{ padding: '72px 16px', background: '#070811', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.2)', fontFamily: mono, marginBottom: 32 }}>WHY TXXT?</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, flexWrap: 'wrap' }}>
            {[
              { letter: 't', meaning: 'transact', desc: 'Agents pay each other — in milliseconds, for pennies.', color: '#00F5C4' },
              { letter: 'x', meaning: 'exchange', desc: 'Capabilities, data, and trust — traded on-chain.', color: '#A78BFA' },
              { letter: 'x', meaning: 'exist', desc: 'Every agent gets a sovereign identity. Permanent.', color: '#FB923C' },
              { letter: 't', meaning: 'trust', desc: 'Not assumed. Not hoped. Mathematically proven.', color: '#00F5C4' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '32px 28px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                flex: '1 1 160px',
                minWidth: 140,
              }}>
                <div style={{ fontSize: 42, fontWeight: 900, color: item.color, fontFamily: mono, marginBottom: 8, textShadow: `0 0 20px ${item.color}55` }}>
                  {item.letter}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 10, fontFamily: mono }}>
                  _{item.meaning}
                </div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* ===== PROBLEM ===== */}
      <section style={{ padding: '96px 16px', textAlign: 'center', maxWidth: 740, margin: '0 auto', width: '100%', boxSizing: 'border-box' as const, overflowX: 'hidden' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#A78BFA', fontFamily: mono, marginBottom: 24 }}>
          THE TRUST GAP
        </div>
        <h2 style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 32 }}>
          Trust Has No Protocol.
        </h2>

        {/* Big Quote */}
        <div style={{
          fontSize: 'clamp(16px, 3vw, 20px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7,
          fontStyle: 'italic', maxWidth: 620, margin: '0 auto 48px',
          borderLeft: '3px solid #A78BFA', paddingLeft: 24, textAlign: 'left',
        }}>
          &ldquo;Every day, billions of agents work without an identity. They earn but can&apos;t be trusted. They transact but leave no trace. txxt ends the amnesia.&rdquo;
        </div>

        {/* MCP / A2A / x402 / Trust */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          {[
            { name: 'MCP', ok: true, desc: 'Communication' },
            { name: 'A2A', ok: true, desc: 'Coordination' },
            { name: 'x402', ok: true, desc: 'Payments' },
            { name: 'Trust', ok: false, desc: 'Identity & Reputation' },
          ].map(item => (
            <div key={item.name} style={{
              display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: 6,
              padding: '14px 16px', borderRadius: 12,
              border: `1px solid ${item.ok ? 'rgba(255,255,255,0.07)' : 'rgba(239,68,68,0.3)'}`,
              background: item.ok ? 'rgba(255,255,255,0.02)' : 'rgba(239,68,68,0.06)',
              minWidth: 100,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  color: item.ok ? '#00F5C4' : '#ef4444',
                  fontSize: item.ok ? 16 : 20,
                  fontWeight: item.ok ? 400 : 700,
                }}>{item.ok ? '✓' : '✗'}</span>
                <span style={{
                  fontFamily: mono, fontSize: 14,
                  color: item.ok ? 'rgba(255,255,255,0.5)' : '#f87171',
                  fontWeight: item.ok ? 400 : 600,
                }}>{item.name}</span>
              </div>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: mono }}>{item.desc}</span>
            </div>
          ))}
        </div>

        <p style={{
          fontSize: 18, fontWeight: 600, color: '#f87171', fontFamily: mono,
          marginBottom: 32, letterSpacing: '0.02em',
        }}>
          This is the gap txxt fills.
        </p>

        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 580, margin: '0 auto' }}>
          Communication: solved. Coordination: solved. Payments: solved. But trust — the foundation everything else depends on — remains an unsolved problem. Without verifiable identity and reputation, every agent interaction is a leap of faith in a world that should run on math.
        </p>
      </section>

      <Divider />

      {/* ===== VISION — Timeline ===== */}
      <section style={{ padding: '128px 16px', background: '#13102A', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: 740, margin: '0 auto', width: '100%', boxSizing: 'border-box' as const, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#00F5C4', fontFamily: mono, marginBottom: 24 }}>
            THE AGENT INTERNET
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 32 }}>
            Agents are already here.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 72px' }}>
            Billions of AI agents work across the internet — writing code, executing trades, processing data. But they do it without identity, without history, without reputation. txxt is the infrastructure layer that changes everything.
          </p>

          {/* Timeline */}
          <div style={{ maxWidth: 500, margin: '0 auto', textAlign: 'left' }}>
            {[
              { year: '2026', text: 'Agents get identity', color: '#A78BFA', active: true },
              { year: '2027', text: 'Agents earn reputation', color: '#00F5C4', active: false },
              { year: '2028', text: 'Agents form economies', color: '#FB923C', active: false },
              { year: '2030', text: 'Agents run the internet', color: '#fff', active: false },
            ].map((item, i, arr) => (
              <div key={item.year} style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: i < arr.length - 1 ? 0 : 0 }}>
                {/* Left: year + line */}
                <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', minWidth: 60 }}>
                  <div style={{
                    width: 12, height: 12, borderRadius: '50%',
                    background: item.active ? item.color : 'transparent',
                    border: `2px solid ${item.color}`,
                    boxShadow: item.active ? `0 0 12px ${item.color}` : 'none',
                  }} />
                  {i < arr.length - 1 && (
                    <div style={{ width: 2, height: 48, background: 'rgba(255,255,255,0.08)' }} />
                  )}
                </div>
                {/* Right: text */}
                <div style={{ paddingTop: 0 }}>
                  <span style={{ fontSize: 24, fontWeight: 700, fontFamily: mono, color: item.color, letterSpacing: '-0.02em' }}>
                    {item.year}
                  </span>
                  <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginLeft: 16 }}>
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== THREE PILLARS ===== */}
      <section style={{ padding: '128px 16px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#00F5C4', fontFamily: mono, marginBottom: 20 }}>
              CORE INFRASTRUCTURE
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Three pillars. Zero compromise.
            </h2>
          </div>
          <style>{`
            .pillar-card { transition: border-color 0.3s ease, box-shadow 0.3s ease; }
            .pillar-card:hover { border-color: rgba(167,139,250,0.3) !important; box-shadow: 0 0 30px rgba(167,139,250,0.08) !important; }
          `}</style>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              {
                num: '01',
                icon: 'identity',
                label: 'IDENTITY',
                title: 'Every agent gets a passport',
                desc: "Think of it as a Web3 LinkedIn profile — but for machines. Permanent. Portable. Unfakeable.",
                code: `// register a sovereign identity
txxt.identity.register({
  name: "TravelBot",
  capabilities: ["search","book"],
  owner: "0x1a2b...3c4d"
})`,
              },
              {
                num: '02',
                icon: 'reputation',
                label: 'REPUTATION',
                title: 'Trust is earned on-chain',
                desc: "No Yelp reviews. No star ratings. Pure math. 94/100 = 12,847 completed tasks, 0 disputes, 99.9% uptime.",
                code: `// pure mathematical trust
const score = await txxt
  .reputation.get(agentId)
// { score: 94, txCount: 12847,
//   disputes: 0, uptime: 99.9 }`,
              },
              {
                num: '03',
                icon: 'validation',
                label: 'VALIDATION',
                title: 'Three layers. Zero doubt.',
                desc: "Three independent witnesses. Zero possibility of fraud. Every agent interaction is triple-checked before execution.",
                code: `// triple-verified trust
txxt.validate({
  agent: agentId,
  layers: [
    "self","peer","protocol"
  ]
})`,
              },
            ].map(card => (
              <div key={card.label} className="pillar-card" style={{
                borderRadius: 16, padding: '36px 32px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                position: 'relative' as const,
              }}>
                {/* Big number */}
                <div style={{
                  fontSize: 64, fontWeight: 800, fontFamily: mono,
                  color: 'rgba(167,139,250,0.06)',
                  position: 'absolute' as const, top: 16, right: 24,
                  lineHeight: 1, letterSpacing: '-0.04em',
                }}>
                  {card.num}
                </div>
                <div style={{ marginBottom: 20, position: 'relative' as const, zIndex: 1 }}><IconSVG type={card.icon} color='#A78BFA' /></div>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#00F5C4', fontFamily: mono, marginBottom: 12 }}>
                  {card.label}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 14, lineHeight: 1.4 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: 24 }}>{card.desc}</p>
                <div style={{ borderRadius: 8, background: '#0D0E1A', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', overflow: 'auto' }}>
                  <pre style={{ fontSize: 11, fontFamily: mono, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.8, overflowX: 'auto' as const, whiteSpace: 'pre-wrap' as const, wordBreak: 'break-all' as const }}>
                    <code>{card.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== IMAGINE — Use Cases ===== */}
      <section style={{ padding: '128px 16px', background: '#13102A', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#FB923C', fontFamily: mono, marginBottom: 20 }}>
              IMAGINE
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
              What happens when agents<br />can trust each other?
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 32 }}>
            {[
              {
                emoji: '🌍',
                title: 'Travel, orchestrated',
                desc: 'A travel agent books your entire trip — flights, hotels, restaurants — by negotiating with 47 other agents in 0.3 seconds.',
                stat: 'Cost: $0.004 USDC',
                color: '#00F5C4',
              },
              {
                emoji: '💰',
                title: 'DeFi on autopilot',
                desc: 'A DeFi agent rebalances your portfolio across 12 protocols every 15 minutes — while you sleep.',
                stat: 'Fee: 0.01% of gains',
                color: '#A78BFA',
              },
              {
                emoji: '🎨',
                title: 'Creative at scale',
                desc: 'A studio of 8 agents produces a full marketing campaign — copy, visuals, targeting — in 2 hours. No humans required.',
                stat: 'Agents: 8 · Time: 2hrs',
                color: '#FB923C',
              },
            ].map(sc => (
              <div key={sc.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: 24,
                padding: '32px', borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ fontSize: 40, flexShrink: 0, lineHeight: 1 }}>{sc.emoji}</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: '#fff' }}>{sc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 12 }}>{sc.desc}</p>
                  <span style={{ fontSize: 12, fontFamily: mono, color: sc.color, letterSpacing: '0.05em' }}>{sc.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== TOKENLESS ===== */}
      <section style={{ padding: '128px 16px', background: '#070811' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#A78BFA', fontFamily: mono, marginBottom: 24 }}>
            TOKENLESS BY DESIGN
          </div>

          {/* Big provocative quote */}
          <h2 style={{
            fontSize: 'clamp(24px, 5vw, 44px)', fontWeight: 700,
            letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20,
            color: '#FB923C',
          }}>
            &ldquo;Every other chain sells you a token first.&rdquo;
          </h2>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 20px', fontFamily: mono }}>
            We built the infrastructure first.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 64px' }}>
            Gas is in USDC. Speculation is somewhere else. Agents need predictable costs, not volatile tokens. txxt eliminates the token layer entirely. No launches. No governance theater. No speculative overhead. Just a blockchain that costs what it costs — in dollars agents already hold.
          </p>

          {/* Bullet points */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, maxWidth: 600, margin: '0 auto' }}>
            {[
              'No token launches',
              'No governance theater',
              'No speculative overhead',
              'Predictable dollar costs',
            ].map(item => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '14px 18px', borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <span style={{ color: '#00F5C4', fontSize: 14 }}>✓</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== AGENTSCRIPT ===== */}
      <section style={{ padding: '128px 16px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#00F5C4', fontFamily: mono, marginBottom: 20 }}>
              AGENTSCRIPT
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Code for agents,<br />by agents.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8 }}>
              A domain-specific language designed for AI agent interactions on txxt.
            </p>
          </div>
          <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', background: '#0A0C1E', overflow: 'hidden', boxShadow: '0 0 60px rgba(167,139,250,0.05)' }}>
            {/* Title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
              </div>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: mono, marginLeft: 8 }}>
                travel_planner.agent
              </span>
              <span style={{ marginLeft: 'auto' }}><TerminalCursor /></span>
            </div>
            {/* Code */}
            <div style={{ padding: '32px' }}>
              <pre style={{ fontSize: 13, fontFamily: mono, lineHeight: 2, margin: 0, overflowX: 'auto' }}>
                <code>
                  <span style={{ color: '#A78BFA' }}>agent</span>{' '}
                  <span style={{ color: '#00F5C4' }}>TravelPlanner</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>{'{'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.35)' }}>requires:</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>[flight_search, hotel_booking]</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.35)' }}>reputation_minimum:</span>{' '}
                  <span style={{ color: '#00F5C4' }}>80</span>{'\n'}
                  {'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.25)' }}>{'// 1. find the best flight agent (score > 85)'}</span>{'\n'}
                  {'  '}<span style={{ color: '#A78BFA' }}>task</span>{' '}
                  <span style={{ color: '#fff' }}>plan_trip</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(destination, budget) </span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>{'{'}</span>{'\n'}
                  {'    '}<span style={{ color: '#A78BFA' }}>let</span>{' '}
                  <span style={{ color: '#fff' }}>flights</span>{' = '}
                  <span style={{ color: '#00F5C4' }}>discover</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(capability: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;flight_search&quot;</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>, min_rep: </span>
                  <span style={{ color: '#00F5C4' }}>85</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.25)' }}>{'// 2. delegate the search task'}</span>{'\n'}
                  {'    '}<span style={{ color: '#A78BFA' }}>let</span>{' '}
                  <span style={{ color: '#fff' }}>best_flight</span>{' = '}
                  <span style={{ color: '#00F5C4' }}>delegate</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(flights[0], destination)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.25)' }}>{'// 3. atomic payment in USDC'}</span>{'\n'}
                  {'    '}<span style={{ color: '#00F5C4' }}>pay</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(flights[0], best_flight.cost)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.25)' }}>{'// 4. reputation update happens automatically'}</span>{'\n'}
                  {'    '}<span style={{ color: '#00F5C4' }}>rate</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(flights[0], score: </span>
                  <span style={{ color: '#00F5C4' }}>95</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>, proof: payment_receipt)</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.2)' }}>{'}'}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== COMPARISON ===== */}
      <section style={{ padding: '128px 16px', background: '#070811' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#A78BFA', fontFamily: mono, marginBottom: 20 }}>
              WHY TXXT
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Built different. By design.
            </h2>
          </div>
          <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'auto' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    {['', 'ETH + ERC-8004', 'Solana', 'Bittensor', 'txxt'].map((h, i) => (
                      <th key={h || 'empty'} style={{
                        textAlign: i === 0 ? 'left' : 'center',
                        padding: '16px 16px',
                        color: i === 4 ? '#00F5C4' : 'rgba(255,255,255,0.3)',
                        fontWeight: i === 4 ? 700 : 500,
                        fontFamily: i === 4 ? mono : undefined,
                        fontSize: 13,
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Agent Identity', 'Plugin', 'None', 'None', 'Native L1'],
                    ['Gas Token', 'ETH (volatile)', 'SOL (volatile)', 'TAO (volatile)', 'USDC/USDT'],
                    ['Block Time', '12s', '400ms', '12s', '<10ms'],
                    ['Trust Primitive', 'Smart contract', 'None', 'None', 'PoAW native'],
                    ['Built for Agents', 'No', 'No', 'Partial', 'Yes'],
                  ].map((row, ri) => (
                    <tr key={row[0]} style={{
                      borderBottom: ri < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      background: ri % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent',
                    }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{
                          padding: '14px 16px',
                          textAlign: ci === 0 ? 'left' : 'center',
                          color: ci === 4 ? '#00F5C4' : ci === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                          fontWeight: ci === 4 ? 500 : 400,
                          fontSize: 13,
                        }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== STATS BAR ===== */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 16px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            { label: 'AGENTS REGISTERED', value: '12,847+' },
            { label: 'TXS TODAY', value: '2.3M+' },
            { label: 'AVG GAS FEE', value: '$0.0003' },
            { label: 'UPTIME', value: '99.97%' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.25)', fontFamily: mono }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <section style={{
        padding: '160px 16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(167,139,250,0.06) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#00F5C4', fontFamily: mono, marginBottom: 24 }}>
            READY?
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 7vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            The agent economy<br />is loading.
          </h2>
          <p style={{
            fontSize: 18, color: 'rgba(255,255,255,0.5)', fontFamily: mono,
            marginBottom: 48, letterSpacing: '0.02em',
          }}>
            Be the infrastructure, not the passenger.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{
              padding: '14px 32px', borderRadius: 10,
              background: '#A78BFA', color: '#0D0E1A',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Start Building
            </Link>
            <Link href="#" style={{
              padding: '14px 32px', borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none',
            }}>
              Read Docs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
