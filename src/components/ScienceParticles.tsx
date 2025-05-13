"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  type: "atom" | "dna" | "molecule" | "formula" | "beaker";
};

const icons = {
  atom: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
    </svg>
  ),
  dna: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 2h-1v4h1c1.1 0 2 .9 2 2s-.9 2-2 2h-1v4h1c1.1 0 2 .9 2 2s-.9 2-2 2h-1v4h1v2H3v-2h1v-4H3c-1.1 0-2-.9-2-2s.9-2 2-2h1V8H3c-1.1 0-2-.9-2-2s.9-2 2-2h1V2H3V0h18v2zM7 20h10v-4H7v4zm0-8h10V8H7v4z" />
    </svg>
  ),
  molecule: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M10.5 8h3M13.5 10.5L10.5 13.5" />
    </svg>
  ),
  formula: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z" />
      <path d="M8 7H6v2h2v2H6v2h2v4h2v-4h2v4h2v-4h2v-2h-2V9h2V7h-2V3h-2v4h-2V3H8v4zm4 2H8v2h4V9z" />
    </svg>
  ),
  beaker: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 3h18v4H3zm3 4v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7" />
      <path d="M9 13h6m-6 3h6" />
    </svg>
  ),
};

export default function ScienceParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const windowWidth = window.innerWidth;
      const newParticles: Particle[] = [];
      const types: Array<keyof typeof icons> = [
        "atom",
        "dna",
        "molecule",
        "formula",
        "beaker",
      ];

      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * windowWidth,
          y: Math.random() * -500 - 50, // Start above the viewport
          size: Math.random() * 15 + 10,
          rotation: Math.random() * 360,
          duration: Math.random() * 15 + 10,
          delay: Math.random() * 5,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    window.addEventListener("resize", createParticles);
    return () => window.removeEventListener("resize", createParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-white opacity-20"
          initial={{
            x: particle.x,
            y: particle.y,
            rotate: particle.rotation,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: particle.rotation + 360,
            opacity: [0, 0.15, 0.15, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: particle.size, height: particle.size }}
        >
          {icons[particle.type]}
        </motion.div>
      ))}
    </div>
  );
}
