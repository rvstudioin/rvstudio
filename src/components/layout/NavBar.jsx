
// ═══════════════════════════════════════════════════════════
// 7. NAVBAR COMPONENT
// ═══════════════════════════════════════════════════════════
 
// src/components/layout/Navbar.jsx
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNavScrolled, toggleMobileMenu } from '../../features/ui/uiSlice';
 
const NAV_LINKS = [
  { label: 'Home',      path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Videos',    path: '/videos' },
  { label: 'About',     path: '/about' },
  { label: 'Contact',   path: '/contact' },
];
 
export default function Navbar() {
  // Responsive navigation bar with desktop links and mobile slide-in menu
  const dispatch  = useDispatch();
  const { navScrolled: scrolled, mobileMenuOpen } = useSelector(s => s.ui);
  const location  = useLocation();
 
  useEffect(() => {
    // Track window scroll position to apply a compact navbar style after scrolling
    const handler = () => dispatch(setNavScrolled(window.scrollY > 60));
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [dispatch]);

  useEffect(() => {
    // Prevent page scrolling when the mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // Auto-close the mobile menu whenever the route changes
    if (mobileMenuOpen) {
      dispatch(toggleMobileMenu());
    }
  }, [location.pathname, mobileMenuOpen, dispatch]);
 
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      transition-all duration-300 border-b border-gold-dim/10
      ${scrolled ? 'py-4 bg-obsidian/95 backdrop-blur-md' : 'py-6 bg-obsidian/80 backdrop-blur-sm'}
      px-12`}
    >
      <Link to="/" className="nav-logo">
        RV <span >Studio</span>
      </Link>
 
      <ul className="hidden lg:flex gap-10 list-none">
        {NAV_LINKS.map(({ label, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={` uppercase tracking-[0.3em] transition-colors duration-200
                ${location.pathname === path ? 'text-gold' : 'text-gray-light hover:text-gold'}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
 
      <Link
        to="/contact"
        className="hidden lg:block text-label uppercase tracking-widest text-gold
          border border-gold-dim px-5 py-2 hover:bg-gold hover:text-obsidian transition-all duration-200"
      >
        Book a Session
      </Link>
 
      <button
        className="lg:hidden text-cream"
        onClick={() => dispatch(toggleMobileMenu())}
        aria-label="Toggle menu"
      >
        ☰
      </button>
 
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/70 cursor-pointer"
          onClick={() => dispatch(toggleMobileMenu())}
        />
        <div className={`absolute right-0 top-0 h-screen w-[18rem] max-w-sm bg-black p-6 flex flex-col gap-8 transition-transform duration-300 shadow-lg z-50 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button
            className="self-end text-4xl text-cream hover:text-gold transition-colors duration-200"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className="flex flex-col gap-6 pt-4 list-none">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`text-xl uppercase tracking-[0.25em] transition-colors duration-200 block
                    ${location.pathname === path ? 'text-gold' : 'text-gray-light hover:text-gold'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-gold/10 pt-6">
            <Link
              to="/contact"
              className="block text-center py-3 px-4 uppercase tracking-[0.25em] font-semibold text-obsidian bg-gold hover:bg-gold/90 transition-colors duration-200 rounded"
              onClick={() => dispatch(toggleMobileMenu())}
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}