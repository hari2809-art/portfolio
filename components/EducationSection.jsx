"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EDUCATION = [
  {
    degree: "B.Tech – Artificial Intelligence & Machine Learning",
    institution: "Annamacharya Institute of Technology and Sciences",
    period: "2022 – 2026",
    details: "Focus on Intelligent Systems, Advanced Algorithms, and Data Engineering.",
    result: "CGPA: 8.52"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "MJPA PBCWR College",
    period: "2020 – 2022",
    details: "Mathematics, Physics, Chemistry concentration.",
    result: "95.2%"
  },
  {
    degree: "SSC",
    institution: "M.H.S 2nd High School",
    period: "2019 – 2020",
    details: "Foundation in basic sciences and mathematics.",
    result: "GPA: 9.7"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <div className="text-center mb-16">
        <span className="subheading">Roots</span>
        <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
          Educational <span className="glow-text">Path</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/10 to-transparent hidden md:block"></div>

        <div className="space-y-12">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-0 md:pl-20 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[20px] top-2 w-6 h-6 rounded-full bg-stone-900 border-2 border-accent hidden md:flex items-center justify-center group-hover:scale-125 group-hover:bg-accent transition-all duration-300 z-10 shadow-[0_0_15px_rgba(255,79,203,0.3)]">
                <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="glass p-8 rounded-[35px] border-white/5 hover:border-accent/40 transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-xl font-black">{edu.degree}</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-accent/5 text-accent rounded-full text-[10px] font-black tracking-widest uppercase border border-accent/20">
                    <Calendar size={12} /> {edu.period}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-stone-500 font-bold mb-4">
                  <GraduationCap size={16} /> {edu.institution}
                </div>
                <p className="text-stone-400 mb-6 text-sm">{edu.details}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900/50 rounded-2xl border border-white/5">
                  <Award size={16} className="text-accent" />
                  <span className="text-white font-black text-sm">{edu.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
