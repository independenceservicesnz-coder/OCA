export default function FocusTags({ tags, tone = 'light' }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            fontSize: '0.76rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 500,
            padding: '3px 10px',
            borderRadius: 999,
            background: tone === 'dark' ? 'rgba(247,243,233,0.12)' : 'var(--cream-deep)',
            color: tone === 'dark' ? 'var(--gold-soft)' : 'var(--navy)',
            border: tone === 'dark' ? '1px solid rgba(230,207,160,0.35)' : 'none'
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
