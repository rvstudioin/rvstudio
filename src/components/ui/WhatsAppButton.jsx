// src/components/ui/WhatsAppButton.jsx
// Floating WhatsApp CTA button visible on all pages.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// src/components/ui/WhatsAppButton.jsx
// Floating WhatsApp CTA that opens a new chat with a prefilled message.
const WHATSAPP_NUMBER = "919904795771";
const WHATSAPP_MESSAGE = "Hello%20RV%20Studio!%20I%20would%20like%20to%20discuss%20a%20photography%20project.";

export function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="floating-whatsapp" aria-label="WhatsApp contact">
      <a
        className="whatsapp-button"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RV Studio on WhatsApp"
      >
        <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp} />
      </a>
    </div>
  );
}
