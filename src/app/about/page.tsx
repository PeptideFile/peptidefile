import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Peptide File",
  description:
    "Peptide File is an independent, evidence-based research site covering peptides, GLP-1 drugs, and clinical science. Learn how we rate evidence and who we are.",
  alternates: { canonical: "https://peptidefile.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          <h1
            className="text-display-lg text-ink mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-0.01em",
            }}
          >
            About Peptide File
          </h1>
          <p className="text-xl text-muted mb-10 leading-relaxed">
            Independent. Evidence-rated. No selling.
          </p>

          <div className="prose">
            <h2>What is Peptide File?</h2>
            <p>
              Peptide File is an independent research site covering peptides,
              GLP-1 receptor agonists, and related compounds in clinical
              science. We compile, rate, and summarise the published evidence —
              so you can make sense of what the data actually says.
            </p>
            <p>
              We are not affiliated with any pharmaceutical company, supplement
              brand, or clinic. We do not sell compounds. We do not give medical
              advice.
            </p>

            <h2>Why we built this</h2>
            <p>
              The peptide and GLP-1 space moves fast. Trial data, FDA timelines,
              and mechanism research are scattered across PubMed, press releases,
              and paywalled journals. Most of what you find online is either
              promotional content or forum speculation.
            </p>
            <p>
              Peptide File exists to fill that gap — structured, referenced
              research summaries written for people who want to understand the
              science, not just the hype.
            </p>

            <h2>How we rate evidence</h2>
            <p>
              Every compound on this site is assigned an evidence rating. These
              are based on the volume, quality, and consistency of published
              research:
            </p>
            <ul>
              <li>
                <strong style={{ color: "#16A34A" }}>Strong evidence</strong> —
                Multiple randomised controlled trials (RCTs) or large Phase III
                clinical trials with consistent, replicated results.
              </li>
              <li>
                <strong style={{ color: "#F59E0B" }}>Moderate evidence</strong>{" "}
                — Limited RCTs, observational studies, small clinical trials, or
                mixed results across studies.
              </li>
              <li>
                <strong style={{ color: "#8B5CF6" }}>Emerging evidence</strong>{" "}
                — Primarily animal data, in vitro studies, case reports, or
                very early-phase human trials. Promising but not yet
                established.
              </li>
            </ul>
            <p>
              Evidence ratings are not endorsements. A strong evidence rating
              means the research base is solid — it does not mean a compound is
              safe or appropriate for any individual.
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
        </article>
      </main>
      <Footer />
    </>
  );
}
