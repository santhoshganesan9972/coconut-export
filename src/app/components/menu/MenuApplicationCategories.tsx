"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

/* ─── Animation ───────────────────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

/* ─── Application Categories ──────────────────────────────────────────── */
interface CategoryItem {
  icon: string;
  title: string;
  description: string;
  products: string[];
  color: string;
}

const applicationCategories: CategoryItem[] = [
  {
    icon: "🍽️",
    title: "Food Industry",
    description:
      "HACCP-certified raw materials for coconut water bottling, desiccated coconut manufacturing, dairy alternatives, and large-scale food processing.",
    products: ["Fresh Brown Coconut", "Pollachi Fresh Coconut", "High Grade Coconut"],
    color: "#1B4332",
  },
  {
    icon: "🏬",
    title: "Wholesale Distribution",
    description:
      "For importers and distributors supplying retail chains, grocery networks, and food service in the Middle East, Europe, and Asia.",
    products: ["Fresh Brown Coconut", "Pollachi Fresh Coconut", "High Grade Coconut"],
    color: "#2D7D9A",
  },
  {
    icon: "⚗️",
    title: "Oil Processing",
    description:
      "Industrial-grade copra with 65–68% oil content for oil milling, virgin coconut oil production, soap manufacturing, and oleochemical processing.",
    products: ["Copra Coconut"],
    color: "#8B6914",
  },
  {
    icon: "🌱",
    title: "Agriculture & Horticulture",
    description:
      "Low-EC coco peat for hydroponic systems, greenhouse cultivation, seed germination, and professional nursery operations.",
    products: ["Coco Peat"],
    color: "#2d6a4f",
  },
  {
    icon: "🌐",
    title: "Export Trading",
    description:
      "Complete product portfolio for trading firms and export houses — reliable supply, multi-port logistics, and documentation support across 15+ markets.",
    products: ["Fresh Brown Coconut", "Copra Coconut", "Coco Peat"],
    color: "#9B59B6",
  },
];

/* ─── Icon component ──────────────────────────────────────────────────── */
function CategoryIcon({ icon }: { icon: string }) {
  return (
    <span className="text-2xl sm:text-3xl" aria-hidden="true">
      {icon}
    </span>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────── */
export default function MenuApplicationCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="application-categories"
      ref={sectionRef}
      aria-label="Product application categories"
      className="relative py-20 md:py-24 overflow-hidden bg-white"
    >
      {/* ── Background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D4A017]/[0.03] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              By Industry
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Products Grouped By{" "}
            <span className="text-[#1B4332]">Application</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Find the right product for your industry — each category highlights
            the most suitable options for your specific use case.
          </p>
        </motion.div>

        {/* ── Category Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applicationCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] flex flex-col"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}66)` }}
              />

              <div className="p-6 lg:p-7 flex flex-col flex-1">
                {/* Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex flex-col gap-2">
                    <div className="w-6 h-px bg-[#D4A017]" />
                    <div
                      className="w-11 h-11 border flex items-center justify-center group-hover:text-white transition-all duration-300"
                      style={{
                        borderColor: `${category.color}22`,
                        color: category.color,
                        backgroundColor: "transparent",
                      }}
                    >
                      <CategoryIcon icon={category.icon} />
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9CA3AF] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg lg:text-xl font-bold leading-tight mb-3"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5 flex-1">
                  {category.description}
                </p>

                {/* Related Products */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF] w-full mb-1">
                    Recommended Products
                  </span>
                  {category.products.map((product) => {
                    const slug = product.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <Link
                        key={product}
                        href={`/products/${slug}`}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#1B4332] bg-[#1B4332]/[0.06] border border-[#1B4332]/[0.10] px-2.5 py-1 rounded hover:bg-[#1B4332]/[0.10] transition-colors"
                      >
                        {product}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
