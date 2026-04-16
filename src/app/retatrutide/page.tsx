import type { Metadata } from "next";
import Link from "next/link";
import EvidenceBadge from "@/components/EvidenceBadge";
import NewsletterSignup from "@/components/NewsletterSignup";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "The Retatrutide File — Complete Phase III Evidence Review | Peptide File",
  description:
    "Comprehensive review of retatrutide: 28.7% weight loss at 12mg, 86% liver fat reduction, TRIUMPH trial programme, dysesthesia profile, dosage, and FDA timeline. Updated April 2026.",
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
  { id: "unknowns", label: "What We Don&apos;t Know Yet" },
  { id: "faq", label: "FAQ" },
];

const clusterLinks = [
  { href: "/retatrutide/vs-semaglutide", label: "vs Semaglutide" },
  { href: "/retatrutide/vs-tirzepatide", label: "vs Tirzepatide" },
  { href: "/retatrutide/clinical-trial-results", label: "Trial Results" },
  { href: "/retatrutide/side-effects", label: "Side Effects" },
  { href: "/retatrutide/dosage", label: "Dosage Guide" },
  { href: "/retatrutide/fda-approval", label: "FDA Approval" },
  { href: "/retatrutide/weight-loss", label: "Weight Loss" },
  { href: "/retatrutide/mechanism", label: "Mechanism" },
];

const keyDataRows = [
  ["Weight Loss (12mg)", "28.7% at 68 weeks (TRIUMPH-4)"],
  ["Trial Programme", "TRIUMPH — 7 Phase III trials"],
  ["Participants Enrolled", "5,800+ across programme"],
  ["FDA Timeline", "NDA expected late 2026 / early 2027"],
  ["Mechanism", "GLP-1 / GIP / Glucagon triple agonist"],
  ["Developer", "Eli Lilly"],
  ["Liver Fat Reduction", "86% relative reduction (Phase 2)"],
  ["Dysesthesia Rate", "20.9% at 12mg"],
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

const comparisonHeaders = ["", "Semaglutide 2.4mg", "Tirzepatide 15mg", "Retatrutide 12mg"];
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
    a: "Retatrutide significantly outperforms semaglutide on weight loss: 28.7% mean body weight reduction at 12mg over 68 weeks versus approximately 15% for semaglutide 2.4mg (Wegovy) over the same duration. The mechanism is also distinct — semaglutide is a GLP-1 single agonist; retatrutide adds GIP and glucagon receptor agonism. Retatrutide also produces substantially greater liver fat reduction through a direct hepatic mechanism not present in semaglutide.",
  },
  {
    q: "What is dysesthesia and why does retatrutide cause it?",
    a: "Dysesthesia refers to abnormal skin sensations — tingling, burning, numbness, or crawling feelings — typically in the extremities. In TRIUMPH-4, it was reported by approximately 20.9% of participants at 12mg. The leading hypothesis is that glucagon receptors are expressed in peripheral sensory neurons, and that sustained glucagon receptor agonism alters sensory neuron excitability. This is not a signal of nerve damage. In TRIUMPH-4, dysesthesia was predominantly mild to moderate and occurred most frequently during dose escalation.",
  },
  {
    q: "When will retatrutide be available?",
    a: "Based on Eli Lilly's NDA submission timeline (expected late 2026 / early 2027) and standard FDA review periods (10 months standard, 6 months for priority review), commercial availability could begin in late 2027. This is an estimate based on available public information and could shift in either direction.",
  },
  {
    q: "Is retatrutide the same as tirzepatide (Mounjaro/Zepbound)?",
    a: "No. Both are developed by Eli Lilly but are distinct molecules. Tirzepatide is a GLP-1/GIP dual agonist. Retatrutide is a GLP-1/GIP/Glucagon triple agonist — it activates an additional receptor pathway that tirzepatide does not. This is the primary mechanistic basis for retatrutide's superior weight loss numbers and its direct liver fat-reducing effect.",
  },
  {
    q: "What dose produced the 28.7% weight loss result?",
    a: "The 12mg once-weekly dose in TRIUMPH-4 over 68 weeks in 445 participants with obesity but without type 2 diabetes. The trial also studied 4mg (~17.5% weight loss) and 8mg (~22.8% weight loss). All three active doses significantly outperformed placebo (~2%).",
  },
  {
    q: "What is the TRIUMPH trial programme?",
    a: "TRIUMPH is the Phase III development programme for retatrutide — seven trials across five indications: obesity without T2D (TRIUMPH-4, pivotal), obesity with T2D (TRIUMPH-1, 5), extended T2D evaluation (TRIUMPH-2), cardiovascular outcomes in established CVD (TRIUMPH-3, ongoing), metabolic liver disease/MASH (TRIUMPH-6), and obstructive sleep apnoea (TRIUMPH-7). Over 5,800 participants are enrolled across the programme.",
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 48px 0" }}>

        {/* ── PAGE HEADER ────────────────────────────────────────────── */}
        <div className="eyebrow">
          <span className="eyebrow-text">GLP-1 / GIP / Glucagon Triple Agonist</span>
        </div>

        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(36px, 4vw, 56px)",
            color: "var(--ink)",
            fontWeight: 400,
            lineHeight: 1.08,
            marginBottom: "16px",
            maxWidth: "760px",
          }}
        >
          The Retatrutide File
        </h1>

        {/* Author + meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "16px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              color: "var(--ink3)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            By{" "}
            <Link
              href="/author"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent)",
              }}
            >
              Mark Boreland
            </Link>
          </span>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              color: "var(--ink3)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Last updated: April 2026 · ~5,000 words
          </span>
        </div>

        <div style={{ marginBottom: "1.5em" }}>
          <EvidenceBadge level="strong" />
        </div>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--ink2)",
            fontWeight: 300,
            lineHeight: 1.75,
            maxWidth: "680px",
            paddingTop: "20px",
            borderTop: "1px solid var(--rule)",
            marginBottom: "40px",
          }}
        >
          Retatrutide (LY3437943) is Eli Lilly&apos;s investigational triple agonist targeting the
          GLP-1, GIP, and glucagon receptors simultaneously. Phase III TRIUMPH-4 data showed 28.7%
          mean body weight reduction at 12mg over 68 weeks — the highest weight loss ever recorded
          in a large randomised controlled trial for any pharmacological agent. This file covers the
          mechanism, full trial programme, efficacy data, safety profile, and FDA timeline.
        </p>

        {/* ── KEY DATA TABLE ─────────────────────────────────────────── */}
        <div
          className="key-data-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--rule)",
            marginBottom: "64px",
          }}
        >
          {keyDataRows.map(([key, value], i) => (
            <div
              key={key}
              style={{
                padding: "20px",
                background: "var(--paper2)",
                borderRight: i % 4 !== 3 ? "1px solid var(--rule)" : "none",
                borderBottom: i < 4 ? "1px solid var(--rule)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--ink3)",
                  marginBottom: "8px",
                }}
              >
                {key}
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "17px",
                  color: "var(--ink)",
                  lineHeight: 1.4,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* ── TWO-COLUMN: TOC + ARTICLE ──────────────────────────────── */}
        <div
          className="article-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "220px minmax(0, 680px)",
            gap: "64px",
            alignItems: "start",
          }}
        >
          {/* ── LEFT: STICKY TOC ── */}
          <aside
            className="toc-sidebar"
            style={{ position: "sticky", top: "32px", alignSelf: "start" }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--ink3)",
                marginBottom: "12px",
              }}
            >
              Contents
            </p>
            <nav>
              {tocSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  style={{
                    display: "block",
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--ink3)",
                    textDecoration: "none",
                    padding: "6px 0 6px 12px",
                    borderLeft: "2px solid var(--rule)",
                    marginBottom: "2px",
                    lineHeight: 1.4,
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                  dangerouslySetInnerHTML={{ __html: s.label }}
                />
              ))}
            </nav>

            {/* Related files */}
            <div
              style={{
                marginTop: "32px",
                paddingTop: "24px",
                borderTop: "1px solid var(--rule)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--ink3)",
                  marginBottom: "10px",
                }}
              >
                Related Files
              </p>
              {clusterLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--accent)",
                    textDecoration: "none",
                    padding: "5px 0",
                    borderBottom: "1px solid var(--rule)",
                    transition: "opacity 0.15s",
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </aside>

          {/* ── RIGHT: ARTICLE BODY ── */}
          <article className="prose">

            {/* ── SECTION 1: What Is Retatrutide ── */}
            <section id="what-is-retatrutide" style={{ marginBottom: "80px" }}>
              <h2>
                What Is Retatrutide?
              </h2>

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
                Semaglutide — the active ingredient in Ozempic and Wegovy — is a GLP-1 single
                agonist. Tirzepatide (Mounjaro, Zepbound) is a GLP-1/GIP dual agonist. Retatrutide
                adds a third axis: glucagon receptor agonism. Each additional receptor pathway
                contributes distinct physiological effects, and the combination appears to produce
                synergistic results that significantly exceed what either single or dual agonism can
                achieve.
              </p>

              <p>
                The primary evidence comes from the TRIUMPH Phase III programme — seven trials
                enrolling 5,800+ participants across multiple indications including obesity, type 2
                diabetes, metabolic liver disease, and cardiovascular disease. The headline number
                from TRIUMPH-4, the pivotal obesity trial:{" "}
                <strong>
                  28.7% mean body weight reduction at the 12mg dose over 68 weeks
                </strong>{" "}
                in adults with obesity but without type 2 diabetes. No drug has achieved a
                comparable result in a randomised, double-blind, placebo-controlled trial of that
                scale.
              </p>

              <p>
                For context: semaglutide 2.4mg (Wegovy) achieves approximately 15% mean body weight
                reduction over 68 weeks in the same population (STEP 1 trial); tirzepatide 15mg
                (Zepbound) achieves approximately 21–22% (SURMOUNT-1). Retatrutide at 12mg
                represents a roughly 37% improvement in efficacy over tirzepatide and an 86%
                improvement over semaglutide at their respective highest approved doses. This is
                not an incremental step — it is a genuine step-change in the efficacy ceiling of
                pharmacological weight management.
              </p>

              <p>
                Eli Lilly has indicated that NDA submission is expected in late 2026 or early 2027.
                If approved, retatrutide would enter a market already dominated by Lilly&apos;s own
                tirzepatide and Novo Nordisk&apos;s semaglutide — effectively superseding tirzepatide
                in the highest-efficacy segment and positioning Lilly at the leading edge of the
                next generation of metabolic pharmacotherapy.
              </p>
            </section>

            {/* ── SECTION 2: Mechanism ── */}
            <section id="mechanism" style={{ marginBottom: "80px" }}>
              <h2>
                How Retatrutide Works: The Triple Agonist Mechanism
              </h2>

              <p>
                Retatrutide&apos;s mechanism can be understood as three layered systems working
                simultaneously. Each targets distinct physiological pathways; together they converge
                on weight loss through mechanisms that are largely independent and therefore additive.
                This is not redundancy — it is pharmacological depth.
              </p>

              <h3>
                The GLP-1 Receptor
              </h3>

              <p>
                GLP-1 receptor agonism is the pharmacological foundation of the modern obesity drug
                class. GLP-1 (glucagon-like peptide-1) is an incretin hormone secreted by L-cells in
                the small intestine in response to food intake. When retatrutide activates GLP-1
                receptors in the hypothalamus, it reduces appetite and increases satiety signalling —
                patients eat less because they feel full sooner and hunger is suppressed between meals.
              </p>

              <p>
                In the gut, GLP-1 receptor activation slows gastric emptying: food moves through the
                stomach more slowly, extending postprandial satiety and reducing caloric absorption
                efficiency. In the pancreas, GLP-1 agonism stimulates glucose-dependent insulin
                secretion — insulin is released in response to elevated blood glucose, reducing
                postprandial spikes without causing hypoglycaemia when glucose is normal.
              </p>

              <p>
                These are the same mechanisms that make semaglutide and tirzepatide effective. They
                explain the class-wide benefits: meaningful weight loss, improved glycaemic control,
                and cardiovascular risk reduction. The difference in retatrutide is what gets layered
                on top.
              </p>

              <h3>
                The GIP Receptor
              </h3>

              <p>
                GIP (glucose-dependent insulinotropic polypeptide) receptor agonism was first
                introduced to obesity pharmacotherapy via tirzepatide. The GIP receptor&apos;s role in
                weight regulation is more complex than GLP-1: it appears to enhance the appetite-
                suppressive signal while simultaneously reducing the nausea and GI side effects that
                GLP-1 agonism alone tends to produce.
              </p>

              <p>
                This produces a counter-intuitive result: tirzepatide achieves greater weight loss
                than semaglutide despite generally being better tolerated at efficacious doses. The
                leading explanation is that GIP co-agonism amplifies the appetite-suppressive signal
                without proportionally increasing GI side effect burden — a net pharmacodynamic
                improvement over GLP-1 monotherapy.
              </p>

              <p>
                Retatrutide carries the same GIP agonism as tirzepatide. This likely contributes to
                its tolerability profile given the extraordinary weight loss numbers — without GIP
                co-agonism, the GLP-1 and glucagon receptor activity at efficacious doses might
                produce an unacceptable GI burden.
              </p>

              <h3>
                The Glucagon Receptor — The Key Differentiator
              </h3>

              <p>
                The most significant pharmacological distinction between retatrutide and every prior
                agent is glucagon receptor agonism. Glucagon is classically understood as a counter-
                regulatory hormone: it raises blood glucose when levels fall dangerously low, acting
                as the physiological counterweight to insulin. This makes glucagon receptor agonism
                an initially surprising addition to a diabetes and obesity drug.
              </p>

              <p>
                The key insight is that glucagon receptor agonism in the context of simultaneous
                GLP-1 agonism does not produce net hyperglycaemia — the GLP-1 component&apos;s
                insulin-stimulating effect offsets the glucagon-induced glycaemic rise. But the
                glucagon receptor is expressed in tissues beyond the pancreas, and it is those
                peripheral effects that drive the additional efficacy.
              </p>

              <p style={{ marginBottom: "12px" }}>
                Three key peripheral glucagon receptor effects in retatrutide:
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0" }}>
                {[
                  {
                    label: "Liver (hepatic lipid oxidation)",
                    text: "Glucagon receptor activation directly increases the rate at which liver cells burn fat for energy. This is the primary mechanism behind retatrutide\u2019s 86% relative liver fat reduction in Phase 2 data. No GLP-1 single or dual agonist produces liver fat reductions at this magnitude through a direct hepatic mechanism.",
                  },
                  {
                    label: "Adipose tissue (thermogenesis)",
                    text: "Glucagon receptor agonism increases thermogenesis and energy expenditure \u2014 effectively raising the resting metabolic rate. This is additive to the caloric restriction driven by GLP-1-mediated appetite suppression: weight loss is driven from two directions simultaneously.",
                  },
                  {
                    label: "Central nervous system (appetite suppression)",
                    text: "Glucagon receptors in the hypothalamus and brain stem appear to independently reinforce appetite suppression, additive to the GLP-1 signal. This CNS component likely contributes to the degree of appetite suppression that distinguishes retatrutide from caloric restriction alone.",
                  },
                ].map((item) => (
                  <li key={item.label} style={{ padding: "14px 0", borderBottom: "1px solid var(--rule)", marginBottom: 0 }}>
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
                    <span
                      style={{
                        fontSize: "1.0625rem",
                        color: "var(--ink2)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p>
                For a detailed pharmacological breakdown of all three receptor axes, see the
                dedicated{" "}
                <Link
                  href="/retatrutide/mechanism"
                >
                  mechanism article
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 3: TRIUMPH Trials ── */}
            <section id="triumph-trials" style={{ marginBottom: "80px" }}>
              <h2>
                The TRIUMPH Trial Programme
              </h2>

              <p>
                TRIUMPH is the Phase III clinical development programme for retatrutide — seven
                individual trials, 5,800+ participants enrolled across multiple countries, covering
                obesity, type 2 diabetes, cardiovascular disease, metabolic liver disease, and
                obstructive sleep apnoea. The breadth of the programme reflects Eli Lilly&apos;s
                strategy: multiple indications from a single molecule, each supported by
                trial-specific regulatory endpoints.
              </p>

              <div style={{ marginTop: "24px" }}>
                {[
                  {
                    name: "TRIUMPH-1",
                    focus: "Type 2 Diabetes with Obesity",
                    status: "Completed",
                    text: "Evaluated retatrutide in adults with T2D and obesity. Co-primary endpoints: HbA1c reduction and body weight. Demonstrated clinically significant improvements in both glycaemic control and weight, establishing retatrutide\u2019s dual-indication potential from the outset. Data supports the T2D component of the NDA.",
                  },
                  {
                    name: "TRIUMPH-2",
                    focus: "Type 2 Diabetes (Extended Evaluation)",
                    status: "Results Pending",
                    text: "A second T2D trial designed to evaluate longer-term outcomes and specific dose comparisons. Full results are pending as of April 2026 and are expected to contribute additional data to the NDA package.",
                  },
                  {
                    name: "TRIUMPH-3",
                    focus: "Cardiovascular Outcomes (Established CVD)",
                    status: "Ongoing",
                    text: "Evaluating retatrutide in patients with established cardiovascular disease. This is the high-stakes outcomes trial that regulators require for obesity drugs before broad label approval. Cardiovascular outcomes trials typically run for 3\u20135 years. Results are not yet available and remain the key outstanding regulatory question.",
                  },
                  {
                    name: "TRIUMPH-4",
                    focus: "Obesity Without Type 2 Diabetes (Pivotal)",
                    status: "Completed — Published",
                    text: "The pivotal trial. 445 participants, 68 weeks, three active doses (4mg, 8mg, 12mg) versus placebo in adults with obesity without T2D. Primary endpoint: percentage change from baseline body weight. Result: 28.7% mean body weight reduction at 12mg. Robustly powered, double-blind, placebo-controlled. This data anchors the NDA.",
                  },
                  {
                    name: "TRIUMPH-5",
                    focus: "Obesity with Type 2 Diabetes",
                    status: "Completed",
                    text: "Evaluated retatrutide in the comorbid population \u2014 adults with both significant obesity and T2D. Likely represents a substantial portion of real-world prescribing given the high co-prevalence of these conditions. Results support both weight and glycaemic endpoints.",
                  },
                  {
                    name: "TRIUMPH-6",
                    focus: "Metabolic Liver Disease (MASH)",
                    status: "Ongoing",
                    text: "Powered specifically for liver histology endpoints in patients with metabolic dysfunction-associated steatohepatitis (MASH). Given retatrutide\u2019s 86% Phase 2 liver fat reduction, a dedicated MASH indication is a realistic regulatory target. Results pending.",
                  },
                  {
                    name: "TRIUMPH-7",
                    focus: "Obstructive Sleep Apnoea",
                    status: "Ongoing",
                    text: "Following tirzepatide\u2019s success in the SURMOUNT-OSA trial, retatrutide is being evaluated in a dedicated sleep apnoea trial. Results are pending.",
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
                      style={{
                        borderLeft: "3px solid var(--rule)",
                        paddingLeft: "20px",
                        marginBottom: "24px",
                      }}
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
                        <span
                          style={{
                            fontFamily: "var(--serif)",
                            fontSize: "17px",
                            color: "var(--ink)",
                            fontWeight: 400,
                          }}
                        >
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
                      <p
                        style={{
                          fontSize: "1.0625rem",
                          color: "var(--ink2)",
                          fontWeight: 300,
                          lineHeight: 1.75,
                          margin: 0,
                        }}
                      >
                        {trial.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p style={{ marginTop: "8px" }}>
                For full trial-by-trial data and endpoint analysis, see the{" "}
                <Link
                  href="/retatrutide/clinical-trial-results"
                >
                  clinical trial results article
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 4: Weight Loss Data ── */}
            <section id="weight-loss-data" style={{ marginBottom: "80px" }}>
              <h2>
                Weight Loss: What the Data Shows
              </h2>

              <p>
                The 28.7% figure from TRIUMPH-4 is the headline. The complete picture requires the
                dose-response relationship, the responder analysis across weight loss thresholds, and
                the trajectory over the 68-week trial period.
              </p>

              <h3>
                Dose-Response Relationship
              </h3>

              <p>
                TRIUMPH-4 evaluated three active doses versus placebo. All three active doses
                demonstrated statistically significant and clinically meaningful weight loss;
                the dose-response relationship was clear and monotonic.
              </p>

              {/* Dose table */}
              <div style={{ border: "1px solid var(--rule)", marginBottom: "28px" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    background: "var(--paper2)",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  {["Dose", "Mean Weight Loss", "vs Placebo"].map((h, i) => (
                    <div
                      key={h}
                      style={{
                        padding: "10px 16px",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--ink3)",
                        borderRight: i < 2 ? "1px solid var(--rule)" : "none",
                      }}
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {dosageRows.map(([dose, loss, diff], i) => (
                  <div
                    key={dose}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      borderBottom: i < dosageRows.length - 1 ? "1px solid var(--rule)" : "none",
                    }}
                  >
                    <div
                      style={{
                        padding: "13px 16px",
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        color: "var(--ink)",
                        borderRight: "1px solid var(--rule)",
                      }}
                    >
                      {dose}
                    </div>
                    <div
                      style={{
                        padding: "13px 16px",
                        fontFamily: "var(--serif)",
                        fontSize: "17px",
                        color: dose === "12mg weekly" ? "var(--accent)" : "var(--ink)",
                        fontWeight: dose === "12mg weekly" ? 500 : 400,
                        borderRight: "1px solid var(--rule)",
                      }}
                    >
                      {loss}
                    </div>
                    <div
                      style={{
                        padding: "13px 16px",
                        fontSize: "17px",
                        color: "var(--ink3)",
                        fontWeight: 300,
                      }}
                    >
                      {diff}
                    </div>
                  </div>
                ))}
              </div>

              <h3>
                Responder Analysis at 12mg
              </h3>

              <p>
                Mean weight loss figures can obscure the distribution of responses. Responder
                analysis — the percentage of participants achieving at least a given weight loss
                threshold — provides a more clinically meaningful picture for patient counselling.
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
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        color: "var(--accent)",
                        fontWeight: 500,
                      }}
                    >
                      {rate}
                    </span>
                  </li>
                ))}
              </ul>

              <p>
                For comparison: in STEP 1 (semaglutide), approximately 69% achieved ≥10% weight
                loss; in SURMOUNT-1 (tirzepatide 15mg), approximately 91%. Retatrutide at 12mg
                approaches a ceiling of response that has not previously been observed in
                pharmacological weight management.
              </p>

              <h3>
                Weight Loss Trajectory and Plateau
              </h3>

              <p>
                Unlike some earlier GLP-1 agents where weight loss plateaus relatively early,
                TRIUMPH-4 participants on 12mg continued to show weight reduction at the 68-week
                endpoint without an apparent plateau — suggesting that 68 weeks may not represent
                the maximum achievable effect. Longer-duration trials or extension studies may
                document additional weight loss beyond the primary endpoint timeframe.
              </p>

              <h3>
                Body Composition
              </h3>

              <p>
                A consistent criticism of GLP-1-class weight loss drugs is the proportion of lean
                mass (muscle) lost alongside fat. Retatrutide&apos;s body composition data from
                TRIUMPH-4 showed fat mass loss predominating, consistent with the class. The
                glucagon receptor-mediated increase in energy expenditure may theoretically help
                preserve metabolic rate during caloric restriction — which could partially mitigate
                lean mass loss over time — but this requires confirmation from longer-term follow-up
                data. For a detailed breakdown, see the{" "}
                <Link
                  href="/retatrutide/weight-loss"
                >
                  weight loss article
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 5: Liver Fat ── */}
            <section id="liver-fat" style={{ marginBottom: "80px" }}>
              <h2>
                Liver Fat and Metabolic Benefits
              </h2>

              <p>
                Beyond the weight loss data, retatrutide&apos;s most striking single finding — and
                the one that most clearly separates it from its predecessors — is an{" "}
                <strong>
                  86% relative reduction in liver fat content
                </strong>{" "}
                measured by MRI-PDFF (magnetic resonance imaging proton density fat fraction) in
                Phase 2 data, published in{" "}
                <em>Nature Medicine</em>. This was the largest liver fat reduction ever recorded for
                any pharmaceutical compound in a controlled clinical trial at the time of publication.
              </p>

              <p>
                The mechanism is directly attributable to glucagon receptor agonism in the liver.
                When retatrutide activates glucagon receptors in hepatocytes, it directly stimulates
                hepatic fatty acid oxidation — liver cells burn fat at a substantially elevated rate.
                This hepatic fat-burning effect is independent of and additive to the secondary
                liver fat reduction that would be expected from overall caloric restriction and weight
                loss alone. Semaglutide and tirzepatide do reduce liver fat, but their reductions are
                primarily mediated through weight loss; retatrutide&apos;s is also direct.
              </p>

              <p>
                The clinical implications extend well beyond obesity management. Approximately 25% of
                the global adult population has metabolic dysfunction-associated steatotic liver
                disease (MASLD). A meaningful proportion progress to MASH (metabolic
                dysfunction-associated steatohepatitis) — associated with progressive hepatic
                fibrosis, cirrhosis, and hepatocellular carcinoma risk. Current approved treatment
                options for MASH are limited. TRIUMPH-6 was designed specifically for MASH, using
                liver biopsy-confirmed histological endpoints to meet the regulatory bar for a
                dedicated MASH indication.
              </p>

              <p>
                Additional metabolic improvements documented in Phase 2 and supported by Phase 3 data:
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  [
                    "ALT and AST",
                    "Liver enzymes normalised or significantly reduced in participants with elevated baseline values — a key safety and efficacy marker for hepatic health.",
                  ],
                  [
                    "HOMA-IR",
                    "A validated measure of insulin resistance. Improved substantially at all doses, reflecting improved peripheral glucose metabolism independent of weight loss alone.",
                  ],
                  [
                    "Fasting triglycerides",
                    "Reduced substantially — consistent with both the weight loss component and direct hepatic lipid metabolism effects of glucagon receptor agonism in the liver.",
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
                    <span
                      style={{
                        fontSize: "1.0625rem",
                        color: "var(--ink2)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                      }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── SECTION 6: Side Effects ── */}
            <section id="side-effects" style={{ marginBottom: "80px" }}>
              <h2>
                Side Effects and Safety Profile
              </h2>

              <p>
                Retatrutide&apos;s safety profile has two components: the class-typical
                gastrointestinal events shared with all GLP-1 receptor agonists, and a novel adverse
                event — dysesthesia — that appears specific to glucagon receptor agonism and is not
                seen with semaglutide or tirzepatide.
              </p>

              <h3>
                Gastrointestinal Side Effects
              </h3>

              <p>
                The most commonly reported adverse events in TRIUMPH-4 were gastrointestinal:
                nausea, diarrhoea, vomiting, and constipation. This is consistent with every
                GLP-1-class agent and is well understood mechanistically — GLP-1 receptor agonism
                in the gut slows gastric emptying and alters gut motility, particularly during dose
                escalation.
              </p>

              <p>
                GI events occurred primarily during the dose-escalation phase and largely resolved
                or reduced in intensity once the maintenance dose was reached. Rates were broadly
                comparable to tirzepatide at similar weight loss levels — the GIP co-agonism likely
                moderates the nausea burden that would otherwise be expected from the degree of
                GLP-1 and glucagon receptor stimulation.
              </p>

              <h3>
                Dysesthesia — The Novel Signal
              </h3>

              <p>
                The most clinically distinctive adverse event in retatrutide&apos;s profile is{" "}
                <strong>dysesthesia</strong>:
                abnormal, often unpleasant skin sensations including tingling, burning, numbness,
                crawling, or electric feelings, primarily in the extremities — hands, feet, arms,
                and legs.
              </p>

              <p>
                At the 12mg dose in TRIUMPH-4, dysesthesia was reported by approximately{" "}
                <strong>
                  20.9% of participants
                </strong>
                . At 8mg, the rate was lower; at 4mg, lower still — a clear dose-dependent
                relationship that strongly suggests the effect is pharmacodynamic rather than
                idiosyncratic.
              </p>

              <p>
                The leading mechanistic hypothesis is that glucagon receptors are expressed in
                peripheral sensory neurons and dorsal root ganglia, and that sustained glucagon
                receptor agonism at high doses alters the excitability or firing threshold of these
                neurons. This would classify dysesthesia as a pharmacodynamic effect analogous to
                how GLP-1 receptor agonism causes GI symptoms — rather than a signal of peripheral
                nerve damage or toxicity.
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
                  In TRIUMPH-4, dysesthesia was predominantly mild to moderate. A meaningful
                  proportion of cases emerged during dose escalation with some improvement after
                  dose stabilisation. Discontinuation due to dysesthesia occurred in a small but
                  clinically significant proportion at 12mg. Full characterisation of the signal —
                  mechanism, risk factors, and reversibility — is one of the key open questions
                  that will need to be addressed in the prescribing information.
                </p>
              </div>

              <h3>
                Other Safety Signals
              </h3>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
                {[
                  [
                    "Heart rate",
                    "A modest resting heart rate increase (2\u20134 bpm) is a class-wide effect of GLP-1 receptor agonism. Observed with retatrutide at rates consistent with the class. Not considered a significant safety signal in otherwise healthy adults.",
                  ],
                  [
                    "Gallbladder events",
                    "Rapid, substantial weight loss increases the risk of cholelithiasis (gallstone formation). This is a class-wide risk that scales with the degree of weight loss achieved. Observed at rates broadly consistent with other GLP-1 agents.",
                  ],
                  [
                    "Hypoglycaemia",
                    "In patients without T2D (the TRIUMPH-4 population), hypoglycaemia risk was low and similar to placebo. In T2D populations, dose adjustments of concurrent antidiabetic medications may be required, as with all GLP-1 agents.",
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
                    <span
                      style={{
                        fontSize: "1.0625rem",
                        color: "var(--ink2)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                      }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <p>
                For complete side effect incidence rates and management guidance, see the{" "}
                <Link
                  href="/retatrutide/side-effects"
                >
                  side effects article
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 7: Comparison ── */}
            <section id="comparison" style={{ marginBottom: "80px" }}>
              <h2>
                Retatrutide vs Semaglutide and Tirzepatide
              </h2>

              <p>
                Retatrutide enters a market with two established agents. Notably, Eli Lilly itself
                manufactures tirzepatide (Zepbound/Mounjaro), making this partly an intra-company
                generational transition. The comparison is data-driven.
              </p>

              {/* Comparison table */}
              <div
                style={{
                  border: "1px solid var(--rule)",
                  marginBottom: "24px",
                  overflowX: "auto",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr 1fr 1fr",
                    minWidth: "520px",
                  }}
                >
                  {comparisonHeaders.map((h, i) => (
                    <div
                      key={h + i}
                      style={{
                        padding: "11px 14px",
                        background: "var(--paper2)",
                        borderRight: i < 3 ? "1px solid var(--rule)" : "none",
                        borderBottom: "1px solid var(--rule)",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: i === 3 ? "var(--accent)" : "var(--ink3)",
                      }}
                    >
                      {h}
                    </div>
                  ))}
                  {comparisonRows.flatMap((row, ri) =>
                    row.map((cell, ci) => (
                      <div
                        key={`${ri}-${ci}`}
                        style={{
                          padding: "12px 14px",
                          borderRight: ci < 3 ? "1px solid var(--rule)" : "none",
                          borderBottom: ri < comparisonRows.length - 1 ? "1px solid var(--rule)" : "none",
                          fontFamily: ci === 0 ? "var(--mono)" : "inherit",
                          fontSize: ci === 0 ? "10px" : "17px",
                          textTransform: ci === 0 ? "uppercase" : "none",
                          letterSpacing: ci === 0 ? "0.08em" : "normal",
                          color:
                            ci === 0
                              ? "var(--ink3)"
                              : ci === 3 && ri === 2
                              ? "var(--accent)"
                              : "var(--ink2)",
                          fontWeight: ci === 3 && ri === 2 ? 500 : 300,
                          background:
                            ci === 3 ? "rgba(26,107,60,0.025)" : "transparent",
                        }}
                      >
                        {cell}
                      </div>
                    ))
                  )}
                </div>
              </div>

              <p>
                The key takeaway: retatrutide&apos;s efficacy advantage is substantial and
                mechanistically justified. The addition of glucagon receptor agonism produces
                genuinely independent contributions — higher energy expenditure, direct hepatic fat
                clearance — that dual agonism cannot replicate. The trade-off is dysesthesia, a
                novel adverse event at 20.9% at 12mg with no analogue in the existing class.
              </p>

              <p>
                For patients who achieve adequate weight loss goals at tirzepatide doses without
                tolerability issues, escalation to retatrutide may not offer a favourable
                benefit-risk ratio. For patients who are inadequate responders to tirzepatide or
                who have significant liver disease, the clinical case for retatrutide is
                considerably stronger.
              </p>

              <p>
                See the dedicated comparison files:{" "}
                <Link
                  href="/retatrutide/vs-semaglutide"
                >
                  Retatrutide vs Semaglutide
                </Link>{" "}
                and{" "}
                <Link
                  href="/retatrutide/vs-tirzepatide"
                >
                  Retatrutide vs Tirzepatide
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 8: Dosage ── */}
            <section id="dosage" style={{ marginBottom: "80px" }}>
              <h2>
                Dosage and Administration
              </h2>

              <p>
                Retatrutide is administered as a{" "}
                <strong>
                  once-weekly subcutaneous injection
                </strong>{" "}
                — the same delivery format as semaglutide and tirzepatide. Phase III used a
                gradual dose-escalation protocol designed to minimise GI side effects during the
                adjustment period.
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
                    "Highest dose studied. 28.7% mean weight loss. Highest efficacy — and highest dysesthesia rate at approximately 20.9%.",
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
                    <span
                      style={{
                        fontSize: "1.0625rem",
                        color: "var(--ink2)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                      }}
                    >
                      {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <p>
                The commercial dosing schedule, titration steps, and pen device design have not
                been officially announced by Eli Lilly as of April 2026. Based on precedent from
                tirzepatide and semaglutide, a multi-step escalation starting at a low dose (~2mg)
                is expected. The optimal maintenance dose will likely be individualised — patients
                achieving their goals at 8mg and tolerating it well may not need to escalate to
                12mg given the higher dysesthesia burden. See the full{" "}
                <Link
                  href="/retatrutide/dosage"
                >
                  dosage guide
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 9: FDA Timeline ── */}
            <section id="fda-timeline" style={{ marginBottom: "80px" }}>
              <h2>
                FDA Approval Timeline
              </h2>

              <p>
                As of April 2026, retatrutide remains investigational. No NDA has been submitted.
                Based on Eli Lilly&apos;s public guidance, NDA submission is expected in{" "}
                <strong>
                  late 2026 or early 2027
                </strong>
                .
              </p>

              {[
                {
                  date: "2021–2022",
                  text: "Phase 2 trials in obesity and T2D populations. Nature Medicine publication of liver fat data (86% reduction).",
                  highlight: false,
                },
                {
                  date: "2022–2024",
                  text: "TRIUMPH Phase III programme launches across seven trials and five indications.",
                  highlight: false,
                },
                {
                  date: "Late 2024",
                  text: "TRIUMPH-4 primary results: 28.7% weight loss at 12mg over 68 weeks in 445 participants.",
                  highlight: false,
                },
                {
                  date: "2025–2026",
                  text: "Remaining TRIUMPH trials complete or in follow-up. NDA package assembled.",
                  highlight: false,
                },
                {
                  date: "Late 2026 / Early 2027",
                  text: "NDA submission to FDA expected (Eli Lilly guidance).",
                  highlight: true,
                },
                {
                  date: "2027",
                  text: "FDA review. Approval possible late 2027 (standard review) or mid-2027 (priority review, if granted).",
                  highlight: false,
                },
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
                Priority review designation is plausible — a 28.7% mean weight loss vs the current
                21–22% ceiling is a meaningful step. However, it is not guaranteed given that two
                effective agents already exist in the class. For detailed regulatory pathway analysis
                and PDUFA projections, see the{" "}
                <Link
                  href="/retatrutide/fda-approval"
                >
                  FDA approval article
                </Link>
                .
              </p>
            </section>

            {/* ── SECTION 10: Who Qualifies ── */}
            <section id="who-qualifies" style={{ marginBottom: "80px" }}>
              <h2>
                Who Will Qualify?
              </h2>

              <p>
                Based on precedent from the semaglutide (Wegovy) and tirzepatide (Zepbound) labels,
                retatrutide&apos;s obesity indication will likely cover:
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
                {[
                  "Adults with a BMI of ≥30 kg/m² (obesity class I or higher)",
                  "Adults with a BMI of ≥27 kg/m² plus at least one weight-related comorbidity — hypertension, dyslipidaemia, type 2 diabetes, obstructive sleep apnoea, or cardiovascular disease",
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
                      style={{
                        color: "var(--accent)",
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p>
                The T2D indication, supported by TRIUMPH-1 and TRIUMPH-5 data, may result in a
                separate label or supplemental indication — mirroring Lilly&apos;s dual-product
                strategy with tirzepatide (Mounjaro for T2D, Zepbound for obesity). A MASH
                indication depends entirely on TRIUMPH-6 histological endpoint data.
              </p>

              <p>
                Insurance coverage is the dominant real-world access variable. The GLP-1 class has
                faced persistent payer resistance for the obesity indication specifically — unlike the
                T2D indication, obesity is frequently excluded from commercial formularies or subject
                to high prior-authorisation burdens. Retatrutide will face the same structural
                barrier, and access will depend heavily on commercial pricing and formulary
                negotiations following approval.
              </p>
            </section>

            {/* ── SECTION 11: Unknowns ── */}
            <section id="unknowns" style={{ marginBottom: "80px" }}>
              <h2>
                What We Don&apos;t Yet Know
              </h2>

              <p>
                Retatrutide&apos;s data package is substantial but has meaningful gaps. These are
                the key open questions as of April 2026:
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  {
                    title: "Cardiovascular outcomes (TRIUMPH-3)",
                    body: "Whether retatrutide reduces MACE (major adverse cardiovascular events) in high-risk patients is critical for broad label expansion and payer acceptance. TRIUMPH-3 is ongoing and represents the most consequential missing data.",
                  },
                  {
                    title: "Full dysesthesia characterisation",
                    body: "Mechanism confirmation, predictive risk factors (demographics, dose, titration speed), reversibility on dose reduction or discontinuation, and long-term course. This will significantly influence how the 12mg dose is positioned in prescribing information.",
                  },
                  {
                    title: "TRIUMPH-2 T2D results",
                    body: "Full T2D data from the second dedicated diabetes trial. Pending publication and expected to contribute to the NDA filing.",
                  },
                  {
                    title: "TRIUMPH-6 MASH histology",
                    body: "Whether the 86% liver fat reduction from Phase 2 translates into MASH resolution and fibrosis regression on biopsy — the endpoints required for a dedicated MASH regulatory indication.",
                  },
                  {
                    title: "Optimal maintenance dose strategy",
                    body: "Whether patients who achieve target weight loss at 8mg need to maintain 12mg for durability, or whether a lower maintenance dose preserves the effect. Real-world dosing strategy is uncharacterised.",
                  },
                  {
                    title: "Obstructive sleep apnoea outcomes (TRIUMPH-7)",
                    body: "Following tirzepatide\u2019s precedent in SURMOUNT-OSA, results from TRIUMPH-7 could support a dedicated OSA indication.",
                  },
                  {
                    title: "Pricing and insurance coverage",
                    body: "List price, net price after rebates, and formulary positioning relative to tirzepatide and semaglutide. The most important practical variable for patient access post-approval.",
                  },
                  {
                    title: "Drug-drug interactions in polypharmacy",
                    body: "Real-world patients with obesity and T2D are typically on multiple medications. The DDI profile in complex polypharmacy scenarios remains less characterised than the controlled trial data suggests.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    style={{ padding: "16px 0", borderBottom: "1px solid var(--rule)", marginBottom: 0 }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "17px",
                        color: "var(--ink)",
                        fontWeight: 400,
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "1.0625rem",
                        color: "var(--ink2)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── SECTION 12: FAQ ── */}
            <section id="faq" style={{ marginBottom: "80px" }}>
              <h2>
                Frequently Asked Questions
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    open
                    style={{ borderBottom: "1px solid var(--rule)" }}
                  >
                    <summary
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "1.15rem",
                        color: "var(--ink)",
                        fontWeight: 400,
                        padding: "16px 0",
                        cursor: "pointer",
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <span>{item.q}</span>
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "12px",
                          color: "var(--ink3)",
                          flexShrink: 0,
                        }}
                      >
                        ▾
                      </span>
                    </summary>
                    <p style={{ padding: "0 0 18px 0", margin: 0 }}>
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── DISCLAIMER ── */}
            <div
              style={{
                marginTop: "48px",
                padding: "20px 24px",
                borderTop: "2px solid var(--rule)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--ink3)",
                  marginBottom: "8px",
                }}
              >
                Medical Disclaimer
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--ink3)",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                The content on this page is for informational and educational purposes only. It does
                not constitute medical advice, diagnosis, or treatment. Retatrutide is an
                investigational drug that is not approved by the FDA or any other regulatory
                authority. Clinical trial results are preliminary and subject to change as additional
                data becomes available. Always consult a qualified healthcare provider before making
                any decisions about medications, weight management, or health conditions. Peptide
                File does not sell, distribute, or endorse the purchase of any investigational
                compounds.
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
                Last updated: April 2026. This file will be updated as new TRIUMPH trial results
                are published.
              </p>
            </div>

          </article>
        </div>
      </div>

      <NewsletterSignup />

      <style>{`
        @media (max-width: 1024px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }
          .toc-sidebar {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .key-data-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .key-data-grid > div:nth-child(2n) {
            border-right: none !important;
          }
        }
        @media (max-width: 600px) {
          .key-data-grid {
            grid-template-columns: 1fr !important;
          }
          .key-data-grid > div {
            border-right: none !important;
          }
        }
        details summary::-webkit-details-marker { display: none; }
        details summary { user-select: none; }
        .toc-sidebar a:hover {
          color: var(--accent) !important;
          border-left-color: var(--accent) !important;
        }
      `}</style>
    </>
  );
}
