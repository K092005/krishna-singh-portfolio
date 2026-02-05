 import ParticleBackground from '@/components/ParticleBackground';
 import Navbar from '@/components/Navbar';
 import Hero from '@/components/Hero';
 import About from '@/components/About';
 import Skills from '@/components/Skills';
 import Projects from '@/components/Projects';
 import Contact from '@/components/Contact';
 import Footer from '@/components/Footer';
 import EasterEggs from '@/components/EasterEggs';
 
 const Index = () => {
   return (
     <div className="relative min-h-screen bg-background">
       {/* Particle Background */}
       <ParticleBackground />
       
       {/* Navigation */}
       <Navbar />
       
       {/* Main Content */}
       <main>
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Contact />
       </main>
       
       {/* Footer */}
       <Footer />
       
       {/* Easter Eggs */}
       <EasterEggs />
     </div>
   );
 };
 
 export default Index;
