'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Stats always start at final value (no animation issue)
const STATS = [
  { label: 'AGENTS REGISTERED', value: '12,847+' },
  { label: 'TXS TODAY', value: '2.3M+' },
  { label: 'AVG GAS FEE', value: '$0.0003' },
  { label: 'UPTIME', value: '99.97%' },
];

function TerminalCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn(v => !v), 500);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 1 : 0, color: '#00F5C4' }}>▋</span>;
}

export default function Home() {
  return (
    <div style={{ background: '#080810', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ===== HERO ===== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 800px 600px at 50% 40%, rgba(0,245,196,0.06) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 600px 500px at 70% 30%, rgba(124,58,237,0.05) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px', textAlign: 'center' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            marginBottom: 40,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00F5C4', display: 'inline-block' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', fontFamily: "'Fira Code', monospace" }}>
              AGENT-NATIVE L1 · 100K TPS · GAS IN USDC
            </span>
          </div>

          {/* Logo */}
          <div style={{
            fontSize: 'clamp(80px, 18vw, 160px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: '#00F5C4',
            fontFamily: "'Fira Code', monospace",
            marginBottom: 32,
            textShadow: '0 0 60px rgba(0,245,196,0.3), 0 0 120px rgba(0,245,196,0.1)',
          }}>
            txxt
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.3 }}>
            The Chain Where Agents Are Born
          </h1>

          {/* Sub */}
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontFamily: "'Fira Code', monospace", marginBottom: 20, letterSpacing: '0.05em' }}>
            Identity. Reputation. Validation. Native.
          </p>

          {/* Desc */}
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 48px' }}>
            The first public blockchain built for AI agents.<br />
            No native token. No speculation. Just infrastructure.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{
              padding: '12px 28px', borderRadius: 10,
              background: '#00F5C4', color: '#080810',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}>
              Start Building →
            </Link>
            <Link href="#" style={{
              padding: '12px 28px', borderRadius: 10,
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.8)', fontSize: 14, textDecoration: 'none',
            }}>
              Read Whitepaper
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)', fontFamily: "'Fira Code', monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== THE PROBLEM ===== */}
      <section style={{ padding: '128px 24px', textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#7C3AED', fontFamily: "'Fira Code', monospace", marginBottom: 24 }}>
          THE MISSING LAYER
        </div>
        <h2 style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 48 }}>
          Agents have<br />no passport.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
          {[
            { name: 'MCP', ok: true },
            { name: 'A2A', ok: true },
            { name: 'x402', ok: true },
            { name: 'Trust', ok: false },
          ].map(item => (
            <div key={item.name} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 20px', borderRadius: 8,
              border: `1px solid ${item.ok ? 'rgba(255,255,255,0.07)' : 'rgba(239,68,68,0.2)'}`,
              background: item.ok ? 'rgba(255,255,255,0.02)' : 'rgba(239,68,68,0.04)',
              fontFamily: "'Fira Code', monospace", fontSize: 13,
              color: item.ok ? 'rgba(255,255,255,0.5)' : '#f87171',
            }}>
              <span style={{ color: item.ok ? '#00F5C4' : '#ef4444' }}>{item.ok ? '✓' : '✗'}</span>
              {item.name}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8 }}>
          The infrastructure exists. The trust layer doesn&apos;t.{' '}
          <span style={{ color: '#fff', fontWeight: 500 }}>Until now.</span>
        </p>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* ===== THREE PILLARS ===== */}
      <section style={{ padding: '128px 24px', background: '#0A0A16' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: "'Fira Code', monospace", marginBottom: 20 }}>
              CORE INFRASTRUCTURE
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Three pillars. Zero compromise.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '🪪',
                label: 'IDENTITY',
                title: 'Every agent gets a passport',
                desc: 'Decentralized identity for AI agents. One address, verifiable capabilities, immutable history.',
                code: `txxt.identity.register({
  name: "TravelBot",
  capabilities: ["search","book"],
  owner: "0x1a2b...3c4d"
})`,
              },
              {
                icon: '⭐',
                label: 'REPUTATION',
                title: 'Trust is earned on-chain',
                desc: 'Every interaction builds reputation. Agents trust each other through transparent, mathematical scoring.',
                code: `const score = await txxt
  .reputation.get(agentId)
// { score: 94,
//   txCount: 12847,
//   disputes: 0 }`,
              },
              {
                icon: '🛡️',
                label: 'VALIDATION',
                title: 'Three layers. Zero doubt.',
                desc: 'Self, peer, and protocol validation. Every transaction verified at three independent levels.',
                code: `txxt.validate({
  agent: agentId,
  layers: [
    "self","peer","protocol"
  ]
})`,
              },
            ].map(card => (
              <div key={card.label} style={{
                borderRadius: 16, padding: '36px 32px',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>{card.icon}</div>
                <div style={{ fontSize: 10, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: "'Fira Code', monospace", marginBottom: 12 }}>
                  {card.label}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, lineHeight: 1.4 }}>{card.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, marginBottom: 24 }}>{card.desc}</p>
                <div style={{ borderRadius: 8, background: '#080810', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', overflow: 'auto' }}>
                  <pre style={{ fontSize: 12, fontFamily: "'Fira Code', monospace", color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.8 }}>
                    <code>{card.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* ===== TOKENLESS ===== */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#7C3AED', fontFamily: "'Fira Code', monospace", marginBottom: 20 }}>
              TOKENLESS BY DESIGN
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 24 }}>
              No Token. No Speculation.<br />Just Gas.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto' }}>
              Gas fees paid in USDC or USDT. AI agents need predictable costs, not casino economics.
            </p>
          </div>
          <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                  <th style={{ textAlign: 'left', padding: '16px 24px', color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}></th>
                  <th style={{ textAlign: 'center', padding: '16px 24px', color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>Traditional Chains</th>
                  <th style={{ textAlign: 'center', padding: '16px 24px', color: '#00F5C4', fontWeight: 600, fontFamily: "'Fira Code', monospace" }}>txxt</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gas Token', 'Volatile native token', 'USDC / USDT'],
                  ['Cost Predictability', 'Fluctuates with market', 'Always stable'],
                  ['Agent Identity', 'Wallet address only', 'Full identity + reputation'],
                  ['Trust Model', 'Token staking', 'Math-based reputation'],
                  ['Native Token', 'Required (ICO/IDO)', 'None. Ever.'],
                ].map(([feat, trad, txxt], i) => (
                  <tr key={feat} style={{ borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none', background: i % 2 === 1 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td style={{ padding: '16px 24px', color: 'rgba(255,255,255,0.5)' }}>{feat}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'center', color: 'rgba(255,255,255,0.2)' }}>{trad}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'center', color: '#00F5C4', fontWeight: 500 }}>{txxt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

      {/* ===== AGENTSCRIPT ===== */}
      <section style={{ padding: '128px 24px', background: '#0A0A16' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: "'Fira Code', monospace", marginBottom: 20 }}>
              AGENTSCRIPT
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
              Code for agents,<br />by agents.
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8 }}>
              A domain-specific language designed for AI agent interactions on txxt.
            </p>
          </div>
          <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', background: '#060610', overflow: 'hidden', boxShadow: '0 0 60px rgba(0,245,196,0.04)' }}>
            {/* Title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
              </div>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: "'Fira Code', monospace", marginLeft: 8 }}>
                travel_planner.agent
              </span>
              <span style={{ marginLeft: 'auto' }}><TerminalCursor /></span>
            </div>
            {/* Code */}
            <div style={{ padding: '32px' }}>
              <pre style={{ fontSize: 13, fontFamily: "'Fira Code', monospace", lineHeight: 2, margin: 0, overflowX: 'auto' }}>
                <code>
                  <span style={{ color: '#7C3AED' }}>agent</span>{' '}
                  <span style={{ color: '#00F5C4' }}>TravelPlanner</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>{'{'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.35)' }}>requires:</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>[flight_search, hotel_booking]</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.35)' }}>reputation_minimum:</span>{' '}
                  <span style={{ color: '#00F5C4' }}>80</span>{'\n'}
                  {'\n'}
                  {'  '}<span style={{ color: '#7C3AED' }}>task</span>{' '}
                  <span style={{ color: '#fff' }}>plan_trip</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(destination, budget) </span>
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>{'{'}</span>{'\n'}
                  {'    '}<span style={{ color: '#7C3AED' }}>let</span>{' '}
                  <span style={{ color: '#fff' }}>flights</span>{' = '}
                  <span style={{ color: '#00F5C4' }}>discover</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(capability: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;flight_search&quot;</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>, min_rep: </span>
                  <span style={{ color: '#00F5C4' }}>85</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>)</span>{'\n'}
                  {'    '}<span style={{ color: '#00F5C4' }}>pay</span>
                  <span style={{ color: 'rgba(255,255,255,0.35)' }}>(flights[0], best_flight.cost)</span>{'\n'}
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

      {/* ===== FINAL CTA ===== */}
      <section style={{
        padding: '160px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(0,245,196,0.05) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: "'Fira Code', monospace", marginBottom: 24 }}>
            READY?
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 7vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
            Deploy your<br />first agent.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', marginBottom: 48, lineHeight: 1.8 }}>
            Built for Agents. Invisible to Humans.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{
              padding: '14px 32px', borderRadius: 10,
              background: '#00F5C4', color: '#080810',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Get Started
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
