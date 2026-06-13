import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from "@/lib/schemas";
import SkipNav from "./components/layout/SkipNav";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";
import Clarity from "./components/analytics/Clarity";
import CookieConsent from "./components/analytics/CookieConsent";
import TrackingInit from "./components/analytics/TrackingInit";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const BASE_URL = "https://www.globalcocoexports.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B4332",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Global Coco Exports | Premium Coconut Export Solutions",
    template: "%s | Global Coco Exports",
  },
  description:
    "Supplying bulk coconut, copra and coco peat solutions to importers, distributors and industrial buyers worldwide. ISO & HACCP certified exporter from India.",
  keywords: [
    "coconut exporter India",
    "fresh coconut exporter",
    "copra supplier India",
    "coco peat exporter",
    "bulk coconut supplier",
    "coconut export company",
    "Pollachi coconut exporter",
    "coconut wholesale supplier",
    "B2B coconut procurement",
    "coconut shipping India",
  ],
  authors: [{ name: "Global Coco Exports" }],
  creator: "Global Coco Exports",
  publisher: "Global Coco Exports",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Global Coco Exports | Premium Coconut Export Solutions",
    description:
      "Premium coconut, copra and coco peat export solutions for global markets. ISO & HACCP certified.",
    url: BASE_URL,
    siteName: "Global Coco Exports",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Global Coco Exports — Premium Coconut Export Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Coco Exports | Premium Coconut Export Solutions",
    description:
      "Supplying bulk coconut, copra and coco peat to importers worldwide. ISO & HACCP certified exporter from India.",
    images: ["/images/og-default.png"],
    creator: "@globalcocoexports",
  },
  icons: {
    icon: [
      { url: "/images/logo-image.png", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu",
    "og:country-name": "India",
    "og:phone_number": "+91 XXXXXXXXXX",
    "business:contact_data:street_address": "Tamil Nadu, India",
    "business:contact_data:locality": "Tamil Nadu",
    "business:contact_data:country_name": "India",
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans antialiased bg-[#FAFAFA] text-[#111827]`}
      >
        <SkipNav />
        <GoogleAnalytics />
        <Clarity />
        <CookieConsent />
        <TrackingInit />
        <main id="main-content">
          {children}
        </main>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
