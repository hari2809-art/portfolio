"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Tata Data Analytics Virtual Job Simulation",
    company: "Forage",
    period: "2024",
    highlights: [
      "Conducted thorough data cleaning and preprocessing on complex datasets.",
      "Performed exploratory data analysis to identify key business patterns.",
      "Derived actionable insights for enterprise strategic decision making.",
      "Presented data-driven recommendations in simulated professional environments."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="subheading">Career Track</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-2">
            Professional <span className="glow-text">Impact</span>
          </h2>
        </div>
      </div>

      <div className="max-w-4xl">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] border-white/5 hover:border-accent/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-black mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 text-accent font-bold tracking-widest text-sm uppercase">
                  <Briefcase size={16} /> {exp.company}
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-stone-400 font-bold text-xs">
                <Calendar size={14} /> {exp.period}
              </div>
            </div>

            <ul className="space-y-4">
              {exp.highlights.map((h, index) => (
                <li key={index} className="flex gap-4 items-start text-stone-400 group">
                  <div className="mt-1">
                    <CheckCircle2 size={18} className="text-accent group-hover:scale-125 transition-transform" />
                  </div>
                  <p className="leading-relaxed group-hover:text-stone-300 transition-colors">{h}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
