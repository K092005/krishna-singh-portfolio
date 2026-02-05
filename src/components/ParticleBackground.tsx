 import { useEffect, useRef } from 'react';
 
 interface Particle {
   x: number;
   y: number;
   vx: number;
   vy: number;
   size: number;
   opacity: number;
 }
 
 const ParticleBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const particlesRef = useRef<Particle[]>([]);
   const mouseRef = useRef({ x: 0, y: 0 });
   const animationRef = useRef<number>();
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
 
     const ctx = canvas.getContext('2d');
     if (!ctx) return;
 
     const resizeCanvas = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
 
     const initParticles = () => {
       const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
       particlesRef.current = [];
       
       for (let i = 0; i < particleCount; i++) {
         particlesRef.current.push({
           x: Math.random() * canvas.width,
           y: Math.random() * canvas.height,
           vx: (Math.random() - 0.5) * 0.5,
           vy: (Math.random() - 0.5) * 0.5,
           size: Math.random() * 2 + 1,
           opacity: Math.random() * 0.5 + 0.2,
         });
       }
     };
 
     const drawParticles = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
 
       particlesRef.current.forEach((particle, i) => {
         // Update position
         particle.x += particle.vx;
         particle.y += particle.vy;
 
         // Wrap around edges
         if (particle.x < 0) particle.x = canvas.width;
         if (particle.x > canvas.width) particle.x = 0;
         if (particle.y < 0) particle.y = canvas.height;
         if (particle.y > canvas.height) particle.y = 0;
 
         // Draw particle
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
         ctx.fillStyle = `hsla(185, 100%, 50%, ${particle.opacity})`;
         ctx.fill();
 
         // Draw connections
         particlesRef.current.slice(i + 1).forEach((other) => {
           const dx = particle.x - other.x;
           const dy = particle.y - other.y;
           const distance = Math.sqrt(dx * dx + dy * dy);
 
           if (distance < 150) {
             ctx.beginPath();
             ctx.moveTo(particle.x, particle.y);
             ctx.lineTo(other.x, other.y);
             ctx.strokeStyle = `hsla(185, 100%, 50%, ${0.1 * (1 - distance / 150)})`;
             ctx.lineWidth = 0.5;
             ctx.stroke();
           }
         });
 
         // Mouse interaction
         const dx = particle.x - mouseRef.current.x;
         const dy = particle.y - mouseRef.current.y;
         const distance = Math.sqrt(dx * dx + dy * dy);
 
         if (distance < 200) {
           ctx.beginPath();
           ctx.moveTo(particle.x, particle.y);
           ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
           ctx.strokeStyle = `hsla(270, 80%, 60%, ${0.2 * (1 - distance / 200)})`;
           ctx.lineWidth = 0.5;
           ctx.stroke();
         }
       });
 
       animationRef.current = requestAnimationFrame(drawParticles);
     };
 
     const handleMouseMove = (e: MouseEvent) => {
       mouseRef.current = { x: e.clientX, y: e.clientY };
     };
 
     resizeCanvas();
     initParticles();
     drawParticles();
 
     window.addEventListener('resize', () => {
       resizeCanvas();
       initParticles();
     });
     window.addEventListener('mousemove', handleMouseMove);
 
     return () => {
       window.removeEventListener('resize', resizeCanvas);
       window.removeEventListener('mousemove', handleMouseMove);
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
     };
   }, []);
 
   return (
     <canvas
       ref={canvasRef}
       className="fixed inset-0 pointer-events-none z-0"
       style={{ opacity: 0.6 }}
     />
   );
 };
 
 export default ParticleBackground;