"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useSound from "use-sound";

const Skiper25 = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="text-foreground absolute top-[20%] grid content-start justify-items-center gap-6 py-20 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          Click to play the music
        </span>
      </div>
      <MusicToggleButton />
    </div>
  );
};

export { Skiper25 };

export const MusicToggleButton = () => {
  const bars = 5;

  const getRandomHeights = () => {
    return Array.from({ length: bars }, () => Math.random() * 0.8 + 0.2);
  };

  const [heights, setHeights] = useState(getRandomHeights());

  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause, sound }] = useSound("/audio/v1.mp3", {
    loop: true,
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),
    onpause: () => setIsPlaying(false),
    onstop: () => setIsPlaying(false),
    soundEnabled: true,
  });

  useEffect(() => {
    if (isPlaying) {
      const waveformIntervalId = setInterval(() => {
        setHeights(getRandomHeights());
      }, 100);

      return () => {
        clearInterval(waveformIntervalId);
      };
    }
    setHeights(Array(bars).fill(0.1));
  }, [isPlaying]);

  const handleClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      return;
    }
    play();
    setIsPlaying(true);
  };

  return (
    <>
      <motion.div
        onClick={handleClick}
        key="audio"
        className="bg-background border cursor-pointer rounded-md px-2 py-2.5"
      >
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
          transition={{ type: "spring", bounce: 0.35 }}
          className="flex h-[18px] w-full items-center gap-1 rounded-full"
        >
          {/* Waveform visualization */}
          {heights.map((height, index) => (
            <motion.div
              key={index}
              className="bg-foreground w-[1px] rounded-full"
              initial={{ height: 1 }}
              animate={{
                height: Math.max(4, height * 14),
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};
