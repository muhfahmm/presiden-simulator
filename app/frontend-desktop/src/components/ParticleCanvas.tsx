"use client"

import { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 4 + 1;
        
        // Colors corresponding to a rich/modern game palette (Red, Gold, Soft yellow)
        const colors = [
          'rgba(239, 68, 68, 0.4)',  // Red
          'rgba(245, 158, 11, 0.3)', // Amber
          'rgba(252, 211, 77, 0.2)', // Yellow
          'rgba(255, 255, 255, 0.1)' // White glint
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
          this.x = 0;
          this.vx = Math.abs(this.vx);
        } else if (this.x > canvas!.width) {
          this.x = canvas!.width;
          this.vx = -Math.abs(this.vx);
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy = Math.abs(this.vy);
        } else if (this.y > canvas!.height) {
          this.y = canvas!.height;
          this.vy = -Math.abs(this.vy);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    const particles: Particle[] = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 100);

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      // Draw general ambient gradient behind particles
      const gradient = ctx.createRadialGradient(
        canvas!.width / 2, canvas!.height / 2, 0,
        canvas!.width / 2, canvas!.height / 2, canvas!.width
      );
      gradient.addColorStop(0, '#04040a');
      gradient.addColorStop(1, '#000000');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas!.width, canvas!.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw subtle connective lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />;
}
