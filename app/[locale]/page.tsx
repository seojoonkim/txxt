'use client';

import { useEffect, useState } from 'react';
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const mono = "var(--font-fira), 'Courier New', monospace";

const CheckIcon = ({color='#00BF8A',size=16}:{color?:string,size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle'}}>
    <path d="M2.5 8l4 4 7-7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const XIcon = ({color='#E53E3E',size=16}:{color?:string,size?:number}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{display:'inline-block',verticalAlign:'middle'}}>
    <path d="M4 4l8 8M12 4l-8 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

function TerminalCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn(v => !v), 500);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 1 : 0, color: '#00BF8A' }}>▋</span>;
}

/* ===== Layered Architecture Diagram (Card-based) ===== */
function LayeredArchDiagram() {
  const t = useTranslations('home.diagram');
  const agents = [
    { label: 'TravelBot', color: '#5B4FFF' },
    { label: 'TradeAgent', color: '#00BF8A' },
    { label: 'DataBot', color: '#4285F4' },
    { label: 'LegalAI', color: '#4285F4' },
    { label: 'SearchAgent', color: '#00BF8A' },
  ];
  const chains = [
    { label: 'Ethereum', color: '#627EEA' },
    { label: 'Solana', color: '#9945FF' },
    { label: 'Base', color: '#0052FF' },
    { label: 'Polygon', color: '#8247E5' },
    { label: 'Arbitrum', color: '#28A0F0' },
  ];
  const protocols = [
    { label: t('paymentLabel'), color: '#00BF8A' },
    { label: t('identityLabel'), color: '#5B4FFF' },
    { label: t('validationLabel'), color: '#00BF8A' },
  ];

  const cardBase: React.CSSProperties = {
    borderRadius: 16,
    padding: 'clamp(20px, 3vw, 32px)',
    width: '100%',
    maxWidth: 640,
  };

  const pillBase: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 14px',
    borderRadius: 999,
    fontSize: 'clamp(11px, 1.4vw, 13px)',
    fontWeight: 600,
    fontFamily: mono,
    whiteSpace: 'nowrap' as const,
  };

  const ArrowConnector = () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
      <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
        <line x1="1" y1="0" x2="1" y2="24" stroke="#00BF8A" strokeWidth="1.5" strokeDasharray="4,3"/>
        <path d="M-4 22L1 28L6 22" stroke="#00BF8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, width: '100%' }}>
      {/* Layer 1: AI Agents */}
      <div style={{
        ...cardBase,
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <p style={{
          fontSize: 11, letterSpacing: '0.14em', fontWeight: 700,
          color: '#888', fontFamily: mono, margin: '0 0 14px',
          textTransform: 'uppercase', textAlign: 'center',
        }}>
          {t('agentsLayer')}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, justifyContent: 'center' }}>
          {agents.map(a => (
            <span key={a.label} style={{
              ...pillBase,
              background: `${a.color}0A`,
              border: `1px solid ${a.color}25`,
              color: a.color,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: a.color, flexShrink: 0,
              }} />
              {a.label}
            </span>
          ))}
        </div>
      </div>

      <ArrowConnector />

      {/* Layer 2: txxt Middleware (emphasized) */}
      <div style={{
        ...cardBase,
        background: '#FFFFFF',
        border: '2px solid #00BF8A',
        boxShadow: '0 0 0 4px rgba(0,191,138,0.08), 0 4px 16px rgba(0,191,138,0.1)',
        padding: 'clamp(24px, 3.5vw, 40px)',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, justifyContent: 'center' }}>
          <span style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 900,
            color: '#00BF8A', fontFamily: mono,
          }}>
            txxt
          </span>
          <span style={{
            fontSize: 11, letterSpacing: '0.14em', fontWeight: 700,
            color: '#888', fontFamily: mono, textTransform: 'uppercase',
          }}>
            {t('middlewareLayer')}
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, justifyContent: 'center' }}>
          {protocols.map(p => (
            <span key={p.label} style={{
              ...pillBase,
              background: `${p.color}0F`,
              border: `1.5px solid ${p.color}40`,
              color: p.color,
              fontWeight: 700,
            }}>
              {p.label}
            </span>
          ))}
        </div>
        <p style={{
          fontSize: 12, color: 'rgba(0,0,0,0.4)', fontFamily: mono,
          margin: '14px 0 0', lineHeight: 1.6, textAlign: 'center',
        }}>
          {t('middlewareDescription')}
        </p>
      </div>

      <ArrowConnector />

      {/* Layer 3: Settlement Chains */}
      <div style={{
        ...cardBase,
        background: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}>
        <p style={{
          fontSize: 11, letterSpacing: '0.14em', fontWeight: 700,
          color: '#888', fontFamily: mono, margin: '0 0 14px',
          textTransform: 'uppercase', textAlign: 'center',
        }}>
          {t('settlementLayer')}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, justifyContent: 'center' }}>
          {chains.map(c => (
            <span key={c.label} style={{
              ...pillBase,
              background: '#FFFFFF',
              border: `1.5px solid ${c.color}50`,
              color: c.color,
            }}>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const t = useTranslations('home');
  const [copied, setCopied] = useState(false);
  const [txCount, setTxCount] = useState(10000);

  const differentiators = [
    { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><rect x="12" y="18" width="32" height="20" rx="4" stroke="white" strokeWidth="2.5"/><path d="M12 26h32" stroke="white" strokeWidth="2.5"/><rect x="16" y="30" width="8" height="3" rx="1.5" fill="white"/><rect x="27" y="30" width="5" height="3" rx="1.5" fill="white"/></svg>, word: t('solution.cards.payments.word'), title: t('solution.cards.payments.title'), desc: t('solution.cards.payments.description'), color: '#00BF8A', num: '01' },
    { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><circle cx="28" cy="21" r="7" stroke="white" strokeWidth="2.5"/><path d="M14 42c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>, word: t('solution.cards.identity.word'), title: t('solution.cards.identity.title'), desc: t('solution.cards.identity.description'), color: '#5B4FFF', num: '02' },
    { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><path d="M28 12L34 22H44L36 29L39 40L28 33L17 40L20 29L12 22H22L28 12Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round"/></svg>, word: t('solution.cards.atomic.word'), title: t('solution.cards.atomic.title'), desc: t('solution.cards.atomic.description'), color: '#F59E0B', num: '03' },
    { icon: (color: string) => <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><rect width="56" height="56" rx="14" fill={color}/><path d="M28 10L30.5 20H40L32.5 26L35 36L28 30.5L21 36L23.5 26L16 20H25.5L28 10Z" fill="white"/><circle cx="28" cy="46" r="2.5" fill="white"/></svg>, word: t('solution.cards.result.word'), title: t('solution.cards.result.title'), desc: t('solution.cards.result.description'), color: '#00BF8A', num: '04' },
  ];

  const comparisonRows = [
    { area: t('comparison.rows.identity.area'), diy: t('comparison.rows.identity.diy'), txxt: t('comparison.rows.identity.txxt'), color: '#5B4FFF' },
    { area: t('comparison.rows.payments.area'), diy: t('comparison.rows.payments.diy'), txxt: t('comparison.rows.payments.txxt'), color: '#00BF8A' },
    { area: t('comparison.rows.verification.area'), diy: t('comparison.rows.verification.diy'), txxt: t('comparison.rows.verification.txxt'), color: '#00BF8A' },
    { area: t('comparison.rows.multichain.area'), diy: t('comparison.rows.multichain.diy'), txxt: t('comparison.rows.multichain.txxt'), color: '#5B4FFF' },
    { area: t('comparison.rows.onboarding.area'), diy: t('comparison.rows.onboarding.diy'), txxt: t('comparison.rows.onboarding.txxt'), color: '#00BF8A' },
  ];

  const proofRows = [
    { label: t('proof.table.gasFees.label'), them: t('proof.table.gasFees.them'), us: t('proof.table.gasFees.us') },
    { label: t('proof.table.cost.label'), them: t('proof.table.cost.them'), us: t('proof.table.cost.us') },
    { label: 'x402', them: t('proof.table.x402.them'), us: t('proof.table.x402.us') },
    { label: 'ERC-8004', them: t('proof.table.erc8004.them'), us: t('proof.table.erc8004.us') },
    { label: t('proof.table.atomic.label'), them: t('proof.table.atomic.them'), us: t('proof.table.atomic.us') },
    { label: t('proof.table.governance.label'), them: t('proof.table.governance.them'), us: t('proof.table.governance.us') },
  ];

  const integrationCards = [
    { label: 'MCP', fullName: t('integrations.cards.mcp.fullName'), by: t('integrations.cards.mcp.by'), desc: t('integrations.cards.mcp.description'), color: '#FF6B35' },
    { label: 'A2A', fullName: t('integrations.cards.a2a.fullName'), by: t('integrations.cards.a2a.by'), desc: t('integrations.cards.a2a.description'), color: '#4285F4' },
    { label: 'ACP', fullName: t('integrations.cards.acp.fullName'), by: t('integrations.cards.acp.by'), desc: t('integrations.cards.acp.description'), color: '#10A37F' },
    { label: 'ERC-8004', fullName: t('integrations.cards.erc8004.fullName'), by: t('integrations.cards.erc8004.by'), desc: t('integrations.cards.erc8004.description'), color: '#5B4FFF' },
    { label: 'x402', fullName: t('integrations.cards.x402.fullName'), by: t('integrations.cards.x402.by'), desc: t('integrations.cards.x402.description'), color: '#00BF8A' },
    { label: 'CLI', fullName: t('integrations.cards.cli.fullName'), by: t('integrations.cards.cli.by'), desc: t('integrations.cards.cli.description'), color: '#F59E0B' },
    { label: 'SDK', fullName: t('integrations.cards.sdk.fullName'), by: t('integrations.cards.sdk.by'), desc: t('integrations.cards.sdk.description'), color: '#5B4FFF' },
    { label: 'REST', fullName: t('integrations.cards.rest.fullName'), by: t('integrations.cards.rest.by'), desc: t('integrations.cards.rest.description'), color: '#5B4FFF' },
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>

      {/* ===== HERO — Split layout ===== */}
      <section style={{
        background: '#FFFFFF',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', alignItems: 'stretch' }} className="hero-inner">
        {/* Left text block */}
        <div style={{
          flex: '0 0 50%',
          maxWidth: '50%',
          padding: 'clamp(24px, 4vw, 60px) clamp(24px, 3vw, 48px) clamp(24px, 4vw, 60px) clamp(24px, 5vw, 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} className="hero-left">
        <style>{`
          @media (max-width: 1023px) {
            .hero-inner { flex-direction: column !important; }
            .hero-left { flex: 0 0 100% !important; max-width: 100% !important; padding-bottom: 0 !important; }
            .hero-right { flex: 0 0 100% !important; max-width: 100% !important; display: flex !important; border-bottom-left-radius: 0 !important; min-height: 320px; }
          }
          @media (max-width: 600px) {
            .hero-right { min-height: 240px; }
          }
        `}</style>
          <div style={{ maxWidth: 640, width: '100%', textAlign: 'center' as const }}>
            {/* Tagline — above logo */}
            <p style={{
              fontSize: 'clamp(16px, 3vw, 22px)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              lineHeight: 1.5,
              color: '#555555',
              marginBottom: 16,
            }}>
              {t('hero.taglineLine1')}<br />
              <span style={{ color: '#00BF8A' }}>{t('hero.taglineLine2')} <strong>txxt</strong>.</span>
            </p>

            {/* Giant txxt logo — character animation */}
            <style>{`
              @keyframes armLeft {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(7deg); }
              }
              @keyframes armRight {
                0%, 100% { transform: rotate(3deg); }
                50% { transform: rotate(-7deg); }
              }
              @keyframes eyeLeft {
                0%, 75%, 100% { transform: scaleY(1); }
                85% { transform: scaleY(0.5); }
                90% { transform: scaleY(1); }
              }
              @keyframes eyeRight {
                0%, 65%, 100% { transform: scaleY(1); }
                75% { transform: scaleY(0.5); }
                80% { transform: scaleY(1); }
              }
              @keyframes bounceIn {
                0% { transform: scale(0.3); opacity: 0; }
                50% { transform: scale(1.08); opacity: 1; }
                70% { transform: scale(0.95); }
                85% { transform: scale(1.02); }
                100% { transform: scale(1); opacity: 1; }
              }
              @keyframes wobble {
                0%, 100% { transform: scale(1) rotate(0deg); }
                20% { transform: scale(1.04) rotate(-1.5deg); }
                40% { transform: scale(0.97) rotate(1.5deg); }
                60% { transform: scale(1.02) rotate(-0.8deg); }
                80% { transform: scale(0.99) rotate(0.5deg); }
              }
              .txxt-logo {
                animation: bounceIn 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
              }
              .txxt-logo:hover {
                transform: scale(1.04);
                transition: transform 0.2s ease;
              }
              .txxt-t-left {
                display: inline-block;
                transform-origin: bottom center;
                animation: armLeft 2.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                animation-delay: 0.4s;
              }
              .txxt-t-right {
                display: inline-block;
                transform-origin: bottom center;
                animation: armRight 2.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                animation-delay: 0.9s;
              }
              .txxt-x-left {
                display: inline-block;
                transform-origin: center;
                animation: eyeLeft 4.5s ease-in-out infinite;
                animation-delay: 1.2s;
              }
              .txxt-x-right {
                display: inline-block;
                transform-origin: center;
                animation: eyeRight 5.5s ease-in-out infinite;
                animation-delay: 2.2s;
              }
              
            `}</style>
            <div className="txxt-logo" style={{
              fontSize: 'clamp(80px, 28vw, 200px)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: '#00BF8A',
              fontFamily: mono,
              marginBottom: 20,
              display: 'inline-flex',
              alignItems: 'baseline',
              cursor: 'default',
              userSelect: 'none',
            }}>
              <span className="txxt-t-left">t</span>
              <span className="txxt-x-left">x</span>
              <span className="txxt-x-right">x</span>
              <span className="txxt-t-right">t</span>
            </div>

            {/* Sub */}
            <p style={{
              fontSize: 'clamp(14px, 3vw, 18px)', color: '#444444', lineHeight: 1.75,
              marginBottom: 40, maxWidth: 480,
            }}>
              {t('hero.description')}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap' as const }} className="hero-buttons">
              <Link href="/build" style={{
                padding: '13px 0', borderRadius: 10,
                background: '#00BF8A',
                color: '#fff', fontWeight: 700, fontSize: 'clamp(13px, 3.5vw, 16px)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(0,191,138,0.25)',
                textAlign: 'center' as const,
                whiteSpace: 'nowrap' as const,
                flex: '1 1 0',
              }}>{t('hero.buttons.build')}</Link>
              <Link href="/protocol" style={{
                padding: '13px 0', borderRadius: 10,
                background: '#fff',
                border: '1.5px solid rgba(0,0,0,0.15)',
                color: '#0A0A0A', fontWeight: 500, fontSize: 'clamp(13px, 3.5vw, 16px)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                textAlign: 'center' as const,
                whiteSpace: 'nowrap' as const,
                flex: '1 1 0',
              }}>{t('hero.buttons.protocol')}</Link>
              <Link href="https://docs.txxt.network" target="_blank" style={{
                padding: '13px 0', borderRadius: 10,
                background: 'transparent',
                border: '1.5px solid rgba(0,191,138,0.3)',
                color: '#00BF8A', fontWeight: 500, fontSize: 'clamp(13px, 3.5vw, 16px)',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                textAlign: 'center' as const,
                whiteSpace: 'nowrap' as const,
                flex: '1 1 0',
              }}>{t('hero.buttons.docs')}</Link>
            </div>

          </div>
        </div>

        {/* Right video panel + stat bar */}
        <div className="hero-right" style={{
          flex: '0 0 50%',
          maxWidth: '50%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
        }}>
          <video src="/hero-video.mp4" autoPlay loop muted playsInline
            style={{ width: '100%', maxWidth: 520, height: 'auto', objectFit: 'contain', display: 'block' }} />
          {/* Stat bar — below video */}
          <div style={{
            display: 'flex', gap: 'clamp(12px, 3vw, 28px)', justifyContent: 'center', flexWrap: 'nowrap',
            marginTop: 28, paddingTop: 24, width: '100%',
            borderTop: '1px solid rgba(0,0,0,0.06)',
          }}>
            {[
               { value: '<10ms', label: t('hero.stats.latency') },
               { value: '$0.0003', label: t('hero.stats.perTx') },
               { value: '5+', label: t('hero.stats.chains') },
               { value: '100%', label: t('hero.stats.usdcGas') },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center', flex: '1 1 0', minWidth: 0 }}>
                <div style={{ fontSize: 'clamp(13px, 2.5vw, 22px)', fontWeight: 800, color: '#00BF8A', fontFamily: mono, whiteSpace: 'nowrap' }}>{value}</div>
                <div style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', color: '#888', letterSpacing: '0.06em', marginTop: 4, whiteSpace: 'nowrap' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </section>



      {/* ===== THE PROBLEM — Why agents need a middleware layer ===== */}
      <section style={{
        textAlign: 'center',
        position: 'relative',
        background: '#0D1117',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(80px, 12vh, 140px) 24px', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.12em', color: '#888888',
            fontFamily: mono, marginBottom: 24, fontWeight: 700,
          }}>
            {t('problem.eyebrow')}
          </p>

          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: '0 0 24px 0',
            color: '#FFFFFF',
          }}>
            {t('problem.titleLine1')}<br />{t('problem.titleLine2')}
          </h2>
          <h3 style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.7)',
            margin: '0 0 40px 0',
          }}>
            {t('problem.description')}
          </h3>

          {/* Two protocol cards */}
          <div style={{
            maxWidth: 800, margin: '0 auto 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 16,
          }}>
            <div style={{
              padding: 'clamp(24px, 3vw, 32px)',
              borderRadius: 14,
              border: '1px solid rgba(0,191,138,0.2)',
              background: 'rgba(0,191,138,0.08)',
              textAlign: 'left' as const,
            }}>
              <div style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#00BF8A', letterSpacing: '0.08em', marginBottom: 12 }}>{t('problem.cards.payment.label')}</div>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.3 }}>
                {t('problem.cards.payment.title')}
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                {t('problem.cards.payment.description')}
              </p>
            </div>

            <div style={{
              padding: 'clamp(24px, 3vw, 32px)',
              borderRadius: 14,
              border: '1px solid rgba(91,79,255,0.2)',
              background: 'rgba(91,79,255,0.08)',
              textAlign: 'left' as const,
            }}>
              <div style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#5B4FFF', letterSpacing: '0.08em', marginBottom: 12 }}>{t('problem.cards.identity.label')}</div>
              <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', fontWeight: 600, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.3 }}>
                {t('problem.cards.identity.title')}
              </p>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
                {t('problem.cards.identity.description')}
              </p>
            </div>
          </div>

          {/* The punchline */}
          <div style={{
            maxWidth: 700, margin: '0 auto',
            padding: '28px 32px',
            borderRadius: 14,
            background: 'rgba(229,62,62,0.08)',
            border: '1px solid rgba(229,62,62,0.15)',
          }}>
            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75,
              margin: 0,
            }}>
              <strong style={{ color: '#E53E3E' }}>{t('problem.missingPieceLabel')}</strong> {t('problem.missingPieceDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — Layered Architecture ===== */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(80px, 10vw, 140px) 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <p style={{
            fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#5B4FFF',
            fontFamily: mono, marginBottom: 16, textTransform: 'uppercase', textAlign: 'center',
          }}>
            {t('architecture.eyebrow')}
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#0D0D0D',
            textAlign: 'center', marginBottom: 16, letterSpacing: '-0.03em',
          }}>
            {t('architecture.titleLine1')}<br />{t('architecture.titleLine2')}
          </h2>
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#666666',
            textAlign: 'center', maxWidth: 560, margin: '0 auto 64px', lineHeight: 1.75,
          }}>
            {t('architecture.description')}
          </p>
          <LayeredArchDiagram />
        </div>
      </section>

      {/* ===== THE SOLUTION — Why txxt ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ padding: 'clamp(80px, 12vh, 140px) 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.1em', color: '#5B4FFF',
            fontFamily: mono, margin: 0, fontWeight: 700,
          }}>
            {t('solution.eyebrow')}
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: '#0D0D0D',
            margin: '24px 0 16px', letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            {t('solution.titleLine1')}<br />{t('solution.titleLine2')}
          </h2>
          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)', color: '#666666', lineHeight: 1.6,
            margin: '0 auto', maxWidth: 600,
          }}>
            {t('solution.description')}
          </p>
        </div>

        {/* Four differentiators */}
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px 0' }}>
          {differentiators.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 32,
              padding: '40px 0',
              borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              alignItems: 'flex-start',
            }}>
              <div style={{ flexShrink: 0, marginTop: 24 }}>
                {item.icon(item.color)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: item.color,
                  fontFamily: mono, marginBottom: 8, letterSpacing: '0.08em',
                }}>{item.word}</div>
                <h3 style={{
                  fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 700, color: '#0D0D0D',
                  margin: '0 0 8px 0', letterSpacing: '-0.01em',
                }}>{item.title}</h3>
                <p style={{
                  fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.75,
                  margin: 0, maxWidth: '65ch',
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{ padding: '48px 24px clamp(80px, 12vh, 140px)', textAlign: 'center' }}>
          <p style={{
            fontSize: 14, color: '#666666', fontStyle: 'italic',
            fontFamily: mono, margin: 0, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
          }}>
            {t('solution.quote')}
          </p>
        </div>
        </div>
      </section>

      {/* ===== WHY TXXT — DIY vs txxt comparison + code ===== */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(80px, 10vw, 140px) 24px' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.15em', color: '#888888', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' as const, fontWeight: 700 }}>
            {t('comparison.eyebrow')}
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            {t('comparison.titleLine1')}<br />{t('comparison.titleLine2')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 580, marginBottom: 48 }}>
            {t('comparison.description')}
          
          </p>

          {/* Comparison Table — vertical card per row */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 64 }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ padding: '12px 20px', borderRadius: 10, background: '#F5F5F5', fontFamily: mono, fontSize: 11, fontWeight: 700, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                {t('comparison.diyHeader')}
              </div>
              <div style={{ padding: '12px 20px', borderRadius: 10, background: 'rgba(0,191,138,0.08)', fontFamily: mono, fontSize: 11, fontWeight: 700, color: '#00BF8A', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                {t('comparison.txxtHeader')}
              </div>
            </div>
            {comparisonRows.map(row => (
              <div key={row.area} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {/* DIY */}
                <div style={{ padding: '20px', borderRadius: 12, background: '#FAFAFA', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 11, fontFamily: mono, color: '#888888', fontWeight: 600, marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{row.area}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M3 3l8 8M11 3l-8 8" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#777', lineHeight: 1.6 }}>{row.diy}</span>
                  </div>
                </div>
                {/* txxt */}
                <div style={{ padding: '20px', borderRadius: 12, background: 'rgba(0,191,138,0.04)', border: '1px solid rgba(0,191,138,0.15)' }}>
                  <div style={{ fontSize: 11, fontFamily: mono, color: '#888888', fontWeight: 600, marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>{row.area}</div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path d="M2 7l3.5 3.5 6.5-7" stroke="#00BF8A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#1a1a1a', lineHeight: 1.6, fontWeight: 500 }}>{row.txxt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Code Comparison */}
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, letterSpacing: '0.15em', color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' as const, fontWeight: 700 }}>
              {t('comparison.code.eyebrow')}
            </p>
            <h3 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 40 }}>
              {t('comparison.code.titleLine1')}<br />{t('comparison.code.titleLine2')}
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 16 }}>
            {/* DIY */}
            <div style={{ borderRadius: 16, border: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <div style={{
                padding: '12px 20px', background: '#F0F0F0',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#666666' }}>{t('comparison.code.diyTitle')}</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#FF3366', fontWeight: 600 }}>{t('comparison.code.diyBadge')}</span>
              </div>
              <pre style={{
                padding: 20, margin: 0, fontFamily: mono,
                fontSize: 'clamp(11px, 1.2vw, 13px)', lineHeight: 1.65,
                color: '#444444', background: '#FAFAFA',
                overflow: 'auto', maxHeight: 400,
              }}>{`${t('comparison.code.diySnippet.comment')}
import { ethers } from 'ethers';
import { Connection } from '@solana/web3.js';
import { PaymentChannel } from './custom-x402-adapter';
import { IdentityRegistry } from './custom-erc8004';

${t('comparison.code.diySnippet.step1')}
const ethIdentity = await IdentityRegistry.deploy(
  ethProvider, agentMetadata
);
${t('comparison.code.diySnippet.step2')}
const solIdentity = await createSolanaIdentity(
  connection, agentKeypair, metadata
);
${t('comparison.code.diySnippet.step3')}
const ethPayment = await PaymentChannel.create(
  ethProvider, USDC_ETH, recipient
);
${t('comparison.code.diySnippet.step4')}
${t('comparison.code.diySnippet.step5')}
${t('comparison.code.diySnippet.step6')}`}</pre>
            </div>

            {/* txxt */}
            <div style={{ borderRadius: 16, border: '2px solid #00BF8A', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,191,138,0.12)' }}>
              <div style={{
                padding: '12px 20px', background: 'rgba(0,191,138,0.06)',
                borderBottom: '1px solid rgba(0,191,138,0.15)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#00BF8A' }}>{t('comparison.code.txxtTitle')}</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#00BF8A', fontWeight: 600 }}>{t('comparison.code.txxtBadge')}</span>
              </div>
              <div style={{ padding: '28px 20px', fontFamily: mono, fontSize: 'clamp(12px, 1.3vw, 14px)', lineHeight: 2.4, background: '#FFFFFF', overflow: 'auto' }}>
                <div><span style={{ color: '#5B4FFF' }}>import</span>{' '}<span style={{ color: '#0D0D0D' }}>{'{ txxt }'}</span>{' '}<span style={{ color: '#5B4FFF' }}>from</span>{' '}<span style={{ color: '#00BF8A' }}>{`'@txxt/sdk'`}</span>;</div>
                <div><span style={{ color: '#5B4FFF' }}>const</span>{' '}<span style={{ color: '#FB923C', fontWeight: 600 }}>agent</span>{' = '}<span style={{ color: '#0D0D0D' }}>txxt</span>.<span style={{ color: '#00BF8A', fontWeight: 600 }}>connect</span>{'({ apiKey, chains: ['}<span style={{ color: '#00BF8A' }}>{`'eth'`}</span>{', '}<span style={{ color: '#00BF8A' }}>{`'sol'`}</span>{', '}<span style={{ color: '#00BF8A' }}>{`'base'`}</span>{'] });'}</div>
                <div><span style={{ color: '#5B4FFF' }}>await</span>{' '}agent.<span style={{ color: '#00BF8A', fontWeight: 600 }}>register</span>{'({ capabilities: ['}<span style={{ color: '#00BF8A' }}>{`'translate'`}</span>{'] });'}</div>
                <div><span style={{ color: '#5B4FFF' }}>await</span>{' '}agent.<span style={{ color: '#00BF8A', fontWeight: 600 }}>pay</span>{'(url, '}<span style={{ color: '#00BF8A' }}>{`'$0.01'`}</span>{', { chain: '}<span style={{ color: '#00BF8A' }}>{`'base'`}</span>{' });'}</div>
                <div><span style={{ color: '#94A3B8' }}>{t('comparison.code.txxtSnippet.comment')}</span></div>
              </div>
              <div style={{
                padding: '16px 20px', background: 'rgba(0,191,138,0.04)',
                borderTop: '1px solid rgba(0,191,138,0.1)',
                fontSize: 13, color: '#00BF8A', fontFamily: mono, fontWeight: 600,
              }}>
                {t('comparison.code.footer')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — Three Pillars ===== */}
      <section style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{ padding: '80px 24px 0', textAlign: 'center' }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.1em', color: '#5B4FFF',
            fontFamily: mono, marginBottom: 20, fontWeight: 700,
          }}>
            {t('pillars.eyebrow')}
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700,
            letterSpacing: '-0.04em', margin: '0 0 64px 0',
          }}>
            {t('pillars.titleLine1')}<br />{t('pillars.titleLine2')}
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
             <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#5B4FFF', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>{t('pillars.identity.label')}</p>
             <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
               {t('pillars.identity.titleLine1')}<br />{t('pillars.identity.titleLine2')}
             </h3>
             <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.8, maxWidth: 400 }}>
               {t('pillars.identity.description')}
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
              color: '#444444', lineHeight: 2, margin: 0,
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
              color: '#444444', lineHeight: 2, margin: 0,
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
             <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#00BF8A', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>{t('pillars.reputation.label')}</p>
             <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
               {t('pillars.reputation.titleLine1')}<br />{t('pillars.reputation.titleLine2')}
             </h3>
             <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.8, maxWidth: 400 }}>
               {t('pillars.reputation.description')}
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
              color: 'rgba(0,191,138,0.06)', fontFamily: mono,
              lineHeight: 1, marginBottom: 24, letterSpacing: '-0.05em',
            }}>03</div>
             <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#00BF8A', fontFamily: mono, marginBottom: 16, fontWeight: 600 }}>{t('pillars.validation.label')}</p>
             <h3 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
               {t('pillars.validation.titleLine1')}<br />{t('pillars.validation.titleLine2')}
             </h3>
             <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444444', lineHeight: 1.8, maxWidth: 400 }}>
               {t('pillars.validation.description')}
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
              color: '#444444', lineHeight: 2, margin: 0,
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
        </div>
      </section>

      {/* ===== PROOF — Tokenless + Comparison ===== */}
      <section style={{
        textAlign: 'center',
        position: 'relative',
        background: '#F8F8F8',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 40% 50% at 50% 50%, rgba(0,191,138,0.03) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(80px, 12vh, 140px) 24px', position: 'relative', zIndex: 1 }}>
          <p style={{
            fontSize: 13, letterSpacing: '0.12em', color: '#F59E0B',
            fontFamily: mono, marginBottom: 24, fontWeight: 700,
          }}>
            {t('proof.eyebrow')}
          </p>

          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: '0 0 32px 0',
            color: '#0D0D0D',
          }}>
            {t('proof.titleLine1')}<br />
            <span style={{ fontSize: '0.85em', color: '#00BF8A' }}>{t('proof.titleLine2')}</span>
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#555555',
            lineHeight: 1.8,
            maxWidth: 560,
            margin: '0 auto 16px',
          }}>
            {t('proof.description')}
          </p>

          <p style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            color: '#F59E0B',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 56px',
            fontWeight: 700,
            fontFamily: mono,
          }}>
            {t('proof.highlight')}
          </p>

          {/* Gas Cost Simulator */}
          <div style={{
            maxWidth: 560, margin: '0 auto 40px',
            padding: '28px 32px',
            borderRadius: 14,
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <p style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#888', letterSpacing: '0.08em', marginBottom: 16 }}>{t('proof.simulator.title')}</p>
            <input
              type="range"
              min={1000}
              max={1000000}
              step={1000}
              value={txCount}
              onChange={(e) => setTxCount(+e.target.value)}
              style={{ width: '100%', accentColor: '#00BF8A', marginBottom: 16 }}
            />
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#444', margin: '0 0 12px', fontFamily: mono }}>
              {t('proof.simulator.at')} <strong style={{ color: '#0D0D0D' }}>{txCount.toLocaleString()}</strong> {t('proof.simulator.perMonth')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: 8, background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.1)' }}>
                <div style={{ fontSize: 11, color: '#888', fontFamily: mono, marginBottom: 4 }}>{t('proof.simulator.others')}</div>
                <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800, color: '#EF4444', fontFamily: mono }}>${(txCount * 0.05).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: 8, background: 'rgba(0,191,138,0.05)', border: '1px solid rgba(0,191,138,0.1)' }}>
                <div style={{ fontSize: 11, color: '#888', fontFamily: mono, marginBottom: 4 }}>txxt</div>
                <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 800, color: '#00BF8A', fontFamily: mono }}>${(txCount * 0.0003).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#00BF8A', fontWeight: 700, fontFamily: mono, marginTop: 12, textAlign: 'center' }}>
              {t('proof.simulator.save')} ${((txCount * 0.05) - (txCount * 0.0003)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          {/* Comparison table */}
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
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
              background: '#F0F0F0',
              borderBottom: '1px solid rgba(0,0,0,0.12)',
            }}>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#555555', fontWeight: 600, letterSpacing: '0.05em' }}></div>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#555555', fontWeight: 600, letterSpacing: '0.05em', textAlign: 'center' }}>{t('proof.simulator.others')}</div>
              <div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#00BF8A', fontWeight: 700, letterSpacing: '0.05em', textAlign: 'center' }}>txxt</div>
            </div>
            {proofRows.map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < 5 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                background: '#FFFFFF',
              }}>
                <div style={{ padding: '14px 20px', fontSize: 13, fontFamily: mono, color: '#0D0D0D', fontWeight: 600 }}>{row.label}</div>
                <div style={{ padding: '14px 20px', fontSize: 13, color: '#EF4444', textAlign: 'center' }}>
                  <XIcon size={14} />{' '}{row.them}
                </div>
                <div style={{ padding: '14px 20px', fontSize: 13, color: '#00BF8A', fontWeight: 600, textAlign: 'center' }}>
                  <CheckIcon size={14} />{' '}{row.us}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          {/* Eyebrow */}
          <p style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('integrations.eyebrow')}
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            {t('integrations.titleLine1')}<br />{t('integrations.titleLine2')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#444', lineHeight: 1.75, maxWidth: 600, marginBottom: 64 }}>
            {t('integrations.description')}
          </p>

          {/* 좌우 분할 — 다이어그램 + 카드 그리드 */}
          <style>{`
            .integrations-split { display: flex; gap: 48px; align-items: center; }
            @media (max-width: 768px) {
              .integrations-split { flex-direction: column !important; }
              .integrations-diagram { max-width: 480px !important; width: 100% !important; flex: 0 0 auto !important; }
              .integrations-cards { grid-template-columns: 1fr !important; }
            }
          `}</style>
          <div className="integrations-split">
            {/* 왼쪽 — 다이어그램 */}
            <div className="integrations-diagram" style={{ flex: '0 0 45%', position: 'relative', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* 중앙 txxt 노드 */}
              <div style={{
                position: 'absolute', zIndex: 2,
                width: 120, height: 120, borderRadius: '50%',
                background: '#00BF8A', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 40px rgba(0,191,138,0.3)',
              }}>
                <span style={{ fontSize: 24, fontWeight: 900, color: '#fff', fontFamily: mono }}>txxt</span>
              </div>

              {/* 주변 프로토콜 노드 8개 */}
                {[
                  { label: 'MCP', color: '#FF6B35', angle: 0, desc: t('integrations.nodes.mcp') },
                  { label: 'A2A', color: '#4285F4', angle: 45, desc: t('integrations.nodes.a2a') },
                  { label: 'ACP', color: '#10A37F', angle: 90, desc: t('integrations.nodes.acp') },
                  { label: 'x402', color: '#00BF8A', angle: 135, desc: t('integrations.nodes.x402') },
                  { label: 'SDK', color: '#5B4FFF', angle: 180, desc: '@txxt/sdk' },
                  { label: 'CLI', color: '#F59E0B', angle: 225, desc: t('integrations.nodes.cli') },
                  { label: 'REST', color: '#5B4FFF', angle: 270, desc: t('integrations.nodes.rest') },
                  { label: 'ERC-8004', color: '#5B4FFF', angle: 315, desc: t('integrations.nodes.erc8004') },
                ].map(({ label, color, angle, desc }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 260;
                const x = 50 + (r / 7) * Math.cos(rad);
                const y = 50 + (r / 7) * Math.sin(rad);
                return (
                  <div key={label} style={{
                    position: 'absolute',
                    left: `${x}%`, top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      width: 92, height: 92, borderRadius: '50%',
                      background: '#FFFFFF', border: `2.5px solid ${color}`,
                      display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 4px 20px ${color}30, 0 0 0 6px #FFFFFF`,
                      position: 'relative', zIndex: 3,
                    }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color, fontFamily: mono }}>{label}</span>
                      <span style={{ fontSize: 11, color: '#666', marginTop: 3 }}>{desc}</span>
                    </div>
                  </div>
                );
              })}

              {/* 연결선 SVG */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }} viewBox="0 0 100 100">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 37;
                  const x2 = 50 + r * Math.cos(rad);
                  const y2 = 50 + r * Math.sin(rad);
                  return (
                    <line key={angle} x1="50" y1="50" x2={x2} y2={y2}
                      stroke="rgba(0,191,138,0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
                  );
                })}
              </svg>
            </div>

            {/* 오른쪽 — 8카드 그리드 */}
            <div className="integrations-cards" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {integrationCards.map((item) => (
                <div key={item.label} style={{
                  padding: '20px 24px', borderRadius: 16,
                  background: '#F8F8F8',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: item.color, fontFamily: mono }}>{item.label}</span>
                    <span style={{ fontSize: 11, color: '#888', letterSpacing: '0.05em' }}>{item.by}</span>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#0D0D0D', marginBottom: 6 }}>{item.fullName}</div>
                  <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO MARQUEE ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '48px 0', overflow: 'hidden' }}>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <p style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, textAlign: 'center', marginBottom: 24, textTransform: 'uppercase' }}>
            {t('builtWith')}
        </p>
        <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} style={{ display: 'flex', gap: 16, paddingRight: 16 }}>
              {['Ethereum', 'Solana', 'Base', 'Polygon', 'Arbitrum', 'MCP', 'A2A', 'x402', 'ERC-8004', 'USDC', 'PoAW'].map((name) => (
                <span key={`${setIdx}-${name}`} style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  borderRadius: 999,
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.08)',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#555',
                  fontFamily: mono,
                  whiteSpace: 'nowrap',
                }}>
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== AGENTSCRIPT — Code showcase ===== */}
      <section style={{ background: '#F8F8F8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: 'clamp(80px, 10vw, 140px) 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{
              fontSize: 13, letterSpacing: '0.1em', color: '#5B4FFF',
              fontFamily: mono, marginBottom: 16, fontWeight: 700,
            }}>
              {t('agentscript.eyebrow')}
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700,
              letterSpacing: '-0.04em', margin: '0 0 16px 0', lineHeight: 1.2,
            }}>
              {t('agentscript.titleLine1')}<br />{t('agentscript.titleLine2')}
            </h2>
            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              color: '#555555',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: '0 0 16px 0',
            }}>
              {t('agentscript.description')}
            </p>
            <p style={{
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              color: '#00BF8A',
              lineHeight: 1.6,
              maxWidth: 520,
              margin: 0,
              fontFamily: mono,
              fontWeight: 600,
            }}>
              {t('agentscript.subdescription')}
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
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: mono, marginLeft: 8 }}>
                {t('agentscript.filename')}
              </span>
              <button
                onClick={() => {
                  const code = `agent TravelPlanner {
  identity: "txxt:0x1a2b...verified"
  reputation_minimum: 80

  task hire_flight_agent(destination) {
    let agent = discover({
      capability: "flight_search",
      min_reputation: 85
    })

    let result = delegate(agent, search(destination), {
      payment: "0.004 USDC",
      gas: "0.0003 USDC"
    })

    rate(agent, score: 95, proof: result.receipt)
  }
}`;
                  navigator.clipboard.writeText(code);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                style={{
                  marginLeft: 'auto',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 6,
                  padding: '4px 10px',
                  color: copied ? '#00BF8A' : 'rgba(255,255,255,0.5)',
                  fontSize: 12,
                  fontFamily: mono,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {copied ? t('agentscript.copied') : t('agentscript.copy')}
              </button>
            </div>
            <div style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
              <pre style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', fontFamily: mono, lineHeight: 2, margin: 0, overflowX: 'auto' as const }}>
                <code>
                  <span style={{ color: '#5B4FFF' }}>agent</span>{' '}
                  <span style={{ color: '#00BF8A' }}>TravelPlanner</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.identity')}</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.75)' }}>identity:</span>{' '}
                  <span style={{ color: '#f59e0b' }}>&quot;txxt:0x1a2b...verified&quot;</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.75)' }}>reputation_minimum:</span>{' '}
                  <span style={{ color: '#00BF8A' }}>80</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.scoreGate')}</span>{'\n'}
                  {'\n'}
                  {'  '}<span style={{ color: '#5B4FFF' }}>task</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>hire_flight_agent</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(destination)</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.verify')}</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>agent</span>{' = '}
                  <span style={{ color: '#00BF8A' }}>discover</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>capability: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;flight_search&quot;</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>,</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>min_reputation: </span>
                  <span style={{ color: '#00BF8A' }}>85</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.check')}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.atomic')}</span>{'\n'}
                  {'    '}<span style={{ color: '#5B4FFF' }}>let</span>{' '}
                  <span style={{ color: '#FFFFFF' }}>result</span>{' = '}
                  <span style={{ color: '#00BF8A' }}>delegate</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(agent, search(destination), </span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'{'}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>payment: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;0.004 USDC&quot;</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.native')}</span>{'\n'}
                  {'      '}
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>gas: </span>
                  <span style={{ color: '#f59e0b' }}>&quot;0.0003 USDC&quot;</span>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.fixed')}</span>{'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>)</span>{'\n'}
                  {'\n'}
                  {'    '}<span style={{ color: 'rgba(255,255,255,0.6)' }}>{t('agentscript.comments.receipt')}</span>{'\n'}
                  {'    '}<span style={{ color: '#00BF8A' }}>rate</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>(agent, score: </span>
                  <span style={{ color: '#00BF8A' }}>95</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)' }}>, proof: result.receipt)</span>{'\n'}
                  {'  '}<span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>{'\n'}
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{
        padding: 'clamp(80px, 14vh, 180px) 0',
        textAlign: 'center',
        position: 'relative',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(167,139,250,0.05) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(28px, 6vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            margin: '0 0 16px 0',
            color: '#0D0D0D',
          }}>
            {t('finalCta.titleLine1')}<br />
            <span style={{ color: '#00BF8A' }}>{t('finalCta.titleAccent')}</span> {t('finalCta.titleLine2')}
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            color: '#555555',
            lineHeight: 1.6,
            maxWidth: 520,
            margin: '0 auto 48px',
            fontFamily: mono,
          }}>
            {t('finalCta.description')}
          </p>

          <Link href="/build" className="cta-final-btn" style={{
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: 10,
            background: '#00BF8A',
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 14px rgba(0,191,138,0.25)',
            textAlign: 'center' as const,
          }}>
            {t('finalCta.button')}
          </Link>
        </div>
      </section>

    </div>
  );
}
