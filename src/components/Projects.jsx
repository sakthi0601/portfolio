import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../utils/constants';
import { fadeInUp, staggerContainer } from '../utils/animations';

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const redShades = ['#DC2626', '#B91C1C', '#EF4444', '#991B1B'];
  const color = redShades[index % redShades.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.01 }}
      className="rounded-2xl overflow-hidden border cursor-pointer group relative"
      style={{
        background: '#FFFFFF',
        border: `1px solid ${hovered ? color + '50' : '#F0E0E0'}`,
        transition: 'border-color 0.3s ease',
        boxShadow: hovered ? `0 20px 60px ${color}15` : '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      <div className="h-1" style={{ background: color }} />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{ background: `radial-gradient(circle at top left, ${color}06, transparent 60%)` }}
          />
        )}
      </AnimatePresence>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
            {project.icon}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ background: `${color}12`, color: color, border: `1px solid ${color}25` }}>
            {project.type}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-0.5" style={{ color: '#111111' }}>{project.title}</h3>
        <p className="text-sm mb-3" style={{ color: color }}>{project.subtitle}</p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#666666' }}>{project.description}</p>
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-xs" style={{ color: '#333333' }}>
              <span style={{ color: color, flexShrink: 0, marginTop: '2px' }}>▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium" style={{ background: `${color}10`, color: color, border: `1px solid ${color}20` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative" style={{ background: '#FFF5F5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="text-center mb-16">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border" style={{ color: '#DC2626', border: '1px solid rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.06)' }}>
              Portfolio
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2" style={{ color: '#111111' }}>
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#666666' }}>
              Enterprise-grade applications built and maintained in production
            </motion.p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
