import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const withoutRows = [
  { area: 'Agent Identity', diy: 'Build custom ERC-8004 contracts per chain', txxt: 'One SDK call — works on ETH, SOL, Base, Polygon', color: '#5B4FFF' },
  { area: 'Agent Payments', diy: 'Implement x402 adapters for each chain', txxt: 'txxt.pay() — settles on whichever chain you choose', color: '#00C896' },
  { area: 'Work Verification', diy: 'Roll your own oracle + reputation system', txxt: 'PoAW built-in — cross-chain work verification', color: '#FB923C' },
  { area: 'Multi-chain Support', diy: 'Separate deployments, separate state', txxt: 'One agent identity, portable across every chain', color: '#5B4FFF' },
  { area: 'Agent Discovery', diy: 'Build a registry per chain or centralized DB', txxt: 'Universal on-chain capability discovery', color: '#00C896' },
  { area: 'Onboarding Time', diy: 'Weeks per chain integration', txxt: '< 5 minutes — any chain, any agent framework', color: '#FB923C' },
];

const diyCode = `// DIY: agent payments across chains
import { ethers } from 'ethers';
import { Connection } from '@solana/web3.js';
import { PaymentChannel } from './custom-x402-adapter';
import { IdentityRegistry } from './custom-erc8004';

// 1. Deploy identity contract on Ethereum
const ethIdentity = await IdentityRegistry.deploy(
  ethProvider, agentMetadata
);
// 2. Deploy identity on Solana (different SDK!)
const solIdentity = await createSolanaIdentity(
  connection, agentKeypair, metadata
);
// 3. Build payment channel per chain
const ethPayment = await PaymentChannel.create(
  ethProvider, USDC_ETH, recipient
);
const solPayment = await createSolPayment(
  connection, USDC_SOL, recipient
);
// 4. Route payments based on chain
// 5. Sync identity across chains
// 6. Build your own reputation system
// ... 100+ lines of glue code per chain`;

const txxtCode = `// txxt middleware: one layer for everything
import { txxt } from '@txxt/sdk';

const agent = txxt.connect({
  apiKey: API_KEY,
  chains: ['ethereum', 'solana', 'base']
});

// Identity — works on every chain
await agent.register({ capabilities: ['translate'] });

// Payments — settles wherever you want
await agent.pay(url, '$0.01', { chain: 'base' });

// Done. One identity. Any chain. Any framework.`;

export default function ComparePage() {
  return (
    <div style={{ background: '#FFFFFF', color: '#0D0D0D', fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* Hero */}
      <section style={{ padding: 'clamp(80px, 12vw, 140px) 24px 80px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#FF3366', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Compare
          </div>
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: 28 }}>
            Why not just<br />build it yourself?
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 640 }}>
            You could wire up x402 adapters, deploy identity contracts, and build reputation oracles on every chain — or you could use the middleware layer that already does all of it.
          </p>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#00C896', fontFamily: mono, marginTop: 20, fontWeight: 600 }}>
            txxt doesn&apos;t replace your blockchain. It makes your blockchain agent-ready.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Architecture Diagram */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            Where txxt sits
          </div>

          {/* Stack Diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: mono }}>
            {/* Top: AI Agents */}
            <div style={{
              padding: 'clamp(20px, 3vw, 28px)',
              borderRadius: 14,
              border: '1px solid rgba(91,79,255,0.2)',
              background: 'rgba(91,79,255,0.04)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#5B4FFF', marginBottom: 8, textTransform: 'uppercase' }}>AI Agents</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {['MCP (Anthropic)', 'A2A (Google)', 'ACP', 'Custom Agents'].map(f => (
                  <span key={f} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 6, background: '#5B4FFF0A', border: '1px solid #5B4FFF22', color: '#5B4FFF', fontWeight: 600 }}>{f}</span>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: 18, color: 'rgba(0,0,0,0.15)' }}>↕</div>

            {/* Middle: txxt Layer */}
            <div style={{
              padding: 'clamp(24px, 3.5vw, 36px)',
              borderRadius: 14,
              border: '2px solid #00C896',
              background: 'rgba(0,200,150,0.04)',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,200,150,0.1)',
            }}>
              <div style={{ fontSize: 13, letterSpacing: '0.12em', color: '#00C896', marginBottom: 12, fontWeight: 800 }}>txxt MIDDLEWARE LAYER</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {[
                  { label: 'x402 Payments', color: '#00C896' },
                  { label: 'ERC-8004 Identity', color: '#5B4FFF' },
                  { label: 'PoAW Verification', color: '#FB923C' },
                  { label: 'AgentScript', color: '#FF3366' },
                ].map(f => (
                  <span key={f.label} style={{ fontSize: 12, padding: '6px 14px', borderRadius: 6, background: `${f.color}0F`, border: `1px solid ${f.color}33`, color: f.color, fontWeight: 700 }}>{f.label}</span>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: 18, color: 'rgba(0,0,0,0.15)' }}>↕</div>

            {/* Bottom: Settlement chains */}
            <div style={{
              padding: 'clamp(20px, 3vw, 28px)',
              borderRadius: 14,
              border: '1px solid rgba(251,146,60,0.2)',
              background: 'rgba(251,146,60,0.04)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 11, letterSpacing: '0.12em', color: '#FB923C', marginBottom: 8, textTransform: 'uppercase' }}>Settlement Layer (Your Choice)</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {['Ethereum', 'Solana', 'Base', 'Polygon', 'Arbitrum', 'Any EVM'].map(c => (
                  <span key={c} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 6, background: '#FB923C0A', border: '1px solid #FB923C22', color: '#FB923C', fontWeight: 600 }}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: '#555555', fontFamily: mono }}>
            txxt = the missing layer between AI agents and blockchains
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* DIY vs txxt Table */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Side by Side
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 48 }}>
            DIY agent infra<br />vs txxt middleware.
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 1,
            background: 'rgba(0,0,0,0.04)',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1px solid rgba(0,0,0,0.08)',
          }}>
            {/* Header */}
            <div style={{ padding: '16px 20px', background: '#F5F5F5', fontFamily: mono, fontSize: 12, fontWeight: 700, color: '#666666', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              DIY Approach
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(0,200,150,0.06)', fontFamily: mono, fontSize: 12, fontWeight: 700, color: '#00C896', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              With txxt
            </div>

            {withoutRows.map(row => (
              <>
                <div key={`diy-${row.area}`} style={{ padding: '20px', background: '#FFFFFF' }}>
                  <div style={{ fontSize: 12, fontFamily: mono, color: row.color, fontWeight: 600, marginBottom: 6, letterSpacing: '0.05em' }}>{row.area}</div>
                  <div style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#777777', lineHeight: 1.65 }}>
                    <span style={{ color: '#FF3366', marginRight: 6 }}>✗</span>{row.diy}
                  </div>
                </div>
                <div key={`txxt-${row.area}`} style={{ padding: '20px', background: 'rgba(0,200,150,0.02)' }}>
                  <div style={{ fontSize: 12, fontFamily: mono, color: row.color, fontWeight: 600, marginBottom: 6, letterSpacing: '0.05em' }}>{row.area}</div>
                  <div style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: '#333333', lineHeight: 1.65, fontWeight: 500 }}>
                    <span style={{ color: '#00C896', marginRight: 6 }}>✓</span>{row.txxt}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Code Comparison */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#FB923C', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Code Comparison
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            100+ lines of glue code<br />vs 5 lines.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 580, marginBottom: 48 }}>
            Building agent infrastructure across multiple chains requires separate SDKs, separate contracts, and mountains of glue code. txxt is the universal adapter.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 16 }}>
            {/* DIY */}
            <div style={{ borderRadius: 16, border: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
              <div style={{
                padding: '12px 20px', background: '#F0F0F0',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#666666' }}>DIY Multi-chain</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#FF3366', fontWeight: 600 }}>~100+ lines per chain</span>
              </div>
              <pre style={{
                padding: 20, margin: 0, fontFamily: mono,
                fontSize: 'clamp(11px, 1.2vw, 13px)', lineHeight: 1.65,
                color: '#444444', background: '#FAFAFA',
                overflow: 'auto', maxHeight: 480,
              }}>{diyCode}</pre>
            </div>

            {/* txxt */}
            <div style={{ borderRadius: 16, border: '2px solid #00C896', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,200,150,0.12)' }}>
              <div style={{
                padding: '12px 20px', background: 'rgba(0,200,150,0.06)',
                borderBottom: '1px solid rgba(0,200,150,0.15)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#00C896' }}>txxt Middleware</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#00C896', fontWeight: 600 }}>5 lines · any chain</span>
              </div>
              <pre style={{
                padding: 20, margin: 0, fontFamily: mono,
                fontSize: 'clamp(11px, 1.2vw, 13px)', lineHeight: 1.65,
                color: '#333333', background: '#FFFFFF',
                overflow: 'auto', maxHeight: 480,
              }}>{txxtCode}</pre>
              <div style={{
                padding: '16px 20px', background: 'rgba(0,200,150,0.04)',
                borderTop: '1px solid rgba(0,200,150,0.1)',
                fontSize: 13, color: '#00C896', fontFamily: mono, fontWeight: 600,
              }}>
                One identity. One payment layer. Any chain underneath.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Bottom Line */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            The Bottom Line
          </div>

          <div style={{
            padding: 'clamp(28px, 4vw, 40px)', borderRadius: 16,
            border: '1px solid rgba(0,0,0,0.08)', background: '#FAFAFA',
            fontFamily: mono, fontSize: 'clamp(13px, 1.6vw, 15px)',
            lineHeight: 2, color: '#444444',
          }}>
            <div style={{ color: '#999999', marginBottom: 16 }}>{'// the honest answer'}</div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: '#FF3366', fontWeight: 700 }}>Without txxt:</span> You build agent infra per chain. Months of work. Fragmented identity. Brittle payments.
            </div>
            <div style={{ paddingTop: 16, borderTop: '1px dashed rgba(0,0,0,0.12)', marginTop: 16 }}>
              <span style={{ color: '#00C896', fontWeight: 700 }}>With txxt:</span> <span style={{ color: '#00C896' }}>One middleware layer. Any chain. Any agent framework. Ship in minutes.</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Make your chain agent-ready.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 15px)', color: '#555555', marginBottom: 40, lineHeight: 1.8 }}>
            Keep your chain. Add the agent layer. It takes 5 minutes.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/build" style={{ padding: '14px 32px', borderRadius: 10, background: '#00C896', color: '#fff', fontWeight: 600, fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Start Building →
            </Link>
            <Link href="/protocol" style={{ padding: '14px 32px', borderRadius: 10, border: '1px solid rgba(0,0,0,0.15)', color: '#0D0D0D', fontSize: 'clamp(13px, 2vw, 14px)', textDecoration: 'none' }}>
              Explore Protocol
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
