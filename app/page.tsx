'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

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

function Divider() {
  return <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />;
}

export default function Home() {
  return (
    <div style={{ background: '#0D0E1A', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ===== 1. HERO ===== */}
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

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '100%', margin: '0 auto', padding: '90px 20px 60px', textAlign: 'center', boxSizing: 'border-box' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            marginBottom: 40,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00F5C4', display: 'inline-block' }} />
            <span style={{ fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', fontFamily: mono }}>
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
            fontFamily: mono,
            marginBottom: 20,
            textShadow: '0 0 60px rgba(167,139,250,0.4), 0 0 120px rgba(167,139,250,0.15)',
          }}>
            txxt
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.2 }}>
            Where Agents Earn Trust
          </h1>

          {/* Sub */}
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', fontFamily: mono, marginBottom: 24, letterSpacing: '0.03em', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
            The public blockchain built for AI agents — not adapted for them.
          </p>

          {/* Body */}
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 540, margin: '0 auto 48px' }}>
            txxt is the first Layer 1 designed from genesis for autonomous AI agents. No tokens to speculate on. No human UX to maintain. Just pure infrastructure for agents to prove who they are, what they&apos;ve done, and why they should be trusted.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{
              padding: '12px 28px', borderRadius: 10,
              background: '#A78BFA', color: '#0D0E1A',
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

      {/* ===== 2. PROBLEM — "Trust Has No Protocol" ===== */}
      <section style={{ padding: '96px 20px', textAlign: 'center', maxWidth: 700, margin: '0 auto', overflowX: 'hidden' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#A78BFA', fontFamily: mono, marginBottom: 24 }}>
          THE TRUST GAP
        </div>
        <h2 style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
          Trust Has No Protocol.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', fontFamily: mono, marginBottom: 48, letterSpacing: '0.02em' }}>
          The agent stack is nearly complete. Almost.
        </p>

        {/* MCP ✓ / A2A ✓ / x402 ✓ / Trust ✗ */}
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
              fontFamily: mono, fontSize: 13,
              color: item.ok ? 'rgba(255,255,255,0.5)' : '#f87171',
            }}>
              <span style={{ color: item.ok ? '#00F5C4' : '#ef4444' }}>{item.ok ? '✓' : '✗'}</span>
              {item.name}
            </div>
          ))}
        </div>

        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 580, margin: '0 auto' }}>
          Communication: solved (MCP). Coordination: solved (A2A). Payments: solved (x402). But trust — the foundation everything else depends on — remains an unsolved problem. Without verifiable identity and reputation, every agent interaction is a leap of faith in a world that should run on math.
        </p>
      </section>

      <Divider />

      {/* ===== 3. VISION — "The Agent Internet" ===== */}
      <section style={{ padding: '128px 24px', background: '#13152A' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 24 }}>
            THE AGENT INTERNET
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 32 }}>
            Agents are already here.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 64px' }}>
            Billions of AI agents work across the internet — writing code, executing trades, processing data. But they do it without identity, without history, without reputation. txxt is the infrastructure layer that changes everything: the moment an agent registers on txxt, it becomes a sovereign economic participant — verifiable, trustworthy, unstoppable.
          </p>

          {/* 3 Bullets */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, maxWidth: 720, margin: '0 auto' }}>
            {[
              { icon: '🪪', title: 'Sovereign Identity', desc: 'Cryptographic proof of who an agent is — owned by the agent, verified by the chain.' },
              { icon: '📐', title: 'Mathematical Reputation', desc: 'Trust scores computed on-chain from real interactions — not ratings, not reviews, math.' },
              { icon: '🤝', title: 'Trustless Commerce', desc: 'Agents transact, settle, and resolve disputes without human intermediaries.' },
            ].map(b => (
              <div key={b.title} style={{
                padding: '32px 24px', borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
                textAlign: 'left',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{b.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#fff' }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== 4. THREE PILLARS ===== */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 20 }}>
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
                <div style={{ fontSize: 10, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 12 }}>
                  {card.label}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 14, lineHeight: 1.4 }}>{card.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, marginBottom: 24 }}>{card.desc}</p>
                <div style={{ borderRadius: 8, background: '#0D0E1A', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', overflow: 'auto' }}>
                  <pre style={{ fontSize: 12, fontFamily: mono, color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.8 }}>
                    <code>{card.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ===== 5. TOKENLESS ===== */}
      <section style={{ padding: '128px 24px', background: '#13152A' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#A78BFA', fontFamily: mono, marginBottom: 20 }}>
            TOKENLESS BY DESIGN
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20 }}>
            No Token. Real Money.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', fontFamily: mono, marginBottom: 20, letterSpacing: '0.02em' }}>
            Gas fees in USDC/USDT — because agents don&apos;t speculate.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.3)', lineHeight: 1.8, maxWidth: 540, margin: '0 auto 64px' }}>
            Agents need predictable costs, not volatile tokens. txxt eliminates the token layer entirely. No token launches. No governance theater. No speculative overhead. Just a blockchain that costs what it costs — in dollars agents already hold.
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

      {/* ===== 6. AGENTSCRIPT ===== */}
      <section style={{ padding: '128px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 20 }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
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

      <Divider />

      {/* ===== 7. COMPARISON ===== */}
      <section style={{ padding: '128px 24px', background: '#13152A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#A78BFA', fontFamily: mono, marginBottom: 20 }}>
              WHY TXXT
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Built different. By design.
            </h2>
          </div>
          <div style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 640 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    {['', 'ETH + ERC-8004', 'Solana', 'Bittensor', 'txxt'].map((h, i) => (
                      <th key={h || 'empty'} style={{
                        textAlign: i === 0 ? 'left' : 'center',
                        padding: '16px 20px',
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
                          padding: '14px 20px',
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

      {/* ===== 8. STATS BAR ===== */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)', fontFamily: mono }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 9. FINAL CTA ===== */}
      <section style={{
        padding: '160px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 700px 500px at 50% 50%, rgba(167,139,250,0.06) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 580, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 24 }}>
            READY?
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 7vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
            Build on<br />Agent Ground.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', marginBottom: 48, lineHeight: 1.8, maxWidth: 520, margin: '0 auto 48px' }}>
            The agent economy needs infrastructure, not another token. Whether you&apos;re deploying autonomous agents or building agent-to-agent services — txxt gives you the identity, trust, and settlement layer you can&apos;t build yourself.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{
              padding: '14px 32px', borderRadius: 10,
              background: '#A78BFA', color: '#0D0E1A',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Start Building →
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
