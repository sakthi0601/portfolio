import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: '#FFFFFF', color: '#111111' }}>
      {/* Cursor glow - red tint */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(400px circle at ${cursor.x}px ${cursor.y}px, rgba(220,38,38,0.03), transparent 50%)`,
        }}
      />

      {/* Scroll progress bar - red */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[100]"
        style={{ scaleX, background: 'linear-gradient(90deg, #DC2626, #EF4444)' }}
      />

      <Navbar />

      <div className="relative z-10">
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
