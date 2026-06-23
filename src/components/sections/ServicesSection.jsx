const services = [
  { id: 'wedding', title: 'Pre-Wedding Photography', description: 'Full-day coverage from Mehendi to Reception. Candid, traditional, and editorial styles.' },
  { id: 'portrait', title: 'Portrait Sessions', description: 'Individual, couple, and family portraits with studio and outdoor options.' },
  { id: 'commercial', title: 'Commercial Shoots', description: 'Product photography, brand visuals, and social media content for businesses.' },
  { id: 'events', title: 'Event Coverage', description: 'Corporate events, conferences, launches, and private parties captured professionally.' },
  { id: 'fashion', title: 'Fashion & Editorial', description: 'Lookbooks, catalogue shoots, and editorial campaigns with stylist collaboration.' },
  { id: 'nature', title: 'Nature & Travel', description: 'Landscape, wildlife, and documentary photography with cinematic framing.' },
];

export function ServicesSection() {
  return (
    <section className="services">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="mb-1">
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">Our <em>Services</em></h2>
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
