 import { motion } from 'framer-motion';
 import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
 import { useEffect, useState } from 'react';
 
 const Hero = () => {
   const [displayText, setDisplayText] = useState('');
   const fullText = 'Web Developer | CSE Student | Tech Enthusiast';
   const [showCursor, setShowCursor] = useState(true);
 
   useEffect(() => {
     let index = 0;
     const typingInterval = setInterval(() => {
       if (index <= fullText.length) {
         setDisplayText(fullText.slice(0, index));
         index++;
       } else {
         clearInterval(typingInterval);
         // Blinking cursor after typing
         const cursorInterval = setInterval(() => {
           setShowCursor((prev) => !prev);
         }, 500);
         return () => clearInterval(cursorInterval);
       }
     }, 80);
 
     return () => clearInterval(typingInterval);
   }, []);
 
   const scrollToSection = (id: string) => {
     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
   };
 
   return (
     <section
       id="home"
       className="relative min-h-screen flex items-center justify-center overflow-hidden"
     >
       {/* Grid Background */}
       <div className="absolute inset-0 grid-pattern opacity-30" />
       
       {/* Radial gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
       
       {/* Floating geometric shapes */}
       <motion.div
         className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
         animate={{
           scale: [1, 1.2, 1],
           opacity: [0.3, 0.5, 0.3],
         }}
         transition={{ duration: 8, repeat: Infinity }}
       />
       <motion.div
         className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
         animate={{
           scale: [1.2, 1, 1.2],
           opacity: [0.3, 0.5, 0.3],
         }}
         transition={{ duration: 10, repeat: Infinity }}
       />
 
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
           {/* Greeting */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="text-primary font-mono text-sm md:text-base mb-4"
           >
             {'<Hello World />'}
           </motion.p>
 
           {/* Name */}
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
           >
             <span className="text-foreground">I'm </span>
             <span className="gradient-text neon-glow">Krishna Singh</span>
           </motion.h1>
 
           {/* Typing Animation */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-xl md:text-2xl text-muted-foreground mb-8 h-8 font-mono"
           >
             <span>{displayText}</span>
             <span
               className={`inline-block w-0.5 h-6 ml-1 bg-primary transition-opacity ${
                 showCursor ? 'opacity-100' : 'opacity-0'
               }`}
             />
           </motion.div>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
           >
             <motion.button
               onClick={() => scrollToSection('projects')}
               className="group relative px-8 py-4 rounded-full font-medium overflow-hidden"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
               <span className="relative text-primary-foreground font-semibold">
                 View Projects
               </span>
             </motion.button>
 
             <motion.button
               onClick={() => scrollToSection('contact')}
               className="group px-8 py-4 rounded-full font-medium border border-primary/50 text-foreground hover:border-primary hover:bg-primary/5 transition-all"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               Contact Me
             </motion.button>
           </motion.div>
 
           {/* Social Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex items-center justify-center gap-6"
           >
             {[
               { icon: Github, href: 'https://github.com/K092005', label: 'GitHub' },
               {
                 icon: Linkedin,
                 href: 'https://www.linkedin.com/in/krishna-singh-20bbb6231',
                 label: 'LinkedIn',
               },
               { icon: Mail, href: 'mailto:ks6511222@gmail.com', label: 'Email' },
             ].map(({ icon: Icon, href, label }) => (
               <motion.a
                 key={label}
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all group"
                 whileHover={{ scale: 1.1, y: -2 }}
                 whileTap={{ scale: 0.9 }}
                 title={label}
               >
                 <Icon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_hsl(185,100%,50%)]" />
               </motion.a>
             ))}
           </motion.div>
         </div>
 
         {/* Scroll Indicator */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
           <motion.button
             onClick={() => scrollToSection('about')}
             className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             <span className="text-xs font-mono">Scroll Down</span>
             <ArrowDown className="w-4 h-4" />
           </motion.button>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Hero;