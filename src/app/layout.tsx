import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#3730a3",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Edvnt | Next-Gen Multi-Tenant School Management System",
  description:
    "Edvnt is a secure, scalable, and cloud-based school ERP for schools, colleges, and coaching institutes. Manage students, academics, fees, and more with ease.",
  keywords: [
    "school management system",
    "school ERP software",
    "multi-tenant school software",
    "education management system",
    "school administration software",
    "cloud-based school ERP",
  ],
  authors: [{ name: "Edvnt Team" }],
  metadataBase: new URL("https://edvnt.in"), // Placeholder URL
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Edvnt | Next-Gen Multi-Tenant School Management System",
    description:
      "Empower your educational institution with Edvnt's all-in-one cloud ERP solution.",
    url: "https://edvnt.in",
    siteName: "Edvnt",
    images: [
      {
        url: "/og-image.jpg", // To be generated or provided
        width: 1200,
        height: 630,
        alt: "Edvnt School Management System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edvnt | Next-Gen Multi-Tenant School Management System",
    description:
      "Empower your educational institution with Edvnt's all-in-one cloud ERP solution.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Edvnt",
              operatingSystem: "Web",
              applicationCategory: "EducationalApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "120",
              },
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
