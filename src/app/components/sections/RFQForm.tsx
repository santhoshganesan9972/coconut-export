"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { slugsToNames } from "@/lib/rfq";
import { trackRFQStep, trackEvent } from "@/lib/analytics";

/* ─────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────── */
interface RFQFormData {
  products: string[];
  volume: string;
  volumeUnit: string;
  incoterm: string;
  destinationPort: string;
  expectedTimeline: string;
  additionalNotes: string;
  companyName: string;
  country: string;
  email: string;
  phone: string;
  whatsapp: string;
}

interface StepErrors {
  [key: string]: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

/* ─────────────────────────────────────────────────────────
   PRODUCT DATA — using centralized product data
───────────────────────────────────────────────────────── */
import { products as productData } from "@/data/products";

const PRODUCT_OPTIONS = productData.map((p) => ({
  value: p.name,
  label: p.name,
}));

const VOLUME_UNITS = [
  { value: "Metric Tons", label: "Metric Tons" },
  { value: "20ft Container", label: "20ft Container" },
  { value: "40ft Container", label: "40ft Container" },
];

const INCOTERMS = [
  { value: "FOB", label: "FOB (Free On Board)", description: "Seller delivers goods on board vessel at port of origin" },
  { value: "CIF", label: "CIF (Cost, Insurance & Freight)", description: "Seller covers cost, insurance, and freight to destination port" },
  { value: "CFR", label: "CFR (Cost & Freight)", description: "Seller covers cost and freight to destination port" },
];

/* ─────────────────────────────────────────────────────────
   INITIAL STATE
───────────────────────────────────────────────────────── */
const INITIAL_FORM: RFQFormData = {
  products: [],
  volume: "",
  volumeUnit: "Metric Tons",
  incoterm: "",
  destinationPort: "",
  expectedTimeline: "",
  additionalNotes: "",
  companyName: "",
  country: "",
  email: "",
  phone: "",
  whatsapp: "",
};

/* ─────────────────────────────────────────────────────────
   RFQ CONTEXT BANNER — shows preselected products
───────────────────────────────────────────────────────── */
function RFQContextBanner({ productNames, source }: { productNames: string[]; source: string | null }) {
  if (productNames.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-[#D4A017]/20 bg-[#D4A017]/5 p-4 sm:p-5 mb-6"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#D4A017]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M7 1v12M1 7h12" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#111827] mb-1.5">
            You are requesting pricing for:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {productNames.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#D4A017]/20 text-xs font-medium text-[#1B4332]"
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                  <path d="M1 4l2.5 2.5L9 1" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {name}
              </span>
            ))}
          </div>
          {source && (
            <p className="text-[10px] text-gray-400 mt-2">
              Source: {source === "product-page" ? "Product Page" : source === "homepage" ? "Homepage" : source}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   VALIDATION
───────────────────────────────────────────────────────── */
function validateStep(step: number, data: RFQFormData): StepErrors {
  const errors: StepErrors = {};

  if (step === 1) {
    if (data.products.length === 0)
      errors.products = "Select at least one product.";
    if (!data.volume || isNaN(Number(data.volume)) || Number(data.volume) <= 0)
      errors.volume = "Enter a valid volume or quantity.";
  }

  if (step === 2) {
    if (!data.incoterm) errors.incoterm = "Select an incoterm.";
  }

  if (step === 3) {
    if (!data.companyName.trim() || data.companyName.trim().length < 2)
      errors.companyName = "Company name is required (min. 2 characters).";
    if (!data.country.trim()) errors.country = "Country is required.";
    if (
      !data.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
    )
      errors.email = "Enter a valid corporate email address.";
  }

  return errors;
}

/* ─────────────────────────────────────────────────────────
   SHARED INPUT STYLES
───────────────────────────────────────────────────────── */
const baseInput =
  "w-full px-4 py-3 rounded-xl border text-sm text-[#111827] placeholder-gray-400 " +
  "bg-[#FAFAFA] focus:outline-none transition-all duration-200 " +
  "focus:ring-2 focus:ring-[#1B4332]/25 focus:border-[#1B4332]/50 " +
  "hover:border-[#1B4332]/25";

const inputCls = (err?: string) =>
  err
    ? `${baseInput} border-red-400/60 focus:ring-red-400/25 focus:border-red-400/60`
    : `${baseInput} border-gray-200`;

const labelCls =
  "block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5";

/* ─────────────────────────────────────────────────────────
   STEP TITLES
───────────────────────────────────────────────────────── */
const STEPS = [
  { num: 1, title: "Product Selection" },
  { num: 2, title: "Shipping Details" },
  { num: 3, title: "Company Verification" },
];

/* ─────────────────────────────────────────────────────────
   STEP INDICATOR
───────────────────────────────────────────────────────── */
function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="px-8 pt-8 pb-6 border-b border-gray-100">
      <div className="flex items-center justify-between mb-4">
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            className="flex items-center"
          >
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  s.num <= currentStep
                    ? "bg-[#1B4332] text-white shadow-md shadow-[#1B4332]/25"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {s.num < currentStep ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  s.num
                )}
              </div>
              <span
                className={`text-[10px] mt-1.5 font-semibold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
                  s.num <= currentStep
                    ? "text-[#1B4332]"
                    : "text-gray-300"
                }`}
              >
                {s.title}
              </span>
            </div>
            {/* Connector */}
            {i < STEPS.length - 1 && (
              <div className="w-8 sm:w-20 h-px bg-gray-200 mx-1 sm:mx-3 relative">
                <div
                  className={`absolute inset-y-0 left-0 bg-[#1B4332] transition-all duration-500 ${
                    s.num < currentStep ? "w-full" : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SUCCESS PANEL
───────────────────────────────────────────────────────── */
function SuccessPanel({
  onReset,
}: {
  onReset: () => void;
}) {
  const nextSteps = [
    { num: "01", label: "Inquiry Received", sub: "Your RFQ is in our system" },
    { num: "02", label: "Export Team Review", sub: "We assess your requirements" },
    { num: "03", label: "Quotation", sub: "Competitive pricing prepared" },
    { num: "04", label: "Consultation", sub: "We walk you through the offer" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center py-12 px-6"
    >
      {/* Animated checkmark */}
      <div className="relative mb-6">
        <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
          <motion.circle
            cx="36" cy="36" r="32"
            fill="none" stroke="#1B4332" strokeWidth="2"
            strokeDasharray="201"
            initial={{ strokeDashoffset: 201 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.path
            d="M22 37l10 10 18-20"
            fill="none" stroke="#D4A017" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-[#111827] mb-2">
        Thank You for Your Inquiry
      </h3>
      <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-2">
        Our export team will contact you shortly.
      </p>
      <p className="text-xs text-gray-400 mb-8">
        This is currently a demonstration version.
      </p>

      {/* Next steps flow */}
      <div className="w-full max-w-md mb-8">
        <p className="text-[10px] uppercase tracking-[4px] text-gray-400 mb-4 font-semibold">
          What Happens Next
        </p>
        <div className="grid grid-cols-4 gap-1">
          {nextSteps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center relative">
              {/* Connector line */}
              {i < nextSteps.length - 1 && (
                <div
                  className="absolute top-4 left-[calc(50%+14px)] w-[calc(100%-28px)] h-px bg-[#D4A017]/30"
                  aria-hidden="true"
                />
              )}
              <div className="w-8 h-8 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 flex items-center justify-center mb-2 relative z-10">
                <span className="text-[#D4A017] text-[10px] font-black">{step.num}</span>
              </div>
              <p className="text-[#111827] font-semibold text-[10px] leading-snug text-center">{step.label}</p>
              <p className="text-gray-400 text-[9px] mt-0.5 text-center leading-snug">{step.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onReset}
        className="text-sm text-[#1B4332] font-semibold underline underline-offset-4 hover:text-[#D4A017] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
      >
        Submit another RFQ
      </button>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   STEP 1 — Product Selection
───────────────────────────────────────────────────────── */
function StepOne({
  data,
  errors,
  onChange,
}: {
  data: RFQFormData;
  errors: StepErrors;
  onChange: (field: string, value: any) => void;
}) {
  const toggleProduct = (product: string) => {
    const current = data.products;
    if (current.includes(product)) {
      onChange(
        "products",
        current.filter((p) => p !== product)
      );
    } else {
      onChange("products", [...current, product]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Product checkboxes — fieldset for accessibility */}
      <fieldset>
        <legend className={labelCls}>
          Products of Interest <span className="text-red-400">*</span>
        </legend>
        <div className="grid sm:grid-cols-2 gap-2.5" role="group" aria-label="Available products">
          {PRODUCT_OPTIONS.map((product) => {
            const selected = data.products.includes(product.value);
            return (
              <button
                key={product.value}
                type="button"
                onClick={() => toggleProduct(product.value)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm text-left transition-all duration-200 ${
                  selected
                    ? "border-[#1B4332] bg-[#1B4332]/5 text-[#1B4332] font-semibold shadow-sm"
                    : "border-gray-200 bg-[#FAFAFA] text-gray-600 hover:border-gray-300"
                }`}
                aria-pressed={selected}
              >
                <span
                  className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    selected
                      ? "border-[#1B4332] bg-[#1B4332]"
                      : "border-gray-300"
                  }`}
                >
                  {selected && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                {product.label}
              </button>
            );
          })}
        </div>
        {errors.products && (
          <p role="alert" className="text-red-500 text-[11px] mt-1">
            {errors.products}
          </p>
        )}
      </fieldset>

      {/* Volume input */}
      <div>
        <p className={labelCls}>
          Estimated Volume / Quantity <span className="text-red-400">*</span>
        </p>
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="number"
              min="0"
              step="0.1"
              placeholder="e.g. 25"
              value={data.volume}
              onChange={(e) => onChange("volume", e.target.value)}
              className={`${inputCls(errors.volume)} text-base leading-normal`}
              aria-invalid={!!errors.volume}
              aria-describedby={errors.volume ? "rfq-volume-error" : undefined}
            />
            {errors.volume && (
              <p id="rfq-volume-error" role="alert" className="text-red-500 text-[11px] mt-1">
                {errors.volume}
              </p>
            )}
          </div>
          <div className="w-36 sm:w-44">
            <div className="relative">
              <select
                value={data.volumeUnit}
                onChange={(e) => onChange("volumeUnit", e.target.value)}
                className={`${baseInput} border-gray-200 appearance-none pr-10`}
              >
                {VOLUME_UNITS.map((u) => (
                  <option key={u.value} value={u.value}>
                    {u.label}
                  </option>
                ))}
              </select>
              <div
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="#9CA3AF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   STEP 2 — Shipping Details
───────────────────────────────────────────────────────── */
function StepTwo({
  data,
  errors,
  onChange,
}: {
  data: RFQFormData;
  errors: StepErrors;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Incoterms */}
      <div>
        <p className={labelCls}>
          Incoterms <span className="text-red-400">*</span>
        </p>
        <div className="grid sm:grid-cols-3 gap-2.5">
          {INCOTERMS.map((term) => {
            const selected = data.incoterm === term.value;
            return (
              <button
                key={term.value}
                type="button"
                onClick={() => onChange("incoterm", term.value)}
                className={`flex flex-col items-start gap-1 px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
                  selected
                    ? "border-[#1B4332] bg-[#1B4332]/5 shadow-sm"
                    : "border-gray-200 bg-[#FAFAFA] hover:border-gray-300"
                }`}
                aria-pressed={selected}
              >
                <span
                  className={`text-sm font-semibold ${
                    selected ? "text-[#1B4332]" : "text-gray-700"
                  }`}
                >
                  {term.value}
                </span>
                <span
                  className={`text-[10px] leading-snug ${
                    selected ? "text-[#1B4332]/70" : "text-gray-400"
                  }`}
                >
                  {term.description}
                </span>
              </button>
            );
          })}
        </div>
        {errors.incoterm && (
          <p role="alert" className="text-red-500 text-[11px] mt-1">
            {errors.incoterm}
          </p>
        )}
      </div>

      {/* Destination Port */}
      <div>
        <label htmlFor="rfq-destination-port" className={labelCls}>
          Destination Port
        </label>
        <input
          id="rfq-destination-port"
          type="text"
          placeholder="e.g. Jebel Ali, Dubai"
          value={data.destinationPort}
          onChange={(e) => onChange("destinationPort", e.target.value)}
          className={inputCls()}
        />
      </div>

      {/* Expected Timeline */}
      <div>
        <label htmlFor="rfq-timeline" className={labelCls}>
          Expected Timeline
        </label>
        <input
          id="rfq-timeline"
          type="text"
          placeholder="e.g. Within 30 days"
          value={data.expectedTimeline}
          onChange={(e) => onChange("expectedTimeline", e.target.value)}
          className={inputCls()}
        />
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="rfq-notes" className={labelCls}>
          Additional Notes
        </label>
        <textarea
          id="rfq-notes"
          rows={3}
          placeholder="Any special requirements, packaging preferences, or questions…"
          value={data.additionalNotes}
          onChange={(e) => onChange("additionalNotes", e.target.value)}
          className={`${inputCls()} resize-none`}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   STEP 3 — Company Verification
───────────────────────────────────────────────────────── */
function StepThree({
  data,
  errors,
  onChange,
}: {
  data: RFQFormData;
  errors: StepErrors;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Company Name */}
        <div className="sm:col-span-2">
          <label htmlFor="rfq-company" className={labelCls}>
            Company Name <span className="text-red-400">*</span>
          </label>
          <input
            id="rfq-company"
            type="text"
            autoComplete="organization"
            placeholder="Your Company Ltd."
            value={data.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            className={inputCls(errors.companyName)}
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "rfq-company-error" : undefined}
          />
          {errors.companyName && (
            <p id="rfq-company-error" role="alert" className="text-red-500 text-[11px] mt-1">
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Country */}
        <div>
          <label htmlFor="rfq-country" className={labelCls}>
            Country <span className="text-red-400">*</span>
          </label>
          <input
            id="rfq-country"
            type="text"
            autoComplete="country-name"
            placeholder="United Arab Emirates"
            value={data.country}
            onChange={(e) => onChange("country", e.target.value)}
            className={inputCls(errors.country)}
            aria-invalid={!!errors.country}
            aria-describedby={errors.country ? "rfq-country-error" : undefined}
          />
          {errors.country && (
            <p id="rfq-country-error" role="alert" className="text-red-500 text-[11px] mt-1">
              {errors.country}
            </p>
          )}
        </div>

        {/* Corporate Email */}
        <div>
          <label htmlFor="rfq-email" className={labelCls}>
            Corporate Email <span className="text-red-400">*</span>
          </label>
          <input
            id="rfq-email"
            type="email"
            autoComplete="email"
            placeholder="john@company.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={inputCls(errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "rfq-email-error" : undefined}
          />
          {errors.email && (
            <p id="rfq-email-error" role="alert" className="text-red-500 text-[11px] mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="rfq-phone" className={labelCls}>
            Phone Number
          </label>
          <input
            id="rfq-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+971 50 123 4567"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={inputCls()}
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <label htmlFor="rfq-whatsapp" className={labelCls}>
            WhatsApp Number
          </label>
          <input
            id="rfq-whatsapp"
            type="tel"
            placeholder="+971 50 123 4567"
            value={data.whatsapp}
            onChange={(e) => onChange("whatsapp", e.target.value)}
            className={inputCls()}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN FORM COMPONENT
───────────────────────────────────────────────────────── */
export default function RFQForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<RFQFormData>(INITIAL_FORM);
  const [preselectedProducts, setPreselectedProducts] = useState<string[]>([]);
  const [source, setSource] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [errors, setErrors] = useState<StepErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [rfqStarted, setRfqStarted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  /* ─── Initialize from query params ─────────────────── */
  useEffect(() => {
    if (initialized) return;

    const productParam = searchParams.get("product");
    const sourceParam = searchParams.get("source");

    if (sourceParam) {
      setSource(sourceParam);
    }

    if (productParam) {
      const slugs = productParam.split(",").map((s) => s.trim()).filter(Boolean);
      const validNames = slugsToNames(slugs);
      if (validNames.length > 0) {
        setForm((prev) => ({ ...prev, products: validNames }));
        setPreselectedProducts(validNames);
      }
    }

    setInitialized(true);
  }, [searchParams, initialized]);

  const handleChange = (field: string, value: any) => {
    // Fire RFQ Started on first user interaction
    if (!rfqStarted) {
      setRfqStarted(true);
      trackEvent("form_start", { form_name: "rfq" });
    }
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleNext = () => {
    const currentStep = step;
    const errs = validateStep(currentStep, form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    trackRFQStep(currentStep as 1 | 2 | 3);
    setStep((s) => s + 1);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    setErrors({});
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validateStep(3, form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Frontend-only demo mode — show success modal without calling API
    setStatus("success");
    setServerMsg(
      "Thank you for your inquiry. Our export team will contact you shortly. This is currently a demonstration version."
    );
    setForm(INITIAL_FORM);
  };

  const isLastStep = step === 3;

  return (
    <section
      id="rfq-form"
      ref={formRef}
      className="relative py-14 md:py-18 overflow-hidden bg-[#FAFAFA]"
      aria-label="Request For Quotation Form"
    >
      {/* ── Background texture ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #1B4332 0px, #1B4332 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1B4332]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#D4A017]" />
            <p className="text-[#D4A017] uppercase tracking-[5px] text-[11px] font-bold">
              Submit Your RFQ
            </p>
            <span className="w-8 h-px bg-[#D4A017]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight">
            Tell Us What You{" "}
            <span className="text-[#D4A017]">Need</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Fill in the form — we'll prepare a customized quotation within 24 hours.
          </p>
        </motion.div>

        {/* ── Form Card ── */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-gray-100 bg-white">
            {/* Top accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4A017] via-[#f5c842] to-[#D4A017]"
              aria-hidden="true"
            />

            {status === "success" ? (
              <SuccessPanel
                onReset={() => {
                  setStatus("idle");
                  setStep(1);
                  setServerMsg("");
                  setErrors({});
                  setPreselectedProducts([]);
                  setSource(null);
                  setRfqStarted(false);
                }}
              />
            ) : (
              <>
                {/* Step Indicator */}
                <StepIndicator currentStep={step} />

                {/* Form Body */}
                <div className="px-8 py-7">
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Context banner showing preselected products */}
                    <RFQContextBanner productNames={preselectedProducts} source={source} />
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <StepOne
                          key="step1"
                          data={form}
                          errors={errors}
                          onChange={handleChange}
                        />
                      )}
                      {step === 2 && (
                        <StepTwo
                          key="step2"
                          data={form}
                          errors={errors}
                          onChange={handleChange}
                        />
                      )}
                      {step === 3 && (
                        <StepThree
                          key="step3"
                          data={form}
                          errors={errors}
                          onChange={handleChange}
                        />
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:justify-between">
                      {/* Back button */}
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332]"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M10 7H4M7 10l-3-3 3-3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Back
                        </button>
                      ) : (
                        <div /> /* spacer */
                      )}

                      {/* Next / Submit button */}
                      {isLastStep ? (
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#1B4332] text-white font-bold text-sm rounded-xl hover:bg-[#143a28] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#1B4332]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {status === "loading" ? (
                            <>
                              <svg
                                className="animate-spin h-4 w-4 flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                              </svg>
                              Submitting…
                            </>
                          ) : (
                            <>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                              >
                                <path
                                  d="M2 8h10M9 5l3 3-3 3"
                                  stroke="currentColor"
                                  strokeWidth="1.6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Submit RFQ
                            </>
                          )}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#1B4332] text-white font-bold text-sm rounded-xl hover:bg-[#143a28] active:scale-[0.99] transition-all duration-200 shadow-lg shadow-[#1B4332]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] focus-visible:ring-offset-2"
                        >
                          Continue
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M4 7h6M7 4l3 3-3 3"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Server error */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200"
                        role="alert"
                      >
                        <p className="text-red-600 text-xs text-center">
                          {serverMsg}
                        </p>
                      </motion.div>
                    )}
                  </form>

                  {/* Privacy note */}
                  <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
                    🔒 Your details are used only to respond to your enquiry.
                    We do not share your information with third parties.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* ── Trust badges below form ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              {
                icon: "🔒",
                label: "Secure Submission",
                desc: "SSL encrypted",
              },
              {
                icon: "⏱",
                label: "24h Response",
                desc: "Guaranteed turnaround",
              },
              {
                icon: "📋",
                label: "Detailed Quote",
                desc: "Itemized pricing",
              },
              {
                icon: "🤝",
                label: "No Obligation",
                desc: "Free consultation",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-1 p-4 rounded-xl bg-white border border-gray-100 shadow-sm"
              >
                <span className="text-lg" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-[11px] font-bold text-[#111827] leading-snug">
                  {item.label}
                </p>
                <p className="text-[9px] text-gray-400 uppercase tracking-wider">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
