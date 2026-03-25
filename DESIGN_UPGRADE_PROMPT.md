# txxt-web 디자인/콘텐츠 강화 — oh-my-opencode ulw 프롬프트

아래 텍스트를 oh-my-opencode에 그대로 붙여넣으세요.

---

```
ulw

# txxt-web 디자인/콘텐츠 강화 — Phase 1 (우선순위 1~6)

## 프로젝트 경로
/Users/gimseojun/raon-workspace/projects/txxt-web

## 디자인 통일성 유지 규칙 (변경 금지)
- 컬러 팔레트: accent=#00C896, accent2=#FB923C, purple=#5B4FFF, danger=#E53E3E, bg=#FFFFFF, bg2=#F8F8F8, bg3=#F0F0F0, text=#0D0D0D, muted=#555555
- 폰트: 본문=Inter(var(--font-inter)), 코드/mono=Fira Code(var(--font-fira), 'Courier New', monospace)
- 모든 스타일은 기존 방식인 인라인 style={{ }} 또는 globals.css @keyframes로 추가 (Tailwind 클래스 혼용 최소화)
- 보더 반경: 카드=14~16px, 버튼=10px, 태블릿=12px, 원형=999px
- 섹션 패딩: clamp(80px, 10vw, 140px) 기존 패턴 유지
- maxWidth 컨테이너: 1300px (기존 패턴 유지)
- 반응형: @media (max-width: 1023px), (max-width: 768px), (max-width: 600px) 기존 breakpoint 유지
- 변경 대상: app/page.tsx, app/globals.css만. layout.tsx/nav.tsx/footer.tsx 수정 금지

---

## 구현 작업 목록 (우선순위 순서대로 모두 구현)

### [1] Hero Stat Bar — app/page.tsx

HERO 섹션 (<section> 가장 안쪽, "Left text block" div 안, 기존 tagline <p> 태그 **위**에) 아래 stat bar를 삽입:

```tsx
{/* Stat Bar */}
<div style={{
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0,
  marginBottom: 24,
  borderRadius: 999,
  border: '1px solid rgba(0,200,150,0.2)',
  background: 'rgba(0,200,150,0.06)',
  padding: '8px 20px',
  flexWrap: 'wrap' as const,
  justifyContent: 'center',
}}>
  {[
    { label: '<10ms latency' },
    { label: '$0.0003 gas' },
    { label: '5+ chains' },
  ].map((stat, i, arr) => (
    <span key={stat.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
      <span style={{
        fontSize: 'clamp(11px, 1.3vw, 13px)',
        fontWeight: 700,
        color: '#00C896',
        fontFamily: mono,
        whiteSpace: 'nowrap' as const,
      }}>
        {stat.label}
      </span>
      {i < arr.length - 1 && (
        <span style={{
          margin: '0 12px',
          color: 'rgba(0,200,150,0.35)',
          fontSize: 14,
          fontWeight: 300,
        }}>|</span>
      )}
    </span>
  ))}
</div>
```

### [2] Hero 배경 radial-gradient — app/page.tsx

HERO 섹션의 `<section style={{ background: '#FFFFFF', overflow: 'hidden' }}>` 를 아래로 교체:

```tsx
<section style={{
  background: 'radial-gradient(ellipse at 50% 0%, rgba(0,200,150,0.06), transparent 70%), #FFFFFF',
  overflow: 'hidden',
}}>
```

### [3] Problem 섹션 다크 배경 — app/page.tsx

"THE PROBLEM" 섹션의 `<section style={{ textAlign: 'center', position: 'relative', background: '#F8F8F8', borderTop: '...' }}>` 를 아래로 교체:

```tsx
<section style={{
  textAlign: 'center',
  position: 'relative',
  background: '#0D1117',
  borderTop: '1px solid rgba(255,255,255,0.06)',
}}>
```

그리고 Problem 섹션 내부 텍스트 색상 변경:
- `radial-gradient` position absolute div 배경을 `radial-gradient(ellipse 50% 60% at 50% 50%, rgba(167,139,250,0.08) 0%, transparent 70%)`로 변경
- `THE PROBLEM` eyebrow: color: '#FF3366' 유지
- h2 `color: '#0D0D0D'` → `color: '#FFFFFF'`
- h3 `color: '#FF3366'` 유지
- 두 프로토콜 카드: background를 `rgba(255,255,255,0.04)`, border-color를 `rgba(0,200,150,0.2)` / `rgba(91,79,255,0.2)`, 카드 내부 h3 p 색상을 흰색 계열로 변경:
  - h3 `color: '#0D0D0D'` → `color: '#FFFFFF'`
  - p `color: '#555555'` → `color: 'rgba(255,255,255,0.65)'`
- 펀치라인 div: background `rgba(229,62,62,0.08)`, border `rgba(229,62,62,0.2)`, p `color: 'rgba(255,255,255,0.7)'`, strong color: `#FF6B6B`

### [4] CTA 이중화 — app/page.tsx (두 곳)

**Hero 섹션 버튼 영역** — 기존 "Read the Protocol" 버튼을 "Read Docs"로 텍스트 변경하고, href를 `https://docs.txxt.xyz` (없으면 `/protocol` 유지)로. 버튼 스타일을 ghost 버튼으로:

```tsx
<Link href="/protocol" style={{
  padding: '13px 0', borderRadius: 10,
  background: 'transparent',
  border: '1.5px solid rgba(0,200,150,0.4)',
  color: '#00C896', fontWeight: 600, fontSize: 'clamp(13px, 3.5vw, 16px)',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  textAlign: 'center' as const,
  whiteSpace: 'nowrap' as const,
  flex: '1 1 0',
}}>Read Docs</Link>
```

**Final CTA 섹션** — 기존 "Start Building" 버튼 아래에 "Read Docs" ghost 버튼 추가:

```tsx
<div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' as const, marginTop: 0 }}>
  <Link href="/build" className="cta-final-btn" style={{
    display: 'inline-block',
    padding: '16px 48px',
    borderRadius: 10,
    background: '#00C896',
    color: '#fff',
    fontWeight: 700,
    fontSize: 15,
    textDecoration: 'none',
    letterSpacing: '0.02em',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 14px rgba(0,200,150,0.25)',
    textAlign: 'center' as const,
  }}>
    Start Building
  </Link>
  <Link href="/protocol" style={{
    display: 'inline-block',
    padding: '16px 48px',
    borderRadius: 10,
    background: 'transparent',
    border: '1.5px solid rgba(0,200,150,0.4)',
    color: '#00C896',
    fontWeight: 600,
    fontSize: 15,
    textDecoration: 'none',
    letterSpacing: '0.02em',
    transition: 'all 0.2s ease',
    textAlign: 'center' as const,
  }}>
    Read Docs
  </Link>
</div>
```
기존 단일 Link를 위 div로 교체.

### [5] 코드 복사 버튼 — app/page.tsx

AGENTSCRIPT 섹션의 Terminal div에 복사 버튼 추가.

파일 최상단(이미 있는 useEffect, useState import 아래)에 복사 상태 훅 추가:
```tsx
const [copied, setCopied] = useState(false);
const handleCopy = () => {
  const code = `agent TravelPlanner {
  // ERC-8004: on-chain identity auto-registered
  identity: "txxt:0x1a2b...verified"
  reputation_minimum: 80 // ERC-8004 score gate

  task hire_flight_agent(destination) {
    // ERC-8004: verify counterpart identity
    let agent = discover({
      capability: "flight_search",
      min_reputation: 85 // ERC-8004 check
    })

    // x402: atomic payment — same tx as identity check
    let result = delegate(agent, search(destination), {
      payment: "0.004 USDC" // x402 native
      gas: "0.0003 USDC" // always fixed
    })

    // x402 receipt + ERC-8004 reputation update
    rate(agent, score: 95, proof: result.receipt)
  }
}`;
  navigator.clipboard.writeText(code).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  });
};
```

터미널 상단 바(macOS traffic light dots가 있는 div)에서 `<span style={{ marginLeft: 'auto' }}><TerminalCursor /></span>` 부분을 아래로 교체:

```tsx
<span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
  <TerminalCursor />
  <button
    onClick={handleCopy}
    style={{
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 6,
      color: copied ? '#00C896' : 'rgba(255,255,255,0.5)',
      fontSize: 11,
      fontFamily: mono,
      fontWeight: 600,
      padding: '4px 10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      letterSpacing: '0.05em',
    }}
  >
    {copied ? '✓ copied' : 'copy'}
  </button>
</span>
```

### [6] 비교표 시각 강화 — app/page.tsx

PROOF 섹션의 비교표(comparison table) 행 렌더링 부분에서:

**Others 열**: `<XIcon size={14} />{' '}{row.them}` → 빨간색으로 강조:
```tsx
<div style={{ padding: '14px 20px', fontSize: 13, color: '#E53E3E', textAlign: 'center', fontWeight: 500 }}>
  <XIcon color="#E53E3E" size={14} />{' '}{row.them}
</div>
```

**txxt 열**: `<CheckIcon size={14} />{' '}{row.us}` → 그린 강조 + 배경:
```tsx
<div style={{ padding: '14px 20px', fontSize: 13, color: '#00C896', fontWeight: 700, textAlign: 'center', background: 'rgba(0,200,150,0.04)' }}>
  <CheckIcon color="#00C896" size={14} />{' '}{row.us}
</div>
```

헤더 행에서 "Others" 열 텍스트도 빨간 계열로:
```tsx
<div style={{ padding: '16px 20px', fontSize: 13, fontFamily: mono, color: '#E53E3E', fontWeight: 700, letterSpacing: '0.05em', textAlign: 'center', opacity: 0.8 }}>Others</div>
```

---

## 빌드 & 배포

모든 변경 완료 후:

1. 빌드 확인:
```bash
cd /Users/gimseojun/raon-workspace/projects/txxt-web
npm run build
```

2. 빌드 성공 시 git commit:
```bash
git add -A
git commit -m "feat: design upgrade phase 1 - stat bar, dark problem section, dual CTA, copy button, comparison table"
```

3. Vercel 배포:
```bash
npx vercel --prod
```

4. 배포 URL을 /tmp/txxt-deploy-done.txt에 기록:
```bash
echo "배포완료: [URL]" > /tmp/txxt-deploy-done.txt
```

---

## 구현 순서 요약

1. app/page.tsx 열기
2. [1] Hero stat bar 삽입
3. [2] Hero section background 교체
4. [3] Problem 섹션 다크 테마 적용 (bg + 내부 텍스트 색상 일괄)
5. [4] Hero CTA ghost 버튼 + Final CTA 이중화
6. [5] 복사 버튼 상태 훅 추가 → 터미널 헤더에 버튼 삽입
7. [6] 비교표 Others/txxt 열 색상 강화
8. npm run build → 에러 없으면 git commit → vercel --prod
```

---

## Phase 2 (다음 단계) 예정 항목

- [7] HOW IT WORKS LayeredArchDiagram → ArrowConnector에 Framer Motion dot 애니메이션 추가
- [8] PROOF 섹션 가스비 시뮬레이터 (슬라이더 → tx수 × $0.0003 계산)
- [9] AgentScript 타이핑 애니메이션 (줄별 순차 등장, useEffect + setInterval)
- [10] 로고 마키 섹션 (ETH/SOL/Base/Polygon/MCP/A2A 무한 스크롤, @keyframes marquee)
- [11] PROOF 섹션 숫자 count-up 애니메이션 (Intersection Observer + requestAnimationFrame)
