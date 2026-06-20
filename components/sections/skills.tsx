"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import { Monitor, Database, Palette, BarChart3, Wrench } from "lucide-react";

export function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Monitor className="w-7 h-7 text-primary" />;

      case "Backend":
        return <Database className="w-7 h-7 text-primary" />;

      case "UI/UX Design":
        return <Palette className="w-7 h-7 text-primary" />;

      case "Data Analysis":
        return <BarChart3 className="w-7 h-7 text-primary" />;

      case "Tools":
        return <Wrench className="w-7 h-7 text-primary" />;

      default:
        return null;
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-14"
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
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-background
                p-7
                transition-all
                duration-500
                hover:border-primary/40
              "
            >
              {/* Background Glow */}
              <div
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
                "
              />

              <div
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
                "
              />

              {/* Top Accent */}
              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    {getCategoryIcon(category)}
                  </div>

                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3
                        py-2
                        rounded-full
                        text-sm
                        border
                        border-border
                        bg-secondary
                        transition-all
                        duration-300
                        hover:bg-primary/10
                        hover:border-primary/50
                        hover:text-primary
                        hover:scale-105
                        cursor-default
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center my-12">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14"
        >
          {[
            {
              value: "8+",
              label: "Projects Completed",
            },
            {
              value: "2",
              label: "Internship Experiences",
            },
            {
              value: "15+",
              label: "Technologies Learned",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-primary/20
                bg-background
                p-8
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

              <h3 className="relative text-5xl font-bold text-primary mb-2">
                {item.value}
              </h3>

              <p className="relative text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 text-center">
          <p className="text-muted-foreground">
            Passionate about software development, information systems, UI/UX
            design, and data-driven decision making.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
