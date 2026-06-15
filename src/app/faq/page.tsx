import type { Metadata } from "next";
import { FAQSchema } from "@/lib/schemas";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FAQHero from "../components/sections/FAQHero";
import FAQAccordionSection from "../components/sections/FAQAccordionSection";
import FAQFinalCTA from "../components/sections/FAQFinalCTA";
import type { FAQItem } from "../components/sections/FAQAccordionSection";

/* ═══════════════════════════════════════════════════════════════════════
   FAQ DATA — 6 Categories
   Each category contains buyer-intent questions with detailed answers
   ═══════════════════════════════════════════════════════════════════════ */

/* ─── Category 1: Product Questions ─────────────────────────────────── */
const productFaqs: FAQItem[] = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "MOQ varies by product. Fresh Coconuts: 1 × 20ft FCL (≈24,000–25,000 nuts). Copra: 1 × 20ft FCL (≈18 MT). Coco Peat: 1 × 20ft FCL (≈500 blocks). Smaller trial orders available on request.",
  },
  {
    question: "Which coconut products are available?",
    answer:
      "We offer Fresh Brown Coconut, Pollachi Fresh Coconut, High Grade Coconut, Copra (dried kernel for oil extraction), and Coco Peat (processed coir pith for horticulture). All graded, inspected, and packed to international standards.",
  },
  {
    question: "Can products be customized?",
    answer:
      "Yes — custom grading, packaging, and private labelling available. Discuss requirements during quotation so we can confirm feasibility, lead times, and costs.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "Whole coconuts: 25kg PP bags, 10kg mesh bags, or custom sizes. Copra: 50kg PP bags or bulk packaging. Coco Peat: compressed blocks (5kg/10kg), briquettes, or loose fill. Custom branding and moisture barrier liners available.",
  },
  {
    question: "Do you offer product samples?",
    answer:
      "Yes — samples available across all product categories shipped via DHL/FedEx. Costs typically deducted from first bulk order. Requests processed within 3–5 business days.",
  },
  {
    question: "Can I place trial orders before committing to full container loads?",
    answer:
      "Yes — LCL consolidated shipments or smaller palletized quantities available for qualified buyers. Air freight possible for coconut samples. Volume pricing vs FCL pricing provided for transparent scale-up planning.",
  },
];

/* ─── Category 2: Export & Shipping ──────────────────────────────────── */
const shippingFaqs: FAQItem[] = [
  {
    question: "Which countries do you export to?",
    answer:
      "15+ countries across Middle East (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain), Europe (Netherlands, Germany, UK), North America (USA, Canada), Asia-Pacific (Singapore, Malaysia, Australia, New Zealand), and Africa. Multi-port strategy from Chennai, Tuticorin, and Nhava Sheva.",
  },
  {
    question: "What shipping terms do you support?",
    answer:
      "FOB (Free On Board), CIF (Cost, Insurance & Freight), and CFR (Cost & Freight). Our logistics team advises the best option for your destination and risk preference. Clear cost breakdowns provided at quotation.",
  },
  {
    question: "Do you provide FOB and CIF quotations?",
    answer:
      "Yes. FOB covers product cost, packing, inland freight, and customs clearance. CIF adds ocean freight and marine insurance. CFR covers freight without insurance. All quotations include a line-by-line cost breakdown.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Middle East: 5–10 days. Southeast Asia: 7–14 days. Europe: 20–25 days. North America: 20–30 days. Australia: 14–20 days. West Africa: 18–25 days. Actual transit depends on schedules and seasonal factors.",
  },
  {
    question: "Which ports do you export from?",
    answer:
      "Chennai Port (East Coast) — Southeast Asia, US East Coast. Tuticorin/VOC Port (South Coast) — Middle East, Europe. Nhava Sheva/JNPT (West Coast) — Europe, Africa, Americas, Australia.",
  },
  {
    question: "Can you arrange freight?",
    answer:
      "Yes — under CIF/CFR terms with Maersk, MSC, CMA CGM, and others. We manage booking, tracking, and documentation. For FOB terms, we coordinate loading and provide documentation for your forwarder.",
  },
];

/* ─── Category 3: Documentation ──────────────────────────────────────── */
const docFaqs: FAQItem[] = [
  {
    question: "Which export documents are provided?",
    answer:
      "Every shipment includes: Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, and Fumigation Certificate (where required). Health certificates and additional documents arranged as needed.",
  },
  {
    question: "Can you provide Certificate of Origin?",
    answer:
      "Yes — both non-preferential and preferential (under India's FTAs) certificates issued for every shipment. Preferential certificates can help buyers reduce or eliminate import duties.",
  },
  {
    question: "Can you provide SGS inspection?",
    answer:
      "Yes — third-party inspection by SGS, Bureau Veritas, Intertek, or TÜV arranged on request. Covers quantity, quality, packaging, and container loading. Reports issued within 2–5 business days.",
  },
  {
    question: "Do you provide Phytosanitary Certificates?",
    answer:
      "Yes — issued by Indian NPPO under IPPC guidelines for all shipments. Confirms products are pest-free and comply with destination country import requirements. Additional declarations added where required.",
  },
  {
    question: "Can you provide health certificates?",
    answer:
      "Yes — Health Certificates and Certificate of Fitness for Human Consumption issued by FSSAI-approved authorities for food-grade products. Required by EU, GCC, and other regulated markets. Specify requirements at quotation stage.",
  },
  {
    question: "Can you handle customs clearance at destination?",
    answer:
      "Our standard service covers Indian export customs. We can coordinate with clearing agents at select destination ports for import clearance upon request. For other destinations, we provide complete documentation for your customs broker.",
  },
];

/* ─── Category 4: Quality Assurance ──────────────────────────────────── */
const qualityFaqs: FAQItem[] = [
  {
    question: "How is quality verified?",
    answer:
      "Four-stage process: (1) Farm-level inspection for maturity and size, (2) Incoming inspection at facility for grade and damage, (3) Process monitoring during sorting and packing, (4) Pre-shipment container inspection. Third-party inspection (SGS, etc.) available on request.",
  },
  {
    question: "Do products undergo inspection?",
    answer:
      "Yes — at multiple checkpoints covering visual grading, physical testing (weight, moisture), pest screening, and packaging integrity. Inspection records maintained for traceability and shared on request.",
  },
  {
    question: "What standards do you follow?",
    answer:
      "ISO 22000 Food Safety Management, HACCP principles, APEDA export grade standards for coconut, Agmark standards for copra, and European horticultural substrate parameters (EC, pH, expansion) for coco peat.",
  },
  {
    question: "Do you have ISO and HACCP certification?",
    answer:
      "Yes — ISO 22000:2018 certified and HACCP compliant. Certifications current and verified by accredited bodies. Documents shared with qualified buyers. Annual audits maintain compliance.",
  },
  {
    question: "Are products tested before shipment?",
    answer:
      "Yes. For coconuts: grading, weight, meat thickness, water content. For copra: moisture ≤6%, oil content ≥65%, FFA, aflatoxin. For coco peat: EC, pH, expansion ratio. Lab reports included with documentation.",
  },
];

/* ─── Category 5: Payment & Commercial Terms ─────────────────────────── */
const paymentFaqs: FAQItem[] = [
  {
    question: "What payment methods are accepted?",
    answer:
      "Letter of Credit (LC) at sight — preferred for first transactions. Telegraphic Transfer (TT) — 30% advance, 70% against documents for established relationships. Documents Against Payment (DP) available for verified buyers. Terms formalised in sales contract.",
  },
  {
    question: "How are quotations prepared?",
    answer:
      "Based on your product type, volume, grade, packaging, incoterm, and destination. Includes per-unit pricing, total value, freight, insurance, and documentation charges. Typically delivered within 24 hours. Volume discounts available for recurring orders.",
  },
  {
    question: "How long are quotations valid?",
    answer:
      "Standard quotations valid 15–30 days. Extensions may be granted subject to market conditions. Long-term contracts structured with 30–90 day validity and quarterly review mechanisms.",
  },
  {
    question: "Do you offer credit terms?",
    answer:
      "Yes — 30–60 day terms available for buyers with established history and verified credentials. Deferred LC and structured plans for long-term commitments. Assessed case-by-case. Initial orders typically require LC or TT.",
  },
  {
    question: "Can you provide a proforma invoice?",
    answer:
      "Yes — detailed proforma invoice with buyer/seller info, product specs, pricing (USD), incoterm, payment terms, delivery date, and packaging details. Serves as basis for LC opening and import documentation.",
  },
];

/* ─── Category 6: RFQ Process ────────────────────────────────────────── */
const rfqFaqs: FAQItem[] = [
  {
    question: "How do I request a quotation?",
    answer:
      "Submit an RFQ via our online form at /rfq (fastest), email us at info@globalcocoexports.com, or reach out on WhatsApp. We respond with a detailed quotation within 24 hours.",
  },
  {
    question: "What information should I provide?",
    answer:
      "Product of interest, required volume (MT or FCL), target grade, packaging preference, destination, preferred incoterm (FOB/CIF/CFR), and your company details. More detail = more accurate quotation.",
  },
  {
    question: "How soon will I receive a response?",
    answer:
      "Within 24 business hours. Detailed quotation including pricing, shipping costs, and timelines within 1–2 business days. Urgent requests before 2:00 PM IST often quoted same day.",
  },
  {
    question: "Can I schedule a consultation?",
    answer:
      "Yes — consultation calls to discuss product selection, volumes, shipping terms, and documentation. Schedule via email or WhatsApp during business hours (Mon–Sat, 9 AM–6 PM IST).",
  },
  {
    question: "How are prices determined?",
    answer:
      "Based on market rates, product grade, order volume, packaging, incoterm, and destination. FCL volumes receive better per-unit pricing. Volume discounts and long-term contract pricing available.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   METADATA — For SEO
   ═══════════════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "FAQ — Coconut Export Questions Answered",    description:
    "Comprehensive answers about bulk coconut export — products, MOQs, shipping terms, FOB/CIF pricing, documentation, quality standards, and payment terms for international buyers.",
  keywords: [
    "coconut export FAQ",
    "coconut export questions",
    "buying coconut from India",
    "coconut MOQ",
    "coconut shipping terms",
    "coconut export documents",
    "coconut quality standards",
    "coconut payment terms",
    "coconut RFQ process",
    "bulk coconut procurement guide",
    "coconut export knowledge base",
  ],
  openGraph: {
    title: "FAQ — Coconut Export Questions Answered | Global Coco Exports",
    description:
      "Comprehensive answers about bulk coconut export — products, MOQs, shipping, documentation, quality, and payment for international buyers.",
    images: [
      {
        url: "/images/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ — Coconut Export Questions Answered | Global Coco Exports",
      },
    ],
    url: "https://www.globalcocoexports.com/faq",
    type: "website",
    locale: "en_IN",
    siteName: "Global Coco Exports",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Coconut Export Questions Answered | Global Coco Exports",
    description:
      "Comprehensive answers about bulk coconut export — products, MOQs, shipping, documentation, and payment.",
    images: ["/images/og-faq.jpg"],
  },
  alternates: {
    canonical: "https://www.globalcocoexports.com/faq",
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   FAQ SCHEMA DATA — for rich search results
   ═══════════════════════════════════════════════════════════════════════ */
const allFaqsForSchema = [
  ...productFaqs,
  ...shippingFaqs,
  ...docFaqs,
  ...qualityFaqs,
  ...paymentFaqs,
  ...rfqFaqs,
];

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function FAQPage() {
  return (
    <>
      <Navbar />
      <FAQHero />
      <FAQAccordionSection
        id="product-questions"
        headingPrefix="Product"
        headingHighlight="Questions"
        subtitle="Common questions about our coconut product range, minimum order quantities, packaging options, and sampling process."
        icon="🥥"
        faqs={productFaqs}
        index={0}
      />
      <FAQAccordionSection
        id="export-shipping"
        headingPrefix="Export &"
        headingHighlight="Shipping"
        subtitle="Everything you need to know about export destinations, incoterms, transit times, ports, and freight arrangements."
        icon="🚢"
        faqs={shippingFaqs}
        index={1}
      />
      <FAQAccordionSection
        id="documentation"
        headingPrefix="Export"
        headingHighlight="Documentation"
        subtitle="Information about export documentation packages, certificates of origin, inspection reports, and customs clearance."
        icon="📄"
        faqs={docFaqs}
        index={2}
      />
      <FAQAccordionSection
        id="quality-assurance"
        headingPrefix="Quality"
        headingHighlight="Assurance"
        subtitle="Details about our quality verification process, inspection protocols, certifications, and product testing procedures."
        icon="✅"
        faqs={qualityFaqs}
        index={3}
      />
      <FAQAccordionSection
        id="payment-terms"
        headingPrefix="Payment &"
        headingHighlight="Terms"
        subtitle="Information about accepted payment methods, quotation preparation, validity periods, and credit terms."
        icon="💳"
        faqs={paymentFaqs}
        index={4}
      />
      <FAQAccordionSection
        id="rfq-process"
        headingPrefix="RFQ"
        headingHighlight="Process"
        subtitle="How to request a quotation, what information to provide, response times, and how pricing is determined."
        icon="📋"
        faqs={rfqFaqs}
        index={5}
      />
      <FAQFinalCTA />
      <FAQSchema questions={allFaqsForSchema} />
      <Footer />
    </>
  );
}
