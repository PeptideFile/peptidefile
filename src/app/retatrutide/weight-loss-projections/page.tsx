import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "How Much Weight Loss on Retatrutide? Phase III Projections (28.7%)";
const DESCRIPTION =
  "How much weight loss on retatrutide: 28.7% at 12mg over 68 weeks in TRIUMPH-4. Realistic projections by starting weight, dose, and real-world adherence.";
const SLUG = "retatrutide/weight-loss-projections";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-21T00:00:00+00:00";
const MODIFIED = "2026-04-21T00:00:00+00:00";

export const metadata: Metadata = {
  title: `${TITLE} | Peptide File`,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How Much Weight Loss on Retatrutide? Phase III Projections",
    description:
      "28.7% at 12mg over 68 weeks in TRIUMPH-4. Realistic projections by starting weight, dose, and real-world adherence versus trial-population numbers.",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Mark Boreland"],
    siteName: "Peptide File",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Weight Loss on Retatrutide? Phase III Projections",
    description:
      "28.7% at 12mg over 68 weeks. Realistic projections by starting weight, dose, and real-world adherence.",
  },
};

// ---------- FAQ DATA ----------
const faqs = [
  {
    q: "How much weight can you lose on retatrutide?",
    a: "In Phase III TRIUMPH-4, participants lost 28.7% of body weight at the 12mg weekly dose over 68 weeks, averaging 32.3 kg (71.2 lbs) in absolute terms. The 9mg dose produced 26.4% loss, averaging 29.1 kg (64.2 lbs). These are trial-population averages and real-world results are typically 60-75% of trial figures due to adherence differences.",
  },
  {
    q: "How does that compare with tirzepatide and semaglutide?",
    a: "Retatrutide exceeds both. Tirzepatide's SURMOUNT-1 reported 22.5% at 15mg over 72 weeks, and semaglutide's STEP 1 reported 14.9% at 2.4mg over 68 weeks. The cross-trial comparison is indicative rather than head-to-head, but each receptor step (GLP-1, then GLP-1 plus GIP, then GLP-1 plus GIP plus glucagon) adds roughly 5-7 percentage points of weight loss.",
  },
  {
    q: "How long does it take to see weight loss on retatrutide?",
    a: "Weight loss typically begins in the first four weeks of treatment, during the 2mg starting dose period. Noticeable loss (5% of body weight) usually appears by weeks 12-16, around the time the maintenance dose is reached. Peak weight loss in the TRIUMPH-4 trial was reached between weeks 52 and 68, suggesting the full effect takes approximately 12-16 months.",
  },
  {
    q: "What weight loss can someone starting at 200 lbs expect?",
    a: "At the trial average of 28.7% reduction, a 200 lb (91 kg) starting weight projects to approximately 57 lbs (26 kg) of loss over 68 weeks at 12mg, ending around 143 lbs. Real-world averages of 60-75% of trial figures would project to 34-43 lbs of loss (17-21%), ending between 157-166 lbs. Individual response varies considerably.",
  },
  {
    q: "Why do real-world results typically underperform trial results?",
    a: "Clinical trials select for adherent participants, provide structured clinical support, and use standardised dose escalation. Real-world use introduces missed doses, slower titration due to side effects, shorter treatment duration, and less structured support. Semaglutide and tirzepatide real-world data show 60-75% of trial-reported weight loss on average, though highly adherent individuals can match trial figures.",
  },
  {
    q: "Does weight loss plateau on retatrutide?",
    a: "Weight loss plateaus for most participants around 12-16 months of treatment, which is the pattern observed in Phase III TRIUMPH-4. After the plateau, continued treatment maintains the weight loss; discontinuation leads to gradual regain. Semaglutide withdrawal data (STEP 4 extension) showed approximately two-thirds of weight loss was regained within 12 months of stopping.",
  },
  {
    q: "How much weight is regained after stopping retatrutide?",
    a: "Specific discontinuation data for retatrutide has not yet been published. Based on semaglutide and tirzepatide withdrawal data, expect approximately 50-70% of weight loss to be regained within 12 months of stopping treatment. This is why the compound is framed as chronic therapy rather than a time-limited intervention, similar to the approved GLP-1 class.",
  },
  {
    q: "Can retatrutide cause too much weight loss?",
    a: "Theoretically yes, though the stopping criteria in TRIUMPH trials managed this. Trial protocols typically pause or reduce dosing when participants approach clinically appropriate weight targets (BMI 22-25 depending on protocol). Once retatrutide is approved, clinical monitoring will include weight loss velocity and total loss, with dose adjustment or discontinuation considered for participants approaching underweight status.",
  },
];

// ---------- PAGE ----------
export default function RetatrutideWeightLossProjectionsPage() {
  const articleJsonLd = articleSchema({
    headline: "How Much Weight Loss on Retatrutide? Phase III Projections",
    description:
      "Retatrutide weight loss projections: 28.7% at 12mg over 68 weeks in TRIUMPH-4. Real-world expectations, starting weight scenarios, and class comparison.",
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
    { name: "Weight Loss Projections", item: CANONICAL },
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
          <span>Efficacy</span>
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
          How Much Weight Loss on Retatrutide? Phase III Projections
        </h1>

        <p className="page-intro">
          Phase III TRIUMPH-4 reported 28.7% body weight reduction at the
          12mg weekly dose over 68 weeks, averaging 32.3 kg (71.2 lbs) in
          absolute terms. Real-world weight loss typically runs 60–75% of
          trial figures due to adherence differences.
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
          <span>~1,800 words</span>
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
            { stat: "−28.7%", label: "12mg, 68wk (trial)" },
            { stat: "−26.4%", label: "9mg, 68wk (trial)" },
            { stat: "32.3 kg", label: "12mg absolute loss" },
            { stat: "71.2 lbs", label: "12mg absolute (lbs)" },
            { stat: "−2.1%", label: "Placebo arm" },
            { stat: "17–22%", label: "Real-world range (12mg)" },
            { stat: "12–16 mo", label: "Time to plateau" },
            { stat: "−24.2%", label: "Phase II (48wk)" },
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
            TRIUMPH-4 participants lost 28.7% of their body weight on average
            at the 12mg weekly dose over 68 weeks, with the 9mg arm producing
            26.4%. Absolute weight loss averaged 32.3 kg (71.2 lbs) at 12mg
            and 29.1 kg (64.2 lbs) at 9mg. Placebo produced 2.1% loss. These
            numbers are the strongest weight loss results ever reported for an
            obesity pharmacotherapy.
          </p>

          <p>
            Real-world weight loss will be lower than these trial figures. Data
            from semaglutide and tirzepatide shows that post-approval average
            weight loss runs approximately 60–75% of trial-reported values.
            Applied to retatrutide, that projects 17–22% average real-world
            loss at 12mg, or roughly 34–43 lbs for a 200 lb starting weight.
            Highly adherent individuals can still match trial figures, but
            population averages always drop.
          </p>

          <p>
            This article covers the Phase III numbers in detail, projections by
            starting weight and dose, the time course of weight loss through
            treatment, and why real-world outcomes differ from trial outcomes.
            Retatrutide is investigational and not yet approved, so these
            projections describe what approval-era use is likely to produce
            based on the evidence base.
          </p>

          <h2 id="what-it-is">What drives weight loss on retatrutide</h2>

          <p>
            Retatrutide activates three receptors simultaneously: GLP-1, GIP,
            and glucagon. Each contributes to weight loss through a different
            mechanism. GLP-1 activity slows gastric emptying and increases
            satiety, reducing caloric intake. GIP activity improves the
            metabolic profile and adds efficacy without much safety cost.
            Glucagon receptor activity is the retatrutide innovation: it
            increases resting energy expenditure and promotes hepatic fat
            oxidation, so the body burns more calories at rest while also
            eating less.
          </p>

          <p>
            The combined effect is what produces the step-change in efficacy
            over semaglutide (GLP-1 only) and tirzepatide (GLP-1 plus GIP).
            Semaglutide reduces intake. Tirzepatide reduces intake more and
            improves metabolic signalling. Retatrutide does both and increases
            expenditure on top. The Phase III data confirms that the three
            mechanisms combine rather than compete, producing weight loss
            beyond what either single or dual agonism has achieved.
          </p>

          <p>
            Body fat loss accounts for the majority of weight loss in the
            TRIUMPH-4 trial. Phase II body composition data suggested
            approximately 85% of the total weight loss was fat mass and 15%
            lean mass, a pattern common to rapid weight loss at any scale.
          </p>

          <h2 id="what-the-research-says">What the trial data projects by starting weight</h2>

          <p>
            TRIUMPH-4 enrolled adults with obesity (BMI 30+) and knee
            osteoarthritis, with an average starting weight of approximately
            113 kg (249 lbs). Applying the 28.7% reduction produces the
            32.3 kg absolute loss figure. For individuals at different starting
            weights, the projection scales proportionally. The table below
            applies the 28.7% trial figure and a 22% realistic real-world
            estimate at 12mg across common starting weights.
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
                  {[
                    "Starting Weight",
                    "Trial Avg (−28.7%)",
                    "Real-World Est (−22%)",
                    "Ending Weight (Real-World)",
                  ].map((h) => (
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
                  ["180 lbs (82 kg)", "−52 lbs", "−40 lbs", "140 lbs"],
                  ["200 lbs (91 kg)", "−57 lbs", "−44 lbs", "156 lbs"],
                  ["220 lbs (100 kg)", "−63 lbs", "−48 lbs", "172 lbs"],
                  ["250 lbs (113 kg)", "−72 lbs", "−55 lbs", "195 lbs"],
                  ["280 lbs (127 kg)", "−80 lbs", "−62 lbs", "218 lbs"],
                  ["320 lbs (145 kg)", "−92 lbs", "−70 lbs", "250 lbs"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: 500 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontWeight: 600 }}>{row[2]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{ fontSize: "12px", color: "var(--ink2)", fontStyle: "italic", marginTop: "-12px" }}
          >
            Projections assume proportional response across starting weights,
            which holds within the BMI 30–45 trial enrolment range. Individual
            response varies considerably.
          </p>

          <h3>Time course of weight loss</h3>

          <p>
            Weight loss is not linear. The fastest loss occurs between months 3
            and 9 after starting treatment, once the maintenance dose is reached
            and the body is responding to consistent receptor activation. Before
            month 3, weight loss during titration is modest (typically 3–5%).
            After month 9, the rate slows as participants approach their
            individual physiological plateau.
          </p>

          <p>
            Typical time-course expectations based on TRIUMPH-4 and Phase II
            data: around 5% loss by week 16, 12–15% by week 32, 20–25% by week
            52, and full plateau (26–29% depending on dose) by week 68.
            Individual variation is substantial and these figures describe the
            trial-population median. For full dosing context see the{" "}
            <Link href="/retatrutide/dosage">Retatrutide Dosage Guide</Link>.
          </p>

          <p>
            A useful framing for the time course: expect weight loss to feel
            slow for the first three months (during titration), accelerate
            through months 4–9, and then gradually decelerate through months
            10–16 as the plateau approaches. Missing doses during the
            acceleration phase has a disproportionate effect on total outcomes
            because that is when the drug is doing the most work.
          </p>

          <h3>Weight maintenance after plateau</h3>

          <p>
            Once weight loss plateaus around month 12–16, continued retatrutide
            treatment maintains the new weight. Discontinuation leads to gradual
            regain, because the drug is managing the underlying physiological
            drivers of weight (hunger signalling, gastric emptying, energy
            expenditure) rather than resetting them. Once the drug stops, the
            physiology reverts toward baseline.
          </p>

          <p>
            Specific retatrutide withdrawal data has not been published yet.
            Semaglutide STEP 4 extension data showed approximately two-thirds
            of weight loss regained within 12 months of stopping. Tirzepatide
            SURMOUNT-4 showed a similar pattern, with about 14% body weight
            regained in the withdrawal arm after 52 weeks. Retatrutide will
            likely follow this pattern, with 50–70% of lost weight regained in
            the year following discontinuation.
          </p>

          <h2 id="practical-breakdown">Trial results versus real-world results</h2>

          <p>
            The gap between trial and real-world performance is the most
            important practical consideration. Semaglutide real-world data has
            shown average weight loss of approximately 10–12% against the STEP 1
            trial figure of 14.9%, or about 67–80% of trial performance.
            Tirzepatide real-world data has shown similar patterns: 13–16%
            average against the 22.5% SURMOUNT-1 figure, or about 58–71% of
            trial performance.
          </p>

          <p>
            Why the gap exists is worth understanding because it points at what
            individuals can do to approach trial figures. Trials enforce dose
            escalation on schedule; real-world use often stalls at lower doses
            because of side effects or cost. Trials provide structured
            nutritional and activity support; real-world use typically does not.
            Trials exclude participants unlikely to adhere; real-world use
            includes everyone. Trials run for a fixed period with 100% drug
            availability; real-world use suffers supply disruptions and
            insurance issues.
          </p>

          <p>
            Individuals who want to approach trial figures can do so by
            controlling the adherence variables: complete the titration as
            scheduled, adhere to weekly dosing without gaps, maintain a moderate
            caloric deficit alongside the drug, and continue treatment for the
            full time-to-plateau period. The full safety profile matters here
            because tolerability drives adherence — covered in{" "}
            <Link href="/retatrutide/side-effects">Retatrutide Side Effects</Link>.
          </p>

          <h2 id="comparison">Comparison with semaglutide and tirzepatide</h2>

          <p>
            Across the incretin-plus class, weight loss efficacy scales with the
            number of receptors activated. The table below pulls top-dose Phase
            III results for direct comparison.
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
                  {["Compound", "Mechanism", "Trial Weight Loss", "Real-World Est"].map((h) => (
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
                  ["Retatrutide 12mg", "GLP-1 + GIP + Glucagon", "−28.7%", "17–22%"],
                  ["Tirzepatide 15mg", "GLP-1 + GIP", "−22.5%", "13–17%"],
                  ["Semaglutide 2.4mg", "GLP-1", "−14.9%", "10–12%"],
                  ["Liraglutide 3.0mg", "GLP-1 (daily)", "−8.0%", "5–7%"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: i === 0 ? 600 : 400 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", fontSize: "13px" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontWeight: i === 0 ? 600 : 400 }}>{row[2]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The pattern is clean. Each mechanism step adds roughly 5–7
            percentage points of weight loss. Real-world percentages run 60–75%
            of trial figures across all four compounds, suggesting the adherence
            gap is a class phenomenon rather than drug-specific. For the direct
            head-to-head detail see{" "}
            <Link href="/retatrutide/vs-tirzepatide">Retatrutide vs Tirzepatide</Link>{" "}
            and{" "}
            <Link href="/retatrutide/vs-semaglutide">Retatrutide vs Semaglutide</Link>.
          </p>

          <p>
            One practical implication: for most individuals, retatrutide 9mg
            will probably outperform tirzepatide 15mg in real-world use while
            producing a lower side effect profile than retatrutide 12mg. This
            is the comparison that is likely to matter most post-approval, not
            the trial-population headline figures.
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
              and does not constitute medical advice. Retatrutide is an
              investigational drug. It has not been approved by the FDA, EMA,
              MHRA, or any other regulatory agency. Weight loss projections
              presented here are derived from clinical trial data and published
              real-world analyses of related compounds. Individual response
              varies considerably based on starting weight, adherence, diet,
              activity, and medical history. Projections are not guarantees.
              Consult a licensed healthcare provider before starting, stopping,
              or changing any medication. Peptide File reports on research and
              does not sell, prescribe, or recommend sources for any compound
              discussed.
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
                ["what-it-is", "What drives weight loss"],
                ["what-the-research-says", "Projections by starting weight"],
                ["practical-breakdown", "Trial vs real-world"],
                ["comparison", "Class comparison"],
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
                ["/retatrutide/dosage", "Dosage Guide"],
                ["/retatrutide/side-effects", "Side Effects"],
                ["/retatrutide/vs-semaglutide", "Retatrutide vs Semaglutide"],
                ["/retatrutide/vs-tirzepatide", "Retatrutide vs Tirzepatide"],
                ["/retatrutide/fda-approval", "FDA Approval Timeline"],
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
              Real-world data as it lands.
            </h2>
            <p style={{ marginTop: "16px", fontSize: "15px", color: "var(--ink2)" }}>
              When post-approval real-world retatrutide data arrives, these
              projections get replaced with actual numbers. Subscribe for
              updates within 24 hours of release. No spam, no affiliate pitches.
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
