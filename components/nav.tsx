'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const mono = "var(--font-fira), 'Courier New', monospace";

const links = [
  { href: '/protocol', label: 'Protocol' },
  { href: '/identity', label: 'Identity' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/build', label: 'Build' },
  { href: '#', label: 'Docs' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(13,14,26,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '0 20px', height: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* 로고 */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }} onClick={() => setOpen(false)}>
            <span style={{
              fontSize: 24, fontWeight: 900, letterSpacing: '-0.04em',
              color: '#00F5C4', fontFamily: mono,
              textShadow: '0 0 20px rgba(0,245,196,0.4)', WebkitTextStroke: '1.5px #00F5C4',
            }}>txxt</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {links.map((l) => (
                <Link key={l.label} href={l.href} style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          {/* 데스크톱 CTA */}
          {isDesktop && (
            <Link href="/build" style={{
              fontSize: 13, padding: '8px 18px', borderRadius: 8,
              background: '#A78BFA', color: '#0D0E1A', fontWeight: 600,
              textDecoration: 'none', flexShrink: 0,
            }}>
              Start Building
            </Link>
          )}

          {/* 모바일 햄버거 */}
          {!isDesktop && (
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', color: '#fff', display: 'flex', alignItems: 'center',
              }}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open
                  ? <path d="M18 6L6 18M6 6l12 12" />
                  : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* 모바일 풀스크린 메뉴 */}
      {open && !isDesktop && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: '#0D0E1A',
          display: 'flex', flexDirection: 'column',
          padding: '80px 32px 48px',
          overflowY: 'auto',
        }}>
<div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 20, fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  padding: '14px 0',
                  borderBottom: i < links.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            href="/build"
            onClick={() => setOpen(false)}
            style={{
              display: 'block', textAlign: 'center',
              padding: '18px', borderRadius: 12,
              background: '#A78BFA', color: '#0D0E1A',
              fontWeight: 700, fontSize: 17,
              textDecoration: 'none', marginTop: 40,
            }}
          >
            Start Building
          </Link>
        </div>
      )}
    </>
  );
}
