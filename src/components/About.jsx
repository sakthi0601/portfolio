import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.span
      variants={fadeInUp}
      className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border"
      style={{ color: '#DC2626', border: '1px solid rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.06)' }}
    >
      {eyebrow}
    </motion.span>
    <motion.h2
      variants={fadeInUp}
      className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
      style={{ color: '#111111' }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p variants={fadeInUp} className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#666666' }}>
        {subtitle}
      </motion.p>
    )}
  </div>
);

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const facts = [
    { icon: '🎓', label: 'Education', value: 'B.Tech IT — 2024' },
    { icon: '🏢', label: 'Current Role', value: 'Senior Software Engineer' },
    { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu' },
    { icon: '💼', label: 'Experience', value: '1+ Year Production' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <SectionTitle eyebrow="About Me" title="Who I Am" subtitle="A dedicated full stack developer building scalable enterprise solutions" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <div className="rounded-2xl p-6 sm:p-8 border mb-6" style={{ background: '#FFFFFF', border: '1px solid #F0E0E0', boxShadow: '0 2px 20px rgba(220,38,38,0.06)' }}>
                <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: '#333333' }}>
                  I'm a{' '}
                  <span style={{ color: '#DC2626', fontWeight: 600 }}>Full Stack Developer</span>{' '}
                  with hands-on experience building and maintaining enterprise-grade web applications using the MERN stack and React.js.
                </p>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#333333' }}>
                  Currently serving as{' '}
                  <span style={{ color: '#111111', fontWeight: 600 }}>Senior Software Engineer</span> at{' '}
                  <span style={{ color: '#DC2626', fontWeight: 600 }}>Yoho Technologies Pvt. Ltd.</span>,
                  contributing to multiple live production projects including HR management, recruitment, and corporate portal platforms.
                </p>
                <p className="text-base leading-relaxed" style={{ color: '#333333' }}>
                  Passionate about writing{' '}
                  <span style={{ color: '#111111', fontWeight: 600 }}>clean, scalable code</span> and delivering reliable software solutions that meet real business needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {facts.map((fact) => (
                  <motion.div
                    key={fact.label}
                    whileHover={{ scale: 1.02, borderColor: '#DC2626' }}
                    className="rounded-xl p-4 border transition-all"
                    style={{ background: '#FFFFFF', border: '1px solid #F0E0E0' }}
                  >
                    <div className="text-xl mb-2">{fact.icon}</div>
                    <div className="text-xs mb-0.5" style={{ color: '#666666' }}>{fact.label}</div>
                    <div className="text-sm font-semibold" style={{ color: '#111111' }}>{fact.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <h3 className="text-lg font-semibold mb-6" style={{ color: '#111111' }}>Education & Background</h3>

              {[
                { year: '2024', title: 'B.Tech — Information Technology', org: 'Anjalai Ammal Mahalingham Engineering College', sub: 'Thiruvarur', icon: '🎓' },
                { year: '2020', title: 'Higher Secondary (HSC)', org: 'Sri Srinivasa Matric Hr. Secondary School', sub: 'Thanjavur', icon: '📚' },
                { year: '2018', title: 'SSLC (Class X)', org: 'Sri Srinivasa Matric Hr. Secondary School', sub: 'Thanjavur', icon: '🏫' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  className="flex gap-4 p-4 rounded-xl border group transition-all"
                  style={{ background: '#FFFFFF', border: '1px solid #F0E0E0' }}
                >
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)' }}>
                      {item.icon}
                    </div>
                    {i < 2 && <div className="w-px flex-1 mt-1" style={{ background: '#F0E0E0' }} />}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm" style={{ color: '#111111' }}>{item.title}</h4>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(220,38,38,0.08)', color: '#DC2626' }}>{item.year}</span>
                    </div>
                    <p className="text-sm mt-0.5" style={{ color: '#333333' }}>{item.org}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#666666' }}>{item.sub}</p>
                  </div>
                </motion.div>
              ))}

              <div className="rounded-xl p-4 border mt-6" style={{ background: '#FFFFFF', border: '1px solid #F0E0E0' }}>
                <h4 className="text-sm font-semibold mb-3" style={{ color: '#111111' }}>Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Team Collaboration', 'Communication', 'Problem-Solving', 'Attention to Detail'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(220,38,38,0.08)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.2)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
