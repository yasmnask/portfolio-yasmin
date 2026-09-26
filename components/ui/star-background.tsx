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
      {/* Large burgundy paint washes — dark mode atmosphere */}
      <div className="absolute -top-48 left-1/2 hidden h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-[#7F1D1D]/20 blur-[130px] dark:block" />
      <div className="absolute top-[36%] -left-64 hidden h-[30rem] w-[48rem] rounded-full bg-[#991B1B]/15 blur-[130px] dark:block" />
      <div className="absolute bottom-[-12%] -right-40 hidden h-[32rem] w-[54rem] rounded-full bg-[#7F1D1D]/15 blur-[140px] dark:block" />
      <div className="absolute top-[28%] left-[58%] hidden h-72 w-72 rounded-full bg-[#FE2E4B]/10 blur-[110px] dark:block" />

      {/* Soft pink washes — light mode atmosphere */}
      <div className="absolute -top-48 left-1/2 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-[#F71D5D]/[0.07] blur-[130px] dark:hidden" />
      <div className="absolute top-[36%] -left-64 h-[30rem] w-[48rem] rounded-full bg-[#FF4F78]/[0.06] blur-[130px] dark:hidden" />
      <div className="absolute bottom-[-12%] -right-40 h-[32rem] w-[54rem] rounded-full bg-[#F71D5D]/[0.06] blur-[140px] dark:hidden" />

      {/* Small twinkling stars — secondary texture */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="star-twinkle absolute rounded-full bg-primary/50 dark:bg-white/40"
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
