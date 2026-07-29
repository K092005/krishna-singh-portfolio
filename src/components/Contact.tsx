 import { motion, useInView } from 'framer-motion';
 import { useRef, useState } from 'react';
 import { Mail, Github, Linkedin, Send, MapPin, Sparkles } from 'lucide-react';
 
 const Contact = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const [isHovered, setIsHovered] = useState(false);
 
   const socialLinks = [
     {
       name: 'GitHub',
       icon: Github,
       href: 'https://github.com/K092005',
       color: 'hover:text-foreground',
     },
     {
       name: 'LinkedIn',
       icon: Linkedin,
       href: 'https://www.linkedin.com/in/krishna-singh-20bbb6231',
       color: 'hover:text-neon-blue',
     },
     {
       name: 'Email',
       icon: Mail,
       href: 'mailto:ks6511222@gmail.com',
       color: 'hover:text-primary',
     },
   ];
 
   return (
     <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background gradient */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
       
       <div className="container mx-auto px-4 relative z-10" ref={ref}>
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
         >
           
           <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
             Let's <span className="gradient-text">Connect</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Have a project in mind or just want to chat? I'd love to hear from you.
           </p>
         </motion.div>
 
         <div className="max-w-3xl mx-auto">
           {/* Main Contact Card */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="glass-card rounded-3xl p-8 md:p-12 text-center"
           >
             {/* Icon */}
             <motion.div
               animate={{ rotate: isHovered ? 360 : 0 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
             >
               <Sparkles className="w-10 h-10 text-primary" />
             </motion.div>
 
             <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
               Ready to bring your ideas to life?
             </h3>
             <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
               Whether it's a web project, collaboration, or just a friendly conversation 
               about tech — my inbox is always open.
             </p>
 
             {/* Email Button */}
             <motion.a
               href="mailto:ks6511222@gmail.com"
               className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-lg relative overflow-hidden"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onHoverStart={() => setIsHovered(true)}
               onHoverEnd={() => setIsHovered(false)}
             >
               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
               <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
               <Mail className="relative w-5 h-5 text-primary-foreground" />
               <span className="relative text-primary-foreground font-semibold">
                 Email Me
               </span>
               <Send className="relative w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
             </motion.a>
 
             {/* Email text */}
             <p className="mt-4 text-muted-foreground font-mono text-sm">
               ks6511222@gmail.com
             </p>
           </motion.div>
 
           {/* Social Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex items-center justify-center gap-6 mt-12"
           >
             {socialLinks.map((link, index) => (
               <motion.a
                 key={link.name}
                 href={link.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 initial={{ opacity: 0, y: 20 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                 whileHover={{ scale: 1.1, y: -4 }}
                 whileTap={{ scale: 0.9 }}
                 className={`group p-4 glass-card rounded-xl text-muted-foreground ${link.color} transition-all`}
               >
                 <link.icon className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_currentColor]" />
               </motion.a>
             ))}
           </motion.div>
 
           {/* Location */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="flex items-center justify-center gap-2 mt-8 text-muted-foreground"
           >
             <MapPin className="w-4 h-4" />
             <span className="text-sm">Pune, India</span>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;