import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Peptide File",
  description:
    "Peptide File is an independent, evidence-based research site covering peptides, GLP-1 drugs, and clinical science. Learn how we rate evidence and who we are.",
  alternates: { canonical: "https://peptidefile.com/about" },
};

export default function AboutPage() {
  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "64px 48px",
      }}
    >
      <div className="eyebrow">
        <span className="eyebrow-text">About</span>
      </div>

      <h1 className="page-title" style={{ marginBottom: "12px" }}>
        About Peptide File
      </h1>
      <p
        className="page-subtitle"
        style={{ marginBottom: "48px", paddingBottom: "32px", borderBottom: "1px solid var(--rule)" }}
      >
        Independent. Evidence-rated. No selling.
      </p>

      <div className="prose">
        <h2>What is Peptide File?</h2>
        <p>
          Peptide File is an independent research site covering peptides, GLP-1
          receptor agonists, and related compounds in clinical science. We
          compile, rate, and summarise the published evidence — so you can make
          sense of what the data actually says.
        </p>
        <p>
          We are not affiliated with any pharmaceutical company, supplement
          brand, or clinic. We do not sell compounds. We do not give medical
          advice.
        </p>

        <h2>Why we built this</h2>
        <p>
          The peptide and GLP-1 space moves fast. Trial data, FDA timelines, and
          mechanism research are scattered across PubMed, press releases, and
          paywalled journals. Most of what you find online is either promotional
          content or forum speculation.
        </p>
        <p>
          Peptide File exists to fill that gap — structured, referenced research
          summaries written for people who want to understand the science, not
          just the hype.
        </p>

        <h2>How we rate evidence</h2>
        <p>
          Every compound on this site is assigned an evidence rating based on the
          volume, quality, and consistency of published research:
        </p>

        {/* Evidence rows */}
        <div style={{ marginBottom: "1.5em" }}>
          {[
            {
              dot: "#1a6b3c",
              label: "Strong",
              desc: "Multiple randomised controlled trials (RCTs) or large Phase III clinical trials with consistent, replicated results.",
            },
            {
              dot: "#e8a020",
              label: "Moderate",
              desc: "Limited RCTs, observational studies, small clinical trials, or mixed results across studies.",
            },
            {
              dot: "#7a7568",
              label: "Emerging",
              desc: "Primarily animal data, in vitro studies, case reports, or very early-phase human trials. Promising but not yet established.",
            },
          ].map(({ dot, label, desc }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                marginBottom: "16px",
                padding: "14px 16px",
                background: "var(--paper2)",
                border: "1px solid var(--rule)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: dot,
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              />
              <div>
                <strong
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: dot,
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {label}
                </strong>
                <span
                  style={{
                    fontSize: "14px",
                    color: "var(--ink2)",
                    fontWeight: 300,
                    lineHeight: 1.55,
                  }}
                >
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p>
          Evidence ratings are not endorsements. A strong evidence rating means
          the research base is solid — it does not mean a compound is safe or
          appropriate for any individual.
        </p>

        <h2>Editorial independence</h2>
        <p>
          Peptide File is editorially independent. We are not funded by, or
          affiliated with, any pharmaceutical company, clinic, supplement
          retailer, or compounding pharmacy. No company pays us for editorial
          coverage. If that ever changes, we will say so clearly.
        </p>

        <h2>Who writes this?</h2>
        <p>
          <em>Author bio coming soon.</em>
        </p>

        <h2>Contact</h2>
        <p>
          For questions, corrections, or press enquiries, email{" "}
          <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a>.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          article {
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </article>
  );
}
