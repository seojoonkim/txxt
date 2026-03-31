import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const mono = "var(--font-fira), 'Courier New', monospace";

function ArrowIcon() {
  return (
    <svg width={20} height={12} viewBox="0 0 20 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M0 6h16M13 1l5 5-5 5" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function UsecasesPage() {
  const t = useTranslations('usecases');

  const usecases = [
    {
      title: t('items.defi.title'),
      agents: 3,
      flow: [t('items.defi.flow.monitor'), t('items.defi.flow.calculate'), t('items.defi.flow.execute')],
      cost: '$0.12 / rebalance',
      color: '#00C896',
      desc: t('items.defi.description'),
    },
    {
      title: t('items.legal.title'),
      agents: 3,
      flow: [t('items.legal.flow.draft'), t('items.legal.flow.review'), t('items.legal.flow.sign')],
      cost: '$0.45 / document',
      color: '#5B4FFF',
      desc: t('items.legal.description'),
    },
    {
      title: t('items.supply.title'),
      agents: 3,
      flow: [t('items.supply.flow.monitor'), t('items.supply.flow.predict'), t('items.supply.flow.order')],
      cost: '$0.08 / cycle',
      color: '#FB923C',
      desc: t('items.supply.description'),
    },
    {
      title: t('items.research.title'),
      agents: 3,
      flow: [t('items.research.flow.search'), t('items.research.flow.analyze'), t('items.research.flow.summarize')],
      cost: '$0.25 / report',
      color: '#00C896',
      desc: t('items.research.description'),
    },
    {
      title: t('items.support.title'),
      agents: 3,
      flow: [t('items.support.flow.route'), t('items.support.flow.respond'), t('items.support.flow.escalate')],
      cost: '$0.03 / ticket',
      color: '#5B4FFF',
      desc: t('items.support.description'),
    },
    {
      title: t('items.content.title'),
      agents: 3,
      flow: [t('items.content.flow.create'), t('items.content.flow.verify'), t('items.content.flow.license')],
      cost: '$0.18 / asset',
      color: '#FB923C',
      desc: t('items.content.description'),
    },
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(80px,10vw,140px) 0 clamp(40px,5vw,60px)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#555', fontFamily: mono, marginBottom: 24, fontWeight: 600 }}>
            {t('hero.eyebrow')}
          </p>
          <h1 style={{
            fontSize: 'clamp(48px,8vw,96px)', fontWeight: 800, letterSpacing: '-0.03em',
            lineHeight: 1, marginBottom: 24, color: '#0D0D0D',
          }}>
            {t('hero.titleStart')} <span style={{ color: '#00C896' }}>{t('hero.titleAccent')}</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.5vw,22px)', color: '#555', maxWidth: 640, margin: '0 auto', lineHeight: 1.6 }}>
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section style={{ background: '#F8F8F8', padding: 'clamp(60px,8vw,100px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div className="usecases-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: 28,
          }}>
            {usecases.map((uc) => (
              <div key={uc.title} style={{
                background: '#FFFFFF', borderRadius: 16, padding: 36,
                border: '1px solid #EBEBEB', transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: '50%', background: uc.color, flexShrink: 0,
                  }} />
                  <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em', margin: 0 }}>
                    {uc.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6, marginBottom: 24 }}>
                  {uc.desc}
                </p>

                {/* Flow */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24,
                  flexWrap: 'wrap',
                }}>
                  {uc.flow.map((step, i) => (
                    <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{
                        fontFamily: mono, fontSize: 13, fontWeight: 600,
                        background: `${uc.color}15`, color: uc.color,
                        padding: '6px 14px', borderRadius: 6, whiteSpace: 'nowrap',
                      }}>
                        {step}
                      </span>
                      {i < uc.flow.length - 1 && <ArrowIcon />}
                    </div>
                  ))}
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: mono, fontSize: 13, color: '#999' }}>
                    {t('agentsLabel', {count: uc.agents})}
                  </span>
                  <span style={{
                    fontFamily: mono, fontSize: 13, fontWeight: 600,
                    color: '#00C896', background: 'rgba(0,200,150,0.08)',
                    padding: '4px 12px', borderRadius: 4,
                  }}>
                    {uc.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 480px) {
              .usecases-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(60px,8vw,120px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: 20,
          }}>
            {t('cta.titleStart')} <span style={{ color: '#5B4FFF' }}>{t('cta.titleAccent')}</span>
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 40, lineHeight: 1.6 }}>
            {t('cta.description')}
          </p>
          <Link href="/build" style={{
            display: 'inline-block', padding: '16px 40px', borderRadius: 8,
            background: '#00C896', color: '#FFF', fontFamily: mono, fontSize: 16,
            fontWeight: 700, textDecoration: 'none',
          }}>
            {t('cta.button')}
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
