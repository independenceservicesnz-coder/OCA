import { Link } from 'react-router-dom';
import FocusTags from './FocusTags.jsx';

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s > 0 ? `${s}s` : ''}`.trim() : `${s}s`;
}

export default function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`} className="card video-card">
      <div className="video-thumb">
        <span className="play-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="duration-chip">{formatDuration(video.duration_seconds)}</span>
      </div>
      <div className="video-card-body">
        <h4 style={{ fontSize: '1.05rem', marginBottom: 2 }}>{video.title}</h4>
        <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', margin: 0 }}>{video.description}</p>
        <FocusTags tags={video.focus} />
        <div className="video-card-meta">
          <span className="trainer-chip">{video.trainer_name}</span>
          <span>&middot;</span>
          <span>{video.level}</span>
        </div>
        {video.completed && <span className="badge done" style={{ alignSelf: 'flex-start' }}>Completed</span>}
      </div>
    </Link>
  );
}
