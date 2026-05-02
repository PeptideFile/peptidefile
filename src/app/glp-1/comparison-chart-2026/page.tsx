import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "GLP-1 Comparison Chart 2026: Every Approved & Investigational Drug | Peptide File",
  description:
    "Side-by-side GLP-1 comparison: liraglutide, semaglutide, tirzepatide, retatrutide. Phase III weight loss, half-life, dosing, US list price. Updated May 2026.",
  alternates: {
    canonical: "https://peptidefile.com/glp-1/comparison-chart-2026",
  },
  openGraph: {
    title: "GLP-1 Comparison Chart 2026: Every Approved & Investigational Drug",
    description:
      "Side-by-side GLP-1 comparison: liraglutide, semaglutide, tirzepatide, retatrutide. Phase III weight loss, half-life, dosing, US list price. Updated May 2026.",
    url: "https://peptidefile.com/glp-1/comparison-chart-2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLP-1 Comparison Chart 2026: Every Approved & Investigational Drug",
    description:
      "Side-by-side GLP-1 comparison: liraglutide, semaglutide, tirzepatide, retatrutide. Phase III weight loss, half-life, dosing, US list price. Updated May 2026.",
  },
};

const faqs = [
  {
    q: "Which GLP-1 drug produces the most weight loss in 2026?",
    a: "Retatrutide produces the most weight loss in head-to-head trial comparisons, but it is not yet FDA-approved. TRIUMPH-4 reported 28.7% mean weight loss at 12mg over 68 weeks, with NDA submission expected in late 2026 and approval likely in 2027 or 2028. Of currently-approved drugs, tirzepatide (Zepbound) leads at 22.5% from SURMOUNT-1 over 72 weeks. Semaglutide (Wegovy) follows at 14.9% from STEP 1 over 68 weeks. Liraglutide (Saxenda) trails at 8.0% from SCALE over 56 weeks.",
  },
  {
    q: "How does tirzepatide compare to semaglutide head-to-head?",
    a: "SURMOUNT-5 (Aronne et al., NEJM, 2025) directly compared the two compounds at their highest approved weight-loss doses over 72 weeks. Tirzepatide produced 20.2% mean weight loss versus 13.7% for semaglutide. The difference is approximately 6.5 percentage points, consistent with the gap predicted by SURMOUNT-1 and STEP 1 individually. Tirzepatide's added GIP receptor activity is the likely explanation, though direct mechanistic attribution remains debated.",
  },
  {
    q: "What is the difference in receptor coverage across the class?",
    a: "Liraglutide and semaglutide bind only the GLP-1 receptor. Tirzepatide binds GLP-1 and GIP, making it a dual agonist. Retatrutide binds GLP-1, GIP, and glucagon, making it the first triple agonist in late-stage trials. Each receptor added in the sequence has produced approximately 5 to 7 percentage points of additional weight loss in Phase III trials, suggesting the mechanisms combine additively rather than compete.",
  },
  {
    q: "How long do these drugs stay in the body?",
    a: "Half-lives range from 13 hours for liraglutide (daily dosing) to roughly seven days for semaglutide (weekly dosing). Tirzepatide and retatrutide both sit at around five to six days. Native GLP-1 has a half-life of approximately two minutes, which is why every drug version is engineered with structural modifications (typically a fatty acid chain that binds serum albumin) to resist enzymatic breakdown by DPP-4.",
  },
  {
    q: "What does each GLP-1 drug cost in the US?",
    a: "Without insurance, US list prices in 2026 are roughly $1,350 per month for Wegovy (semaglutide for weight loss), $1,060 per month for Zepbound (tirzepatide for weight loss), $1,000 per month for Ozempic (semaglutide for diabetes), and $1,070 per month for Mounjaro (tirzepatide for diabetes). Compounded versions are no longer legally available through 503A pharmacies. The FDA designated semaglutide and tirzepatide as resolved shortages in late 2024 and early 2025, ending the legal basis for routine compounding.",
  },
  {
    q: "Is real-world weight loss the same as trial weight loss?",
    a: "No. Real-world weight loss across the GLP-1 class typically runs at roughly 60 to 75% of trial figures. Trial participants receive structured lifestyle support, monthly check-ins, and free medication. Real-world patients deal with insurance gaps, missed doses, slower titration, and inconsistent adherence. A trial figure of 22.5% should be set against a real-world expectation closer to 14 to 17%.",
  },
  {
    q: "Which GLP-1 drug has the best safety profile?",
    a: "Semaglutide and tirzepatide both have well-characterised long-term safety records based on years of post-approval data and large outcome trials such as SELECT (semaglutide, 17,604 patients). Retatrutide introduced a new safety signal in TRIUMPH-4: dysesthesia in 20.9% of participants at 12mg versus 0.7% on placebo, not seen in GLP-1-only or GLP-1+GIP compounds. Liraglutide has the longest track record overall (approved 2010) but produces the smallest weight loss. For full discussion of class-wide safety patterns see the GLP-1 Safety Profile.",
  },
  {
    q: "Are oral GLP-1 alternatives competitive with injectable versions?",
    a: "Oral semaglutide (Rybelsus) is approved for type 2 diabetes but not for weight loss. The oral formulation requires fasting administration and absorption is limited, restricting practical dosing. Orforglipron, an investigational small-molecule GLP-1 agonist from Eli Lilly, is in Phase III trials and would not require the absorption-enhancer technology of oral semaglutide. Phase II data showed weight loss in the 9 to 15% range. Approval is expected in 2026 or 2027 if Phase III readouts continue the trend.",
  },
];

export default function GLP1ComparisonChart2026Page() {
  const article = articleSchema({
    headline: "GLP-1 Comparison Chart 2026: Every Approved & Investigational Drug",
    description:
      "Side-by-side GLP-1 comparison: liraglutide, semaglutide, tirzepatide, retatrutide. Phase III weight loss, half-life, dosing, US list price. Updated May 2026.",
    datePublished: "2026-05-02",
    dateModified: "2026-05-02",
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
    image: "https://peptidefile.com/og-glp-1-comparison-chart-2026.png",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "GLP-1", item: "https://peptidefile.com/glp-1" },
    {
      name: "GLP-1 Comparison Chart 2026",
      item: "https://peptidefile.com/glp-1/comparison-chart-2026",
    },
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
          <span>GLP-1 File</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Comparison</span>
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
          GLP-1 Comparison Chart 2026: Every Approved & Investigational Drug
        </h1>

        <p className="page-intro">
          Four compounds dominate the GLP-1 landscape in May 2026. Liraglutide
          produces 8.0% weight loss. Semaglutide reaches 14.9%. Tirzepatide hits
          22.5%. Retatrutide, still investigational, has reported 28.7%. Each
          step in the sequence reflects either added receptor coverage or
          improved dosing kinetics. This chart compares all four side by side
          on efficacy, dosing, half-life, mechanism, and US list price.
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
          <span>~2,000 words</span>
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
            { stat: "8.0%", label: "Liraglutide / SCALE / 56 wk" },
            { stat: "14.9%", label: "Semaglutide / STEP 1 / 68 wk" },
            { stat: "22.5%", label: "Tirzepatide / SURMOUNT-1 / 72 wk" },
            { stat: "28.7%", label: "Retatrutide / TRIUMPH-4 / 68 wk" },
            { stat: "20.2%", label: "Tirzepatide vs sema (head-to-head)" },
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
              <div className="mono-label" style={{ fontSize: "10px", lineHeight: 1.4 }}>
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
        <article className="prose">
          {/* INTRO */}
          <section style={{ marginBottom: 80 }}>
            <p>
              The GLP-1 class has moved further in five years than weight-loss
              pharmacotherapy moved in the previous fifty. Liraglutide hit the
              market in 2010 with single-digit weight loss. Wegovy doubled that
              in 2021. Zepbound roughly tripled it in 2023. Retatrutide, in
              Phase III as of May 2026, has reported a fourth scale-up. The
              sequence is not random. Each step adds either a receptor or a
              kinetic improvement that the previous generation lacked.
            </p>
            <p>
              This article compares every GLP-1 drug currently relevant to
              clinical practice on the variables that matter: how much weight
              they produce, how often they are dosed, how long they last in
              circulation, what receptors they bind, and what they cost. The
              data is drawn from published Phase III trials and current US
              list prices as of May 2026. For the underlying mechanism see{" "}
              <Link href="/glp-1/how-glp-1-agonists-work">
                How GLP-1 Agonists Work
              </Link>
              . For the head-to-head between the two top approved compounds
              see{" "}
              <Link href="/glp-1/semaglutide-vs-tirzepatide">
                Semaglutide vs Tirzepatide
              </Link>
              .
            </p>
            <p>
              One caveat applies to every figure that follows. Trial weight
              loss is not real-world weight loss. Trial participants receive
              structured lifestyle support and free medication. Real-world
              patients usually do not. The class-wide rule is that real-world
              weight loss runs at roughly 60 to 75% of trial figures. A 22.5%
              trial result corresponds to roughly 14 to 17% in clinical use.
              Read every number in this chart with that adjustment in mind.
            </p>
          </section>

          {/* THE CLASS OVERVIEW */}
          <section id="class-overview" style={{ marginBottom: 80 }}>
            <h2>The four compounds that matter in 2026</h2>
            <p>
              Five GLP-1 receptor agonists have been approved by the FDA, but
              only four are clinically relevant for weight management in 2026.
              Exenatide (Byetta, approved 2005) is still available for type 2
              diabetes but has been functionally replaced by longer-acting
              compounds. Dulaglutide (Trulicity, approved 2014) remains a
              diabetes drug only and was never developed for weight-loss
              indications. The four that matter for weight management are
              liraglutide, semaglutide, tirzepatide, and the investigational
              retatrutide.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0" }}>
              {[
                {
                  label: "Liraglutide (Saxenda)",
                  text: "First GLP-1 acylated for albumin binding. Approved by Novo Nordisk in 2014 for weight loss at 3.0mg daily. Daily subcutaneous injection. Half-life ~13 hours. SCALE trial reported 8.0% mean weight loss over 56 weeks. Now largely displaced by semaglutide but remains the only daily-dose option.",
                },
                {
                  label: "Semaglutide (Wegovy)",
                  text: "First once-weekly GLP-1 for weight loss. Approved June 2021 at 2.4mg weekly. STEP 1 reported 14.9% mean weight loss over 68 weeks. Half-life ~7 days. Backed by SELECT cardiovascular outcome data showing 20% MACE reduction in 17,604 patients with established CVD.",
                },
                {
                  label: "Tirzepatide (Zepbound)",
                  text: "First dual GLP-1 + GIP agonist approved for weight loss. Approved November 2023 at doses up to 15mg weekly. SURMOUNT-1 reported 22.5% mean weight loss over 72 weeks. Half-life ~5 days. SURMOUNT-5 showed superior weight loss versus semaglutide in direct head-to-head comparison.",
                },
                {
                  label: "Retatrutide (LY3437943, investigational)",
                  text: "First triple GLP-1 + GIP + glucagon agonist in Phase III. TRIUMPH-4 reported 28.7% mean weight loss at 12mg over 68 weeks. Half-life ~6 days. NDA submission expected late 2026, approval likely 2027 or 2028. Introduces a new dysesthesia signal not seen in earlier compounds.",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  style={{ padding: "14px 0", borderBottom: "1px solid var(--rule)", marginBottom: 0 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--ink3)",
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75 }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <p>
              A handful of investigational compounds sit one step behind
              retatrutide. Orforglipron (Eli Lilly) is an oral small-molecule
              GLP-1 agonist in Phase III with Phase II weight loss in the 9 to
              15% range. Mazdutide (Innovent) is a dual GLP-1 + glucagon
              agonist also in Phase III, primarily targeting the Chinese
              market. Survodutide (Boehringer Ingelheim / Zealand) is another
              dual GLP-1 + glucagon agonist in Phase III. None have reported
              full Phase III readouts at the time of publication.
            </p>
          </section>

          {/* MASTER COMPARISON TABLE */}
          <section id="comparison-table" style={{ marginBottom: 80 }}>
            <h2>The full comparison chart</h2>
            <p>
              The table below summarises the four clinically-relevant GLP-1
              drugs on every variable that affects prescribing decisions in
              2026. All figures are taken from published Phase III trials.
              Prices are US list prices without insurance, expressed per
              28-day supply.
            </p>

            <div style={{ overflowX: "auto", margin: "24px 0", border: "1px solid var(--rule)" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "var(--serif)",
                  fontSize: 15,
                }}
              >
                <thead>
                  <tr style={{ background: "var(--paper2)" }}>
                    {[
                      "Compound",
                      "Brand",
                      "Receptors",
                      "Top dose",
                      "Trial loss",
                      "Half-life",
                      "Dosing",
                      "List price",
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
                          color: "var(--ink3)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Liraglutide", "Saxenda", "GLP-1", "3.0mg", "8.0%", "~13 hr", "Daily SC", "~$1,350"],
                    ["Semaglutide", "Wegovy", "GLP-1", "2.4mg", "14.9%", "~7 days", "Weekly SC", "~$1,350"],
                    ["Tirzepatide", "Zepbound", "GLP-1 + GIP", "15mg", "22.5%", "~5 days", "Weekly SC", "~$1,060"],
                    ["Retatrutide", "Pending", "GLP-1 + GIP + Glucagon", "12mg", "28.7%", "~6 days", "Weekly SC", "TBD"],
                  ].map((row, ri) => (
                    <tr
                      key={ri}
                      style={{
                        borderBottom: ri < 3 ? "1px solid var(--rule)" : "none",
                        background: ri % 2 === 0 ? "var(--paper)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontSize: "13px", color: "var(--ink)" }}>
                        {row[0]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
                        {row[1]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
                        {row[2]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
                        {row[3]}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "var(--serif)",
                          fontSize: "16px",
                          color: row[0] === "Retatrutide" ? "var(--accent)" : "var(--ink)",
                          fontWeight: row[0] === "Retatrutide" ? 500 : 400,
                        }}
                      >
                        {row[4]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
                        {row[5]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
                        {row[6]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink3)", fontWeight: 300, fontSize: "13px" }}>
                        {row[7]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Every approved compound is administered subcutaneously. Oral
              semaglutide (Rybelsus) exists but is approved for type 2
              diabetes only, not weight loss. Investigational orforglipron is
              the first realistic oral candidate for weight management, with
              Phase III readouts expected in 2026.
            </p>
          </section>

          {/* EFFICACY RANKING */}
          <section id="efficacy-ranking" style={{ marginBottom: 80 }}>
            <h2>How efficacy stacks up</h2>
            <p>
              The single clearest pattern in the data is that adding receptors
              adds weight loss. Liraglutide and semaglutide both bind only
              GLP-1, but semaglutide produces nearly double the weight loss
              because of its longer half-life and higher labelled dose.
              Tirzepatide adds GIP and gains roughly 7 percentage points over
              semaglutide. Retatrutide adds glucagon and gains roughly 6
              percentage points over tirzepatide. The pattern is consistent.
            </p>
            <p>
              The only direct head-to-head comparison published to date is
              SURMOUNT-5 (Aronne et al., NEJM, 2025), which compared
              tirzepatide and semaglutide at their highest approved
              weight-loss doses over 72 weeks. Tirzepatide produced 20.2%
              weight loss versus 13.7% for semaglutide. The 6.5-point gap is
              consistent with what would be predicted by comparing SURMOUNT-1
              and STEP 1 separately. The trial confirmed that the Phase III
              hierarchy holds up under controlled head-to-head conditions.
            </p>

            <div
              style={{
                margin: "32px 0",
                padding: "20px 24px",
                backgroundColor: "var(--paper2)",
                borderLeft: "3px solid #e8a020",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--ink3)",
                  marginBottom: 8,
                }}
              >
                Clinical note
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "var(--ink2)",
                }}
              >
                No head-to-head trial of retatrutide versus tirzepatide has
                been published. The 28.7% versus 22.5% comparison comes from
                separate Phase III programs (TRIUMPH-4 and SURMOUNT-1) with
                different patient populations, durations, and trial designs.
                The gap is large enough to suggest a real efficacy advantage,
                but it should not be treated with the same weight as a
                head-to-head readout would carry.
              </div>
            </div>

            <p>
              Retatrutide also reported a clear dose-response in TRIUMPH-4.
              The 9mg arm produced 26.4% weight loss versus 28.7% at 12mg, a
              modest but consistent increment. Discontinuation rates rose from
              12.2% at 9mg to 18.2% at 12mg, primarily driven by the new
              dysesthesia signal at the higher dose. This is the first
              compound in the class where dose escalation past a certain
              point appears to trade safety for efficacy in a meaningful way.
              For the underlying mechanism see{" "}
              <Link href="/glp-1/triple-vs-dual-agonism">
                Triple vs Dual Agonism
              </Link>
              .
            </p>
          </section>

          {/* DOSING & ADMINISTRATION */}
          <section id="dosing-administration" style={{ marginBottom: 80 }}>
            <h2>Dosing, titration, and administration</h2>
            <p>
              Every GLP-1 agonist requires titration. Starting at the
              labelled top dose causes severe nausea and frequent
              discontinuation. The standard approach is to start at the
              lowest dose and step up every four weeks until the maintenance
              dose is reached. This typically takes 16 to 20 weeks before a
              patient is on full therapeutic dosing.
            </p>
            <p>
              Liraglutide is the only daily injection, starting at 0.6mg and
              titrating in 0.6mg increments to 3.0mg over five weeks.
              Semaglutide starts at 0.25mg weekly and steps up to 2.4mg over
              16 weeks. Tirzepatide starts at 2.5mg weekly and steps up to
              15mg over 20 weeks. Retatrutide's titration in TRIUMPH-4
              started at 2mg weekly and reached 12mg over 16 to 20 weeks
              depending on tolerability.
            </p>
            <p>
              All four are administered using prefilled subcutaneous
              auto-injectors into the abdomen, thigh, or upper arm. Injection
              site rotation is recommended to reduce local irritation. None
              require refrigeration once in use, though they should be stored
              cold before first use. Storage requirements are similar across
              brands.
            </p>
          </section>

          {/* COST & ACCESS */}
          <section id="cost-access" style={{ marginBottom: 80 }}>
            <h2>Cost, insurance, and access</h2>
            <p>
              US list prices in 2026 sit between roughly $1,000 and $1,350
              per 28-day supply. Wegovy lists at approximately $1,350 per
              month. Zepbound lists at approximately $1,060 per month.
              Saxenda is comparable to Wegovy in pricing. The diabetes
              indications (Ozempic and Mounjaro) sit slightly lower at
              roughly $1,000 to $1,070 per month, though the difference is
              partly explained by older negotiated rates. Retatrutide pricing
              has not been disclosed.
            </p>
            <p>
              Insurance coverage for weight-loss indications remains
              inconsistent. Most US commercial plans cover at least one
              GLP-1 for type 2 diabetes. Coverage for obesity treatment is
              less universal, with prior authorisation requirements,
              step-therapy protocols, and BMI cutoffs varying widely across
              plans. Medicare expanded coverage of GLP-1s for cardiovascular
              indications in 2025 following the SELECT trial readout, but
              standalone obesity coverage remains limited.
            </p>
            <p>
              Compounded GLP-1s are no longer a routine option. The FDA
              designated semaglutide and tirzepatide as resolved shortages in
              late 2024 and early 2025, ending the legal basis for routine
              503A pharmacy compounding under FDCA section 503A. Personalised
              503A compounding for individual clinical need still exists in a
              limited form but is not a meaningful price-substitute pathway.
              Patients seeking lower-cost access are now generally limited to
              manufacturer savings programs, Canadian or Mexican pharmacy
              imports (legally complex), or waiting for orforglipron approval
              if oral pricing follows historical patterns.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: "80px" }}>
            <h2>Frequently Asked Questions</h2>
            <div style={{ margin: "16px 0" }}>
              {faqs.map((item, i) => (
                <details
                  key={i}
                  style={{ borderBottom: "1px solid var(--rule)", padding: "16px 0" }}
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
                    {item.q}
                  </summary>
                  <p style={{ marginTop: "12px", marginBottom: 0 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* MEDICAL DISCLAIMER */}
          <div
            style={{
              padding: "24px 28px",
              background: "var(--paper2)",
              border: "1px solid var(--rule)",
              borderLeft: "3px solid var(--accent)",
            }}
          >
            <div className="mono-label" style={{ marginBottom: "8px", color: "var(--accent)" }}>
              Medical Disclaimer
            </div>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6 }}>
              This article is for informational and educational purposes only and does not constitute medical advice. GLP-1 agonists are prescription medications with a range of indications, contraindications, and side effects. Pricing and access information is based on publicly available US list prices as of May 2026 and may not reflect insurance coverage, manufacturer rebates, or out-of-pocket cost. Retatrutide is investigational and has not been approved by the FDA, EMA, MHRA, or any other regulatory agency as of May 2026. Consult a licensed healthcare provider before starting, stopping, or changing any medication.
            </p>
            <p style={{ fontSize: "11px", color: "var(--ink3)", fontWeight: 300, fontStyle: "italic", margin: "10px 0 0 0" }}>
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
            <div className="mono-label" style={{ marginBottom: "12px", fontSize: "10px" }}>
              On this page
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href="#class-overview"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                The four compounds
              </a>
              <a
                href="#comparison-table"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Full comparison chart
              </a>
              <a
                href="#efficacy-ranking"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Efficacy ranking
              </a>
              <a
                href="#dosing-administration"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Dosing & administration
              </a>
              <a
                href="#cost-access"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Cost & access
              </a>
              <a
                href="#faq"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Frequently asked questions
              </a>
            </nav>
          </div>

          <div>
            <div className="mono-label" style={{ marginBottom: "12px", fontSize: "10px" }}>
              Related files
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link
                href="/glp-1"
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
                The GLP-1 File
              </Link>
              <Link
                href="/glp-1/how-glp-1-agonists-work"
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
                How GLP-1 Agonists Work
              </Link>
              <Link
                href="/glp-1/natural-boosters"
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
                Natural GLP-1 Boosters
              </Link>
              <Link
                href="/glp-1/vs-gip"
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
                GLP-1 vs GIP
              </Link>
              <Link
                href="/glp-1/triple-vs-dual-agonism"
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
                Triple vs Dual Agonism
              </Link>
              <Link
                href="/glp-1/semaglutide-vs-tirzepatide"
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
                Semaglutide vs Tirzepatide
              </Link>
              <Link
                href="/glp-1/safety-profile"
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
                GLP-1 Safety Profile
              </Link>
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
              New trial readouts, mechanism breakdowns, and FDA updates. One email per week. No filler.
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
