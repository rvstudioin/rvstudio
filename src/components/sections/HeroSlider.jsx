
// ═══════════════════════════════════════════════════════════
// 8. HERO SLIDER COMPONENT
// ═══════════════════════════════════════════════════════════
 
// src/components/sections/HeroSlider.jsx
import { useState, useEffect, useCallback } from 'react';
import { CloudinaryImage } from '../ui/CloudinaryImage';
import { Link } from 'react-router-dom';
import content from '../../data/content.json';
import { t } from '../../utils/i18n';
 
const { heroSlides: SLIDES } = content;
 
export function HeroSlider() {
  // current slide index and pause state for hover interaction
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
 
  // move to the next slide in a loop
  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), []);
 
  useEffect(() => {
    // Auto-advance slides every 5 seconds unless the slider is paused
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);
 
  const slide = SLIDES[current];
 
  return (
      <section
        className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slideshow"
    >
      {/* Background image via Cloudinary */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <CloudinaryImage
            publicId={s.publicId}
            width={1920} height={1080}
            alt={s.sub}
            className="w-full h-full object-cover"
            contextmenu={(e) => e.preventDefault()}
          />
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />
        </div>
      ))}
 
      {/* Content */}
 
 
 
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span />
            <span>{slide.eyebrow} · Rajkot, Gujarat</span>
          </div>

          <h1 className="hero-h1">
            {slide.title}<br />
            <em>Forever</em>
          </h1>

          <p className="hero-sub">
            {slide.sub} — with a cinematic eye for the extraordinary, light, and emotion.
          </p>

          <div className="hero-actions">
            <Link to="/portfolio" className="btn-primary" title={t('buttons.viewPortfolio')}>{t('buttons.viewPortfolio')}</Link>
            <Link to="/contact" className="btn-ghost" title={t('buttons.bookNow')}>{t('buttons.bookNow')} <span className="arrow">→</span></Link>
          </div>
        </div>
 
      {/* Slide indicators */}
        <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
              className={`dot ${i === current ? 'active' : ''}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
 
      {/* Large background number */}
        <div className="hero-counter">0{current + 1}</div>
    </section>
  );
}