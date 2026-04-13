import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompoundCard from "@/components/CompoundCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { compounds } from "@/data/compounds";

export const metadata: Metadata = {
  title: "Peptide File — The research file on peptides, protocols and clinical science",
  description:
    "Evidence-based research summaries on peptides, GLP-1 drugs, and clinical science. Independent, referenced, and rated by evidence strength.",
  alternates: { canonical: "https://peptidefile.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Peptide File",
  url: "https://peptidefile.com",
  description:
    "Evidence-based research summaries on peptides, GLP-1 drugs, and clinical science.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://peptidefile.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border py-20 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1
              className="text-display-xl text-ink mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              Peptide File
            </h1>
            <p
              className="text-xl text-muted mb-6"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              The research file on peptides, protocols and clinical science
            </p>
            <p className="text-base text-muted leading-relaxed max-w-xl mx-auto">
              We compile, rate, and summarise the clinical evidence on peptides
              and metabolic drugs — so you can separate signal from noise.
              Independent. Referenced. Evidence-rated.
            </p>
          </div>
        </section>

        {/* Compound grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2
              className="text-display-sm text-ink"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Files
            </h2>
            <span
              className="text-xs text-muted uppercase tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {compounds.length} compounds indexed
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {compounds.map((compound) => (
              <CompoundCard
                key={compound.slug}
                name={compound.name}
                slug={compound.slug}
                category={compound.category}
                evidenceLevel={compound.evidenceLevel}
                shortDescription={compound.shortDescription}
              />
            ))}
          </div>
        </section>

        {/* Evidence rating explainer */}
        <section className="border-t border-border py-12 px-4 sm:px-6" style={{ backgroundColor: "rgba(254, 243, 199, 0.3)" }}>
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-display-sm text-ink mb-6 text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              How We Rate Evidence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  colorStyle: { color: "#16A34A" },
                  bgClass: "bg-green-100 border border-green-200",
                  label: "Strong",
                  desc: "Multiple RCTs or large-scale clinical trials with consistent results.",
                },
                {
                  colorStyle: { color: "#F59E0B" },
                  bgClass: "bg-amber-100 border border-amber-200",
                  label: "Moderate",
                  desc: "Limited RCTs, observational studies, or mixed results across trials.",
                },
                {
                  colorStyle: { color: "#8B5CF6" },
                  bgClass: "bg-purple-100 border border-purple-200",
                  label: "Emerging",
                  desc: "Mostly animal data, case studies, or very early-phase human trials.",
                },
              ].map(({ colorStyle, bgClass, label, desc }) => (
                <div key={label} className={`p-4 rounded ${bgClass}`}>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace", ...colorStyle }}
                  >
                    {label}
                  </p>
                  <p className="text-sm text-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="border-t border-border py-4 px-4 sm:px-6">
          <NewsletterSignup />
        </section>
      </main>

      <Footer />
    </>
  );
}
