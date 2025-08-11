'use client';

import { useEffect, useRef } from 'react';

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Wave properties
    const waves = [
      {
        amplitude: 35,
        period: 0.04,
        phase: 0,
        speed: 0.015,
        color: 'rgba(99, 102, 241, 0.08)', // Indigo with low opacity
      },
      {
        amplitude: 30,
        period: 0.03,
        phase: 0.5,
        speed: 0.02,
        color: 'rgba(79, 70, 229, 0.06)', // Darker indigo with low opacity
      },
      {
        amplitude: 25,
        period: 0.05,
        phase: 1,
        speed: 0.01,
        color: 'rgba(129, 140, 248, 0.07)', // Lighter indigo with low opacity
      },
      {
        amplitude: 40,
        period: 0.02,
        phase: 1.5,
        speed: 0.025,
        color: 'rgba(67, 56, 202, 0.05)', // Deep indigo with low opacity
      },
      {
        amplitude: 20,
        period: 0.06,
        phase: 2,
        speed: 0.018,
        color: 'rgba(165, 180, 252, 0.04)', // Very light indigo with low opacity
      },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        wave.phase += wave.speed;
        drawWave(ctx, wave, width, height);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    wave: {
      amplitude: number;
      period: number;
      phase: number;
      color: string;
    },
    width: number,
    height: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(0, height / 2);

    // Use a more complex wave pattern with multiple sine waves
    for (let x = 0; x < width; x++) {
      // Primary wave
      const primaryWave = Math.sin(x * wave.period + wave.phase) * wave.amplitude;
      
      // Secondary smaller wave for texture
      const secondaryWave = Math.sin(x * wave.period * 2 + wave.phase * 1.5) * (wave.amplitude * 0.3);
      
      // Combine waves
      const y = primaryWave + secondaryWave + height / 2;
      
      ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fillStyle = wave.color;
    ctx.fill();
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ filter: 'blur(8px)' }}
    />
  );
};

export default WaveBackground;