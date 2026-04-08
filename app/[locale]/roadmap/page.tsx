import React from 'react';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const mono = "var(--font-fira), 'Courier New', monospace";

const ArrowRightIcon = ({size=16,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle',marginLeft:4}}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const timelineBase = [
  { period: 'Q1 2026', color: '#00BF8A' },
  { period: 'Q2 2026', color: '#5B4FFF' },
  { period: 'Q3 2026', color: '#F59E0B' },
  { period: 'Q4 2026', color: '#00BF8A' },
  { period: '2027', color: '#5B4FFF' },
];

const VoteIcon = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="4" y="8" width="24" height="16" rx="3" stroke={color} strokeWidth="2"/>
    <path d="M11 16l3 3 7-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ClipboardIcon = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect x="6" y="6" width="20" height="22" rx="3" stroke={color} strokeWidth="2"/>
    <path d="M12 6V4h8v2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 14h12M10 19h8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const TimeIcon = ({size=32,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="2"/>
    <path d="M16 10v6l4 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function RoadmapPage() {
  const t = useTranslations('roadmap');

  const timeline: { period: string; color: string; items: { title: string; desc: string }[] }[] = [
    {
      period: timelineBase[0].period,
      color: timelineBase[0].color,
      items: [
        {title: t('timeline.q1.launch.title'), desc: t('timeline.q1.launch.description')},
        {title: t('timeline.q1.sdk.title'), desc: t('timeline.q1.sdk.description')},
        {title: t('timeline.q1.cli.title'), desc: t('timeline.q1.cli.description')},
      ],
    },
    {
      period: timelineBase[1].period,
      color: timelineBase[1].color,
      items: [
        {title: t('timeline.q2.python.title'), desc: t('timeline.q2.python.description')},
        {title: t('timeline.q2.mcp.title'), desc: t('timeline.q2.mcp.description')},
        {title: t('timeline.q2.a2a.title'), desc: t('timeline.q2.a2a.description')},
      ],
    },
    {
      period: timelineBase[2].period,
      color: timelineBase[2].color,
      items: [
        {title: t('timeline.q3.playground.title'), desc: t('timeline.q3.playground.description')},
        {title: t('timeline.q3.marketplace.title'), desc: t('timeline.q3.marketplace.description')},
        {title: t('timeline.q3.leaderboard.title'), desc: t('timeline.q3.leaderboard.description')},
      ],
    },
    {
      period: timelineBase[3].period,
      color: timelineBase[3].color,
      items: [
        {title: t('timeline.q4.enterprise.title'), desc: t('timeline.q4.enterprise.description')},
        {title: t('timeline.q4.expansion.title'), desc: t('timeline.q4.expansion.description')},
        {title: t('timeline.q4.governance.title'), desc: t('timeline.q4.governance.description')},
      ],
    },
    {
      period: timelineBase[4].period,
      color: timelineBase[4].color,
      items: [
        {title: t('timeline.future.index.title'), desc: t('timeline.future.index.description')},
        {title: t('timeline.future.poaw.title'), desc: t('timeline.future.poaw.description')},
      ],
    },
  ];

  const govFeatures: { title: string; desc: string; icon: React.ReactNode }[] = [
    { title: t('governance.features.voting.title'), desc: t('governance.features.voting.description'), icon: <VoteIcon size={32} color="#00BF8A" /> },
    { title: t('governance.features.verifiers.title'), desc: t('governance.features.verifiers.description'), icon: <GovernIcon size={32} color="#5B4FFF" /> },
    { title: t('governance.features.threshold.title'), desc: t('governance.features.threshold.description'), icon: <ClipboardIcon size={32} color="#F59E0B" /> },
    { title: t('governance.features.timeWeighted.title'), desc: t('governance.features.timeWeighted.description'), icon: <TimeIcon size={32} color="#FF3366" /> },
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(48px, 8vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00BF8A', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('hero.eyebrow')}
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            {t('hero.titleLine1')}<br />{t('hero.titleLine2')}
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 640 }}>
            {t('hero.description')}
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#00BF8A', fontFamily: mono, marginTop: 20, fontWeight: 600 }}>
            {t('hero.note')}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Timeline */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            {t('timelineSection.eyebrow')}
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: 'clamp(16px, 3vw, 24px)',
              top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom, #00BF8A, #5B4FFF, #F59E0B, #00BF8A, #5B4FFF)',
              borderRadius: 1, opacity: 0.25,
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
                    top: 6, width: 14, height: 14, borderRadius: '50%',
                    background: phase.color, border: '3px solid #F8F8F8',
                    boxShadow: `0 0 0 2px ${phase.color}33`, zIndex: 1,
                  }} />

                  {/* Period label */}
                  <div style={{
                    fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800,
                    fontFamily: mono, color: phase.color,
                    marginBottom: 20, letterSpacing: '-0.02em',
                  }}>
                    {phase.period}
                  </div>

                  {/* Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {phase.items.map(item => (
                      <div key={item.title} style={{
                        padding: 'clamp(16px, 2.5vw, 24px)', borderRadius: 12,
                        border: '1px solid rgba(0,0,0,0.08)', background: '#FFFFFF',
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

          {/* Chain expansion visual */}
          <div style={{
            marginTop: 48, padding: 'clamp(24px, 3vw, 32px)', borderRadius: 14,
            border: '1px solid rgba(0,0,0,0.08)', background: '#FFFFFF',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: 12, fontFamily: mono, color: '#666666', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              {t('timelineSection.supportedChains')}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {[
                { chain: 'Ethereum', q: 'Q1', color: '#00BF8A' },
                { chain: 'Base', q: 'Q1', color: '#00BF8A' },
                { chain: 'Solana', q: 'Q1', color: '#00BF8A' },
                { chain: 'Polygon', q: 'Q4', color: '#00BF8A' },
                { chain: 'Arbitrum', q: 'Q4', color: '#00BF8A' },
                { chain: 'Optimism', q: 'Q4', color: '#00BF8A' },
                { chain: 'Avalanche', q: 'Q4', color: '#00BF8A' },
                { chain: t('timelineSection.moreChains'), q: '2027', color: '#5B4FFF' },
              ].map(c => (
                <span key={c.chain} style={{
                  fontSize: 12, fontFamily: mono, padding: '6px 14px', borderRadius: 8,
                  background: `${c.color}08`, border: `1px solid ${c.color}22`,
                  color: c.color, fontWeight: 600,
                }}>
                  {c.chain} <span style={{ opacity: 0.6 }}>({c.q})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Governance */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#13102A' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('governance.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16, color: '#FFFFFF' }}>
            {t('governance.titleLine1')}<br />{t('governance.titleLine2')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
            {t('governance.descriptionPrefix')} <span style={{ color: '#00BF8A' }}>{t('governance.descriptionAccent')}</span>{t('governance.descriptionSuffix')}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: 16,
          }}>
            {govFeatures.map(f => (
              <div key={f.title} style={{
                padding: 'clamp(24px, 3vw, 32px)', borderRadius: 14,
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
            marginTop: 32, padding: 'clamp(24px, 3vw, 32px)', borderRadius: 14,
            border: '1px solid rgba(0,200,150,0.2)', background: 'rgba(0,200,150,0.06)',
            fontFamily: mono, fontSize: 'clamp(12px, 1.4vw, 14px)',
            lineHeight: 2, color: 'rgba(255,255,255,0.8)',
          }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>{t('governance.formula.comment')}</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: '#5B4FFF' }}>voting_power</span> = cross_chain_reputation × time_weight</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: '#5B4FFF' }}>proposal_threshold</span> = reputation {'≥'} 80 (across any chain)</div>
            <div style={{ marginBottom: 8 }}><span style={{ color: '#5B4FFF' }}>quorum</span> = 33% of active verifiers</div>
            <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 16 }}>
              <span style={{ color: '#00BF8A' }}>{t('governance.formula.result')}</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(91,79,255,0.3), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 40, lineHeight: 1.75 }}>
            {t('cta.description')}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, background: '#00BF8A', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              {t('cta.primary')}<ArrowRightIcon />
            </Link>
            <Link href="/ecosystem" style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
