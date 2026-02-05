 import { motion, useInView } from 'framer-motion';
 import { useRef } from 'react';
 import { GraduationCap, MapPin, Calendar, Code2 } from 'lucide-react';
 
 const About = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
 
   const timelineItems = [
     {
       year: '2022',
       title: 'Started B.Tech Journey',
       description: 'Began Computer Science & Engineering at MIT WPU',
       icon: GraduationCap,
     },
     {
       year: '2023',
       title: 'Deep Dive into Web Dev',
       description: 'Mastered HTML, CSS, JavaScript and modern frameworks',
       icon: Code2,
     },
     {
       year: '2024',
       title: 'Building & Creating',
       description: 'Working on projects and strengthening core CS fundamentals',
       icon: Code2,
     },
     {
       year: '2025',
       title: 'Current Year',
       description: '3rd Year - Ready for new opportunities and challenges',
       icon: Calendar,
     },
   ];
 
   return (
     <section id="about" className="py-24 relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
       
       <div className="container mx-auto px-4" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
         >
           <span className="text-primary font-mono text-sm">{'// About Me'}</span>
           <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
             Get to Know <span className="gradient-text">Me</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             A passionate engineering student crafting digital experiences
           </p>
         </motion.div>
 
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Bio Section */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <div className="glass-card p-8 rounded-2xl">
               <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
                 Hello, I'm Krishna! 👋
               </h3>
               <div className="space-y-4 text-muted-foreground leading-relaxed">
                 <p>
                   I'm an engineering student with a deep passion for web development and 
                   core computer science concepts. Currently pursuing my B.Tech in Computer 
                   Science & Engineering, I love building efficient, scalable, and clean 
                   tech solutions.
                 </p>
                 <p>
                   My journey in tech started with curiosity about how things work on the 
                   internet. That curiosity has evolved into a commitment to creating 
                   meaningful digital experiences that make a difference.
                 </p>
                 <p className="font-mono text-sm text-primary/80">
                   // still debugging life, one commit at a time
                 </p>
               </div>
 
               {/* Quick Info Cards */}
               <div className="grid grid-cols-2 gap-4 mt-8">
                 <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                   <GraduationCap className="w-5 h-5 text-primary mb-2" />
                   <p className="text-sm text-muted-foreground">Degree</p>
                   <p className="font-medium text-foreground">B.Tech CSE</p>
                 </div>
                 <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                   <MapPin className="w-5 h-5 text-primary mb-2" />
                   <p className="text-sm text-muted-foreground">College</p>
                   <p className="font-medium text-foreground">MIT WPU</p>
                 </div>
                 <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                   <Calendar className="w-5 h-5 text-primary mb-2" />
                   <p className="text-sm text-muted-foreground">Year</p>
                   <p className="font-medium text-foreground">3rd Year</p>
                 </div>
                 <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                   <Code2 className="w-5 h-5 text-primary mb-2" />
                   <p className="text-sm text-muted-foreground">Focus</p>
                   <p className="font-medium text-foreground">Web Dev</p>
                 </div>
               </div>
             </div>
           </motion.div>
 
           {/* Timeline Section */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="relative"
           >
             <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
             
             <div className="space-y-8">
               {timelineItems.map((item, index) => (
                 <motion.div
                   key={item.year}
                   initial={{ opacity: 0, x: 20 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                   className="relative pl-20"
                 >
                   {/* Timeline dot */}
                   <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-primary" />
                   </div>
                   
                   <div className="glass-card p-5 rounded-xl hover:border-primary/30 transition-colors">
                     <span className="text-primary font-mono text-sm">{item.year}</span>
                     <h4 className="font-display text-lg font-semibold mt-1 text-foreground">
                       {item.title}
                     </h4>
                     <p className="text-muted-foreground text-sm mt-1">
                       {item.description}
                     </p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default About;