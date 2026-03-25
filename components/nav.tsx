'use client';

import Link from 'next/link';
import { useState } from 'react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-[rgba(255,255,255,0.06)] bg-[rgba(8,8,16,0.8)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-fira), 'Courier New', monospace" }}>
            <span className="text-[#00F5C4]">txxt</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/build"
            className="text-sm px-4 py-2 rounded-lg bg-[#00F5C4] text-[#080810] font-medium hover:bg-[#00d4a8] transition-colors"
          >
            Start Building →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.06)] bg-[rgba(8,8,16,0.95)] backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-[rgba(255,255,255,0.5)] hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/build"
              className="text-sm px-4 py-2 rounded-lg bg-[#00F5C4] text-[#080810] font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Start Building →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
