import React from 'react';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

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

const specBase = [
  { value: '100,000 TPS', color: '#5B4FFF' },
  { value: '<10ms Blocks', color: '#00BF8A' },
  { value: '$0.0003 USDC', color: '#FB923C' },
  { value: 'AgentVM', color: '#5B4FFF' },
  { value: 'Agent-Centric State', color: '#00BF8A' },
  { value: 'PoAW Consensus', color: '#F59E0B' },
  { value: 'x402 Native', color: '#00BF8A' },
  { value: 'ERC-8004 Native', color: '#5B4FFF' },
];

const layerBase = [
  { num: '04', color: '#5B4FFF' },
  { num: '03', color: '#00BF8A' },
  { num: '02', color: '#F59E0B' },
  { num: '01', color: '#888888' },
];

const poawStepBase: { emoji: React.ReactNode; color: string }[] = [
  { emoji: null, color: '#5B4FFF' },
  { emoji: null, color: '#00BF8A' },
  { emoji: <StarIcon size={32} />, color: '#F59E0B' },
  { emoji: null, color: '#5B4FFF' },
];

export default function ProtocolPage() {
  const t = useTranslations('protocol');

  const specs = [
    {value: specBase[0].value, headline: t('specs.tps.headline'), sub: t('specs.tps.description'), color: specBase[0].color},
    {value: specBase[1].value, headline: t('specs.blocks.headline'), sub: t('specs.blocks.description'), color: specBase[1].color},
    {value: specBase[2].value, headline: t('specs.usdc.headline'), sub: t('specs.usdc.description'), color: specBase[2].color},
    {value: specBase[3].value, headline: t('specs.agentvm.headline'), sub: t('specs.agentvm.description'), color: specBase[3].color},
    {value: specBase[4].value, headline: t('specs.state.headline'), sub: t('specs.state.description'), color: specBase[4].color},
    {value: specBase[5].value, headline: t('specs.poaw.headline'), sub: t('specs.poaw.description'), color: specBase[5].color},
    {value: specBase[6].value, headline: t('specs.x402.headline'), sub: t('specs.x402.description'), color: specBase[6].color},
    {value: specBase[7].value, headline: t('specs.erc8004.headline'), sub: t('specs.erc8004.description'), color: specBase[7].color},
  ];

  const layers = [
    {num: layerBase[0].num, title: t('layers.agents.title'), items: [t('layers.agents.items.0'), t('layers.agents.items.1'), t('layers.agents.items.2')], color: layerBase[0].color},
    {num: layerBase[1].num, title: t('layers.middleware.title'), items: [t('layers.middleware.items.0'), t('layers.middleware.items.1'), t('layers.middleware.items.2'), t('layers.middleware.items.3')], color: layerBase[1].color},
    {num: layerBase[2].num, title: t('layers.protocol.title'), items: [t('layers.protocol.items.0'), t('layers.protocol.items.1'), t('layers.protocol.items.2')], color: layerBase[2].color},
    {num: layerBase[3].num, title: t('layers.settlement.title'), items: ['Ethereum', 'Solana', 'Base', 'Polygon...'], color: layerBase[3].color},
  ];

  const poawSteps: { emoji: React.ReactNode; title: string; desc: string; color: string }[] = [
    {emoji: poawStepBase[0].emoji, title: t('poaw.steps.step1.title'), desc: t('poaw.steps.step1.description'), color: poawStepBase[0].color},
    {emoji: poawStepBase[1].emoji, title: t('poaw.steps.step2.title'), desc: t('poaw.steps.step2.description'), color: poawStepBase[1].color},
    {emoji: poawStepBase[2].emoji, title: t('poaw.steps.step3.title'), desc: t('poaw.steps.step3.description'), color: poawStepBase[2].color},
    {emoji: poawStepBase[3].emoji, title: t('poaw.steps.step4.title'), desc: t('poaw.steps.step4.description'), color: poawStepBase[3].color},
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(56px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00BF8A', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            {t('hero.eyebrow')}
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            {t('hero.titleLine1')}<br />{t('hero.titleLine2')}
          </h1>
          <p style={{ fontSize: 13, fontFamily: mono, marginBottom: 16, letterSpacing: '0.05em' }}>
            <span style={{ color: '#00BF8A' }}>{t('hero.ribbonPayment')}</span>
            <span style={{ color: '#888888' }}> · </span>
            <span style={{ color: '#5B4FFF' }}>{t('hero.ribbonIdentity')}</span>
            <span style={{ color: '#888888' }}> · </span>
            <span style={{ color: '#F59E0B' }}>{t('hero.ribbonVerification')}</span>
            <span style={{ color: '#888888' }}> — {t('hero.ribbonSuffix')}</span>
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560 }}>
            {t('hero.description')}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Specs — Impact Style */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            {t('numbers.eyebrow')}
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
            {t('architecture.eyebrow')}
          </div>

          <div style={{ fontFamily: mono, fontSize: 'clamp(11px, 1.5vw, 14px)', lineHeight: 1.6, color: '#555555', marginBottom: 48 }}>
            <div style={{ padding: '16px 0', borderBottom: '1px solid rgba(0,0,0,0.08)', color: '#666666' }}>
              {t('architecture.comment')}
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
            {t('poaw.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16, color: '#FFFFFF' }}>
            {t('poaw.title')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 24, maxWidth: 560 }}>
            {t('poaw.descriptionLine1')} <em>{t('poaw.descriptionLine1Emphasis')}</em><br />
            {t('poaw.descriptionLine2')} <em>{t('poaw.descriptionLine2Emphasis')}</em><br />
            {t('poaw.descriptionLine3')} <em>{t('poaw.descriptionLine3Emphasis')}</em><br />
            <span style={{ color: '#F59E0B' }}>{t('poaw.highlight')}</span>
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 16, maxWidth: 560 }}>
            <strong style={{ color: '#FFFFFF' }}>{t('poaw.problemLabel')}</strong> {t('poaw.problemDescription')}
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 48, maxWidth: 560 }}>
            {t('poaw.description2')}
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
            <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{t('poaw.comparisonComment')}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#FB923C' }}>PoW:</span> {t('poaw.comparisonRows.pow')}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#5B4FFF' }}>PoS:</span> {t('poaw.comparisonRows.pos')}</div>
            <div style={{ marginBottom: 12 }}><span style={{ color: '#F59E0B' }}>PoAW:</span> {t('poaw.comparisonRows.poaw')}</div>
            <div style={{ paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 16, color: 'rgba(255,255,255,0.65)' }}>
              <span style={{ color: '#F59E0B' }}>{t('poaw.comparisonResult')}</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Agent Standards */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            {t('interoperability.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            {t('interoperability.titleLine1')}<br />{t('interoperability.titleLine2')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, marginBottom: 40, maxWidth: 560 }}>
            {t('interoperability.description')}
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
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 40, lineHeight: 1.75 }}>
            {t('cta.description')}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, background: '#00BF8A', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              {t('cta.primary')}<ArrowRightIcon />
            </Link>
            <Link href="#" style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
