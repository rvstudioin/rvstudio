import { useState } from "react";

// src/components/sections/ContactSection.jsx
// Contact section with a form, validation, mailto integration, and success message.
export function ContactSection() {
  //  const WHATSAPP_NUMBER = "919904795771"; // E.164 format without '+'
  const RECIPIENT_EMAIL = "rvstudioin@gmail.com";
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
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.service) newErrors.service = "Please select a service.";
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
            <div className="section-eyebrow">Get in Touch</div>
            <h2 className="section-title">Let's Create<br /><em>Together</em></h2>
            <p className="text-gray-light leading-relaxed mb-8">
              Every great photograph begins with a conversation. Tell us about your vision and well shape it into something lasting.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon">✉</div>
              <span>rvstudioin@gmail.com</span>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">☎</div>
              <span>+91 99047 95771</span>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">⊙</div>
              <span>Rajkot, Gujarat, India</span>
            </div>
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
                  <strong>Email draft opened successfully!</strong>
                  <br />
                  Your message has been prepared in your email client. We'll get back to
                  you shortly.
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  aria-label="Dismiss"
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
                <span className="form-label">Full Name</span>
                <input className="form-input" type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleChange} />
                 {err.name && <FieldError msg={err.name} />}
              </label>
              <label className="form-group">
                <span className="form-label">Email Address</span>
                <input className="form-input" type="email" placeholder="your@email.com" name="email" value={formData.email} onChange={handleChange} />
                 {err.email && <FieldError msg={err.email} />}
              </label>
            </div>
            <div className="form-row">
              <label className="form-group">
                <span className="form-label">Phone Number</span>
                <input className="form-input" type="tel" placeholder="+91 00000 00000" name="phone" value={formData.phone} onChange={handleChange} />
                 {err.phone && <FieldError msg={err.phone} />}
              </label>
              <label className="form-group">
                <span className="form-label">Service Required</span>
                <select className="form-select form-input" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option>Wedding Photography</option>
                  <option>Portrait Session</option>
                  <option>Commercial Shoot</option>
                  <option>Event Coverage</option>
                  <option>Fashion & Editorial</option>
                  <option>Nature & Travel</option>
                </select>
                {err.service && <FieldError msg={err.service} />}
              </label>
            </div>
            <label className="form-group">
              <span className="form-label">Event Date</span>
              <input className="form-input" type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
            </label>
            <label className="form-group">
              <span className="form-label">Tell Us About Your Project</span>
              <textarea className="form-textarea" placeholder="Describe your vision, location, style preferences, and any special requirements..." name="projectDetails" value={formData.projectDetails} onChange={handleChange}></textarea>
            </label>
            <button
              className="btn-primary mt-4 w-full sm:w-auto"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Enquiry →"}
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