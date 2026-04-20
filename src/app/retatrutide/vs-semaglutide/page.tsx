import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Retatrutide vs Semaglutide: Head-to-Head Data Comparison";
const DESCRIPTION =
  "Retatrutide hit 28.7% weight loss in Phase III TRIUMPH-4 versus semaglutide's 14.9% in STEP 1. Full mechanism, dosing, and safety comparison.";
const SLUG = "retatrutide/vs-semaglutide";
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

// ---------- FAQ DATA ----------
const faqs = [
  {
    q: "Is retatrutide more effective than semaglutide for weight loss?",
    a: "Phase III data suggests yes. Retatrutide produced 28.7% body weight reduction at 12mg over 68 weeks in TRIUMPH-4. Semaglutide 2.4mg produced 14.9% over the same duration in STEP 1. Retatrutide roughly doubles the efficacy ceiling of semaglutide, though cross-trial comparisons should be interpreted with caution.",
  },
  {
    q: "Is retatrutide FDA-approved?",
    a: "No. Retatrutide remains investigational as of April 2026. Eli Lilly is expected to file a New Drug Application in late 2026 or 2027, with potential approval in 2027 or 2028 depending on review timelines. Semaglutide is FDA-approved and has been on the market since 2017 (Ozempic) and 2021 (Wegovy).",
  },
  {
    q: "What is the difference in mechanism between the two compounds?",
    a: "Semaglutide is a single-receptor agonist targeting GLP-1 only. Retatrutide is a triple agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. The added glucagon activation is thought to increase energy expenditure and fat oxidation, which may explain the larger weight loss seen in trials.",
  },
  {
    q: "Can I switch from semaglutide to retatrutide?",
    a: "Not currently through standard medical channels, because retatrutide is not available outside clinical trials. If and when retatrutide is approved, a washout period of two to three weeks after stopping semaglutide and retitration from the lowest retatrutide dose would be the cautious approach. Any transition should be supervised by a qualified clinician.",
  },
  {
    q: "How do the side effect profiles compare?",
    a: "Both compounds share the typical GLP-1 class profile: nausea, vomiting, diarrhea, and constipation, usually dose-dependent and most pronounced during titration. Retatrutide showed a new safety signal in TRIUMPH-4 called dysesthesia (abnormal skin sensation), reported in 20.9% of patients at 12mg versus 0.7% on placebo. Discontinuation rates in TRIUMPH-4 were 18.2% at 12mg.",
  },
  {
    q: "What does a typical dose look like?",
    a: "Semaglutide for weight loss (Wegovy) titrates from 0.25mg weekly up to a maintenance dose of 2.4mg over roughly 16 weeks. Retatrutide in TRIUMPH-4 used a slower titration: starting at 2mg weekly and escalating every four weeks up to 9mg or 12mg maintenance. Both are once-weekly subcutaneous injections.",
  },
  {
    q: "Which one is better for type 2 diabetes?",
    a: "Semaglutide has a strong established profile for type 2 diabetes, with the SUSTAIN trial programme and SELECT cardiovascular outcomes data. Retatrutide's TRANSCEND-T2D-1 readout in March 2026 showed a 2.0% A1C reduction and 16.8% weight loss at 12mg over 40 weeks, which exceeds both semaglutide and tirzepatide benchmarks in diabetes populations. Semaglutide remains the only approved option today.",
  },
  {
    q: "How much will retatrutide cost once approved?",
    a: "Analyst estimates put retatrutide at $1,200 to $1,500 per month at launch, roughly in line with or slightly above current GLP-1 pricing. Semaglutide (Wegovy) list price is around $1,350 per month in the United States, with significant variation by payer, region, and compounding status. Final retatrutide pricing will be set by Eli Lilly post-approval.",
  },
];

// ---------- PAGE ----------
export default function RetatrutideVsSemaglutidePage() {
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
    { name: "Retatrutide vs Semaglutide", item: CANONICAL },
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
          <span>GLP-1 Class</span>
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
          Retatrutide vs Semaglutide: A Head-to-Head Data Comparison
        </h1>

        <p className="page-intro">
          Phase III TRIUMPH-4 put retatrutide at 28.7% body weight reduction over
          68 weeks. Semaglutide's STEP 1 topped out at 14.9% over the same
          window. The gap is real, the mechanisms are different, and the
          approval timelines are roughly five years apart.
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
            { stat: "14.9%", label: "Semaglutide 2.4mg, STEP 1" },
            { stat: "3 vs 1", label: "Receptors targeted" },
            { stat: "68 wk", label: "Trial duration, both" },
            { stat: "2021", label: "Semaglutide FDA approval" },
            { stat: "2027+", label: "Retatrutide NDA target" },
            { stat: "20.9%", label: "Dysesthesia at 12mg reta" },
            { stat: "$1,350", label: "Wegovy monthly list" },
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
            Retatrutide and semaglutide sit at opposite ends of the same drug
            class. Semaglutide has been on the market since 2017, with the
            weight loss indication (Wegovy) approved in 2021 based on STEP 1
            data showing an average 14.9% body weight reduction at the 2.4mg
            weekly dose over 68 weeks (Wilding et al., <em>NEJM</em> 2021).
            Retatrutide is not yet approved anywhere in the world. Its first
            Phase III readout, TRIUMPH-4 (NCT05931367), reported in December
            2025 and put the 12mg dose at 28.7% body weight reduction across
            the same 68-week window.
          </p>

          <p>
            That headline gap (roughly double the weight loss) is the main
            reason this comparison exists. But the picture underneath matters.
            Semaglutide has years of real-world safety data, a cardiovascular
            outcomes trial (SELECT) showing reduced major adverse events, and
            actual availability through pharmacies. Retatrutide has a stronger
            efficacy profile in the trials run so far, a new safety signal
            (dysesthesia) that wasn't present in Phase II, and a regulatory
            pathway that keeps it out of patient hands until at least 2027.
          </p>

          <p>
            This article walks through the mechanisms, the trial evidence, the
            practical differences in dosing and side effects, and the
            comparative context most readers actually need. All figures below
            come from published trial data or Eli Lilly's December 2025 press
            release, cited where possible.
          </p>

          <h2 id="what-they-are">What the two compounds are</h2>

          <p>
            Semaglutide is a GLP-1 receptor agonist. It mimics the incretin
            hormone glucagon-like peptide-1, which is released by L-cells in
            the intestine after meals. Activating the GLP-1 receptor slows
            gastric emptying, increases insulin secretion in response to
            glucose, reduces glucagon release, and acts centrally on appetite
            pathways. Semaglutide is marketed as Ozempic for type 2 diabetes,
            Wegovy for chronic weight management, and Rybelsus for oral
            diabetes treatment.
          </p>

          <p>
            Retatrutide (Eli Lilly's LY3437943) is a first-in-class triple
            hormone receptor agonist. It activates GLP-1 receptors (same
            mechanism as semaglutide), GIP receptors (glucose-dependent
            insulinotropic polypeptide, the second receptor that tirzepatide
            also hits), and glucagon receptors. The glucagon component is the
            novel piece: glucagon receptor activation in the liver and adipose
            tissue is thought to increase basal energy expenditure and promote
            fat oxidation. Semaglutide's mechanism reduces calorie intake.
            Retatrutide's mechanism reduces intake and raises expenditure.
          </p>

          <p>
            The pharmacological distinction matters because it explains both
            the larger weight loss and the different safety profile. On
            semaglutide, the ceiling on efficacy is roughly the ceiling on
            tolerable appetite suppression: once a patient's food intake
            drops enough, the drug cannot pull weight down further. The
            glucagon agonism in retatrutide opens a second lever. Even if
            appetite suppression plateaus, basal metabolic rate and hepatic
            fat oxidation continue pulling on body weight. That is the
            mechanistic argument for why retatrutide's weight loss curves in
            both Phase II and TRIUMPH-4 did not flatten out by week 48, and
            why TRANSCEND-T2D-1 showed continued reduction at week 40.
          </p>

          <p>
            Both compounds are lipidated peptides designed for a long half-life
            and weekly dosing. Semaglutide's half-life is around 165 hours
            (about seven days). Retatrutide's is similar at approximately six
            days. Both are subcutaneous injections using prefilled pens or
            auto-injectors in their trial and commercial forms. Neither has
            an oral weight-loss indication, though oral semaglutide exists
            for diabetes (Rybelsus) and Lilly's oral orforglipron is advancing
            separately.
          </p>

          <h2 id="research">What the research says</h2>

          <p>
            The most directly comparable data points are the Phase III primary
            obesity trials for each compound.
          </p>

          <h3>Semaglutide: STEP 1 and the broader STEP programme</h3>
          <p>
            The STEP 1 trial (Wilding et al., <em>New England Journal of
            Medicine</em>, 2021; NCT03548935) randomised 1,961 adults with
            overweight or obesity (no type 2 diabetes) to semaglutide 2.4mg
            weekly or placebo for 68 weeks, alongside lifestyle intervention.
            Mean body weight change was -14.9% with semaglutide versus -2.4%
            with placebo. STEP 2 tested semaglutide in adults with type 2
            diabetes and showed -9.6% at 2.4mg. STEP 3 layered on intensive
            behavioural therapy and produced -16.0%. STEP 4 showed what
            happens when treatment is withdrawn: patients who switched to
            placebo regained a substantial fraction of lost weight, while
            those continuing semaglutide kept losing. STEP 5 extended
            treatment to two years and reported sustained reductions of
            around -15.2%.
          </p>
          <p>
            Beyond weight, the SELECT trial (Lincoff et al., <em>NEJM</em>,
            2023) tested semaglutide 2.4mg in 17,604 adults with established
            cardiovascular disease and overweight or obesity, without
            diabetes. Over a median 40 months, semaglutide produced a 20%
            relative risk reduction in the composite of cardiovascular death,
            non-fatal myocardial infarction, or non-fatal stroke. SELECT is
            the strongest outcomes data in the GLP-1 class for weight
            management and is a meaningful advantage semaglutide currently
            holds over every other compound in the comparison.
          </p>

          <h3>Retatrutide: TRIUMPH-4, Phase II, and what's still pending</h3>
          <p>
            The Phase II obesity trial (Jastreboff et al., <em>NEJM</em>, 2023)
            tested retatrutide across multiple doses in 338 adults over 48
            weeks. The 12mg arm produced a mean body weight reduction of
            -24.2%, with no plateau visible at the end of the study. That
            figure set the expectation for Phase III. The same Phase II
            programme also reported a striking liver outcome: in the subgroup
            with elevated liver fat, retatrutide reduced intrahepatic fat
            (measured by MRI-PDFF) by up to 86% at the highest dose, an
            effect size larger than anything previously published in the
            class.
          </p>
          <p>
            TRIUMPH-4 (NCT05931367) reported topline results on December 11,
            2025. The trial enrolled 1,632 adults with obesity and knee
            osteoarthritis. At 68 weeks, the 12mg dose produced -28.7% body
            weight reduction, the 9mg dose produced -26.4%, and placebo
            produced -2.1%. Systolic blood pressure fell by 14.0 mmHg at 12mg.
            WOMAC pain scores improved by -4.4 points at 12mg versus -2.4 on
            placebo. Cardiovascular risk markers improved across the board.
          </p>
          <p>
            Seven more Phase III readouts from the TRIUMPH programme are
            expected through 2026, including TRIUMPH-1 (general obesity,
            the pivotal NDA trial), TRIUMPH-2 (obesity with type 2 diabetes),
            and TRIUMPH-3 (cardiovascular outcomes). The cardiovascular
            outcomes readout is the one that will determine whether
            retatrutide can compete directly with semaglutide's SELECT data.
            Until TRIUMPH-3 reports, semaglutide has the documented outcomes
            advantage.
          </p>

          <h3>The diabetes picture</h3>
          <p>
            TRANSCEND-T2D-1, reported by Eli Lilly on March 19, 2026, was the
            first Phase III retatrutide trial in type 2 diabetes. At 12mg
            over 40 weeks, participants saw a 2.0% A1C reduction and 16.8%
            body weight loss. For context, semaglutide 1.0mg in the SUSTAIN
            trials produced roughly 5% to 7% weight loss in diabetes
            populations. Weight loss in TRANSCEND-T2D-1 had not plateaued at
            week 40, which is unusual for the class.
          </p>

          <h2 id="dosing">Practical breakdown: dosing, administration, tolerability</h2>

          <p>
            Both are once-weekly subcutaneous injections. Both require
            titration to manage gastrointestinal side effects. The schedules
            differ.
          </p>

          <h3>Semaglutide titration (Wegovy)</h3>
          <ul>
            <li>Weeks 1 to 4: 0.25mg weekly</li>
            <li>Weeks 5 to 8: 0.5mg weekly</li>
            <li>Weeks 9 to 12: 1.0mg weekly</li>
            <li>Weeks 13 to 16: 1.7mg weekly</li>
            <li>Week 17 onward: 2.4mg weekly (maintenance)</li>
          </ul>

          <h3>Retatrutide titration (as used in TRIUMPH-4)</h3>
          <ul>
            <li>Weeks 1 to 4: 2mg weekly</li>
            <li>Weeks 5 to 8: 4mg weekly</li>
            <li>Weeks 9 to 12: 6mg weekly</li>
            <li>Weeks 13+: 8mg, 9mg, or 12mg maintenance depending on arm</li>
          </ul>

          <p>
            The trial titration is slower than what has been reported in
            research-use-only protocols circulating online. Lilly's approach
            was designed to minimise gastrointestinal intolerance and
            discontinuation. Even with that schedule, discontinuation rates in
            TRIUMPH-4 were 12.2% at 9mg and 18.2% at 12mg, compared to 4% on
            placebo. Some of the discontinuations were attributed to
            "perceived excessive weight loss" in participants with lower
            baseline BMI.
          </p>

          <p>
            Common adverse events were broadly similar across the two
            compounds at class-typical rates: nausea, diarrhea, vomiting,
            constipation. Retatrutide at 12mg reported nausea in 43%, vomiting
            in 21%, and diarrhea in 33% of participants. The notable
            divergence is dysesthesia, reported in 8.8% of patients at 9mg
            retatrutide and 20.9% at 12mg, against 0.7% on placebo. Dysesthesia
            is an abnormal skin sensation (tingling, burning, numbness) that
            was not reported in Phase II. Lilly stated these events did not
            generally lead to discontinuation, but analysts flagged the signal
            as something to track across the remaining TRIUMPH readouts.
          </p>

          <p>
            Two other practical points worth flagging. First, TRIUMPH-4
            reported that some of the discontinuations at 12mg were driven by
            what Lilly described as "perceived excessive weight loss" in
            participants with lower baseline BMI. The rate of weight loss
            was, for some participants, uncomfortably fast. In a real-world
            setting, that suggests the 9mg dose may become the effective
            maintenance dose for many patients, with 12mg reserved for those
            with higher starting weight or plateaued progress. Second,
            semaglutide's tolerability improves significantly with slower
            titration. Clinicians sometimes extend the STEP titration schedule
            from 16 weeks to 20 or 24 weeks to reduce nausea, a lever that
            may also apply to retatrutide once the label arrives.
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
                    Semaglutide
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mechanism", "GLP-1 + GIP + glucagon triple agonist", "GLP-1 single agonist"],
                  ["Phase III weight loss", "-28.7% (12mg, 68wk, TRIUMPH-4)", "-14.9% (2.4mg, 68wk, STEP 1)"],
                  ["Manufacturer", "Eli Lilly", "Novo Nordisk"],
                  ["Regulatory status", "Investigational (not approved)", "FDA approved 2017 / 2021"],
                  ["Administration", "Weekly subcutaneous injection", "Weekly subcutaneous injection"],
                  ["Maintenance dose", "9mg or 12mg weekly", "2.4mg weekly"],
                  ["Discontinuation (trial)", "18.2% at 12mg (TRIUMPH-4)", "~6% at 2.4mg (STEP 1)"],
                  ["Novel safety signal", "Dysesthesia (20.9% at 12mg)", "None new in STEP 1"],
                  ["Cardiovascular data", "Pending (TRIUMPH-3)", "SELECT trial: reduced MACE"],
                  ["Availability", "Clinical trials only", "Pharmacies (Wegovy, Ozempic)"],
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
            Cross-trial comparisons are imperfect. STEP 1 enrolled a different
            population (adults with overweight or obesity without diabetes) to
            TRIUMPH-4 (adults with obesity and knee osteoarthritis). Both
            trials were 68 weeks, both compared against placebo with
            lifestyle support, but no head-to-head trial has been run. A
            direct comparison would be the only way to remove trial design as
            a confound. For now, the fair statement is: under broadly similar
            conditions, retatrutide 12mg produces weight loss roughly double
            that of semaglutide 2.4mg.
          </p>

          <p>
            The other half of the comparison is risk and access. Semaglutide
            has been prescribed to millions of patients, has a published
            cardiovascular outcomes trial (SELECT) showing 20% relative risk
            reduction in major adverse cardiovascular events, and has known
            pricing through insurance channels. Retatrutide has stronger
            efficacy in the trials run so far but a smaller evidence base
            overall, a safety signal (dysesthesia) that needs characterising,
            and no pathway to prescription availability before 2027 at the
            earliest.
          </p>

          <p>
            Access is the point that most comparisons gloss over. Even for
            semaglutide, the picture is messy: Novo Nordisk shortages through
            2023 and 2024 pushed many patients to compounded semaglutide from
            503A and 503B pharmacies. The FDA removed semaglutide from the
            drug shortage list in early 2025, which ended the legal basis for
            most compounding. Patients on compounded versions had to switch
            back to branded Wegovy or Ozempic, pay out of pocket, or move to
            other compounds. Retatrutide's eventual approval will likely
            reset the supply dynamic again, and Lilly's manufacturing capacity
            is one of the unknowns that may constrain the early rollout.
          </p>

          <p>
            On price, Wegovy's US list price sits around $1,350 per month, with
            substantial variation by insurance coverage and manufacturer
            copay programmes. Analyst estimates put retatrutide at $1,200 to
            $1,500 per month at launch. Medicare does not currently cover
            weight-loss medications, and commercial coverage is patchy.
            Patients paying out of pocket will see similar monthly outlays
            for either compound, with retatrutide's advantage being potentially
            faster time-to-target-weight (meaning fewer total months of
            treatment to reach goal).
          </p>

          <p>
            For readers looking at this from a clinical or practical angle,
            the calculation usually reduces to: how much does the extra weight
            loss matter, how much does waiting two or three years cost, and
            how much of the long-term safety picture can you accept being
            unknown. Our{" "}
            <Link href="/retatrutide">Retatrutide File</Link> covers the
            compound in depth, our{" "}
            <Link href="/semaglutide">Semaglutide File</Link> covers the
            approved GLP-1, and the{" "}
            <Link href="/compare/retatrutide-vs-semaglutide-vs-tirzepatide">
              three-way comparison
            </Link>{" "}
            includes tirzepatide (currently the strongest approved option at
            around 22.5% weight loss in SURMOUNT-1).
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
              2026. Semaglutide is prescription-only in all jurisdictions.
              Always consult a qualified healthcare provider before starting,
              stopping, or changing any medication or compound. Product being
              sold as retatrutide outside of authorised clinical trials is
              unregulated and should be approached with caution.
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
                ["/semaglutide", "The Semaglutide File"],
                ["/tirzepatide", "The Tirzepatide File"],
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
