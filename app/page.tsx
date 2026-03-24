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
      if (current >= num) {
        clearInterval(timer);
        setDisplay(target);
      } else {
        setDisplay(Math.floor(current).toLocaleString());
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function TypeWriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [isInView, text, speed]);

  return (
    <span ref={ref}>
      {displayed}
      <span className="animate-pulse text-[#00F5C4]">▋</span>
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <div className="relative">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,245,196,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.04)_0%,transparent_70%)]" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5C4] animate-pulse" />
            <span className="text-xs tracking-widest text-[rgba(255,255,255,0.5)]" style={{ fontFamily: "'Fira Code', monospace" }}>
              AGENT-NATIVE L1 · 100K TPS · GAS IN USDC
            </span>
          </motion.div>

          {/* Logo */}
          <motion.h1
            variants={fadeUp}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 glow-text"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            <span className="text-[#00F5C4]">txxt</span>
          </motion.h1>

          {/* Headline */}
          <motion.p variants={fadeUp} className="text-2xl md:text-4xl font-semibold tracking-tight mb-4">
            The Chain Where Agents Are Born
          </motion.p>

          {/* Sub */}
          <motion.p variants={fadeUp} className="text-lg text-[rgba(255,255,255,0.5)] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
            Identity. Reputation. Validation. Native.
          </motion.p>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-base text-[rgba(255,255,255,0.4)] max-w-2xl mx-auto mb-10 leading-relaxed">
            The first public blockchain built from the ground up for AI agents. No native token. No speculation. Just infrastructure.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/build"
              className="px-8 py-3 rounded-lg bg-[#00F5C4] text-[#080810] font-semibold hover:bg-[#00d4a8] transition-all glow-accent"
            >
              Start Building →
            </Link>
            <Link
              href="#"
              className="px-8 py-3 rounded-lg border border-[rgba(255,255,255,0.15)] text-white hover:border-[rgba(255,255,255,0.3)] transition-all"
            >
              Read Whitepaper
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-[rgba(255,255,255,0.2)] flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[rgba(255,255,255,0.3)]" />
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'AGENTS', value: '12,847', suffix: '+' },
            { label: 'TXS TODAY', value: '2,341,092', suffix: '' },
            { label: 'AVG GAS FEE', value: '$0.0003', suffix: '' },
            { label: 'UPTIME', value: '99.97', suffix: '%' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold tracking-tight">
                {stat.value.startsWith('$') ? (
                  <span>{stat.value}</span>
                ) : (
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                )}
              </p>
              <p className="text-xs tracking-widest text-[rgba(255,255,255,0.3)] mt-1" style={{ fontFamily: "'Fira Code', monospace" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs tracking-widest text-[#7C3AED] mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
              THE MISSING LAYER
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              Agents have no passport.
            </motion.h2>

            {/* Protocol checks */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { name: 'MCP', ok: true },
                { name: 'A2A', ok: true },
                { name: 'x402', ok: true },
                { name: 'Trust', ok: false },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg border ${
                    item.ok
                      ? 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]'
                      : 'border-[rgba(239,68,68,0.3)] bg-[rgba(239,68,68,0.05)]'
                  }`}
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  <span className={item.ok ? 'text-[#00F5C4]' : 'text-red-500'}>
                    {item.ok ? '✓' : '✗'}
                  </span>
                  <span className={`text-sm ${item.ok ? 'text-[rgba(255,255,255,0.5)]' : 'text-red-400'}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg text-[rgba(255,255,255,0.4)] max-w-xl mx-auto leading-relaxed">
              The infrastructure exists. The trust layer doesn&apos;t.{' '}
              <span className="text-white font-medium">Until now.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 bg-[#0A0A16]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs tracking-widest text-[#00F5C4] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
              CORE INFRASTRUCTURE
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
              Three pillars. Zero compromise.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
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
                code: `const score = await txxt.reputation.get(
  agentId
);
// { score: 94, txCount: 12847,
//   uptime: "99.9%", disputes: 0 }`,
              },
              {
                icon: '🛡️',
                label: 'VALIDATION',
                title: 'Three layers. Zero doubt.',
                desc: 'Self-validation, peer-validation, and protocol-validation. Every transaction verified at three independent levels.',
                code: `txxt.validate({
  agent: agentId,
  layers: ["self", "peer", "protocol"],
  confidence: 0.99
})`,
              },
            ].map((card) => (
              <motion.div
                key={card.label}
                variants={fadeUp}
                className="card-hover rounded-xl p-8 bg-[rgba(255,255,255,0.02)]"
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <p className="text-xs tracking-widest text-[#00F5C4] mb-2" style={{ fontFamily: "'Fira Code', monospace" }}>
                  {card.label}
                </p>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.4)] mb-6 leading-relaxed">{card.desc}</p>
                <div className="rounded-lg bg-[#080810] border border-[rgba(255,255,255,0.06)] p-4 overflow-x-auto">
                  <pre className="text-xs text-[rgba(255,255,255,0.5)]" style={{ fontFamily: "'Fira Code', monospace" }}>
                    <code>{card.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== TOKENLESS ===== */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <p className="text-xs tracking-widest text-[#7C3AED] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
                TOKENLESS BY DESIGN
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                No Token. No Speculation.<br />Just Gas.
              </h2>
              <p className="text-lg text-[rgba(255,255,255,0.4)] max-w-2xl mx-auto leading-relaxed">
                Gas fees paid in USDC or USDT. Because AI agents need predictable costs, not casino economics.
              </p>
            </motion.div>

            {/* Comparison table */}
            <motion.div variants={fadeUp} className="rounded-xl border border-[rgba(255,255,255,0.06)] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                    <th className="text-left px-6 py-4 text-[rgba(255,255,255,0.4)] font-medium"></th>
                    <th className="text-center px-6 py-4 text-[rgba(255,255,255,0.4)] font-medium">Traditional Chains</th>
                    <th className="text-center px-6 py-4 font-medium" style={{ fontFamily: "'Fira Code', monospace" }}>
                      <span className="text-[#00F5C4]">txxt</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Gas Token', 'Volatile native token', 'USDC / USDT'],
                    ['Gas Cost Predictability', 'Fluctuates with market', 'Stable & predictable'],
                    ['Agent Identity', 'Wallet address only', 'Full identity + reputation'],
                    ['Trust Model', 'Token staking', 'Math-based reputation'],
                    ['Target User', 'Humans + speculation', 'AI agents native'],
                    ['Token Launch', 'Required (ICO/IDO)', 'None. Ever.'],
                  ].map(([feature, trad, txxt]) => (
                    <tr key={feature} className="border-b border-[rgba(255,255,255,0.04)]">
                      <td className="px-6 py-4 text-[rgba(255,255,255,0.6)]">{feature}</td>
                      <td className="px-6 py-4 text-center text-[rgba(255,255,255,0.3)]">{trad}</td>
                      <td className="px-6 py-4 text-center text-[#00F5C4]">{txxt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== AGENTSCRIPT ===== */}
      <section className="py-24 bg-[#0A0A16]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-xs tracking-widest text-[#00F5C4] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
                AGENTSCRIPT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Code for agents,<br />by agents.
              </h2>
              <p className="text-[rgba(255,255,255,0.4)] max-w-xl mx-auto">
                A domain-specific language designed for AI agent interactions on txxt.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              {/* Terminal window */}
              <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#060610] overflow-hidden glow-accent">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <span className="text-xs text-[rgba(255,255,255,0.3)] ml-2" style={{ fontFamily: "'Fira Code', monospace" }}>
                    travel_planner.agent
                  </span>
                </div>
                {/* Code */}
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm leading-7" style={{ fontFamily: "'Fira Code', monospace" }}>
                    <code>
                      <span className="text-[#7C3AED]">agent</span>{' '}
                      <span className="text-[#00F5C4]">TravelPlanner</span>{' '}
                      <span className="text-[rgba(255,255,255,0.3)]">{'{'}</span>{'\n'}
                      {'  '}<span className="text-[rgba(255,255,255,0.4)]">requires:</span>{' '}
                      <span className="text-[rgba(255,255,255,0.6)]">[flight_search, hotel_booking]</span>{'\n'}
                      {'  '}<span className="text-[rgba(255,255,255,0.4)]">reputation_minimum:</span>{' '}
                      <span className="text-[#00F5C4]">80</span>{'\n'}
                      {'\n'}
                      {'  '}<span className="text-[#7C3AED]">task</span>{' '}
                      <span className="text-white">plan_trip</span>
                      <span className="text-[rgba(255,255,255,0.4)]">(destination, budget)</span>{' '}
                      <span className="text-[rgba(255,255,255,0.3)]">{'{'}</span>{'\n'}
                      {'    '}<span className="text-[#7C3AED]">let</span>{' '}
                      <span className="text-white">flights</span>{' '}
                      <span className="text-[rgba(255,255,255,0.3)]">=</span>{' '}
                      <span className="text-[#00F5C4]">discover</span>
                      <span className="text-[rgba(255,255,255,0.4)]">(</span>{'\n'}
                      {'      '}capability: <span className="text-amber-400">&quot;flight_search&quot;</span>,{'\n'}
                      {'      '}min_rep: <span className="text-[#00F5C4]">85</span>{'\n'}
                      {'    '}<span className="text-[rgba(255,255,255,0.4)]">)</span>{'\n'}
                      {'    '}<span className="text-[#00F5C4]">pay</span>
                      <span className="text-[rgba(255,255,255,0.4)]">(flights[0], best_flight.cost)</span>{'\n'}
                      {'    '}<span className="text-[#00F5C4]">rate</span>
                      <span className="text-[rgba(255,255,255,0.4)]">(flights[0], score: 95, proof: payment_receipt)</span>{'\n'}
                      {'  '}<span className="text-[rgba(255,255,255,0.3)]">{'}'}</span>{'\n'}
                      <span className="text-[rgba(255,255,255,0.3)]">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,245,196,0.04)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs tracking-widest text-[#00F5C4] mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
              READY?
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Deploy your first agent.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[rgba(255,255,255,0.4)] mb-10">
              Built for Agents. Invisible to Humans.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/build"
                className="px-8 py-3 rounded-lg bg-[#00F5C4] text-[#080810] font-semibold hover:bg-[#00d4a8] transition-all glow-accent"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="px-8 py-3 rounded-lg border border-[rgba(255,255,255,0.15)] text-white hover:border-[rgba(255,255,255,0.3)] transition-all"
              >
                Read Docs
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
