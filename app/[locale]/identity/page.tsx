import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

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
const ArrowRightIcon = ({size=16,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle',marginLeft:6}}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const ActiveDotIcon = ({color='#00C896',size=10}:{color?:string,size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 10 10" fill="none" style={{display:'inline-block',verticalAlign:'middle',marginRight:4}}>
    <circle cx="5" cy="5" r="4" fill={color} opacity="0.25"/>
    <circle cx="5" cy="5" r="2.5" fill={color}/>
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

const pillarBase = [
  {
    num: '01',
    icon: <ShieldIcon />,
  },
  {
    num: '02',
    icon: <ReputationIcon />,
  },
  {
    num: '03',
    icon: <ValidateIcon />,
  },
];

export default function IdentityPage() {
  const t = useTranslations('identity');

  const withoutWith = [
    {without: t('comparison.wallet.without'), with: t('comparison.wallet.with')},
    {without: t('comparison.capabilities.without'), with: t('comparison.capabilities.with')},
    {without: t('comparison.reputation.without'), with: t('comparison.reputation.with')},
    {without: t('comparison.pipeline.without'), with: t('comparison.pipeline.with')},
    {without: t('comparison.portability.without'), with: t('comparison.portability.with')},
  ];

  const pillars = [
    {
      num: pillarBase[0].num,
      label: t('pillars.identity.label'),
      icon: pillarBase[0].icon,
      title: t('pillars.identity.title'),
      desc: t('pillars.identity.description'),
      code: t('pillars.identity.code'),
    },
    {
      num: pillarBase[1].num,
      label: t('pillars.reputation.label'),
      icon: pillarBase[1].icon,
      title: t('pillars.reputation.title'),
      desc: t('pillars.reputation.description'),
      code: t('pillars.reputation.code'),
    },
    {
      num: pillarBase[2].num,
      label: t('pillars.validation.label'),
      icon: pillarBase[2].icon,
      title: t('pillars.validation.title'),
      desc: t('pillars.validation.description'),
      code: t('pillars.validation.code'),
    },
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(56px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00C896', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('hero.eyebrow')}
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            {t('hero.titleLine1')}<br /><em style={{ fontStyle: 'normal', color: '#5B4FFF' }}>{t('hero.titleAccent')}</em> {t('hero.titleLine2')}
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560 }}>
            {t('hero.description1')}
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560, marginTop: 20 }}>
            {t('hero.description2')}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Identity = Trust Banner */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: 'linear-gradient(135deg, #0D0E1A, #13102A)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: 'rgba(255,255,255,0.92)', lineHeight: 1.6, marginBottom: 16 }}>
            {t('banner.quoteStart')} <em style={{ color: '#00C896', fontStyle: 'normal' }}>{t('banner.quoteAccent')}</em>{t('banner.quoteEnd')}
          </p>
          <p style={{ fontSize: 'clamp(13px, 1.8vw, 15px)', color: 'rgba(255,255,255,0.8)', fontFamily: mono }}>
            {t('banner.caption')}
          </p>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Agent Profile Card */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F7F7F7' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('profile.eyebrow')}
          </div>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}>
            {t('profile.description')}
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
                 {t('profile.card.name')}
              </div>
              <div style={{ color: '#5B4FFF', fontSize: 'clamp(11px, 1.4vw, 13px)', marginBottom: 12 }}>
                txxt:agent:0x1a2b...3c4d
              </div>
              <div style={{ height: 1, background: 'rgba(0,0,0,0.1)', margin: '8px 0 12px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                 <span style={{ color: '#555555', minWidth: 90 }}>{t('profile.card.reputation')}</span>
                <span style={{ color: '#00C896', letterSpacing: 1 }}>████████░░</span>
                <span style={{ color: '#00C896', fontWeight: 700 }}>84</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                 <span style={{ color: '#555555', minWidth: 90 }}>{t('profile.card.tasks')}</span>
                <span style={{ color: '#0D0D0D' }}>12,847</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                 <span style={{ color: '#555555', minWidth: 90 }}>{t('profile.card.earned')}</span>
                <span style={{ color: '#FB923C' }}>$4,291.40 USDC</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                 <span style={{ color: '#555555', minWidth: 90 }}>{t('profile.card.age')}</span>
                <span style={{ color: '#0D0D0D' }}>{t('profile.card.ageValue')}</span>
              </div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                 <span style={{ color: '#555555', minWidth: 90 }}>{t('profile.card.tier')}</span>
                <span style={{ color: '#A78BFA', fontWeight: 700 }}>{t('profile.card.tierValue')}</span>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                 <span style={{ color: '#555555', minWidth: 90 }}>{t('profile.card.status')}</span>
                 <span style={{ color: '#00C896' }}><ActiveDotIcon />{t('profile.card.active')}</span>
              </div>
            </div>
            <div style={{ color: 'rgba(0,0,0,0.2)', marginTop: 8 }}>└─────────────────────────────────┘</div>
          </div>

          <p style={{ fontSize: 'clamp(13px, 1.6vw, 14px)', color: '#666666', marginTop: 32, fontStyle: 'italic' }}>
            {t('profile.footnote')}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Without vs With */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('difference.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            {t('difference.titleLine1')}<br />{t('difference.titleLine2')}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)' }}>
            {/* Headers */}
            <div style={{ padding: 'clamp(16px, 2vw, 24px)', background: 'rgba(255,79,79,0.06)', borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: mono, fontSize: 13, letterSpacing: '0.1em', color: 'rgba(220,50,50,0.8)' }}>
              <XIcon color="rgba(220,50,50,0.8)" size={13} />{' '}{t('difference.without')}
            </div>
            <div style={{ padding: 'clamp(16px, 2vw, 24px)', background: 'rgba(0,245,196,0.04)', borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: mono, fontSize: 13, letterSpacing: '0.1em', color: 'rgba(0,180,140,0.9)' }}>
              <CheckIcon color="rgba(0,180,140,0.9)" size={13} />{' '}{t('difference.with')}
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
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Three Pillars */}
      {pillars.map((p, i) => (
        <div key={p.num}>
          <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: i % 2 === 0 ? '#0D0E1A' : '#0A0A16' }}>
            <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 48, alignItems: 'start' }}>
              {/* Left */}
              <div>
                <div style={{ marginBottom: 24 }}>{p.icon}</div>
                <div style={{ fontSize: 12, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', fontFamily: mono, marginBottom: 8 }}>
                  {p.num}
                </div>
                <div style={{ fontSize: 12, letterSpacing: '0.12em', color: '#A78BFA', fontFamily: mono, marginBottom: 20 }}>
                  {p.label}
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16, color: '#FFFFFF' }}>
                  {p.title}
                </h2>
                <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }}>{p.desc}</p>
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
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F7F7F7' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('why.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            {t('why.titleLine1')}<br />{t('why.titleLine2')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: 24 }}>
            {[
               { title: t('why.cards.interoperability.title'), desc: t('why.cards.interoperability.description') },
               { title: t('why.cards.discoverability.title'), desc: t('why.cards.discoverability.description') },
               { title: t('why.cards.accountability.title'), desc: t('why.cards.accountability.description') },
               { title: t('why.cards.composability.title'), desc: t('why.cards.composability.description') },
            ].map((item, i) => (
              <div key={i} style={{ padding: 'clamp(20px, 3vw, 28px)', borderRadius: 12, border: '1px solid rgba(0,0,0,0.08)', background: '#FFFFFF' }}>
                <h3 style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 600, marginBottom: 12, color: '#0D0D0D' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(13px, 1.6vw, 15px)', color: '#555555', lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 48, lineHeight: 1.75 }}>
            {t('cta.description')}
          </p>
          <Link href="/build" style={{ padding: '16px 40px', borderRadius: 12, background: '#00C896', color: '#fff', fontWeight: 700, fontSize: 'clamp(14px, 1.8vw, 16px)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            {t('cta.button')}<ArrowRightIcon color="#fff" size={18} />
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
