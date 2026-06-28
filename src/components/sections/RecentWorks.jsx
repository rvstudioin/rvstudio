import { Link } from "react-router-dom";
import { CloudinaryImage } from "../ui/CloudinaryImage";
import content from '../../data/content.json';

const { recentWorks, recentWorksSection } = content;

// src/components/sections/RecentWorks.jsx
// Section that displays a selection of recent works with image cards.
export function RecentWorks() {
  return (
    <section className="recent-works py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="recent-header">
          <div>
            <div className="section-eyebrow">{recentWorksSection.eyebrow}</div>
            <h2 className="section-title">
              {recentWorksSection.titlePrefix}
              <em>{recentWorksSection.titleEm}</em>
            </h2>
          </div>
          <Link to={recentWorksSection.viewAllLink} className="link-underline">
            {recentWorksSection.viewAllLabel}
          </Link>
        </div>

        <div className="works-grid">
          {recentWorks.map((work, index) => (
            <article
              key={work.id}
              className={`work-card ${index === 0 ? "first-card" : ""}`}>
              <div className="work-thumb">
                <div className={`work-thumb-fill ${work.style}`}>
                  <CloudinaryImage
                    publicId={work.id}
                    width={800} height={600} crop="fill"
                    alt={work.title}
                    contextmenu={(e) => e.preventDefault()}
                    className={`work-thumb-fill ${work.style} absolute inset-0 w-full h-full object-cover`}
                  />
                </div>
                <div className="work-overlay">
                  <div className="work-label">{work.label}</div>
                  <div className="work-title">{work.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
