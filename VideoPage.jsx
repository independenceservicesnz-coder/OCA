import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api.js';
import VideoCard from '../components/VideoCard.jsx';
import CategoryIcon from '../components/CategoryIcon.jsx';
import ProgressRing from '../components/ProgressRing.jsx';
import FocusTags from '../components/FocusTags.jsx';
import { useAuth } from '../auth/AuthContext.jsx';

export default function Category() {
  const { slug } = useParams();
  const { user } = useAuth();
  const [category, setCategory] = useState(null);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError('');
    Promise.all([api.getCategory(slug), api.getVideos(slug)])
      .then(([{ category }, { videos }]) => {
        setCategory(category);
        setVideos(videos);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug, user]);

  const completed = videos.filter((v) => v.completed).length;

  if (loading) return <div className="page" style={{ padding: '60px 24px' }}>Loading sessions…</div>;
  if (error) return <div className="page" style={{ padding: '60px 24px' }}><div className="error-banner">{error}</div></div>;

  return (
    <div>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="page">
          <Link to="/" style={{ color: 'var(--gold-soft)', fontSize: '0.9rem' }}>&larr; All categories</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 18, flexWrap: 'wrap' }}>
            <div className="category-card-icon" style={{ background: 'rgba(247,243,233,0.12)' }}>
              <CategoryIcon name={category.icon} size={28} color="var(--gold-soft)" />
            </div>
            <div>
              <span className="eyebrow">{category.tagline}</span>
              <h1 style={{ color: 'var(--white)', margin: '4px 0 0' }}>{category.name}</h1>
            </div>
            {user && (
              <div style={{ marginLeft: 'auto' }}>
                <ProgressRing completed={completed} total={videos.length} size={64} stroke={6} />
              </div>
            )}
          </div>
          <p className="lede" style={{ marginTop: 18 }}>{category.description}</p>
          <div style={{ marginTop: 4 }}>
            <FocusTags tags={category.focus_areas} tone="dark" />
          </div>
        </div>
      </section>

      <section className="page" style={{ padding: '48px 24px' }}>
        {videos.length === 0 ? (
          <p style={{ color: 'var(--ink-soft)' }}>No sessions have been added to this category yet.</p>
        ) : (
          <div className="video-grid">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
