import { Link } from 'react-router-dom';
import CategoryIcon from './CategoryIcon.jsx';

export default function CategoryWheel({ categories }) {
  const size = 420;
  const radius = 158;
  const center = size / 2;

  return (
    <div className="wheel" style={{ width: size, height: size, maxWidth: '100%' }}>
      <div className="wheel-hub">
        <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Aging in Place</span>
        <strong>Your VIP Programme</strong>
      </div>
      {categories.map((cat, i) => {
        const angle = (Math.PI * 2 * i) / categories.length - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return (
          <Link
            key={cat.slug}
            to={`/category/${cat.slug}`}
            className="wheel-spoke"
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            <span className="wheel-spoke-icon">
              <CategoryIcon name={cat.icon} size={22} color="var(--navy)" />
            </span>
            <span className="wheel-spoke-label">{cat.name.split(' ').slice(0, 2).join(' ')}</span>
          </Link>
        );
      })}
    </div>
  );
}
