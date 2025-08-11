'use client';

import { useState, useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import WaveBackground from './WaveBackground';
import GradientBackground from './GradientBackground';

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Use useEffect to avoid hydration mismatch and handle scroll
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Apply parallax effect to background
      if (backgroundRef.current) {
        // Subtle parallax effect - background moves slower than scroll
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  if (!mounted) return null;

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 -z-10 overflow-hidden transition-transform duration-300 ease-out"
    >
      <GradientBackground />
      <WaveBackground />
      <ParticleBackground />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-black/40"
        style={{ opacity: Math.min(scrollY / 1000, 0.7) }}
      />
    </div>
  );
};

export default AnimatedBackground;