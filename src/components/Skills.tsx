import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: ['C', 'C++', 'Python', 'Java'],
    color: 'from-neon-cyan to-neon-blue',
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    skills: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-neon-purple to-neon-pink',
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB'],
    color: 'from-neon-blue to-neon-cyan',
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
    color: 'from-neon-pink to-neon-purple',
  },
  {
    title: 'Core CS Concepts',
    icon: '🧠',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'],
    color: 'from-neon-cyan to-neon-purple',
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-foreground/80 font-medium max-w-2xl mx-auto">
            Technologies and concepts I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className={`group relative ${
                categoryIndex === skillCategories.length - 1
                  ? 'md:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              <div className="glass-card h-full p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="tech-tag cursor-default font-medium text-xs"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Gradient line at bottom */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: 'Languages', value: '4+' },
            { label: 'Cups of Coffee', value: '∞' },
            { label: 'Bugs Fixed', value: '404' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 glass-card rounded-xl border border-primary/30 bg-card/90 shadow-lg"
            >
              <span className="font-display text-4xl md:text-5xl font-extrabold gradient-text">
                {stat.value}
              </span>
              <p className="text-foreground/90 font-medium text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;