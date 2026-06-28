import content from '../../data/content.json';

const { services, servicesSection } = content;

// src/components/sections/ServicesSection.jsx
// Services section that renders the studio's service offerings as cards.
export function ServicesSection() {
  return (
    <section className="services">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-1">
          <div className="section-eyebrow">{servicesSection.eyebrow}</div>
          <h2 className="section-title">
            {servicesSection.titlePrefix}
            <em>{servicesSection.titleEm}</em>
          </h2>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <article key={service.id} className="service-card">
              <div className="service-num">{service.id.padStart(2, '0')}</div>
              <div className="service-icon" />
              <div className="service-name">{service.title}</div>
              <p className="service-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
