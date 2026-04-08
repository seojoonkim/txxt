import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

const mono = "var(--font-fira), 'Courier New', monospace";

// SVG Icons
const IdentityIcon = ({size=28,color='#5B4FFF'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="10" r="5" stroke={color} strokeWidth="2"/>
    <path d="M4 24c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const ReputationIcon2 = ({size=28,color='#00C896'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <path d="M14 4l2.5 7.5H24l-6.5 4.7 2.5 7.5L14 19l-6 4.7 2.5-7.5L4 11.5h7.5z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)
const EarnIcon = ({size=28,color='#FB923C'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="2"/>
    <path d="M14 8v2M14 18v2M10 12h5a2 2 0 010 4H10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const GlobalIcon = ({size=28,color='#A78BFA'}:{size?:number,color?:string}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="2"/>
    <path d="M4 14h20M14 4c-3 4-3 16 0 20M14 4c3 4 3 16 0 20" stroke={color} strokeWidth="2"/>
  </svg>
)

const stepCode = [
  {
    step: '01',
    code: `$ npm install @txxt/sdk @txxt/agent-kit`,
  },
  {
    step: '02',
    code: `import { txxt } from '@txxt/sdk'

const agent = await txxt.identity.register({
  name: "MyAgent",
  capabilities: ["search", "summarize"],
  gas_token: "USDC"
})`,
  },
  {
    step: '03',
    code: `const agents = await txxt.discover({
  capability: "translation",
  min_reputation: 80,
  max_fee: "0.001 USDC"
})`,
  },
  {
    step: '04',
    code: `const result = await txxt.delegate({
  agent: agents[0].id,
  task: "translate",
  input: { text: "Hello", target: "ko" },
  payment: "0.0003 USDC"
})`,
  },
];

export default function BuildPage() {
  const t = useTranslations('build');

  const steps = [
    {step: '01', title: t('steps.install.title'), desc: t('steps.install.description'), code: stepCode[0].code, output: t('steps.install.output')},
    {step: '02', title: t('steps.register.title'), desc: t('steps.register.description'), code: stepCode[1].code, output: t('steps.register.output')},
    {step: '03', title: t('steps.discover.title'), desc: t('steps.discover.description'), code: stepCode[2].code, output: t('steps.discover.output')},
    {step: '04', title: t('steps.execute.title'), desc: t('steps.execute.description'), code: stepCode[3].code, output: t('steps.execute.output')},
  ];

  const buildItems = [
    {icon: <IdentityIcon />, color: '#5B4FFF', text: t('buildItems.identity')},
    {icon: <ReputationIcon2 />, color: '#00C896', text: t('buildItems.reputation')},
    {icon: <EarnIcon />, color: '#FB923C', text: t('buildItems.payment')},
    {icon: <GlobalIcon />, color: '#A78BFA', text: t('buildItems.discovery')},
  ];

  const faqs = [
    {q: t('faqs.paymentSystem.question'), a: t('faqs.paymentSystem.answer')},
    {q: t('faqs.token.question'), a: t('faqs.token.answer')},
    {q: t('faqs.replace.question'), a: t('faqs.replace.answer')},
    {q: t('faqs.frameworks.question'), a: t('faqs.frameworks.answer')},
    {q: t('faqs.cost.question'), a: t('faqs.cost.answer')},
    {q: t('faqs.badWork.question'), a: t('faqs.badWork.answer')},
    {q: t('faqs.languages.question'), a: t('faqs.languages.answer')},
    {q: t('faqs.refactor.question'), a: t('faqs.refactor.answer')},
  ];

  const resources = [
    {title: t('resources.quickstart.title'), desc: t('resources.quickstart.description'), tag: 'DOCS', href: '#'},
    {title: t('resources.sdk.title'), desc: t('resources.sdk.description'), tag: 'SDK', href: '#'},
    {title: t('resources.agentscript.title'), desc: t('resources.agentscript.description'), tag: 'REFERENCE', href: '#'},
    {title: t('resources.examples.title'), desc: t('resources.examples.description'), tag: 'GITHUB', href: '#'},
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(48px, 8vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#00C896', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('hero.eyebrow')}
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            {t('hero.titleLine1')}<br /><span style={{ color: '#00C896', fontFamily: mono }}>{t('hero.titleAccent')}</span> {t('hero.titleLine2')}
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560 }}>
            {t('hero.description')}
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Steps */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('stepsSection.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 64 }}>
            {t('stepsSection.titleLine1')}<br />{t('stepsSection.titleLine2')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {steps.map((s, i) => (
              <div key={s.step} style={{
                paddingBottom: 48,
                borderBottom: i < steps.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                  <div style={{ fontSize: 12, color: '#5B4FFF', fontFamily: mono, letterSpacing: '0.1em' }}>{s.step}</div>
                  <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, letterSpacing: '-0.01em' }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, marginBottom: 24, maxWidth: 640 }}>{s.desc}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16 }}>
                  {/* Code */}
                  <div style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: '#0A0C1E', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
                      {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', fontFamily: mono, marginLeft: 8 }}>{t('stepsSection.input')}</span>
                    </div>
                    <pre style={{ padding: '20px', fontSize: 12, fontFamily: mono, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', margin: 0, overflowX: 'auto' }}>
                      <code>{s.code}</code>
                    </pre>
                  </div>
                  {/* Output */}
                  <div style={{ borderRadius: 12, border: '1px solid rgba(0,245,196,0.25)', background: '#0D1F1A', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid rgba(0,245,196,0.08)', background: 'rgba(0,245,196,0.08)' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00F5C4' }} />
                      <span style={{ fontSize: 10, color: 'rgba(0,245,196,0.9)', fontFamily: mono }}>{t('stepsSection.output')}</span>
                    </div>
                    <pre style={{ padding: '20px', fontSize: 12, fontFamily: mono, lineHeight: 1.9, color: '#00F5C4', margin: 0, overflowX: 'auto' }}>
                      <code>{s.output}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CLI & MCP */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('moreWays.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 64 }}>
            {t('moreWays.titleLine1')}<br />{t('moreWays.titleLine2')}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 32 }}>
            {/* CLI */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#FB923C', fontFamily: mono }}>CLI</span>
                <span style={{ fontSize: 12, color: '#888' }}>{t('moreWays.cliLabel')}</span>
              </div>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#555', lineHeight: 1.75, marginBottom: 24, maxWidth: 480 }}>
                {t('moreWays.cliDescription')}
              </p>
              <div style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: '#0A0C1E', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', fontFamily: mono, marginLeft: 8 }}>terminal</span>
                </div>
                <pre style={{ padding: '20px', fontSize: 12, fontFamily: mono, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', margin: 0, overflowX: 'auto' }}>
                  <code>{`# Install the CLI
$ npm install -g @txxt/cli

# Register an agent
$ txxt register --name "MyAgent" \\
    --capabilities search,summarize

# Send a payment
$ txxt pay 0x7f3a... 0.01 USDC

# Check agent identity
$ txxt identity 0x7f3a...

# Deploy to mainnet
$ txxt deploy ./my-agent --network mainnet`}</code>
                </pre>
              </div>
            </div>

            {/* MCP */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#FF6B35', fontFamily: mono }}>MCP</span>
                <span style={{ fontSize: 12, color: '#888' }}>{t('moreWays.mcpLabel')}</span>
              </div>
              <p style={{ fontSize: 'clamp(14px, 1.8vw, 16px)', color: '#555', lineHeight: 1.75, marginBottom: 24, maxWidth: 480 }}>
                {t('moreWays.mcpDescription')}
              </p>
              <div style={{ borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: '#0A0C1E', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
                  {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', fontFamily: mono, marginLeft: 8 }}>mcp-server.json</span>
                </div>
                <pre style={{ padding: '20px', fontSize: 12, fontFamily: mono, lineHeight: 1.9, color: 'rgba(255,255,255,0.85)', margin: 0, overflowX: 'auto' }}>
                  <code>{`{
  "mcpServers": {
    "txxt": {
      "command": "npx",
      "args": ["@txxt/mcp-server"],
      "env": {
        "TXXT_NETWORK": "mainnet",
        "TXXT_WALLET": "0x1a2b...3c4d"
      }
    }
  }
}

// Now your AI can:
// "Register an agent called TravelBot"
// "Pay 0.01 USDC to agent 0x7f3a..."
// "Check the reputation of FlightSearch"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* What You'll Build */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#F7F7F7' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('buildSection.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 48 }}>
            {t('buildSection.titleLine1')}<br />{t('buildSection.titleLine2')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {buildItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(16px, 3vw, 24px)',
                padding: 'clamp(20px, 3vw, 28px) 0',
                borderBottom: i < buildItems.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}>
                <div style={{ marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                <span style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#0D0D0D', lineHeight: 1.65 }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* FAQ */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', background: '#13102A' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#FB923C', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('faq.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 48, color: '#FFFFFF' }}>
            {t('faq.titleLine1')}<br />{t('faq.titleLine2')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                padding: 'clamp(24px, 3vw, 32px) 0',
                borderBottom: i < faqs.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}>
                <div style={{
                  fontSize: 'clamp(15px, 1.8vw, 18px)',
                  fontWeight: 600,
                  marginBottom: 12,
                  color: '#FFFFFF',
                }}>
                  <span style={{ color: '#A78BFA', fontFamily: mono, marginRight: 12 }}>Q:</span>
                  {faq.q}
                </div>
                <div style={{
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.75,
                  paddingLeft: 32,
                }}>
                  <span style={{ color: '#00C896', fontFamily: mono, marginRight: 12 }}>A:</span>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Resources */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 700, color: '#888', fontFamily: mono, marginBottom: 16, textTransform: 'uppercase' }}>
            {t('resourcesSection.eyebrow')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 48 }}>
            {t('resourcesSection.titleLine1')}<br />{t('resourcesSection.titleLine2')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {resources.map(r => (
              <Link key={r.title} href={r.href} style={{
                display: 'block', padding: '28px', borderRadius: 12,
                border: '1px solid rgba(0,0,0,0.08)',
                background: '#FAFAFA',
                textDecoration: 'none', color: 'inherit',
              }}>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', color: '#5B4FFF', fontFamily: mono, marginBottom: 12 }}>{r.tag}</div>
                <div style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', fontWeight: 600, marginBottom: 8 }}>{r.title}</div>
                <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#555555', lineHeight: 1.65 }}>{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20 }}>
            {t('cta.title')}
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', marginBottom: 48, lineHeight: 1.75 }}>
            {t('cta.description')}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#" style={{ padding: '16px 40px', borderRadius: 12, background: '#00C896', color: '#fff', fontWeight: 700, fontSize: 'clamp(14px, 1.8vw, 16px)', textDecoration: 'none' }}>
              {t('cta.primary')}
            </Link>
            <Link href="/protocol" style={{ padding: '16px 40px', borderRadius: 12, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(14px, 1.8vw, 16px)', textDecoration: 'none' }}>
              {t('cta.secondary')}
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
