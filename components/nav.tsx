'use client';

import {Link, usePathname} from '@/i18n/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {useEffect, useRef, useState} from 'react';

const mono = "var(--font-fira), 'Courier New', monospace";

type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const links: NavLink[] = [
    {href: '/protocol', label: t('links.protocol')},
    {href: '/identity', label: t('links.identity')},
    {href: '/build', label: t('links.build')},
    {href: '/ecosystem', label: t('links.ecosystem')},
    {href: '/litepaper', label: t('links.litepaper')},
  ];

  const localeLinks = [
    {locale: 'ko' as const, label: '🇰🇷 한국어'},
    {locale: 'en' as const, label: '🇬🇧 English'},
  ];

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      {/* Top-fixed full-width nav */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}>
        <nav style={{
          maxWidth: 1300, margin: '0 auto',
          padding: '0 24px',
          height: 62,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
            <span style={{
              fontSize: 24, fontWeight: 900, letterSpacing: '-0.04em',
              color: '#00BF8A', fontFamily: mono,
              textShadow: 'none',
              WebkitTextStroke: '0.5px #00BF8A',
            }}>txxt</span>
          </Link>

          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {links.map(l => l.children ? (
                <div key={l.label} ref={dropdownRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      fontSize: 15, color: '#555555', background: 'none', border: 'none',
                      cursor: 'pointer', padding: 0, transition: 'color 0.2s',
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}
                  >
                    {l.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div style={{
                      position: 'absolute', top: '100%', right: 0, marginTop: 12,
                      background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)',
                      borderRadius: 12, border: '1px solid rgba(0,0,0,0.08)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      padding: '8px 0', minWidth: 160, zIndex: 200,
                    }}>
                      {l.children.map(c => (
                        <Link key={c.label} href={c.href} onClick={() => setDropdownOpen(false)} style={{
                          display: 'block', padding: '10px 20px', fontSize: 14,
                          color: '#555555', textDecoration: 'none', transition: 'background 0.15s',
                          whiteSpace: 'nowrap',
                        }}>{c.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={l.label} href={l.href} style={{
                  fontSize: 15, color: '#555555',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}>{l.label}</Link>
              ))}
            </div>
          )}

          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {localeLinks.map((item) => {
                  const isActive = locale === item.locale;

                  return (
                    <Link
                      key={item.locale}
                      href={pathname}
                      locale={item.locale}
                      style={{
                        fontSize: 12,
                        padding: '8px 10px',
                        borderRadius: 999,
                        border: `1px solid ${isActive ? 'rgba(0,191,138,0.28)' : 'rgba(0,0,0,0.08)'}`,
                        background: isActive ? 'rgba(0,191,138,0.08)' : 'rgba(255,255,255,0.82)',
                        color: isActive ? '#00BF8A' : '#555555',
                        fontWeight: 700,
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <Link href="/build" style={{
                fontSize: 14, padding: '10px 22px', borderRadius: 8,
                background: '#00BF8A',
                color: '#FFFFFF', fontWeight: 700, textDecoration: 'none',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,191,138,0.25)',
              }}>{t('cta')}</Link>
            </div>
          )}

          {!isDesktop && (
            <button onClick={() => setOpen(!open)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, color: '#0D0D0D',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          )}
        </nav>
      </div>

      {open && !isDesktop && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: '#F5F4F0',
          display: 'flex', flexDirection: 'column',
          padding: '80px 32px 48px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {links.flatMap(l => l.children ? l.children : [l]).map((l, i, arr) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                fontSize: 28, fontWeight: 700, color: 'rgba(0,0,0,0.8)',
                textDecoration: 'none', padding: '16px 0',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              }}>{l.label}</Link>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 24 }}>
            {localeLinks.map((item) => {
              const isActive = locale === item.locale;

              return (
                <Link
                  key={item.locale}
                  href={pathname}
                  locale={item.locale}
                  onClick={() => setOpen(false)}
                  style={{
                    flex: 1,
                    minWidth: 140,
                    textAlign: 'center',
                    padding: '14px 16px',
                    borderRadius: 12,
                    border: `1px solid ${isActive ? 'rgba(0,191,138,0.28)' : 'rgba(0,0,0,0.08)'}`,
                    background: isActive ? 'rgba(0,191,138,0.08)' : '#FFFFFF',
                    color: isActive ? '#00BF8A' : '#555555',
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Link href="/build" onClick={() => setOpen(false)} style={{
            display: 'block', textAlign: 'center', padding: '18px',
            borderRadius: 12,
            background: '#00BF8A',
            color: '#FFFFFF', fontWeight: 700, fontSize: 17, textDecoration: 'none',
            marginTop: 32,
          }}>{t('cta')}</Link>
        </div>
      )}
    </>
  );
}
