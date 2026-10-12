import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/useTheme';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Handle sticky scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`site-header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-inner">
        {/* Brand */}
        <Link to="/" className="brand" aria-label="Chaks Home">
          <span className="brand-mark">BC</span>
          <span className="brand-text">
            Chaks<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Header Actions (Theme Toggle, Let's Talk CTA, Mobile Hamburger) */}
        <div className="header-actions">
          {/* Theme Switcher */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={17} strokeWidth={2.2} />
            ) : (
              <Sun size={17} strokeWidth={2.2} />
            )}
          </button>

          {/* Let's Talk CTA button */}
          <Link to="/contact" className="nav-contact-btn">
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={15} strokeWidth={2.5} className="arrow-icon" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-content">
          <p className="mobile-nav-label">Navigation</p>
          <ul className="mobile-nav-list">
            {navLinks.map((link, idx) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'mobile-active' : ''}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mobile-nav-idx">0{idx + 1}</span>
                  <span className="mobile-nav-text">{link.name}</span>
                  <ArrowUpRight size={18} className="mobile-arrow" />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-availability">
              <span className="status-dot"></span>
              <span>Available for select projects</span>
            </div>
            <a
              href="mailto:blessingschakale12@gmail.com"
              className="mobile-email-link"
            >
              blessingschakale12@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
