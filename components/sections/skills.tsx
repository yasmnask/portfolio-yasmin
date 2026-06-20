"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-center mb-4"
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          Technologies, tools, and methodologies I use to build web
          applications, information systems, and data-driven solutions.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={scaleIn}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-5">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm rounded-full bg-secondary border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 text-center">
          <p className="text-muted-foreground">
            Passionate about web development, information systems, UI/UX design,
            and data-driven decision making.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
