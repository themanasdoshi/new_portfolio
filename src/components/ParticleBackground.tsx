'use client';

import { useCallback, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // initialize engine once
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        manualParticles: [
          {
            options: {
              color: { value: '#ffffff' },
              size: { value: 2 },
              opacity: { value: 0.9 },
            },
          },
          {
            options: {
              color: { value: '#ffffff' },
              size: { value: 2 },
              opacity: { value: 0.9 },
            },
          },
          {
            options: {
              color: { value: '#ffffff' },
              size: { value: 2 },
              opacity: { value: 0.9 },
            },
          },
        ],
        particles: {
          color: {
            value: ['#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81'],
          },
          links: {
            color: '#6366f1',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.8,
            straight: false,
            attract: {
              enable: true,
              rotate: { x: 600, y: 1200 },
            },
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
            value: 60,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;