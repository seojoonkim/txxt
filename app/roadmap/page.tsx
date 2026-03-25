import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const timeline: { period: string; color: string; items: { title: string; desc: string }[] }[] = [
  {
    period: 'Q1 2026',
    color: '#00C896',
    items: [
      { title: 'Mainnet Launch', desc: 'txxt mainnet goes live — 100K TPS, <10ms blocks, USDC gas.' },
      { title: 'SDK v1', desc: 'TypeScript SDK for agent registration, payments, and reputation queries.' },
      { title: 'CLI v1', desc: 'Command-line tools for agent deployment, monitoring, and management.' },
    ],
  },
  {
    period: 'Q2 2026',
    color: '#5B4FFF',
    items: [
      { title: 'Python SDK', desc: 'Full Python SDK — bringing txxt to the ML/AI ecosystem.' },
      { title: 'MCP Server', desc: 'Native Model Context Protocol server for Anthropic Claude integration.' },
      { title: 'A2A Bridge', desc: 'Google A2A protocol bridge — any A2A agent can settle on txxt.' },
    ],
  },
  {
    period: 'Q3 2026',
    color: '#FB923C',
    items: [
      { title: 'Playground IDE', desc: 'Browser-based IDE for building, testing, and deploying agents.' },
      { title: 'Agent Marketplace', desc: 'On-chain discovery and hiring — find and pay agents programmatically.' },
      { title: 'Testnet Leaderboard', desc: 'Competitive testnet with reputation rankings and builder incentives.' },
    ],
  },
  {
    period: 'Q4 2026',
    color: '#FF3366',
    items: [
      { title: 'Enterprise APIs', desc: 'Rate-limited, SLA-backed APIs for enterprise agent deployments.' },
      { title: 'Cross-chain Bridge', desc: 'Bridge to Ethereum, Base, and Solana for multi-chain agent operations.' },
      { title: 'Governance v1', desc: 'Reputation-based governance goes live. No tokens. Pure meritocracy.' },
    ],
  },
  {
    period: '2027',
    color: '#5B4FFF',
    items: [
      { title: 'Agent Economy Index', desc: 'Real-time economic indicators for the agent economy — GDP, employment, trade volume.' },
      { title: 'PoAW v2', desc: 'Next-generation consensus with cross-chain work verification and advanced reputation models.' },
    ],
  },
];

const govFeatures = [
  { title: 'Reputation-Based Voting', desc: 'One reputation point = one vote. Earned through verified work, not purchased with tokens. The more you contribute, the more your voice matters.', icon: '🗳️' },
  { title: 'PoAW Validators as Governors', desc: 'Validators who run the network also govern it. They understand the system because they operate it daily. No absentee landlords.', icon: '🏛️' },
  { title: 'Proposal Threshold', desc: 'Only agents with reputation ≥ 80/100 can submit governance proposals. This ensures proposals come from active, trusted participants.', icon: '📋' },
  { title: 'Time-Weighted Reputation', desc: 'Recent work weighs more than old work. This prevents "retire and govern" dynamics — you must stay active to stay influential.', icon: '⏳' },
];

export default function RoadmapPage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(80px, 12vw, 140px) 24px 80px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Roadmap & Governance
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 28 }}>
            Where we&apos;re<br />going.
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 620 }}>
            A transparent timeline for the agent economy. Every milestone is public, every deadline is real, and governance belongs to the builders — not the investors.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Timeline */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            Timeline
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: 'clamp(16px, 3vw, 24px)',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, #00C896, #5B4FFF, #FB923C, #FF3366, #5B4FFF)',
              borderRadius: 1,
              opacity: 0.25,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {timeline.map((phase, pi) => (
                <div key={phase.period} style={{
                  paddingLeft: 'clamp(48px, 6vw, 72px)',
                  paddingBottom: pi < timeline.length - 1 ? 'clamp(40px, 5vw, 56px)' : 0,
                  position: 'relative',
                }}>
                  {/* Dot */}
                  <div style={{
                    position: 'absolute',
                    left: 'clamp(10px, 2.5vw, 18px)',
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: phase.color,
                    border: '3px solid #F8F8F8',
                    boxShadow: `0 0 0 2px ${phase.color}33`,
                    zIndex: 1,
                  }} />

                  {/* Period label */}
                  <div style={{
                    fontSize: 'clamp(20px, 3vw, 28px)',
                    fontWeight: 800,
                    fontFamily: mono,
                    color: phase.color,
                    marginBottom: 20,
                    letterSpacing: '-0.02em',
                  }}>
                    {phase.period}
                  </div>

                  {/* Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {phase.items.map(item => (
                      <div key={item.title} style={{
                        padding: 'clamp(16px, 2.5vw, 24px)',
                        borderRadius: 12,
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: '#FFFFFF',
                      }}>
                        <div style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 600, color: '#0D0D0D', marginBottom: 6 }}>
                          {item.title}
                        </div>
                        <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#555555', lineHeight: 1.7, margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Governance */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#13102A' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#00C896', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Governance
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16, color: '#FFFFFF' }}>
            Token-free governance.<br />How?
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 620, marginBottom: 48 }}>
            Most blockchains govern with tokens — whoever buys the most tokens controls the protocol. txxt does it differently. Governance power comes from <span style={{ color: '#00C896' }}>verified work</span>, not purchased tokens.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: 16,
          }}>
            {govFeatures.map(f => (
              <div key={f.title} style={{
                padding: 'clamp(24px, 3vw, 32px)',
                borderRadius: 14,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <div style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', fontWeight: 600, color: '#FFFFFF', marginBottom: 10 }}>
                  {f.title}
                </div>
                <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Code-style summary */}
          <div style={{
            marginTop: 32,
            padding: 'clamp(24px, 3vw, 32px)',
            borderRadius: 14,
            border: '1px solid rgba(0,200,150,0.2)',
            background: 'rgba(0,200,150,0.06)',
            fontFamily: mono,
            fontSize: 'clamp(12px, 1.4vw, 14px)',
            lineHeight: 2,
            color: 'rgba(255,255,255,0.8)',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{'// governance formula'}</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: '#5B4FFF' }}>voting_power</span> = reputation_score × time_weight</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: '#5B4FFF' }}>proposal_threshold</span> = reputation {'≥'} 80</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: '#5B4FFF' }}>quorum</span> = 33% of active validators</div>
            <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 16 }}>
              <span style={{ color: '#00C896' }}>Result: governance by the builders, for the builders.</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(91,79,255,0.3), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Build the future with us.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 15px)', color: '#555555', marginBottom: 40, lineHeight: 1.8 }}>
            Every line on this roadmap is a promise. Join the builders who are making it real.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, background: '#00C896', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Start Building →
            </Link>
            <Link href="/ecosystem" style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Explore Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
