import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "The Retatrutide File — Complete Phase III Evidence Review | Peptide File",
  description:
    "Retatrutide: 28.7% weight loss at 12mg in Phase III (TRIUMPH-4). Mechanism, trial data, side effects, dosage, and FDA timeline. Evidence-rated review.",
  alternates: { canonical: "https://peptidefile.com/retatrutide" },
  openGraph: {
    title: "The Retatrutide File — Complete Phase III Evidence Review",
    description:
      "Phase III TRIUMPH data, 28.7% weight loss, 86% liver fat reduction, dysesthesia, and FDA timeline. Everything we know about retatrutide.",
    url: "https://peptidefile.com/retatrutide",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Retatrutide File — Complete Phase III Evidence Review",
    description:
      "Phase III TRIUMPH data, 28.7% weight loss, 86% liver fat reduction, dysesthesia, and FDA timeline. Everything we know about retatrutide.",
  },
};

const tocSections = [
  { id: "what-is-retatrutide", label: "What Is Retatrutide?" },
  { id: "mechanism", label: "How It Works" },
  { id: "triumph-trials", label: "The TRIUMPH Trials" },
  { id: "weight-loss-data", label: "Weight Loss Data" },
  { id: "liver-fat", label: "Liver Fat & Metabolic Effects" },
  { id: "side-effects", label: "Side Effects & Safety" },
  { id: "comparison", label: "vs Semaglutide & Tirzepatide" },
  { id: "dosage", label: "Dosage & Administration" },
  { id: "fda-timeline", label: "FDA Timeline" },
  { id: "who-qualifies", label: "Who Will Qualify?" },
  { id: "unknowns", label: "What We Don't Know Yet" },
  { id: "faq", label: "FAQ" },
];

const clusterLinks = [
  { href: "/retatrutide/how-it-works", label: "How It Works" },
  { href: "/retatrutide/vs-semaglutide", label: "vs Semaglutide" },
  { href: "/retatrutide/vs-tirzepatide", label: "vs Tirzepatide" },
  { href: "/retatrutide/clinical-trial-results", label: "Trial Results" },
  { href: "/retatrutide/side-effects", label: "Side Effects" },
  { href: "/retatrutide/dosage", label: "Dosage Guide" },
  { href: "/retatrutide/fda-approval", label: "FDA Approval" },
  { href: "/retatrutide/weight-loss-projections", label: "Weight Loss Projections" },
];

const keyStats = [
  { stat: "28.7%", label: "Weight loss at 12mg, 68 weeks" },
  { stat: "7", label: "Phase III TRIUMPH trials" },
  { stat: "5,800+", label: "Participants enrolled" },
  { stat: "2027+", label: "NDA expected year" },
  { stat: "Triple", label: "GLP-1 / GIP / Glucagon agonist" },
  { stat: "Lilly", label: "Developer (Eli Lilly)" },
  { stat: "86%", label: "Liver fat reduction, Phase II" },
  { stat: "20.9%", label: "Dysesthesia rate at 12mg" },
];

const dosageRows = [
  ["Placebo", "~2%", "—"],
  ["4mg weekly", "~17.5%", "~15.5 pp vs placebo"],
  ["8mg weekly", "~22.8%", "~20.8 pp vs placebo"],
  ["12mg weekly", "28.7%", "~26.7 pp vs placebo"],
];

const responderRows = [
  ["≥5% body weight reduction", "~95% of participants"],
  ["≥10% body weight reduction", "~90% of participants"],
  ["≥15% body weight reduction", "~85% of participants"],
  ["≥20% body weight reduction", "~75% of participants"],
  ["≥25% body weight reduction", "~55% of participants"],
];

const comparisonRows = [
  ["Brand", "Wegovy / Ozempic", "Zepbound / Mounjaro", "Investigational"],
  ["Mechanism", "GLP-1 agonist", "GLP-1 / GIP dual", "GLP-1 / GIP / Glucagon"],
  ["Mean weight loss", "~15% (STEP 1)", "~21–22% (SURMOUNT-1)", "28.7% (TRIUMPH-4)"],
  ["Liver fat reduction", "Moderate — indirect", "Meaningful — indirect", "86% — direct (Phase 2)"],
  ["Dysesthesia", "Not reported", "Not reported", "20.9% at 12mg"],
  ["FDA status", "Approved", "Approved", "Phase III — NDA 2026/27"],
];

const faqs = [
  {
    q: "Is retatrutide FDA approved?",
    a: "No. As of April 2026, retatrutide is an investigational drug in Phase III clinical trials. It has not been approved by the FDA, EMA, or any other regulatory authority. Eli Lilly expects to submit an NDA in late 2026 or early 2027.",
  },
  {
    q: "How does retatrutide compare to Ozempic and Wegovy (semaglutide)?",
    a: "Retatrutide significantly outperforms semaglutide on weight loss: 28.7% mean body weight reduction at 12mg over 68 weeks versus approximately 15% for semaglutide 2.4mg (Wegovy) over the same duration. The mechanism is also distinct: semaglutide is a GLP-1 single agonist; retatrutide adds GIP and glucagon receptor agonism. Retatrutide also produces substantially greater liver fat reduction through a direct hepatic mechanism not present in semaglutide.",
  },
  {
    q: "What is dysesthesia and why does retatrutide cause it?",
    a: "Dysesthesia refers to abnormal skin sensations (tingling, burning, numbness, or crawling feelings) typically in the extremities. In TRIUMPH-4, it was reported by approximately 20.9% of participants at 12mg. The leading hypothesis is that glucagon receptors are expressed in peripheral sensory neurons, and that sustained glucagon receptor agonism alters sensory neuron excitability. This is not a signal of nerve damage. In TRIUMPH-4, dysesthesia was predominantly mild to moderate and occurred most frequently during dose escalation.",
  },
  {
    q: "When will retatrutide be available?",
    a: "Based on Eli Lilly's NDA submission timeline (expected late 2026 / early 2027) and standard FDA review periods (10 months standard, 6 months for priority review), commercial availability could begin in late 2027. This is an estimate based on available public information and could shift in either direction.",
  },
  {
    q: "Is retatrutide the same as tirzepatide (Mounjaro/Zepbound)?",
    a: "No. Both are developed by Eli Lilly but are distinct molecules. Tirzepatide is a GLP-1/GIP dual agonist. Retatrutide is a GLP-1/GIP/Glucagon triple agonist. It activates an additional receptor pathway that tirzepatide does not. This is the primary mechanistic basis for retatrutide's superior weight loss numbers and its direct liver fat-reducing effect.",
  },
  {
    q: "What dose produced the 28.7% weight loss result?",
    a: "The 12mg once-weekly dose in TRIUMPH-4 over 68 weeks in 445 participants with obesity but without type 2 diabetes. The trial also studied 4mg (~17.5% weight loss) and 8mg (~22.8% weight loss). All three active doses significantly outperformed placebo (~2%).",
  },
  {
    q: "What is the TRIUMPH trial programme?",
    a: "TRIUMPH is the Phase III development programme for retatrutide, comprising seven trials across five indications: obesity without T2D (TRIUMPH-4, pivotal), obesity with T2D (TRIUMPH-1, 5), extended T2D evaluation (TRIUMPH-2), cardiovascular outcomes in established CVD (TRIUMPH-3, ongoing), metabolic liver disease/MASH (TRIUMPH-6), and obstructive sleep apnoea (TRIUMPH-7). Over 5,800 participants are enrolled across the programme.",
  },
  {
    q: "Will retatrutide be covered by insurance?",
    a: "Unknown. Insurance coverage for GLP-1 drugs in the obesity indication has been inconsistent across US commercial payers. Coverage decisions will depend on retatrutide's commercial pricing, formulary negotiations, and label-based access criteria. The situation for existing GLP-1 obesity drugs remains challenging and retatrutide will face the same structural barriers post-approval.",
  },
];

const articleJsonLd = articleSchema({
  headline: "The Retatrutide File — Complete Phase III Evidence Review",
  description:
    "Comprehensive review of retatrutide: 28.7% weight loss at 12mg, 86% liver fat reduction, TRIUMPH trial programme, dysesthesia profile, dosage, and FDA timeline. Updated April 2026.",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  authorName: "Mark Boreland",
  authorUrl: "https://peptidefile.com/author",
  publisherName: "Peptide File",
  image: "https://peptidefile.com/og-retatrutide.png",
});

const faqJsonLd = faqSchema(faqs);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", item: "https://peptidefile.com" },
  { name: "Retatrutide", item: "https://peptidefile.com/retatrutide" },
]);

export default function RetatrutidePage() {
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
          <span>GLP-1 / GIP / Glucagon Triple Agonist</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Phase III</span>
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

        <h1 className="article-title">The Retatrutide File</h1>

        <p className="page-intro">
          Retatrutide (LY3437943) is Eli Lilly&apos;s investigational triple agonist targeting the
          GLP-1, GIP, and glucagon receptors simultaneously. Phase III TRIUMPH-4 data showed 28.7%
          mean body weight reduction at 12mg over 68 weeks — the highest weight loss ever recorded
          in a large randomised controlled trial for any pharmacological agent. This file covers the
          mechanism, full trial programme, efficacy data, safety profile, and FDA timeline.
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
          <span>~5,000 words</span>
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
          {keyStats.map((item) => (
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
        {/* ARTICLE BODY */}
        <article className="prose">

          {/* ── SECTION 1: What Is Retatrutide ── */}
          <section id="what-is-retatrutide" style={{ marginBottom: "80px" }}>
            <h2>What Is Retatrutide?</h2>

            <p>
              Retatrutide (internal designation: LY3437943) is a once-weekly injectable peptide
              developed by Eli Lilly and Company. It is currently in Phase III clinical development
              and has not been approved by the FDA or any other regulatory agency. What makes it
              structurally distinct from every other agent in the GLP-1 drug class is its triple
              receptor activity: it simultaneously activates the glucagon-like peptide-1 (GLP-1)
              receptor, the glucose-dependent insulinotropic polypeptide (GIP) receptor, and the
              glucagon receptor.
            </p>

            <p>
              Semaglutide (the active ingredient in Ozempic and Wegovy) is a GLP-1 single agonist.
              Tirzepatide (Mounjaro, Zepbound) is a GLP-1/GIP dual agonist. Retatrutide adds a
              third axis: glucagon receptor agonism. Each additional receptor pathway contributes
              distinct physiological effects, and the combination appears to produce synergistic
              results that significantly exceed what either single or dual agonism can achieve.
            </p>

            <p>
              The primary evidence comes from the TRIUMPH Phase III programme: seven trials enrolling
              5,800+ participants across multiple countries, covering obesity, type 2 diabetes,
              metabolic liver disease, and cardiovascular disease. The headline number from
              TRIUMPH-4, the pivotal obesity trial:{" "}
              <strong>
                28.7% mean body weight reduction at the 12mg dose over 68 weeks
              </strong>{" "}
              in adults with obesity but without type 2 diabetes. No drug has achieved a comparable
              result in a randomised, double-blind, placebo-controlled trial of that scale.
            </p>

            <p>
              For context: semaglutide 2.4mg (Wegovy) achieves approximately 15% mean body weight
              reduction over 68 weeks in the same population (STEP 1 trial); tirzepatide 15mg
              (Zepbound) achieves approximately 21 to 22% (SURMOUNT-1). Retatrutide at 12mg
              represents a roughly 37% improvement in efficacy over tirzepatide and an 86%
              improvement over semaglutide at their respective highest approved doses — a genuine
              step-change in the efficacy ceiling of pharmacological weight management.
            </p>

            <p>
              Eli Lilly has indicated that NDA submission is expected in late 2026 or early 2027.
              If approved, retatrutide would enter a market already dominated by Lilly&apos;s own
              tirzepatide and Novo Nordisk&apos;s semaglutide, effectively superseding tirzepatide
              in the highest-efficacy segment and positioning Lilly at the leading edge of the next
              generation of metabolic pharmacotherapy.
            </p>
          </section>

          {/* ── SECTION 2: Mechanism ── */}
          <section id="mechanism" style={{ marginBottom: "80px" }}>
            <h2>How Retatrutide Works: The Triple Agonist Mechanism</h2>

            <p>
              Retatrutide&apos;s mechanism can be understood as three layered systems working
              simultaneously. Each targets distinct physiological pathways; together they converge on
              weight loss through mechanisms that are largely independent and therefore additive.
            </p>

            <h3>The GLP-1 Receptor</h3>

            <p>
              GLP-1 receptor agonism is the pharmacological foundation of the modern obesity drug
              class. When retatrutide activates GLP-1 receptors in the hypothalamus, it reduces
              appetite and increases satiety signalling. In the gut, GLP-1 receptor activation slows
              gastric emptying. In the pancreas, GLP-1 agonism stimulates glucose-dependent insulin
              secretion without causing hypoglycaemia when glucose is normal.
            </p>

            <h3>The GIP Receptor</h3>

            <p>
              GIP receptor agonism was first introduced to obesity pharmacotherapy via tirzepatide.
              It appears to enhance the appetite-suppressive signal while simultaneously reducing the
              nausea and GI side effects that GLP-1 agonism alone tends to produce — producing a
              net pharmacodynamic improvement over GLP-1 monotherapy.
            </p>

            <h3>The Glucagon Receptor — The Key Differentiator</h3>

            <p>
              The most significant pharmacological distinction between retatrutide and every prior
              agent is glucagon receptor agonism. In the context of simultaneous GLP-1 agonism, the
              GLP-1 component&apos;s insulin-stimulating effect offsets the glucagon-induced glycaemic
              rise. The glucagon receptor is expressed in tissues beyond the pancreas, and it is those
              peripheral effects that drive the additional efficacy.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0" }}>
              {[
                {
                  label: "Liver (hepatic lipid oxidation)",
                  text: "Glucagon receptor activation directly increases the rate at which liver cells burn fat for energy. This is the primary mechanism behind retatrutide’s 86% relative liver fat reduction in Phase 2 data.",
                },
                {
                  label: "Adipose tissue (thermogenesis)",
                  text: "Glucagon receptor agonism increases thermogenesis and energy expenditure, effectively raising the resting metabolic rate — additive to the caloric restriction driven by GLP-1-mediated appetite suppression.",
                },
                {
                  label: "Central nervous system (appetite suppression)",
                  text: "Glucagon receptors in the hypothalamus and brain stem appear to independently reinforce appetite suppression, additive to the GLP-1 signal.",
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
              For a detailed pharmacological breakdown of all three receptor axes, see the dedicated{" "}
              <Link href="/retatrutide/how-it-works">mechanism article</Link>.
            </p>
          </section>

          {/* ── SECTION 3: TRIUMPH Trials ── */}
          <section id="triumph-trials" style={{ marginBottom: "80px" }}>
            <h2>The TRIUMPH Trial Programme</h2>

            <p>
              TRIUMPH is the Phase III clinical development programme for retatrutide: seven
              individual trials, 5,800+ participants enrolled across multiple countries, covering
              obesity, type 2 diabetes, cardiovascular disease, metabolic liver disease, and
              obstructive sleep apnoea.
            </p>

            <div style={{ marginTop: "24px" }}>
              {[
                {
                  name: "TRIUMPH-1",
                  focus: "Type 2 Diabetes with Obesity",
                  status: "Completed",
                  text: "Evaluated retatrutide in adults with T2D and obesity. Co-primary endpoints: HbA1c reduction and body weight. Demonstrated clinically significant improvements in both glycaemic control and weight.",
                },
                {
                  name: "TRIUMPH-2",
                  focus: "Type 2 Diabetes (Extended Evaluation)",
                  status: "Results Pending",
                  text: "A second T2D trial designed to evaluate longer-term outcomes and specific dose comparisons. Full results are pending as of April 2026.",
                },
                {
                  name: "TRIUMPH-3",
                  focus: "Cardiovascular Outcomes (Established CVD)",
                  status: "Ongoing",
                  text: "Evaluating retatrutide in patients with established cardiovascular disease. This is the high-stakes outcomes trial that regulators require for obesity drugs before broad label approval.",
                },
                {
                  name: "TRIUMPH-4",
                  focus: "Obesity Without Type 2 Diabetes (Pivotal)",
                  status: "Completed — Published",
                  text: "The pivotal trial. 445 participants, 68 weeks, three active doses (4mg, 8mg, 12mg) versus placebo in adults with obesity without T2D. Result: 28.7% mean body weight reduction at 12mg.",
                },
                {
                  name: "TRIUMPH-5",
                  focus: "Obesity with Type 2 Diabetes",
                  status: "Completed",
                  text: "Evaluated retatrutide in the comorbid population (adults with both significant obesity and T2D). Results support both weight and glycaemic endpoints.",
                },
                {
                  name: "TRIUMPH-6",
                  focus: "Metabolic Liver Disease (MASH)",
                  status: "Ongoing",
                  text: "Powered specifically for liver histology endpoints in patients with MASH. Given retatrutide’s 86% Phase 2 liver fat reduction, a dedicated MASH indication is a realistic regulatory target.",
                },
                {
                  name: "TRIUMPH-7",
                  focus: "Obstructive Sleep Apnoea",
                  status: "Ongoing",
                  text: "Following tirzepatide’s success in the SURMOUNT-OSA trial, retatrutide is being evaluated in a dedicated sleep apnoea trial.",
                },
              ].map((trial) => {
                const statusColor =
                  trial.status.includes("Completed")
                    ? { bg: "rgba(26,107,60,0.1)", color: "#1a6b3c" }
                    : trial.status === "Ongoing"
                    ? { bg: "rgba(232,160,32,0.12)", color: "#e8a020" }
                    : { bg: "rgba(122,117,104,0.12)", color: "#7a7568" };

                return (
                  <div
                    key={trial.name}
                    style={{ borderLeft: "3px solid var(--rule)", paddingLeft: "20px", marginBottom: "24px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "12px",
                        marginBottom: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--accent)",
                          fontWeight: 600,
                        }}
                      >
                        {trial.name}
                      </span>
                      <span style={{ fontFamily: "var(--serif)", fontSize: "17px", color: "var(--ink)" }}>
                        {trial.focus}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "9px",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          padding: "2px 8px",
                          background: statusColor.bg,
                          color: statusColor.color,
                        }}
                      >
                        {trial.status}
                      </span>
                    </div>
                    <p style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75, margin: 0 }}>
                      {trial.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <p style={{ marginTop: "8px" }}>
              For full trial-by-trial data and endpoint analysis, see the{" "}
              <Link href="/retatrutide/clinical-trial-results">clinical trial results article</Link>.
            </p>
          </section>

          {/* ── SECTION 4: Weight Loss Data ── */}
          <section id="weight-loss-data" style={{ marginBottom: "80px" }}>
            <h2>Weight Loss: What the Data Shows</h2>

            <p>
              The 28.7% figure from TRIUMPH-4 is the headline. The complete picture requires the
              dose-response relationship, the responder analysis across weight loss thresholds, and
              the trajectory over the 68-week trial period.
            </p>

            <h3>Dose-Response Relationship</h3>

            <p>
              TRIUMPH-4 evaluated three active doses versus placebo. All three active doses
              demonstrated statistically significant and clinically meaningful weight loss; the
              dose-response relationship was clear and monotonic.
            </p>

            <div
              style={{
                overflowX: "auto",
                margin: "24px 0",
                border: "1px solid var(--rule)",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "var(--paper2)" }}>
                    {["Dose", "Mean Weight Loss", "vs Placebo"].map((h, i) => (
                      <th
                        key={h}
                        style={{
                          textAlign: i === 0 ? "left" : "left",
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
                  {dosageRows.map(([dose, loss, diff], i) => (
                    <tr
                      key={dose}
                      style={{
                        borderBottom: i < dosageRows.length - 1 ? "1px solid var(--rule)" : "none",
                        background: i % 2 === 0 ? "var(--paper)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontSize: "13px" }}>
                        {dose}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "var(--serif)",
                          fontSize: "17px",
                          color: dose === "12mg weekly" ? "var(--accent)" : "var(--ink)",
                          fontWeight: dose === "12mg weekly" ? 500 : 400,
                        }}
                      >
                        {loss}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink3)", fontWeight: 300 }}>
                        {diff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>Responder Analysis at 12mg</h3>

            <p>
              Mean weight loss figures can obscure the distribution of responses. Responder analysis
              provides a more clinically meaningful picture for patient counselling.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {responderRows.map(([threshold, rate]) => (
                <li
                  key={threshold}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--rule)",
                    marginBottom: 0,
                  }}
                >
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300 }}>
                    {threshold}
                  </span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--accent)", fontWeight: 500 }}>
                    {rate}
                  </span>
                </li>
              ))}
            </ul>

            <p>
              For comparison: in STEP 1 (semaglutide), approximately 69% achieved ≥10% weight loss;
              in SURMOUNT-1 (tirzepatide 15mg), approximately 91%. Retatrutide at 12mg approaches
              a ceiling of response not previously observed in pharmacological weight management.
            </p>

            <h3>Weight Loss Trajectory and Plateau</h3>

            <p>
              TRIUMPH-4 participants on 12mg continued to show weight reduction at the 68-week
              endpoint without an apparent plateau, suggesting that 68 weeks may not represent the
              maximum achievable effect.
            </p>

            <h3>Body Composition</h3>

            <p>
              Retatrutide&apos;s body composition data from TRIUMPH-4 showed fat mass loss
              predominating, consistent with the class. The glucagon receptor-mediated increase in
              energy expenditure may theoretically help preserve metabolic rate during caloric
              restriction, but this requires confirmation from longer-term follow-up data. For a
              detailed breakdown, see the{" "}
              <Link href="/retatrutide/weight-loss-projections">weight loss projections article</Link>.
            </p>
          </section>

          {/* ── SECTION 5: Liver Fat ── */}
          <section id="liver-fat" style={{ marginBottom: "80px" }}>
            <h2>Liver Fat and Metabolic Benefits</h2>

            <p>
              Beyond the weight loss data, retatrutide&apos;s most striking single finding is an{" "}
              <strong>86% relative reduction in liver fat content</strong> measured by MRI-PDFF in
              Phase 2 data, published in <em>Nature Medicine</em>. This was the largest liver fat
              reduction ever recorded for any pharmaceutical compound in a controlled clinical trial
              at the time of publication.
            </p>

            <p>
              The mechanism is directly attributable to glucagon receptor agonism in the liver.
              When retatrutide activates glucagon receptors in hepatocytes, it directly stimulates
              hepatic fatty acid oxidation. This hepatic fat-burning effect is independent of and
              additive to the secondary liver fat reduction that would be expected from overall
              caloric restriction and weight loss alone.
            </p>

            <p>
              The clinical implications extend well beyond obesity management. Approximately 25% of
              the global adult population has metabolic dysfunction-associated steatotic liver disease
              (MASLD). TRIUMPH-6 was designed specifically for MASH, using liver biopsy-confirmed
              histological endpoints to meet the regulatory bar for a dedicated MASH indication.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                [
                  "ALT and AST",
                  "Liver enzymes normalised or significantly reduced in participants with elevated baseline values.",
                ],
                [
                  "HOMA-IR",
                  "A validated measure of insulin resistance. Improved substantially at all doses, reflecting improved peripheral glucose metabolism independent of weight loss alone.",
                ],
                [
                  "Fasting triglycerides",
                  "Reduced substantially, consistent with both the weight loss component and direct hepatic lipid metabolism effects of glucagon receptor agonism.",
                ],
                [
                  "Adiponectin",
                  "An insulin-sensitising adipokine that is paradoxically suppressed in obesity. Increased with retatrutide treatment — an independent marker of improved metabolic phenotype.",
                ],
              ].map(([label, text]) => (
                <li
                  key={label}
                  style={{ padding: "12px 0", borderBottom: "1px solid var(--rule)", marginBottom: 0 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--ink3)",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75 }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── SECTION 6: Side Effects ── */}
          <section id="side-effects" style={{ marginBottom: "80px" }}>
            <h2>Side Effects and Safety Profile</h2>

            <p>
              Retatrutide&apos;s safety profile has two components: the class-typical gastrointestinal
              events shared with all GLP-1 receptor agonists, and a novel adverse event (dysesthesia)
              that appears specific to glucagon receptor agonism.
            </p>

            <h3>Gastrointestinal Side Effects</h3>

            <p>
              The most commonly reported adverse events in TRIUMPH-4 were gastrointestinal: nausea,
              diarrhoea, vomiting, and constipation. GI events occurred primarily during the
              dose-escalation phase and largely resolved or reduced in intensity once the maintenance
              dose was reached.
            </p>

            <h3>Dysesthesia — The Novel Signal</h3>

            <p>
              The most clinically distinctive adverse event in retatrutide&apos;s profile is{" "}
              <strong>dysesthesia</strong>: abnormal, often unpleasant skin sensations including
              tingling, burning, numbness, crawling, or electric feelings, primarily in the
              extremities.
            </p>

            <p>
              At the 12mg dose in TRIUMPH-4, dysesthesia was reported by approximately{" "}
              <strong>20.9% of participants</strong>. At 8mg the rate was lower; at 4mg, lower
              still — a clear dose-dependent relationship that strongly suggests the effect is
              pharmacodynamic rather than idiosyncratic.
            </p>

            <div
              style={{
                padding: "20px 24px",
                background: "var(--paper2)",
                border: "1px solid var(--rule)",
                borderLeft: "3px solid #e8a020",
                marginBottom: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#e8a020",
                  marginBottom: "8px",
                }}
              >
                Clinical Note
              </p>
              <p style={{ margin: 0 }}>
                In TRIUMPH-4, dysesthesia was predominantly mild to moderate. A meaningful proportion
                of cases emerged during dose escalation with some improvement after dose
                stabilisation. Discontinuation due to dysesthesia occurred in a small but clinically
                significant proportion at 12mg.
              </p>
            </div>

            <h3>Other Safety Signals</h3>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                [
                  "Heart rate",
                  "A modest resting heart rate increase (2 to 4 bpm) is a class-wide effect of GLP-1 receptor agonism. Observed with retatrutide at rates consistent with the class.",
                ],
                [
                  "Gallbladder events",
                  "Rapid, substantial weight loss increases the risk of cholelithiasis (gallstone formation). Observed at rates broadly consistent with other GLP-1 agents.",
                ],
                [
                  "Hypoglycaemia",
                  "In patients without T2D (the TRIUMPH-4 population), hypoglycaemia risk was low and similar to placebo.",
                ],
              ].map(([label, text]) => (
                <li
                  key={label}
                  style={{ padding: "12px 0", borderBottom: "1px solid var(--rule)", marginBottom: 0 }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--ink3)",
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    {label}
                  </span>
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75 }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p>
              For complete side effect incidence rates and management guidance, see the{" "}
              <Link href="/retatrutide/side-effects">side effects article</Link>.
            </p>
          </section>

          {/* ── SECTION 7: Comparison ── */}
          <section id="comparison" style={{ marginBottom: "80px" }}>
            <h2>Retatrutide vs Semaglutide and Tirzepatide</h2>

            <p>
              Retatrutide enters a market with two established agents. Notably, Eli Lilly itself
              manufactures tirzepatide (Zepbound/Mounjaro), making this partly an intra-company
              generational transition.
            </p>

            <div
              style={{
                overflowX: "auto",
                margin: "24px 0",
                border: "1px solid var(--rule)",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "var(--paper2)" }}>
                    {["", "Semaglutide 2.4mg", "Tirzepatide 15mg", "Retatrutide 12mg"].map((h, i) => (
                      <th
                        key={h + i}
                        style={{
                          textAlign: "left",
                          padding: "12px 16px",
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          borderBottom: "1px solid var(--rule)",
                          color: i === 3 ? "var(--accent)" : "var(--ink3)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, ri) => (
                    <tr
                      key={ri}
                      style={{
                        borderBottom: ri < comparisonRows.length - 1 ? "1px solid var(--rule)" : "none",
                        background: ri % 2 === 0 ? "var(--paper)" : "transparent",
                      }}
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          style={{
                            padding: "12px 16px",
                            fontFamily: ci === 0 ? "var(--mono)" : "inherit",
                            fontSize: ci === 0 ? "10px" : "14px",
                            textTransform: ci === 0 ? "uppercase" : "none",
                            letterSpacing: ci === 0 ? "0.08em" : "normal",
                            color:
                              ci === 0
                                ? "var(--ink3)"
                                : ci === 3 && ri === 2
                                ? "var(--accent)"
                                : "var(--ink2)",
                            fontWeight: ci === 3 && ri === 2 ? 500 : 300,
                            background: ci === 3 ? "rgba(26,107,60,0.025)" : "transparent",
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The key takeaway: retatrutide&apos;s efficacy advantage is substantial and
              mechanistically justified. The trade-off is dysesthesia, a novel adverse event at
              20.9% at 12mg with no analogue in the existing class.
            </p>

            <p>
              See the dedicated comparison files:{" "}
              <Link href="/retatrutide/vs-semaglutide">Retatrutide vs Semaglutide</Link> and{" "}
              <Link href="/retatrutide/vs-tirzepatide">Retatrutide vs Tirzepatide</Link>.
            </p>
          </section>

          {/* ── SECTION 8: Dosage ── */}
          <section id="dosage" style={{ marginBottom: "80px" }}>
            <h2>Dosage and Administration</h2>

            <p>
              Retatrutide is administered as a{" "}
              <strong>once-weekly subcutaneous injection</strong>, the same delivery format as
              semaglutide and tirzepatide. Phase III used a gradual dose-escalation protocol
              designed to minimise GI side effects during the adjustment period.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                [
                  "4mg weekly",
                  "Lower bound of efficacy studied. ~17.5% mean weight loss at 68 weeks. Lowest side effect burden including the lowest dysesthesia rate.",
                ],
                [
                  "8mg weekly",
                  "Middle dose. ~22.8% mean weight loss. Intermediate dysesthesia rate. May represent the optimal benefit-risk profile for many patients.",
                ],
                [
                  "12mg weekly",
                  "Highest dose studied. 28.7% mean weight loss. Highest efficacy, and the highest dysesthesia rate at approximately 20.9%.",
                ],
              ].map(([dose, desc]) => (
                <li
                  key={dose}
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid var(--rule)",
                    display: "flex",
                    gap: "20px",
                    alignItems: "baseline",
                    marginBottom: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      color: "var(--ink)",
                      minWidth: "110px",
                      flexShrink: 0,
                    }}
                  >
                    {dose}
                  </span>
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75 }}>
                    {desc}
                  </span>
                </li>
              ))}
            </ul>

            <p>
              The commercial dosing schedule has not been officially announced by Eli Lilly as of
              April 2026. See the full{" "}
              <Link href="/retatrutide/dosage">dosage guide</Link>.
            </p>
          </section>

          {/* ── SECTION 9: FDA Timeline ── */}
          <section id="fda-timeline" style={{ marginBottom: "80px" }}>
            <h2>FDA Approval Timeline</h2>

            <p>
              As of April 2026, retatrutide remains investigational. Based on Eli Lilly&apos;s public
              guidance, NDA submission is expected in{" "}
              <strong>late 2026 or early 2027</strong>.
            </p>

            {[
              { date: "2021–2022", text: "Phase 2 trials in obesity and T2D populations. Nature Medicine publication of liver fat data (86% reduction).", highlight: false },
              { date: "2022–2024", text: "TRIUMPH Phase III programme launches across seven trials and five indications.", highlight: false },
              { date: "Late 2024", text: "TRIUMPH-4 primary results: 28.7% weight loss at 12mg over 68 weeks in 445 participants.", highlight: false },
              { date: "2025–2026", text: "Remaining TRIUMPH trials complete or in follow-up. NDA package assembled.", highlight: false },
              { date: "Late 2026 / Early 2027", text: "NDA submission to FDA expected (Eli Lilly guidance).", highlight: true },
              { date: "2027", text: "FDA review. Approval possible late 2027 (standard review) or mid-2027 (priority review, if granted).", highlight: false },
            ].map((item, i) => (
              <div
                key={item.date}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  borderBottom: i < 5 ? "1px solid var(--rule)" : "none",
                }}
              >
                <div
                  style={{
                    padding: "13px 24px 13px 0",
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    color: item.highlight ? "var(--accent)" : "var(--ink3)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                    fontWeight: item.highlight ? 600 : 400,
                  }}
                >
                  {item.date}
                </div>
                <div
                  style={{
                    padding: "13px 0 13px 20px",
                    borderLeft: "2px solid var(--rule)",
                    fontSize: "1.0625rem",
                    color: "var(--ink2)",
                    fontWeight: 300,
                    lineHeight: 1.75,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}

            <p style={{ marginTop: "24px" }}>
              For detailed regulatory pathway analysis and PDUFA projections, see the{" "}
              <Link href="/retatrutide/fda-approval">FDA approval article</Link>.
            </p>
          </section>

          {/* ── SECTION 10: Who Qualifies ── */}
          <section id="who-qualifies" style={{ marginBottom: "80px" }}>
            <h2>Who Will Qualify?</h2>

            <p>
              Based on precedent from the semaglutide (Wegovy) and tirzepatide (Zepbound) labels,
              retatrutide&apos;s obesity indication will likely cover:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                "Adults with a BMI of ≥30 kg/m² (obesity class I or higher)",
                "Adults with a BMI of ≥27 kg/m² plus at least one weight-related comorbidity (hypertension, dyslipidaemia, type 2 diabetes, obstructive sleep apnoea, or cardiovascular disease)",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    padding: "11px 0",
                    borderBottom: "1px solid var(--rule)",
                    marginBottom: 0,
                  }}
                >
                  <span
                    style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}
                  >
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p>
              Insurance coverage is the dominant real-world access variable. The GLP-1 class has
              faced persistent payer resistance for the obesity indication specifically. Retatrutide
              will face the same structural barrier, and access will depend heavily on commercial
              pricing and formulary negotiations following approval.
            </p>
          </section>

          {/* ── SECTION 11: Unknowns ── */}
          <section id="unknowns" style={{ marginBottom: "80px" }}>
            <h2>What We Don&apos;t Yet Know</h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  title: "Cardiovascular outcomes (TRIUMPH-3)",
                  body: "Whether retatrutide reduces MACE in high-risk patients is critical for broad label expansion. TRIUMPH-3 is ongoing and represents the most consequential missing data.",
                },
                {
                  title: "Full dysesthesia characterisation",
                  body: "Mechanism confirmation, predictive risk factors, reversibility on dose reduction or discontinuation, and long-term course.",
                },
                {
                  title: "TRIUMPH-2 T2D results",
                  body: "Full T2D data from the second dedicated diabetes trial. Pending publication and expected to contribute to the NDA filing.",
                },
                {
                  title: "TRIUMPH-6 MASH histology",
                  body: "Whether the 86% liver fat reduction from Phase 2 translates into MASH resolution and fibrosis regression on biopsy.",
                },
                {
                  title: "Optimal maintenance dose strategy",
                  body: "Whether patients who achieve target weight loss at 8mg need to maintain 12mg for durability, or whether a lower maintenance dose preserves the effect.",
                },
                {
                  title: "Obstructive sleep apnoea outcomes (TRIUMPH-7)",
                  body: "Following tirzepatide’s precedent in SURMOUNT-OSA, results from TRIUMPH-7 could support a dedicated OSA indication.",
                },
                {
                  title: "Pricing and insurance coverage",
                  body: "List price, net price after rebates, and formulary positioning relative to tirzepatide and semaglutide.",
                },
                {
                  title: "Drug-drug interactions in polypharmacy",
                  body: "Real-world patients with obesity and T2D are typically on multiple medications. The DDI profile in complex polypharmacy scenarios remains less characterised.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  style={{ padding: "16px 0", borderBottom: "1px solid var(--rule)", marginBottom: 0 }}
                >
                  <p style={{ fontFamily: "var(--serif)", fontSize: "17px", color: "var(--ink)", fontWeight: 400, marginBottom: "6px" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75, margin: 0 }}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* ── SECTION 12: FAQ ── */}
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
              The content on this page is for informational and educational purposes only. It does
              not constitute medical advice, diagnosis, or treatment. Retatrutide is an
              investigational drug that is not approved by the FDA or any other regulatory authority.
              Clinical trial results are preliminary and subject to change as additional data becomes
              available. Always consult a qualified healthcare provider before making any decisions
              about medications, weight management, or health conditions. Peptide File does not sell,
              distribute, or endorse the purchase of any investigational compounds.
            </p>
            <p style={{ fontSize: "11px", color: "var(--ink3)", fontWeight: 300, fontStyle: "italic", margin: "10px 0 0 0" }}>
              Last updated: April 2026. This file will be updated as new TRIUMPH trial results are
              published.
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
              {tocSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    color: "var(--ink2)",
                    textDecoration: "none",
                    borderLeft: "1px solid var(--rule)",
                    paddingLeft: "12px",
                    fontSize: "13px",
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <div className="mono-label" style={{ marginBottom: "12px", fontSize: "10px" }}>
              Related files
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {clusterLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
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
                  {link.label}
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
              New trial readouts, mechanism breakdowns, and FDA updates. One email per week. No
              filler.
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
