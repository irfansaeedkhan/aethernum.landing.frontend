import React from "react";
import type { Metadata } from "next";
import ClientLayout from "../components/ClientLayout";
import "../styles/theme.css";
import "./globals.css";
import { caustenRegular, caustenBold } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://aethernum.club"),
  title: {
    default: "Aethernum | Private AI-Driven Ecosystem",
    template: "%s | Aethernum",
  },
  description:
    "A private club where value grows in silence, wealth matures over time, and true intelligence has no face.",
  applicationName: "Aethernum",
  keywords: ["Aethernum", "AI-driven ecosystem", "decentralized finance", "private club"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aethernum",
    title: "Aethernum | Private AI-Driven Ecosystem",
    description:
      "A private club where value grows in silence, wealth matures over time, and true intelligence has no face.",
    images: [{ url: "/images/header.jpg", width: 1920, height: 1080, alt: "Aethernum private ecosystem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethernum | Private AI-Driven Ecosystem",
    description:
      "A private club where value grows in silence, wealth matures over time, and true intelligence has no face.",
    images: ["/images/header.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caustenRegular.variable} ${caustenBold.variable}`}>
      <head>
        {/* Cloud is the LCP element — preload only this so it does not share bandwidth with the hero. */}
        <link
          rel="preload"
          as="image"
          href="/images/cloud-lcp.webp"
          type="image/webp"
          media="(min-width: 744px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/cloud-mobile-lcp.webp"
          type="image/webp"
          media="(max-width: 743px)"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans bg-brand-charcoal text-brand-white">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <ClientLayout>{children}</ClientLayout>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
