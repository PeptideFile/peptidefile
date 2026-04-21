import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Retatrutide Clinical Trial Results: Phase III TRIUMPH Data";
const DESCRIPTION =
  "Retatrutide clinical trial results: 28.7% body weight reduction at 12mg over 68 weeks in Phase III TRIUMPH-4. Full trial readouts, safety signals, and 2026 timeline.";
const SLUG = "retatrutide/clinical-trial-results";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-21T00:00:00+00:00";
const MODIFIED = "2026-04-21T00:00:00+00:00";

export const metadata: Metadata = {
  title: `${TITLE} (28.7% Weight Loss) | Peptide File`,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
    description: DESCRIPTION,
  },
};

// ---------- FAQ DATA ----------
const faqs = [
  {
    q: "What were the main results of the retatrutide Phase III TRIUMPH-4 trial?",
    a: "TRIUMPH-4 reported 28.7% mean body weight reduction at the 12mg weekly dose over 68 weeks, alongside 26.4% at 9mg and 2.1% in the placebo arm. Absolute loss averaged 32.3 kg (71.2 lbs) at 12mg. Secondary endpoints included a 14.0 mmHg systolic blood pressure reduction at 12mg and meaningful WOMAC pain score improvements in participants with knee osteoarthritis.",
  },
  {
    q: "How does retatrutide compare with semaglutide and tirzepatide in trial data?",
    a: "In comparisons of Phase III data, retatrutide (28.7% at 12mg/68 weeks) exceeds tirzepatide's SURMOUNT-1 result of 22.5% at 15mg/72 weeks, which in turn exceeded semaglutide's STEP 1 result of 14.9% at 2.4mg/68 weeks. The caveat: these are separate trials with different populations, so the numbers are indicative rather than a direct statistical comparison.",
  },
  {
    q: "Is retatrutide FDA-approved?",
    a: "No. Retatrutide is investigational. Eli Lilly is running the TRIUMPH Phase III program and has not yet submitted a New Drug Application. Analyst consensus points to a regulatory filing in late 2026 or 2027, which would put approval in 2027 at the earliest if the review proceeds on standard timelines.",
  },
  {
    q: "What is the dysesthesia safety signal and why does it matter?",
    a: "Dysesthesia is an abnormal skin sensation (burning, tingling, pins and needles). TRIUMPH-4 reported it in 20.9% of 12mg participants versus 0.7% on placebo, with a lower 8.8% rate at 9mg. The signal did not appear in Phase II and is now the most scrutinised adverse event in the program. It has not been linked to permanent nerve injury in trial reports to date, but longer follow-up data is pending.",
  },
  {
    q: "How many Phase III trials are in the TRIUMPH program?",
    a: "Eight. TRIUMPH-1 through TRIUMPH-5 cover obesity and obesity with comorbidities (type 2 diabetes, cardiovascular risk, obstructive sleep apnea, knee osteoarthritis). Additional readouts cover hepatic and metabolic endpoints. Seven further readouts are expected through 2026, with TRIUMPH-4 the first to report.",
  },
  {
    q: "What dose is used in the Phase III trials?",
    a: "TRIUMPH protocols use a titration schedule of 2mg, 4mg, 6mg, then either 9mg or 12mg weekly via subcutaneous injection. The highest dose was chosen to probe the efficacy ceiling of triple agonism. Titration runs over approximately 12 weeks before the maintenance dose is reached.",
  },
  {
    q: "Where were the TRIUMPH-4 results published?",
    a: "Topline TRIUMPH-4 results were released by Eli Lilly in December 2025 via press release and investor presentation, with detailed data presented at the American Diabetes Association Scientific Sessions. A peer-reviewed manuscript in The New England Journal of Medicine or JAMA is standard for trials of this scale, and publication typically follows the conference presentation by several months.",
  },
  {
    q: "When will the remaining Phase III readouts land?",
    a: "Eli Lilly has guided that further TRIUMPH readouts will arrive throughout 2026, with the cardiovascular outcomes trial (longest duration) reporting later in the program. For readers tracking the pipeline, the investor relations page and ClinicalTrials.gov (NCT numbers NCT05882045, NCT05929066 and related) are the authoritative sources.",
  },
];

// ---------- PAGE ----------
export default function RetatrutideClinicalTrialResultsPage() {
  const articleJsonLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
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
    { name: "Clinical Trial Results", item: CANONICAL },
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
          <span>Clinical Trials</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span
            style={{
              background: "var(--accent)",
              color: "var(--paper)",
              padding: "3px 8px",
              borderRadius: "2px",
              fontSize: "10px",
            }}
          >
            Evidence: Strong
          </span>
        </div>

        <h1 className="article-title">
          Retatrutide Clinical Trial Results: Phase III TRIUMPH Data
        </h1>

        <p className="page-intro">
          Phase III TRIUMPH-4 reported 28.7% mean body weight reduction at the
          12mg weekly dose over 68 weeks, the largest efficacy signal ever
          reported for an obesity pharmacotherapy. Seven further Phase III
          readouts are expected through 2026.
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
          <span>~2,400 words</span>
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
            { stat: "28.7%", label: "12mg weight loss, TRIUMPH-4" },
            { stat: "26.4%", label: "9mg weight loss, TRIUMPH-4" },
            { stat: "2.1%", label: "Placebo arm, TRIUMPH-4" },
            { stat: "68 wk", label: "Trial duration" },
            { stat: "32.3 kg", label: "Absolute loss at 12mg" },
            { stat: "20.9%", label: "Dysesthesia at 12mg" },
            { stat: "−14 mmHg", label: "Systolic BP reduction" },
            { stat: "8 trials", label: "TRIUMPH Phase III program" },
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
            The December 2025 TRIUMPH-4 readout reset the ceiling for obesity
            pharmacotherapy. At the 12mg weekly dose over 68 weeks, participants
            lost 28.7% of body weight on average, with a matched placebo arm
            losing 2.1%. Absolute weight loss averaged 32.3 kg (71.2 lbs). No
            approved weight loss drug, and no other investigational compound in
            late-stage development, has reported anything close.
          </p>

          <p>
            TRIUMPH-4 was the first of eight Phase III retatrutide trials to
            read out. Seven more are expected across 2026, covering type 2
            diabetes, cardiovascular outcomes, obstructive sleep apnea, and
            hepatic endpoints. Eli Lilly has indicated a regulatory filing in
            late 2026 or 2027, which puts an FDA approval window of 2027 in
            play if the remaining data lands cleanly.
          </p>

          <p>
            This article walks through every Phase III result reported to date,
            the safety signals that emerged (including a new dysesthesia finding
            not seen in Phase II), how retatrutide compares with semaglutide and
            tirzepatide trial data, and what to watch for in the remaining
            readouts.
          </p>

          <h2 id="what-it-is">What retatrutide is, briefly</h2>

          <p>
            Retatrutide (development code LY3437943) is Eli Lilly's triple
            agonist peptide. It activates three incretin and metabolic
            receptors in parallel: GLP-1 (glucagon-like peptide-1), GIP
            (glucose-dependent insulinotropic polypeptide), and glucagon. The
            first two receptors are familiar from semaglutide (GLP-1 only) and
            tirzepatide (GLP-1 plus GIP). The glucagon component is new at this
            scale. Glucagon receptor activation increases resting energy
            expenditure and promotes hepatic fat oxidation, which the prevailing
            mechanistic theory credits for the additional weight loss over dual
            agonism.
          </p>

          <p>
            Pharmacokinetics are broadly similar to other weekly GLP-1 agonists:
            subcutaneous injection, half-life of approximately six days, steady
            state after four to five weeks. Titration in the TRIUMPH protocols
            runs 2mg, 4mg, 6mg, then either 9mg or 12mg weekly. The full
            titration takes roughly 12 weeks before the maintenance dose is
            reached.
          </p>

          <p>
            The triple agonist design is the central research question.
            Dual-agonist tirzepatide added GIP receptor activity to the GLP-1
            mechanism and produced a step-change in efficacy over semaglutide.
            Retatrutide tests whether adding glucagon receptor activity produces
            a second step-change. The Phase II data suggested yes; TRIUMPH-4
            confirms it at the population level. The remaining Phase III trials
            will determine whether the benefit persists across comorbid
            populations where the glucagon pathway may behave differently.
          </p>

          <h2 id="what-the-research-says">What the Phase III research says</h2>

          <p>
            TRIUMPH is the umbrella name for the Phase III program. Eight trials
            are running in parallel, each studying a different population or
            comorbidity. The program builds on the Phase II trial published in{" "}
            <em>The New England Journal of Medicine</em> in August 2023
            (Jastreboff et al., PMID: 37366315), which reported 24.2% weight
            loss at 12mg over 48 weeks and provided the dosing schedule carried
            into Phase III.
          </p>

          <p>
            That Phase II result was what triggered the current level of
            industry attention. For context, the original semaglutide STEP 1
            trial reported 14.9% weight loss, and tirzepatide's SURMOUNT-1
            reported 22.5%. Retatrutide exceeded both in Phase II and extended
            the gap further in Phase III. The dose-response curve also continued
            to climb at 12mg, suggesting the efficacy ceiling for triple agonism
            may not have been reached.
          </p>

          <h3>TRIUMPH-4: obesity with knee osteoarthritis</h3>

          <p>
            TRIUMPH-4 was the first Phase III readout, reported by Eli Lilly in
            December 2025. It enrolled adults with obesity (BMI 30+) and
            moderate-to-severe knee osteoarthritis. The trial ran 68 weeks with
            a roughly 1:1:1 randomisation across 9mg, 12mg, and placebo arms.
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
                  {["Endpoint", "9mg", "12mg", "Placebo"].map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: h === "Endpoint" ? "left" : "right",
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
                  ["Weight loss (%)", "−26.4%", "−28.7%", "−2.1%"],
                  ["Weight loss (absolute)", "−29.1 kg", "−32.3 kg", "−2.1 kg"],
                  ["WOMAC pain score", "−4.5", "−4.4", "−2.4"],
                  ["Systolic BP", "Significant", "−14.0 mmHg", "N/A"],
                  ["Dysesthesia incidence", "8.8%", "20.9%", "0.7%"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: 500 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--mono)" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--mono)", fontWeight: 600 }}>{row[2]}</td>
                    <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "var(--mono)" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The pain score result is notable. WOMAC pain reductions of 4.4 to
            4.5 points are clinically meaningful and suggest weight loss
            translates into functional benefit beyond the scale. The blood
            pressure reduction at 12mg (-14.0 mmHg systolic) is in the range
            you would expect from a combination antihypertensive regimen.
          </p>

          <h3>The dysesthesia safety signal</h3>

          <p>
            The most-discussed finding from TRIUMPH-4 is dysesthesia: abnormal
            skin sensation, typically described as burning, tingling, or pins
            and needles. It appeared in 20.9% of 12mg participants, 8.8% of
            9mg, and 0.7% of placebo. This signal did not appear in Phase II at
            the same dose and duration. Phase III ran longer and included more
            participants, which increases the chance of detecting lower-frequency
            adverse events, but the jump is large enough that it will face
            regulatory scrutiny.
          </p>

          <p>
            Eli Lilly's investor communications characterise the dysesthesia as
            typically mild-to-moderate and reversible on discontinuation. No
            cases of permanent nerve injury have been reported in trial
            disclosures to date. Longer follow-up from the other TRIUMPH trials
            will clarify whether this is a dose-limiting issue or a manageable
            side effect profile.
          </p>

          <h3>Other Phase III trials in the program</h3>

          <p>
            The remaining TRIUMPH trials study obesity plus specific
            comorbidities: TRIUMPH-1 (obesity), TRIUMPH-2 (obesity with type 2
            diabetes), TRIUMPH-3 (cardiovascular outcomes, the longest trial in
            the program), TRIUMPH-5 (obstructive sleep apnea), and further
            readouts on hepatic and metabolic endpoints. ClinicalTrials.gov
            registry numbers include NCT05882045 (TRIUMPH-1), NCT05929066
            (TRIUMPH-2), and NCT06662383 (TRIUMPH-3).
          </p>

          <p>
            TRIUMPH-3 is the most strategically important of the remaining
            trials. Semaglutide's SELECT trial, which showed a 20% reduction in
            major adverse cardiovascular events, was what triggered broad
            insurance coverage and payer acceptance of GLP-1 drugs for obesity.
            If TRIUMPH-3 produces a comparable or better MACE signal,
            retatrutide enters the market with an efficacy plus outcomes story
            that is difficult for competitors to match.
          </p>

          <h2 id="comparison">Comparison: retatrutide vs tirzepatide vs semaglutide</h2>

          <p>
            The Phase III comparison is indicative rather than head-to-head.
            Each drug was tested in its own trial with different populations,
            durations, and design. The useful framing: each mechanism step
            (GLP-1, then GLP-1 plus GIP, then GLP-1 plus GIP plus glucagon)
            adds roughly 5 to 7 percentage points of weight loss.
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
                  {["Compound", "Trial", "Dose / Duration", "Weight Loss"].map((h) => (
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
                  ["Retatrutide", "TRIUMPH-4", "12mg / 68 weeks", "−28.7%"],
                  ["Tirzepatide", "SURMOUNT-1", "15mg / 72 weeks", "−22.5%"],
                  ["Semaglutide", "STEP 1", "2.4mg / 68 weeks", "−14.9%"],
                  ["Liraglutide", "SCALE", "3.0mg / 56 weeks", "−8.0%"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: i === 0 ? 600 : 400 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[2]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontWeight: i === 0 ? 600 : 400 }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Safety profile sits in the same class family. All four compounds
            share the GLP-1 gastrointestinal profile: nausea, vomiting,
            constipation, occasional gallbladder complications. Retatrutide adds
            the dysesthesia signal. For the full side-by-side, see{" "}
            <Link href="/retatrutide/vs-tirzepatide">
              Retatrutide vs Tirzepatide
            </Link>{" "}
            and{" "}
            <Link href="/retatrutide/vs-semaglutide">
              Retatrutide vs Semaglutide
            </Link>
            .
          </p>

          <h2 id="practical-breakdown">Practical breakdown: what the data means in practice</h2>

          <p>
            Retatrutide is investigational. It is not available by prescription,
            not approved for compounding, and not commercially available through
            any legitimate pharmacy channel as of April 2026. Grey-market sources
            exist and are a significant safety concern: purity, sterility, and
            dosing accuracy cannot be verified outside the clinical trial supply
            chain. See{" "}
            <Link href="/retatrutide/side-effects">Retatrutide Side Effects</Link>{" "}
            for the full safety profile.
          </p>

          <p>
            Trial dosing is a useful reference for what approval-era dosing will
            probably look like. The TRIUMPH schedule runs 2mg, 4mg, 6mg, then
            9mg or 12mg weekly, with each step held for approximately four weeks.
            Discontinuation rates at 12mg were higher than at 9mg, suggesting
            the efficacy gain at the top dose comes with a tolerability cost.
            Some discontinuations at 12mg were attributed to perceived excessive
            weight loss in participants with lower baseline BMI — a novel finding
            in the class. See{" "}
            <Link href="/retatrutide/dosage">Retatrutide Dosage Guide</Link>{" "}
            for detailed trial schedules.
          </p>

          <p>
            Realistic efficacy expectations need to account for trial versus
            clinical population differences. Real-world weight loss from
            semaglutide and tirzepatide has run 60 to 75% of trial-reported
            values. If retatrutide follows the same pattern, a post-approval
            12mg user might see 17 to 22% weight loss rather than 28.7%.
          </p>

          <h2 id="fda-timeline">FDA approval timeline</h2>

          <p>
            Eli Lilly has not disclosed a filing date publicly. Standard
            timelines: last trial readout, then three to six months to compile
            the NDA, then a six to ten month FDA review (priority review can
            compress this). If the cardiovascular outcomes trial reads out
            mid-2026, the earliest realistic NDA is late 2026, with approval
            in 2027.
          </p>

          <p>
            Priority review is a plausible designation. GLP-1 class obesity
            drugs have received it in the past, and retatrutide would qualify
            if Lilly can frame the triple-agonist efficacy as a meaningful
            advance over existing approved therapies. Standard review takes 10
            months from filing; priority review takes six. The{" "}
            <Link href="/retatrutide/fda-approval">
              Retatrutide FDA Approval Timeline
            </Link>{" "}
            article covers the specific catalysts and expected decision dates.
          </p>

          <h2 id="what-to-watch">What to watch in the remaining readouts</h2>

          <p>
            Three things determine whether retatrutide becomes a clean
            best-in-class drug or a qualified one. First, whether the
            dysesthesia signal stays manageable as longer-duration data
            accumulates. Second, whether TRIUMPH-3 produces a MACE reduction,
            which would secure broad insurance coverage. Third, whether the
            diabetes arm's HbA1c data is competitive with tirzepatide, which is
            already approved for diabetes under the Mounjaro label.
          </p>

          <p>
            A fourth consideration: durability of weight loss after
            discontinuation. Semaglutide trials showed roughly two-thirds of
            weight loss regained within a year of stopping treatment. If
            retatrutide follows the same pattern, the 28.7% number becomes a
            chronic-treatment figure rather than a one-time transformation. The
            TRIUMPH extension studies should start producing discontinuation
            data from 2026 onward. Our{" "}
            <Link href="/retatrutide">Retatrutide File</Link> covers the full
            pipeline picture.
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
              and does not constitute medical advice, diagnosis, or treatment.
              Retatrutide is an investigational compound and is not approved by
              the FDA, EMA, MHRA, or any other regulatory authority as of April
              2026. Trial data presented here describes clinical research
              results, not recommendations for personal use. Always consult a
              qualified healthcare provider before starting, stopping, or
              changing any medication or compound. Product being sold as
              retatrutide outside of authorised clinical trials is unregulated
              and should be approached with caution.
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
                ["what-it-is", "What retatrutide is"],
                ["what-the-research-says", "What the research says"],
                ["comparison", "Compound comparison"],
                ["practical-breakdown", "Practical breakdown"],
                ["fda-timeline", "FDA timeline"],
                ["what-to-watch", "What to watch"],
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
                ["/retatrutide/vs-semaglutide", "Retatrutide vs Semaglutide"],
                ["/retatrutide/vs-tirzepatide", "Retatrutide vs Tirzepatide"],
                ["/retatrutide/side-effects", "Retatrutide Side Effects"],
                ["/retatrutide/dosage", "Retatrutide Dosage Guide"],
                ["/retatrutide/fda-approval", "FDA Approval Timeline"],
                ["/compare/retatrutide-vs-semaglutide-vs-tirzepatide", "Three-way comparison"],
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
              The weekly peptide brief.
            </h2>
            <p style={{ marginTop: "16px", fontSize: "15px", color: "var(--ink2)" }}>
              New trial readouts, mechanism breakdowns, and FDA updates. One
              email per week. No filler.
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
