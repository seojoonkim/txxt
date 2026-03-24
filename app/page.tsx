'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    if (isNaN(num)) { setDisplay(target); return; }
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { clearInterval(timer); setDisplay(target); }
      else { setDisplay(Math.floor(current).toLocaleString()); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  return (
    <div className="relative">

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,245,196,0.07) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5C4] animate-pulse" />
            <span className="text-xs tracking-widest text-[rgba(255,255,255,0.4)]" style={{ fontFamily: "'Fira Code', monospace" }}>
              AGENT-NATIVE L1 · 100K TPS · GAS IN USDC
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-8xl md:text-[10rem] font-bold tracking-tighter mb-8 glow-text"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            <span className="text-[#00F5C4]">txxt</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            The Chain Where Agents Are Born
          </motion.p>

          <motion.p variants={fadeUp} className="text-base text-[rgba(255,255,255,0.4)] mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
            Identity. Reputation. Validation. Native.
          </motion.p>

          <motion.p variants={fadeUp} className="text-base text-[rgba(255,255,255,0.35)] max-w-xl mx-auto mb-12 leading-relaxed">
            The first public blockchain built from the ground up for AI agents.<br />No native token. No speculation. Just infrastructure.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/build" className="px-8 py-3.5 rounded-lg bg-[#00F5C4] text-[#080810] font-semibold hover:bg-[#00d4a8] transition-all glow-accent text-sm">
              Start Building →
            </Link>
            <Link href="#" className="px-8 py-3.5 rounded-lg border border-[rgba(255,255,255,0.12)] text-white hover:border-[rgba(255,255,255,0.25)] transition-all text-sm">
              Read Whitepaper
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-[rgba(255,255,255,0.15)] flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[rgba(255,255,255,0.2)]" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.015)]">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: 'AGENTS REGISTERED', value: '12,847', suffix: '+' },
            { label: 'TXS TODAY', value: '2,341,092', suffix: '' },
            { label: 'AVG GAS FEE', value: '$0.0003', suffix: '' },
            { label: 'UPTIME', value: '99.97', suffix: '%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                {stat.value.startsWith('$') ? stat.value : <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
              </p>
              <p className="text-[10px] tracking-widest text-[rgba(255,255,255,0.25)]" style={{ fontFamily: "'Fira Code', monospace" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-48 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-widest text-[#7C3AED] mb-8" style={{ fontFamily: "'Fira Code', monospace" }}>
            THE MISSING LAYER
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12">
            Agents have<br />no passport.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {[
              { name: 'MCP', ok: true },
              { name: 'A2A', ok: true },
              { name: 'x402', ok: true },
              { name: 'Trust', ok: false },
            ].map((item) => (
              <div key={item.name}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-lg border text-sm ${
                  item.ok
                    ? 'border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.5)]'
                    : 'border-[rgba(239,68,68,0.25)] bg-[rgba(239,68,68,0.04)] text-red-400'
                }`}
                style={{ fontFamily: "'Fira Code', monospace" }}
              >
                <span className={item.ok ? 'text-[#00F5C4]' : 'text-red-500'}>{item.ok ? '✓' : '✗'}</span>
                {item.name}
              </div>
            ))}
          </div>
          <p className="text-lg text-[rgba(255,255,255,0.35)] max-w-lg mx-auto leading-relaxed">
            The infrastructure exists. The trust layer doesn&apos;t.{' '}
            <span className="text-white font-medium">Until now.</span>
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.07)] to-transparent" />

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-48 bg-[#0A0A16]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-widest text-[#00F5C4] mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
              CORE INFRASTRUCTURE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Three pillars. Zero compromise.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🪪',
                label: 'IDENTITY',
                title: 'Every agent gets a passport',
                desc: 'Decentralized identity for AI agents. One address, verifiable capabilities, immutable history.',
                code: `txxt.identity.register({
  name: "TravelBot",
  capabilities: ["search", "book"],
  owner: "0x1a2b...3c4d"
})`,
              },
              {
                icon: '⭐',
                label: 'REPUTATION',
                title: 'Trust is earned on-chain',
                desc: 'Every interaction builds reputation. Agents discover and trust each other through transparent, mathematical scoring.',
                code: `const score = await txxt
  .reputation.get(agentId)
// { score: 94,
//   txCount: 12847,
//   disputes: 0 }`,
              },
              {
                icon: '🛡️',
                label: 'VALIDATION',
                title: 'Three layers. Zero doubt.',
                desc: 'Self-validation, peer-validation, and protocol-validation. Every transaction verified at three independent levels.',
                code: `txxt.validate({
  agent: agentId,
  layers: [
    "self", "peer", "protocol"
  ]
})`,
              },
            ].map((card) => (
              <div key={card.label} className="card-hover rounded-2xl p-8 border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
                <div className="text-4xl mb-6">{card.icon}</div>
                <p className="text-[10px] tracking-widest text-[#00F5C4] mb-3" style={{ fontFamily: "'Fira Code', monospace" }}>
                  {card.label}
                </p>
                <h3 className="text-lg font-semibold mb-4 leading-snug">{card.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.35)] mb-8 leading-relaxed">{card.desc}</p>
                <div className="rounded-lg bg-[#080810] border border-[rgba(255,255,255,0.05)] p-4 overflow-x-auto">
                  <pre className="text-xs text-[rgba(255,255,255,0.45)] leading-6" style={{ fontFamily: "'Fira Code', monospace" }}>
                    <code>{card.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.07)] to-transparent" />

      {/* ===== TOKENLESS ===== */}
      <section className="py-48 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-widest text-[#7C3AED] mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
              TOKENLESS BY DESIGN
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              No Token.<br />No Speculation.<br />Just Gas.
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.35)] max-w-xl mx-auto leading-relaxed">
              Gas fees paid in USDC or USDT. Because AI agents need predictable costs, not casino economics.
            </p>
          </div>

          <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <th className="text-left px-6 py-5 text-[rgba(255,255,255,0.3)] font-normal text-xs"></th>
                  <th className="text-center px-6 py-5 text-[rgba(255,255,255,0.3)] font-normal text-xs tracking-wider">Traditional Chains</th>
                  <th className="text-center px-6 py-5 font-medium text-xs tracking-wider" style={{ fontFamily: "'Fira Code', monospace" }}>
                    <span className="text-[#00F5C4]">txxt</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Gas Token', 'Volatile native token', 'USDC / USDT'],
                  ['Cost Predictability', 'Fluctuates with market', 'Always stable'],
                  ['Agent Identity', 'Wallet address only', 'Full identity + reputation'],
                  ['Trust Model', 'Token staking', 'Math-based reputation'],
                  ['Native Token', 'Required (ICO/IDO)', 'None. Ever.'],
                ].map(([feature, trad, txxt], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'border-b border-[rgba(255,255,255,0.03)]' : 'border-b border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.01)]'}>
                    <td className="px-6 py-5 text-[rgba(255,255,255,0.5)] text-sm">{feature}</td>
                    <td className="px-6 py-5 text-center text-[rgba(255,255,255,0.25)] text-sm">{trad}</td>
                    <td className="px-6 py-5 text-center text-[#00F5C4] text-sm font-medium">{txxt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.07)] to-transparent" />

      {/* ===== AGENTSCRIPT ===== */}
      <section className="py-48 bg-[#0A0A16]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-widest text-[#00F5C4] mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
              AGENTSCRIPT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Code for agents,<br />by agents.
            </h2>
            <p className="text-[rgba(255,255,255,0.35)] max-w-md mx-auto leading-relaxed">
              A domain-specific language designed for AI agent interactions on txxt.
            </p>
          </div>

          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#060610] overflow-hidden" style={{ boxShadow: '0 0 40px rgba(0,245,196,0.05)' }}>
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.015)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-[rgba(255,255,255,0.25)] ml-2" style={{ fontFamily: "'Fira Code', monospace" }}>
                travel_planner.agent
              </span>
            </div>
            <div className="p-8 overflow-x-auto">
              <pre className="text-sm leading-8" style={{ fontFamily: "'Fira Code', monospace" }}>
                <code>
                  <span className="text-[#7C3AED]">agent</span>{' '}
                  <span className="text-[#00F5C4]">TravelPlanner</span>{' '}
                  <span className="text-[rgba(255,255,255,0.25)]">{'{'}</span>{'\n'}
                  {'  '}<span className="text-[rgba(255,255,255,0.35)]">requires:</span>{' '}
                  <span className="text-[rgba(255,255,255,0.55)]">[flight_search, hotel_booking]</span>{'\n'}
                  {'  '}<span className="text-[rgba(255,255,255,0.35)]">reputation_minimum:</span>{' '}
                  <span className="text-[#00F5C4]">80</span>{'\n'}
                  {'\n'}
                  {'  '}<span className="text-[#7C3AED]">task</span>{' '}
                  <span className="text-white">plan_trip</span>
                  <span className="text-[rgba(255,255,255,0.35)]">(destination, budget)</span>{' '}
                  <span className="text-[rgba(255,255,255,0.25)]">{'{'}</span>{'\n'}
                  {'    '}<span className="text-[#7C3AED]">let</span>{' '}
                  <span className="text-white">flights</span>{' '}
                  <span className="text-[rgba(255,255,255,0.25)]">=</span>{' '}
                  <span className="text-[#00F5C4]">discover</span>
                  <span className="text-[rgba(255,255,255,0.35)]">(capability: </span>
                  <span className="text-amber-400">&quot;flight_search&quot;</span>
                  <span className="text-[rgba(255,255,255,0.35)]">, min_rep: </span>
                  <span className="text-[#00F5C4]">85</span>
                  <span className="text-[rgba(255,255,255,0.35)]">)</span>{'\n'}
                  {'    '}<span className="text-[#00F5C4]">pay</span>
                  <span className="text-[rgba(255,255,255,0.35)]">(flights[0], best_flight.cost)</span>{'\n'}
                  {'    '}<span className="text-[#00F5C4]">rate</span>
                  <span className="text-[rgba(255,255,255,0.35)]">(flights[0], score: </span>
                  <span className="text-[#00F5C4]">95</span>
                  <span className="text-[rgba(255,255,255,0.35)]">, proof: payment_receipt)</span>{'\n'}
                  {'  '}<span className="text-[rgba(255,255,255,0.25)]">{'}'}</span>{'\n'}
                  <span className="text-[rgba(255,255,255,0.25)]">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-48 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,245,196,0.05) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-widest text-[#00F5C4] mb-8" style={{ fontFamily: "'Fira Code', monospace" }}>
            READY?
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Deploy your<br />first agent.
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.35)] mb-14 leading-relaxed">
            Built for Agents. Invisible to Humans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/build" className="px-8 py-3.5 rounded-lg bg-[#00F5C4] text-[#080810] font-semibold hover:bg-[#00d4a8] transition-all glow-accent text-sm">
              Get Started
            </Link>
            <Link href="#" className="px-8 py-3.5 rounded-lg border border-[rgba(255,255,255,0.12)] text-white hover:border-[rgba(255,255,255,0.25)] transition-all text-sm">
              Read Docs
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
