"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-border">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Zakiyah Yasmin</h3>

            <p className="text-muted-foreground text-sm">
              Information Systems student passionate about software development,
              data analytics, and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>

            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Connect</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/yasmnask"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/zakiyahyasmin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:zakiyahyasmin1@gmail.com"
                aria-label="Email"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover:scale-110"
              >
                <MdEmail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Zakiyah Yasmin. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg hover:scale-110 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
