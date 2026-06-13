"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration = 1400, enabled = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [enabled, target, duration]);
  return count;
}

function parseStatValue(raw: string): { numeric: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: 0, suffix: "" };
  return { numeric: parseInt(match[1], 10), suffix: match[2] };
}

const metrics = [
  { value: "15+", label: "Export Markets" },
  { value: "500+", label: "Containers Exported" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Commercial Partners" },
];

function MetricItem({ value, label, index, isVisible }: { value: string; label: string; index: number; isVisible: boolean }) {
  const { numeric, suffix } = parseStatValue(value);
  const counted = useCountUp(numeric, 1200 + index * 80, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center py-6 sm:py-7 px-4 hover:bg-[#1B4332]/[0.03] transition-colors"
    >
      <p
        className="font-serif text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-none font-bold text-[#1B4332] tracking-[-0.02em] tabular-nums group-hover:scale-105 transition-transform duration-300"
        aria-label={`${value} ${label}`}
      >
        {isVisible ? counted : 0}
        <span className="text-[#D4A017]">{suffix}</span>
      </p>
      <p className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
        {label}
      </p>
    </motion.div>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="stats"
      ref={ref}
      aria-label="Company statistics"
      className="relative overflow-hidden bg-white border-y border-[#1B4332]/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1B4332]/[0.07]">
          {metrics.map((m, i) => (
            <MetricItem key={m.label} value={m.value} label={m.label} index={i} isVisible={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
