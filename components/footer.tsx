import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const navLinks = [
  { label: 'Protocol',  href: '/protocol' },
  { label: 'Identity',  href: '/identity' },
  { label: 'Build',     href: '/build' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Litepaper', href: '/litepaper' },
];

const resourceLinks = [
  { label: 'Docs',    href: '#' },
  { label: 'GitHub',  href: 'https://github.com' },
  { label: 'Discord', href: '#' },
  { label: 'Blog',    href: '#' },
];

const groupTitleStyle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.1em',
  color: '#888',
  textTransform: 'uppercase',
  marginBottom: 20,
};

const linkStyle: React.CSSProperties = {
  fontSize: 14,
  color: '#999',
  textDecoration: 'none',
  display: 'block',
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      background: '#0A0A0A',
    }}>
      <style>{`
        .footer-link:hover { color: #E8E8E8 !important; }
      `}</style>

      <div style={{
        maxWidth: 1300,
        margin: '0 auto',
        padding: '64px 24px 48px',
        boxSizing: 'border-box',
      }}>

        {/* 상단: 로고 + 링크 그리드 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 40,
          marginBottom: 64,
        }}>

          {/* 로고 + 설명 */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{
                fontFamily: mono,
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: '-0.04em',
                color: '#00BF8A',
                WebkitTextStroke: '0.5px #00BF8A',
              }}>
                txxt
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: 200 }}>
              The agent middleware layer for every blockchain.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={groupTitleStyle}>Navigate</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={linkStyle}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={groupTitleStyle}>Resources</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {resourceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={linkStyle}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* 하단 바 */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 txxt. Agent-Native Infrastructure.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: mono }}>
            The agent layer for every blockchain.
          </p>
        </div>

      </div>
    </footer>
  );
}
