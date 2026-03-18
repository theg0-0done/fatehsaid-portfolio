import React, { useEffect, useRef } from 'react';
import mapData from '../assets/points.json';

interface Point {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      rad: 120, // repulsion radius
      force: 25 // repulsion strength
    };

    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let parallaxX = 0;
    let parallaxY = 0;

    let particles: Point[] = [];

    const initParticles = () => {
      particles = [];
      // Adjust scale to fit the map nicely
      // The map width is 3578, we scale it down to fit in viewport with some padding.
      const paddingX = width > 768 ? 100 : 20; 
      const paddingY = 100;
      
      const scaleX = (width - paddingX * 2) / mapData.width;
      const scaleY = (height - paddingY * 2) / mapData.height;
      const scale = Math.min(scaleX, scaleY) * 0.9; 

      const offsetX = (width - mapData.width * scale) / 2;
      const offsetY = (height - mapData.height * scale) / 2;

      for (let i = 0; i < mapData.points.length; i += 2) {
        const bx = mapData.points[i] * scale + offsetX;
        const by = mapData.points[i + 1] * scale + offsetY;
        particles.push({
          x: bx,
          y: by,
          baseX: bx,
          baseY: by,
          vx: 0,
          vy: 0
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Parallax easing
      if (mouse.x !== -1000) {
        targetParallaxX = (mouse.x - width / 2) * -0.02; // subtle movement
        targetParallaxY = (mouse.y - height / 2) * -0.02;
      } else {
        targetParallaxX = 0;
        targetParallaxY = 0;
      }
      
      parallaxX += (targetParallaxX - parallaxX) * 0.1;
      parallaxY += (targetParallaxY - parallaxY) * 0.1;

      ctx.save();
      ctx.translate(parallaxX, parallaxY);

      // For performance, we use one big path to draw all dots.
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';

      const dotRadius = 1.3;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Adjusted mouse relative to parallax
        const dx = (mouse.x - parallaxX) - p.baseX;
        const dy = (mouse.y - parallaxY) - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = p.baseX;
        let targetY = p.baseY;

        // Apply repulsion
        if (dist < mouse.rad) {
          const force = (mouse.rad - dist) / mouse.rad;
          const angle = Math.atan2(dy, dx);
          // Push away from cursor
          targetX -= Math.cos(angle) * force * mouse.force;
          targetY -= Math.sin(angle) * force * mouse.force;
        }

        // Spring easing towards target
        p.vx += (targetX - p.x) * 0.15;
        p.vy += (targetY - p.y) * 0.15;

        // Dampening (friction)
        p.vx *= 0.8;
        p.vy *= 0.8;

        p.x += p.vx;
        p.y += p.vy;

        // Using rect instead of arc is slightly faster and visually identically tiny
        ctx.moveTo(p.x, p.y);
        // ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.rect(p.x - dotRadius, p.y - dotRadius, dotRadius * 2, dotRadius * 2);
      }
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    handleResize(); // Set initial size and points setup

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    render(); // Start loop

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#05060A] overflow-hidden flex items-center justify-start font-sans">
      {/* Canvas Layer - Subtly drop shadow on the canvas for glow */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.4))' }}
      />
      
      {/* Interactive Overlay Content Layer */}
      <div className="relative z-10 px-4 mx-auto pointer-events-none">
        <h1 className="font-boldonse text-5xl md:text-8xl text-white mb-6 tracking-tight">
          Hi, It's <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-semibold">SAID</span><br/>
          A <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-semibold">Full-stuck Developer</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;