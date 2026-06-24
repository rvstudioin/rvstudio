import { Link } from 'react-router-dom';

export function VideosSection({
  videos,
  title = 'Studio Films & Stories',
  subtitle = 'Discover our latest photography and travel videos from RV Studio.',
  showViewAll = false,
  viewAllLink = '/videos',
}) {
  return (
    <section className="videos-section">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="videos-header">
          <div>
            <div className="section-eyebrow">Videos</div>
            <h2 className="section-title">{title}</h2>
            <p className="videos-intro">{subtitle}</p>
          </div>
          {showViewAll && (
            <Link to={viewAllLink} className="btn-primary">
              View All Videos
            </Link>
          )}
        </div>

        <div className="videos-grid">
          {videos.map((video) => (
            <article key={video.id} className="video-card">
              <div className="video-thumb">
                <img src={video.thumbnail} alt={video.title} loading="lazy" />
                <div className="video-duration">{video.duration}</div>
              </div>
              <div className="video-body">
                <h3 className="video-card-title">{video.title}</h3>
                <p className="video-card-desc">{video.description}</p>
                <div className="video-meta">
                  <span>{video.publishedAt}</span>
                  <span>{video.youtubeUrl.includes('shorts') ? 'YouTube Short' : 'YouTube Video'}</span>
                </div>
                <div className="video-actions">
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
