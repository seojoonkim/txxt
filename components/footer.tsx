import Link from 'next/link';

const footerLinks = {
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
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#060610]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Fira Code', monospace" }}>
              <span className="text-[#00F5C4]">txxt</span>
            </span>
            <p className="mt-3 text-sm text-[rgba(255,255,255,0.4)] leading-relaxed">
              The first public blockchain built for AI agents.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[rgba(255,255,255,0.4)] hover:text-[#00F5C4] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[rgba(255,255,255,0.3)]">
            © 2026 txxt. Agent-Native Infrastructure.
          </p>
          <p className="text-xs text-[rgba(255,255,255,0.2)]" style={{ fontFamily: "'Fira Code', monospace" }}>
            Trust is Math, Not Faith.
          </p>
        </div>
      </div>
    </footer>
  );
}
