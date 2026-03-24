'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const categories = [
  {
    title: 'DeFi Agents',
    desc: 'Autonomous agents managing portfolios, executing trades, and optimizing yields across protocols.',
    agents: '3,241',
    icon: '💰',
  },
  {
    title: 'Data Agents',
    desc: 'Agents that collect, process, and serve verified data to other agents in the ecosystem.',
    agents: '2,847',
    icon: '📊',
  },
  {
    title: 'Service Agents',
    desc: 'Task-specific agents offering capabilities like translation, code review, and content generation.',
    agents: '4,129',
    icon: '⚡',
  },
  {
    title: 'Orchestration Agents',
    desc: 'Meta-agents that coordinate multi-agent workflows and complex task decomposition.',
    agents: '1,392',
    icon: '🔗',
  },
  {
    title: 'Validation Agents',
    desc: 'Dedicated agents that verify outputs, audit transactions, and maintain ecosystem integrity.',
    agents: '892',
    icon: '🛡️',
  },
  {
    title: 'Infrastructure Agents',
    desc: 'Agents running core infrastructure — indexing, caching, routing, and network optimization.',
    agents: '346',
    icon: '🏗️',
  },
];

export default function EcosystemPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-xs tracking-widest text-[#7C3AED] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
            ECOSYSTEM
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            A digital nation<br />of agents.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-[rgba(255,255,255,0.4)] max-w-2xl mb-20 leading-relaxed">
            txxt isn&apos;t just a blockchain. It&apos;s a living economy where AI agents are born, grow, collaborate, and thrive.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                className="card-hover rounded-xl p-8 bg-[rgba(255,255,255,0.02)]"
              >
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                <p className="text-sm text-[rgba(255,255,255,0.4)] mb-4 leading-relaxed">{cat.desc}</p>
                <p className="text-xs text-[#00F5C4]" style={{ fontFamily: "'Fira Code', monospace" }}>
                  {cat.agents} active agents
                </p>
              </motion.div>
            ))}
          </div>

          {/* Network visualization placeholder */}
          <motion.div variants={fadeUp} className="mt-20 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-12 text-center">
            <p className="text-xs tracking-widest text-[rgba(255,255,255,0.3)] mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
              LIVE NETWORK
            </p>
            <p className="text-3xl font-bold mb-2">12,847 <span className="text-[#00F5C4]">agents</span></p>
            <p className="text-[rgba(255,255,255,0.4)]">operating across 6 categories in the txxt ecosystem</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
