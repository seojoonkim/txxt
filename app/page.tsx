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
  return <span style={{ opacity: on ? 1 : 0, color: '#00F5C4' }}>▋</span>;
}

export default function Home() {
  return (
    <div style={{ background: '#0D0E1A', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>

      {/* ===== HERO — Full viewport, one massive word ===== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 24px',
      }}>
        {/* Subtle glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(0,245,196,0.05) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
          {/* Tiny label */}
          <p style={{
            fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)',
            fontFamily: mono, marginBottom: 32, textTransform: 'uppercase' as const,
          }}>
            The Trust Layer for AI Agents
          </p>

          {/* MASSIVE logo */}
          <div style={{
            fontSize: 'clamp(100px, 22vw, 280px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: 0.85,
            color: '#00F5C4',
            fontFamily: mono,
            textShadow: '0 0 80px rgba(0,245,196,0.25), 0 0 160px rgba(0,245,196,0.08)',
            marginBottom: 40,
          }}>
            txxt
          </div>

          {/* Core message — large */}
          <div style={{ marginBottom: 64 }}>
            <p style={{
              fontSize: 'clamp(20px, 3.5vw, 36px)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.5,
              margin: '0 0 4px 0',
              letterSpacing: '-0.01em',
            }}>
              The internet runs on <span style={{ fontFamily: mono }}>txt</span>.
            </p>
            <p style={{
              fontSize: 'clamp(20px, 3.5vw, 36px)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.5,
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              The agent economy runs on{' '}
              <span style={{ color: '#00F5C4', fontWeight: 800, fontFamily: mono }}>txxt</span>.
            </p>
          </div>

          {/* Single CTA */}
          <Link href="/build" style={{
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: 10,
            background: '#A78BFA',
            color: '#0D0E1A',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            Start Building
          </Link>
        </div>
      </section>

      {/* ===== WHY TXXT — Full-width horizontal breakdown ===== */}
      <section style={{ background: '#070811' }}>
        {/* Section label */}
        <div style={{ padding: '80px 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.15)',
            fontFamily: mono, margin: 0,
          }}>
            WHY TXXT
          </p>
        </div>

        {/* Four letters — full width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          minHeight: 360,
        }}>
          {[
            { letter: 't', word: 'transact', desc: 'Agents pay each other — milliseconds, pennies.', color: '#00F5C4' },
            { letter: 'x', word: 'exchange', desc: 'Capabilities, data, trust — traded on-chain.', color: '#A78BFA' },
            { letter: 'x', word: 'exist', desc: 'Every agent gets a sovereign identity.', color: '#FB923C' },
            { letter: 't', word: 'trust', desc: 'Not assumed. Mathematically proven.', color: '#00F5C4' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column' as const,
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 16px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              position: 'relative' as const,
            }}>
              <div style={{
                fontSize: 'clamp(64px, 10vw, 120px)',
                fontWeight: 900,
                color: item.color,
                fontFamily: mono,
                lineHeight: 1,
                marginBottom: 16,
                textShadow: `0 0 40px ${item.color}33`,
              }}>
                {item.letter}
              </div>
              <div style={{
                fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                fontFamily: mono, letterSpacing: '0.08em', marginBottom: 12,
              }}>
                _{item.word}
              </div>
              <p style={{
                fontSize: 12, color: 'rgba(255,255,255,0.25)', lineHeight: 1.6,
                textAlign: 'center', maxWidth: 180, margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{ padding: '48px 24px 80px', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, color: 'rgba(255,255,255,0.2)', fontStyle: 'italic',
            fontFamily: mono, margin: 0, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto',
          }}>
            &ldquo;txt carried human words. txxt carries agent trust.&rdquo;
          </p>
        </div>
      </section>

      {/* ===== PROBLEM — Giant statement ===== */}
      <section style={{
        padding: 'clamp(120px, 15vh, 200px) 24px',
        textAlign: 'center',
        position: 'relative',
      }}>
        {/* Subtle purple glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(167,139,250,0.04) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Giant headline */}
          <h2 style={{
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            margin: '0 0 48px 0',
            color: '#fff',
          }}>
            Trust Has<br />No Protocol.
          </h2>

          {/* Protocol badges — one clean line */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 24,
            flexWrap: 'wrap', marginBottom: 48,
          }}>
            {[
              { name: 'MCP', status: 'solved', color: 'rgba(255,255,255,0.25)' },
              { name: 'A2A', status: 'solved', color: 'rgba(255,255,255,0.25)' },
              { name: 'x402', status: 'solved', color: 'rgba(255,255,255,0.25)' },
              { name: 'Trust', status: 'missing', color: '#f87171' },
            ].map(p => (
              <span key={p.name} style={{
                fontFamily: mono, fontSize: 14, color: p.color,
                letterSpacing: '0.05em',
              }}>
                {p.name === 'Trust' ? '✗' : '✓'} {p.name}
              </span>
            ))}
          </div>

          {/* One line answer */}
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: '#00F5C4',
            fontFamily: mono,
            fontWeight: 600,
            margin: 0,
          }}>
            This is the gap txxt fills.
          </p>
        </div>
      </section>

      {/* ===== THREE PILLARS — Stacked full-width, split layout ===== */}
      <section style={{ background: '#070811' }}>
        {/* Section header */}
        <div style={{ padding: '100px 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 10, letterSpacing: '0.15em', color: '#00F5C4',
            fontFamily: mono, marginBottom: 20,
          }}>
            CORE INFRASTRUCTURE
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700,
            letterSpacing: '-0.03em', margin: '0 0 80px 0',
          }}>
            Three pillars.<br />Zero compromise.
          </h2>
        </div>

        {/* Pillar 1 — Identity */}
        <div style={{
          display: 'flex', flexWrap: 'wrap' as const,
          borderTop: '1px solid rgba(255,255,255,0.05)',
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
            <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#A78BFA', fontFamily: mono, marginBottom: 16 }}>IDENTITY</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Every agent gets<br />a passport.
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 400 }}>
              Permanent. Portable. Unfakeable. A sovereign identity on-chain — not a plugin, not an afterthought.
            </p>
          </div>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(32px, 4vw, 64px)',
            background: 'rgba(255,255,255,0.015)',
            borderLeft: '1px solid rgba(255,255,255,0.04)',
          }}>
            <pre style={{
              fontSize: 'clamp(11px, 1.2vw, 13px)', fontFamily: mono,
              color: 'rgba(255,255,255,0.4)', lineHeight: 2, margin: 0,
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
          borderTop: '1px solid rgba(255,255,255,0.05)',
          minHeight: 480,
        }}>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(32px, 4vw, 64px)',
            background: 'rgba(255,255,255,0.015)',
            borderRight: '1px solid rgba(255,255,255,0.04)',
          }}>
            <pre style={{
              fontSize: 'clamp(11px, 1.2vw, 13px)', fontFamily: mono,
              color: 'rgba(255,255,255,0.4)', lineHeight: 2, margin: 0,
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
            <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#00F5C4', fontFamily: mono, marginBottom: 16 }}>REPUTATION</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Trust is earned<br />on-chain.
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 400 }}>
              No reviews. No stars. Pure math. 94/100 means 12,847 tasks, zero disputes, 99.9% uptime.
            </p>
          </div>
        </div>

        {/* Pillar 3 — Validation */}
        <div style={{
          display: 'flex', flexWrap: 'wrap' as const,
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
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
            <p style={{ fontSize: 10, letterSpacing: '0.15em', color: '#FB923C', fontFamily: mono, marginBottom: 16 }}>VALIDATION</p>
            <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Three layers.<br />Zero doubt.
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: 400 }}>
              Self, peer, protocol. Three independent witnesses verify every interaction before execution.
            </p>
          </div>
          <div style={{
            flex: '1 1 50%', minWidth: 300,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'clamp(32px, 4vw, 64px)',
            background: 'rgba(255,255,255,0.015)',
            borderLeft: '1px solid rgba(255,255,255,0.04)',
          }}>
            <pre style={{
              fontSize: 'clamp(11px, 1.2vw, 13px)', fontFamily: mono,
              color: 'rgba(255,255,255,0.4)', lineHeight: 2, margin: 0,
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

      {/* ===== TOKENLESS — Giant statement ===== */}
      <section style={{
        padding: 'clamp(140px, 20vh, 240px) 24px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 40% 50% at 50% 50%, rgba(251,146,60,0.04) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Giant "No Token." */}
          <h2 style={{
            fontSize: 'clamp(56px, 12vw, 150px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            margin: '0 0 56px 0',
            color: '#FB923C',
          }}>
            No Token.
          </h2>

          {/* Simple contrast lines */}
          <div style={{
            maxWidth: 480, margin: '0 auto',
            display: 'flex', flexDirection: 'column' as const, gap: 20,
          }}>
            {[
              { them: 'Volatile gas tokens', us: 'USDC — stable, predictable' },
              { them: 'Token launches & hype', us: 'Infrastructure first' },
              { them: 'Governance theater', us: 'Pure utility' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: 24, flexWrap: 'wrap' as const,
              }}>
                <span style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.2)',
                  textDecoration: 'line-through', fontFamily: mono,
                }}>
                  {row.them}
                </span>
                <span style={{
                  fontSize: 14, color: '#00F5C4', fontFamily: mono, fontWeight: 600,
                }}>
                  {row.us}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AGENTSCRIPT — Code showcase ===== */}
      <section style={{ background: '#070811', padding: 'clamp(100px, 12vh, 160px) 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{
              fontSize: 10, letterSpacing: '0.15em', color: '#00F5C4',
              fontFamily: mono, marginBottom: 16,
            }}>
              AGENTSCRIPT
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700,
              letterSpacing: '-0.03em', margin: 0, lineHeight: 1.2,
            }}>
              Code for agents,<br />by agents.
            </h2>
          </div>

          {/* Terminal */}
          <div style={{
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.06)',
            background: '#0A0C1E',
            overflow: 'hidden',
          }}>
            {/* Title bar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              background: 'rgba(255,255,255,0.015)',
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#ff5f57','#febc2e','#28c840'].map(c => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.15)', fontFamily: mono, marginLeft: 8 }}>
                travel_planner.agent
              </span>
              <span style={{ marginLeft: 'auto' }}><TerminalCursor /></span>
            </div>
            {/* Code */}
            <div style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
              <pre style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', fontFamily: mono, lineHeight: 2, margin: 0, overflowX: 'auto' as const }}>
                <code>
                  <span style={{ color: '#A78BFA' }}>agent</span>{' '}
                  <span style={{ color: '#00F5C4' }}>TravelPlanner</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.15)' }}>{'{'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.3)' }}>requires:</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>[flight_search, hotel_booking]</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.3)' }}>reputation_minimum:</span>{' '}
                  <span style={{ color: '#00F5C4' }}>80</span>{'\n'}
                  {'\n'}
                  {'  '}<span style={{ color: '#A78BFA' }}>task</span>{' '}
                  <span style={{ color: '#fff' }}>plan_trip</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>(destination, budget)</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.15)' }}>{'{'}</span>{'\n'}
                  {'    '}<span style={{ color: '#A78BFA' }}>let</span>{' '}
                  <span style={{ color: '#fff' }}>flights</span>{' = '}
                  <span style={{ color: '#00F5C4' }}>discover</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>(</span>
                  <span style={{ color: '#f59e0b' }}>&quot;flight_search&quot;</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>, min_rep: </span>
                  <span style={{ color: '#00F5C4' }}>85</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>)</span>{'\n'}
                  {'    '}<span style={{ color: '#A78BFA' }}>let</span>{' '}
                  <span style={{ color: '#fff' }}>result</span>{' = '}
                  <span style={{ color: '#00F5C4' }}>delegate</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>(flights[0], destination)</span>{'\n'}
                  {'    '}<span style={{ color: '#00F5C4' }}>pay</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>(flights[0], result.cost)</span>{'\n'}
                  {'    '}<span style={{ color: '#00F5C4' }}>rate</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>(flights[0], score: </span>
                  <span style={{ color: '#00F5C4' }}>95</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>)</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.15)' }}>{'}'}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.15)' }}>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA — Breathing, one line ===== */}
      <section style={{
        padding: 'clamp(160px, 22vh, 280px) 24px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(167,139,250,0.05) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(36px, 8vw, 80px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: '0 0 48px 0',
          }}>
            Build the infrastructure.
          </h2>

          <Link href="/build" style={{
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: 10,
            background: '#A78BFA',
            color: '#0D0E1A',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}>
            Start Building
          </Link>
        </div>
      </section>

    </div>
  );
}
