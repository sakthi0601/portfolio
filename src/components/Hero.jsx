import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';
import { fadeInUp, staggerContainer, textReveal } from '../utils/animations';

const ROLES = [
  'Senior Software Engineer',
  'Full Stack Developer',
  'MERN Stack Specialist',
  'React.js Expert',
];

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = texts[roleIdx];
    let timeout;
    if (!isDeleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!isDeleting && charIdx === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setRoleIdx((r) => (r + 1) % texts.length);
    }
    setDisplayText(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx, texts]);

  return (
    <span style={{ color: '#FFFFFF', fontWeight: 700 }}>
      {displayText}
      <span
        className="inline-block w-0.5 h-7 ml-1 align-middle"
        style={{ background: 'rgba(255,255,255,0.7)', animation: 'blink 1s step-end infinite' }}
      />
    </span>
  );
};

const TECH_BADGES = ['React', 'Node.js', 'MongoDB', 'Express', 'AWS S3', 'TypeScript'];

const Hero = () => {
  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 60%, #991B1B 100%)' }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      {/* Glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 65%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div variants={fadeInUp} className="inline-flex mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: '#FFFFFF',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s ease-in-out infinite' }}
                />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={textReveal}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-4"
              style={{ color: '#FFFFFF' }}
            >
              Hi, I'm{' '}
              <span style={{ color: '#FFCCCC' }}>{PERSONAL_INFO.name}</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10"
            >
              <TypewriterText texts={ROLES} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.80)' }}
            >
              {PERSONAL_INFO.tagline} Crafting enterprise-grade web applications with the MERN
              stack at{' '}
              <span style={{ color: '#FFCCCC', fontWeight: 600 }}>Yoho Technologies</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick('#contact')}
                className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{ background: '#FFFFFF', color: '#DC2626', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              >
                Get In Touch →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick('#projects')}
                className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all border"
                style={{ border: '1.5px solid rgba(255,255,255,0.5)', color: '#FFFFFF', background: 'rgba(255,255,255,0.1)' }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex gap-8 mt-10 justify-center lg:justify-start">
              {[
                { value: '1+', label: 'Year Exp.' },
                { value: '6+', label: 'Live Projects' },
                { value: 'MERN', label: 'Stack' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#FFFFFF' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 sm:w-80 lg:w-96"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 0 80px rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.2)',
                }}
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: '#F0E0E0', background: '#FFF5F5' }}>
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28CA41' }} />
                  <span className="ml-2 text-xs" style={{ color: '#666666' }}>sakthi.js</span>
                </div>
                {/* Code content */}
                <div className="p-5 font-mono text-sm leading-7" style={{ background: '#FFFFFF' }}>
                  <div>
                    <span style={{ color: '#DC2626' }}>const</span>{' '}
                    <span style={{ color: '#B91C1C' }}>developer</span>{' '}
                    <span style={{ color: '#333333' }}>=</span>{' '}
                    <span style={{ color: '#333333' }}>{'{'}</span>
                  </div>
                  <div className="ml-4">
                    <span style={{ color: '#DC2626' }}>name</span>
                    <span style={{ color: '#333333' }}>: </span>
                    <span style={{ color: '#059669' }}>"Sakthi P"</span>
                    <span style={{ color: '#333333' }}>,</span>
                  </div>
                  <div className="ml-4">
                    <span style={{ color: '#DC2626' }}>role</span>
                    <span style={{ color: '#333333' }}>: </span>
                    <span style={{ color: '#059669' }}>"Senior SWE"</span>
                    <span style={{ color: '#333333' }}>,</span>
                  </div>
                  <div className="ml-4">
                    <span style={{ color: '#DC2626' }}>stack</span>
                    <span style={{ color: '#333333' }}>: </span>
                    <span style={{ color: '#059669' }}>"MERN"</span>
                    <span style={{ color: '#333333' }}>,</span>
                  </div>
                  <div className="ml-4">
                    <span style={{ color: '#DC2626' }}>available</span>
                    <span style={{ color: '#333333' }}>: </span>
                    <span style={{ color: '#DC2626' }}>true</span>
                    <span style={{ color: '#333333' }}>,</span>
                  </div>
                  <div className="ml-4">
                    <span style={{ color: '#DC2626' }}>passion</span>
                    <span style={{ color: '#333333' }}>: </span>
                    <span style={{ color: '#059669' }}>"clean code"</span>
                  </div>
                  <div style={{ color: '#333333' }}>{'}'}</div>
                </div>
              </div>

              {/* Floating badges */}
              {TECH_BADGES.map((tech, i) => {
                const positions = [
                  { top: '-14px', right: '20px' },
                  { top: '40px', right: '-50px' },
                  { top: '110px', right: '-55px' },
                  { bottom: '40px', right: '-50px' },
                  { bottom: '-14px', right: '20px' },
                  { top: '75px', left: '-55px' },
                ];
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="absolute px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      ...positions[i],
                      background: '#FFFFFF',
                      border: '1px solid rgba(220,38,38,0.3)',
                      color: '#DC2626',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                    }}
                  >
                    {tech}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
            style={{ borderColor: 'rgba(255,255,255,0.4)' }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.7)' }} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: 0.7; } }
      `}</style>
    </section>
  );
};

export default Hero;
