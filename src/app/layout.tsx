import type { Metadata } from "next";
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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
