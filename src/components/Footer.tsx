import { motion } from 'framer-motion';

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
          <span className="text-sm text-muted-foreground">
            © {currentYear} Krishna Singh
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;