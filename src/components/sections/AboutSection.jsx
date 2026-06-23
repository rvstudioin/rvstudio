import { CloudinaryImage } from "../ui/CloudinaryImage";

export function AboutSection() {
  return (
    <section className="about">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-1 pb-20">
          <div className="section-eyebrow">About Us</div>
          <h2 className="section-title">
            We See the <em>Beauty</em>
            <br />
            in Every Moment
          </h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div className="about-image">
              <div className="about-image-fill" >
                <CloudinaryImage
                  publicId="Portrait/gwciolewgyz820b6eirf"
                  width={600}
                  height={800}
                  crop="fill"
                  alt="About RV Studio"
                  contextmenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="about-tag">Est. 2018 · Rajkot</div>
            </div>

            <div className="about-body">
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--gray-light)",
                  lineHeight: "1.8",
                  marginBottom: "1.2rem",
                }}
              >
                RV Studio was founded with one belief: photography is not about
                equipment — it's about understanding light, emotion, and the
                unrepeatable instant between moments.
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--gray-light)",
                  lineHeight: "1.8",
                  marginBottom: "1.2rem",
                }}
              >
                Based in Rajkot, Gujarat, we work across weddings, corporate
                events, portraits, fashion, and commercial shoots throughout
                India. Our team brings a cinematic approach to every session —
                quiet, unhurried, and entirely focused on you.
              </p>

              <div className="about-stats">
                <div>
                  <div className="stat-num">6+</div>
                  <div className="stat-label">Years of Work</div>
                </div>
                <div>
                  <div className="stat-num">7+</div>
                  <div className="stat-label">Sessions Shot</div>
                </div>
                <div>
                  <div className="stat-num">3+</div>
                  <div className="stat-label">Awards Won</div>
                </div>
              </div>

              <a
                href="/contact"
                className="link-underline"
                style={{ display: "inline-block", marginTop: "1rem" }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
