"use client";

import { motion } from "framer-motion";

/* ─── Services data ──────────────────────────── */
const services = [
  {
    icon: "📄",
    title: "Quotation Support",
    description:
      "Detailed commercial quotations tailored to your product selection, volume, and shipping terms — delivered within 24 hours.",
    detail: "Custom pricing, volume breaks, incoterm options",
    color: "#D4A017",
  },
  {
    icon: "🚢",
    title: "Logistics Consultation",
    description:
      "Expert guidance on shipping routes, container planning, freight options, and port selection for your destination.",
    detail: "Route planning, container loading, freight comparison",
    color: "#1B4332",
  },
  {
    icon: "📋",
    title: "Documentation Assistance",
    description:
      "Complete export documentation — Certificate of Origin, Phytosanitary, Bill of Lading, and customs clearance support.",
    detail: "Export docs, customs clearance, compliance support",
    color: "#2D7D9A",
  },
  {
    icon: "🔬",
    title: "Product Specifications",
    description:
      "Detailed specs, quality parameters, and certifications for all our coconut products.",
    detail: "Spec sheets, quality parameters, certifications",
    color: "#9B59B6",
  },
  {
    icon: "📦",
    title: "Bulk Order Planning",
    description:
      "We help buyers plan large-volume orders with production scheduling and phased delivery timelines.",
    detail: "Volume planning, production scheduling, phased delivery",
    color: "#E67E22",
  },
];

/* ─── Animation ───────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactServices() {
  return (
    <section id="contact-services" aria-label="Export Support Services" className="relative py-20 md:py-24 overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4A017]/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">What We Offer</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Export Support{" "}<span className="text-[#D4A017]">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Every inquiry receives dedicated support from our experienced export team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((svc, i) => (
            <motion.article
              key={svc.title}
              variants={fadeUp}
              initial="initial" whileInView="animate" viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={`group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] ${i === services.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${svc.color} 0%, ${svc.color}44 100%)` }} />

              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${svc.color}10` }}>
                    {svc.icon}
                  </div>
                  <span className="text-[40px] leading-none opacity-[0.04] select-none">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.description}</p>

                <div className="pt-4 border-t border-[#E5E7EB] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: svc.color }} />
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">{svc.detail}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
