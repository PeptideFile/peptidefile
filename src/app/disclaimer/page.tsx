import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — Peptide File",
  description:
    "Medical and legal disclaimer for Peptide File. All content is for informational purposes only and does not constitute medical advice.",
  alternates: { canonical: "https://peptidefile.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          {/* Prominent disclaimer box */}
          <div className="mb-10 p-6 border-2 border-amber-400 bg-highlight rounded-lg">
            <p className="font-semibold text-ink mb-2 text-lg">
              Important: Not Medical Advice
            </p>
            <p className="text-sm text-ink leading-relaxed">
              Nothing on Peptide File constitutes medical advice. All content is
              provided for informational and educational purposes only. Always
              consult a qualified healthcare provider before making any health or
              treatment decisions.
            </p>
          </div>

          <h1
            className="text-display-lg text-ink mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-0.01em",
            }}
          >
            Disclaimer
          </h1>
          <p className="text-sm text-muted mb-10">Last updated: April 2026</p>

          <div className="prose">
            <h2>No medical advice</h2>
            <p>
              The content published on peptidefile.com — including articles,
              compound profiles, evidence summaries, and any other materials —
              is provided for informational and educational purposes only. It
              does not constitute medical advice, medical diagnosis, or
              treatment recommendations.
            </p>
            <p>
              Do not use information from this site as a substitute for
              professional medical advice. Always seek the guidance of a
              qualified physician or other licensed healthcare provider with any
              questions you may have regarding a medical condition or treatment.
            </p>

            <h2>No endorsement of compounds</h2>
            <p>
              Peptide File does not endorse, recommend, or encourage the use of
              any compound, drug, or supplement discussed on this site. Many
              compounds covered here are research chemicals, investigational
              drugs, or substances that are not approved for human use by the
              FDA or equivalent regulatory bodies.
            </p>
            <p>
              Obtaining, possessing, or using unapproved substances may be
              illegal in your jurisdiction. It is your responsibility to
              understand and comply with applicable laws.
            </p>

            <h2>Accuracy of information</h2>
            <p>
              We make reasonable efforts to ensure the information on this site
              is accurate and up to date. However, clinical research is a
              rapidly evolving field. Trial results, FDA timelines, and
              regulatory decisions can change. We do not guarantee the
              completeness, accuracy, or currency of any information published
              here.
            </p>
            <p>
              Where we reference clinical trials, we cite published data.
              Evidence ratings reflect our interpretation of the published
              literature and are not endorsed by any regulatory authority or
              academic institution.
            </p>

            <h2>No affiliation</h2>
            <p>
              Peptide File is an independent publication. We are not affiliated
              with any pharmaceutical company, clinic, supplement retailer,
              compounding pharmacy, or research organisation. We do not receive
              compensation from any company for editorial coverage.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Peptide File and its
              operators disclaim all liability for any harm, loss, or damage
              arising from reliance on information published on this site.
            </p>

            <h2>Contact</h2>
            <p>
              If you have concerns about any content on this site, please
              contact us at{" "}
              <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
