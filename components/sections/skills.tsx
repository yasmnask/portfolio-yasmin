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
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-20 overflow-hidden"
    >
      {/* Brush-paint atmosphere (dark mode only) */}
      <div
        aria-hidden="true"
        className="brush w-[560px] h-[300px] -top-20 left-1/4 opacity-30 -rotate-6"
      />
      <div
        aria-hidden="true"
        className="brush brush-b w-[380px] h-[240px] -bottom-16 -left-36 opacity-30 rotate-6"
      />
      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center mb-3"
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-10"
        >
          Technologies, tools, and methodologies I use to build web
          applications, information systems, and data-driven solutions.
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={staggerContainer}
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={scaleIn}
              role="group"
              aria-label={`${category} skills`}
              tabIndex={0}
              className="
                group
                skill-flip
                relative
                rounded-3xl
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-primary
              "
            >
              <div className="skill-flip-inner">
                {/* Front — category name only */}
                <div
                  className="
                    skill-flip-face
                    skill-flip-front
                    gloss
                    surface
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-6
                    transition-colors
                    duration-500
                    group-hover:border-primary/40
                    group-focus-within:border-primary/40
                  "
                >
                  {/* Background Glow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -top-20
                      -right-20
                      w-52
                      h-52
                      rounded-full
                      bg-primary/10
                      blur-3xl
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-focus-within:opacity-100
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-20
                      -left-20
                      w-40
                      h-40
                      rounded-full
                      bg-primary/5
                      blur-3xl
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-focus-within:opacity-100
                    "
                  />

                  <div className="relative z-10 flex h-full items-center justify-center text-center">
                    <h3 className="text-lg font-semibold text-primary">{category}</h3>
                  </div>
                </div>

                {/* Back — existing technologies only */}
                <div
                  className="
                    skill-flip-face
                    skill-flip-back
                    gloss
                    surface
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-6
                    transition-colors
                    duration-500
                    group-hover:border-primary/40
                    group-focus-within:border-primary/40
                  "
                >
                  {/* Background Glow */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -top-20
                      -right-20
                      w-52
                      h-52
                      rounded-full
                      bg-primary/10
                      blur-3xl
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-focus-within:opacity-100
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-20
                      -left-20
                      w-40
                      h-40
                      rounded-full
                      bg-primary/5
                      blur-3xl
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-focus-within:opacity-100
                    "
                  />

                  <div className="relative z-10 flex h-full flex-wrap content-center gap-2.5">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-2.5
                          py-1.5
                          rounded-full
                          text-xs
                          font-medium
                          border
                          border-primary/25
                          bg-primary/10
                          text-primary
                          shadow-[0_0_14px_-6px_var(--primary)]
                          transition-all
                          duration-300
                          hover:bg-primary/20
                          hover:border-primary/50
                          hover:shadow-[0_0_18px_-4px_var(--primary)]
                          hover:scale-105
                          cursor-default
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center my-8">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
        >
          {[
            {
              value: "8",
              label: "Projects Completed",
            },
            {
              value: "2",
              label: "Internship Experiences",
            },
            {
              value: "5",
              label: "Areas of Focus",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                group
                gloss
                surface
                relative
                overflow-hidden
                rounded-3xl
                border
                border-primary/20
                bg-card
                p-6
                text-center
                transition-all
                duration-500
                hover:border-primary/50
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-primary/10
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              <h3 className="relative text-4xl font-bold text-primary mb-1">
                {item.value}
              </h3>

              <p className="relative text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 text-center">
          <p className="text-muted-foreground">
            Focused on software development, information systems, UI/UX design,
            and data-driven decision making.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
