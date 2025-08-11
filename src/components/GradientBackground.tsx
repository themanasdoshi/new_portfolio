'use client';

import { useEffect, useRef } from 'react';

const GradientBackground = () => {
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

    // Gradient animation properties
    let hue = 0;
    let hueDirection = 1;
    const hueSpeed = 0.2;
    const hueRange = 30; // Range of hue variation
    const baseHue = 240; // Base hue (indigo/blue)
    
    // Create multiple gradient points for more dynamic effect
    let gradientPoints = [
      { x: 0, y: 0, vx: 0.2, vy: 0.3 },
      { x: width, y: 0, vx: -0.2, vy: 0.2 },
      { x: width, y: height, vx: -0.3, vy: -0.1 },
      { x: 0, y: height, vx: 0.1, vy: -0.3 }
    ];

    const animate = () => {
      // Update hue
      hue += hueSpeed * hueDirection;
      if (hue > hueRange || hue < 0) {
        hueDirection *= -1;
      }

      // Update gradient points positions
      gradientPoints = gradientPoints.map(point => {
        let { x, y, vx, vy } = point;
        
        // Update position
        x += vx;
        y += vy;
        
        // Bounce off edges
        if (x <= 0 || x >= width) vx *= -1;
        if (y <= 0 || y >= height) vy *= -1;
        
        return { x, y, vx, vy };
      });

      // Create gradient
      const gradient = ctx.createRadialGradient(
        gradientPoints[0].x, gradientPoints[0].y, 0,
        gradientPoints[2].x, gradientPoints[2].y, width * 0.8
      );
      
      gradient.addColorStop(0, `hsla(${baseHue + hue}, 70%, 40%, 0.4)`);
      gradient.addColorStop(0.5, `hsla(${baseHue - hue/2}, 80%, 30%, 0.3)`);
      gradient.addColorStop(1, `hsla(${baseHue - hue}, 70%, 40%, 0.4)`);

      // Draw gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add subtle noise texture
      addNoiseTexture(ctx, width, height, 0.02);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Function to add subtle noise texture
  const addNoiseTexture = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    opacity: number
  ) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Only modify some pixels for a subtle effect
      if (Math.random() > 0.99) {
        const noise = Math.random() * 255 * opacity;
        data[i] = Math.min(data[i] + noise, 255); // R
        data[i + 1] = Math.min(data[i + 1] + noise, 255); // G
        data[i + 2] = Math.min(data[i + 2] + noise, 255); // B
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ filter: 'blur(60px)' }}
    />
  );
};

export default GradientBackground;