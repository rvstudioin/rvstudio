
// ═══════════════════════════════════════════════════════════
// 8. HERO SLIDER COMPONENT
// ═══════════════════════════════════════════════════════════
 
// src/components/sections/HeroSlider.jsx
import { useState, useEffect, useCallback } from 'react';
import { CloudinaryImage } from '../ui/CloudinaryImage';
import { Link } from 'react-router-dom';
 
// Cloudinary public IDs for hero slides — replace with your actual IDs
const SLIDES = [
   { id: 1, publicId: 'Prewedding/hetal-jasmin',    title: 'Capturing Moments',   sub: 'Wedding Photography',    eyebrow: 'Weddings' },
   { id: 2, publicId: 'Carousel/ycmoxz1fcrfgyih9hnd2',   title: 'Revealing Character', sub: 'Portrait Sessions',      eyebrow: 'Portraits' },
  { id: 3, publicId: 'Carousel/b2ct3p2aacccz0lhpyxc', title: 'Building Brands',     sub: 'Commercial Photography', eyebrow: 'Commercial' },
   { id: 4, publicId: 'Nature/weqq4psbyaqrtpkocv7r',     title: 'Finding the Wild',    sub: 'Nature & Landscape',     eyebrow: 'Nature' },
];
 
export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);
 
  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), []);
 
  useEffect(() => {
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
            <Link to="/portfolio" className="btn-primary">View Portfolio</Link>
            <Link to="/contact" className="btn-ghost">Book Now <span className="arrow">→</span></Link>
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