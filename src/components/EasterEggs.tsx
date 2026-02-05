 import { useEffect, useState, useCallback } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Terminal, X, Coffee, Code2, Bug } from 'lucide-react';
 
 const KONAMI_CODE = [
   'ArrowUp',
   'ArrowUp',
   'ArrowDown',
   'ArrowDown',
   'ArrowLeft',
   'ArrowRight',
   'ArrowLeft',
   'ArrowRight',
   'KeyB',
   'KeyA',
 ];
 
 const terminalLines = [
   { text: '> initializing portfolio...', delay: 0 },
   { text: '> loading awesome skills...', delay: 500 },
   { text: '> compiling dreams into code...', delay: 1000 },
   { text: '> brewing coffee... ☕', delay: 1500 },
   { text: '> fighting bugs... 🐛', delay: 2000 },
   { text: '> stack overflow saved my life 47 times', delay: 2500 },
   { text: '> ERROR: sleep.exe not found', delay: 3000 },
   { text: '> SUCCESS: You found the secret! 🎉', delay: 3500 },
   { text: '', delay: 4000 },
   { text: '> "Built with curiosity and caffeine ☕"', delay: 4500 },
   { text: '> - Krishna Singh', delay: 5000 },
 ];
 
 const EasterEggs = () => {
   const [showTerminal, setShowTerminal] = useState(false);
   const [showSecret, setShowSecret] = useState(false);
   const [konamiIndex, setKonamiIndex] = useState(0);
   const [terminalText, setTerminalText] = useState<string[]>([]);
 
   // Konami code detection
   useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
       if (e.code === KONAMI_CODE[konamiIndex]) {
         const newIndex = konamiIndex + 1;
         setKonamiIndex(newIndex);
 
         if (newIndex === KONAMI_CODE.length) {
           setShowTerminal(true);
           setKonamiIndex(0);
         }
       } else {
         setKonamiIndex(0);
       }
     };
 
     window.addEventListener('keydown', handleKeyDown);
     return () => window.removeEventListener('keydown', handleKeyDown);
   }, [konamiIndex]);
 
   // Secret keyboard shortcut (Ctrl+Shift+K)
   useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
       if (e.ctrlKey && e.shiftKey && e.code === 'KeyK') {
         e.preventDefault();
         setShowSecret(true);
         setTimeout(() => setShowSecret(false), 3000);
       }
     };
 
     window.addEventListener('keydown', handleKeyDown);
     return () => window.removeEventListener('keydown', handleKeyDown);
   }, []);
 
   // Terminal animation
   useEffect(() => {
     if (showTerminal) {
       setTerminalText([]);
       terminalLines.forEach((line, index) => {
         setTimeout(() => {
           setTerminalText((prev) => [...prev, line.text]);
         }, line.delay);
       });
     }
   }, [showTerminal]);
 
   const handleConsoleClick = useCallback(() => {
     setShowTerminal(true);
   }, []);
 
   return (
     <>
       {/* Hidden console trigger */}
       <motion.button
         onClick={handleConsoleClick}
         className="fixed bottom-4 left-4 p-2 rounded-lg text-muted-foreground/30 hover:text-muted-foreground hover:bg-muted/50 transition-all z-40"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         title="// click me"
       >
         <Terminal className="w-4 h-4" />
       </motion.button>
 
       {/* Terminal Modal */}
       <AnimatePresence>
         {showTerminal && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
             onClick={() => setShowTerminal(false)}
           >
             <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ type: 'spring', bounce: 0.3 }}
               className="w-full max-w-2xl glass-card rounded-xl overflow-hidden"
               onClick={(e) => e.stopPropagation()}
             >
               {/* Terminal Header */}
               <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-destructive" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                 </div>
                 <span className="text-sm font-mono text-muted-foreground">
                   krishna@portfolio:~
                 </span>
                 <button
                   onClick={() => setShowTerminal(false)}
                   className="p-1 rounded hover:bg-muted transition-colors"
                 >
                   <X className="w-4 h-4 text-muted-foreground" />
                 </button>
               </div>
 
               {/* Terminal Body */}
               <div className="p-4 font-mono text-sm min-h-[300px] max-h-[400px] overflow-auto">
                 {terminalText.map((line, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     className={`mb-1 ${
                       line.includes('ERROR')
                        ? 'text-red-500'
                         : line.includes('SUCCESS')
                        ? 'text-emerald-500'
                         : line.startsWith('>')
                         ? 'text-primary'
                         : 'text-muted-foreground'
                     }`}
                   >
                     {line}
                   </motion.div>
                 ))}
                 <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
               </div>
 
               {/* Fun icons */}
               <div className="flex items-center justify-center gap-4 p-4 border-t border-border text-muted-foreground">
                 <Coffee className="w-5 h-5" />
                 <Code2 className="w-5 h-5" />
                 <Bug className="w-5 h-5" />
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
 
       {/* Secret Message Toast */}
       <AnimatePresence>
         {showSecret && (
           <motion.div
             initial={{ opacity: 0, y: 50, x: '-50%' }}
             animate={{ opacity: 1, y: 0, x: '-50%' }}
             exit={{ opacity: 0, y: 50, x: '-50%' }}
             className="fixed bottom-8 left-1/2 z-50 px-6 py-4 glass-card rounded-xl text-center"
           >
             <p className="font-mono text-sm text-primary">
               ✨ "Built with curiosity and caffeine ☕"
             </p>
             <p className="text-xs text-muted-foreground mt-1">
               You found the secret! (Ctrl+Shift+K)
             </p>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };
 
 export default EasterEggs;