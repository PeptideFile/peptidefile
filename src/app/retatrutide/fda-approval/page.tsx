import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Retatrutide FDA Approval Date: 2027 Timeline & Catalysts";
const DESCRIPTION =
  "Retatrutide FDA approval date tracker: expected 2027 based on Phase III TRIUMPH readouts through 2026. Filing timeline, priority review, and catalysts.";
const SLUG = "retatrutide/fda-approval";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-21T00:00:00+00:00";
const MODIFIED = "2026-04-21T00:00:00+00:00";

export const metadata: Metadata = {
  title: `${TITLE} | Peptide File`,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description:
      "Expected FDA approval in 2027 based on Phase III TRIUMPH readouts. Full filing timeline, priority review scenarios, and the catalysts to watch.",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Mark Boreland"],
    siteName: "Peptide File",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Expected FDA approval in 2027 based on Phase III TRIUMPH readouts through 2026. Filing timeline and catalysts.",
  },
};

// ---------- FAQ DATA ----------
const faqs = [
  {
    q: "When will retatrutide be FDA approved?",
    a: "The most likely window is 2027, based on Phase III TRIUMPH readouts continuing through 2026 and standard FDA review timelines. If Eli Lilly files the New Drug Application in late 2026, a priority review (six months) would put approval in mid-2027 and a standard review (ten months) in late 2027. A 2026 approval is not realistic given the remaining trial schedule.",
  },
  {
    q: "Has Eli Lilly submitted an NDA for retatrutide?",
    a: "No. As of April 2026, the NDA has not been submitted. The company has not publicly disclosed a target filing date. Analyst consensus points to late 2026 or early 2027 based on when the cardiovascular outcomes trial and the remaining TRIUMPH readouts are expected to complete.",
  },
  {
    q: "Will retatrutide qualify for FDA priority review?",
    a: "Likely yes. Priority review is given to drugs that offer meaningful advances over existing approved treatments. Retatrutide's 28.7% weight loss at 12mg exceeds the approved class (tirzepatide at 22.5%, semaglutide at 14.9%). Wegovy received priority review for obesity, setting the precedent. Priority review compresses FDA evaluation from 10 months to six.",
  },
  {
    q: "What could delay FDA approval of retatrutide?",
    a: "Three main risks: a serious safety signal emerging in the remaining TRIUMPH readouts (particularly dysesthesia escalation or cardiovascular signal), manufacturing issues during the pre-approval inspection, or an FDA advisory committee requesting additional data. The cardiovascular outcomes trial (TRIUMPH-3) is the longest trial in the program and its result is the main gating item.",
  },
  {
    q: "Will retatrutide be approved for both obesity and diabetes?",
    a: "The initial NDA is expected to cover obesity (chronic weight management), mirroring the Wegovy and Zepbound pathway. A separate approval for type 2 diabetes would follow based on TRIUMPH-2 data, similar to how tirzepatide received Mounjaro (diabetes) and Zepbound (obesity) approvals on separate tracks. Both indications are likely within 12 months of each other.",
  },
  {
    q: "What brand name will retatrutide use?",
    a: "Eli Lilly has not announced a brand name as of April 2026. Tirzepatide uses Mounjaro for diabetes and Zepbound for obesity. The brand name is typically disclosed 6-12 months before expected launch and requires FDA review for avoiding medication confusion.",
  },
  {
    q: "Will retatrutide be available internationally before or after FDA approval?",
    a: "The EMA (Europe) and MHRA (UK) review processes run in parallel with the FDA but on different timelines. Approvals typically arrive within 12 months of each other. Eli Lilly has historically prioritised the US launch for incretin products, with European and UK rollout following within a year. Availability outside approved markets will be limited by manufacturing capacity.",
  },
  {
    q: "Is there an early access program for retatrutide?",
    a: "No broad early access program has been announced. Ongoing Phase III trials remain the only legitimate route to receiving retatrutide in the US. ClinicalTrials.gov lists active TRIUMPH sites. Grey-market sources selling retatrutide carry substantial safety risks and are not a substitute for supervised clinical trial access.",
  },
];

// ---------- PAGE ----------
export default function RetatrutideFDAApprovalPage() {
  const articleJsonLd = articleSchema({
    headline: TITLE,
    description:
      "Expected FDA approval in 2027 based on Phase III TRIUMPH readouts through 2026. Filing timeline, priority review scenarios, and the catalysts to watch.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
  });

  const faqJsonLd = faqSchema(faqs);

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "Retatrutide", item: "https://peptidefile.com/retatrutide" },
    { name: "FDA Approval", item: CANONICAL },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* PAGE HEADER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 32px 40px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          className="mono-label"
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <span>Retatrutide File</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Regulatory</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span
            style={{
              background: "#fdf4e3",
              color: "#8a6d3b",
              border: "1px solid #d4c5a9",
              padding: "3px 8px",
              borderRadius: "2px",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Evidence: Moderate
          </span>
        </div>

        <h1 className="article-title">
          Retatrutide FDA Approval Date: 2027 Timeline and Catalysts
        </h1>

        <p className="page-intro">
          Retatrutide is expected to receive FDA approval in 2027, with Eli
          Lilly likely to file the New Drug Application in late 2026 after the
          remaining Phase III TRIUMPH readouts. Priority review would put the
          decision in mid-2027; standard review extends it to late 2027.
        </p>

        <div
          className="mono-label"
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "32px",
            flexWrap: "wrap",
            fontSize: "11px",
            opacity: 0.7,
          }}
        >
          <span>
            By{" "}
            <Link href="/author" style={{ color: "inherit", textDecoration: "underline" }}>
              Mark Boreland
            </Link>
          </span>
          <span>Last updated: April 2026</span>
          <span>~1,500 words</span>
        </div>
      </div>

      {/* KEY DATA GRID */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
            background: "var(--rule)",
            border: "1px solid var(--rule)",
          }}
        >
          {[
            { stat: "Phase III", label: "Current status" },
            { stat: "Late 2026", label: "Expected NDA filing" },
            { stat: "2027", label: "Expected approval" },
            { stat: "Likely", label: "Priority review" },
            { stat: "8 trials", label: "TRIUMPH program" },
            { stat: "Dec 2025", label: "First readout (done)" },
            { stat: "7 in 2026", label: "Remaining readouts" },
            { stat: "Obesity", label: "First indication" },
          ].map((item) => (
            <div
              key={item.stat}
              style={{
                background: "var(--paper)",
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "32px",
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {item.stat}
              </div>
              <div
                className="mono-label"
                style={{ fontSize: "10px", lineHeight: 1.4 }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 32px 80px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 280px",
          gap: "64px",
        }}
      >
        {/* ARTICLE BODY */}
        <article className="prose">
          <p>
            Retatrutide is expected to receive FDA approval in 2027. The most
            probable window is mid-2027 if Eli Lilly files the New Drug
            Application in late 2026 and the FDA grants priority review, or
            late 2027 if the review proceeds on standard timelines. A 2026
            approval is not realistic given the remaining Phase III TRIUMPH
            readouts and the compilation time required before an NDA
            submission.
          </p>

          <p>
            The critical gating item is the cardiovascular outcomes trial,
            TRIUMPH-3, which is the longest in the program. Other TRIUMPH
            trials (obesity, diabetes, obstructive sleep apnea, hepatic
            endpoints) are expected to read out through 2026. Eli Lilly has
            not publicly disclosed a target filing date, but analyst consensus
            based on the trial schedule points to late 2026.
          </p>

          <p>
            This article walks through the regulatory pathway from where
            retatrutide stands today to the expected approval decision, the
            specific catalysts that will move the timeline forward or back,
            and how the FDA process for retatrutide is likely to compare with
            recent class approvals for Wegovy and Zepbound.
          </p>

          <h2 id="what-it-is">Where retatrutide stands with the FDA today</h2>

          <p>
            As of April 2026, retatrutide (LY3437943) is an investigational
            drug. It has not been submitted to the FDA for approval. It is not
            available through legitimate prescription or compounding channels.
            The only lawful route to receiving retatrutide in the US is
            enrolment in one of the ongoing Phase III TRIUMPH trials, several
            of which are still enrolling participants at ClinicalTrials.gov-
            listed sites.
          </p>

          <p>
            The FDA drug approval pathway for new molecular entities proceeds
            through four stages: preclinical, Phase I (safety and
            pharmacokinetics), Phase II (dose finding and initial efficacy),
            and Phase III (pivotal efficacy and safety). Retatrutide is
            mid-way through Phase III, with the first of eight trials
            (TRIUMPH-4) having read out in December 2025.
          </p>

          <p>
            After Phase III completes, the sponsor compiles and submits an
            NDA, which typically takes three to six months. The FDA then
            reviews the NDA under either standard (ten-month) or priority
            (six-month) timelines. Priority review is granted when the drug
            offers a meaningful advance over approved therapies. For the
            efficacy background that underpins the priority review case, see
            the{" "}
            <Link href="/retatrutide/clinical-trial-results">
              Retatrutide Clinical Trial Results
            </Link>{" "}
            article.
          </p>

          <h2 id="what-the-research-says">What the Phase III schedule tells us about the approval date</h2>

          <p>
            Eli Lilly runs eight trials under the TRIUMPH banner, each
            studying retatrutide in a different population or comorbidity.
            TRIUMPH-4 (obesity with knee osteoarthritis) was the first to read
            out in December 2025. The other seven readouts are expected through
            2026, with the cardiovascular outcomes trial (TRIUMPH-3) running
            longest.
          </p>

          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              border: "1px solid var(--rule)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ background: "var(--paper2)" }}>
                  {["Trial", "Population", "Status"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["TRIUMPH-1", "Obesity (general)", "Readout expected 2026"],
                  ["TRIUMPH-2", "Obesity + type 2 diabetes", "Readout expected 2026"],
                  ["TRIUMPH-3", "Cardiovascular outcomes", "Longest trial, 2026–2027"],
                  ["TRIUMPH-4", "Obesity + knee OA", "Read out Dec 2025"],
                  ["TRIUMPH-5", "Obstructive sleep apnea", "Readout expected 2026"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Registry numbers include NCT05882045 (TRIUMPH-1), NCT05929066
            (TRIUMPH-2), and NCT06662383 (TRIUMPH-3) on ClinicalTrials.gov.
            Current enrolment status and estimated completion dates are
            maintained on the registry.
          </p>

          <p>
            The NDA does not require every trial to have read out before
            submission. Lilly can file the obesity NDA on the basis of
            TRIUMPH-1, TRIUMPH-4, and supporting data, with TRIUMPH-2 and
            TRIUMPH-3 supporting subsequent diabetes and cardiovascular
            indications. This modular filing approach is what shaped the
            tirzepatide pathway, where Mounjaro (diabetes, May 2022) and
            Zepbound (obesity, November 2023) received separate approvals on
            separate tracks.
          </p>

          <h2 id="practical-breakdown">Filing timeline and catalysts</h2>

          <p>
            The realistic filing sequence works out as follows. Phase III
            obesity readouts complete in 2026. Lilly compiles the NDA over
            three to six months, placing a submission in late 2026 or early
            2027. The FDA accepts the NDA for filing within 60 days and sets a
            PDUFA (Prescription Drug User Fee Act) action date at either six or
            ten months from acceptance, depending on review designation. This
            produces the mid-2027 to late-2027 approval window.
          </p>

          <p>
            Priority review is plausible here. The FDA granted it to Wegovy
            for obesity on the basis of semaglutide's STEP 1 data (14.9%
            weight loss). Retatrutide's TRIUMPH-4 result (28.7% at 12mg) is a
            larger advance over the standard of care than semaglutide was at
            its approval. That said, priority review decisions depend on
            factors beyond the efficacy headline, so assume standard review as
            the base case and treat priority review as an upside scenario.
          </p>

          <p>
            Three catalysts could delay the expected timeline. First, a safety
            signal in the remaining TRIUMPH readouts, particularly escalation
            of the dysesthesia finding or a cardiovascular concern emerging
            from TRIUMPH-3. The full safety breakdown is covered in{" "}
            <Link href="/retatrutide/side-effects">Retatrutide Side Effects</Link>.
            Second, a manufacturing issue identified during the FDA pre-approval
            inspection, which has derailed other biologics and could push the
            PDUFA date back by a quarter or more. Third, an FDA advisory
            committee meeting requesting additional data before action, which
            would add six to twelve months.
          </p>

          <h2 id="comparison">Comparison: timelines for semaglutide, tirzepatide, and retatrutide</h2>

          <p>
            Recent incretin-class approvals provide the template. The pattern:
            Phase III completion, NDA filing three to six months later, priority
            review, approval within approximately nine to eighteen months from
            filing.
          </p>

          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              border: "1px solid var(--rule)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ background: "var(--paper2)" }}>
                  {["Drug (Brand)", "Indication", "FDA Approval"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "12px 16px",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        borderBottom: "1px solid var(--rule)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Semaglutide (Ozempic)", "Type 2 diabetes", "December 2017"],
                  ["Semaglutide (Wegovy)", "Obesity", "June 2021"],
                  ["Tirzepatide (Mounjaro)", "Type 2 diabetes", "May 2022"],
                  ["Tirzepatide (Zepbound)", "Obesity", "November 2023"],
                  ["Retatrutide (TBD)", "Obesity (expected)", "Mid to late 2027"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: i === 4 ? 600 : 400 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The commercial implication matters for timing. Every quarter of
            delay pushes retatrutide's launch into a market where tirzepatide
            (Zepbound) and semaglutide (Wegovy) continue to capture patient
            volume. Lilly has strong incentive to file as soon as the obesity
            data package is complete rather than wait for every TRIUMPH trial
            to finish. That likely means an obesity-first filing in late 2026,
            with diabetes and cardiovascular indications following in 2027 and
            2028. For the broader class positioning, see{" "}
            <Link href="/retatrutide/vs-tirzepatide">
              Retatrutide vs Tirzepatide
            </Link>
            .
          </p>

          <h2 id="faq">Frequently asked questions</h2>

          <div style={{ margin: "16px 0" }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid var(--rule)",
                  padding: "16px 0",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontFamily: "var(--serif)",
                    fontSize: "20px",
                    lineHeight: 1.3,
                    listStyle: "none",
                  }}
                >
                  {faq.q}
                </summary>
                <p style={{ marginTop: "12px", marginBottom: 0 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* MEDICAL DISCLAIMER BOX */}
          <div
            style={{
              marginTop: "48px",
              padding: "24px 28px",
              background: "var(--paper2)",
              border: "1px solid var(--rule)",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            <div
              className="mono-label"
              style={{ marginBottom: "8px", color: "var(--accent)" }}
            >
              Medical Disclaimer
            </div>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6 }}>
              This article is for informational and educational purposes only
              and does not constitute medical or investment advice. Retatrutide
              is an investigational drug and has not been approved by the FDA,
              EMA, MHRA, or any other regulatory agency. Approval timelines
              described here are estimates based on publicly available trial
              data and standard regulatory review timelines. Actual approval
              dates depend on trial outcomes, regulatory decisions, and other
              factors beyond public disclosure. Consult a licensed healthcare
              provider for medical questions. Peptide File reports on research
              and does not sell, prescribe, or recommend sources for any
              compound discussed.
            </p>
          </div>
        </article>

        {/* STICKY SIDEBAR */}
        <aside
          style={{
            position: "sticky",
            top: "96px",
            alignSelf: "start",
            fontSize: "13px",
          }}
        >
          <div style={{ marginBottom: "40px" }}>
            <div
              className="mono-label"
              style={{ marginBottom: "12px", fontSize: "10px" }}
            >
              On this page
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                ["what-it-is", "FDA status today"],
                ["what-the-research-says", "What the schedule tells us"],
                ["practical-breakdown", "Filing timeline and catalysts"],
                ["comparison", "Class approval timelines"],
                ["faq", "Frequently asked questions"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  style={{
                    color: "var(--ink2)",
                    textDecoration: "none",
                    borderLeft: "1px solid var(--rule)",
                    paddingLeft: "12px",
                    fontSize: "13px",
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div
              className="mono-label"
              style={{ marginBottom: "12px", fontSize: "10px" }}
            >
              Related files
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                ["/retatrutide", "The Retatrutide File"],
                ["/retatrutide/clinical-trial-results", "Clinical Trial Results"],
                ["/retatrutide/side-effects", "Side Effects"],
                ["/retatrutide/dosage", "Dosage Guide"],
                ["/retatrutide/vs-semaglutide", "Retatrutide vs Semaglutide"],
                ["/retatrutide/vs-tirzepatide", "Retatrutide vs Tirzepatide"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    color: "var(--ink)",
                    textDecoration: "none",
                    fontFamily: "var(--serif)",
                    fontSize: "15px",
                    lineHeight: 1.3,
                    borderBottom: "1px solid var(--rule)",
                    paddingBottom: "8px",
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* NEWSLETTER SECTION */}
      <section
        style={{
          borderTop: "1px solid var(--rule)",
          background: "var(--paper2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "64px 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "40px",
                lineHeight: 1.1,
                margin: 0,
                border: "none",
              }}
            >
              FDA filing alerts as they happen.
            </h2>
            <p style={{ marginTop: "16px", fontSize: "15px", color: "var(--ink2)" }}>
              When the retatrutide NDA is filed and the PDUFA date is set,
              you will know within 24 hours. Plus every TRIUMPH readout along
              the way. No spam, no affiliate pitches.
            </p>
          </div>
          <form
            style={{
              display: "flex",
              gap: "8px",
              border: "1px solid var(--rule)",
              background: "var(--paper)",
              padding: "6px",
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                border: "none",
                background: "transparent",
                padding: "12px 14px",
                fontFamily: "var(--sans)",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "var(--accent)",
                color: "var(--paper)",
                border: "none",
                padding: "12px 20px",
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
