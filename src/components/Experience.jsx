import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE } from '../utils/constants';
import { fadeInUp, fadeInLeft, staggerContainer } from '../utils/animations';

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#FFFFFF' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="text-center mb-16">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border" style={{ color: '#DC2626', border: '1px solid rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.06)' }}>
              Work History
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2" style={{ color: '#111111' }}>
              Experience
            </motion.h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px hidden sm:block" style={{ background: 'linear-gradient(to bottom, rgba(220,38,38,0.5), transparent)' }} />

            {EXPERIENCE.map((exp, i) => (
              <motion.div key={i} variants={fadeInLeft} className="relative mb-8 sm:mb-16">
                <div className="hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center top-8" style={{ background: '#DC2626', borderColor: '#FFFFFF', boxShadow: '0 0 16px rgba(220,38,38,0.5)' }} />

                <div className="sm:ml-12 md:ml-0 md:w-[calc(50%-2rem)] rounded-2xl p-6 sm:p-8 border" style={{ background: '#FFFFFF', border: '1px solid #F0E0E0', boxShadow: '0 4px 24px rgba(220,38,38,0.06)' }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold" style={{ color: '#111111' }}>{exp.role}</h3>
                      <p className="text-base font-semibold mt-0.5" style={{ color: '#DC2626' }}>{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'rgba(220,38,38,0.08)', color: '#DC2626' }}>{exp.type}</span>
                      <p className="text-xs mt-1" style={{ color: '#666666' }}>{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-xs mb-3 flex items-center gap-1" style={{ color: '#666666' }}>📍 {exp.location}</p>
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2 text-sm" style={{ color: '#333333' }}>
                        <span style={{ color: '#DC2626', flexShrink: 0, marginTop: '2px' }}>▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium" style={{ background: 'rgba(220,38,38,0.08)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.2)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
