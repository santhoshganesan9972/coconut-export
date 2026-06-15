import { WhyChooseUsItem, SupplyChainStep, ExportDestination, RegionGroup } from "@/types";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    title: "Direct Farm Sourcing",
    description:
      "Direct sourcing from 200+ certified farms in Tamil Nadu — fully traceable from farm to FCL.",
    icon: "farm",
    keyAdvantage:
      "100% traceable supply chain — farm to port, no intermediaries",
    businessBenefit:
      "Competitive pricing, consistent quality, and full supply chain visibility",
    stat: { value: "200+", label: "Partner Farms" },
  },
  {
    title: "Quality Assurance",
    description:
      "Four-stage inspection at ISO 22000 & HACCP certified facilities — farm intake to pre-shipment container checks.",
    icon: "quality",
    keyAdvantage:
      "Four-stage protocol: farm intake, processing, grading, pre-shipment",
    businessBenefit:
      "Reduced rejection rates, consistent specs, full import compliance",
    stat: { value: "4", label: "Inspection Stages" },
  },
  {
    title: "Global Logistics",
    description:
      "End-to-end logistics from Chennai, Tuticorin, and Nhava Sheva ports — docs, customs, and freight in-house.",
    icon: "logistics",
    keyAdvantage:
      "Multi-port strategy with single-point accountability",
    businessBenefit:
      "Faster lead times, competitive freight, worry-free documentation",
    stat: { value: "3", label: "Port Corridors" },
  },
  {
    title: "Export Expertise",
    description:
      "10+ years exporting to 15+ countries. We manage customs, phytosanitary, and import compliance for every shipment.",
    icon: "expertise",
    keyAdvantage:
      "End-to-end documentation and compliance for hassle-free customs clearance",
    businessBenefit:
      "Reduced demurrage risk, zero doc delays, full regulatory confidence",
    stat: { value: "10+", label: "Years Exporting" },
  },
];

export const supplyChainSteps: SupplyChainStep[] = [
  {
    step: 1,
    title: "Farm Sourcing",
    description:
      "Premium coconuts hand-selected from certified farms across Tamil Nadu.",
    businessValue:
      "Direct farm relationships eliminate intermediaries — complete traceability and competitive pricing.",
    qualityRelevance:
      "Farm-level inspection for maturity, size uniformity, and visual integrity.",
    image: "/images/Farm Sourcing-image.png",
  },
  {
    step: 2,
    title: "Quality Processing",
    description:
      "ISO 22000 & HACCP certified processing — cleaned, sorted, graded to export standards.",
    businessValue:
      "Products processed under certified food safety protocols — protecting your supply chain reputation.",
    qualityRelevance:
      "CCPs monitored: temperature, humidity, hygiene, product integrity throughout.",
    image: "/images/Quality Processing-image.png",
  },
  {
    step: 3,
    title: "Packaging & Grading",
    description:
      "Export-grade packaging — ventilated mesh bags for coconuts, compressed blocks for coco peat. Tailored to your market.",
    businessValue:
      "Flexible packaging reduces handling costs and ensures optimal arrival condition.",
    qualityRelevance:
      "Each grade verified against reference samples; food-grade materials selected for climate compatibility.",
    image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
  },
  {
    step: 4,
    title: "Global Shipping",
    description:
      "Container loading and shipping via Chennai, Tuticorin, and Nhava Sheva with real-time tracking.",
    businessValue:
      "Lower landed cost through consolidated logistics, competitive freight, and included documentation.",
    qualityRelevance:
      "Container pre-inspection, optimized stowage, and ventilation management.",
    image: "/images/storytelling/CONTAINER LOADING-image.png",
  },
];

export const exportDestinations: ExportDestination[] = [
  { country: "United Arab Emirates", region: "Middle East", flag: "🇦🇪" },
  { country: "Saudi Arabia", region: "Middle East", flag: "🇸🇦" },
  { country: "Kuwait", region: "Middle East", flag: "🇰🇼" },
  { country: "Qatar", region: "Middle East", flag: "🇶🇦" },
  { country: "Oman", region: "Middle East", flag: "🇴🇲" },
  { country: "Bahrain", region: "Middle East", flag: "🇧🇭" },
  { country: "Malaysia", region: "Southeast Asia", flag: "🇲🇾" },
  { country: "Singapore", region: "Southeast Asia", flag: "🇸🇬" },
  { country: "Germany", region: "Europe", flag: "🇩🇪" },
  { country: "Netherlands", region: "Europe", flag: "🇳🇱" },
  { country: "United Kingdom", region: "Europe", flag: "🇬🇧" },
  { country: "United States", region: "North America", flag: "🇺🇸" },
  { country: "Canada", region: "North America", flag: "🇨🇦" },
  { country: "Australia", region: "Oceania", flag: "🇦🇺" },
  { country: "New Zealand", region: "Oceania", flag: "🇳🇿" },
  { country: "South Korea", region: "East Asia", flag: "🇰🇷" },
  { country: "Japan", region: "East Asia", flag: "🇯🇵" },
];

export const regionGroups: RegionGroup[] = [
  {
    region: "Middle East",
    description:
      "Our strongest market — weekly container shipments to Jebel Ali, Dammam, and major Gulf ports. Transit: 5–10 days.",
    color: "#D4A017",
    countries: exportDestinations.filter((d) => d.region === "Middle East"),
  },
  {
    region: "Europe",
    description:
      "Growing demand across the EU — shipments to Rotterdam and Hamburg serve food manufacturers and distributors. Transit: 20–25 days.",
    color: "#4A9E6B",
    countries: exportDestinations.filter((d) => d.region === "Europe"),
  },
  {
    region: "North America",
    description:
      "Partnerships in the USA and Canada serving natural foods, wholesale, and coconut water sectors. Transit: 20–30 days.",
    color: "#2D7D9A",
    countries: exportDestinations.filter((d) => d.region === "North America"),
  },
  {
    region: "Asia-Pacific",
    description:
      "Fast-growing markets across Southeast Asia, Oceania, and East Asia via Singapore and Port Klang hubs. Transit: 7–14 days.",
    color: "#9B59B6",
    countries: exportDestinations.filter(
      (d) =>
        d.region === "Southeast Asia" ||
        d.region === "Oceania" ||
        d.region === "East Asia"
    ),
  },
];
