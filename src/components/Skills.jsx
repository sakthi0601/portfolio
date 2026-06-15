import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

const SkillBar = ({ name, level, inView, delay }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium" style={{ color: '#333333' }}>{name}</span>
      <span className="text-xs font-semibold" style={{ color: '#DC2626' }}>{level}%</span>
    </div>
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#F0E0E0' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full relative"
        style={{ background: 'linear-gradient(90deg, #DC2626, #EF4444)' }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ background: '#EF4444', boxShadow: '0 0 6px #EF4444' }} />
      </motion.div>
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const categories = Object.keys(SKILLS);

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden" style={{ background: '#FFF5F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="text-center mb-12">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border" style={{ color: '#DC2626', border: '1px solid rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.06)' }}>
              Technical Skills
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2" style={{ color: '#111111' }}>
              My Expertise
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#666666' }}>
              Technologies I work with daily to build production-ready applications
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: activeCategory === cat ? '#FFFFFF' : '#333333',
                  background: activeCategory === cat ? '#DC2626' : '#FFFFFF',
                  border: `1px solid ${activeCategory === cat ? '#DC2626' : '#F0E0E0'}`,
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(220,38,38,0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 border"
            style={{ background: '#FFFFFF', border: '1px solid #F0E0E0', boxShadow: '0 4px 24px rgba(220,38,38,0.06)' }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: '#111111' }}>{activeCategory}</h3>
            {SKILLS[activeCategory].map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} inView={inView} delay={i * 0.08} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
