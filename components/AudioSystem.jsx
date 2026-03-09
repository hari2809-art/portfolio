"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AudioSystem = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // We can't auto-play audio in modern browsers without user interaction.
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <div className="fixed top-24 right-6 z-50 flex items-center gap-4">
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="hidden md:block glass px-4 py-2 rounded-full text-[10px] font-black tracking-widest text-accent uppercase"
          >
            Ambient Audio Ready
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleAudio}
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${isPlaying ? "bg-accent text-white shadow-[0_0_15px_rgba(255,79,203,0.5)]" : "glass text-stone-400 hover:text-white"}`}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {/* Hidden Audio Element - Using a placeholder ambient sound if available or just a logic container */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder ambient track
      />
    </div>
  );
};

export default AudioSystem;
