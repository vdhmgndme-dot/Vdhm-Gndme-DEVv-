import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Initializing Developer Identity...",
    "Compiling Interface Modules...",
    "Loading Experience...",
    "Preparing High-Performance Hub...",
    "Abdullah Al Mohit • Ready"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 5;
        const next = Math.min(prev + step, 100);
        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 85) setStatusIndex(4);
    else if (progress > 60) setStatusIndex(3);
    else if (progress > 35) setStatusIndex(2);
    else if (progress > 15) setStatusIndex(1);
    else setStatusIndex(0);
  }, [progress]);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070a12] text-white select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/10 blur-[90px] rounded-full pointer-events-none" />
      
      {/* Subtle futuristic cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Monogram Logo Reveal */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900/90 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.25)]">
            {/* Spinning decorative ring */}
            <div className="absolute -inset-1 rounded-2xl border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '14s' }} />
            
            <span className="font-mono text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              AM
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-cyan-400/80"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Developer Portfolio</span>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-xl font-bold tracking-wider text-slate-100 mb-1 uppercase font-display"
        >
          Abdullah Al Mohit
        </motion.h1>

        <p className="text-xs text-slate-400 mb-8 font-mono">
          Web Developer • Coder • Young Software Developer
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-800/80 rounded-full h-1.5 p-0.5 border border-slate-700/60 shadow-inner mb-4 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 relative"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          >
            {/* Shimmer light effect inside bar */}
            <div className="absolute inset-0 bg-white/30 animate-shimmer" />
          </motion.div>
        </div>

        {/* Status text & percentage */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-400">
          <AnimatePresence mode="wait">
            <motion.span
              key={statusIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5 text-cyan-400 truncate max-w-[210px]"
            >
              <Terminal className="w-3 h-3 shrink-0" />
              <span className="truncate">{statuses[statusIndex]}</span>
            </motion.span>
          </AnimatePresence>

          <span className="font-semibold text-slate-300 ml-2">
            {progress}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};
