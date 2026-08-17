import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon, Button } from '@/components/ui';
import { useTheme } from '@/context';
import { useActiveSection, useMediaQuery } from '@/hooks';
import { profile } from '@/data';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

export default function Navbar({ onSearchOpen }) {
  const { dark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const activeSection = useActiveSection(
    navLinks.map(l => l.id).concat(['home', 'contact']),
    { offset: 120 }
  );

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner">
          <a href="#home" className="navbar-brand" onClick={() => handleNavClick('home')}>
            <img src={profile.avatar} alt={profile.name} className="navbar-avatar" />
            <span className="navbar-name">{profile.name.split(' ').slice(-1)[0]}</span>
          </a>

          {!isMobile && (
            <div className="navbar-links">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`navbar-link ${activeSection === link.id ? 'navbar-link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="navbar-actions">
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name="search" size={16} />}
              onClick={onSearchOpen}
              className="navbar-search-btn"
              aria-label="Search"
            />
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name={dark ? 'sun' : 'moon'} size={16} />}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            />
            {!isMobile && (
              <Button
                variant="primary"
                size="sm"
                href="#contact"
                icon={<Icon name="arrow-right" size={14} />}
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Contact
              </Button>
            )}
            {isMobile && (
              <button
                className="navbar-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <Icon name={mobileOpen ? 'close' : 'menu'} size={20} />
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Navigation</span>
              <button onClick={() => setMobileOpen(false)}>
                <Icon name="close" size={20} />
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`mobile-menu-link ${activeSection === link.id ? 'mobile-menu-link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mobile-menu-link"
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                Contact
              </motion.a>
            </div>
            <div className="mobile-menu-footer">
              <Button
                variant="secondary"
                href={profile.resume}
                download
                icon={<Icon name="download" size={16} />}
                className="w-full"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}