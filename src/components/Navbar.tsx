 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Menu, X } from 'lucide-react';
 
 const navItems = [
   { name: 'Home', href: '#home' },
   { name: 'About', href: '#about' },
   { name: 'Skills', href: '#skills' },
   { name: 'Projects', href: '#projects' },
   { name: 'Contact', href: '#contact' },
 ];
 
 const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeSection, setActiveSection] = useState('home');
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
 
       // Update active section based on scroll position
       const sections = navItems.map(item => item.href.slice(1));
       for (const section of sections.reverse()) {
         const element = document.getElementById(section);
         if (element) {
           const rect = element.getBoundingClientRect();
           if (rect.top <= 100) {
             setActiveSection(section);
             break;
           }
         }
       }
     };
 
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   const handleNavClick = (href: string) => {
     setIsMobileMenuOpen(false);
     const element = document.querySelector(href);
     element?.scrollIntoView({ behavior: 'smooth' });
   };
 
   return (
     <>
       <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.5 }}
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           isScrolled ? 'py-3' : 'py-5'
         }`}
       >
         <div className="container mx-auto px-4">
           <div
             className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
               isScrolled
                 ? 'glass-card'
                 : 'bg-transparent'
             }`}
           >
             {/* Logo */}
             <motion.a
               href="#home"
               onClick={(e) => {
                 e.preventDefault();
                 handleNavClick('#home');
               }}
               className="font-display text-xl font-bold gradient-text"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               KS<span className="text-primary">.</span>
             </motion.a>
 
             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center gap-1">
               {navItems.map((item) => (
                 <motion.a
                   key={item.name}
                   href={item.href}
                   onClick={(e) => {
                     e.preventDefault();
                     handleNavClick(item.href);
                   }}
                   className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                     activeSection === item.href.slice(1)
                       ? 'text-primary'
                       : 'text-muted-foreground hover:text-foreground'
                   }`}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   {item.name}
                   {activeSection === item.href.slice(1) && (
                     <motion.span
                       layoutId="activeSection"
                       className="absolute inset-0 rounded-full bg-primary/10 -z-10"
                       transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                     />
                   )}
                 </motion.a>
               ))}
             </div>
 
             {/* CTA Button */}
             <motion.a
               href="#contact"
               onClick={(e) => {
                 e.preventDefault();
                 handleNavClick('#contact');
               }}
               className="hidden md:block px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               Let's Talk
             </motion.a>
 
             {/* Mobile Menu Button */}
             <motion.button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="md:hidden p-2 text-foreground"
               whileTap={{ scale: 0.9 }}
             >
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </motion.button>
           </div>
         </div>
       </motion.nav>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.2 }}
             className="fixed inset-0 z-40 pt-24 px-4 md:hidden"
           >
             <div className="glass-card rounded-2xl p-6">
               <div className="flex flex-col gap-2">
                 {navItems.map((item, index) => (
                   <motion.a
                     key={item.name}
                     href={item.href}
                     onClick={(e) => {
                       e.preventDefault();
                       handleNavClick(item.href);
                     }}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: index * 0.1 }}
                     className={`px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                       activeSection === item.href.slice(1)
                         ? 'text-primary bg-primary/10'
                         : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                     }`}
                   >
                     {item.name}
                   </motion.a>
                 ))}
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };
 
 export default Navbar;