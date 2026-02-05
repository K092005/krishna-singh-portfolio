 import { motion } from 'framer-motion';
 import { Heart, Coffee } from 'lucide-react';
 
 const Footer = () => {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="py-8 border-t border-border/50">
       <div className="container mx-auto px-4">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           {/* Logo */}
           <motion.a
             href="#home"
             className="font-display text-xl font-bold gradient-text"
             whileHover={{ scale: 1.05 }}
           >
             KS<span className="text-primary">.</span>
           </motion.a>
 
           {/* Copyright */}
           <div className="flex items-center gap-1 text-sm text-muted-foreground">
             <span>© {currentYear} Krishna Singh. Built with</span>
             <motion.span
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 1, repeat: Infinity }}
             >
               <Heart className="w-4 h-4 text-destructive inline" />
             </motion.span>
             <span>&</span>
             <Coffee className="w-4 h-4 inline" />
           </div>
 
           {/* Fun message */}
           <p className="text-xs text-muted-foreground font-mono">
             // 404: Sleep Not Found
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;