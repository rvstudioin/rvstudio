// src/components/layout/Footer.jsx
// Footer component with navigation links and social contacts.
export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        RV <span>Studio</span>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#">Privacy</a>
      </div>
      <div className="social-links">
        <a className="social-link" href="https://www.instagram.com/clickerspark/" title="Instagram">in</a>
        <a className="social-link" href="https://www.facebook.com/ravi.lakhatariya.79/" title="Facebook">fb</a>
        <a className="social-link" href="https://www.youtube.com/@ravilakhtariya" title="YouTube">▶</a>
        <a className="social-link" href="https://www.shutterstock.com/g/Ravilakhtariya" title="YouTube">S</a>
      </div>
      <div className="footer-copy">© 2024 RV Studio. All rights reserved.</div>
    </footer>
  );
}
