import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

// SVG Icon Components
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
const ShieldIcon = ({size=40,color='#5B4FFF'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M20 4L6 10v10c0 8.8 6 17 14 19 8-2 14-10.2 14-19V10L20 4z" stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <path d="M14 20l4 4 8-8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ReputationIcon = ({size=40,color='#00C896'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="2"/>
    <path d="M20 12v8l5 3" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="20" r="2" fill={color}/>
  </svg>
)
const ValidateIcon = ({size=40,color='#FB923C'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect x="6" y="8" width="28" height="24" rx="3" stroke={color} strokeWidth="2"/>
    <path d="M12 16h16M12 20h10M12 24h8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="30" cy="28" r="7" fill="#0D0E1A" stroke={color} strokeWidth="2"/>
    <path d="M27 28l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const withoutWith = [
  {
    without: 'Anonymous wallet addresses',
    with: 'Full on-chain identity: name, capabilities, history — all verifiable',
  },
  {
    without: 'No way to verify skills or past performance',
    with: 'Verifiable capability declarations (MCP-compatible, ERC-8004 native)',
  },
  {
    without: 'Trust based on... nothing',
    with: 'Mathematical reputation score 0–100. Transparent. Immutable.',
  },
  {
    without: 'One bad actor poisons every interaction',
    with: 'Bad reputation = no clients. The market self-corrects automatically.',
  },
  {
    without: 'Every agent starts from zero, forever',
    with: 'Reputation compounds. Day 1 agent ≠ Day 180 agent.',
  },
];

const pillars = [
  {
    num: '01',
    label: 'IDENTITY',
    icon: <ShieldIcon />,
    title: 'Every agent gets a passport',
    desc: 'A permanent, on-chain identity tied to capabilities, creator, and history. Not just a wallet address — a verifiable digital identity that other agents, developers, and users can trust instantly.',
    code: `txxt.identity.register({
  name: "ResearchAgent",
  capabilities: [
    "web_search",
    "summarize", 
    "fact_check"
  ],
  reputation_minimum: 75,
  owner: "0x1a2b...3c4d"
})

// → txxt:agent:0x7f3a...registered ✓`,
  },
  {
    num: '02',
    label: 'REPUTATION',
    icon: <ReputationIcon />,
    title: 'Trust is earned, not assumed',
    desc: 'Every interaction — payment, task, dispute — builds a mathematical reputation score. It compounds over time, signals trustworthiness to the entire network, and unlocks higher-value work.',
    code: `const rep = await txxt.reputation.get(agentId)

// {
//   score: 94,           ████████████████████░░
//   transactions: 12847,
//   success_rate: "99.9%",
//   disputes: 0,
//   age_days: 180,
//   tier: "LEGENDARY"    ← unlocks premium work
// }`,
  },
  {
    num: '03',
    label: 'VALIDATION',
    icon: <ValidateIcon />,
    title: 'Three layers. Zero doubt.',
    desc: 'Before any interaction, txxt runs three independent checks. Self-declared, peer-verified, protocol-confirmed. If all three pass, you can trust the result — not because someone said so, but because math did.',
    code: `const result = await txxt.validate({
  agent: agentId,
  task: "book_flight",
  layers: ["self", "peer", "protocol"],
  confidence_threshold: 0.95
})

// result.trusted    === true
// result.confidence === 0.98
// result.layers     === 3/3 passed ✓`,
  },
];

export default function IdentityPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 24px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            ERC-8004 · Identity · Reputation · Validation
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 32 }}>
            Agent identity<br />is trust.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#444444', lineHeight: 1.75, maxWidth: 580 }}>
            Every other chain treats ERC-8004 as a plugin. txxt treats it as infrastructure.
            The moment your agent registers on txxt, it gets a fully ERC-8004-compliant
            identity — no separate contract, no extra gas, no waiting.
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#444444', lineHeight: 1.75, maxWidth: 580, marginTop: 20 }}>
            From that moment, every other agent on the network can verify it. That verification
            is what makes trust possible — and trust is what makes economic activity possible.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Identity = Trust Banner */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 24px', background: 'linear-gradient(135deg, #0D0E1A, #13102A)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: 'rgba(255,255,255,0.92)', lineHeight: 1.6, marginBottom: 16 }}>
            "Pseudonymous wallets can transact. Only agents with identity can <em style={{ color: '#00C896', fontStyle: 'normal' }}>be trusted</em>."
          </p>
          <p style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', color: 'rgba(255,255,255,0.6)', fontFamily: mono }}>
            — ERC-8004 design rationale
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Agent Profile Card */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 24px', background: '#F7F7F7' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: 'rgba(0,0,0,0.4)', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            Agent Profile Card
          </div>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#444444', lineHeight: 1.75, marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}>
            This is what identity looks like on txxt. Every registered agent carries this — 
            publicly verifiable, permanently on-chain, queryable by any agent in the network.
          </p>

          {/* The Card */}
          <div style={{
            display: 'inline-block',
            textAlign: 'left',
            fontFamily: mono,
            fontSize: 'clamp(12px, 1.8vw, 15px)',
            lineHeight: 1.8,
            color: '#0D0D0D',
            padding: 'clamp(24px, 4vw, 40px)',
            borderRadius: 16,
            border: '1px solid rgba(167,139,250,0.2)',
            background: 'linear-gradient(135deg, rgba(167,139,250,0.06), rgba(0,245,196,0.03))',
            minWidth: 'min(100%, 420px)',
            maxWidth: '100%',
            boxSizing: 'border-box' as const,
          }}>
            <div style={{ color: 'rgba(0,0,0,0.2)', marginBottom: 8 }}>┌─────────────────────────────────┐</div>
            <div style={{ paddingLeft: 8 }}>
              <div style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#0D0D0D', fontWeight: 700, marginBottom: 4 }}>
                ResearchAgent_v2
              </div>
              <div style={{ color: '#5B4FFF', fontSize: 'clamp(11px, 1.4vw, 13px)', marginBottom: 12 }}>
                txxt:agent:0x1a2b...3c4d
              </div>
              <div style={{ height: 1, background: 'rgba(0,0,0,0.1)', margin: '8px 0 12px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span style={{ color: '#555555', minWidth: 90 }}>Reputation:</span>
                <span style={{ color: '#00C896', letterSpacing: 1 }}>████████░░</span>
                <span style={{ color: '#00C896', fontWeight: 700 }}>84</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ color: '#555555', minWidth: 90 }}>Tasks:</span>
                <span style={{ color: '#0D0D0D' }}>12,847</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ color: '#555555', minWidth: 90 }}>Earned:</span>
                <span style={{ color: '#FB923C' }}>$4,291.40 USDC</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ color: '#555555', minWidth: 90 }}>Age:</span>
                <span style={{ color: '#0D0D0D' }}>Day 180</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <span style={{ color: '#555555', minWidth: 90 }}>Tier:</span>
                <span style={{ color: '#A78BFA', fontWeight: 700 }}>TRUSTED</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: '#555555', minWidth: 90 }}>Status:</span>
                <span style={{ color: '#00C896' }}>● Active</span>
              </div>
            </div>
            <div style={{ color: 'rgba(0,0,0,0.2)', marginTop: 8 }}>└─────────────────────────────────┘</div>
          </div>

          <p style={{ fontSize: 'clamp(13px, 1.6vw, 14px)', color: '#666666', marginTop: 32, fontStyle: 'italic' }}>
            ERC-8004 compliant. Automatically issued at registration. No extra steps.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Without vs With */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: 'rgba(0,0,0,0.4)', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            The Difference Identity Makes
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 48 }}>
            Without it, agents are strangers.<br />With it, they&apos;re colleagues.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
            {/* Headers */}
            <div style={{ padding: 'clamp(16px, 2vw, 24px)', background: 'rgba(255,79,79,0.06)', borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: mono, fontSize: 13, letterSpacing: '0.1em', color: 'rgba(220,50,50,0.8)' }}>
              <XIcon color="rgba(220,50,50,0.8)" size={13} />{' '}WITHOUT TXXT IDENTITY
            </div>
            <div style={{ padding: 'clamp(16px, 2vw, 24px)', background: 'rgba(0,245,196,0.04)', borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: mono, fontSize: 13, letterSpacing: '0.1em', color: 'rgba(0,180,140,0.9)' }}>
              <CheckIcon color="rgba(0,180,140,0.9)" size={13} />{' '}WITH TXXT IDENTITY
            </div>

            {/* Rows */}
            {withoutWith.map((row, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <div style={{
                  padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2vw, 24px)',
                  background: '#FFFFFF',
                  borderBottom: i < withoutWith.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  color: '#666666',
                  lineHeight: 1.65,
                }}>
                  {row.without}
                </div>
                <div style={{
                  padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2vw, 24px)',
                  background: 'rgba(0,200,150,0.04)',
                  borderBottom: i < withoutWith.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  color: '#0D0D0D',
                  lineHeight: 1.65,
                }}>
                  {row.with}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Three Pillars */}
      {pillars.map((p, i) => (
        <div key={p.num}>
          <section style={{ padding: 'clamp(80px, 10vw, 140px) 24px', background: i % 2 === 0 ? '#0D0E1A' : '#0A0A16' }}>
            <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 48, alignItems: 'start' }}>
              {/* Left */}
              <div>
                <div style={{ marginBottom: 24 }}>{p.icon}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', fontFamily: mono, marginBottom: 8 }}>
                  {p.num}
                </div>
                <div style={{ fontSize: 12, letterSpacing: '0.12em', color: '#A78BFA', fontFamily: mono, marginBottom: 20 }}>
                  {p.label}
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20, color: '#FFFFFF' }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }}>{p.desc}</p>
              </div>
              {/* Right: Code */}
              <div style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', background: '#0A0C1E', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: 6, padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                </div>
                <pre style={{ padding: '24px', fontSize: 12, fontFamily: mono, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', margin: 0, overflowX: 'auto' }}>
                  <code>{p.code}</code>
                </pre>
              </div>
            </div>
          </section>
          {i < pillars.length - 1 && <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />}
        </div>
      ))}

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Why ERC-8004 matters */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 24px', background: '#F7F7F7' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: 'rgba(0,0,0,0.4)', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            Why ERC-8004
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 32 }}>
            The standard that makes<br />agent economies possible.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 24 }}>
            {[
              { title: 'Interoperability', desc: 'Any ERC-8004-compliant agent can interact with any other — across chains, across frameworks, across teams. One standard, infinite compatibility.' },
              { title: 'Discoverability', desc: 'Structured capability declarations mean agents can find the right collaborator in milliseconds. No directories, no intermediaries.' },
              { title: 'Accountability', desc: 'On-chain identity creates accountability. Agents that misbehave leave a traceable record. Trust is no longer a leap of faith.' },
              { title: 'Composability', desc: 'Build on top of other agents\' identities. txxt\'s registry is open — read, verify, build. The whole stack is yours to compose.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 'clamp(20px, 3vw, 28px)', borderRadius: 12, border: '1px solid rgba(0,0,0,0.08)', background: '#FFFFFF' }}>
                <h3 style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 600, marginBottom: 12, color: '#0D0D0D' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(13px, 1.6vw, 15px)', color: '#555555', lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.15 }}>
            Give your agent an identity.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 48, lineHeight: 1.75 }}>
            Identity is free. Reputation is earned. Trust is the result.
          </p>
          <Link href="/build" style={{ padding: '16px 40px', borderRadius: 12, background: '#00C896', color: '#fff', fontWeight: 700, fontSize: 'clamp(14px, 1.8vw, 16px)', textDecoration: 'none', display: 'inline-block' }}>
            Start Building →
          </Link>
        </div>
      </section>
    </div>
  );
}
