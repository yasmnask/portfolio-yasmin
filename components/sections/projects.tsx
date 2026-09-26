"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { ExternalLink, ArrowRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const categories = [
  "All Projects",
  "Web Development",
  "Mobile Development",
  "Desktop Applications",
  "Data Analytics",
  "Research Publications",
];

export function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [showAll, setShowAll] = useState(false);
  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);
  const displayedProjects =
    activeCategory === "All Projects" && !showAll
      ? filteredProjects.slice(0, 4)
      : filteredProjects;

  return (
    <section
      id="projects"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 scroll-mt-20 overflow-hidden"
      ref={ref}
    >
      {/* Controlled red wash (dark mode only) */}
      <div
        aria-hidden="true"
        className="brush brush-c w-[520px] h-[300px] -top-10 -right-40 opacity-30 -rotate-6"
      />
      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-center text-foreground mb-3"
        >
          Projects & Research
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          A collection of software development, data analytics, and research
          projects that reflect my academic journey, technical skills, and
          professional experience.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`min-h-11 px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-[0_0_24px_-8px_rgba(254,46,75,0.7)]"
                  : "bg-background border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mb-12">
            No projects in this category yet — my data work currently lives in
            dashboards and reports from my Data Analyst internship and academic
            projects.
          </p>
        )}

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gloss surface relative block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-[0_24px_60px_-24px_rgba(254,46,75,0.28)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="relative h-52 bg-secondary overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-black/70 text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    {project.category === "Research Publications"
                      ? "View Publication"
                      : "View Project"}
                    <ExternalLink size={16} />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More / Show Less */}
        {activeCategory === "All Projects" && filteredProjects.length > 4 && (
          <motion.div variants={fadeUp} className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
          group
          flex
          min-h-11
          items-center
          justify-center
          gap-2
          px-5
          py-2.5
          rounded-lg
          text-primary
          font-semibold
          transition-all
          duration-300
          focus-visible:outline-2
          focus-visible:outline-offset-2
          focus-visible:outline-primary
        "
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp
                    size={18}
                    className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
                  />
                </>
              ) : (
                <>
                  Show All Projects
                  <ArrowRight
                    size={18}
                    className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
                  />
                </>
              )}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
