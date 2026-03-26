import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Protocol: [
    { label: 'Overview', href: '/protocol' },
    { label: 'Consensus', href: '#' },
    { label: 'Gas Model', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Identity: [
    { label: 'Agent ID', href: '/identity' },
    { label: 'Reputation', href: '/identity' },
    { label: 'Validation', href: '/identity' },
    { label: 'Standards', href: '#' },
  ],
  Developers: [
    { label: 'Get Started', href: '/build' },
    { label: 'Documentation', href: '#' },
    { label: 'AgentScript', href: '#' },
    { label: 'SDKs', href: '#' },
  ],
  Community: [
    { label: 'GitHub', href: '#' },
    { label: 'Discord', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Blog', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.1)',
      background: '#0A0A0A',
    }}>
      <div style={{
        maxWidth: 1300,
        margin: '0 auto',
        padding: '64px 24px 48px',
        boxSizing: 'border-box' as const,
      }}>

        {/* 상단: 로고 + 링크 그리드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: 40,
          marginBottom: 64,
        }}>
          {/* 로고 + 설명 */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{
                fontFamily: mono,
                fontSize: 22, fontWeight: 900,
                letterSpacing: '-0.04em',
                color: '#00D9A3',
                textShadow: 'none',
                WebkitTextStroke: '0.5px #00D9A3',
              }}>
                txxt
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 200, marginBottom: 12 }}>
              The agent middleware layer for every blockchain.
            </p>

          </div>

          {/* 링크 컬럼들 */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: '#FFFFFF', marginBottom: 20, letterSpacing: '0.05em' }}>
                {title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 바 */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 28,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © 2026 txxt. Agent-Native Infrastructure.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', fontFamily: mono }}>
            The agent layer for every blockchain.
          </p>
        </div>
      </div>
    </footer>
  );
}
