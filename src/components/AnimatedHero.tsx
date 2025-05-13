"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScienceParticles from "./ScienceParticles";

export default function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background glow effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500 blur-[150px] opacity-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Science particles */}
      <ScienceParticles />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-bold leading-tight md:text-6xl"
            variants={itemVariants}
          >
            <span className="inline-block">ScientiveDAO</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl opacity-90"
            variants={itemVariants}
          >
            Financiamento científico descentralizado, anônimo e transparente
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                asChild
                size="lg"
                className="bg-white text-indigo-900 hover:bg-gray-200 hover:text-indigo-900 transition-all duration-300"
              >
                <Link href="/register">Submeter Proposta</Link>
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-indigo-900 border-white hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <Link href="#saiba-mais">Saiba Mais</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-white/50"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
}
