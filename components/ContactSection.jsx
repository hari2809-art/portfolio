"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "gurramharinath28@gmail.com",
    href: "mailto:gurramharinath28@gmail.com",
    color: "bg-accent"
  },
  {
    icon: <Phone size={24} />,
    label: "Phone",
    value: "+91 8341878036",
    href: "tel:+918341878036",
    color: "bg-accent-glow"
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "Harinath Gurram",
    href: "https://www.linkedin.com/in/harinath-gurram-382b7b304/",
    color: "bg-blue-600"
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "hari2809-art",
    href: "https://github.com/hari2809-art",
    color: "bg-stone-800"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <div className="glass p-12 md:p-24 rounded-[60px] border-white/10 relative overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-glow/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="subheading">Nexus</span>
            <h2 className="text-4xl md:text-7xl font-display font-black mt-2 mb-8 leading-tight">
              Ready to build <br />
              the <span className="glow-text">Future?</span>
            </h2>
            <p className="text-stone-400 text-lg md:text-xl leading-relaxed mb-12">
              Currently seeking opportunities in AI, Machine Learning, and Software Engineering. Let's create something extraordinary together.
            </p>

            <div className="flex flex-col gap-6">
              {CONTACT_METHODS.map((method, i) => (
                <motion.a
                  key={i}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {method.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-black tracking-widest uppercase text-stone-500">{method.label}</span>
                    <span className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors">{method.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="glass p-10 rounded-[40px] border-white/5 relative bg-white/5">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
               <Send size={24} className="text-accent" /> Quick Message
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-stone-500">Full Name</label>
                <input type="text" className="w-full bg-stone-900 border border-white/5 rounded-2xl p-4 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-stone-500">Email Address</label>
                <input type="email" className="w-full bg-stone-900 border border-white/5 rounded-2xl p-4 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-stone-500">Your Message</label>
                <textarea className="w-full bg-stone-900 border border-white/5 rounded-2xl p-4 focus:border-accent/50 focus:ring-1 focus:ring-accent/50 outline-none transition-all h-32 resize-none" placeholder="I'd like to talk about..."></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-accent hover:bg-accent-glow text-white font-black rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(255,79,203,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                SEND TRANSMISSION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
