import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Compare Compounds — Peptide File",
  description: "Side-by-side comparison of peptides and GLP-1 drugs by evidence, mechanism, and efficacy data.",
  alternates: { canonical: "https://peptidefile.com/compare" },
};

export default function ComparePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1
            className="text-display-lg text-ink mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Compare
          </h1>
          <p className="text-muted text-lg mb-8">
            Side-by-side compound comparisons — coming soon.
          </p>
          <p className="text-sm text-muted">
            We&apos;re building a comparison tool to put Retatrutide vs Tirzepatide vs Semaglutide head-to-head on efficacy, side effects, and trial data.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
