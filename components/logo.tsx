export default function TxxtLogo({ size = 32, color = '#A78BFA' }: { size?: number; color?: string }) {
  return (
    <svg width={size * 2.5} height={size} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* t */}
      <line x1="4" y1="8" x2="16" y2="8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="10" y1="8" x2="10" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      {/* x */}
      <line x1="22" y1="12" x2="34" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="34" y1="12" x2="22" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      {/* x */}
      <line x1="42" y1="12" x2="54" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="54" y1="12" x2="42" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      {/* t */}
      <line x1="62" y1="8" x2="74" y2="8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="68" y1="8" x2="68" y2="34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}
