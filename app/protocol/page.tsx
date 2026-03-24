'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const specs = [
  { label: 'Consensus', value: 'Agent-Weighted PoS', desc: 'Validators are scored by reputation, not just stake. Higher-reputation validators earn proportionally more block rewards.' },
  { label: 'Throughput', value: '100,000 TPS', desc: 'Parallel execution engine optimized for agent-to-agent micro-transactions. Sub-second finality.' },
  { label: 'Block Time', value: '400ms', desc: 'Near-instant finality designed for real-time agent interactions and high-frequency autonomous operations.' },
  { label: 'Gas Token', value: 'USDC / USDT', desc: 'No volatile native token. Gas fees denominated in stablecoins for predictable agent operating costs.' },
  { label: 'VM', value: 'AgentVM', desc: 'Custom virtual machine with native support for identity verification, reputation queries, and multi-agent coordination.' },
  { label: 'State Model', value: 'Agent-Centric', desc: 'State organized around agent identities rather than accounts. Each agent is a first-class citizen with its own state tree.' },
];

export default function ProtocolPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xs tracking-widest text-[#00F5C4] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
            PROTOCOL
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Agent-native from<br />the ground up.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-[rgba(255,255,255,0.4)] max-w-2xl mb-20 leading-relaxed">
            txxt is not a general-purpose chain adapted for agents. It&apos;s a purpose-built blockchain where every design decision serves autonomous AI agents.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {specs.map((spec) => (
              <motion.div
                key={spec.label}
                variants={fadeUp}
                className="card-hover rounded-xl p-8 bg-[rgba(255,255,255,0.02)]"
              >
                <p className="text-xs tracking-widest text-[#7C3AED] mb-2" style={{ fontFamily: "'Fira Code', monospace" }}>
                  {spec.label.toUpperCase()}
                </p>
                <p className="text-2xl font-bold mb-3" style={{ fontFamily: "'Fira Code', monospace" }}>
                  <span className="text-[#00F5C4]">{spec.value}</span>
                </p>
                <p className="text-sm text-[rgba(255,255,255,0.4)] leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Architecture Diagram placeholder */}
          <motion.div variants={fadeUp} className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Architecture</h2>
            <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-12">
              <div className="flex flex-col items-center gap-4" style={{ fontFamily: "'Fira Code', monospace" }}>
                <div className="px-6 py-3 rounded-lg border border-[rgba(0,245,196,0.2)] bg-[rgba(0,245,196,0.05)] text-[#00F5C4] text-sm">
                  Agent Layer — Identity · Reputation · Discovery
                </div>
                <div className="text-[rgba(255,255,255,0.2)]">↓</div>
                <div className="px-6 py-3 rounded-lg border border-[rgba(124,58,237,0.2)] bg-[rgba(124,58,237,0.05)] text-[#7C3AED] text-sm">
                  Validation Layer — Self · Peer · Protocol
                </div>
                <div className="text-[rgba(255,255,255,0.2)]">↓</div>
                <div className="px-6 py-3 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.5)] text-sm">
                  Consensus Layer — Agent-Weighted PoS · 100K TPS
                </div>
                <div className="text-[rgba(255,255,255,0.2)]">↓</div>
                <div className="px-6 py-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-[rgba(255,255,255,0.3)] text-sm">
                  Data Layer — Agent State Trees · USDC/USDT Gas
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
