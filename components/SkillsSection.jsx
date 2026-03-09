"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const SKILLS_DATA = {
  Programming: [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "C (Basics)", level: 60 },
  ],
  "AI & ML": [
    { name: "Machine Learning", level: 80 },
    { name: "Deep Learning", level: 75 },
    { name: "NLP", level: 85 },
    { name: "Data Analysis", level: 90 },
    { name: "NumPy & Pandas", level: 95 },
  ],
  Development: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 85 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Excel & Data Prep", level: 80 },
  ],
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Programming");
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.children;
    gsap.fromTo(cards, 
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
    );
  }, [activeCategory]);

  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <span className="subheading">Expertise</span>
        <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
          Technical <span className="glow-text">Arsenal</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {Object.keys(SKILLS_DATA).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              activeCategory === category 
              ? "bg-accent text-white shadow-[0_0_20px_rgba(255,79,203,0.5)] scale-105" 
              : "glass text-stone-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA[activeCategory].map((skill) => (
          <div key={skill.name} className="glass p-8 rounded-[30px] border-white/5 hover:border-accent/40 group transition-all duration-500 hover:-translate-y-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{skill.name}</h3>
              <span className="text-sm font-black text-stone-500">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-stone-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "power4.out" }}
                className="h-full bg-accent shadow-[0_0_10px_rgba(255,79,203,0.8)]"
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
