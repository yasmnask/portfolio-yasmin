"use client";

import { useEffect, useMemo, useState } from "react";

type Star = {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
};

export function StarBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft glow blobs */}
      <div className="absolute top-[10%] left-[8%] h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-[30%] right-[10%] h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-[15%] left-[20%] h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

      {/* Small twinkling stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="star-twinkle absolute rounded-full bg-primary/70 dark:bg-white/80"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Decorative large stars */}
      <span className="floating-star star-1">✦</span>
      <span className="floating-star star-2">✦</span>
      <span className="floating-star star-3">✦</span>
      <span className="floating-star star-4">✦</span>
      <span className="floating-star star-5">✦</span>
    </div>
  );
}
