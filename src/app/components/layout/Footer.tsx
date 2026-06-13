import Image from "next/image";
import { companyInfo } from "@/data/company";
import { products } from "@/data/products";
import { navLinks } from "@/constants/navLinks";

/* ─────────────────────────────────────────────
   STATIC FOOTER — no client directive needed.
   All interactions are plain CSS / anchor hrefs.
───────────────────────────────────────────── */

const EXPORT_SUPPORT = [
  { label: "Bulk Orders",              href: "/#contact" },
  { label: "Export Consultation",      href: "/#contact" },
  { label: "FAQ — Knowledge Center",   href: "/faq" },
  { label: "Logistics Support",        href: "/logistics" },
  { label: "Product Specifications",   href: "/products/fresh-brown-coconut" },
  { label: "Shipping Documentation",   href: "/#contact" },
];

const TRUST_PILLS = [
  { icon: "🌐", text: "International Trade" },
  { icon: "✅", text: "Export Ready"        },
  { icon: "🔬", text: "Quality Assured"     },
  { icon: "🚢", text: "Global Supply"       },
];

const CERTIFICATIONS = ["ISO 22000", "HACCP", "APEDA", "SGS Verified"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(170deg, #0a1f16 0%, #0d2d1f 30%, #0a1a12 70%, #060f0a 100%)",
      }}
      aria-label="Site footer"
    >
      {/* ── Top border accent ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4A017 30%, #f5c842 50%, #D4A017 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── World map SVG watermark ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{ opacity: 0.035 }}
      >
        {/* North America */}
        <path d="M 80,80 L 290,80 L 330,140 L 340,210 L 300,280 L 255,335 L 215,305 L 172,252 L 122,218 Z" fill="#D4A017" />
        {/* South America */}
        <path d="M 225,360 L 320,360 L 350,425 L 338,530 L 296,570 L 252,545 L 228,465 Z" fill="#D4A017" />
        {/* Europe */}
        <path d="M 570,80 L 755,80 L 770,165 L 720,205 L 655,198 L 596,175 Z" fill="#D4A017" />
        {/* Africa */}
        <path d="M 595,210 L 730,210 L 752,270 L 748,385 L 706,448 L 658,448 L 610,394 L 593,298 Z" fill="#D4A017" />
        {/* Middle East */}
        <path d="M 740,185 L 882,185 L 895,250 L 855,294 L 788,300 L 748,268 Z" fill="#D4A017" />
        {/* South Asia — India (accent) */}
        <path d="M 862,210 L 950,210 L 962,248 L 940,300 L 902,325 L 870,304 Z" fill="#4ade80" />
        {/* SE Asia */}
        <path d="M 988,248 L 1095,248 L 1112,305 L 1068,348 L 1014,340 Z" fill="#D4A017" />
        {/* East Asia */}
        <path d="M 988,100 L 1220,100 L 1235,185 L 1180,225 L 1080,230 L 988,200 Z" fill="#D4A017" />
        {/* Russia */}
        <path d="M 700,30 L 1440,30 L 1440,110 L 1220,110 L 1080,100 L 870,95 L 750,85 Z" fill="#D4A017" />
        {/* Australia */}
        <path d="M 1065,370 L 1215,370 L 1228,450 L 1192,500 L 1128,512 L 1080,478 Z" fill="#D4A017" />
      </svg>

      {/* ── Radial glows ── */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(212,160,23,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(27,67,50,0.3) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ════════════════════════════════════════
          MAIN FOOTER GRID
      ════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-8 xl:gap-12">

          {/* ── COL 1: Brand Overview ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center gap-3 mb-5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-lg"
              aria-label="Global Coco Exports — return to top"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-200 group-hover:brightness-110">
                <Image src="/images/logo-image.png" alt="" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-base tracking-wide text-white leading-tight">
                GLOBAL COCO{" "}
                <span className="text-[#D4A017]">EXPORTS</span>
              </span>
            </a>

            {/* Brand statement */}
            <p className="text-white/55 text-sm leading-relaxed mb-3 max-w-[260px]">
              {companyInfo.tagline} For Global Markets.
            </p>
            <p className="text-white/35 text-xs leading-relaxed mb-7 max-w-[260px]">
              Supporting importers, distributors, and industrial buyers worldwide with reliable supply and export expertise.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {TRUST_PILLS.map((pill) => (
                <span
                  key={pill.text}
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-white/50 bg-white/[0.05] border border-white/[0.08] rounded-full px-2.5 py-1"
                >
                  <span aria-hidden="true">{pill.icon}</span>
                  {pill.text}
                </span>
              ))}
            </div>

            {/* Contact shortcuts */}
            <div className="space-y-2.5">
              <a
                href={`mailto:${companyInfo.email}`}
                data-analytics={JSON.stringify({ type: "email", label: "Footer Email" })}
                className="flex items-center gap-2.5 text-xs text-white/45 hover:text-[#D4A017] transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
              >
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white/[0.06] group-hover:bg-[#D4A017]/15 transition-colors"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="1" y="2.5" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.1" />
                    <path d="M1 4l5 3.5L11 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="truncate">{companyInfo.email}</span>
              </a>

              <a
                href={`tel:${companyInfo.phone}`}
                data-analytics={JSON.stringify({ type: "phone", label: "Footer Phone" })}
                className="flex items-center gap-2.5 text-xs text-white/45 hover:text-[#D4A017] transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
              >
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white/[0.06] group-hover:bg-[#D4A017]/15 transition-colors"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2h2.5l1 2.5-1.5 1a6 6 0 002.5 2.5l1-1.5L10 7.5V10A8 8 0 012 2z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {companyInfo.phone}
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${companyInfo.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                data-analytics={JSON.stringify({ type: "whatsapp", label: "Footer WhatsApp" })}
                className="flex items-center gap-2.5 text-xs text-white/45 hover:text-[#D4A017] transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
                aria-label="Contact us on WhatsApp"
              >
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white/[0.06] group-hover:bg-[#D4A017]/15 transition-colors"
                  aria-hidden="true"
                >
                  {/* WhatsApp icon */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                WhatsApp Us
              </a>

              <div className="flex items-center gap-2.5 text-xs text-white/35">
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white/[0.06]"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1C4.067 1 2.5 2.567 2.5 4.5 2.5 7.5 6 11 6 11s3.5-3.5 3.5-6.5C9.5 2.567 7.933 1 6 1z" stroke="currentColor" strokeWidth="1.1" />
                    <circle cx="6" cy="4.5" r="1" stroke="currentColor" strokeWidth="1.1" />
                  </svg>
                </span>
                {companyInfo.address}
              </div>
            </div>
          </div>

          {/* ── COL 2: Quick Navigation ── */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[3.5px] text-[#D4A017]/70 font-bold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
                  >
                    <span
                      className="w-0 h-px bg-[#D4A017] transition-all duration-300 group-hover:w-3 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#certifications"
                  className="group flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
                >
                  <span
                    className="w-0 h-px bg-[#D4A017] transition-all duration-300 group-hover:w-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="/#destinations"
                  className="group flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
                >
                  <span
                    className="w-0 h-px bg-[#D4A017] transition-all duration-300 group-hover:w-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Export Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* ── COL 3: Products ── */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[3.5px] text-[#D4A017]/70 font-bold mb-6">
              Our Products
            </h4>
            <ul className="space-y-3.5" role="list">
              {products.map((p) => {
                const productSlug = p.name.toLowerCase().replace(/\s+/g, "-");
                const productHref = `/products/${productSlug}`;
                return (
                  <li key={p.id}>
                    <a
                      href={productHref}
                      className="group flex items-start gap-2 text-sm text-white/45 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded leading-snug"
                    >
                      <span
                        className="w-0 h-px bg-[#D4A017] mt-[0.6em] transition-all duration-300 group-hover:w-3 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {p.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── COL 4: Export Support ── */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[3.5px] text-[#D4A017]/70 font-bold mb-6">
              Export Support
            </h4>
            <ul className="space-y-3.5" role="list">
              {EXPORT_SUPPORT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
                  >
                    <span
                      className="w-0 h-px bg-[#D4A017] transition-all duration-300 group-hover:w-3 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 5: Start Trading CTA panel ── */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[3.5px] text-[#D4A017]/70 font-bold mb-6">
              Start Trading
            </h4>

            {/* CTA card */}
            <div
              className="rounded-xl border border-white/[0.08] p-5 mb-5"
              style={{
                background:
                  "linear-gradient(145deg, rgba(27,67,50,0.5) 0%, rgba(13,45,31,0.4) 100%)",
              }}
            >
              <p className="text-white/80 text-xs font-semibold leading-snug mb-1">
                Ready to source at scale?
              </p>
              <p className="text-white/35 text-[11px] leading-relaxed mb-4">
                Our team responds to all B2B enquiries within 24 hours.
              </p>
              <a
                href="/#contact"
                data-analytics={JSON.stringify({ type: "request_quote", label: "Footer Request Bulk Quote" })}
                className="flex items-center justify-center gap-2 w-full bg-[#D4A017] text-[#0a1f16] text-xs font-bold py-2.5 rounded-lg hover:bg-[#e6b420] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d2d1f]"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M1.5 6.5h9M7 3l3 3.5L7 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Request Bulk Quote
              </a>
            </div>

            {/* Certifications in footer column */}
            <div>
              <p className="text-[9px] uppercase tracking-[3px] text-white/20 font-bold mb-2.5">
                Certified By
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="text-[9px] font-bold text-white/40 border border-white/[0.08] rounded-full px-2 py-0.5 bg-white/[0.03]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            HORIZONTAL RULE — full separator
        ════════════════════════════════════ */}
        <div
          className="mt-14 mb-8 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ════════════════════════════════════
            BOTTOM BAR
        ════════════════════════════════════ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Left: copyright + legal links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <p className="text-[11px] text-white/25">
              &copy; {year}{" "}
              <span className="text-white/40 font-medium">Global Coco Exports</span>
              . All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-4">
                  <a
                    href="#"
                    className="text-[11px] text-white/25 hover:text-white/60 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded"
                  >
                    {item}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="text-white/10 text-[10px]" aria-hidden="true">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right: origin + export badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full pl-2 pr-3 py-1.5">
              {/* India flag */}
              <span className="text-sm leading-none" aria-label="India" role="img">🇮🇳</span>
              <span className="text-[10px] text-white/35 font-medium tracking-wide">
                Made in India
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-full pl-2 pr-3 py-1.5">
              <span className="text-sm leading-none" aria-hidden="true">🚢</span>
              <span className="text-[10px] text-white/35 font-medium tracking-wide">
                Exporting Globally
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
