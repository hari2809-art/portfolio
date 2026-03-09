"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "JavaScript Full Course",
    issuer: "GeeksforGeeks",
    duration: "8 Weeks",
    icon: <Award className="text-accent" size={32} />
  },
  {
    title: "Advanced Data Science",
    issuer: "Indo-Synchronization Pvt. Ltd",
    duration: "2 Months",
    icon: <Award className="text-accent-glow" size={32} />
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="subheading">Growth</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-2">
            Professional <span className="glow-text">Validation</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass p-10 rounded-[40px] border-white/5 hover:border-accent/40 transition-all duration-500 flex flex-col items-center text-center md:items-start md:text-left gap-6 group"
          >
            <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
              {cert.icon}
            </div>
            <div>
              <h3 className="text-2xl font-black mb-2">{cert.title}</h3>
              <p className="text-accent font-bold tracking-widest text-xs uppercase mb-4">{cert.issuer} • {cert.duration}</p>
              <div className="flex items-center gap-2 text-stone-500 text-sm font-bold">
                 <CheckCircle size={14} className="text-green-500" /> Verified Credential
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
