import { WhyChooseUsItem, SupplyChainStep, ExportDestination, RegionGroup } from "@/types";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    title: "Direct Farm Sourcing",
    description:
      "Direct partnerships with 200+ certified farms across Tamil Nadu's coconut belt. No intermediaries — fully traceable produce from farm to FCL, with consistent quality year-round.",
    icon: "farm",
    keyAdvantage:
      "100% traceable supply chain — every batch traceable to source farm with no intermediary dilution",
    businessBenefit:
      "Buyers receive competitive pricing, consistent export-grade quality, and full supply chain visibility without intermediary markups",
    stat: { value: "200+", label: "Partner Farms" },
  },
  {
    title: "Quality Assurance",
    description:
      "Multi-stage inspection at ISO 22000 & HACCP certified facilities — farm screening, processing verification, weight calibration, and pre-shipment container checks. Every shipment meets defined export-grade specs.",
    icon: "quality",
    keyAdvantage:
      "Four-stage inspection protocol at farm intake, processing, grading, and pre-shipment stages",
    businessBenefit:
      "Importers experience reduced rejection rates, consistent specification compliance, and full adherence to destination country import standards",
    stat: { value: "4", label: "Inspection Stages" },
  },
  {
    title: "Global Logistics",
    description:
      "Integrated logistics across Chennai, Tuticorin, and Nhava Sheva ports. In-house documentation, customs clearance, and freight management with real-time container tracking for every shipment.",
    icon: "logistics",
    keyAdvantage:
      "Multi-port strategy with end-to-end logistics management under single-point accountability",
    businessBenefit:
      "Importers receive faster lead times, competitive freight rates through consolidated carrier relationships, and worry-free documentation compliance",
    stat: { value: "3", label: "Port Corridors" },
  },
  {
    title: "Export Expertise",
    description:
      "10+ years exporting to 15+ countries. Our team manages customs, phytosanitary requirements, and import regulations. Every shipment includes complete documentation for smooth clearance at destination ports.",
    icon: "expertise",
    keyAdvantage:
      "End-to-end documentation and compliance management for hassle-free customs clearance at destination",
    businessBenefit:
      "Importers benefit from reduced demurrage risk, zero documentation-related delays, and full confidence in regulatory compliance across 15+ markets",
    stat: { value: "10+", label: "Years Exporting" },
  },
];

export const supplyChainSteps: SupplyChainStep[] = [
  {
    step: 1,
    title: "Farm Sourcing",
    description:
      "Premium coconuts hand-selected from certified partner farms across Tamil Nadu. Our agronomists ensure optimal harvest timing, variety selection, and quality from source.",
    businessValue:
      "Buyers benefit from direct farm relationships that eliminate intermediaries, ensuring complete traceability from grove to global buyer and competitive pricing from source.",
    qualityRelevance:
      "Farm-level quality gates — each batch inspected for maturity, size uniformity, and visual integrity before acceptance into processing.",
    image: "/images/Farm Sourcing-image.png",
  },
  {
    step: 2,
    title: "Quality Processing",
    description:
      "Hygienic processing at ISO 22000 and HACCP certified facilities. Products are cleaned, sorted, graded, and prepared to strict export standards by trained QA personnel.",
    businessValue:
      "Commercial partners receive products processed under internationally certified food safety protocols — protecting supply chain reputation and ensuring import compliance.",
    qualityRelevance:
      "Critical Control Points monitored continuously: temperature, humidity, hygiene, and product integrity across all processing stages.",
    image: "/images/Quality Processing-image.png",
  },
  {
    step: 3,
    title: "Packaging & Grading",
    description:
      "Export-grade packaging to maintain freshness — from ventilated mesh bags for whole coconuts to compressed blocks for coco peat. Tailored to destination market requirements.",
    businessValue:
      "Importers benefit from flexible packaging configurations that reduce secondary handling costs and ensure products arrive in optimal condition at destination.",
    qualityRelevance:
      "Each grade visually verified against reference samples; all packaging materials food-grade certified and selected for destination climate compatibility.",
    image: "/images/storytelling/PRODUCTION & PACKAGING-image.png",
  },
  {
    step: 4,
    title: "Global Shipping",
    description:
      "Container loading and shipping through major Indian ports with real-time tracking. We partner with Maersk, MSC, and CMA CGM for competitive freight and reliable schedules worldwide.",
    businessValue:
      "Commercial partners achieve lower total landed cost through consolidated logistics, competitive freight rates, and complete documentation support included with every shipment.",
    qualityRelevance:
      "Container pre-inspection, optimized stowage, and ventilation management ensure product condition throughout ocean transit.",
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
      "Our strongest market corridor — serving GCC nations with consistent weekly container shipments to Jebel Ali, Dammam, and other major Gulf ports. Deep relationships with importers across the region ensure smooth customs clearance and last-mile distribution. Typical transit time from South Indian ports: 5–10 days.",
    color: "#D4A017",
    countries: exportDestinations.filter((d) => d.region === "Middle East"),
  },
  {
    region: "Europe",
    description:
      "Growing demand for organic and premium coconut products across the EU. Our shipments to Rotterdam and Hamburg serve food manufacturers, health food distributors, and retail chains with full compliance to EU phytosanitary and quality standards. Typical transit time from Nhava Sheva: 20–25 days.",
    color: "#4A9E6B",
    countries: exportDestinations.filter((d) => d.region === "Europe"),
  },
  {
    region: "North America",
    description:
      "Strategic partnerships with importers in the USA and Canada serving the natural foods sector, wholesale clubs, and coconut water processors. All shipments comply with FDA import requirements and USDA phytosanitary standards. Typical transit time from Chennai/Nhava Sheva: 20–30 days.",
    color: "#2D7D9A",
    countries: exportDestinations.filter((d) => d.region === "North America"),
  },
  {
    region: "Asia-Pacific",
    description:
      "Fast-growing markets across Southeast Asia, Oceania, and East Asia. Our proximity to regional shipping hubs in Singapore and Port Klang enables rapid transit times and cost-effective logistics for buyers across the Asia-Pacific trade zone. Typical transit time from Chennai: 7–14 days.",
    color: "#9B59B6",
    countries: exportDestinations.filter(
      (d) =>
        d.region === "Southeast Asia" ||
        d.region === "Oceania" ||
        d.region === "East Asia"
    ),
  },
];
