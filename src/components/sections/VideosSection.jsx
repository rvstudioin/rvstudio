import { Link } from 'react-router-dom';
import content from '../../data/content.json';
import { t } from '../../utils/i18n';

const { videosSection } = content;

export function VideosSection({
  videos,
  title = videosSection.defaultTitle,
  subtitle = videosSection.defaultSubtitle,
  showViewAll = false,
  viewAllLink = '/videos',
}) {
  return (
    <section className="videos-section">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="videos-header">
          <div>
            <div className="section-eyebrow">{videosSection.eyebrow}</div>
            <h2 className="section-title">{title}</h2>
            <p className="videos-intro">{subtitle}</p>
          </div>
          {showViewAll && (
            <Link to={viewAllLink} className="btn-primary">
              {t('buttons.viewAllVideos')}
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
                  <span>{video.youtubeUrl.includes('shorts') ? t('videos.shortLabel') : t('videos.videoLabel')}</span>
                </div>
                <div className="video-actions">
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    {t('buttons.watchOnYouTube')}
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
