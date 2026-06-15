"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./ProductConstants";
import { ProductIcon } from "./ProductIcons";
import type { Product } from "@/types";

export default function ApplicationsSection({ product }: { product: Product }) {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-12 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.022]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.04] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="w-5 h-px bg-[#D4A017]" />
            <span className="text-[#D4A017] text-[10px] font-semibold uppercase tracking-[0.26em]">Applications</span>
            <span className="w-5 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111827] leading-tight tracking-[-0.02em]">
            Common <span className="text-[#1B4332]">Use Cases</span>
          </h2>            <p className="mt-4 text-[#6B7280] text-sm max-w-lg mx-auto">Common applications for {product.name} across global markets.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.applications.map((app, i) => (
            <motion.article key={app.title} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-none overflow-hidden transition-all duration-400 hover:shadow-[0_16px_48px_rgba(27,67,50,0.09)] flex flex-col">
              <span aria-hidden="true" className="absolute -bottom-4 -right-2 text-[6rem] leading-none text-[#1B4332]/[0.04] select-none pointer-events-none group-hover:text-[#1B4332]/[0.07] transition-colors duration-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-[#D4A017] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <div className="relative flex flex-col h-full p-8">
                <div className="flex flex-col gap-2.5 mb-8">
                  <div className="w-6 h-px bg-[#D4A017]" />
                  <div className="w-11 h-11 border border-[#1B4332]/15 flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:border-[#1B4332] group-hover:text-white transition-all duration-300">
                    <ProductIcon icon={app.icon} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#111827] leading-tight tracking-[-0.01em] mb-4">{app.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed flex-1 mb-6">{app.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-px bg-[#D4A017]" />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#1B4332] font-semibold">{app.highlight}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
