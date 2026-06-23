
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const categories = ['all', ...Object.keys(portfolioData.categoryLabels)];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryLabels = useMemo(
    () => ({ all: 'All Work', ...portfolioData.categoryLabels }),
    []
  );

  const filteredCollections = useMemo(() => {
    // Only re-filter collections when activeCategory changes
    return activeCategory === 'all'
      ? portfolioData.collections
      : portfolioData.collections.filter(collection => collection.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="portfolio py-24 bg-obsidian-soft min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-10">
          <div className="section-eyebrow">Our Portfolio</div>
          <h1 className="section-title">
            Work by <em>Category</em>
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cat-tab rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200
                ${activeCategory === category ? 'bg-gold text-obsidian' : 'bg-obsidian-muted text-cream hover:bg-obsidian-dark'}`}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        {filteredCollections.length === 0 ? (
          <div className="rounded-3xl border border-gold/20 bg-obsidian-muted p-16 text-center text-gray-light">
            No collections found for {categoryLabels[activeCategory] || activeCategory}.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCollections.map(collection => {
              const heroImage = collection.images[0];

              return (
                <Link
                  key={collection.id}
                  to={`/portfolio/${collection.id}`}
                  className="group overflow-hidden rounded-[2rem] border border-gold/10 bg-obsidian-muted shadow-[0_20px_80px_-40px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:-translate-y-1"
                  aria-label={`View ${collection.title || 'portfolio collection'} details`}
                >
                  <div className="relative overflow-hidden aspect-[4/5] bg-obsidian-dark">
                    {heroImage ? (
                      <img
                        src={heroImage}
                        alt={collection.title || 'Portfolio collection'}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={event => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="h-full w-full bg-obsidian border border-gold/10" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs uppercase tracking-[0.35em] text-gold/90 mb-2">
                        {categoryLabels[collection.category] || collection.category}
                      </p>
                      <h2 className="font-display text-2xl font-light text-cream mb-2">
                        {collection.title || 'Untitled Collection'}
                      </h2>
                      <p className="text-xs uppercase tracking-[0.35em] text-gray-light">
                        {collection.images.length} image{collection.images.length === 1 ? '' : 's'}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
