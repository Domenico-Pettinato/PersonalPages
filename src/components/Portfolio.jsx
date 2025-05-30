import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    title: "Progetto 1",
    description: "Descrizione dettagliata del progetto e delle sue funzionalità principali...",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "web"
  },
  {
    id: 2,
    title: "Progetto 2",
    description: "Descrizione dettagliata del progetto e delle sue funzionalità principali...",
    tech: ["Figma", "Photoshop"],
    category: "design"
  },
  {
    id: 3,
    title: "Progetto 3",
    description: "Descrizione dettagliata del progetto e delle sue funzionalità principali...",
    tech: ["React", "Node.js"],
    category: "app"
  },
  {
    id: 4,
    title: "Progetto 4",
    description: "Descrizione dettagliata del progetto e delle sue funzionalità principali...",
    tech: ["WordPress", "PHP"],
    category: "web"
  },
  {
    id: 5,
    title: "Progetto 5",
    description: "Descrizione dettagliata del progetto e delle sue funzionalità principali...",
    tech: ["Illustrator", "InDesign"],
    category: "design"
  },
  {
    id: 6,
    title: "Progetto 6",
    description: "Descrizione dettagliata del progetto e delle sue funzionalità principali...",
    tech: ["Vue.js", "Firebase"],
    category: "app"
  }
];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-opacity-70 bg-slate-800 rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 border border-slate-700"
    >
      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-500 bg-opacity-20 text-blue-300 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        I Miei Progetti
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;