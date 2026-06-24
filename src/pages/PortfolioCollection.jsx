import { useMemo, useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEOHead } from '../components/ui/SEOHead';
import { generateBreadcrumbs } from '../utils/seoHelpers';
import portfolioData from '../data/portfolio.json';

const categoryLabels = { all: 'All Work', ...portfolioData.categoryLabels };
// Category labels used across the portfolio listing and collection pages.

// Utility helpers used by the portfolio image viewer
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getTouchDistance(touches) {
  // Calculate pinch gesture distance for two-finger zoom
  const dx = touches[0].clientX - touches[1].clientX;
  const dy = touches[0].clientY - touches[1].clientY;
  return Math.hypot(dx, dy);
}

function Viewer({ image, activeIndex, totalImages, goPrevious, goNext }) {
  // Image viewer handles zoom, pan, touch gestures, and image navigation
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [containerHeight, setContainerHeight] = useState('auto');
  const touchDistanceRef = useRef(null);
  const pointerRef = useRef({ active: false, startX: 0, startY: 0, originX: 0, originY: 0 });
  const containerRef = useRef(null);

  const handleWheel = event => {
    // Wheel zoom control for desktop users
    event.preventDefault();
    setZoom(prev => {
      const next = clamp(prev + (event.deltaY < 0 ? 0.05 : -0.05), 1, 3);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  useEffect(() => {
    // Attach wheel event to viewer container to support zoom interactions
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [zoom]);

  const handleTouchStart = event => {
    // Begin pinch-to-zoom tracking on mobile touch gestures
    if (event.touches.length === 2) {
      touchDistanceRef.current = getTouchDistance(event.touches);
    }
  };

  const handleTouchMove = event => {
    if (event.touches.length === 2 && touchDistanceRef.current !== null) {
      event.preventDefault();
      const nextDistance = getTouchDistance(event.touches);
      const delta = (nextDistance - touchDistanceRef.current) / 120;
      setZoom(prev => {
        const next = clamp(prev + delta, 1, 3);
        if (next <= 1) setPan({ x: 0, y: 0 });
        return next;
      });
      touchDistanceRef.current = nextDistance;
    }
  };

  const handleTouchEnd = event => {
    if (event.touches.length < 2) {
      touchDistanceRef.current = null;
    }
  };

  const handleZoomChange = value => {
    const next = clamp(value, 1, 3);
    if (next <= 1) setPan({ x: 0, y: 0 });
    setZoom(next);
  };

  const handlePointerDown = event => {
    // Start panning only when zoom is active
    if (zoom <= 1) return;
    pointerRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      originX: pan.x,
      originY: pan.y,
    };
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = event => {
    if (!pointerRef.current.active) return;
    const dx = event.clientX - pointerRef.current.startX;
    const dy = event.clientY - pointerRef.current.startY;
    setPan({
      x: pointerRef.current.originX + dx,
      y: pointerRef.current.originY + dy,
    });
  };

  const handlePointerUp = event => {
    if (!pointerRef.current.active) return;
    pointerRef.current.active = false;
    setDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handlePointerLeave = event => {
    if (pointerRef.current.active) {
      pointerRef.current.active = false;
      setDragging(false);
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleImageLoad = event => {
    // Maintain the viewer container height to preserve aspect ratio on load
    if (containerRef.current) {
      const img = event.target;
      const naturalWidth = img.naturalWidth;
      const naturalHeight = img.naturalHeight;
      const containerWidth = containerRef.current.offsetWidth;
      
      // Calculate height based on image aspect ratio
      if (naturalWidth && naturalHeight && containerWidth) {
        const aspectRatio = naturalHeight / naturalWidth;
        const calculatedHeight = Math.min(
          containerWidth * aspectRatio,
          window.innerHeight - 220
        );
        setContainerHeight(`${calculatedHeight}px`);
      }
    }
  };

  return (
    <div>
        <div className="viewer-top-panel rounded-[2rem] border border-gold/10 bg-obsidian-dark p-4 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.55)]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-light whitespace-nowrap">
                {totalImages} image{totalImages === 1 ? '' : 's'} in this collection.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="pager-arrow"
                  onClick={goPrevious}
                  disabled={activeIndex === 0}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="pager-arrow"
                  onClick={goNext}
                  disabled={activeIndex === totalImages - 1}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
              
            </div>
          </div>
    <div className="viewer-main rounded-[2rem] overflow-hidden bg-obsidian-dark border border-gold/10">
      <div
        ref={containerRef}
        className={`relative bg-black overflow-hidden ${dragging ? 'dragging' : ''}`}
        style={{ height: containerHeight }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerLeave}
      >
        <img
          src={image}
          alt="Active portfolio image"
          className="viewer-image"
          loading="lazy"
          onLoad={handleImageLoad}
          onContextMenu={(e) => e.preventDefault()}
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
        />
        <div className="viewer-index">
          {zoom.toFixed(2)}x
        </div>
      </div>
    </div>
    <div className="zoom-control flex items-center gap-3 rounded-[2rem] bg-obsidian-muted m-8 px-4 py-2 border w-fit border-gold/10 mx-auto">
        <span className="text-sm text-gray-light">Zoom</span>
        <input
          type="range"
          min="1"
          max="3"
          step="0.05"
          value={zoom}
          onChange={event => handleZoomChange(Number(event.target.value))}
        />
        <span className="text-sm text-cream">{zoom.toFixed(2)}x</span>
      </div>
      </div>
  );
}

// src/pages/PortfolioCollection.jsx
// Collection detail page with image viewer, thumbnails, and back navigation.
export default function PortfolioCollection() {
  const { collectionId } = useParams();
  const navigate = useNavigate();
  const collection = useMemo(
    // Find the selected collection based on route param
    () => portfolioData.collections.find(item => item.id === collectionId),
    [collectionId]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  if (!collection) {
    // Show fallback UI when the route param does not match any collection
    return (
      <>
        <SEOHead
          title="Collection Not Found"
          description="The portfolio collection you're looking for could not be found. Browse our complete portfolio for all our work."
          url="/portfolio"
        />
        <section className="portfolio py-24 bg-obsidian-soft min-h-screen">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
            <div className="section-eyebrow">Collection not found</div>
            <h1 className="section-title">This portfolio collection does not exist.</h1>
            <p className="mt-6 text-gray-light">Please go back and choose another category.</p>
            <div className="mt-10">
              <button
                type="button"
                className="btn-primary"
                onClick={() => navigate('/portfolio')}
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  const totalImages = collection.images.length;
  const activeImage = collection.images[activeIndex];
  const breadcrumbs = generateBreadcrumbs(`/portfolio/${collectionId}`, collection);
  const collectionImage = collection.images[0] || 'https://res.cloudinary.com/rvstudioin/image/upload/v1/og-image.jpg';
  const collectionDescription = `Browse our ${collection.title} photography collection. ${totalImages} professional photographs showcasing our best ${collection.category} work in Rajkot, Gujarat.`;

  const goPrevious = () => {
    // Navigate to previous image while staying within bounds
    setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  const goNext = () => {
    setActiveIndex(prev => (prev < totalImages - 1 ? prev + 1 : prev));
  };

  return (
    <>
      <SEOHead
        title={collection.title}
        description={collectionDescription}
        keywords={`${collection.category} photography, ${collection.title}, portfolio, professional photography, Rajkot photographer`}
        image={collectionImage}
        url={`/portfolio/${collectionId}`}
        type="ImageGallery"
        breadcrumbs={breadcrumbs}
      />
      <section className="portfolio-collection py-24 bg-obsidian-soft min-h-screen">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="back-arrow"
                onClick={() => navigate('/portfolio')}
                aria-label="Back to Portfolio"
              >
                ←
              </button>
              <div>
                <div className="section-eyebrow">{categoryLabels[collection.category] || collection.category}</div>
                <h1 className="section-title">{collection.title}</h1>
              </div>
            </div>
          </div>

        <div className="collection-viewer grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        
          <Viewer key={`${collectionId}-${activeIndex}`} image={activeImage} goNext={goNext} goPrevious={goPrevious} activeIndex={activeIndex} totalImages={totalImages} />

          <div className="viewer-sidebar grid gap-4">
            <div className="viewer-meta rounded-[2rem] border border-gold/10 bg-obsidian-muted p-6">
              <h2 className="text-xl font-display text-cream mb-3">Collection Details</h2>
              <p className="text-gray-light leading-relaxed mb-4">
                Browse every image from this collection. Tap a thumbnail to open it in the large viewer.
              </p>
              <div className="text-sm text-gold/90 uppercase tracking-[0.25em] mb-2">Category</div>
              <div className="text-cream font-semibold mb-4">
                {categoryLabels[collection.category] || collection.category}
              </div>
              <div className="text-sm text-gold/90 uppercase tracking-[0.25em] mb-2">Images</div>
              <div className="text-cream font-semibold">{totalImages}</div>
            </div>
            <div className="viewer-thumb-grid rounded-[2rem] border border-gold/10 bg-obsidian-muted p-4 grid gap-4">
              {collection.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`viewer-thumb ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
