"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATION } from "@/lib/constants";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_12px_36px_-16px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 -ml-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Image
              src={isDark ? "/icon-dark.png" : "/icon-light.png"}
              alt="Zakiyah Yasmin logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-md"
            />
            <span className="hidden sm:inline font-bold text-base tracking-[0.18em] text-foreground">
              YASMIN.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Theme toggle and menu */}
          <div className="flex items-center space-x-4 -mr-2">
            <button
              onClick={toggleTheme}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg bg-secondary border border-border hover:border-primary/40 hover:text-primary transition-colors text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Toggle theme"
              aria-pressed={isDark}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex min-h-11 min-w-11 items-center justify-center rounded-lg bg-secondary border border-border hover:border-primary/40 transition-colors text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
