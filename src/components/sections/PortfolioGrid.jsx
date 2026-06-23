// ═══════════════════════════════════════════════════════════
// 9. PORTFOLIO GRID COMPONENT
// ═══════════════════════════════════════════════════════════
 
// src/components/sections/PortfolioGrid.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPortfolio, setCategory } from '../../features/portfolio/portfolioSlice';
import { openLightbox } from '../../features/ui/uiSlice';
import { CloudinaryImage } from '../ui/CloudinaryImage';
 
const CATEGORIES = ['all','wedding','portrait','commercial','events','nature','fashion'];
 
export function PortfolioGrid() {
  const dispatch  = useDispatch();
  const { items, activeCategory, loading, hasMore, currentPage } = useSelector(s => s.portfolio);
 
  useEffect(() => {
    dispatch(loadPortfolio({ category: activeCategory, page: 1 }));
  }, [activeCategory, dispatch]);
 
  const handleCategoryChange = cat => {
    dispatch(setCategory(cat));
  };
 
  const handleLoadMore = () => {
    dispatch(loadPortfolio({ category: activeCategory, page: currentPage + 1 }));
  };
 
  const handleOpenImage = item => {
    dispatch(openLightbox({ imageUrl: item.cloudinaryUrl, title: item.title }));
  };
 
  return (
    <section className="py-24 px-12 bg-obsidian-soft">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-3">
          <span className="h-px w-8 bg-gold block" />
          <span className="text-eyebrow uppercase tracking-widest text-gold font-medium">Our Portfolio</span>
        </div>
        <h2 className="font-display text-display-lg font-light text-cream">
          Work by <em className="italic text-gold-light">Category</em>
        </h2>
      </div>
 
      {/* Category Tabs */}
      <div className="flex gap-0 border-b border-gold-dim/15 overflow-x-auto scrollbar-none mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`text-label uppercase tracking-widest px-6 py-3 whitespace-nowrap
              border-b-2 -mb-px transition-colors duration-200
              ${activeCategory === cat
                ? 'text-gold border-gold'
                : 'text-gray-light border-transparent hover:text-cream'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
 
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {items.map(item => (
          <article
            key={item.id}
            className="relative overflow-hidden aspect-[4/5] cursor-pointer group bg-obsidian-muted"
            onClick={() => handleOpenImage(item)}
          >
            <CloudinaryImage
              publicId={item.cloudinaryPublicId}
              width={600} height={750}
              alt={item.title}
              contextmenu={(e) => e.preventDefault()}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100
              transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 border border-gold flex items-center justify-center text-gold">
                +
              </div>
              <p className="font-display text-sm font-light text-cream tracking-wide">
                {item.title}
              </p>
              <p className="text-eyebrow uppercase tracking-widest text-gold/80 text-xs">
                {item.category}
              </p>
            </div>
          </article>
        ))}
      </div>
 
      {/* Loading state */}
      {loading && (
        <div className="flex justify-center py-12">
          <div className="w-6 h-6 border border-gold border-t-transparent rounded-full animate-spin" />
        </div>
      )}
 
      {/* Load more */}
      {hasMore && !loading && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="text-label uppercase tracking-widest bg-gold text-obsidian px-10 py-3
              hover:bg-gold-light transition-colors duration-200 font-semibold"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}