import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peptide File — The research file on peptides, protocols and clinical science",
  description:
    "Evidence-based research summaries on peptides, GLP-1 drugs, and clinical science. Independent, referenced, and rated by evidence strength.",
  openGraph: {
    siteName: "Peptide File",
    title: "Peptide File — The research file on peptides, protocols and clinical science",
    description:
      "Evidence-based research summaries on peptides, GLP-1 drugs, and clinical science.",
    type: "website",
    url: "https://peptidefile.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide File",
    description:
      "Evidence-based research summaries on peptides, GLP-1 drugs, and clinical science.",
  },
  metadataBase: new URL("https://peptidefile.com"),
  alternates: {
    canonical: "https://peptidefile.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KCQ5C5FP8J"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KCQ5C5FP8J');`}
        </Script>
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Ticker />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
