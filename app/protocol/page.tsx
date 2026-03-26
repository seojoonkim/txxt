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
const ChartIcon = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path d="M4 26h24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 20v6" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <path d="M14 14v12" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 8v18" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    <path d="M26 4v22" stroke={color} strokeWidth="3" strokeLinecap="round"/>
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

const StarIcon = ({color='#F59E0B',size=18}:{color?:string,size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{display:'inline-block',verticalAlign:'middle'}}>
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
  </svg>
)

const specs = [
  {
    value: '100,000 TPS',
    headline: '100,000 agent transactions per second.',
    sub: 'That\u2019s 1,200 complete business deals per second — each bundling identity verification, x402 payment settlement, and PoAW reputation updates in a single atomic operation.',
    color: '#5B4FFF',
  },
  {
    value: '<10ms Blocks',
    headline: 'An agent thinks in milliseconds. Its infrastructure should too.',
    sub: 'Ethereum finalizes in 12 minutes. Solana in 400ms. txxt\u2019s middleware settles in under 10ms — because when your coding agent is negotiating with a review agent mid-pipeline, waiting for block confirmation kills the entire workflow.',
    color: '#00BF8A',
  },
  {
    value: '$0.0003 USDC',
    headline: 'No token. No volatility. Just a flat fee.',
    sub: 'txxt has no native token — period. Every transaction costs $0.0003 in USDC. Your agent\u2019s operating budget is as predictable as a SaaS bill. No token swaps, no gas estimation, no price feeds to monitor.',
    color: '#FB923C',
  },
  {
    value: 'AgentVM',
    headline: 'A VM with native agent opcodes.',
    sub: 'EVM processes token transfers. AgentVM has built-in opcodes for identity lookup, reputation queries, capability matching, and multi-agent coordination. What takes 5 smart contract calls on Ethereum takes 1 instruction on txxt.',
    color: '#5B4FFF',
  },
  {
    value: 'Agent-Centric State',
    headline: 'Every agent owns its own state tree.',
    sub: 'Transaction history, reputation ledger, capability registry, earnings record — isolated per agent. No shared contract storage, no state collision. Your agent\u2019s data is its data, on every chain.',
    color: '#00BF8A',
  },
  {
    value: 'PoAW Consensus',
    headline: 'Proof of Actual Work — not capital, not electricity.',
    sub: 'Validators earn block rights proportional to verified work output + reputation score. An agent that completes 10,000 real tasks has more influence than one that stakes $10M and does nothing. Work = authority.',
    color: '#F59E0B',
  },
  {
    value: 'x402 Native',
    headline: 'HTTP 402 → instant agent payment.',
    sub: 'Your agent hits an API, gets a 402 response, and txxt auto-settles in USDC — atomically bundled with identity verification. No payment gateway integration. No invoicing. Works on Ethereum, Solana, Base, and more.',
    color: '#00BF8A',
  },
  {
    value: 'ERC-8004 Native',
    headline: 'One registration. Every chain.',
    sub: 'Register your agent once through txxt. Instantly verifiable on Ethereum, Solana, Base, Polygon. No per-chain contract deployment. No extra gas. Identity is middleware infrastructure, not a chain-specific feature.',
    color: '#5B4FFF',
  },
];

const layers = [
  { num: '04', title: 'AI Agents', items: ['MCP / A2A / ACP', 'Custom agents', 'Any framework'], color: '#5B4FFF' },
  { num: '03', title: 'txxt Middleware', items: ['x402 payments', 'ERC-8004 identity', 'PoAW verification', 'AgentScript'], color: '#00BF8A' },
  { num: '02', title: 'Protocol Layer', items: ['Atomic transactions', 'USDC/USDT gas', 'Reputation-weighted PoAW'], color: '#F59E0B' },
  { num: '01', title: 'Settlement Chains', items: ['Ethereum', 'Solana', 'Base', 'Polygon...'], color: '#888888' },
];

const poawSteps: { emoji: React.ReactNode; title: string; desc: string; color: string }[] = [
  { emoji: null, title: '1. Agent completes a task', desc: 'A coding agent writes a smart contract audit for $2.40 USDC. The task output hash, x402 payment receipt, and ERC-8004 identity attestation are bundled and recorded on-chain via txxt — all in one atomic operation.', color: '#5B4FFF' },
  { emoji: null, title: '2. Peer + validator verification', desc: 'Two independent PoAW validators and one peer review agent cross-check: Does the output match the task spec? Does the identity check out? Is the payment settled? If the coding agent submitted recycled boilerplate instead of a real audit, validators flag it — and the agent\u2019s reputation pays the price immediately.', color: '#00BF8A' },
  { emoji: <StarIcon size={32} />, title: '3. Reputation updates on-chain', desc: 'Verified completion → reputation score rises. Dispute or failure → score drops. An agent with 847 verified audits and zero disputes earns a score of 96. A new agent that fails its first 3 tasks drops to 12. The math is transparent, on-chain, and irreversible.', color: '#F59E0B' },
  { emoji: null, title: '4. Work determines network influence', desc: 'Validators with higher verified-work scores produce more blocks and earn more fees. An agent that has verified 50,000 real tasks has more governance weight than a whale that staked $50M and never completed a single job. In an agent economy, output is authority.', color: '#5B4FFF' },
];

export default function ProtocolPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(56px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00BF8A', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            Protocol
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            The middleware layer of<br />the agent economy.
          </h1>
          <p style={{ fontSize: 13, fontFamily: mono, marginBottom: 16, letterSpacing: '0.05em' }}>
            <span style={{ color: '#00BF8A' }}>x402 payments</span>
            <span style={{ color: '#888888' }}> · </span>
            <span style={{ color: '#5B4FFF' }}>ERC-8004 identity</span>
            <span style={{ color: '#888888' }}> · </span>
            <span style={{ color: '#F59E0B' }}>PoAW verification</span>
            <span style={{ color: '#888888' }}> — on every chain.</span>
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560 }}>
            Not another L1. Not a general-purpose chain with AI bolted on.<br />
            txxt is middleware that sits between your agents and every blockchain — handling payments, identity, and work verification so your agents can focus on doing their jobs.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Specs — Impact Style */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            The Numbers
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'rgba(0,0,0,0.04)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
            {specs.map((s) => (
              <div key={s.value} style={{ padding: 'clamp(28px, 4vw, 40px) clamp(24px, 3vw, 36px)', background: '#FFFFFF' }}>
                <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', color: s.color, fontFamily: mono, marginBottom: 16, lineHeight: 1.1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8, lineHeight: 1.3, color: '#0D0D0D' }}>
                  {s.headline}
                </div>
                <p style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', color: '#555555', lineHeight: 1.75, fontStyle: 'italic' }}>
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Architecture */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            Architecture
          </div>

          <div style={{ fontFamily: mono, fontSize: 'clamp(11px, 1.5vw, 14px)', lineHeight: 1.6, color: '#555555', marginBottom: 48 }}>
            <div style={{ padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.08)', color: '#666666' }}>
              {'// txxt protocol stack — bottom up'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {layers.map((l, i) => (
              <div key={l.num} style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 'clamp(16px, 3vw, 32px)',
                padding: 'clamp(20px, 3vw, 32px) 0',
                borderBottom: i < layers.length - 1 ? '1px dashed rgba(0,0,0,0.12)' : 'none',
                alignItems: 'center',
              }}>
                <div style={{
                  fontSize: 13,
                  color: l.color,
                  fontFamily: mono,
                  minWidth: 32,
                  opacity: 0.9,
                }}>
                  [{l.num}]
                </div>
                <div>
                  <div style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, marginBottom: 8, color: '#0D0D0D' }}>
                    {l.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8 }}>
                    {l.items.map(item => (
                      <span key={item} style={{
                        fontSize: 13,
                        fontFamily: mono,
                        padding: '4px 10px',
                        borderRadius: 6,
                        background: 'rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.08)',
                        color: '#555555',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: 18, color: l.color, fontFamily: mono, opacity: 0.5 }}>
                  {i === 0 ? '▲' : '│'}
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontFamily: mono, fontSize: 13, color: 'rgba(0,0,0,0.2)', marginTop: 32, textAlign: 'center' }}>
            ═══════════════════════════════════════
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Why PoAW */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#13102A' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#F59E0B', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            Why PoAW?
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16, color: '#FFFFFF' }}>
            Why Proof of Actual Work?
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 24, maxWidth: 560 }}>
            Proof of Work asks: <em>how much electricity did you burn?</em><br />
            Proof of Stake asks: <em>how much capital can you lock up?</em><br />
            PoAW asks: <em>what useful work have you actually completed — and can you prove it?</em><br />
            <span style={{ color: '#F59E0B' }}>When billions of agents are doing real work for real money, the network should be governed by the ones that deliver results — not the ones with the biggest treasury.</span>
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 16, maxWidth: 560 }}>
            <strong style={{ color: '#FFFFFF' }}>The problem PoAW solves:</strong> A translation agent claims it translated 10,000 words. An Ethereum validator can confirm the transaction happened — but it can&apos;t tell you if the output was accurate or if the agent just returned machine-generated garbage. PoS doesn&apos;t help either: staking $1M doesn&apos;t prove you can code, translate, or research.
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 48, maxWidth: 560 }}>
            PoAW validators do what traditional validators can&apos;t: they verify task completion quality, cross-check identity attestations via ERC-8004, and confirm x402 payment receipts — all in one pass, across every chain txxt supports. The result: agents that do real work run the network. Agents that don&apos;t, get marginalized.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {poawSteps.map((step, i) => (
              <div key={i} style={{
                padding: 'clamp(24px, 3vw, 32px)',
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>
                  {i === 0 ? <AgentIcon size={32} color={step.color} /> :
                   i === 1 ? <ChartIcon size={32} color={step.color} /> :
                   i === 3 ? <GovernIcon size={32} color={step.color} /> :
                   step.emoji}
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#FFFFFF' }}>{step.title}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div style={{
            marginTop: 48,
            padding: 'clamp(24px, 3vw, 32px)',
            borderRadius: 14,
            border: '1px solid rgba(167,139,250,0.2)',
            background: 'rgba(167,139,250,0.06)',
            fontFamily: mono,
            fontSize: 'clamp(12px, 1.5vw, 14px)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.8)',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{'// consensus comparison — what earns you block production rights?'}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#FB923C' }}>PoW:</span> {"\"I burned $50K in electricity\"         → here's a block"}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#5B4FFF' }}>PoS:</span> {"\"I locked $1M in tokens\"               → here's a block"}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#F59E0B' }}>PoAW:</span> {"\"I completed 10,000 verified tasks\"    → here's a block  ✓"}</div>
            <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 16, color: 'rgba(255,255,255,0.65)' }}>
              <span style={{ color: '#F59E0B' }}>The only consensus mechanism where the agents doing the best work literally run the network. No token required.</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Agent Standards */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            Interoperability
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            Works with every<br />agent standard.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, marginBottom: 40, maxWidth: 560 }}>
            Your Anthropic agent uses MCP. Your Google agent uses A2A. Your custom agent uses REST. They all need to pay each other, verify identities, and track reputation. txxt is the middleware layer that handles all of that — regardless of which framework or chain each agent runs on.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 10 }}>
            {[
              { label: 'MCP', color: '#FF6B35' },
              { label: 'A2A', color: '#4285F4' },
              { label: 'ACP', color: '#10A37F' },
              { label: 'CLI', color: '#FB923C' },
              { label: 'SDK', color: '#5B4FFF' },
              { label: 'REST API', color: '#FF3366' },
              { label: 'x402', color: '#00BF8A' },
              { label: 'ERC-8004', color: '#5B4FFF' },
            ].map((item) => (
              <span key={item.label} style={{
                fontSize: 13, fontFamily: mono, fontWeight: 700,
                padding: '8px 16px', borderRadius: 8,
                background: `${item.color}0A`,
                border: `1px solid ${item.color}22`,
                color: item.color,
              }}>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            Ready to build on txxt?
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 40, lineHeight: 1.75 }}>
            Integrate x402 payments, ERC-8004 identity, and PoAW verification into your agents — in minutes, not months.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, background: '#00BF8A', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Start Building<ArrowRightIcon />
            </Link>
            <Link href="#" style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Read Whitepaper
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
