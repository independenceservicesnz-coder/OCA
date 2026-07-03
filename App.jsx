import { Link } from 'react-router-dom';
import CategoryIcon from './CategoryIcon.jsx';
import ProgressRing from './ProgressRing.jsx';
import FocusTags from './FocusTags.jsx';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.slug}`} className="card category-card">
      <div className="category-card-icon">
        <CategoryIcon name={category.icon} size={26} color="var(--navy)" />
      </div>
      <div>
        <h3 style={{ fontSize: '1.15rem', marginBottom: 4 }}>{category.name}</h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.95rem', margin: 0 }}>{category.tagline}</p>
      </div>
      <FocusTags tags={category.focus_areas} />
      <div className="category-card-footer">
        <span className="badge">{category.total_videos} session{category.total_videos === 1 ? '' : 's'}</span>
        {category.completed_videos > 0 && (
          <ProgressRing completed={category.completed_videos} total={category.total_videos} size={44} stroke={5} />
        )}
      </div>
    </Link>
  );
}
