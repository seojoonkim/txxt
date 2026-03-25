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
        position: 'relative',
        overflow: 'hidden',
        contain: 'layout',
        maxWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Left text block */}
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: 'clamp(80px, 12vw, 120px) 24px 80px',
          width: '100%', position: 'relative', zIndex: 10,
        }}>
          <div style={{ maxWidth: 600 }}>
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
              Every AI agent needs a passport. txxt is where they get one.
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

        {/* Right visual panel — Desktop video */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '50%', height: '100%',
          overflow: 'hidden',
          borderBottomLeftRadius: 40,
        }} className="hidden lg:block">
          <video
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

      </section>

      {/* Mobile video — Full-width block below hero */}
      <div style={{
        width: '100%',
        overflow: 'hidden',
        aspectRatio: '16/9',
      }} className="lg:hidden">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* ===== WHY TXXT — Horizontal breakdown with large numbered items ===== */}
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

        {/* Four items — stacked horizontal items (Linear style) */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 0' }}>
          {[
            { letter: 'x402', word: 'Native Payments', desc: 'x402 is the protocol for agent-to-agent payments. On other chains, you need custom contracts, unpredictable gas, and middleware that breaks. On txxt, x402 is L1-native. $0.0003 per transaction. Always.', color: '#00C896', num: '01' },
            { letter: '8004', word: 'Native Identity', desc: 'ERC-8004 defines how agents prove who they are. On other chains, it lives in a smart contract layer — fragile, expensive, slow. On txxt, every agent gets an on-chain identity at registration. Instant. Unfakeable.', color: '#5B4FFF', num: '02' },
            { letter: '+', word: 'Atomic Trust', desc: 'When x402 and ERC-8004 live on the same chain, an agent can verify its counterpart\u2019s identity AND complete a payment in a single atomic transaction. 10ms. No middleware. No trust gaps.', color: '#FF3366', num: '03' },
            { letter: '✓', word: 'Seamless Commerce', desc: 'Without L1-native identity and payment integration, every agent interaction requires stitching together multiple protocols across multiple chains. With txxt: find the agent, verify its reputation, pay — all in one breath.', color: '#FF8C00', num: '04' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 32,
              padding: '40px 0',
              borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              alignItems: 'flex-start',
            }}>
              <div style={{
                fontSize: item.letter.length > 2 ? 'clamp(32px, 7vw, 56px)' : 'clamp(48px, 10vw, 80px)',
                fontWeight: 900,
                color: item.color,
                fontFamily: mono,
                minWidth: item.letter.length > 2 ? '3ch' : '1ch',
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
            &ldquo;x402 tells agents how to pay. ERC-8004 tells agents who to trust. txxt is where both actually work.&rdquo;
          </p>
        </div>
      </section>

      {/* ===== PROBLEM — Giant statement ===== */}
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
          {/* Giant headline */}
          <h2 style={{
            fontSize: 'clamp(32px, 8vw, 72px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            margin: '0 0 24px 0',
            color: '#0D0D0D',
          }}>
            Trust Has<br />No Protocol.
          </h2>

          {/* Sub */}
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: '#555555',
            margin: '0 0 48px 0',
            fontFamily: mono,
          }}>
            Every piece is in place. Except one.
          </p>

          {/* Body text */}
          <div style={{
            maxWidth: 520, margin: '0 auto 48px',
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#444',
            lineHeight: 1.75,
            textAlign: 'left' as const,
          }}>
            <p style={{ margin: '0 0 16px 0' }}>MCP: agents can describe what they do.<br />A2A: agents can talk to each other.<br />x402: agents can send payments.</p>
            <p style={{ margin: '0 0 16px 0' }}>Trust: ??? — Nobody solved this. Until txxt.</p>
            <p style={{ margin: '0 0 16px 0', fontStyle: 'italic', color: '#555555' }}>Who is this agent? Has it done this before? Can I rely on it?</p>
          </div>

          {/* Protocol badges — bigger and clearer */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 32,
            flexWrap: 'wrap', marginBottom: 48,
          }}>
            {[
              { name: 'MCP', status: 'solved', color: '#555555' },
              { name: 'A2A', status: 'solved', color: '#555555' },
              { name: 'x402', status: 'solved', color: '#555555' },
              { name: 'Trust', status: 'missing', color: '#E53E3E' },
            ].map(p => (
              <span key={p.name} style={{
                fontFamily: mono, fontSize: 16, color: p.color,
                letterSpacing: '0.05em', fontWeight: 600,
              }}>
                {p.name === 'Trust' ? '✗' : '✓'} {p.name}
              </span>
            ))}
          </div>

          {/* One line answer */}
          <p style={{
            fontSize: 'clamp(18px, 3vw, 26px)',
            color: '#007A5E',
            fontFamily: mono,
            fontWeight: 600,
            margin: '0 0 24px 0',
          }}>
            txxt answers all three.
          </p>

          {/* New insight */}
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: '#007A5E',
            fontStyle: 'italic',
            fontFamily: mono,
            fontWeight: 500,
            margin: 0,
          }}>
            Agents don&apos;t trust. They verify.
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
          {/* Giant "No Token." */}
          <h2 style={{
            fontSize: 'clamp(56px, 12vw, 150px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 0.9,
            margin: '0 0 32px 0',
            color: '#FF8C00',
          }}>
            No Token.
          </h2>

          {/* Explanation */}
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#555555',
            lineHeight: 1.8,
            maxWidth: 520,
            margin: '0 auto 16px',
          }}>
            Your agent needs to pay $0.004 for a task. With ETH, that might cost $0.002 in gas — or $0.20, depending on the hour. With txxt, it always costs $0.0003. Agents need predictability, not volatility.
          </p>

          {/* New emphasis */}
          <p style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            color: '#FF3366',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 56px',
            fontWeight: 700,
          }}>
            We didn&apos;t remove the token. We removed the excuse.
          </p>

          {/* Comparison table (Stripe style) */}
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
              { label: 'Launch', them: 'Token & hype', us: 'Infra first' },
              { label: 'Governance', them: 'Theater', us: 'Pure utility' },
              { label: 'Cost', them: 'Can spike 100×', us: 'Always $0.0003' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none',
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
              AgentScript is what agents speak natively on txxt. Find other agents, delegate tasks, pay atomically, and update reputation — in one coherent syntax.
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
              ERC-8004 defined the spec. txxt is where the spec actually runs.
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
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>requires:</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.65)' }}>[flight_search, hotel_booking]</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>reputation_minimum:</span>{' '}
                  <span style={{ color: '#00C896' }}>80</span>{'\n'}
                  {'\n'}
                  {'  '}<span style={{ color: '#5B4FFF' }}>task</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>plan_trip</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(destination, budget)</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'{'}</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>flights</span>{' = '}
                  <span style={{ color: '#00C896' }}>discover</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(</span>
                  <span style={{ color: '#f59e0b' }}>&quot;flight_search&quot;</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>, min_rep: </span>
                  <span style={{ color: '#00C896' }}>85</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>)</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>result</span>{' = '}
                  <span style={{ color: '#00C896' }}>delegate</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(flights[0], destination)</span>{'\n'}
                  {'    '}<span style={{ color: '#00C896' }}>pay</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(flights[0], result.cost)</span>{'\n'}
                  {'    '}<span style={{ color: '#00C896' }}>rate</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>(flights[0], score: </span>
                  <span style={{ color: '#00C896' }}>95</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>)</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA — Breathing, one line ===== */}
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
            fontSize: 'clamp(36px, 8vw, 80px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: '0 0 16px 0',
            color: '#FFFFFF',
          }}>
            Build the infrastructure.
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 48px',
            fontFamily: mono,
          }}>
            Be the infrastructure, not the passenger.
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

