import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Retatrutide vs Tirzepatide: Head-to-Head Data Comparison";
const DESCRIPTION =
  "Retatrutide hit 28.7% weight loss in Phase III TRIUMPH-4 versus tirzepatide's 22.5% in SURMOUNT-1. Mechanism, dosing, and safety comparison.";
const SLUG = "retatrutide/vs-tirzepatide";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-20T00:00:00+00:00";
const MODIFIED = "2026-04-20T00:00:00+00:00";

export const metadata: Metadata = {
  title: `${TITLE} | Peptide File`,
  description: DESCRIPTION,
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
  alternates: {
    canonical: CANONICAL,
  },
};

// ---------- FAQ DATA (uses q / a to match faqSchema signature) ----------
const faqs = [
  {
    q: "Is retatrutide more effective than tirzepatide for weight loss?",
    a: "Phase III data suggests yes, but by a smaller margin than most people assume. Retatrutide produced 28.7% body weight reduction at 12mg over 68 weeks in TRIUMPH-4. Tirzepatide produced 22.5% at 15mg over 72 weeks in SURMOUNT-1. That is roughly a 6 percentage point gap, or 27% more weight loss in relative terms. No head-to-head trial has been run yet.",
  },
  {
    q: "Both are made by Eli Lilly. Why would Lilly compete with itself?",
    a: "Retatrutide and tirzepatide target different segments of the same market. Tirzepatide is the current commercial workhorse (Mounjaro for diabetes, Zepbound for obesity). Retatrutide is positioned as a next-generation option for patients who need more aggressive weight loss or who plateau on tirzepatide. Lilly also has orforglipron (oral) and other candidates advancing. The portfolio strategy is coverage of the entire efficacy and tolerability spectrum.",
  },
  {
    q: "What is the difference in mechanism?",
    a: "Tirzepatide is a dual agonist at GLP-1 and GIP receptors. Retatrutide is a triple agonist at GLP-1, GIP, and glucagon receptors. The glucagon component is the novel piece. Glucagon receptor activation is thought to increase basal energy expenditure and hepatic fat oxidation, which may explain why retatrutide's weight loss curve did not plateau at 48 weeks in Phase II.",
  },
  {
    q: "Is retatrutide available now?",
    a: "No. Retatrutide remains investigational as of April 2026. Eli Lilly is expected to file a New Drug Application in late 2026 or 2027, with potential approval in 2027 or 2028. Tirzepatide is FDA-approved and available as Mounjaro (diabetes, approved May 2022) and Zepbound (obesity, approved November 2023).",
  },
  {
    q: "How do the side effect profiles compare?",
    a: "Both share the class-typical gastrointestinal profile: nausea, vomiting, diarrhea, constipation, most pronounced during titration. Tirzepatide is generally described as better tolerated than semaglutide in real-world use. Retatrutide in TRIUMPH-4 showed a new signal (dysesthesia) in 20.9% of patients at 12mg versus 0.7% on placebo, which was not seen in Phase II. Discontinuation in TRIUMPH-4 was 18.2% at 12mg, compared with roughly 6 to 7% for tirzepatide 15mg in SURMOUNT-1.",
  },
  {
    q: "What does the dosing look like for each?",
    a: "Tirzepatide (Zepbound) titrates from 2.5mg weekly up to 15mg maintenance over 20 weeks, with intermediate maintenance options at 5mg, 7.5mg, 10mg, and 12.5mg. Retatrutide in TRIUMPH-4 started at 2mg weekly and escalated every four weeks up to 9mg or 12mg. Both are once-weekly subcutaneous injections.",
  },
  {
    q: "Can I switch from tirzepatide to retatrutide?",
    a: "Not currently through standard medical channels, because retatrutide is not available outside clinical trials. When retatrutide is approved, a switch would likely involve stopping tirzepatide, allowing a washout period, and retitrating retatrutide from the lowest dose. Any transition should be planned with a qualified clinician given the higher discontinuation rate observed in TRIUMPH-4.",
  },
  {
    q: "Which has stronger cardiovascular data?",
    a: "Neither has a published cardiovascular outcomes trial specific to obesity. Tirzepatide's SURPASS-CVOT is ongoing in type 2 diabetes. Retatrutide's TRIUMPH-3 (cardiovascular outcomes) is also ongoing. Semaglutide currently holds the outcomes data in the GLP-1 class via SELECT (20% MACE reduction). Both Lilly compounds improved blood pressure, lipids, and glycemic markers in their respective weight-loss trials, but outcomes data is pending.",
  },
];

// ---------- PAGE ----------
export default function RetatrutideVsTirzepatidePage() {
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
    { name: "Retatrutide vs Tirzepatide", item: CANONICAL },
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
          <span>Comparison File</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Incretin Class</span>
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
          Retatrutide vs Tirzepatide: A Head-to-Head Data Comparison
        </h1>

        <p className="page-intro">
          Phase III TRIUMPH-4 put retatrutide 12mg at 28.7% body weight
          reduction over 68 weeks. SURMOUNT-1 put tirzepatide 15mg at 22.5%
          over 72 weeks. Both are Eli Lilly compounds. Only one is approved,
          and the gap between them is smaller than the gap tirzepatide opened
          over semaglutide.
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
          <span>~2,200 words</span>
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
            { stat: "28.7%", label: "Retatrutide 12mg, TRIUMPH-4" },
            { stat: "22.5%", label: "Tirzepatide 15mg, SURMOUNT-1" },
            { stat: "3 vs 2", label: "Receptors targeted" },
            { stat: "68 wk", label: "Retatrutide trial duration" },
            { stat: "72 wk", label: "Tirzepatide trial duration" },
            { stat: "2022", label: "Tirzepatide FDA approval" },
            { stat: "2027+", label: "Retatrutide NDA target" },
            { stat: "20.9%", label: "Dysesthesia at 12mg reta" },
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
            Retatrutide and tirzepatide are the two most aggressive incretin
            therapies in the Eli Lilly pipeline. Tirzepatide is the current
            commercial leader: FDA-approved as Mounjaro (type 2 diabetes, May
            2022) and Zepbound (obesity, November 2023), with the strongest
            efficacy data of any approved weight loss drug. SURMOUNT-1
            (Jastreboff et al., <em>NEJM</em>, 2022) put the 15mg dose at
            22.5% mean body weight reduction over 72 weeks. Retatrutide is
            investigational. Its first Phase III readout, TRIUMPH-4
            (NCT05931367), reported in December 2025 with the 12mg dose at
            28.7% over 68 weeks.
          </p>

          <p>
            Six percentage points separate the two headline figures. That
            matters less in isolation than it does relative to the tirzepatide
            vs semaglutide gap, which was roughly 7 to 8 percentage points in
            the SURMOUNT-5 head-to-head trial (20.2% vs 13.7%). In other
            words: the move from dual to triple agonism produces a smaller
            incremental gain than the move from single to dual agonism did.
            The law of diminishing returns may apply at the receptor level,
            and that has implications for how clinicians, patients, and
            investors should think about retatrutide's eventual market
            position.
          </p>

          <p>
            This article walks through the mechanisms, the trial evidence,
            the dosing and tolerability picture, and the practical context.
            All figures below come from published trial data or Eli Lilly's
            December 2025 press release, with sources cited throughout.
          </p>

          <h2 id="what-they-are">What the two compounds are</h2>

          <p>
            Tirzepatide is a dual agonist at GLP-1 and GIP receptors. GLP-1
            (glucagon-like peptide-1) activation slows gastric emptying,
            stimulates glucose-dependent insulin release, reduces glucagon
            secretion, and acts centrally on appetite. GIP (glucose-dependent
            insulinotropic polypeptide) activation enhances insulin secretion
            and appears to have synergistic effects with GLP-1 in adipose
            tissue, particularly on lipid handling. Tirzepatide was the first
            approved dual incretin receptor agonist and is marketed by Eli
            Lilly as Mounjaro (type 2 diabetes) and Zepbound (obesity).
          </p>

          <p>
            Retatrutide (Eli Lilly's LY3437943) adds a third receptor:
            glucagon. Glucagon receptor activation in the liver and adipose
            tissue is thought to increase basal energy expenditure and
            promote fat oxidation. Tirzepatide reduces calorie intake through
            GLP-1 plus modulates adipose metabolism through GIP. Retatrutide
            does both of those things and then adds a metabolic rate lever on
            top. The mechanistic argument for the extra weight loss is that
            appetite suppression eventually plateaus, but raising basal
            metabolic rate does not plateau in the same way, at least over
            trial timelines.
          </p>

          <p>
            Both compounds are lipidated peptides engineered for once-weekly
            subcutaneous dosing. Tirzepatide's half-life is approximately 5
            days. Retatrutide's is roughly 6 days. Both use prefilled pens in
            their trial and commercial presentations. Neither has an oral
            formulation for weight loss, though Lilly is separately advancing
            orforglipron as an oral GLP-1 agonist.
          </p>

          <h2 id="research">What the research says</h2>

          <p>
            The fairest comparison is each compound's pivotal Phase III
            obesity trial, running under broadly similar conditions.
          </p>

          <h3>Tirzepatide: SURMOUNT-1 and the SURMOUNT programme</h3>
          <p>
            SURMOUNT-1 (Jastreboff et al., <em>New England Journal of
            Medicine</em>, 2022; NCT04184622) randomised 2,539 adults with
            obesity (or overweight with comorbidities) without type 2 diabetes
            to tirzepatide 5mg, 10mg, or 15mg weekly, or placebo, for 72
            weeks. Mean body weight change at week 72 was -15.0% at 5mg,
            -19.5% at 10mg, and -20.9% at 15mg, versus -3.1% with placebo.
            Mean values were subsequently reported as up to 22.5% in
            responder analyses, which is the figure most commonly quoted. At
            15mg, 56.7% of participants achieved at least 20% body weight
            loss, a threshold previously associated with bariatric surgery.
          </p>
          <p>
            SURMOUNT-2 extended the programme to adults with obesity and type
            2 diabetes. SURMOUNT-3 tested tirzepatide after a 12-week intensive
            lifestyle lead-in. SURMOUNT-4 assessed weight maintenance after
            open-label induction. SURMOUNT-5 (Aronne et al., <em>NEJM</em>,
            2025; NCT05822830) was the first head-to-head weight loss trial
            in the class: 751 adults with obesity and at least one comorbidity
            (hypertension, dyslipidemia, OSA, or cardiovascular disease)
            randomised 1:1 to the maximum tolerated dose of tirzepatide (10mg
            or 15mg) or semaglutide (1.7mg or 2.4mg) over 72 weeks. Mean
            weight loss was 20.2% with tirzepatide versus 13.7% with
            semaglutide, a 47% relative improvement. Tirzepatide participants
            were more than twice as likely to achieve 25% body weight loss
            (31.6% vs 16.1%). Gastrointestinal discontinuation was higher on
            semaglutide (5.6%) than tirzepatide (2.7%). Tirzepatide is
            currently the only compound in the class with a published
            head-to-head weight loss win over semaglutide.
          </p>

          <h3>Retatrutide: TRIUMPH-4 and Phase II</h3>
          <p>
            The Phase II obesity trial (Jastreboff et al., <em>NEJM</em>,
            2023) tested retatrutide across multiple doses in 338 adults over
            48 weeks. The 12mg arm produced a mean body weight reduction of
            -24.2%, with no plateau visible at trial end. The Phase II
            programme also reported reductions in intrahepatic fat of up to
            86% at the highest dose as measured by MRI-PDFF, an effect size
            larger than anything previously published in the class.
          </p>
          <p>
            TRIUMPH-4 (NCT05931367) reported topline results on December 11,
            2025. The trial enrolled 1,632 adults with obesity and knee
            osteoarthritis. At 68 weeks, the 12mg dose produced -28.7% body
            weight reduction, the 9mg dose produced -26.4%, and placebo
            produced -2.1%. Systolic blood pressure fell by 14.0 mmHg at
            12mg. WOMAC pain scores improved by -4.4 points at 12mg versus
            -2.4 on placebo. Seven additional Phase III readouts from the
            TRIUMPH programme (including TRIUMPH-1 for general obesity and
            TRIUMPH-3 for cardiovascular outcomes) are expected through 2026.
          </p>

          <h3>The diabetes picture</h3>
          <p>
            Tirzepatide's SURPASS programme (SURPASS-1 through SURPASS-5)
            established its diabetes profile. In SURPASS trials, tirzepatide
            at 15mg produced A1C reductions of 1.7% to 2.4% and weight loss
            of 7% to 9% in diabetes populations. Retatrutide's first diabetes
            Phase III readout, TRANSCEND-T2D-1 (March 19, 2026), produced a
            2.0% A1C reduction and 16.8% body weight loss at 12mg over 40
            weeks. Weight loss had not plateaued at week 40, which is
            unusual for the class. In diabetes populations, retatrutide's
            weight loss advantage over tirzepatide appears even larger than
            in non-diabetic populations.
          </p>

          <h2 id="dosing">Practical breakdown: dosing, administration, tolerability</h2>

          <p>
            Both compounds are once-weekly subcutaneous injections. Both
            require titration to manage gastrointestinal side effects. The
            schedules and dose options differ meaningfully.
          </p>

          <h3>Tirzepatide titration (Zepbound)</h3>
          <ul>
            <li>Weeks 1 to 4: 2.5mg weekly (initiation dose, not therapeutic)</li>
            <li>Weeks 5 to 8: 5mg weekly</li>
            <li>Weeks 9 to 12: 7.5mg weekly</li>
            <li>Weeks 13 to 16: 10mg weekly</li>
            <li>Weeks 17 to 20: 12.5mg weekly</li>
            <li>Week 21 onward: 15mg weekly (full maintenance)</li>
          </ul>
          <p>
            Tirzepatide's labelled maintenance options include 5mg, 10mg, and
            15mg. Clinicians often stop titration earlier if the patient is
            losing weight well at a lower dose or if tolerability drives the
            decision. 5mg alone produces 15% weight loss in trials, which is
            comparable to semaglutide 2.4mg at its maximum.
          </p>

          <h3>Retatrutide titration (as used in TRIUMPH-4)</h3>
          <ul>
            <li>Weeks 1 to 4: 2mg weekly</li>
            <li>Weeks 5 to 8: 4mg weekly</li>
            <li>Weeks 9 to 12: 6mg weekly</li>
            <li>Weeks 13+: 8mg, 9mg, or 12mg maintenance depending on arm</li>
          </ul>
          <p>
            Retatrutide's titration is faster per step (4-week intervals)
            than tirzepatide's (4-week intervals starting at lower absolute
            doses, but with more steps). The real-world approved schedule
            will likely be determined by TRIUMPH-1 and label negotiations,
            and may include slower options given the Phase III discontinuation
            rates.
          </p>

          <p>
            Gastrointestinal events in TRIUMPH-4 at 12mg retatrutide: nausea
            43%, vomiting 21%, diarrhea 33%. In SURMOUNT-1 at 15mg tirzepatide:
            nausea 31% to 36%, vomiting 12% to 16%, diarrhea roughly 20%.
            Tirzepatide is broadly the better-tolerated compound on GI
            endpoints. The more important divergence is dysesthesia, reported
            in 8.8% of retatrutide patients at 9mg and 20.9% at 12mg, against
            0.7% on placebo. Dysesthesia (an abnormal skin sensation
            including tingling, burning, or numbness) was not reported in
            Phase II. Lilly stated the events did not generally lead to
            discontinuation, but analysts flagged the signal as something to
            track across remaining TRIUMPH readouts.
          </p>

          <p>
            Discontinuation rates are the other meaningful difference. In
            TRIUMPH-4, discontinuation was 12.2% at 9mg and 18.2% at 12mg,
            versus 4% on placebo. In SURMOUNT-1, discontinuation for
            tirzepatide 15mg was approximately 7%. Some TRIUMPH-4
            discontinuations were attributed to "perceived excessive weight
            loss" in participants with lower baseline BMI. That is a novel
            finding in the class and suggests the 12mg dose may be too
            aggressive for many real-world patients.
          </p>

          <h2 id="comparison">Direct comparison table</h2>

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
                  <th
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
                    Metric
                  </th>
                  <th
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
                    Retatrutide
                  </th>
                  <th
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
                    Tirzepatide
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mechanism", "GLP-1 + GIP + glucagon triple agonist", "GLP-1 + GIP dual agonist"],
                  ["Manufacturer", "Eli Lilly", "Eli Lilly"],
                  ["Phase III weight loss", "-28.7% (12mg, 68wk, TRIUMPH-4)", "-22.5% (15mg, 72wk, SURMOUNT-1)"],
                  ["Regulatory status", "Investigational (not approved)", "FDA approved: Mounjaro 2022, Zepbound 2023"],
                  ["Brand names", "None (LY3437943)", "Mounjaro, Zepbound"],
                  ["Administration", "Weekly subcutaneous injection", "Weekly subcutaneous injection"],
                  ["Maintenance dose", "9mg or 12mg weekly", "5mg, 10mg, or 15mg weekly"],
                  ["Discontinuation (trial)", "18.2% at 12mg (TRIUMPH-4)", "~7% at 15mg (SURMOUNT-1)"],
                  ["Novel safety signal", "Dysesthesia (20.9% at 12mg)", "None in SURMOUNT programme"],
                  ["Head-to-head data", "None vs tirzepatide", "Beat semaglutide 47% relative (SURMOUNT-5)"],
                  ["Cardiovascular outcomes", "TRIUMPH-3 pending", "SURPASS-CVOT pending (T2D)"],
                  ["Availability", "Clinical trials only", "Pharmacies (US, UK, EU)"],
                  ["Expected approval", "Late 2027 or 2028", "Already approved"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: 500 }}>
                      {row[0]}
                    </td>
                    <td style={{ padding: "12px 16px" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="context">How to think about the gap</h2>

          <p>
            Cross-trial comparisons always carry caveats. SURMOUNT-1 enrolled
            adults with obesity (or overweight plus comorbidities) without
            diabetes, over 72 weeks. TRIUMPH-4 enrolled adults with obesity
            and knee osteoarthritis over 68 weeks. The populations, trial
            durations, and primary endpoints differ enough that the 6.2
            percentage point gap between 28.7% and 22.5% should be treated
            as a reasonable estimate, not a precise measurement. A direct
            head-to-head trial would settle the question. None has been
            announced, which is telling. Lilly owns both compounds and has
            limited commercial incentive to run a trial that could cannibalise
            tirzepatide sales before retatrutide is launch-ready.
          </p>

          <p>
            The more interesting comparison is the shape of the efficacy
            curve. Tirzepatide's weight loss in SURMOUNT-1 had largely
            plateaued by week 72. Retatrutide's weight loss in the 48-week
            Phase II trial had not plateaued, and the 68-week TRIUMPH-4
            readout suggests the trajectory continued to decline throughout
            the trial. If retatrutide produces continued weight loss beyond
            68 weeks (a pattern TRANSCEND-T2D-1 also showed), the real
            efficacy gap over longer durations could widen. Alternatively,
            if the discontinuation rate increases at higher baseline BMI
            thresholds or longer durations, the real-world gap could narrow.
          </p>

          <p>
            Real-world performance is the other variable worth flagging.
            Published real-world evidence for tirzepatide through 2025 has
            consistently shown weight loss running a few percentage points
            below trial benchmarks: roughly 15% to 18% average at 12 months
            on 15mg, compared with the 20% to 22% seen in SURMOUNT-1. The
            gap is driven by incomplete dose escalation (many patients never
            reach 15mg), lower adherence than in monitored trials, and
            insurance-driven interruptions. Retatrutide will face the same
            real-world drag once approved. The 28.7% trial headline will
            translate to something lower in routine practice, and the
            28.7% versus 22.5% comparison may compress in the real world to
            something closer to 22% versus 17%.
          </p>

          <p>
            On access and cost, tirzepatide is available now. Zepbound's US
            list price is approximately $1,060 to $1,350 per month with
            significant variation by payer and manufacturer copay programmes.
            Retatrutide pricing will be set by Lilly after approval; analyst
            estimates cluster around $1,200 to $1,500 per month, broadly
            comparable. For a patient starting treatment today, tirzepatide
            is the available option and is likely to remain so until at
            least 2027. Waiting two or three years for retatrutide carries
            an opportunity cost: the metabolic benefits of 22.5% weight loss
            on tirzepatide today are real and compound over time.
          </p>

          <p>
            For clinicians and patients thinking about sequencing: tirzepatide
            first is the default. If weight loss plateaus below goal or
            tolerability becomes limiting, retatrutide would be the
            second-line option once available. The reverse (starting
            retatrutide and de-escalating to tirzepatide) is mechanistically
            possible but would not be a standard pathway. Our{" "}
            <Link href="/retatrutide">Retatrutide File</Link> covers the
            compound in depth, our{" "}
            <Link href="/tirzepatide">Tirzepatide File</Link> covers the
            approved dual agonist, and the{" "}
            <Link href="/compare/retatrutide-vs-semaglutide-vs-tirzepatide">
              three-way comparison
            </Link>{" "}
            adds semaglutide to the picture. For the two-way semaglutide
            comparison, see{" "}
            <Link href="/retatrutide/vs-semaglutide">
              Retatrutide vs Semaglutide
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
              and does not constitute medical advice, diagnosis, or treatment.
              Retatrutide is an investigational compound and is not approved
              by the FDA, EMA, MHRA, or any other regulatory authority as of
              April 2026. Tirzepatide is prescription-only in all
              jurisdictions. Always consult a qualified healthcare provider
              before starting, stopping, or changing any medication or
              compound. Product being sold as retatrutide outside of
              authorised clinical trials is unregulated and should be
              approached with caution.
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
                ["what-they-are", "What they are"],
                ["research", "What the research says"],
                ["dosing", "Dosing and tolerability"],
                ["comparison", "Direct comparison"],
                ["context", "How to think about the gap"],
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
                ["/tirzepatide", "The Tirzepatide File"],
                ["/semaglutide", "The Semaglutide File"],
                ["/retatrutide/vs-semaglutide", "Retatrutide vs Semaglutide"],
                ["/retatrutide/side-effects", "Retatrutide Side Effects"],
                ["/retatrutide/dosage", "Retatrutide Dosage Guide"],
                [
                  "/compare/retatrutide-vs-semaglutide-vs-tirzepatide",
                  "Three-way comparison",
                ],
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
