"use client";

import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SOCIAL_LINKS } from "@/lib/constants";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "github") return <FaGithub size={20} />;
  if (icon === "linkedin") return <FaLinkedin size={20} />;
  return <MdEmail size={22} />;
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-border">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-3">Zakiyah Yasmin</h3>

            <p className="text-muted-foreground text-sm">
              Information Systems student passionate about software development,
              data analytics, and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-3">Quick Links</h3>

            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="inline-flex min-h-11 items-center text-muted-foreground hover:text-primary transition-colors text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
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
            <h3 className="font-bold text-foreground mb-3">Connect</h3>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const isEmail = social.href.startsWith("mailto:");
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    {...(!isEmail && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    aria-label={social.label}
                    className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                );
              })}
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
            className="btn-lux flex min-h-11 min-w-11 items-center justify-center p-3 rounded-lg bg-primary text-primary-foreground hover:scale-110 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
