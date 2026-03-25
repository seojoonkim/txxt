'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const mono = "var(--font-fira), 'Courier New', monospace";

const links = [
  { href: '/protocol', label: 'Protocol' },
  { href: '/identity', label: 'Identity' },
  { href: '/ecosystem', label: 'Ecosystem' },
  { href: '/build', label: 'Build' },
  {
    href: '#',
    label: 'More',
    children: [
      { href: '/compare', label: 'Why txxt?' },
      { href: '/poaw', label: 'PoAW' },
      { href: '/roadmap', label: 'Roadmap' },
      { href: '#', label: 'Docs' },
    ],
  },
];

type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      {/* Floating nav wrapper */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '8px 16px 0',
      }}>
        <nav style={{
          maxWidth: 1300, margin: '0 auto',
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 14,
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          padding: '14px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
            <span style={{
              fontSize: 22, fontWeight: 900, letterSpacing: '-0.04em',
              color: '#00C896', fontFamily: mono,
              textShadow: 'none',
              WebkitTextStroke: '0.5px #00C896',
            }}>txxt</span>
          </Link>

          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {(links as NavLink[]).map(l => l.children ? (
                <div key={l.label} ref={dropdownRef} style={{ position: 'relative' }}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      fontSize: 14, color: '#555555', background: 'none', border: 'none',
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
                  fontSize: 14, color: '#555555',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}>{l.label}</Link>
              ))}
            </div>
          )}

          {isDesktop && (
            <Link href="/build" style={{
              fontSize: 13, padding: '9px 20px', borderRadius: 8,
              background: '#00C896',
              color: '#FFFFFF', fontWeight: 700, textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,200,150,0.25)',
            }}>Start Building</Link>
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
            {(links as NavLink[]).flatMap(l => l.children ? l.children : [l]).map((l, i, arr) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                fontSize: 28, fontWeight: 700, color: 'rgba(0,0,0,0.8)',
                textDecoration: 'none', padding: '16px 0',
                borderBottom: i < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
              }}>{l.label}</Link>
            ))}
          </div>
          <Link href="/build" onClick={() => setOpen(false)} style={{
            display: 'block', textAlign: 'center', padding: '18px',
            borderRadius: 12,
            background: '#00C896',
            color: '#FFFFFF', fontWeight: 700, fontSize: 17, textDecoration: 'none',
            marginTop: 32,
          }}>Start Building</Link>
        </div>
      )}
    </>
  );
}
