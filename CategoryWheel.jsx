const paths = {
  rise: (
    <>
      <path d="M12 34 L24 20 L36 34" />
      <path d="M24 20 V44" />
      <circle cx="24" cy="10" r="5" />
    </>
  ),
  balance: (
    <>
      <path d="M8 36 H40" />
      <path d="M24 36 V14" />
      <path d="M14 20 L24 14 L34 20" />
      <circle cx="24" cy="8" r="3.5" />
    </>
  ),
  turn: (
    <>
      <path d="M14 14 a16 16 0 1 1 -4 18" />
      <path d="M8 26 L10 34 L18 32" />
    </>
  ),
  stand: (
    <>
      <circle cx="24" cy="9" r="5" />
      <path d="M24 14 V28" />
      <path d="M24 20 L14 26" />
      <path d="M24 20 L34 26" />
      <path d="M24 28 L16 42" />
      <path d="M24 28 L32 42" />
    </>
  ),
  music: (
    <>
      <circle cx="14" cy="36" r="5" />
      <circle cx="34" cy="32" r="5" />
      <path d="M19 36 V14 L39 10 V32" />
    </>
  )
};

export default function CategoryIcon({ name, size = 28, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || paths.balance}
    </svg>
  );
}
