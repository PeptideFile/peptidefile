import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

const SLUG = "retatrutide/clinical-trial-results";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-21T00:00:00+00:00";
const MODIFIED = "2026-04-21T00:00:00+00:00";

export const metadata: Metadata = {
  title: "Retatrutide Clinical Trial Results: Phase III TRIUMPH Data (28.7% Weight Loss) | Peptide File",
  description:
    "Retatrutide clinical trial results: 28.7% body weight reduction at 12mg over 68 weeks in Phase III TRIUMPH-4. Full trial readouts, safety signals, and 2026 timeline.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Retatrutide Clinical Trial Results: Phase III TRIUMPH Data",
    description:
      "28.7% body weight reduction at 12mg over 68 weeks in Phase III TRIUMPH-4. Full trial readouts, safety signals, and the 2026 readout schedule.",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Mark Boreland"],
    siteName: "Peptide File",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Retatrutide Clinical Trial Results: Phase III TRIUMPH Data",
    description:
      "28.7% body weight reduction at 12mg over 68 weeks in Phase III TRIUMPH-4. Full trial readouts and 2026 schedule.",
  },
};

const faqs = [
  {
    q: "What were the main results of the retatrutide Phase III TRIUMPH-4 trial?",
    a: "TRIUMPH-4 reported 28.7% mean body weight reduction at the 12mg weekly dose over 68 weeks, alongside 26.4% at 9mg and 2.1% in the placebo arm. Absolute loss averaged 32.3 kg (71.2 lbs) at 12mg. Secondary endpoints included a 14.0 mmHg systolic blood pressure reduction at 12mg and meaningful WOMAC pain score improvements in participants with knee osteoarthritis.",
  },
  {
    q: "How does retatrutide compare with semaglutide and tirzepatide in trial data?",
    a: "In head-to-head comparisons of Phase III data, retatrutide (28.7% at 12mg/68 weeks) exceeds tirzepatide's SURMOUNT-1 result of 22.5% at 15mg/72 weeks, which in turn exceeded semaglutide's STEP 1 result of 14.9% at 2.4mg/68 weeks. The caveat: these are separate trials with different populations, so the numbers are indicative rather than a direct statistical comparison.",
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

export default function RetatrutideClinicalTrialResultsPage() {
  const article = articleSchema({
    headline: "Retatrutide Clinical Trial Results: Phase III TRIUMPH Data",
    description:
      "Full Phase III TRIUMPH-4 retatrutide data: 28.7% weight loss at 12mg/68 weeks, dysesthesia safety signal, and 2026 readout schedule.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "Retatrutide", item: "https://peptidefile.com/retatrutide" },
    { name: "Clinical Trial Results", item: CANONICAL },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Page header */}
      <div
        style={{
          borderBottom: "1px solid #e5e5e0",
          paddingBottom: "2rem",
          marginBottom: "2.5rem",
        }}
      >
        <div
          className="mono-label"
          style={{ marginBottom: "0.75rem" }}
        >
          Retatrutide File · Clinical Trials
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
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "center",
            marginTop: "1.5rem",
            fontSize: "0.875rem",
            color: "#555",
          }}
        >
          <span className="mono-label">
            By{" "}
            <Link
              href="/author"
              style={{ color: "#555", textDecoration: "underline" }}
            >
              Mark Boreland
            </Link>
          </span>
          <span className="mono-label">Last updated: April 2026</span>
          <span className="mono-label">~2,400 words</span>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.625rem",
              background: "#e8f0e8",
              color: "#2d5a2d",
              border: "1px solid #b8d4b8",
              borderRadius: "3px",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            Evidence: Strong
          </span>
        </div>
      </div>

      {/* Key data grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1px",
          background: "#e5e5e0",
          border: "1px solid #e5e5e0",
          marginBottom: "3rem",
        }}
      >
        {[
          { label: "12mg Weight Loss", value: "28.7%" },
          { label: "9mg Weight Loss", value: "26.4%" },
          { label: "Placebo Arm", value: "2.1%" },
          { label: "Trial Duration", value: "68 weeks" },
          { label: "Absolute Loss (12mg)", value: "32.3 kg" },
          { label: "Dysesthesia (12mg)", value: "20.9%" },
          { label: "Systolic BP Drop", value: "-14.0 mmHg" },
          { label: "Phase III Trials", value: "8 active" },
        ].map((cell) => (
          <div
            key={cell.label}
            style={{
              background: "#fafaf7",
              padding: "1.25rem 1rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "#1a1a1a",
                marginBottom: "0.25rem",
              }}
            >
              {cell.value}
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#666",
                fontFamily: "ui-monospace, monospace",
              }}
            >
              {cell.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main layout: article + sidebar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 260px",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <article className="prose">
          {/* Intro */}
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
            the safety signals that emerged (including a new dysesthesia
            finding not seen in Phase II), how retatrutide compares with
            semaglutide and tirzepatide trial data, and what to watch for in
            the remaining readouts.
          </p>

          <h2 id="what-it-is">What retatrutide is, briefly</h2>

          <p>
            Retatrutide (development code LY3437943) is Eli Lilly's triple
            agonist peptide. It activates three incretin and metabolic
            receptors in parallel: GLP-1 (glucagon-like peptide-1), GIP
            (glucose-dependent insulinotropic polypeptide), and glucagon. The
            first two receptors are familiar from semaglutide (GLP-1 only) and
            tirzepatide (GLP-1 plus GIP). The glucagon component is new at
            this scale. Glucagon receptor activation increases resting energy
            expenditure and promotes hepatic fat oxidation, which the
            prevailing mechanistic theory credits for the additional weight
            loss over dual agonism.
          </p>

          <p>
            Pharmacokinetics are broadly similar to other weekly GLP-1
            agonists: subcutaneous injection, half-life of approximately six
            days, steady state after four to five weeks. Titration in the
            TRIUMPH protocols runs 2mg, 4mg, 6mg, then either 9mg or 12mg
            weekly. The full titration takes roughly 12 weeks before the
            maintenance dose is reached.
          </p>

          <p>
            The triple agonist design is the central research question.
            Dual-agonist tirzepatide added GIP receptor activity to the GLP-1
            mechanism and produced a step-change in efficacy over semaglutide.
            Retatrutide tests whether adding glucagon receptor activity
            produces a second step-change. The Phase II data suggested yes;
            TRIUMPH-4 confirms it at the population level. The remaining
            Phase III trials will determine whether the benefit persists
            across comorbid populations where the glucagon pathway may
            behave differently (for example, in participants with hepatic
            dysfunction or impaired glucose counter-regulation).
          </p>

          <h2 id="what-the-research-says">
            What the Phase III research says
          </h2>

          <p>
            TRIUMPH is the umbrella name for the Phase III program. Eight
            trials are running in parallel, each studying a different
            population or comorbidity. The program builds on the Phase II
            trial published in{" "}
            <em>The New England Journal of Medicine</em> in August 2023
            (Jastreboff et al., PMID: 37366315), which reported 24.2% weight
            loss at 12mg over 48 weeks and provided the dosing schedule
            carried into Phase III.
          </p>

          <p>
            That Phase II result was what triggered the current level of
            industry attention. For context, the original semaglutide STEP 1
            trial reported 14.9% weight loss, and tirzepatide's SURMOUNT-1
            reported 22.5%. Retatrutide exceeded both in Phase II and
            extended the gap further in Phase III. The dose-response curve
            also continued to climb at 12mg, suggesting the efficacy ceiling
            for triple agonism may not have been reached. Eli Lilly has
            prioritised the 9mg and 12mg doses for Phase III rather than
            pushing higher, likely for tolerability reasons discussed below.
          </p>

          <h3>TRIUMPH-4: obesity with knee osteoarthritis</h3>

          <p>
            TRIUMPH-4 was the first Phase III readout, reported by Eli Lilly
            in December 2025. It enrolled adults with obesity (BMI 30+) and
            moderate-to-severe knee osteoarthritis. The trial ran 68 weeks
            with a roughly 1:1:1 randomisation across 9mg, 12mg, and placebo
            arms.
          </p>

          <div
            style={{
              border: "1px solid #d4d4cc",
              background: "#fafaf7",
              padding: "1.5rem",
              margin: "1.5rem 0",
              borderRadius: "2px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#666",
                fontFamily: "ui-monospace, monospace",
                marginBottom: "1rem",
              }}
            >
              TRIUMPH-4 Primary and Secondary Endpoints
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #1a1a1a" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "0.5rem 0.75rem 0.5rem 0",
                      fontWeight: 600,
                    }}
                  >
                    Endpoint
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                      padding: "0.5rem 0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    9mg
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                      padding: "0.5rem 0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    12mg
                  </th>
                  <th
                    style={{
                      textAlign: "right",
                      padding: "0.5rem 0 0.5rem 0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    Placebo
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Weight loss (%)", "-26.4%", "-28.7%", "-2.1%"],
                  [
                    "Weight loss (absolute)",
                    "-29.1 kg",
                    "-32.3 kg",
                    "-2.1 kg",
                  ],
                  ["WOMAC pain score", "-4.5", "-4.4", "-2.4"],
                  [
                    "Systolic BP",
                    "Significant",
                    "-14.0 mmHg",
                    "N/A",
                  ],
                  ["Dysesthesia incidence", "8.8%", "20.9%", "0.7%"],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    style={{ borderBottom: "1px solid #e5e5e0" }}
                  >
                    <td style={{ padding: "0.5rem 0.75rem 0.5rem 0" }}>
                      {row[0]}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem 0.75rem",
                        textAlign: "right",
                        fontFamily: "ui-monospace, monospace",
                      }}
                    >
                      {row[1]}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem 0.75rem",
                        textAlign: "right",
                        fontFamily: "ui-monospace, monospace",
                        fontWeight: 600,
                      }}
                    >
                      {row[2]}
                    </td>
                    <td
                      style={{
                        padding: "0.5rem 0 0.5rem 0.75rem",
                        textAlign: "right",
                        fontFamily: "ui-monospace, monospace",
                      }}
                    >
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The pain score result is notable. WOMAC (Western Ontario and
            McMaster Universities Osteoarthritis Index) pain reductions of 4.4
            to 4.5 points are clinically meaningful and suggest that weight
            loss translates into functional benefit, not only a scale
            reading. The blood pressure reduction at 12mg (-14.0 mmHg
            systolic) is in the range you would expect from a combination
            antihypertensive regimen, which is a secondary cardiovascular
            signal worth noting.
          </p>

          <h3>The dysesthesia safety signal</h3>

          <p>
            The most-discussed finding from TRIUMPH-4 is dysesthesia: abnormal
            skin sensation, typically described as burning, tingling, or pins
            and needles. It appeared in 20.9% of 12mg participants, 8.8% of
            9mg, and 0.7% of placebo. This signal did not appear in Phase II
            at the same dose and duration. Phase III ran longer and included
            more participants, which increases the chance of detecting
            lower-frequency adverse events, but the jump is large enough that
            it will face regulatory scrutiny.
          </p>

          <p>
            Eli Lilly's investor communications characterise the dysesthesia
            as typically mild-to-moderate and reversible on discontinuation.
            No cases of permanent nerve injury have been reported in trial
            disclosures to date. Longer follow-up from the other TRIUMPH
            trials will clarify whether this is a dose-limiting issue or a
            manageable side effect profile.
          </p>

          <h3>Other Phase III trials in the program</h3>

          <p>
            The remaining TRIUMPH trials study obesity plus specific
            comorbidities: TRIUMPH-1 (obesity), TRIUMPH-2 (obesity with type 2
            diabetes), TRIUMPH-3 (cardiovascular outcomes, the longest trial
            in the program), TRIUMPH-5 (obstructive sleep apnea), and further
            readouts on hepatic and metabolic endpoints. Primary completion
            dates span 2026, with the cardiovascular outcomes trial extending
            further. ClinicalTrials.gov registry numbers include NCT05882045
            (TRIUMPH-1), NCT05929066 (TRIUMPH-2), and NCT06662383 (TRIUMPH-3).
          </p>

          <p>
            TRIUMPH-3 is the most strategically important of the remaining
            trials. Cardiovascular outcomes trials in this class have
            historically moved the commercial needle more than efficacy
            trials do. Semaglutide's SELECT trial, which showed a 20%
            reduction in major adverse cardiovascular events, was what
            triggered broad insurance coverage and payer acceptance of
            semaglutide for obesity rather than just diabetes. If TRIUMPH-3
            produces a comparable or better MACE signal, retatrutide enters
            the market with an efficacy plus outcomes story that is difficult
            for competitors to match.
          </p>

          <p>
            TRIUMPH-2 (diabetes) matters differently. The compound needs to
            demonstrate HbA1c reductions that justify a diabetes indication,
            because the glucagon receptor component introduces a theoretical
            concern about glycaemic control. Phase II data showed HbA1c
            reductions consistent with tirzepatide, but the Phase III data
            will be the evidence base regulators use.
          </p>

          <h2 id="practical-breakdown">
            Practical breakdown: what the data means in practice
          </h2>

          <p>
            Retatrutide is investigational. It is not available by
            prescription, not approved for compounding, and not commercially
            available through any legitimate pharmacy channel as of April
            2026. Grey-market sources exist and are a significant safety
            concern: the compound has not passed regulatory review, and
            purity, sterility, and dosing accuracy cannot be verified outside
            the clinical trial supply chain. See{" "}
            <Link href="/retatrutide/side-effects">
              Retatrutide Side Effects
            </Link>{" "}
            for the full safety profile.
          </p>

          <p>
            Trial dosing is a useful reference for what approval-era dosing
            will probably look like, not a protocol to replicate. The
            schedule used in TRIUMPH runs 2mg, 4mg, 6mg, 9mg or 12mg weekly,
            with each step held for approximately four weeks before
            escalation. Gastrointestinal side effects (nausea, vomiting,
            constipation) are the most common reason for slower titration in
            all GLP-1 class compounds, and retatrutide is no exception.
            Trial discontinuation rates at 12mg were reported as higher than
            at 9mg, suggesting the efficacy gain at the top dose comes with a
            tolerability cost.
          </p>

          <p>
            An important practical point for clinicians reading this: the
            TRIUMPH-4 results are reported as mean weight loss across all
            participants (the intention-to-treat population). This includes
            people who discontinued mid-trial for tolerability or adherence
            reasons. Per-protocol analyses, which measure response in
            participants who completed treatment as planned, typically report
            higher weight loss numbers. Eli Lilly has not yet released
            per-protocol figures for TRIUMPH-4; these usually appear in the
            full peer-reviewed publication that follows topline release.
          </p>

          <p>
            Realistic efficacy expectations need to account for trial
            population versus clinical population differences. Trials
            selected adherent participants, excluded certain comorbidities,
            and provided structured support. Real-world weight loss from
            semaglutide and tirzepatide has run 60-75% of trial-reported
            values. If retatrutide follows the same pattern, a post-approval
            12mg user might see 17-22% weight loss rather than 28.7%. See{" "}
            <Link href="/retatrutide/dosage">Retatrutide Dosage Guide</Link>{" "}
            for detailed trial schedules.
          </p>

          <h2 id="comparison">
            Comparison: retatrutide vs tirzepatide vs semaglutide
          </h2>

          <p>
            The Phase III comparison is indicative rather than head-to-head.
            Each drug was tested in its own trial with different populations,
            durations, and design. The useful framing: each mechanism step
            (GLP-1, then GLP-1 plus GIP, then GLP-1 plus GIP plus glucagon)
            adds roughly 5-7 percentage points of weight loss.
          </p>

          <div
            style={{
              border: "1px solid #d4d4cc",
              background: "#fafaf7",
              padding: "1.5rem",
              margin: "1.5rem 0",
              borderRadius: "2px",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#666",
                fontFamily: "ui-monospace, monospace",
                marginBottom: "1rem",
              }}
            >
              Phase III Weight Loss by Compound
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #1a1a1a" }}>
                  <th style={{ textAlign: "left", padding: "0.5rem 0" }}>
                    Compound
                  </th>
                  <th style={{ textAlign: "left", padding: "0.5rem" }}>
                    Trial
                  </th>
                  <th style={{ textAlign: "left", padding: "0.5rem" }}>
                    Dose / Duration
                  </th>
                  <th style={{ textAlign: "right", padding: "0.5rem 0" }}>
                    Weight Loss
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e5e0" }}>
                  <td style={{ padding: "0.5rem 0" }}>
                    <strong>Retatrutide</strong>
                  </td>
                  <td style={{ padding: "0.5rem" }}>TRIUMPH-4</td>
                  <td style={{ padding: "0.5rem" }}>12mg / 68 weeks</td>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      textAlign: "right",
                      fontFamily: "ui-monospace, monospace",
                      fontWeight: 600,
                    }}
                  >
                    -28.7%
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e5e0" }}>
                  <td style={{ padding: "0.5rem 0" }}>Tirzepatide</td>
                  <td style={{ padding: "0.5rem" }}>SURMOUNT-1</td>
                  <td style={{ padding: "0.5rem" }}>15mg / 72 weeks</td>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      textAlign: "right",
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    -22.5%
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e5e0" }}>
                  <td style={{ padding: "0.5rem 0" }}>Semaglutide</td>
                  <td style={{ padding: "0.5rem" }}>STEP 1</td>
                  <td style={{ padding: "0.5rem" }}>2.4mg / 68 weeks</td>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      textAlign: "right",
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    -14.9%
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0.5rem 0" }}>Liraglutide</td>
                  <td style={{ padding: "0.5rem" }}>SCALE</td>
                  <td style={{ padding: "0.5rem" }}>3.0mg / 56 weeks</td>
                  <td
                    style={{
                      padding: "0.5rem 0",
                      textAlign: "right",
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    -8.0%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Safety profile sits in the same class family. All four compounds
            share the GLP-1 gastrointestinal profile: nausea, vomiting,
            constipation, occasional gallbladder complications. Retatrutide
            adds the dysesthesia signal and a modest heart rate increase that
            is also seen with tirzepatide. The glucagon component raises
            theoretical questions about hepatic glucose handling, but
            TRIUMPH-4 did not report clinically significant changes in liver
            enzymes. For the full side-by-side, see{" "}
            <Link href="/retatrutide/vs-tirzepatide">
              Retatrutide vs Tirzepatide
            </Link>
            .
          </p>

          <h2 id="fda-timeline">FDA approval timeline</h2>

          <p>
            Eli Lilly has not disclosed a filing date publicly. Standard
            timelines for a drug with multiple Phase III trials are: last
            trial readout, then three to six months to compile the NDA, then
            a six to ten month FDA review (priority review can compress this
            further). If the cardiovascular outcomes trial reads out mid-2026,
            the earliest realistic NDA is late 2026, with approval in 2027.
          </p>

          <p>
            Priority review is a plausible designation here. GLP-1 class
            obesity drugs have received priority review in the past
            (Wegovy/semaglutide received it for obesity), and retatrutide
            would qualify if Lilly can frame the triple-agonist efficacy as a
            meaningful advance over existing approved therapies. Standard
            review takes 10 months from filing; priority review takes six.
            The difference matters commercially because every quarter of
            delay pushes the launch window deeper into a market where
            tirzepatide and semaglutide have continued capturing patient
            volume.
          </p>

          <p>
            The{" "}
            <Link href="/retatrutide/fda-approval">
              Retatrutide FDA Approval Timeline
            </Link>{" "}
            article covers the specific catalysts, advisory committee
            considerations, and expected decision dates in more depth.
          </p>

          <h2 id="what-to-watch">What to watch in the remaining readouts</h2>

          <p>
            Three things determine whether retatrutide becomes a clean best-
            in-class drug or a qualified one. First, whether the dysesthesia
            signal stays manageable as longer-duration data accumulates.
            Second, whether the cardiovascular outcomes trial produces a
            major adverse cardiovascular event (MACE) reduction, which would
            secure broad insurance coverage. Third, whether the diabetes
            arm's HbA1c data is competitive with tirzepatide, which is
            already approved for diabetes under the Mounjaro label.
          </p>

          <p>
            A fourth consideration, less often discussed: durability of weight
            loss after discontinuation. Semaglutide trials showed roughly
            two-thirds of weight loss regained within a year of stopping
            treatment. If retatrutide follows the same pattern, the 28.7%
            number becomes a chronic-treatment figure rather than a one-time
            transformation. That affects insurance coverage decisions,
            patient counselling, and the commercial model. The TRIUMPH
            extension studies should start producing discontinuation data
            from 2026 onward.
          </p>

          <p>
            The efficacy ceiling is clear. The question the rest of the
            program is answering is whether that ceiling is usable in the
            real world.
          </p>
        </article>

        {/* Sticky TOC sidebar */}
        <aside
          style={{
            position: "sticky",
            top: "2rem",
            fontSize: "0.875rem",
            alignSelf: "start",
          }}
        >
          <div
            style={{
              borderTop: "2px solid #1a1a1a",
              paddingTop: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#666",
                fontFamily: "ui-monospace, monospace",
                marginBottom: "0.75rem",
              }}
            >
              On this page
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: "1.8",
              }}
            >
              {[
                ["what-it-is", "What retatrutide is"],
                ["what-the-research-says", "What the research says"],
                ["practical-breakdown", "Practical breakdown"],
                ["comparison", "Comparison"],
                ["fda-timeline", "FDA timeline"],
                ["what-to-watch", "What to watch"],
                ["faq", "FAQ"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    style={{
                      color: "#333",
                      textDecoration: "none",
                      borderBottom: "1px dotted #999",
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              borderTop: "2px solid #1a1a1a",
              paddingTop: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#666",
                fontFamily: "ui-monospace, monospace",
                marginBottom: "0.75rem",
              }}
            >
              Related Files
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              {[
                ["/retatrutide", "The Retatrutide File"],
                ["/retatrutide/vs-semaglutide", "vs Semaglutide"],
                ["/retatrutide/vs-tirzepatide", "vs Tirzepatide"],
                ["/retatrutide/side-effects", "Side Effects"],
                ["/retatrutide/dosage", "Dosage Guide"],
                ["/retatrutide/fda-approval", "FDA Approval Timeline"],
              ].map(([href, label]) => (
                <li key={href} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    href={href}
                    style={{
                      color: "#333",
                      textDecoration: "none",
                      borderBottom: "1px dotted #999",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* FAQ section (server-rendered, full width) */}
      <div style={{ marginTop: "4rem", maxWidth: "720px" }}>
        <article className="prose">
          <h2 id="faq">Frequently Asked Questions</h2>
        </article>

        <div style={{ marginTop: "1.5rem" }}>
          {faqs.map((faq, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid #e5e5e0",
                padding: "1.25rem 0",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "#1a1a1a",
                  listStyle: "none",
                }}
              >
                {faq.q}
              </summary>
              <div
                style={{
                  marginTop: "0.75rem",
                  color: "#333",
                  lineHeight: "1.7",
                }}
              >
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Medical disclaimer */}
      <div
        style={{
          marginTop: "4rem",
          maxWidth: "720px",
          border: "1px solid #d4c5a9",
          background: "#faf6ee",
          padding: "1.5rem",
          borderRadius: "2px",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#8a6d3b",
            fontFamily: "ui-monospace, monospace",
            fontWeight: 700,
            marginBottom: "0.75rem",
          }}
        >
          Medical Disclaimer
        </div>
        <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: "1.7", color: "#4a3f24" }}>
          This article is for informational and educational purposes only and
          does not constitute medical advice. Retatrutide is an investigational
          drug. It has not been approved by the FDA, EMA, MHRA, or any other
          regulatory agency. It is not available through legitimate pharmacy
          channels for weight loss or any other indication as of April 2026.
          Trial data presented here describes clinical research results, not
          recommendations for personal use. Consult a licensed healthcare
          provider before starting, stopping, or changing any medication or
          supplement. Peptide File reports on research and does not sell,
          prescribe, or recommend sources for any compound discussed.
        </p>
      </div>

      {/* Newsletter signup */}
      <div
        style={{
          marginTop: "4rem",
          maxWidth: "720px",
          border: "2px solid #1a1a1a",
          padding: "2rem",
          background: "#fafaf7",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#666",
            fontFamily: "ui-monospace, monospace",
            marginBottom: "0.5rem",
          }}
        >
          The Peptide File Newsletter
        </div>
        <h3
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "1.5rem",
            margin: "0 0 0.75rem",
            color: "#1a1a1a",
          }}
        >
          TRIUMPH readouts delivered to your inbox
        </h3>
        <p
          style={{
            margin: "0 0 1.25rem",
            color: "#444",
            lineHeight: "1.6",
          }}
        >
          Seven more Phase III retatrutide readouts are expected through 2026.
          Get a plain-English breakdown of each one within 24 hours of
          release. No spam, no affiliate pitches.
        </p>
        <form
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <input
            type="email"
            placeholder="you@example.com"
            style={{
              flex: "1 1 240px",
              padding: "0.75rem 1rem",
              border: "1px solid #1a1a1a",
              background: "#fff",
              fontSize: "0.95rem",
              fontFamily: "inherit",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#1a1a1a",
              color: "#fff",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
