"use client";

import { motion } from "framer-motion";

const GitHubStats = () => {
  const username = "hari2809-art";
  const theme = "radical";

  return (
    <section id="github-stats" className="section-container">
      <div className="text-center mb-16">
        <span className="subheading">Velocity</span>
        <h2 className="text-4xl md:text-6xl font-display font-black mb-6">
          GitHub <span className="glow-text">Insights</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-4 rounded-[30px] border-white/5 overflow-hidden flex items-center justify-center min-h-[200px]"
        >
          <img 
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=FF4FCB&text_color=94a3b8&icon_color=FF4FCB`} 
            alt="GitHub Stats" 
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="glass p-4 rounded-[30px] border-white/5 overflow-hidden flex items-center justify-center min-h-[200px]"
        >
          <img 
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&bg_color=0D1117&title_color=FF4FCB&text_color=94a3b8`} 
            alt="Top Languages" 
            className="w-full max-w-md h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-4 rounded-[30px] border-white/5 overflow-hidden flex items-center justify-center md:col-span-2 min-h-[200px]"
        >
          <img 
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=0D1117&sideNums=FF4FCB&sideTitle=FF4FCB&fire=FF4FCB&currStreakNum=FF4FCB&stroke=FF4FCB&currStreakLabel=FF4FCB`} 
            alt="GitHub Streak" 
            className="w-full max-w-xl h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
