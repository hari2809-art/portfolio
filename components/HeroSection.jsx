"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene3D from "./3d/Scene3D";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(taglineRef.current, {
        opacity: 0,
        duration: 1.5,
        delay: 1.2,
      });

      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative w-full h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      <div className="section-container relative z-10 pointer-events-none">
        <div className="max-w-4xl">
          <p ref={subtitleRef} className="subheading mb-4">
            Hello, I&apos;m
          </p>
          <h1 ref={titleRef} className="heading-1 mb-8">
            Harinath <br />
            <span className="glow-text">Gurram</span>
          </h1>
          <p ref={taglineRef} className="text-xl md:text-2xl text-stone-400 font-medium mb-10 max-w-2xl leading-relaxed">
            Artificial Intelligence & Machine Learning Student. <br />
            Aspiring Software Developer building intelligent systems using AI, data, and modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-6 pointer-events-auto">
            <a href="#projects" className="px-8 py-4 bg-accent hover:bg-accent-glow text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,79,203,0.4)] hover:scale-105 active:scale-95">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator flex flex-col items-center opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent"></div>
        <span className="text-[10px] tracking-[0.3em] font-bold mt-2 uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
