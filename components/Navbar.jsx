"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glass" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,79,203,0.5)]">
            <Terminal size={20} className="text-white" />
          </div>
          <span className="font-display font-black text-xl tracking-tighter uppercase">HG.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase text-stone-400 hover:text-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:gurramharinath28@gmail.com"
            className="px-6 py-2 bg-accent/10 border border-accent/30 text-accent font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full h-[100vh] glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-display font-black tracking-tighter uppercase hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:gurramharinath28@gmail.com"
              className="mt-4 px-10 py-4 bg-accent text-white font-black rounded-full shadow-[0_0_20px_rgba(255,79,203,0.4)]"
              onClick={() => setIsOpen(false)}
            >
              GET IN TOUCH
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
