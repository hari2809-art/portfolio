"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="subheading">The Vision</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 mt-2">
            Pioneering the <br />
            <span className="glow-text">Future of Intelligence</span>
          </h2>
          <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
            <p>
              I am <span className="text-white font-bold">Harinath Gurram</span>, a dedicated Artificial Intelligence & Machine Learning student fueled by a passion for solving complex, real-world puzzles through data-driven innovation.
            </p>
            <p>
              Currently pursuing my B.Tech at Annamacharya Institute of Technology and Sciences, I specialize in architecting intelligent systems that bridge the gap between abstract algorithms and practical, scalable software solutions.
            </p>
            <p>
              My philosophy is simple: build with precision, analyze with depth, and evolve with curiosity. Whether it's optimizing a neural network or refining a user interface, I strive for excellence in every line of code.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "backOut" }}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[100px] animate-pulse"></div>
          <div className="relative glass p-12 rounded-[40px] border-accent/20 group hover:border-accent/50 transition-colors">
             <div className="text-center">
                <span className="text-8xl md:text-[12rem] font-black text-white/5 select-none transition-transform duration-500 group-hover:scale-110 block">
                  AI
                </span>
                <p className="font-display font-black text-xl tracking-[0.5em] mt-4 text-accent">HARINATH</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
