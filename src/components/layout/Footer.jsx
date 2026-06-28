import content from '../../data/content.json';
import { t } from '../../utils/i18n';

const { footer } = content;

// src/components/layout/Footer.jsx
// Footer component with navigation links and social contacts.
export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        RV <span>Studio</span>
      </div>
      <div className="footer-links">
        {footer.links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div className="social-links">
        {footer.socialLinks.map((social) => (
          <a key={social.href} className="social-link" href={social.href} title={social.title}>{social.label}</a>
        ))}
      </div>
      <div className="footer-copy">{t('footer.copyright')}</div>
    </footer>
  );
}
