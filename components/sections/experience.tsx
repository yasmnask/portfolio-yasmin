"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      ref={ref}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-foreground mb-12 text-center"
        >
          Experience & Education
        </motion.h2>

        <motion.div className="space-y-8" variants={staggerContainer}>
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 last:border-l-transparent"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-accent">
                    {exp.period}
                  </span>
                </div>

                <p className="text-primary font-semibold">{exp.company}</p>

                <p className="text-muted-foreground pt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
