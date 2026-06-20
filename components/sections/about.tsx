"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-secondary relative">
              <Image
                src="/profile-photo.jpg"
                alt="Zakiyah Yasmin"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold">
                  Zakiyah Yasmin
                </h3>

                <p className="text-white/80 text-sm">
                  Information Systems Student
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={slideInRight} className="space-y-6">
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I&apos;m an Information Systems student passionate about software
              development and digital transformation, with hands-on experience
              building web applications, administrative dashboards, and business
              systems through academic projects and internships. I enjoy turning
              complex requirements into practical solutions while continuously
              improving my skills in web development, system design, and modern
              technologies.
            </motion.p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Problem Solving
                  </h3>

                  <p className="text-muted-foreground">
                    I enjoy analyzing requirements and transforming complex
                    business processes into practical, efficient, and
                    user-friendly software solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Continuous Learning
                  </h3>

                  <p className="text-muted-foreground">
                    I continuously improve my technical skills through projects,
                    internships, and independent learning to stay current with
                    modern development practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Team Collaboration
                  </h3>

                  <p className="text-muted-foreground">
                    I value communication, teamwork, and collaboration to ensure
                    every project is delivered effectively and creates
                    meaningful impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
