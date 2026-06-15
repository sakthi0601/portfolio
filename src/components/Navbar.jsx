import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../utils/constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(220,38,38,0.15)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(220,38,38,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNavClick('#hero')}
            >
              {/* <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: '#DC2626', color: '#FFFFFF' }}
              >
                SP
              </div>
              {/* <span
                className="text-lg font-semibold hidden sm:block"
                style={{ color: scrolled ? '#111111' : '#FFFFFF' }}
              >
                Sakthi<span style={{ color: scrolled ? '#DC2626' : '#FFCCCC' }}></span>
              </span> */}
            </motion.div> 

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                    style={{ color: scrolled ? (isActive ? '#DC2626' : '#333333') : (isActive ? '#FFCCCC' : 'rgba(255,255,255,0.85)') }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: scrolled ? 'rgba(220,38,38,0.08)' : 'rgba(255,255,255,0.15)' }}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                );
              })}
              <motion.a
                href="/Sakthi_P_Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg transition-all"
                style={{
                  background: scrolled ? '#DC2626' : '#FFFFFF',
                  color: scrolled ? '#FFFFFF' : '#DC2626',
                  boxShadow: '0 2px 12px rgba(220,38,38,0.25)',
                }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5" style={{ background: scrolled ? '#DC2626' : '#FFFFFF' }} />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5" style={{ background: scrolled ? '#DC2626' : '#FFFFFF' }} />
              <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5" style={{ background: scrolled ? '#DC2626' : '#FFFFFF' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(220,38,38,0.15)' }}
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-base font-medium"
                  style={{
                    color: activeSection === link.href.replace('#', '') ? '#DC2626' : '#333333',
                    background: activeSection === link.href.replace('#', '') ? 'rgba(220,38,38,0.08)' : 'transparent',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="/Sakthi_P_Resume.pdf"
                download
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-2 px-4 py-3 rounded-lg font-semibold text-center"
                style={{ background: '#DC2626', color: '#FFFFFF' }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
