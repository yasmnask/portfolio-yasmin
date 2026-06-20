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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      ref={ref}
    >
      <motion.div
        className="max-w-2xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-foreground mb-4 text-center"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          I&apos;m always open to discussing internship opportunities, software
          development projects, data analytics, research collaborations, or
          simply connecting with fellow professionals.
        </motion.p>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-xl bg-secondary/30 border border-border"
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
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground placeholder-muted-foreground"
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
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground placeholder-muted-foreground"
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
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-foreground placeholder-muted-foreground resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitted ? (
              <span>Message Sent!</span>
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>
        </motion.form>

        {/* Contact Information */}
        <motion.div
          variants={fadeUp}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-center text-muted-foreground mb-6">
            Or reach out directly
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:zakiyahyasmin1@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              zakiyahyasmin1@gmail.com
            </a>

            <span className="hidden sm:block text-border">•</span>

            <a
              href="tel:+6282234171488"
              className="text-primary font-medium hover:underline"
            >
              +62 822-3417-1488
            </a>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            Based in Indonesia • Available for Internship, Freelance, and
            Collaboration Opportunities
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
