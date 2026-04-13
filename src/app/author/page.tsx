import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mark Boreland — Founder & Editor, Peptide File",
  description:
    "Mark Boreland is the founder and editor of Peptide File, an independent evidence-based research site covering peptides, GLP-1 drugs, and clinical science.",
  alternates: { canonical: "https://peptidefile.com/author" },
  openGraph: {
    title: "Mark Boreland — Founder & Editor, Peptide File",
    description:
      "Mark Boreland is the founder and editor of Peptide File, an independent evidence-based research site covering peptides, GLP-1 drugs, and clinical science.",
    url: "https://peptidefile.com/author",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Boreland",
  url: "https://peptidefile.com/author",
  jobTitle: "Founder & Editor",
  worksFor: {
    "@type": "Organization",
    name: "Peptide File",
    url: "https://peptidefile.com",
  },
};

export default function AuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "64px 48px",
        }}
      >
        <div className="eyebrow">
          <span className="eyebrow-text">Author</span>
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
          Mark Boreland
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--ink3)",
            fontWeight: 300,
            marginBottom: "48px",
            paddingBottom: "32px",
            borderBottom: "1px solid var(--rule)",
          }}
        >
          Founder &amp; Editor, Peptide File
        </p>

        <div className="prose">
          <p>
            Mark Boreland is the founder and editor of Peptide File. He started
            the site after noticing a gap between the growing public interest in
            peptides and GLP-1 compounds and the quality of information available
            online. Most of what existed was either promotional content from
            supplement companies, speculation on bodybuilding forums, or
            paywalled academic papers with no plain-English summary.
          </p>

          <p>
            Peptide File was built to bridge that gap — compiling, rating, and
            summarising the published clinical evidence so readers can make sense
            of what the data actually says. Every article on the site is grounded
            in peer-reviewed research, with evidence ratings (Strong, Moderate,
            Emerging) applied based on the quality and stage of the underlying
            studies.
          </p>

          <p>
            Mark&rsquo;s background is in product marketing and digital strategy,
            with experience across multiple B2B technology companies. He brings an
            analytical, data-first approach to health research — focused on what
            the evidence shows rather than what sells. He is not a doctor,
            pharmacist, or medical researcher, and Peptide File does not provide
            medical advice.
          </p>

          <p>
            For questions, corrections, or collaboration enquiries, contact{" "}
            <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a>.
          </p>
        </div>

        <div
          style={{
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--ink3)",
              textDecoration: "none",
            }}
          >
            &larr; Back to homepage
          </Link>
        </div>

        <style>{`
          @media (max-width: 900px) {
            article {
              padding: 40px 24px !important;
            }
          }
        `}</style>
      </article>
    </>
  );
}
