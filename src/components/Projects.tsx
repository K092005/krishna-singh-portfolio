 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { Github, ExternalLink, Folder } from 'lucide-react';
 
 interface Project {
   title: string;
   description: string;
   techStack: string[];
   githubUrl: string;
   liveUrl?: string;
   featured?: boolean;
 }
 
 const projects: Project[] = [
   {
     title: 'Portfolio Website',
     description:
       'A futuristic, animated personal portfolio built with React and Framer Motion, featuring particle effects and smooth scroll animations.',
     techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
     githubUrl: 'https://github.com/K092005',
     featured: true,
   },
   {
     title: 'Weather Dashboard',
     description:
       'A responsive weather application that displays real-time weather data with beautiful visualizations and location-based forecasts.',
     techStack: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
     githubUrl: 'https://github.com/K092005',
   },
   {
     title: 'Task Manager App',
     description:
       'A full-featured task management application with CRUD operations, priority levels, and deadline tracking.',
     techStack: ['Python', 'MySQL', 'Flask'],
     githubUrl: 'https://github.com/K092005',
   },
   {
     title: 'Data Structures Visualizer',
     description:
       'Interactive visualizations of common data structures and algorithms to help understand their operations.',
     techStack: ['JavaScript', 'HTML Canvas', 'CSS'],
     githubUrl: 'https://github.com/K092005',
   },
 ];
 
 const Projects = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   return (
     <section id="projects" className="py-24 relative overflow-hidden">
       {/* Section divider */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
 
       <div className="container mx-auto px-4" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
         >
           <span className="text-primary font-mono text-sm">{'// My Work'}</span>
           <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
             Featured <span className="gradient-text">Projects</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             A selection of projects that showcase my skills and passion for building
           </p>
         </motion.div>
 
         {/* Projects Grid */}
         <div className="grid md:grid-cols-2 gap-6">
           {projects.map((project, index) => (
             <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className={`group relative ${
                 project.featured ? 'md:col-span-2' : ''
               }`}
             >
               <div className="relative h-full glass-card rounded-2xl overflow-hidden">
                 {/* Animated border gradient */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-shimmer" />
                 </div>
 
                 <div className="relative p-6 md:p-8 h-full flex flex-col">
                   {/* Header */}
                   <div className="flex items-start justify-between mb-4">
                     <div className="p-3 rounded-xl bg-primary/10">
                       <Folder className="w-6 h-6 text-primary" />
                     </div>
                     <div className="flex items-center gap-3">
                       <motion.a
                         href={project.githubUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9 }}
                       >
                         <Github className="w-5 h-5" />
                       </motion.a>
                       {project.liveUrl && (
                         <motion.a
                           href={project.liveUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.9 }}
                         >
                           <ExternalLink className="w-5 h-5" />
                         </motion.a>
                       )}
                     </div>
                   </div>
 
                   {/* Content */}
                   <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                     {project.title}
                   </h3>
                   <p className="text-muted-foreground text-sm md:text-base mb-6 flex-grow">
                     {project.description}
                   </p>
 
                   {/* Tech Stack */}
                   <div className="flex flex-wrap gap-2 mt-auto">
                     {project.techStack.map((tech) => (
                       <span key={tech} className="tech-tag text-xs">
                         {tech}
                       </span>
                     ))}
                   </div>
 
                   {/* Featured badge */}
                   {project.featured && (
                     <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">
                       Featured
                     </div>
                   )}
                 </div>
 
                 {/* Hover glow effect */}
                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent" />
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* View More on GitHub */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5, delay: 0.5 }}
           className="text-center mt-12"
         >
           <motion.a
             href="https://github.com/K092005"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-foreground hover:bg-primary/5 hover:border-primary transition-all font-medium"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             <Github className="w-5 h-5" />
             View More on GitHub
           </motion.a>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Projects;