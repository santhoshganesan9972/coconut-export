"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ─── Contact methods ────────────────────────── */
const contactMethods = [
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+91 98765 43210",
    action: "Send Message",
    href: "https://wa.me/919876543210",
    description: "Instant messaging for quick queries. Share photos, documents, and get real-time responses.",
    response: "Typically replies within 2 hours",
    color: "#25D366",
    bgGlow: "bg-[#25D366]/5",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "exports@globalcoco.com",
    action: "Send Email",
    href: "mailto:exports@globalcoco.com",
    description: "For detailed inquiries, specifications, and formal quotation requests. We respond within 24 hours.",
    response: "Response within 24 hours",
    color: "#D4A017",
    bgGlow: "bg-[#D4A017]/5",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 98765 43210",
    action: "Call Now",
    href: "tel:+919876543210",
    description: "Speak with our export team during business hours for urgent sourcing needs.",
    response: "Mon–Sat, 9 AM – 6 PM IST",
    color: "#1B4332",
    bgGlow: "bg-[#1B4332]/5",
  },
  {
    icon: "📍",
    label: "Office",
    value: "Tamil Nadu, India",
    action: "Get Directions",
    href: "#location",
    description: "Headquartered in Southern India's coconut heartlands, close to major export ports.",
    response: "Operational region",
    color: "#2D7D9A",
    bgGlow: "bg-[#2D7D9A]/5",
  },
  {
    icon: "🕐",
    label: "Business Hours",
    value: "Mon–Sat, 9 AM – 6 PM IST",
    action: "International Buyer Support",
    href: "#hours",
    description: "Our team works across time zones to support international buyers worldwide.",
    response: "Extended hours available",
    color: "#9B59B6",
    bgGlow: "bg-[#9B59B6]/5",
  },
];

export default function ContactOptions() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="contact-options" aria-label="Contact Options" className="relative py-20 md:py-24 overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #1B4332 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B4332]/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={mounted ? { opacity: 0, y: 28 } : false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">Reach Us</p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Contact{" "}<span className="text-[#D4A017]">Options</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Choose the method that works best for you. Every channel is monitored by our export team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {contactMethods.map((method, i) => (
            <motion.article
              key={method.label}
              initial={mounted ? { opacity: 0, y: 24 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              className="group relative bg-white border border-[#E5E7EB] hover:border-[#1B4332]/20 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(27,67,50,0.08)] flex flex-col"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ background: `linear-gradient(90deg, ${method.color} 0%, ${method.color}44 100%)` }} />

              <div className="p-6 lg:p-7 flex flex-col flex-1">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${method.bgGlow} flex items-center justify-center text-2xl mb-4`}>
                  {method.icon}
                </div>

                {/* Label + Value */}
                <p className="text-[10px] uppercase tracking-[3px] font-semibold mb-1" style={{ color: method.color }}>{method.label}</p>
                <p className="text-[#111827] font-semibold text-sm mb-3">{method.value}</p>

                {/* Description */}
                <p className="text-[#6B7280] text-xs leading-relaxed mb-4 flex-1">{method.description}</p>

                {/* Response time */}
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: method.color }} />
                  <span className="text-[10px] text-gray-400">{method.response}</span>
                </div>

                {/* Action link */}
                <a
                  href={method.href}
                  data-analytics={JSON.stringify({
                    type: method.label.toLowerCase(),
                    label: method.label,
                  })}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[2px] transition-colors duration-200"
                  style={{ color: method.color }}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {method.action}
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M7 1l4 4-4 4M1 5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
