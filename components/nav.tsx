'use client';

import Link from 'next/link';
import { useState } from 'react';

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

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(13,14,26,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* 로고 — 히어로와 동일한 텍스트 스타일 */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontSize: 24,
              fontWeight: 900,
              letterSpacing: '-0.04em',
              color: '#A78BFA',
              fontFamily: mono,
              textShadow: '0 0 20px rgba(167,139,250,0.4)',
              lineHeight: 1,
            }}>
              txxt
            </span>
          </Link>

          {/* Desktop 메뉴 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
            {links.map((l) => (
              <Link key={l.label} href={l.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Link href="/build" style={{
              fontSize: 14, padding: '8px 20px', borderRadius: 8,
              background: '#A78BFA', color: '#0D0E1A', fontWeight: 600,
              textDecoration: 'none',
            }}>
              Start Building →
            </Link>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#fff' }}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* 모바일 메뉴 — 풀스크린 오버레이 */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'rgba(13,14,26,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          paddingTop: 80, paddingBottom: 40,
          paddingLeft: 32, paddingRight: 32,
        }} className="md:hidden">
          {/* 로고 반복 */}
          <div style={{ marginBottom: 48 }}>
            <span style={{ fontSize: 28, fontWeight: 900, color: '#A78BFA', fontFamily: mono, letterSpacing: '-0.04em' }}>
              txxt
            </span>
          </div>

          {/* 메뉴 링크들 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 28, fontWeight: 600,
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  letterSpacing: '-0.01em',
                  display: 'block',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA 버튼 */}
          <Link
            href="/build"
            onClick={() => setOpen(false)}
            style={{
              display: 'block', textAlign: 'center',
              padding: '16px', borderRadius: 12,
              background: '#A78BFA', color: '#0D0E1A',
              fontWeight: 700, fontSize: 16,
              textDecoration: 'none', marginTop: 32,
            }}
          >
            Start Building →
          </Link>
        </div>
      )}
    </>
  );
}
