"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-20 overflow-hidden"
      ref={ref}
    >
      {/* Stronger burgundy atmosphere (dark mode only) */}
      <div
        aria-hidden="true"
        className="brush brush-b w-[640px] h-[360px] -bottom-32 left-1/2 -translate-x-1/2 opacity-50"
      />
      <motion.div
        className="relative max-w-2xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-foreground mb-3 text-center"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          I&apos;m always open to discussing internship opportunities, software
          development projects, data analytics, research collaborations, or
          connecting with fellow professionals.
        </motion.p>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="relative gloss surface space-y-5 p-5 sm:p-6 rounded-xl bg-card border border-border"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground placeholder-muted-foreground"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground placeholder-muted-foreground"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell me about the role, project, or collaboration you have in mind..."
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitted}
            aria-live="polite"
            className="btn-lux w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {submitted ? (
              <span>Message Sent!</span>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </motion.form>

        {/* Contact Information */}
        <motion.div
          variants={fadeUp}
          className="mt-8 pt-6 border-t border-border"
        >
          <p className="text-center text-muted-foreground mb-4">
            Or reach out directly
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:zakiyahyasmin1@gmail.com"
              className="text-primary font-medium hover:underline break-all text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              zakiyahyasmin1@gmail.com
            </a>

            <span className="hidden sm:block text-border">•</span>

            <a
              href="tel:+6282234171488"
              className="text-primary font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              +62 822-3417-1488
            </a>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            Based in Indonesia • Available for Internship, Freelance, and
            Collaboration Opportunities
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
