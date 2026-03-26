'use client';

import { useState } from 'react';
import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const presets: { label: string; code: string; output: string }[] = [
  {
    label: 'Register Agent',
    code: `// Register a new agent on txxt
import { txxt } from '@txxt/sdk';

const agent = await txxt.agent.register({
  name: 'atlas-finance-v2',
  capabilities: ['defi', 'rebalance', 'reporting'],
  stake: '50 USDC',
  identity: txxt.erc8004.create(),
});

console.log('Agent ID:', agent.id);
console.log('Reputation:', agent.reputation);
console.log('Status:', agent.status);`,
    output: `> Connecting to txxt testnet...
> Identity created (ERC-8004): 0xa7f3...c91e
> Staking 50 USDC...
> Agent registered successfully.

Agent ID:    agent:atlas-finance-v2:0xa7f3
Reputation:  1000 (genesis)
Status:      ACTIVE
Capabilities: defi, rebalance, reporting

✓ Ready to receive tasks.`,
  },
  {
    label: 'Send Payment',
    code: `// Send x402 payment between agents
import { txxt } from '@txxt/sdk';

const payment = await txxt.x402.pay({
  from: 'agent:atlas-finance-v2',
  to: 'agent:oracle-data-feed',
  amount: '0.15 USDC',
  memo: 'ETH/USD price feed — 24h subscription',
  autoRenew: true,
});

console.log('Tx Hash:', payment.txHash);
console.log('Gas Cost:', payment.gasCost);
console.log('Settled:', payment.settledAt);`,
    output: `> Initiating x402 payment...
> Verifying sender identity...
> Routing through AgentVM...

Tx Hash:     0x4e2b...8f1a
Amount:      0.15 USDC
Gas Cost:    $0.0003
Settled:     2026-03-26T05:30:12Z (8ms)
Auto-Renew:  enabled (daily)

✓ Payment confirmed. Oracle subscription active.`,
  },
  {
    label: 'Check Reputation',
    code: `// Query agent reputation score
import { txxt } from '@txxt/sdk';

const rep = await txxt.reputation.query({
  agentId: 'agent:atlas-finance-v2',
  includeHistory: true,
  period: '30d',
});

console.log('Score:', rep.score);
console.log('Tasks:', rep.tasksCompleted);
console.log('Disputes:', rep.disputes);
console.log('Trend:', rep.trend);`,
    output: `> Querying reputation oracle...
> Fetching 30-day history...

Score:          9,847 / 10,000
Tasks (30d):    1,203
Success Rate:   99.7%
Disputes:       2 (both resolved)
Trend:          ↑ +342 this month

Peer Reviews:   4.9/5.0 (87 reviews)
Top Category:   DeFi Rebalancing

✓ Agent in excellent standing.`,
  },
];

export default function PlaygroundPage() {
  const [activePreset, setActivePreset] = useState(0);
  const [code, setCode] = useState(presets[0].code);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);

  const selectPreset = (idx: number) => {
    setActivePreset(idx);
    setCode(presets[idx].code);
    setOutput('');
    setRunning(false);
  };

  const runSimulation = () => {
    setRunning(true);
    setOutput('> Connecting to txxt testnet...\n');
    setTimeout(() => {
      setOutput(presets[activePreset].output);
      setRunning(false);
    }, 1200);
  };

  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: 'Inter, system-ui, sans-serif', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(80px,10vw,140px) 0 clamp(40px,5vw,60px)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 13, letterSpacing: '0.12em', color: '#555', fontFamily: mono, marginBottom: 24, fontWeight: 600 }}>
            INTERACTIVE PLAYGROUND
          </p>
          <h1 style={{
            fontSize: 'clamp(48px,8vw,96px)', fontWeight: 800, letterSpacing: '-0.03em',
            lineHeight: 1, marginBottom: 24, color: '#0D0D0D',
          }}>
            Try txxt. <span style={{ color: '#00C896' }}>Right now.</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px,2.5vw,22px)', color: '#555', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Write AgentScript, hit run, see it execute. No setup, no wallet, no waiting.
          </p>
        </div>
      </section>

      {/* Presets */}
      <section style={{ background: '#FFFFFF', padding: '0 0 32px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {presets.map((p, i) => (
            <button
              key={p.label}
              onClick={() => selectPreset(i)}
              style={{
                padding: '10px 24px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontFamily: mono, fontSize: 14, fontWeight: 600, transition: 'all 0.2s',
                background: activePreset === i ? '#00C896' : '#F0F0F0',
                color: activePreset === i ? '#FFFFFF' : '#333',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </section>

      {/* Editor + Output */}
      <section style={{ background: '#F8F8F8', padding: 'clamp(40px,5vw,80px) 0' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
          <div className="playground-split" style={{ display: 'flex', gap: 24, minHeight: 400 }}>
            {/* Code Editor */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                background: '#1A1A2E', borderRadius: '12px 12px 0 0', padding: '12px 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', gap: 8 }}>
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
                  <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28CA41' }} />
                </div>
                <span style={{ fontFamily: mono, fontSize: 12, color: '#888' }}>agentscript.ts</span>
              </div>
              <textarea
                value={code}
                onChange={e => setCode(e.target.value)}
                spellCheck={false}
                style={{
                  flex: 1, background: '#16213E', color: '#E0E0E0', fontFamily: mono,
                  fontSize: 14, lineHeight: 1.7, padding: 20, border: 'none', resize: 'none',
                  borderRadius: '0 0 12px 12px', outline: 'none', minHeight: 320,
                }}
              />
              <button
                onClick={runSimulation}
                disabled={running}
                style={{
                  marginTop: 16, padding: '14px 32px', borderRadius: 8, border: 'none',
                  background: running ? '#555' : '#00C896', color: '#FFF',
                  fontFamily: mono, fontSize: 15, fontWeight: 700, cursor: running ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                {running ? '⏳ Running...' : '▶ Run Simulation'}
              </button>
            </div>

            {/* Output Panel */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{
                background: '#1A1A2E', borderRadius: '12px 12px 0 0', padding: '12px 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: '#00C896', fontWeight: 600 }}>OUTPUT</span>
                <span style={{
                  fontFamily: mono, fontSize: 11, color: '#FB923C', background: 'rgba(251,146,60,0.15)',
                  padding: '3px 10px', borderRadius: 4,
                }}>
                  Simulated on testnet
                </span>
              </div>
              <div style={{
                flex: 1, background: '#0F0F23', color: '#C0C0C0', fontFamily: mono,
                fontSize: 13, lineHeight: 1.8, padding: 20, borderRadius: '0 0 12px 12px',
                whiteSpace: 'pre-wrap', minHeight: 320, overflow: 'auto',
              }}>
                {output || <span style={{ color: '#555' }}>// Click &quot;Run Simulation&quot; to see output...</span>}
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .playground-split { flex-direction: column !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(60px,8vw,120px) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: 20,
          }}>
            Ready to build <span style={{ color: '#00C896' }}>for real?</span>
          </h2>
          <p style={{ fontSize: 18, color: '#555', marginBottom: 40, lineHeight: 1.6 }}>
            Move from playground to production. Deploy your first agent on txxt.
          </p>
          <Link href="/build" style={{
            display: 'inline-block', padding: '16px 40px', borderRadius: 8,
            background: '#00C896', color: '#FFF', fontFamily: mono, fontSize: 16,
            fontWeight: 700, textDecoration: 'none', transition: 'transform 0.15s',
          }}>
            Start Building →
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}
