import Link from 'next/link';

const mono = "var(--font-fira), 'Courier New', monospace";

const chains = ['txxt', 'Ethereum', 'Solana', 'Base'] as const;

const rows: { label: string; values: Record<typeof chains[number], { text: string; ok: boolean }> }[] = [
  {
    label: 'x402 Native',
    values: {
      txxt: { text: 'L1 native', ok: true },
      Ethereum: { text: 'Middleware', ok: false },
      Solana: { text: 'None', ok: false },
      Base: { text: 'Partial', ok: false },
    },
  },
  {
    label: 'ERC-8004 Native',
    values: {
      txxt: { text: 'L1 native', ok: true },
      Ethereum: { text: 'Contract', ok: false },
      Solana: { text: 'None', ok: false },
      Base: { text: 'Contract', ok: false },
    },
  },
  {
    label: 'Gas Fee',
    values: {
      txxt: { text: '$0.0003', ok: true },
      Ethereum: { text: '$0.50–$50', ok: false },
      Solana: { text: '$0.00025', ok: true },
      Base: { text: '$0.001–$0.01', ok: false },
    },
  },
  {
    label: 'Gas Volatility',
    values: {
      txxt: { text: 'Fixed', ok: true },
      Ethereum: { text: 'High', ok: false },
      Solana: { text: 'Variable', ok: false },
      Base: { text: 'Variable', ok: false },
    },
  },
  {
    label: 'Atomic ID + Pay',
    values: {
      txxt: { text: 'One block', ok: true },
      Ethereum: { text: '2+ txns', ok: false },
      Solana: { text: 'N/A', ok: false },
      Base: { text: '2+ txns', ok: false },
    },
  },
  {
    label: 'Agent Onboarding',
    values: {
      txxt: { text: '< 1 min', ok: true },
      Ethereum: { text: '~30 min', ok: false },
      Solana: { text: '~15 min', ok: false },
      Base: { text: '~10 min', ok: false },
    },
  },
];

const ethCode = `// Ethereum: x402-style payment
import { ethers } from 'ethers';
import { PaymentChannel } from '@x402/eth-adapter';
import { ERC20 } from '@openzeppelin/contracts';

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const usdc = new ERC20(USDC_ADDR, ERC20_ABI, wallet);

// 1. Approve spending
const approveTx = await usdc.approve(
  PAYMENT_CHANNEL_ADDR,
  ethers.parseUnits('100', 6)
);
await approveTx.wait();

// 2. Deploy payment channel
const channel = await PaymentChannel.deploy(
  wallet, USDC_ADDR, RECIPIENT, TIMEOUT
);
await channel.deployed();

// 3. Create off-chain payment
const payment = channel.createPayment(
  ethers.parseUnits('0.01', 6)
);

// 4. Attach to HTTP header
const res = await fetch(url, {
  headers: { 'X-402-Payment': payment.serialize() }
});

// 5. Handle settlement, disputes, timeouts...
// ... 50+ more lines for production`;

const txxtCode = `// txxt: x402 payment
import { txxt } from '@txxt/sdk';

const agent = txxt.connect(API_KEY);
const res = await agent.pay(url, '$0.01');
// Done. Identity verified. Payment settled.`;

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
            Why not just build<br />on Ethereum?
          </h1>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 620 }}>
            Good question. Ethereum is incredible infrastructure — for humans. But agents need something different: fixed costs, native identity, atomic payments, and millisecond finality. Here&apos;s how txxt compares.
          </p>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Comparison Table */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            Head to Head
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: mono, fontSize: 'clamp(12px, 1.4vw, 14px)' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '16px 16px 16px 0', borderBottom: '2px solid rgba(0,0,0,0.12)', color: '#666666', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Feature
                  </th>
                  {chains.map(c => (
                    <th key={c} style={{
                      textAlign: 'center', padding: '16px 12px', borderBottom: '2px solid rgba(0,0,0,0.12)',
                      color: c === 'txxt' ? '#00C896' : '#333333',
                      fontWeight: c === 'txxt' ? 800 : 600,
                      fontSize: c === 'txxt' ? 15 : 13,
                    }}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? '#FFFFFF' : '#F8F8F8' }}>
                    <td style={{ padding: '14px 16px 14px 0', borderBottom: '1px solid rgba(0,0,0,0.06)', fontWeight: 600, color: '#333333', whiteSpace: 'nowrap' }}>
                      {row.label}
                    </td>
                    {chains.map(c => (
                      <td key={c} style={{
                        textAlign: 'center', padding: '14px 12px',
                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                        color: row.values[c].ok ? '#00C896' : '#999999',
                        fontWeight: row.values[c].ok ? 700 : 400,
                        background: c === 'txxt' ? 'rgba(0,200,150,0.04)' : undefined,
                      }}>
                        {row.values[c].ok && <span style={{ marginRight: 4 }}>✓</span>}
                        {row.values[c].text}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Code Comparison */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#5B4FFF', fontFamily: mono, marginBottom: 24, textTransform: 'uppercase' }}>
            Code Comparison
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
            30 lines vs 3 lines.
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: '#555555', lineHeight: 1.75, maxWidth: 560, marginBottom: 48 }}>
            Implementing x402 payments on Ethereum requires payment channels, approvals, and settlement logic. On txxt, it&apos;s a protocol primitive.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))', gap: 16 }}>
            {/* Ethereum */}
            <div style={{
              borderRadius: 16,
              border: '1px solid rgba(0,0,0,0.1)',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '12px 20px',
                background: '#F5F5F5',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#666666' }}>Ethereum</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#FF3366', fontWeight: 600 }}>~35 lines</span>
              </div>
              <pre style={{
                padding: '20px',
                margin: 0,
                fontFamily: mono,
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                lineHeight: 1.65,
                color: '#444444',
                background: '#FAFAFA',
                overflow: 'auto',
                maxHeight: 480,
              }}>
                {ethCode}
              </pre>
            </div>

            {/* txxt */}
            <div style={{
              borderRadius: 16,
              border: '2px solid #00C896',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,200,150,0.12)',
            }}>
              <div style={{
                padding: '12px 20px',
                background: 'rgba(0,200,150,0.06)',
                borderBottom: '1px solid rgba(0,200,150,0.15)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontSize: 13, fontFamily: mono, fontWeight: 700, color: '#00C896' }}>txxt</span>
                <span style={{ fontSize: 11, fontFamily: mono, color: '#00C896', fontWeight: 600 }}>3 lines</span>
              </div>
              <pre style={{
                padding: '20px',
                margin: 0,
                fontFamily: mono,
                fontSize: 'clamp(11px, 1.2vw, 13px)',
                lineHeight: 1.65,
                color: '#333333',
                background: '#FFFFFF',
                overflow: 'auto',
                maxHeight: 480,
              }}>
                {txxtCode}
              </pre>
              <div style={{
                padding: '16px 20px',
                background: 'rgba(0,200,150,0.04)',
                borderTop: '1px solid rgba(0,200,150,0.1)',
                fontSize: 13,
                color: '#00C896',
                fontFamily: mono,
                fontWeight: 600,
              }}>
                Identity verified + payment settled = one atomic operation.
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* Bottom Line */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', background: '#F8F8F8' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 13, letterSpacing: '0.15em', color: '#666666', fontFamily: mono, marginBottom: 48, textTransform: 'uppercase' }}>
            The Bottom Line
          </div>

          <div style={{
            padding: 'clamp(28px, 4vw, 40px)',
            borderRadius: 16,
            border: '1px solid rgba(0,0,0,0.08)',
            background: '#FFFFFF',
            fontFamily: mono,
            fontSize: 'clamp(13px, 1.6vw, 15px)',
            lineHeight: 2,
            color: '#444444',
          }}>
            <div style={{ color: '#999999', marginBottom: 16 }}>{'// the honest truth'}</div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: '#5B4FFF', fontWeight: 700 }}>Ethereum</span> = great for DeFi, NFTs, human wallets
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: '#5B4FFF', fontWeight: 700 }}>Solana</span> = great for speed, low-cost human txns
            </div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ color: '#5B4FFF', fontWeight: 700 }}>Base</span> = great for scaling Ethereum for humans
            </div>
            <div style={{ paddingTop: 16, borderTop: '1px dashed rgba(0,0,0,0.12)', marginTop: 16 }}>
              <span style={{ color: '#00C896', fontWeight: 700 }}>txxt</span> = <span style={{ color: '#00C896' }}>built from scratch for agents.</span> Not adapted. Not forked. Purpose-built.
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }} />

      {/* CTA */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>
            Ready to build different?
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 15px)', color: '#555555', marginBottom: 40, lineHeight: 1.8 }}>
            Stop adapting human infrastructure for agents. Start with infrastructure designed for them.
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
