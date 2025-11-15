"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Butterfly() {
  const wingControls = useAnimation();
  const pearlControls = useAnimation();

  useEffect(() => {
    // Flap wings continuously
    wingControls.start({
      rotate: [10, -10, 10],
      transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
    });

    // Pearl shimmer
    pearlControls.start({
      opacity: [0.5, 1, 0.5],
      y: [0, -5, 0],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    });
  }, []);

  return (
    <div className="relative w-40 h-40">
      {/* Left Wing */}
      <motion.div
        animate={wingControls}
        className="absolute top-0 left-0 w-20 h-40 origin-right bg-gradient-to-b from-purple-400 to-pink-400 rounded-l-full filter blur-sm"
      />
      {/* Right Wing */}
      <motion.div
        animate={wingControls}
        className="absolute top-0 right-0 w-20 h-40 origin-left bg-gradient-to-b from-purple-400 to-pink-400 rounded-r-full filter blur-sm"
      />
      {/* Body */}
      <div className="absolute top-1/2 left-1/2 w-4 h-16 -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-full z-10" />

      {/* Pearls */}
      <motion.div
        animate={pearlControls}
        className="absolute w-4 h-4 bg-white rounded-full top-1/3 left-1/2 shadow-lg"
      />
      <motion.div
        animate={pearlControls}
        className="absolute w-3 h-3 bg-white rounded-full top-2/3 left-1/3 shadow-lg"
      />
      <motion.div
        animate={pearlControls}
        className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-2/3 shadow-lg"
      />
    </div>
  );
}
