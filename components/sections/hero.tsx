"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer, scaleIn } from "@/lib/animations";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/85 to-background/60">
      {/* Brush-paint atmosphere (dark mode only) */}
      <div
        aria-hidden="true"
        className="brush w-[620px] h-[420px] -top-32 left-1/2 -translate-x-[62%] opacity-60 -rotate-12"
      />
      <div
        aria-hidden="true"
        className="brush brush-b w-[560px] h-[360px] top-[30%] left-1/2 -translate-x-1/2 opacity-50"
      />
      <div
        aria-hidden="true"
        className="brush w-[460px] h-[300px] top-1/3 -right-36 opacity-40 rotate-12"
      />
      {/* Shapeless atmospheric glow behind the central character (hero only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[min(90vw,760px)] -translate-x-1/2 -translate-y-1/2 bg-primary/[0.12] blur-[140px] dark:bg-primary/[0.22]"
      />
      {/* Availability — top-center, above the headline, single line */}
      <div className="absolute top-20 sm:top-24 left-0 right-0 z-20 flex justify-center px-4">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="inline-flex items-center gap-2 whitespace-nowrap px-3 py-1.5 rounded-full bg-secondary border border-border"
        >
          <span className="w-2 h-2 shrink-0 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(254,46,75,0.35)]"></span>
          <span className="text-xs font-normal text-foreground">
            Available for internships, freelance, and collaboration
          </span>
        </motion.div>
      </div>
      <motion.div
        className="relative w-full max-w-7xl mx-auto grid gap-12 lg:gap-4 xl:gap-6 items-center text-center lg:text-left lg:grid-cols-[1.05fr_1.25fr_0.9fr]"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* TOP — large headline, sits behind the 3D character */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-3 text-center lg:-mb-20 xl:-mb-24"
        >
          <p className="text-5xl sm:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold uppercase leading-none tracking-tight text-foreground">
            HI! I&apos;M YASMIN.
          </p>
        </motion.div>

        {/* LEFT — sub heading */}
        <div className="space-y-6 w-full max-w-xl mx-auto lg:mx-0">
          {/* Sub heading */}
          <motion.div variants={fadeUp}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Building{" "}
              <span className="text-glow-coral text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Practical Systems
              </span>{" "}
              with Code and Data
            </h1>
          </motion.div>

          {/* Scroll indicator (desktop) */}
          <motion.div variants={fadeIn} className="hidden lg:block pt-8 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto lg:mx-0 text-accent"
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
        </div>

        {/* CENTER — large 3D character (in front of the headline) */}
        <motion.div
          variants={scaleIn}
          className="relative z-10 mx-auto w-full max-w-[340px] sm:max-w-[440px] lg:max-w-none flex justify-center lg:-mt-6"
        >
          <div className="relative w-full lg:w-[600px] lg:max-w-none xl:w-[680px] lg:-mx-10">
            {/* Soft shapeless glow directly behind the face */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-0 bg-[radial-gradient(closest-side,rgba(254,46,75,0.32),rgba(153,27,27,0.14)_60%,transparent_78%)] blur-3xl dark:bg-[radial-gradient(closest-side,rgba(254,46,75,0.42),rgba(127,29,29,0.24)_60%,transparent_78%)]"
            />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <Image
                src="/3d-face.png"
                alt="3D character portrait"
                width={720}
                height={720}
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 440px, 680px"
                draggable={false}
                className="relative z-10 h-auto w-full select-none object-contain dark:mix-blend-screen"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 45%, black 58%, transparent 78%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 45%, black 58%, transparent 78%)",
                  filter:
                    "drop-shadow(0 30px 60px rgba(254, 46, 75, 0.25))",
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — description + CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="space-y-5 w-full max-w-md mx-auto lg:mx-0"
        >
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Information Systems student with hands-on experience in web
            development and data analysis through academic projects and
            internships. I enjoy turning business requirements into working
            systems, dashboards, and data-driven solutions.
          </p>

          <div className="flex flex-col gap-3 pt-1">
            <a
              href="#projects"
              className="btn-lux inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="https://docs.google.com/document/d/1NifBggs0WeSJmD6GAA9poN7A6j3PkWKy/export?format=pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-foreground font-semibold border border-border hover:border-primary/50 hover:text-primary hover:bg-secondary/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — mobile / tablet (below content) */}
      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="animate"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce lg:hidden"
      >
        <svg
          className="w-6 h-6 text-accent"
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
    </section>
  );
}
