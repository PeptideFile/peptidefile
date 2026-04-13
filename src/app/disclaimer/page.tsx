import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Peptide File",
  description:
    "Medical and legal disclaimer for Peptide File. All content is for informational purposes only and does not constitute medical advice.",
  alternates: { canonical: "https://peptidefile.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "64px 48px",
      }}
    >
      <div className="eyebrow">
        <span className="eyebrow-text">Legal</span>
      </div>

      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(32px, 4vw, 44px)",
          color: "var(--ink)",
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: "12px",
        }}
      >
        Medical Disclaimer
      </h1>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--ink3)",
          marginBottom: "40px",
          paddingBottom: "32px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        Last updated: April 2026
      </p>

      {/* Prominent callout box */}
      <div
        style={{
          background: "var(--paper2)",
          borderLeft: "3px solid var(--accent)",
          padding: "20px 24px",
          marginBottom: "48px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--accent)",
            marginBottom: "8px",
          }}
        >
          Important — Please Read
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "var(--ink2)",
            fontWeight: 300,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          This site provides research summaries for informational purposes only.
          Nothing on this site constitutes medical advice. Always consult a
          qualified healthcare provider before making any decisions about a
          compound or protocol.
        </p>
      </div>

      <div className="prose">
        <h2>Purpose of this site</h2>
        <p>
          The content published on peptidefile.com — including articles, compound
          profiles, evidence summaries, and any other materials — is provided for
          informational and educational purposes only. It does not constitute
          medical advice, medical diagnosis, or treatment recommendations.
        </p>
        <p>
          Do not use information from this site as a substitute for professional
          medical advice. Always seek the guidance of a qualified physician or
          other licensed healthcare provider with any questions you may have
          regarding a medical condition or treatment.
        </p>

        <h2>Not a substitute for medical advice</h2>
        <p>
          The research summaries on this site are compiled from publicly available
          sources including peer-reviewed journals, clinical trial registries, and
          regulatory submissions. They are intended to help you understand what
          the published evidence says — not to guide personal medical decisions.
        </p>
        <p>
          No doctor-patient relationship is created by reading this site.
          Individual responses to any compound vary substantially based on factors
          including health status, medications, genetics, and dosage. Only a
          qualified clinician who knows your full medical history can assess what
          is appropriate for you.
        </p>

        <h2>No endorsement of compounds</h2>
        <p>
          Peptide File does not endorse, recommend, or encourage the use of any
          compound, drug, or supplement discussed on this site. Many compounds
          covered here are research chemicals, investigational drugs, or
          substances not approved for human use by the FDA or equivalent
          regulatory bodies.
        </p>
        <p>
          Obtaining, possessing, or using unapproved substances may be illegal in
          your jurisdiction. It is your responsibility to understand and comply
          with applicable laws.
        </p>

        <h2>Accuracy of information</h2>
        <p>
          We make reasonable efforts to ensure the information on this site is
          accurate and up to date. However, clinical research is a rapidly
          evolving field. Trial results, FDA timelines, and regulatory decisions
          can change. We do not guarantee the completeness, accuracy, or currency
          of any information published here.
        </p>
        <p>
          Where we reference clinical trials, we cite published data. Evidence
          ratings reflect our interpretation of the published literature and are
          not endorsed by any regulatory authority or academic institution.
        </p>

        <h2>No affiliation</h2>
        <p>
          Peptide File is an independent publication. We are not affiliated with
          any pharmaceutical company, clinic, supplement retailer, compounding
          pharmacy, or research organisation. We do not receive compensation from
          any company for editorial coverage.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Peptide File and its operators
          disclaim all liability for any harm, loss, or damage arising from
          reliance on information published on this site.
        </p>

        <h2>External links</h2>
        <p>
          This site may link to external sources including clinical trial
          registries, journal articles, and news publications. We are not
          responsible for the content of external sites and linking does not
          imply endorsement.
        </p>

        <h2>Contact</h2>
        <p>
          If you have concerns about any content on this site, please contact us
          at <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a>.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          article { padding: 40px 24px !important; }
        }
      `}</style>
    </article>
  );
}
