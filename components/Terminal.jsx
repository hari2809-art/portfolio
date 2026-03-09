"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, ChevronRight } from "lucide-react";

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Antigravity Neural Core [Version 2.0.12]" },
    { type: "system", content: "Connected to Operative: Harinath Gurram" },
    { type: "system", content: "Type 'help' for available commands." }
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      setHistory(prev => [...prev, { type: "user", content: input }]);
      
      let response = "";
      switch (cmd) {
        case "help":
          response = "Available commands: help, clear, about, skills, status, contact, whoami";
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "about":
          response = "Harinath Gurram: AI & ML Engineer. Specializing in intelligent systems and data-driven innovation.";
          break;
        case "skills":
          response = "Python, Java, ML, DL, NLP, SQL, React, Next.js, Three.js.";
          break;
        case "status":
          response = "System: OPTIMAL | Neural Link: STABLE | Ambience: ACTIVE";
          break;
        case "whoami":
          response = "A visionary architect of digital intelligence.";
          break;
        case "contact":
          response = "Email: gurramharinath28@gmail.com | LinkedIn: Harinath Gurram";
          break;
        default:
          response = `Command or filename not recognized: ${cmd}`;
      }
      
      setTimeout(() => {
        setHistory(prev => [...prev, { type: "system", content: response }]);
      }, 200);
      
      setInput("");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-stone-900 border border-accent/30 rounded-2xl flex items-center justify-center text-accent shadow-lg hover:bg-accent hover:text-white transition-all duration-300 z-50 overflow-hidden group"
      >
        <TerminalIcon size={24} />
        <div className="absolute inset-0 bg-accent/20 scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[400px] h-[500px] glass rounded-[30px] border-accent/20 flex flex-col z-50 overflow-hidden shadow-2xl"
          >
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-2">
                <TerminalIcon size={16} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Neural Terminal</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto font-mono text-xs space-y-3 custom-scrollbar">
              {history.map((item, i) => (
                <div key={i} className={item.type === "user" ? "text-stone-400" : "text-accent-glow"}>
                  {item.type === "user" ? "> " : ""}
                  {item.content}
                </div>
              ))}
            </div>

            <div className="p-4 bg-stone-950/50 flex items-center gap-2 border-t border-white/5">
              <ChevronRight size={14} className="text-accent" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="Enter command..."
                className="bg-transparent border-none outline-none text-white w-full text-xs font-mono"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
