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
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-20 overflow-hidden"
      ref={ref}
    >
      {/* Subtle burgundy accent (dark mode only) */}
      <div
        aria-hidden="true"
        className="brush brush-c w-[420px] h-[280px] top-10 -right-40 opacity-35"
      />
      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-foreground mb-8 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Photo */}
          <motion.div variants={slideInLeft} className="relative md:-ml-8 lg:-ml-16">
            <div className="aspect-[4/3] overflow-hidden relative">
              <Image
                src="/profile-photo.png"
                alt="Zakiyah Yasmin"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-5">
                <h3 className="text-white text-xl font-bold">
                  Zakiyah Yasmin
                </h3>

                <p className="text-white/80 text-sm">
                  Information Systems Student
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={slideInRight} className="space-y-5 text-right relative z-10">
            <motion.p
              variants={fadeUp}
              className="text-base text-muted-foreground leading-relaxed"
            >
              I&apos;m an Information Systems student passionate about software
              development and digital transformation, with hands-on experience
              building web applications, administrative dashboards, and business
              systems through academic projects and internships. I enjoy turning
              complex requirements into practical solutions while continuously
              improving my skills in web development, system design, and modern
              technologies.
            </motion.p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Understanding Business Needs
                  </h3>

                  <p className="text-muted-foreground">
                    I enjoy analyzing requirements and business processes to
                    clarify what a system or dashboard actually needs to solve.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Building Systems and Data Solutions
                  </h3>

                  <p className="text-muted-foreground">
                    I build web applications, dashboards, and business systems
                    through academic projects and internships, from database
                    design to implementation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-row-reverse text-right">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Working with Stakeholders
                  </h3>

                  <p className="text-muted-foreground">
                    I value clear communication and teamwork to deliver projects
                    with the people who will actually use them.
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
