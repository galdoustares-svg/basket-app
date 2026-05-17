"use client";

import { motion } from "framer-motion";

const terms = [
  "CLUTCH", "CROSSOVER", "SWISH", "SLAM DUNK", "SIXTH MAN",
  "ALLEY-OOP", "FAST BREAK", "PICK & ROLL", "TRIPLE-DOUBLE", "BUZZER BEATER",
];

const items = [...terms, ...terms];

export default function BasketballMarquee() {
  return (
    <div
      className="overflow-hidden border-t border-violet-500/10 py-3 select-none"
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {items.map((term, i) => (
          <span
            key={i}
            className="text-[10px] font-black uppercase tracking-[0.55em] text-violet-300/20"
          >
            {term}
            <span className="mx-4 text-violet-500/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
