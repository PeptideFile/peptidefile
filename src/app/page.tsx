import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

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
  description: "Evidence-based research summaries on peptides, GLP-1 drugs, and clinical science.",
};

const latestFiles = [
  {
    category: "GLP-1 / Triple Agonist",
    title: "Retatrutide vs Semaglutide: A Data-Only Comparison",
    excerpt:
      "Head-to-head efficacy, tolerability, and mechanism — what the Phase III data actually shows when you stack the two trials side by side.",
    evidence: "strong" as const,
    date: "Apr 2026",
    words: "2,400w",
    href: "/retatrutide",
  },
  {
    category: "Weight Loss Peptides",
    title: "AOD-9604: What the Research Actually Shows",
    excerpt:
      "Widely used, rarely understood. We review every published study on AOD-9604 and separate the real signal from the bodybuilding forum mythology.",
    evidence: "moderate" as const,
    date: "Mar 2026",
    words: "1,900w",
    href: "/",
  },
  {
    category: "Recovery",
    title: "BPC-157: Full Evidence Review and Protocol Data",
    excerpt:
      "Arguably the most researched recovery peptide. We examine all available animal and human data on tendon healing, gut repair, and systemic effects.",
    evidence: "moderate" as const,
    date: "Mar 2026",
    words: "3,100w",
    href: "/bpc-157",
  },
  {
    category: "Growth Hormone",
    title: "CJC-1295 vs Ipamorelin: Which Stack Holds Up?",
    excerpt:
      "A side-by-side review of the two most popular GHRH/GHRP peptides — mechanism, published data, and why the combination became so widely used.",
    evidence: "emerging" as const,
    date: "Feb 2026",
    words: "2,200w",
    href: "/",
  },
  {
    category: "GLP-1 Science",
    title: "How GLP-1 Receptor Agonists Work: Plain English",
    excerpt:
      "From incretin mimetics to triple agonists — a clear explainer of the underlying science that drives the entire GLP-1 drug class.",
    evidence: "strong" as const,
    date: "Feb 2026",
    words: "3,400w",
    href: "/semaglutide",
  },
  {
    category: "Clinical Trials",
    title: "Retatrutide FDA Timeline: What We Know and When",
    excerpt:
      "NDA timelines, PDUFA dates, and what the TRIUMPH trial programme means for regulatory approval. Everything we know as of April 2026.",
    evidence: "strong" as const,
    date: "Apr 2026",
    words: "1,600w",
    href: "/retatrutide",
  },
];

const evidenceDot: Record<"strong" | "moderate" | "emerging", string> = {
  strong: "#1a6b3c",
  moderate: "#e8a020",
  emerging: "#7a7568",
};

const evidenceLabel: Record<"strong" | "moderate" | "emerging", string> = {
  strong: "Strong",
  moderate: "Moderate",
  emerging: "Emerging",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          borderBottom: "1px solid var(--rule)",
          padding: "80px 48px 60px",
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left column */}
          <div>
            <div className="eyebrow">
              <span className="eyebrow-text">Evidence-based research files</span>
            </div>

            <h1
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(44px, 5vw, 72px)",
                lineHeight: 1.05,
                color: "var(--ink)",
                fontWeight: 400,
                marginBottom: "24px",
              }}
            >
              The definitive file on{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
                peptides
              </em>{" "}
              and clinical science
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "var(--ink2)",
                fontWeight: 300,
                lineHeight: 1.6,
                maxWidth: "520px",
                marginBottom: "36px",
              }}
            >
              Independent, cited research on the compounds reshaping medicine —
              from retatrutide&apos;s Phase III data to BPC-157 recovery
              protocols. No hype. No selling. Just the file.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              <Link
                href="/#compounds"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  background: "var(--accent)",
                  color: "#fff",
                  padding: "14px 32px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background 0.15s",
                }}
              >
                Browse the Files
              </Link>
              <Link
                href="/retatrutide"
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--ink3)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--rule)",
                  paddingBottom: "2px",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                Start with Retatrutide →
              </Link>
            </div>
          </div>

          {/* Right column — Featured file */}
          <div
            style={{
              borderLeft: "1px solid var(--rule)",
              paddingLeft: "40px",
            }}
            className="hero-sidebar"
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--ink3)",
                marginBottom: "12px",
              }}
            >
              Latest File
            </p>

            <Link
              href="/retatrutide"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                className="featured-card"
                style={{
                  background: "var(--paper2)",
                  border: "1px solid var(--rule)",
                  padding: "28px",
                  transition: "transform 0.2s, border-color 0.2s",
                  cursor: "pointer",
                }}
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
                  ▶ Retatrutide — Triple Agonist
                </p>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "22px",
                    color: "var(--ink)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: "12px",
                  }}
                >
                  The Complete Retatrutide File
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--ink3)",
                    fontWeight: 300,
                    lineHeight: 1.55,
                    marginBottom: "16px",
                  }}
                >
                  Everything currently known from Phase III trials — efficacy
                  data, mechanism, side effect profile, and FDA timeline.
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--rule)",
                    paddingTop: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      color: "var(--ink3)",
                    }}
                  >
                    Updated Apr 2026 · 4,800 words
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "9px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      background: "#1a6b3c",
                      color: "#fff",
                      padding: "3px 8px",
                    }}
                  >
                    Phase III
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ────────────────────────────────────────── */}
      <section
        style={{
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          className="stats-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {[
            {
              value: "48",
              sup: "+",
              label: "Compounds Filed",
            },
            {
              value: "312",
              sup: "",
              label: "Studies Cited",
            },
            {
              value: "16",
              sup: "k",
              label: "Monthly Readers",
            },
            {
              value: "100%",
              sup: "",
              label: "Independent — No Sponsors",
            },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "0 32px",
                borderLeft: i > 0 ? "1px solid var(--rule)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(32px, 3vw, 40px)",
                  color: "var(--ink)",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
                {stat.sup && (
                  <sup
                    style={{
                      color: "var(--accent)",
                      fontSize: "20px",
                      verticalAlign: "super",
                    }}
                  >
                    {stat.sup}
                  </sup>
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--ink3)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. LATEST FILES ─────────────────────────────────────── */}
      <section
        id="compounds"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          {/* Section header */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              padding: "40px 0 0",
              borderBottom: "1px solid var(--rule)",
              marginBottom: "0",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(24px, 2.5vw, 32px)",
                color: "var(--ink)",
                fontWeight: 400,
                paddingBottom: "16px",
              }}
            >
              Latest files
            </h2>
            <Link
              href="/"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink3)",
                textDecoration: "none",
                paddingBottom: "16px",
              }}
            >
              View all files →
            </Link>
          </div>

          {/* 3-col card grid (borders, no gap) */}
          <div
            className="files-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            {latestFiles.map((file, i) => (
              <Link
                key={i}
                href={file.href}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="file-card"
                  style={{
                    padding: "28px 28px 24px",
                    borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--rule)" : "none",
                    borderBottom: i < 3 ? "1px solid var(--rule)" : "none",
                    transition: "background 0.15s",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
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
                    {file.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "20px",
                      color: "var(--ink)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      marginBottom: "12px",
                    }}
                  >
                    {file.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--ink3)",
                      fontWeight: 300,
                      lineHeight: 1.55,
                      flex: 1,
                      marginBottom: "16px",
                    }}
                  >
                    {file.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "auto",
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
                        background: evidenceDot[file.evidence],
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    <span>{evidenceLabel[file.evidence]}</span>
                    <span style={{ color: "var(--rule)", margin: "0 4px" }}>·</span>
                    <span>{file.date}</span>
                    <span style={{ color: "var(--rule)", margin: "0 4px" }}>·</span>
                    <span>{file.words}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. RETATRUTIDE SPOTLIGHT ────────────────────────────── */}
      <section
        style={{
          background: "var(--ink)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "80px 48px",
        }}
      >
        <div
          className="spotlight-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--accent2)",
                marginBottom: "20px",
              }}
            >
              Compound Spotlight — April 2026
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(36px, 4vw, 52px)",
                color: "#fff",
                fontWeight: 400,
                lineHeight: 1.08,
                marginBottom: "20px",
              }}
            >
              Retatrutide.{" "}
              <em style={{ color: "var(--accent2)", fontStyle: "italic" }}>
                The triple agonist
              </em>{" "}
              changing everything.
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.65)",
                fontWeight: 300,
                lineHeight: 1.65,
                marginBottom: "32px",
                maxWidth: "460px",
              }}
            >
              Eli Lilly&apos;s triple agonist targets GLP-1, GIP, and glucagon
              receptors simultaneously — producing weight loss data that
              outperforms everything before it. Phase III is done. The NDA is
              coming.
            </p>
            <Link
              href="/retatrutide"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                background: "var(--accent2)",
                color: "var(--ink)",
                padding: "13px 28px",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.15s",
                fontWeight: 500,
              }}
            >
              Read the Full File →
            </Link>
          </div>

          {/* Right — 2×2 stat grid */}
          <div
            className="spotlight-stats"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { value: "28.7%", label: "Body weight reduction (Phase III)" },
              { value: "68wk", label: "Trial duration (TRIUMPH-4)" },
              { value: "3×", label: "Receptor targets" },
              { value: "2026", label: "Expected NDA submission" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "28px",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    color: "var(--accent2)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. NEWSLETTER ───────────────────────────────────────── */}
      <NewsletterSignup />

      {/* ── Responsive overrides ─────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 48px 24px !important;
          }
          .hero-sidebar {
            border-left: none !important;
            border-top: 1px solid var(--rule);
            padding-left: 0 !important;
            padding-top: 32px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 32px 24px !important;
            gap: 0 !important;
          }
          .stats-grid > div:nth-child(3) {
            border-left: none !important;
            border-top: 1px solid var(--rule);
            padding-top: 24px !important;
          }
          .stats-grid > div:nth-child(4) {
            border-top: 1px solid var(--rule);
            padding-top: 24px !important;
          }
          .files-grid {
            grid-template-columns: 1fr !important;
          }
          .file-card {
            border-right: none !important;
            border-bottom: 1px solid var(--rule) !important;
          }
          .spotlight-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
        .file-card:hover { background: var(--paper2); }
        .featured-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
