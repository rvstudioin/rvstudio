import { Link } from "react-router-dom";
import { CloudinaryImage } from "../ui/CloudinaryImage";

const works = [
  {
    id: "Preweddings/disha-dishant",
    label: "Pre-Wedding",
    title: "Hetal & Jasmin",
    style: "photo-w",
  },
  {
    id: "Portrait/m49tg9kkljfg28tnzcl5",
    label: "Portrait",
    title: "Studio Series",
    style: "photo-p",
  },
  {
    id: "Product/emfbz49x5hqvbajxuaob",
    label: "Commercial",
    title: "Brand Identity",
    style: "photo-c",
  },
  {
    id: "Place/z7jxe2ytcp9kso3oeo1x",
    label: "Events",
    title: "Corporate Gala",
    style: "photo-e",
  },
  {
    id: "Place/yr4p0rnvm6nmpkxd5ifw",
    label: "Nature",
    title: "Gujarat Landscapes",
    style: "photo-n",
  },
];

// src/components/sections/RecentWorks.jsx
// Section that displays a selection of recent works with image cards.
export function RecentWorks() {
  return (
    <section className="recent-works py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="recent-header">
          <div>
            <div className="section-eyebrow">Recent Works</div>
            <h2 className="section-title">
              Selected <em>Stories</em>
            </h2>
          </div>
          <Link to="/portfolio" className="link-underline">
            View All Work
          </Link>
        </div>

        <div className="works-grid">
          {works.map((work, index) => (
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
