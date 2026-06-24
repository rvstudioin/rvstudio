import { SEOHead } from '../components/ui/SEOHead';
import { VideosSection } from '../components/sections/VideosSection';
import videos from '../data/videos.json';

export default function Videos() {
  return (
    <>
      <SEOHead
        title="YouTube Videos"
        description="Browse RV Studio's YouTube collection with curated photography films, Rajkot stories, and creative studio videos."
        keywords="RV Studio YouTube, photography videos, video gallery, Rajkot creatives, travel and wedding films"
        image={videos[0]?.thumbnail}
        url="/videos"
        type="VideoGallery"
      />
      <VideosSection
        videos={videos}
        title="All Videos"
        subtitle="A curated collection of RV Studio videos from photography projects, travel stories and cinematic shoots."
        showViewAll={false}
      />
    </>
  );
}
