import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const mono = "var(--font-fira), 'Courier New', monospace";

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
  const t = useTranslations('footer');

  const navLinks = [
    {label: t('links.protocol'), href: '/protocol'},
    {label: t('links.identity'), href: '/identity'},
    {label: t('links.build'), href: '/build'},
    {label: t('links.ecosystem'), href: '/ecosystem'},
    {label: t('links.litepaper'), href: '/litepaper'},
  ];

  const resourceLinks = [
    {label: t('resources.docs'), href: '#'},
    {label: t('resources.github'), href: 'https://github.com'},
    {label: t('resources.discord'), href: '#'},
    {label: t('resources.blog'), href: '#'},
  ];

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
              {t('tagline')}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={groupTitleStyle}>{t('navigate')}</h4>
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
            <h4 style={groupTitleStyle}>{t('resourcesTitle')}</h4>
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
            {t('copyright')}
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontFamily: mono }}>
            {t('bottomTagline')}
          </p>
        </div>

      </div>
    </footer>
  );
}
