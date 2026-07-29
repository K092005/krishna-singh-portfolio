import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Folder, Clock } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  date?: string;
}

const projects: Project[] = [
  {
    title: 'AI-Powered Travel Assistant',
    description:
      'Agentic AI system that autonomously plans personalized trips using multi-agent collaboration. Agents handle preference gathering, destination research, weather analysis, itinerary generation, and intelligent decision-making — all coordinated through a central module. Integrates Gemini API for reasoning, Serper for real-time travel data, Weather API for forecasts, and Unsplash for destination visuals.',
    techStack: ['Python', 'Streamlit', 'Gemini API', 'Serper API', 'Weather API', 'Unsplash API'],
    githubUrl: 'https://github.com/K092005',
    featured: true,
  },
  {
    title: 'MediTrack – Clinic Management System',
    description:
      'A full-stack clinic management platform serving 100+ users with secure role-based workflows for Admin, Doctor, and Patient access. Improved database efficiency by 40% through query optimization, schema restructuring, and indexed joins. Features scalable REST APIs with JWT authentication.',
    techStack: ['React.js', 'Flask', 'MySQL', 'JWT', 'REST API'],
    githubUrl: 'https://github.com/K092005',
    date: 'Jan 2026',
  },
  {
    title: 'Pune Metro Ticketing System',
    description:
      'Full-stack web app for Pune Metro ticket booking with secure authentication, stored procedures, triggers, and cursors for data integrity. Uses transaction control commands to handle parallel booking processes on a normalized MySQL schema.',
    techStack: ['React.js', 'Flask', 'MySQL', 'Python'],
    githubUrl: 'https://github.com/K092005',
  },
  {
    title: 'EduSync – Student Collaboration Platform',
    description:
      'Java-based multi-user collaboration platform supporting 50+ concurrent users. Built with a modular OOP architecture for maintainability and scalability. Includes thorough JDBC-based database operations, functional testing, and debugging across all application modules.',
    techStack: ['Java', 'JavaFX', 'JDBC', 'MySQL'],
    githubUrl: 'https://github.com/K092005',
    date: 'Aug 2025',
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
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Projects Grid or Empty State */}
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="relative h-full glass-card rounded-2xl overflow-hidden">
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 animate-shimmer" />
                  </div>

                  <div className="relative p-6 md:p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <Folder className="w-6 h-6 text-primary" />
                        </div>
                        {project.date && (
                          <span className="text-xs font-mono text-primary/70 border border-primary/20 px-2 py-1 rounded-full">
                            {project.date}
                          </span>
                        )}
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

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* ── Empty state shown until you add real projects ── */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-24 glass-card rounded-2xl border border-primary/10"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary/30 animate-ping" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-muted-foreground text-center max-w-sm text-sm">
              I'm currently curating my best work. Check back soon — exciting projects are on the way!
            </p>
            <p className="font-mono text-xs text-primary/60 mt-4">
            </p>
          </motion.div>
        )}

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