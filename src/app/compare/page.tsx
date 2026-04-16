import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare Compounds — Peptide File",
  description:
    "Side-by-side comparison of peptides and GLP-1 drugs by evidence, mechanism, and efficacy data.",
  alternates: { canonical: "https://peptidefile.com/compare" },
};

const comparisons = [
  {
    category: "GLP-1 / Triple Agonist",
    title: "Retatrutide vs Semaglutide vs Tirzepatide",
    excerpt:
      "The three-way data comparison — efficacy, weight loss, tolerability, and mechanism across all three major GLP-1 class drugs.",
    evidence: "Strong" as const,
    evidenceColor: "#1a6b3c",
  },
  {
    category: "Fat Loss",
    title: "Best Peptide for Fat Loss 2026",
    excerpt:
      "A ranked, evidence-weighted comparison of every compound with meaningful fat-loss data — from AOD-9604 to retatrutide.",
    evidence: "Moderate" as const,
    evidenceColor: "#e8a020",
  },
  {
    category: "Recovery",
    title: "BPC-157 vs TB-500 vs Thymosin",
    excerpt:
      "The three most commonly stacked recovery peptides reviewed head-to-head on mechanism, evidence, and real-world use patterns.",
    evidence: "Moderate" as const,
    evidenceColor: "#e8a020",
  },
  {
    category: "Metabolic",
    title: "Peptides vs Prescription GLP-1s",
    excerpt:
      "Research-grade peptides against FDA-approved GLP-1 drugs — how do they compare on evidence quality, safety, and access?",
    evidence: "Moderate" as const,
    evidenceColor: "#e8a020",
  },
  {
    category: "GLP-1",
    title: "Compounded vs Brand Semaglutide",
    excerpt:
      "What the evidence actually says about compounded semaglutide — bioequivalence, quality control, and regulatory status.",
    evidence: "Strong" as const,
    evidenceColor: "#1a6b3c",
  },
];

export default function ComparePage() {
  return (
    <article
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "64px 48px",
      }}
    >
      <div className="eyebrow">
        <span className="eyebrow-text">Compare</span>
      </div>

      <h1 className="page-title" style={{ marginBottom: "12px" }}>
        Compound Comparisons
      </h1>
      <p
        className="page-intro"
        style={{ maxWidth: "560px", marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid var(--rule)" }}
      >
        Side-by-side evidence comparisons across the peptide and GLP-1 landscape
        — mechanism, efficacy, tolerability, and trial data in one place.
      </p>

      {/* Comparison cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          border: "1px solid var(--rule)",
        }}
        className="compare-grid"
      >
        {comparisons.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "28px",
              borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
              borderBottom: i < comparisons.length - 1 ? "1px solid var(--rule)" : "none",
              background: "var(--paper)",
              transition: "background 0.15s",
              position: "relative",
            }}
            className="compare-card"
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                marginBottom: "10px",
              }}
            >
              {item.category}
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "20px",
                color: "var(--ink)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "var(--ink3)",
                fontWeight: 300,
                lineHeight: 1.55,
                marginBottom: "16px",
              }}
            >
              {item.excerpt}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "auto",
                paddingTop: "16px",
                borderTop: "1px solid var(--rule)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  color: "var(--ink3)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: item.evidenceColor,
                    display: "inline-block",
                  }}
                />
                {item.evidence}
              </div>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--ink3)",
                  background: "var(--paper2)",
                  padding: "3px 10px",
                  border: "1px solid var(--rule)",
                }}
              >
                Coming Soon
              </span>
            </div>
          </div>
        ))}

        {/* Final card — odd count, spans full width if needed */}
        {comparisons.length % 2 !== 0 && (
          <div
            style={{
              padding: "28px",
              borderTop: "1px solid var(--rule)",
              background: "var(--paper2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink3)",
              }}
            >
              More comparisons coming soon
            </p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: "48px",
          padding: "28px",
          background: "var(--paper2)",
          border: "1px solid var(--rule)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: "20px",
              color: "var(--ink)",
              marginBottom: "6px",
            }}
          >
            Looking for a specific comparison?
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "var(--ink3)",
              fontWeight: 300,
              margin: 0,
            }}
          >
            Email us and we&apos;ll prioritise it for the next file.
          </p>
        </div>
        <Link
          href="mailto:hello@peptidefile.com"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "12px 24px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Request a Comparison
        </Link>
      </div>

      <style>{`
        @media (max-width: 900px) {
          article { padding: 40px 24px !important; }
          .compare-grid { grid-template-columns: 1fr !important; }
          .compare-card { border-right: none !important; border-bottom: 1px solid var(--rule) !important; }
        }
        .compare-card:hover { background: var(--paper2) !important; }
      `}</style>
    </article>
  );
}
