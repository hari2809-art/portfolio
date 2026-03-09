"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { useState, useRef } from "react";

const PROJECTS = [
  {
    title: "Zomato Review Analysis",
    description: "NLP-based sentiment classification of restaurant reviews achieving 87% accuracy using Random Forest and NLTK.",
    tech: ["Python", "NLTK", "Scikit-Learn"],
    github: "https://github.com/hari2809-art/Zomato-Project",
    image: "/zomato-preview.png"
  },
  {
    title: "Netflix Trend Prediction",
    description: "Full-scale data exploration and content trend prediction using XGBoost and optimized clustering models.",
    tech: ["Python", "XGBoost", "Seaborn"],
    github: "https://github.com/hari2809-art/Netflix-Clustering",
    image: "/netflix-preview.png"
  },
  {
    title: "Music Store Analytics",
    description: "Deep relational SQL analysis of the iTunes/Chinook dataset, exploring artist performance, album sales, and complex invoicing systems.",
    tech: ["SQL", "Relational DB", "Excel"],
    github: "https://github.com/hari2809-art/Itunes-project",
    image: "/music-preview.png"
  },
  {
    title: "iTunes Data BI",
    description: "Business intelligence dashboarding for digital music retail, visualizing revenue patterns across global invoices through modular SQL architecture.",
    tech: ["SQL", "Data Analysis"],
    github: "https://github.com/hari2809-art/Itunes-project",
    image: "/itunes-preview.png"
  }
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotX((y - centerY) / 10);
    setRotY(-(x - centerX) / 10);
  };

  const resetRotation = () => {
    setRotX(0);
    setRotY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      style={{
        perspective: "1000px",
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{ rotateX: rotX, rotateY: rotY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass p-6 rounded-[40px] border-white/5 group-hover:border-accent/30 flex flex-col h-full transform-gpu transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
      >
        <div className="relative h-56 w-full rounded-[30px] overflow-hidden mb-6 bg-stone-950 border border-white/5">
           <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>
           <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <h3 className="text-2xl font-display font-black mb-3">{project.title}</h3>
        <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-accent">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={project.github} target="_blank" className="flex-1 py-3 glass flex items-center justify-center gap-2 rounded-full font-bold hover:bg-accent hover:text-white transition-all duration-300">
            <Github size={18} /> GITHUB
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="subheading">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-2">
            Selected <span className="glow-text">Research</span>
          </h2>
        </div>
        <p className="text-stone-500 text-sm tracking-widest font-bold uppercase mt-4 md:mt-0">
          Intelligent Systems • {PROJECTS.length} Items
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
