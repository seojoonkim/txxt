'use client';

import {Link} from '@/i18n/navigation';
import { useEffect, useRef } from 'react';
import {useTranslations} from 'next-intl';

const ArrowRightIcon = ({size=16,color='currentColor'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle',marginLeft:4}}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const mono = "var(--font-fira), 'Courier New', monospace";

type FeedItem = {
  time: string;
  agent: string;
  action: string;
  result: string;
  color: string;
};

// ── SVG Icons (emoji replacements) ───────────────────────────────────────────
function IconDeFi({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" stroke={color} strokeWidth="1.5" />
      <path d="M16 8v3M16 21v3M10.5 11.5l2.1 2.1M19.4 18.4l2.1 2.1M8 16h3M21 16h3M10.5 20.5l2.1-2.1M19.4 13.6l2.1-2.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3.5" fill={color} opacity="0.8" />
    </svg>
  );
}

function IconData({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="6.5" stroke={color} strokeWidth="1.8" />
      <path d="M18 18l5.5 5.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10 13h6M13 10v6" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconInfra({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="5" stroke={color} strokeWidth="1.8" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconCreative({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 26c2-2 4-3 6-1 2 2 4 2 6 0s4-3 6-1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="10" r="2.5" fill={color} opacity="0.7" />
      <circle cx="16" cy="7" r="2.5" fill={color} opacity="0.7" />
      <circle cx="23" cy="10" r="2.5" fill={color} opacity="0.7" />
      <path d="M9 12.5v5M16 9.5v8M23 12.5v5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconResearch({ color }: { color: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10h16M8 15h12M8 20h8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="4" y="5" width="24" height="22" rx="3" stroke={color} strokeWidth="1.6" />
      <circle cx="24" cy="24" r="4" fill={color} opacity="0.2" stroke={color} strokeWidth="1.4" />
      <path d="M27 27l2.5 2.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconID({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="24" height="18" rx="3" stroke={color} strokeWidth="1.6" />
      <circle cx="9" cy="14" r="3" stroke={color} strokeWidth="1.4" />
      <path d="M14 11h8M14 15h6M14 19h4" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconLightning({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L6 16h8l-2 9 12-13h-8l2-9z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill={color} fillOpacity="0.15" />
    </svg>
  );
}

function IconChart({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 22l7-7 5 4 8-11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="15" r="2" fill={color} opacity="0.6" />
      <circle cx="16" cy="19" r="2" fill={color} opacity="0.6" />
      <circle cx="24" cy="8" r="2" fill={color} opacity="0.6" />
    </svg>
  );
}

function IconGlobe({ color }: { color: string }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="22" stroke={color} strokeWidth="2" />
      <ellipse cx="28" cy="28" rx="10" ry="22" stroke={color} strokeWidth="1.6" />
      <path d="M6 28h44M11 16h34M11 40h34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

function LiveFeed({items}: {items: FeedItem[]}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;
    const speed = 0.35;

    const animate = () => {
      pos += speed;
      const halfHeight = el.scrollHeight / 2;
      if (pos >= halfHeight) pos = 0;
      el.scrollTop = pos;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const allItems = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      style={{
        height: 340,
        overflow: 'hidden',
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.1)',
        background: '#0B0B1A',
        boxShadow: '0 0 0 1px rgba(91,79,255,0.12), 0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      {allItems.map((item, i) => (
        <div key={i} style={{
          padding: '13px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          fontFamily: mono,
          fontSize: 'clamp(11px, 1.3vw, 13px)',
          lineHeight: 1.65,
          display: 'flex',
          flexWrap: 'wrap' as const,
          gap: '3px 8px',
          alignItems: 'baseline',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.45)', minWidth: 64 }}>[{item.time}]</span>
          <span style={{ color: item.color, fontWeight: 700 }}>{item.agent}</span>
          <span style={{ color: 'rgba(255,255,255,0.85)' }}>{item.action}</span>
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>→</span>
          <span style={{ color: item.color, fontWeight: 500 }}>{item.result}</span>
        </div>
      ))}
    </div>
  );
}

export default function EcosystemPage() {
  const t = useTranslations('ecosystem');
  const feedItems = t.raw('feed.items') as FeedItem[];

  const categories = [
    { Icon: IconDeFi, title: t('categories.defi.title'), desc: t('categories.defi.description'), count: '3,241', color: '#FB923C' },
    { Icon: IconData, title: t('categories.data.title'), desc: t('categories.data.description'), count: '1,892', color: '#5B4FFF' },
    { Icon: IconInfra, title: t('categories.infra.title'), desc: t('categories.infra.description'), count: '2,104', color: '#00C896' },
    { Icon: IconCreative, title: t('categories.creative.title'), desc: t('categories.creative.description'), count: '4,120', color: '#FB923C' },
    { Icon: IconResearch, title: t('categories.research.title'), desc: t('categories.research.description'), count: '1,490', color: '#5B4FFF' },
  ];

  const stats = [
    { value: '12,847+', label: t('stats.registered'), color: '#5B4FFF' },
    { value: '$2.1M', label: t('stats.payments'), color: '#FB923C' },
    { value: '99.97%', label: t('stats.uptime'), color: '#00C896' },
    { value: '2.3M+', label: t('stats.transactions'), color: '#5B4FFF' },
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(48px, 8vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00C896', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            {t('hero.eyebrow')}
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            {t('hero.titleLine1')}<br />{t('hero.titleLine2')}
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560, marginBottom: 20 }}>
            {t('hero.description1')}
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560 }}>
            {t('hero.description2')}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Stats */}
      <div style={{ background: '#F8F8F8', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(32px, 4vw, 48px) 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8, color: s.color }}>
                {s.value}
              </div>
              <div style={{ fontSize: 10, letterSpacing: '0.12em', color: '#666666', fontFamily: mono, textTransform: 'uppercase' as const }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Day in the Life — Live Feed */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#00C896', boxShadow: '0 0 6px #00C896' }} />
            <span style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00C896', fontFamily: mono, textTransform: 'uppercase' as const }}>
              {t('feed.eyebrow')}
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 12 }}>
            {t('feed.title')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, marginBottom: 36, maxWidth: 560 }}>
            {t('feed.description')}
          </p>

          <LiveFeed items={feedItems} />

          <div style={{ textAlign: 'center', marginTop: 14, fontSize: 12, color: '#666666', fontFamily: mono, letterSpacing: '0.04em' }}>
            {t('feed.caption')}
          </div>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Agent Categories */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            {t('categoriesSection.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 48, color: '#0D0D0D' }}>
            {t('categoriesSection.titleLine1')}<br />{t('categoriesSection.titleLine2')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16 }}>
            {categories.map(cat => (
              <div key={cat.title} style={{
                padding: 'clamp(24px, 3vw, 32px)',
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.1)',
                background: '#FAFAFA',
                transition: 'border-color 0.2s, transform 0.2s',
              }}>
                <div style={{ marginBottom: 18 }}><cat.Icon color={cat.color} /></div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#0D0D0D' }}>{cat.title}</h3>
                  <span style={{ fontSize: 13, color: cat.color, fontFamily: mono, fontWeight: 700 }}>{cat.count}</span>
                </div>
                <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75 }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Agent Lifecycle */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#0D0B1F' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00C896', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const }}>
            {t('lifecycle.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 48, color: '#FFFFFF' }}>
            {t('lifecycle.titleLine1')}<br />{t('lifecycle.titleLine2')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {[
               { step: '01', Icon: IconID, iconColor: '#5B4FFF', title: t('lifecycle.steps.register.title'), desc: t('lifecycle.steps.register.description') },
               { step: '02', Icon: IconData, iconColor: '#00C896', title: t('lifecycle.steps.discover.title'), desc: t('lifecycle.steps.discover.description') },
               { step: '03', Icon: IconLightning, iconColor: '#FB923C', title: t('lifecycle.steps.execute.title'), desc: t('lifecycle.steps.execute.description') },
               { step: '04', Icon: IconChart, iconColor: '#5B4FFF', title: t('lifecycle.steps.reputation.title'), desc: t('lifecycle.steps.reputation.description') },
            ].map((item, i) => (
              <div key={item.step} style={{
                display: 'flex',
                gap: 'clamp(16px, 3vw, 36px)',
                padding: 'clamp(28px, 3.5vw, 40px) 0',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                alignItems: 'flex-start',
              }}>
                <div style={{ minWidth: 36, paddingTop: 2 }}><item.Icon color={item.iconColor} /></div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 12, color: '#5B4FFF', fontFamily: mono, letterSpacing: '0.08em' }}>{item.step}</span>
                    <span style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', fontWeight: 700, color: '#FFFFFF' }}>{item.title}</span>
                  </div>
                  <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(91,79,255,0.3), transparent)' }} />

      {/* Vision CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', textAlign: 'center', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <IconGlobe color="#5B4FFF" />
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16, color: '#0D0D0D' }}>
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 14, lineHeight: 1.75 }}>
            {t('cta.description1')}
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 16, lineHeight: 1.75 }}>
            {t('cta.description2')}
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#888888', marginBottom: 52, lineHeight: 1.75, fontStyle: 'italic' }}>
            {t('cta.quote')}
          </p>
          <Link href="/build" style={{
            padding: '18px 48px',
            borderRadius: 14,
            background: 'linear-gradient(135deg, #7C3AED, #5B4FFF)',
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: 17,
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 24px rgba(91,79,255,0.35)',
            letterSpacing: '-0.01em',
          }}>
            {t('cta.button')}<ArrowRightIcon />
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
