"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-background via-background/85 to-background/60">
      {" "}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
        >
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          <span className="text-sm font-medium text-foreground">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={fadeUp} className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Beautiful Interfaces
            </span>{" "}
            with Code
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer passionate about creating pixel-perfect,
            accessible, and performant web experiences. Specializing in modern
            React, TypeScript, and cloud technologies.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View My Work
            <ArrowRight size={20} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-foreground font-semibold hover:bg-secondary/80 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={fadeIn} className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-accent"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"> </path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
