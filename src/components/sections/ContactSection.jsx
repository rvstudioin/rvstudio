import { useState } from "react";
import content from '../../data/content.json';
import { t } from '../../utils/i18n';

const { contactSection } = content;

// src/components/sections/ContactSection.jsx
// Contact section with a form, validation, mailto integration, and success message.
export function ContactSection() {
  //  const WHATSAPP_NUMBER = "919904795771"; // E.164 format without '+'
  const RECIPIENT_EMAIL = contactSection.recipientEmail;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    eventDate: "",
    projectDetails: "",
  });
  // Form state fields and validation state for the contact form.

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErrors] = useState({});
 
  function handleChange(e) {
    const { name, value } = e.target;
    // Update field value and clear any existing error for that field
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

    function validate() {
    const newErrors = {};
    // Basic field validation: required fields and simple email pattern
    if (!formData.name.trim()) newErrors.name = t('validation.nameRequired');
    if (!formData.email.trim()) newErrors.email = t('validation.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t('validation.emailInvalid');
    if (!formData.phone.trim()) newErrors.phone = t('validation.phoneRequired');
    if (!formData.service) newErrors.service = t('validation.serviceRequired');
    return newErrors;
  }
 
  function buildMailtoLink() {
    // Build a mailto URL that pre-populates the user's email client with form values
    const subject = encodeURIComponent(`New Enquiry – ${formData.service} | RV Studio`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Service: ${formData.service}`,
        formData.eventDate ? `Event Date: ${formData.eventDate}` : null,
        formData.projectDetails ? `\nProject Details:\n${formData.projectDetails}` : null,
      ]
        .filter(Boolean)
        .join("\n")
    );
    return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  }

  
  // function buildWhatsAppMessage() {
  //   const lines = [
  //     `📸 *New Enquiry – RV Studio*`,
  //     ``,
  //     `👤 *Name:* ${formData.name}`,
  //     `✉️ *Email:* ${formData.email}`,
  //     `📞 *Phone:* ${formData.phone}`,
  //     `🎯 *Service:* ${formData.service}`,
  //     formData.eventDate ? `📅 *Event Date:* ${formData.eventDate}` : null,
  //     formData.projectDetails ? `📝 *Project Details:*\n${formData.projectDetails}` : null,
  //   ]
  //     .filter(Boolean)
  //     .join("\n");
 
  //   return encodeURIComponent(lines);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Validate form before submission and open mailto draft if valid

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    window.location.href = buildMailtoLink();
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: "", email: "", phone: "", service: "", eventDate: "", projectDetails: "" });
  }

  return (
    <section className="contact py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="contact-inner">
          <div className="contact-info">
              <div className="section-eyebrow">{contactSection.eyebrow}</div>
              <h2 className="section-title">
                {contactSection.headingLine1}
                <br />
                <em>{contactSection.headingEm}</em>
              </h2>
              <p className="text-gray-light leading-relaxed mb-8">
                {contactSection.description}
            </p>

            {contactSection.details.map((detail, index) => (
              <div key={index} className="contact-detail">
                <div className="contact-detail-icon">{detail.icon}</div>
                <span>{detail.text}</span>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Success Banner */}
            {submitted && (
              <div
                role="alert"
                style={{
                  background: "#d1fae5",
                  border: "1px solid #6ee7b7",
                  borderRadius: "8px",
                  padding: "14px 18px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "#065f46",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                }}
              >
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>✅</span>
                <div>
                  <strong>{t('contact.successTitle')}</strong>
                  <br />
                  {t('contact.successBody')}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  aria-label={t('contact.dismiss')}
                  style={{
                    marginLeft: "auto",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#065f46",
                    fontSize: "1.1rem",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  ×
                </button>
              </div>
            )}
            <div className="form-row">
              <label className="form-group">
                <span className="form-label">{contactSection.form.name}</span>
                <input className="form-input" type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} />
                 {err.name && <FieldError msg={err.name} />}
              </label>
              <label className="form-group">
                <span className="form-label">{contactSection.form.email}</span>
                <input className="form-input" type="email" placeholder="your@email.com" name="email" value={formData.email} onChange={handleChange} />
                 {err.email && <FieldError msg={err.email} />}
              </label>
            </div>
            <div className="form-row">
              <label className="form-group">
                <span className="form-label">{contactSection.form.phone}</span>
                <input className="form-input" type="tel" placeholder="+91 00000 00000" name="phone" value={formData.phone} onChange={handleChange} />
                 {err.phone && <FieldError msg={err.phone} />}
              </label>
              <label className="form-group">
                <span className="form-label">{contactSection.form.service}</span>
                <select className="form-select form-input" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">{contactSection.form.servicePlaceholder}</option>
                  {contactSection.form.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {err.service && <FieldError msg={err.service} />}
              </label>
            </div>
            <label className="form-group">
              <span className="form-label">{contactSection.form.eventDate}</span>
              <input className="form-input" type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
            </label>
            <label className="form-group">
              <span className="form-label">{contactSection.form.projectDetails}</span>
              <textarea className="form-textarea" placeholder="Describe your vision, location, style preferences, and any special requirements..." name="projectDetails" value={formData.projectDetails} onChange={handleChange}></textarea>
            </label>
            <button
              className="btn-primary mt-4 w-full sm:w-auto"
              type="submit"
              disabled={loading}
            >
              {loading ? t('contact.sending') : t('contact.sendEnquiry')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FieldError({ msg }) {
  return (
    <span
      role="alert"
      style={{
        display: "block",
        marginTop: "4px",
        fontSize: "0.8rem",
        color: "#dc2626",
      }}
    >
      {msg}
    </span>
  );
}