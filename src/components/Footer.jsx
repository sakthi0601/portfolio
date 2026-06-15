import { motion } from 'framer-motion';
import { PERSONAL_INFO, NAV_LINKS } from '../utils/constants';

const Footer = () => {
  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t" style={{ background: '#111111', borderColor: 'rgba(220,38,38,0.2)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: '#DC2626', color: '#FFFFFF' }}>SP</div>
              <span className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>Sakthi.P</span>
            </div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Senior Software Engineer · Chennai, India</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {NAV_LINKS.map((link) => (
              <button key={link.label} onClick={() => handleNavClick(link.href)} className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="mailto:sakthipalani28573@gmail.com"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110"
              style={{ background: 'rgba(220,38,38,0.15)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.3)' }}
            >
              ✉
            </a>            <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>GH</a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>in</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Sakthi P. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
