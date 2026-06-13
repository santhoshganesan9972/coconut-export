/* ════════════════════════════════════════════════
   JSON-LD Schema Components
   Generate structured data for enhanced search results
   ════════════════════════════════════════════════ */

const BASE_URL = "https://www.globalcocoexports.com";

/* ─── Organization Schema ──────────────────── */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Global Coco Exports",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo-image.png`,
    description:
      "Premium coconut, copra and coco peat export solutions for global markets. ISO & HACCP certified exporter from India.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-XXXXXXXXXX",
        contactType: "sales",
        email: "info@globalcocoexports.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/globalcocoexports",
    ],
    knowsAbout: [
      "Coconut Export",
      "Copra Supply",
      "Coco Peat Export",
      "Bulk Coconut Trading",
      "Agricultural Commodity Export",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Website Schema ───────────────────────── */
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Global Coco Exports",
    url: BASE_URL,
    description:
      "Premium coconut export solutions — fresh coconut, copra, and coco peat for international buyers.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Local Business Schema ────────────────── */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AgriculturalBusiness",
    name: "Global Coco Exports",
    description:
      "Premium coconut, copra and coco peat exporter from Tamil Nadu, India.",
    url: BASE_URL,
    telephone: "+91-XXXXXXXXXX",
    email: "info@globalcocoexports.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "AE" },
      { "@type": "Country", name: "SA" },
      { "@type": "Country", name: "DE" },
      { "@type": "Country", name: "NL" },
      { "@type": "Country", name: "US" },
      { "@type": "Country", name: "AU" },
      { "@type": "Country", name: "SG" },
    ],
    hasCertification: [
      { "@type": "Certification", name: "ISO 22000" },
      { "@type": "Certification", name: "HACCP" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Product Schema (single product) ──────── */
interface ProductSchemaProps {
  productName: string;
  description: string;
  image: string;
  sku: string;
  offers: {
    priceCurrency: string;
    price: string;
    availability: string;
  };
  category?: string;
}

export function ProductSchema({
  productName,
  description,
  image,
  sku,
  offers,
  category,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description,
    image: `${BASE_URL}${image}`,
    sku,
    category: category ?? "Agricultural Commodity",
    countryOfOrigin: { "@type": "Country", name: "India" },
    manufacturer: {
      "@type": "Organization",
      name: "Global Coco Exports",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: offers.priceCurrency,
      price: offers.price,
      priceValidUntil: new Date(
        Date.now() + 90 * 24 * 60 * 60 * 1000
      ).toISOString().split("T")[0],
      availability: offers.availability,
      url: BASE_URL,
      seller: {
        "@type": "Organization",
        name: "Global Coco Exports",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Breadcrumb Schema ────────────────────── */
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── FAQ Schema ───────────────────────────── */
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ questions }: { questions: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Aggregate Product Schema (for product listing pages) ── */
export function AggregateProductSchema({
  products,
}: {
  products: Array<{
    name: string;
    description: string;
    image: string;
    offers: {
      priceCurrency: string;
      price: string;
      availability: string;
    };
  }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Global Coco Exports — Premium Coconut Products",
    description:
      "Bulk coconut, copra, and coco peat products for international buyers.",
    numberOfItems: products.length,
    itemListElement: products.map((product, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `${BASE_URL}${product.image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: product.offers.priceCurrency,
          price: product.offers.price,
          availability: product.offers.availability,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
