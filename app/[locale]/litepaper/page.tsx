"use client";

import { useEffect, useState, useRef } from "react";
import {useTranslations} from 'next-intl';

const mono = "'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace";
const sans = "var(--font-inter), system-ui, -apple-system, sans-serif";

export default function LitepaperPage() {
  const t = useTranslations('litepaper');
  const sections = [
    { id: "abstract", num: "00", label: t('toc.abstract') },
    { id: "problem", num: "01", label: t('toc.problem') },
    { id: "solution", num: "02", label: t('toc.solution') },
    { id: "architecture", num: "03", label: t('toc.architecture') },
    { id: "integration", num: "04", label: t('toc.integration') },
    { id: "tokenless", num: "05", label: t('toc.tokenless') },
    { id: "governance", num: "06", label: t('toc.governance') },
    { id: "roadmap", num: "07", label: t('toc.roadmap') },
    { id: "conclusion", num: "08", label: t('toc.conclusion') },
  ];
  const [activeSection, setActiveSection] = useState("abstract");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topmost.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>
      <style>{`
        body, main { overflow-x: visible !important; }
      `}</style>
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "0 24px",
        }}
        className="litepaper-layout"
      >
        <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>
        {/* ─── TOC ─── */}
        <nav
          className="litepaper-toc"
          style={{
            width: 280,
            flexShrink: 0,
            position: "sticky",
            top: 80,
            alignSelf: "flex-start",
            paddingRight: 48,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              fontWeight: 700,
              color: "#BBBBBB",
              fontFamily: mono,
              marginBottom: 28,
              textTransform: "uppercase",
              margin: "0 0 28px 0",
            }}
          >
            {t('contents')}
          </p>
          {sections.map(({ id, num, label }) => (
            <div
              key={id}
              onClick={() => scrollTo(id)}
              onMouseEnter={(e) => {
                if (activeSection !== id)
                  (e.currentTarget as HTMLElement).style.color = "#333";
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id)
                  (e.currentTarget as HTMLElement).style.color = "#AAAAAA";
              }}
              style={{
                fontSize: 15,
                lineHeight: 2.2,
                cursor: "pointer",
                color: activeSection === id ? "#00C896" : "#AAAAAA",
                fontWeight: activeSection === id ? 600 : 400,
                borderLeft:
                  activeSection === id
                    ? "2px solid #00C896"
                    : "2px solid transparent",
                paddingLeft: 14,
                paddingTop: 2,
                paddingBottom: 2,
                transition: "all 0.2s ease",
                fontFamily: sans,
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 11, color: "#CCCCCC", marginRight: 8, fontFamily: mono, flexShrink: 0 }}>{num}.</span>
              {label}
            </div>
          ))}
        </nav>

        {/* ─── Vertical Divider ─── */}
        <div style={{ width: 1, background: "rgba(0,0,0,0.06)", flexShrink: 0, alignSelf: "stretch" }} />

        {/* ─── Main Content ─── */}
        <article
          className="litepaper-content"
          style={{
            flex: 1,
            minWidth: 0,
            paddingLeft: 64,
            paddingTop: 28,
            paddingBottom: 80,
            fontFamily: sans,
            color: "#333",
            fontSize: 16,
            lineHeight: 1.9,
          }}
        >
          {/* Title */}
          <header style={{ marginBottom: 56, textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(48px, 7vw, 80px)",
                fontWeight: 700,
                color: "#0D0D0D",
                lineHeight: 1.1,
                marginBottom: 10,
                letterSpacing: "-0.03em",
              }}
            >
              {t('header.title')}
            </h1>
            <p
              style={{
                fontSize: 20,
                color: "#666",
                fontWeight: 400,
                marginBottom: 24,
                letterSpacing: "-0.01em",
              }}
            >
              {t('header.subtitle')}
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#999",
                fontFamily: mono,
                letterSpacing: "0.04em",
              }}
            >
              {t('header.meta')}
            </p>
          </header>

          <SectionDivider />

          {/* ──────────── Abstract ──────────── */}
          <SectionBlock id="abstract" num="00" title={t('toc.abstract')}>
            <p>
              {t('sections.abstract.paragraph1')}
            </p>
            <p>
              {t.rich('sections.abstract.paragraph2', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <Callout>
              {t('sections.abstract.callout')}
            </Callout>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── The Problem ──────────── */}
          <SectionBlock id="problem" num="01" title={t('toc.problem')}>
            <p>
              {t.rich('sections.problem.intro', {
                stat: (chunks) => <StatInline>{chunks}</StatInline>
              })}
            </p>

            <H3>{t('sections.problem.payment.title')}</H3>
            <p>
              {t('sections.problem.payment.description')}
            </p>

            <H3>{t('sections.problem.identity.title')}</H3>
            <p>
              {t('sections.problem.identity.description')}
            </p>

            <H3>{t('sections.problem.settlement.title')}</H3>
            <p>
              {t('sections.problem.settlement.description')}
            </p>

            <Callout>
              {t('sections.problem.callout')}
            </Callout>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── The Solution ──────────── */}
          <SectionBlock id="solution" num="02" title={t('solutionTitle')}>
            <p>
              {t.rich('sections.solution.paragraph1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>

            {/* Architecture Diagram */}
            <CodeBlock title={t('sections.solution.codeTitle')} noSyntax>
              <div style={{ color: "#8b949e", marginBottom: 12 }}>{t('sections.solution.codeComment')}</div>
              <div
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <span style={{ color: "#d2a8ff", fontWeight: 600 }}>Layer 3</span>
                {"  "}
                <span style={{ color: "#e6edf3" }}>
                  {t('sections.solution.layers.layer3')}
                </span>
              </div>
              <div
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <span style={{ color: "#7ee787", fontWeight: 600 }}>Layer 2</span>
                {"  "}
                <span style={{ color: "#e6edf3" }}>{t('sections.solution.layers.layer2')}</span>
                <div
                  style={{
                    paddingLeft: 20,
                    marginTop: 4,
                    fontSize: 12,
                    color: "#8b949e",
                  }}
                >
                  {t('sections.solution.layers.layer2Items')}
                </div>
              </div>
              <div>
                <span style={{ color: "#d2a8ff", fontWeight: 600 }}>Layer 1</span>
                {"  "}
                <span style={{ color: "#e6edf3" }}>
                  {t('sections.solution.layers.layer1')}
                </span>
              </div>
            </CodeBlock>

            <p>
              {t('sections.solution.paragraph2')}
            </p>

            <H3>{t('sections.solution.whyTitle')}</H3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                {t.rich('sections.solution.bullets.0', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.solution.bullets.1', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.solution.bullets.2', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.solution.bullets.3', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
            </ul>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Architecture ──────────── */}
          <SectionBlock id="architecture" num="03" title={t('toc.architecture')}>
            <H3>{t('sections.architecture.x402.title')}</H3>
            <p>
              {t.rich('sections.architecture.x402.paragraph1', {
                strong: (chunks) => <strong>{chunks}</strong>,
                code: (chunks) => <Code>{chunks}</Code>
              })}
            </p>
            <p>
              {t.rich('sections.architecture.x402.paragraph2', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <ol style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                {t.rich('sections.architecture.x402.operations.offer', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.architecture.x402.operations.proof', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.architecture.x402.operations.settle', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
            </ol>
            <p>
              {t.rich('sections.architecture.x402.paragraph3', {
                stat: (chunks) => <StatInline>{chunks}</StatInline>
              })}
            </p>

            <H3>{t('sections.architecture.identity.title')}</H3>
            <p>
              {t.rich('sections.architecture.identity.paragraph1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              {['0', '1', '2', '3', '4'].map((index) => (
                <li key={index}>{t(`sections.architecture.identity.items.${index}`)}</li>
              ))}
            </ul>
            <p>
              {t.rich('sections.architecture.identity.paragraph2', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <p>
              {t('sections.architecture.identity.paragraph3')}
            </p>

            <H3>{t('sections.architecture.poaw.title')}</H3>
            <p>
              {t.rich('sections.architecture.poaw.paragraph1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>

            <ComparisonTable />

            <p>
              {t('sections.architecture.poaw.paragraph2')}
            </p>

            <H3>{t('sections.architecture.agentscript.title')}</H3>
            <p>
              {t.rich('sections.architecture.agentscript.paragraph1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>

            <CodeBlock title={t('sections.architecture.agentscript.codeTitle')}>
              <div style={{ color: "#8b949e" }}>
                {t('sections.architecture.agentscript.codeComment')}
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: "#d2a8ff" }}>agent</span>{" "}
                <span style={{ color: "#e6edf3", fontWeight: 600 }}>DataProvider</span>{" "}
                {"{"}
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#d2a8ff" }}>identity</span>
                <span style={{ color: "#8b949e" }}>:</span>{" "}
                <span style={{ color: "#e6edf3" }}>
                  ERC8004(reputation {">"} = 0.8)
                </span>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#d2a8ff" }}>settle</span>
                <span style={{ color: "#8b949e" }}>:</span>{" "}
                <span style={{ color: "#7ee787" }}>
                  [&quot;base&quot;, &quot;ethereum&quot;, &quot;polygon&quot;]
                </span>
              </div>
              <div style={{ paddingLeft: 20, marginTop: 12 }}>
                <span style={{ color: "#d2a8ff" }}>endpoint</span>{" "}
                <span style={{ color: "#e6edf3" }}>/api/market-data</span> {"{"}
              </div>
              <div style={{ paddingLeft: 40 }}>
                <span style={{ color: "#ff7b72" }}>require</span>{" "}
                <span style={{ color: "#e6edf3" }}>
                  x402.payment(amount: 0.001, currency: &quot;USDC&quot;)
                </span>
              </div>
              <div style={{ paddingLeft: 40 }}>
                <span style={{ color: "#ff7b72" }}>require</span>{" "}
                <span style={{ color: "#e6edf3" }}>
                  caller.reputation {">"} = 0.5
                </span>
              </div>
              <div style={{ paddingLeft: 40, marginTop: 8 }}>
                <span style={{ color: "#d2a8ff" }}>return</span>{" "}
                <span style={{ color: "#e6edf3" }}>fetch_market_data(caller.params)</span>
              </div>
              <div style={{ paddingLeft: 20 }}>{"}"}</div>
              <div>{"}"}</div>
            </CodeBlock>

            <p>{t('sections.architecture.agentscript.keyFeatures')}</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                {t.rich('sections.architecture.agentscript.features.0', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.architecture.agentscript.features.1', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.architecture.agentscript.features.2', {strong: (chunks) => <strong>{chunks}</strong>, code: (chunks) => <Code>{chunks}</Code>})}
              </li>
              <li>
                {t.rich('sections.architecture.agentscript.features.3', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
            </ul>

            <H3>{t('sections.architecture.adapters.title')}</H3>
            <p>
              {t('sections.architecture.adapters.paragraph1')}
            </p>

            <ChainTable />

            <p>
              {t('sections.architecture.adapters.paragraph2')}
            </p>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Integration Layer ──────────── */}
          <SectionBlock id="integration" num="04" title={t('toc.integration')}>
            <p>
              {t('sections.integration.paragraph1')}
            </p>

            <ProtocolTable />

            <p>
              {t('sections.integration.paragraph2')}
            </p>

            <CodeBlock title={t('sections.integration.codeTitle')}>
              <div style={{ color: "#8b949e" }}>
                {t('sections.integration.codeComment')}
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ color: "#d2a8ff" }}>import</span>{" "}
                <span style={{ color: "#e6edf3" }}>{"{"} txxt {"}"}</span>{" "}
                <span style={{ color: "#d2a8ff" }}>from</span>{" "}
                <span style={{ color: "#7ee787" }}>&quot;@txxt/sdk&quot;</span>;
              </div>
              <div style={{ marginTop: 12 }}>
                <span style={{ color: "#d2a8ff" }}>const</span>{" "}
                <span style={{ color: "#e6edf3" }}>result</span>{" "}
                <span style={{ color: "#8b949e" }}>=</span>{" "}
                <span style={{ color: "#d2a8ff" }}>await</span>{" "}
                <span style={{ color: "#e6edf3" }}>txxt.pay({"{"}</span>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#e6edf3" }}>to:</span>{" "}
                <span style={{ color: "#7ee787" }}>
                  &quot;agent:data-provider.eth&quot;
                </span>
                ,
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#e6edf3" }}>amount:</span>{" "}
                <span style={{ color: "#79c0ff" }}>0.001</span>,
              </div>
              <div style={{ paddingLeft: 20 }}>
                <span style={{ color: "#e6edf3" }}>chain:</span>{" "}
                <span style={{ color: "#7ee787" }}>&quot;base&quot;</span>,
              </div>
              <div>
                <span style={{ color: "#e6edf3" }}>{"}"});</span>
              </div>
            </CodeBlock>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Tokenless Economics ──────────── */}
          <SectionBlock id="tokenless" num="05" title={t('toc.tokenless')}>
            <H3>{t('sections.tokenless.whyTitle')}</H3>
            <p>
              {t('sections.tokenless.paragraph1')}
            </p>
            <p>
              {t.rich('sections.tokenless.paragraph2', {strong: (chunks) => <strong>{chunks}</strong>})}
            </p>

            {/* Stats highlight */}
            <div
              style={{
                display: "flex",
                gap: 40,
                margin: "32px 0",
                flexWrap: "wrap",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#00C896",
                    fontFamily: mono,
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  $0.0003
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#666",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                    {t('sections.tokenless.stats.perTransaction')}
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#00C896",
                    fontFamily: mono,
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  0%
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#666",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                    {t('sections.tokenless.stats.inflation')}
                </span>
              </div>
            </div>

            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>
                {t.rich('sections.tokenless.bullets.0', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.tokenless.bullets.1', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
              <li>
                {t.rich('sections.tokenless.bullets.2', {strong: (chunks) => <strong>{chunks}</strong>})}
              </li>
            </ul>

            <H3>{t('sections.tokenless.feeTitle')}</H3>
            <p>
              {t('sections.tokenless.feeParagraph1')}
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>{t.rich('sections.tokenless.feeSplit.0', {strong: (chunks) => <strong>{chunks}</strong>})}</li>
              <li>{t.rich('sections.tokenless.feeSplit.1', {strong: (chunks) => <strong>{chunks}</strong>})}</li>
              <li>{t.rich('sections.tokenless.feeSplit.2', {strong: (chunks) => <strong>{chunks}</strong>})}</li>
            </ul>
            <p>
              {t('sections.tokenless.feeParagraph2')}
            </p>

            <Callout>
              {t('sections.tokenless.calloutLine1')}
              <br />
              <br />
              {t('sections.tokenless.calloutLine2')}
            </Callout>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Governance ──────────── */}
          <SectionBlock id="governance" num="06" title={t('toc.governance')}>
            <p>
              {t.rich('sections.governance.paragraph1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>

            <H3>{t('sections.governance.participantsTitle')}</H3>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              <li>{t.rich('sections.governance.participants.0', {strong: (chunks) => <strong>{chunks}</strong>})}</li>
              <li>{t.rich('sections.governance.participants.1', {strong: (chunks) => <strong>{chunks}</strong>})}</li>
              <li>{t.rich('sections.governance.participants.2', {strong: (chunks) => <strong>{chunks}</strong>})}</li>
            </ul>

            <H3>{t('sections.governance.scopeTitle')}</H3>
            <p>{t('sections.governance.scopeParagraph')}</p>
            <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
              {['0', '1', '2', '3', '4', '5'].map((index) => (
                <li key={index}>{t(`sections.governance.scopeItems.${index}`)}</li>
              ))}
            </ul>

            <H3>{t('sections.governance.processTitle')}</H3>
            <p>
              {t('sections.governance.processParagraph')}
            </p>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Roadmap ──────────── */}
          <SectionBlock id="roadmap" num="07" title={t('toc.roadmap')}>
            <div style={{ margin: "32px 0" }}>
              <RoadmapItem
                date="Q1 2026"
                title={t('sections.roadmap.foundation.title')}
                items={[
                  t('sections.roadmap.foundation.items.0'),
                  t('sections.roadmap.foundation.items.1'),
                  t('sections.roadmap.foundation.items.2'),
                  t('sections.roadmap.foundation.items.3'),
                  t('sections.roadmap.foundation.items.4'),
                ]}
              />
              <RoadmapItem
                date="Q2 2026"
                title={t('sections.roadmap.testnet.title')}
                items={[
                  t('sections.roadmap.testnet.items.0'),
                  t('sections.roadmap.testnet.items.1'),
                  t('sections.roadmap.testnet.items.2'),
                  t('sections.roadmap.testnet.items.3'),
                  t('sections.roadmap.testnet.items.4'),
                  t('sections.roadmap.testnet.items.5'),
                ]}
              />
              <RoadmapItem
                date="Q3 2026"
                title={t('sections.roadmap.integration.title')}
                items={[
                  t('sections.roadmap.integration.items.0'),
                  t('sections.roadmap.integration.items.1'),
                  t('sections.roadmap.integration.items.2'),
                  t('sections.roadmap.integration.items.3'),
                  t('sections.roadmap.integration.items.4'),
                  t('sections.roadmap.integration.items.5'),
                ]}
              />
              <RoadmapItem
                date="Q4 2026"
                title={t('sections.roadmap.mainnet.title')}
                items={[
                  t('sections.roadmap.mainnet.items.0'),
                  t('sections.roadmap.mainnet.items.1'),
                  t('sections.roadmap.mainnet.items.2'),
                  t('sections.roadmap.mainnet.items.3'),
                  t('sections.roadmap.mainnet.items.4'),
                ]}
              />
              <RoadmapItem
                date="2027"
                title={t('sections.roadmap.scale.title')}
                items={[
                  t('sections.roadmap.scale.items.0'),
                  t('sections.roadmap.scale.items.1'),
                  t('sections.roadmap.scale.items.2'),
                  t('sections.roadmap.scale.items.3'),
                  t('sections.roadmap.scale.items.4'),
                  t('sections.roadmap.scale.items.5'),
                ]}
                last
              />
            </div>
          </SectionBlock>

          <SectionDivider />

          {/* ──────────── Conclusion ──────────── */}
          <SectionBlock id="conclusion" num="08" title={t('toc.conclusion')}>
            <p>
              {t('sections.conclusion.paragraph1')}
            </p>
            <p>
              {t.rich('sections.conclusion.paragraph2', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </p>
            <p>
              {t('sections.conclusion.paragraph3')}
            </p>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#0D0D0D",
                textAlign: "center",
                margin: "56px 0 24px",
                lineHeight: 1.6,
                letterSpacing: "-0.02em",
              }}
            >
              {t('sections.conclusion.quoteLine1')}
              <br />
              {t('sections.conclusion.quoteLine2a')}{" "}
              <span style={{ color: "#00C896" }}>txxt</span>.
            </div>
          </SectionBlock>

          {/* Footer */}
          <div
            style={{
              marginTop: 80,
              paddingTop: 32,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              textAlign: "center",
              color: "#999",
              fontSize: 13,
              fontFamily: mono,
            }}
          >
              <p style={{ margin: 0 }}>{t('footer.title')}</p>
            <p style={{ marginTop: 8 }}>
              <a
                href="https://txxt.xyz"
                style={{ color: "#00C896", textDecoration: "none" }}
              >
                txxt.xyz
              </a>
            </p>
          </div>
        </article>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .litepaper-toc::-webkit-scrollbar { display: none; }
        @media (max-width: 1024px) {
          .litepaper-toc { display: none !important; }
          .litepaper-content {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .litepaper-content {
            padding-left: 20px !important;
            padding-right: 20px !important;
            font-size: 15px !important;
            line-height: 2 !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ─── Shared Components ─── */

function SectionBlock({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ scrollMarginTop: 100 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          marginBottom: 20,
          marginTop: 56,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontFamily: mono,
            color: "#00C896",
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          {num}
        </span>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 700,
            color: "#0D0D0D",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 20,
        fontWeight: 600,
        color: "#0D0D0D",
        marginTop: 32,
        marginBottom: 4,
        lineHeight: 1.4,
      }}
    >
      {children}
    </h3>
  );
}

function SectionDivider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        margin: "56px 0",
      }}
    />
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        background: "#F4F4F4",
        padding: "2px 7px",
        borderRadius: 4,
        fontSize: 14,
        fontFamily: mono,
        color: "#0D0D0D",
      }}
    >
      {children}
    </code>
  );
}

function StatInline({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontWeight: 700, color: "#00C896" }}>{children}</span>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        borderLeft: "3px solid #00C896",
        background: "rgba(0,200,150,0.03)",
        borderRadius: "0 8px 8px 0",
        padding: "16px 20px",
        margin: "32px 0",
      }}
    >
      <div
        style={{
          fontSize: 16,
          fontStyle: "italic",
          color: "#333",
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function CodeBlock({
  title,
  children,
  noSyntax = false,
}: {
  title: string;
  children: React.ReactNode;
  noSyntax?: boolean;
}) {
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", margin: "24px 0" }}>
      <div
        style={{
          background: "#1a1a2e",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div
            key={c}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            fontFamily: mono,
            marginLeft: 8,
          }}
        >
          {title}
        </span>
      </div>
      <div
        style={{
          margin: 0,
          padding: 20,
          background: "#0d1117",
          fontFamily: mono,
          fontSize: 13,
          lineHeight: 1.8,
          color: "#e6edf3",
          overflowX: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function ComparisonTable() {
  const t = useTranslations('litepaper');
  const rows = [
    [t('tables.comparison.rows.0.0'), t('tables.comparison.rows.0.1'), t('tables.comparison.rows.0.2'), t('tables.comparison.rows.0.3')],
    [t('tables.comparison.rows.1.0'), t('tables.comparison.rows.1.1'), t('tables.comparison.rows.1.2'), t('tables.comparison.rows.1.3')],
    [t('tables.comparison.rows.2.0'), t('tables.comparison.rows.2.1'), t('tables.comparison.rows.2.2'), t('tables.comparison.rows.2.3')],
    [t('tables.comparison.rows.3.0'), t('tables.comparison.rows.3.1'), t('tables.comparison.rows.3.2'), t('tables.comparison.rows.3.3')],
    [t('tables.comparison.rows.4.0'), t('tables.comparison.rows.4.1'), t('tables.comparison.rows.4.2'), t('tables.comparison.rows.4.3')],
  ];

  return (
    <div style={{ overflowX: "auto", margin: "24px 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr style={{ background: "#F8F8F8" }}>
            {[t('tables.comparison.headers.0'), 'PoW', 'PoS', 'PoAW'].map((h, i) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: i === 3 ? "#00C896" : "#0D0D0D",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([prop, pow, pos, poaw], i) => (
            <tr
              key={i}
              style={{
                borderBottom: "1px solid #F0F0F0",
                background:
                  i === rows.length - 1
                    ? "rgba(0,200,150,0.04)"
                    : "transparent",
              }}
            >
              <td
                style={{
                  padding: "12px 14px",
                  fontWeight: 600,
                  color: "#0D0D0D",
                }}
              >
                {prop}
              </td>
              <td style={{ padding: "12px 14px", color: "#777" }}>{pow}</td>
              <td style={{ padding: "12px 14px", color: "#777" }}>{pos}</td>
              <td
                style={{
                  padding: "12px 14px",
                  color: "#00C896",
                  fontWeight: 500,
                }}
              >
                {poaw}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChainTable() {
  const t = useTranslations('litepaper');
  const chains = [
    ["Ethereum", t('tables.chains.launch'), t('tables.chains.nativeUsdc')],
    ["Base", t('tables.chains.launch'), t('tables.chains.nativeUsdc')],
    ["Polygon", t('tables.chains.launch'), t('tables.chains.nativeUsdc')],
    ["Solana", "Q2 2026", "SPL USDC"],
    ["Arbitrum", "Q3 2026", t('tables.chains.nativeUsdc')],
  ];

  return (
    <div style={{ overflowX: "auto", margin: "24px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#F8F8F8" }}>
            {[t('tables.chains.headers.0'), t('tables.chains.headers.1'), t('tables.chains.headers.2')].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: "#0D0D0D",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {chains.map(([chain, status, settlement], i) => (
            <tr key={i} style={{ borderBottom: "1px solid #F0F0F0" }}>
              <td
                style={{
                  padding: "12px 14px",
                  fontWeight: 600,
                  color: "#0D0D0D",
                }}
              >
                {chain}
              </td>
              <td
                style={{
                  padding: "12px 14px",
                  color: status === "Launch" ? "#00C896" : "#555",
                  fontWeight: status === "Launch" ? 600 : 400,
                }}
              >
                {status}
              </td>
              <td style={{ padding: "12px 14px", color: "#555" }}>
                {settlement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProtocolTable() {
  const t = useTranslations('litepaper');
  const protocols = [
    ["MCP", t('tables.protocols.rows.mcp.0'), t('tables.protocols.rows.mcp.1')],
    ["A2A", t('tables.protocols.rows.a2a.0'), t('tables.protocols.rows.a2a.1')],
    ["ACP", t('tables.protocols.rows.acp.0'), t('tables.protocols.rows.acp.1')],
    ["CLI", t('tables.protocols.rows.cli.0'), t('tables.protocols.rows.cli.1')],
    ["SDK", "@txxt/sdk", t('tables.protocols.rows.sdk.1')],
    ["REST", t('tables.protocols.rows.rest.0'), t('tables.protocols.rows.rest.1')],
  ];

  return (
    <div style={{ overflowX: "auto", margin: "24px 0" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#F8F8F8" }}>
            {[t('tables.protocols.headers.0'), t('tables.protocols.headers.1'), t('tables.protocols.headers.2')].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 14px",
                  fontWeight: 700,
                  fontSize: 12,
                  color: "#0D0D0D",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {protocols.map(([protocol, purpose, support], i) => (
            <tr key={i} style={{ borderBottom: "1px solid #F0F0F0" }}>
              <td
                style={{
                  padding: "12px 14px",
                  fontWeight: 600,
                  color: "#0D0D0D",
                }}
              >
                <Code>{protocol}</Code>
              </td>
              <td style={{ padding: "12px 14px", color: "#555" }}>{purpose}</td>
              <td style={{ padding: "12px 14px", color: "#555" }}>{support}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RoadmapItem({
  date,
  title,
  items,
  last = false,
}: {
  date: string;
  title: string;
  items: string[];
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        marginBottom: last ? 0 : 36,
      }}
    >
      {/* Timeline line + node */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 20,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#00C896",
            flexShrink: 0,
            marginTop: 5,
            boxShadow: "0 0 0 4px rgba(0,200,150,0.12)",
          }}
        />
        {!last && (
          <div
            style={{
              width: 2,
              flexGrow: 1,
              background: "rgba(0,200,150,0.2)",
              marginTop: 4,
            }}
          />
        )}
      </div>
      {/* Content */}
      <div style={{ paddingBottom: last ? 0 : 4 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#00C896",
            fontFamily: mono,
            letterSpacing: "0.05em",
            marginBottom: 2,
          }}
        >
          {date}
        </div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#0D0D0D",
            marginBottom: 8,
          }}
        >
          {title}
        </div>
        <ul
          style={{
            paddingLeft: 18,
            color: "#555",
            fontSize: 14,
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
