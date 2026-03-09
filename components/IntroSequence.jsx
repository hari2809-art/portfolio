"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroSequence = () => {
  const [complete, setComplete] = useState(false);
  const [logs, setLogs] = useState([]);

  const messages = [
    "Establishing neural link...",
    "Decrypting core protocols [AITS-V.26]",
    "Initializing Three.js render engine...",
    "Synthesizing ML architecture...",
    "Optimization sequence: 87%",
    "Optimization sequence: 100%",
    "Welcome, Operative Harinath Gurram.",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < messages.length) {
        setLogs(prev => [...prev, messages[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => setComplete(true), 800);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-background flex items-center justify-center p-6"
        >
          <div className="w-full max-w-lg">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
              <span className="text-accent font-black tracking-widest text-xs uppercase">System Boot Sequence</span>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-stone-600">[{1024 + i * 4}]</span>
                  <span className={i === messages.length - 1 ? "text-accent font-bold" : "text-stone-300"}>
                    {log}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: messages.length * 0.4, ease: "linear" }}
              className="mt-12 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
            ></motion.div>
          </div>
          
          <div className="absolute bottom-12 text-stone-700 text-[10px] tracking-[0.5em] uppercase font-black">
            Antigravity Neural Core v2.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;
