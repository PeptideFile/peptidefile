import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Semaglutide vs Tirzepatide: Head-to-Head Data Comparison";
const DESCRIPTION =
  "SURMOUNT-5 put tirzepatide at 20.2% weight loss versus semaglutide's 13.7% over 72 weeks. Full mechanism, dosing, cost, and safety comparison.";
const SLUG = "glp-1/semaglutide-vs-tirzepatide";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-05-03T00:00:00+00:00";
const MODIFIED = "2026-05-03T00:00:00+00:00";

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
    q: "Is tirzepatide more effective than semaglutide for weight loss?",
    a: "In the only head-to-head trial run between the two compounds, yes. SURMOUNT-5 (Aronne et al., NEJM, 2025) randomised 751 adults with obesity (without diabetes) to tirzepatide or semaglutide at maximum tolerated doses for 72 weeks. Tirzepatide produced 20.2% body weight reduction versus 13.7% on semaglutide, a 6.5 percentage point advantage. Cross-trial comparisons of SURMOUNT-1 (22.5%) and STEP 1 (14.9%) point in the same direction.",
  },
  {
    q: "Are both drugs FDA-approved for weight loss?",
    a: "Yes. Semaglutide 2.4mg was approved as Wegovy in June 2021. Tirzepatide was approved for type 2 diabetes as Mounjaro in May 2022, and for chronic weight management as Zepbound in November 2023. Both also have separate diabetes indications. Both are once-weekly subcutaneous injections.",
  },
  {
    q: "What is the mechanism difference between the two compounds?",
    a: "Semaglutide is a single-receptor GLP-1 agonist. Tirzepatide is a dual agonist that activates both GLP-1 and GIP receptors. The added GIP component is thought to amplify satiety signalling and improve insulin sensitivity. Our triple vs dual agonism file walks through how each added receptor changes efficacy.",
  },
  {
    q: "Can I switch from semaglutide to tirzepatide?",
    a: "Yes, and this is now a common clinical scenario. The standard approach is to stop semaglutide, wait one to two weeks for washout, and start tirzepatide at the lowest 2.5mg dose with normal titration. Skipping the titration restart causes preventable nausea. Any switch should be done with a prescribing clinician.",
  },
  {
    q: "How do the side effect profiles compare?",
    a: "Both share the same class profile: nausea, vomiting, diarrhea, and constipation, all dose-dependent and most pronounced during titration. SURMOUNT-5 reported similar overall adverse event rates between the two arms. Tirzepatide showed slightly higher rates of constipation. Discontinuation due to adverse events was 6.1% on tirzepatide and 8.0% on semaglutide in SURMOUNT-5.",
  },
  {
    q: "Which is better for cardiovascular protection?",
    a: "Semaglutide currently has the stronger evidence. The SELECT trial (Lincoff et al., NEJM, 2023) showed a 20% reduction in major adverse cardiovascular events across 17,604 adults with established cardiovascular disease. Tirzepatide's SURPASS-CVOT readout is pending. Until that data lands, semaglutide is the only GLP-1 weight loss drug with a published cardiovascular outcomes trial.",
  },
  {
    q: "How much does each one cost in the United States?",
    a: "Wegovy's list price is around $1,350 per month. Zepbound is around $1,060 per month. Both manufacturers run savings card programmes that can bring out-of-pocket costs lower for commercially insured patients. Medicare does not cover weight-loss medications. Compounded versions are no longer broadly available since the FDA designated both as resolved shortages in late 2024 and early 2025.",
  },
  {
    q: "Should I wait for retatrutide before starting either of these?",
    a: "Probably not, if treatment is clinically indicated now. Retatrutide is investigational and unlikely to reach pharmacies before late 2027 or 2028. The 28.7% Phase III figure from TRIUMPH-4 is real, but waiting two or three years to start an approved 20% weight loss drug means foregoing meaningful clinical benefit during that window. The decision should be made with a clinician based on current health needs.",
  },
];

// ---------- PAGE ----------
export default function SemaglutideVsTirzepatidePage() {
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
    { name: "GLP-1", item: "https://peptidefile.com/glp-1" },
    { name: "Semaglutide vs Tirzepatide", item: CANONICAL },
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
          Semaglutide vs Tirzepatide: A Head-to-Head Data Comparison
        </h1>

        <p className="page-intro">
          SURMOUNT-5 is the only direct head-to-head trial run between the two
          drugs. Tirzepatide produced 20.2% weight loss against semaglutide's
          13.7% over 72 weeks. The mechanisms differ by one receptor, the
          pricing differs by a few hundred dollars, and the cardiovascular
          evidence sits firmly with semaglutide for now.
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
          <span>Last updated: May 2026</span>
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
            { stat: "20.2%", label: "Tirzepatide, SURMOUNT-5" },
            { stat: "13.7%", label: "Semaglutide, SURMOUNT-5" },
            { stat: "+6.5 pp", label: "Head-to-head gap, 72wk" },
            { stat: "2 vs 1", label: "Receptors targeted" },
            { stat: "2021", label: "Wegovy FDA approval" },
            { stat: "2023", label: "Zepbound FDA approval" },
            { stat: "20%", label: "Sema MACE reduction, SELECT" },
            { stat: "$290/mo", label: "List price gap, US" },
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
            For most patients choosing a GLP-1 weight loss drug today, the real
            decision is between Wegovy (semaglutide 2.4mg) and Zepbound
            (tirzepatide). Both are approved. Both are once-weekly injections.
            Both are made by major manufacturers with established supply
            chains. The clinically meaningful difference shows up in efficacy,
            and SURMOUNT-5 (Aronne et al., <em>New England Journal of
            Medicine</em>, 2025) is the trial that nailed it down.
          </p>

          <p>
            SURMOUNT-5 randomised 751 adults with obesity, without type 2
            diabetes, to either tirzepatide titrated to maximum tolerated dose
            (10mg or 15mg) or semaglutide titrated to 2.4mg, for 72 weeks.
            Tirzepatide produced a 20.2% mean body weight reduction.
            Semaglutide produced 13.7%. The 6.5 percentage point gap held
            across subgroups. Tirzepatide also produced larger reductions in
            waist circumference, blood pressure, and lipids.
          </p>

          <p>
            That gap is the central finding most readers come to this question
            for. The rest of the picture, including mechanisms, dosing
            schedules, side effect profiles, cardiovascular evidence, and
            cost, is what determines whether the head-to-head efficacy gap
            should drive an actual prescribing decision. This article walks
            through each of those layers.
          </p>

          <h2 id="what-they-are">What the two compounds are</h2>

          <p>
            Semaglutide is a GLP-1 receptor agonist. It mimics glucagon-like
            peptide-1, the incretin hormone released by L-cells in the
            intestine after a meal. Activating the GLP-1 receptor slows
            gastric emptying, increases glucose-dependent insulin secretion,
            suppresses glucagon release, and acts centrally on appetite
            pathways in the hypothalamus and brainstem. Novo Nordisk markets
            semaglutide as Ozempic for type 2 diabetes, Wegovy for chronic
            weight management, and Rybelsus as an oral diabetes treatment.
          </p>

          <p>
            Tirzepatide (Eli Lilly's LY3298176) is a dual agonist. It
            activates both the GLP-1 receptor and the GIP receptor (glucose-
            dependent insulinotropic polypeptide). GIP is the second incretin
            hormone, secreted by K-cells in the duodenum. For decades GIP was
            assumed to drive fat storage, based on knockout mouse studies that
            showed GIPR-null mice were protected from diet-induced obesity.
            Tirzepatide's clinical performance overturned that assumption:
            adding GIP activation to GLP-1 activation increased weight loss
            rather than blunting it. The current best mechanistic explanation
            is that GIP receptor activity in the central nervous system
            amplifies the satiety signal, and that GIP improves the insulin
            response to GLP-1 agonism in pancreatic beta cells. Our{" "}
            <Link href="/glp-1/vs-gip">GLP-1 vs GIP file</Link> covers the
            receptor biology in depth.
          </p>

          <p>
            The pharmacological gap between the two compounds is the addition
            of one receptor. Both target GLP-1 with similar receptor affinity.
            Tirzepatide's molecule is engineered to be a balanced agonist at
            both GLP-1 and GIP receptors. Semaglutide has no meaningful
            activity at GIP. Receptor stacking adds roughly 5 to 7 percentage
            points of weight loss per receptor across the class, and
            semaglutide-to-tirzepatide is the cleanest expression of that
            pattern, producing about 7.6 percentage points of additional
            weight loss in cross-trial comparisons.
          </p>

          <p>
            Both compounds are lipidated peptides designed for weekly dosing.
            Semaglutide's half-life is around 165 hours (about 7 days).
            Tirzepatide's is around 5 days. Both are administered as
            subcutaneous injections through prefilled pens, with comparable
            injection-site experience.
          </p>

          <h2 id="research">What the research says</h2>

          <p>
            Three trials matter most for this comparison. SURMOUNT-5 is the
            only head-to-head. STEP 1 and SURMOUNT-1 are the foundational
            obesity trials for each compound.
          </p>

          <h3>SURMOUNT-5: the head-to-head</h3>
          <p>
            SURMOUNT-5 (Aronne et al., <em>NEJM</em>, 2025) is the cleanest
            data point in the comparison. The trial randomised 751 adults
            with obesity (without type 2 diabetes) to tirzepatide at maximum
            tolerated dose (10mg or 15mg weekly) or semaglutide titrated to
            2.4mg weekly, for 72 weeks. Mean body weight change was -20.2%
            with tirzepatide versus -13.7% with semaglutide. The proportion
            of participants reaching 15% weight loss was 64.6% on tirzepatide
            and 40.1% on semaglutide. The proportion reaching 25% weight
            loss was 31.6% on tirzepatide and 16.1% on semaglutide.
          </p>
          <p>
            Secondary endpoints went the same direction. Waist circumference
            fell by an additional 5.6 cm on tirzepatide. Systolic blood
            pressure dropped by an extra 3 mmHg. Lipid profile improvements
            were larger across LDL, triglycerides, and non-HDL cholesterol.
            The trial removed cross-trial population differences as a
            confound, which is what makes its readout so much more useful
            than comparing STEP 1 and SURMOUNT-1 separately.
          </p>

          <h3>STEP 1 and the broader semaglutide programme</h3>
          <p>
            STEP 1 (Wilding et al., <em>NEJM</em>, 2021; NCT03548935)
            randomised 1,961 adults with overweight or obesity, without
            diabetes, to semaglutide 2.4mg or placebo for 68 weeks. Mean body
            weight change was -14.9% with semaglutide versus -2.4% with
            placebo. STEP 2 tested the same dose in adults with type 2
            diabetes (-9.6%). STEP 3 added intensive behavioural therapy
            (-16.0%). STEP 5 extended treatment to 104 weeks and reported
            sustained reductions of around -15.2%.
          </p>
          <p>
            The SELECT trial (Lincoff et al., <em>NEJM</em>, 2023) is the
            piece of the semaglutide evidence base that tirzepatide cannot yet
            match. Across 17,604 adults with established cardiovascular
            disease and overweight or obesity (without diabetes), semaglutide
            2.4mg produced a 20% relative risk reduction in the composite
            endpoint of cardiovascular death, non-fatal myocardial infarction,
            or non-fatal stroke over a median 40 months. SELECT changed how
            the GLP-1 class is positioned in cardiology and remains the
            clearest outcomes evidence in the weight-management space.
          </p>

          <h3>SURMOUNT-1 and the tirzepatide obesity programme</h3>
          <p>
            SURMOUNT-1 (Jastreboff et al., <em>NEJM</em>, 2022; NCT04184622)
            randomised 2,539 adults with obesity to tirzepatide 5mg, 10mg,
            15mg, or placebo for 72 weeks. The 15mg dose produced -22.5%
            body weight reduction versus -2.4% with placebo. SURMOUNT-2
            tested tirzepatide in adults with obesity and type 2 diabetes
            (-15.7% at 15mg). SURMOUNT-3 layered on intensive lifestyle
            therapy and pushed weight loss to roughly 26% combined. SURMOUNT-4
            tested withdrawal: stopping tirzepatide led to substantial weight
            regain over the following year, mirroring the STEP 4 finding
            with semaglutide.
          </p>
          <p>
            Tirzepatide's cardiovascular outcomes data is still pending.
            SURPASS-CVOT, the dedicated trial in adults with type 2 diabetes
            and high cardiovascular risk, is expected to read out in 2026 or
            2027. Until then, semaglutide holds the only published outcomes
            advantage in the comparison.
          </p>

          <h2 id="dosing">Practical breakdown: dosing, administration, tolerability</h2>

          <p>
            Both drugs are once-weekly subcutaneous injections, both require
            stepwise titration to manage gastrointestinal side effects, and
            both come in prefilled pen devices. The titration schedules
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

          <h3>Tirzepatide titration (Zepbound)</h3>
          <ul>
            <li>Weeks 1 to 4: 2.5mg weekly</li>
            <li>Weeks 5 to 8: 5mg weekly</li>
            <li>Weeks 9 to 12: 7.5mg weekly</li>
            <li>Weeks 13 to 16: 10mg weekly</li>
            <li>Weeks 17 to 20: 12.5mg weekly</li>
            <li>Week 21 onward: 15mg weekly (maximum maintenance)</li>
          </ul>

          <p>
            Tirzepatide's full titration is 20 weeks against semaglutide's 16,
            because there are more dose steps and the maintenance ceiling is
            higher. In practice, many tirzepatide patients hold at 5mg, 10mg,
            or 12.5mg rather than pushing to 15mg, particularly if weight
            loss is on track and side effects are manageable. Semaglutide
            patients have one maintenance dose (2.4mg) to aim for, which
            simplifies the back end of the titration.
          </p>

          <p>
            Common adverse events in SURMOUNT-5 were broadly similar between
            the arms at class-typical rates: nausea (44.0% tirzepatide vs
            50.0% semaglutide), diarrhea (24.7% vs 20.4%), vomiting (20.7%
            vs 21.1%), and constipation (21.6% vs 17.6%). Nausea was actually
            slightly less common on tirzepatide than semaglutide, which
            surprised some clinicians. Discontinuation due to adverse events
            was 6.1% on tirzepatide and 8.0% on semaglutide. Neither drug
            produced a novel safety signal in this trial.
          </p>

          <p>
            Two practical notes worth flagging. First, slower titration
            consistently improves tolerability for both drugs. Clinicians
            often extend each step by an extra two to four weeks for patients
            sensitive to nausea, particularly during the first 8 weeks.
            Second, tirzepatide's maintenance dose is a clinical decision
            rather than a fixed protocol. The 5mg, 10mg, and 12.5mg doses are
            all approved for chronic use, and the tradeoff between extra
            weight loss at higher doses and worsening side effects is real.
            Semaglutide does not offer that flexibility because 2.4mg is the
            only approved obesity maintenance dose.
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
                    Semaglutide
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
                  ["Mechanism", "GLP-1 single agonist", "GLP-1 + GIP dual agonist"],
                  ["Head-to-head (SURMOUNT-5, 72wk)", "-13.7%", "-20.2%"],
                  ["Foundational obesity trial", "-14.9% (STEP 1, 2.4mg, 68wk)", "-22.5% (SURMOUNT-1, 15mg, 72wk)"],
                  ["Manufacturer", "Novo Nordisk", "Eli Lilly"],
                  ["Brand names", "Wegovy (obesity), Ozempic (diabetes)", "Zepbound (obesity), Mounjaro (diabetes)"],
                  ["Approval (obesity)", "June 2021", "November 2023"],
                  ["Maintenance dose", "2.4mg weekly", "5mg, 10mg, 12.5mg, or 15mg weekly"],
                  ["Discontinuation in SURMOUNT-5", "8.0%", "6.1%"],
                  ["Cardiovascular outcomes data", "SELECT: 20% MACE reduction", "Pending (SURPASS-CVOT)"],
                  ["US list price", "~$1,350/month", "~$1,060/month"],
                  ["Half-life", "~7 days", "~5 days"],
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

          <h2 id="context">How to think about the choice</h2>

          <p>
            For a patient with no cardiovascular history and a primary goal
            of weight loss, the SURMOUNT-5 data points clearly toward
            tirzepatide. A 6.5 percentage point advantage is clinically
            meaningful: at a baseline weight of 100 kg, that's 6.5 additional
            kilograms over 72 weeks, with similar tolerability and a slightly
            lower discontinuation rate. Tirzepatide also costs roughly $290
            per month less at US list prices.
          </p>

          <p>
            For a patient with established cardiovascular disease, the
            calculation flips. SELECT showed semaglutide reduces major
            adverse cardiovascular events by 20% in this population. No
            equivalent outcomes data exists for tirzepatide yet. SURPASS-CVOT
            is expected to report in 2026 or 2027. Until that readout lands,
            cardiologists prescribing for cardiovascular protection will
            generally default to semaglutide. The weight-loss gap is real,
            but a documented MACE reduction in a 17,604-patient outcomes
            trial is currently the stronger evidence base for the relevant
            endpoint.
          </p>

          <p>
            For a patient with type 2 diabetes, both drugs have strong
            indications. Semaglutide's SUSTAIN trials and tirzepatide's
            SURPASS trials both produced large A1C reductions, with
            tirzepatide showing modestly larger glucose lowering at top
            doses (SURPASS-2 was the head-to-head in diabetes, where
            tirzepatide outperformed semaglutide 1mg). The choice in
            diabetes usually comes down to insurance coverage, prescribing
            habit, and patient tolerability rather than a clear efficacy
            signal.
          </p>

          <p>
            Cost and availability are the unglamorous part of the decision.
            Wegovy lists at around $1,350 per month, Zepbound at around
            $1,060. Manufacturer savings cards bring out-of-pocket costs
            substantially lower for commercially insured patients, often to
            $25 or $0 per month with eligible plans. Medicare does not cover
            either drug for obesity. Both manufacturers experienced supply
            shortages in 2023 and 2024 that allowed widespread compounding;
            the FDA designated semaglutide as resolved in late 2024 and
            tirzepatide in early 2025, ending the legal basis for routine
            503A compounding of either compound.
          </p>

          <p>
            The longer-term context is that this comparison is unlikely to
            stay static. Retatrutide's TRIUMPH-4 readout (28.7% at 12mg / 68
            weeks) suggests the next tier of weight-loss efficacy is on the
            way, with retatrutide adding a third receptor (glucagon) on top
            of GLP-1 and GIP. Our{" "}
            <Link href="/glp-1/triple-vs-dual-agonism">
              triple vs dual agonism file
            </Link>{" "}
            covers the receptor progression in detail. The{" "}
            <Link href="/glp-1/comparison-chart-2026">
              GLP-1 comparison chart 2026
            </Link>{" "}
            puts every approved and late-stage compound on the same axes.
          </p>

          <h2 id="faq">Frequently Asked Questions</h2>

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
              Semaglutide and tirzepatide are prescription medications in all
              jurisdictions where they are approved, and should only be used
              under the supervision of a qualified healthcare provider. Trial
              data referenced in this article reflects published findings in
              specific study populations and may not generalise to every
              patient. Always consult a qualified healthcare provider before
              starting, stopping, or changing any medication. Product being
              sold as either compound outside of regulated pharmacy channels
              is unverified and should be approached with caution.
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--ink3)",
                fontWeight: 300,
                fontStyle: "italic",
                margin: "10px 0 0 0",
              }}
            >
              Last updated: May 2026.
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
                ["context", "How to think about the choice"],
                ["faq", "Frequently Asked Questions"],
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
                ["/glp-1", "The GLP-1 File"],
                ["/glp-1/how-glp-1-agonists-work", "How GLP-1 Agonists Work"],
                ["/glp-1/comparison-chart-2026", "Comparison Chart 2026"],
                ["/glp-1/natural-boosters", "Natural GLP-1 Boosters"],
                ["/glp-1/vs-gip", "GLP-1 vs GIP"],
                ["/glp-1/triple-vs-dual-agonism", "Triple vs Dual Agonism"],
                ["/glp-1/safety-profile", "GLP-1 Safety Profile"],
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
