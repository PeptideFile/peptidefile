import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "The GLP-1 File — GLP-1 Peptides Explained (2026) | Peptide File",
  description:
    "GLP-1 receptor agonists explained: mechanism, the full class from liraglutide to retatrutide, weight loss data up to 28.7%, safety, and the 2026 pipeline.",
  alternates: { canonical: "https://peptidefile.com/glp-1" },
  openGraph: {
    title: "The GLP-1 File — GLP-1 Peptides Explained (2026)",
    description:
      "Mechanism, the full GLP-1 agonist class, weight loss data, safety, and the 2026 pipeline. Evidence-rated review.",
    url: "https://peptidefile.com/glp-1",
  },
  twitter: {
    card: "summary_large_image",
    title: "The GLP-1 File — GLP-1 Peptides Explained (2026)",
    description:
      "Mechanism, the full GLP-1 agonist class, weight loss data, safety, and the 2026 pipeline. Evidence-rated review.",
  },
};

const tocSections = [
  { id: "what-is-glp-1", label: "What Is GLP-1?" },
  { id: "how-it-works", label: "How GLP-1 Agonists Work" },
  { id: "the-class", label: "The GLP-1 Agonist Class" },
  { id: "weight-loss-data", label: "Weight Loss Data" },
  { id: "glp-1-vs-gip", label: "GLP-1 vs GIP" },
  { id: "triple-vs-dual", label: "Triple vs Dual Agonism" },
  { id: "safety", label: "Safety Profile" },
  { id: "natural-boosters", label: "Natural GLP-1 Boosters" },
  { id: "practical", label: "Practical Considerations" },
  { id: "pipeline", label: "The 2026 Pipeline" },
  { id: "unknowns", label: "What We Don't Know Yet" },
  { id: "faq", label: "FAQ" },
];

const clusterLinks = [
  { href: "/glp-1/how-glp-1-agonists-work", label: "How GLP-1 Agonists Work" },
  { href: "/glp-1/comparison-chart-2026", label: "Comparison Chart 2026" },
  { href: "/glp-1/natural-boosters", label: "Natural GLP-1 Boosters" },
  { href: "/glp-1/vs-gip", label: "GLP-1 vs GIP" },
  { href: "/glp-1/triple-vs-dual-agonism", label: "Triple vs Dual Agonism" },
  { href: "/glp-1/semaglutide-vs-tirzepatide", label: "Semaglutide vs Tirzepatide" },
  { href: "/glp-1/safety-profile", label: "GLP-1 Safety Profile" },
];

const keyStats = [
  { stat: "28.7%", label: "Top weight loss (retatrutide 12mg)" },
  { stat: "22.5%", label: "Tirzepatide 15mg, SURMOUNT-1" },
  { stat: "14.9%", label: "Semaglutide 2.4mg, STEP 1" },
  { stat: "8.0%", label: "Liraglutide 3.0mg, SCALE" },
  { stat: "20%", label: "MACE reduction in SELECT" },
  { stat: "5+", label: "Approved GLP-1 agonists" },
  { stat: "L-cells", label: "Endogenous source" },
  { stat: "2027", label: "Retatrutide expected approval" },
];

const classRows = [
  ["Liraglutide", "GLP-1", "Daily SC", "8.0% (SCALE, 56wk)", "Approved 2010"],
  ["Semaglutide", "GLP-1", "Weekly SC / Daily oral", "14.9% (STEP 1, 68wk)", "Approved 2017"],
  ["Dulaglutide", "GLP-1", "Weekly SC", "2 to 5%", "Approved 2014"],
  ["Tirzepatide", "GLP-1 / GIP", "Weekly SC", "22.5% (SURMOUNT-1, 72wk)", "Approved 2022"],
  ["Retatrutide", "GLP-1 / GIP / Glucagon", "Weekly SC", "28.7% (TRIUMPH-4, 68wk)", "Phase III"],
  ["Orforglipron", "GLP-1 (oral non-peptide)", "Daily oral", "14.7% (Phase II, 36wk)", "Phase III"],
];

const comparisonRows = [
  ["Mechanism", "GLP-1 only", "GLP-1 + GIP", "GLP-1 + GIP + Glucagon"],
  ["Mean weight loss", "~15% (STEP 1)", "~22% (SURMOUNT-1)", "28.7% (TRIUMPH-4)"],
  ["Head-to-head", "13.7% in SURMOUNT-5", "20.2% in SURMOUNT-5", "Pending"],
  ["CV outcomes", "20% MACE reduction (SELECT)", "Pending (SURMOUNT-MMO)", "Pending (TRIUMPH-3)"],
  ["GI side effects", "74.2% in STEP 1", "Comparable, possibly lower", "Comparable"],
  ["Novel adverse events", "—", "—", "Dysesthesia 20.9% at 12mg"],
  ["FDA status", "Approved", "Approved", "NDA expected 2026/27"],
];

const pipelineItems = [
  {
    date: "Late 2026",
    text: "Retatrutide NDA expected from Eli Lilly. Multiple TRIUMPH Phase III readouts continuing through 2026.",
    highlight: true,
  },
  {
    date: "2026",
    text: "Orforglipron Phase III readouts expected (ATTAIN obesity programme). First oral non-peptide GLP-1 agonist.",
    highlight: false,
  },
  {
    date: "2026",
    text: "CagriSema (semaglutide + cagrilintide amylin co-agonist) Phase III REDEFINE readouts. Novo Nordisk's response to tirzepatide.",
    highlight: false,
  },
  {
    date: "2026 / 2027",
    text: "Survodutide (GLP-1 + glucagon dual, Boehringer Ingelheim) Phase III SYNCHRONIZE readouts.",
    highlight: false,
  },
  {
    date: "2027",
    text: "MariTide (Amgen, GLP-1 agonist + GIP receptor antagonist antibody) Phase III readouts. Monthly dosing claimed.",
    highlight: false,
  },
  {
    date: "2027+",
    text: "Retatrutide FDA approval and launch expected. Mid-2027 with priority review, late 2027 standard.",
    highlight: true,
  },
];

const faqs = [
  {
    q: "What does GLP-1 actually do in the body?",
    a: "GLP-1 (glucagon-like peptide-1) is an incretin hormone released by intestinal L-cells after eating. It stimulates glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and acts on hypothalamic neurons to reduce appetite. The combination of these actions is why GLP-1 receptor agonists produce both glycaemic control and weight loss.",
  },
  {
    q: "Are GLP-1 peptides the same thing as Ozempic or Wegovy?",
    a: "Ozempic and Wegovy are brand names for semaglutide, one specific GLP-1 receptor agonist. The class includes liraglutide (Saxenda, Victoza), semaglutide (Ozempic, Wegovy, Rybelsus), dulaglutide (Trulicity), and the dual GLP-1/GIP agonist tirzepatide (Mounjaro, Zepbound). Retatrutide is a Phase III triple agonist that adds glucagon receptor activity.",
  },
  {
    q: "How much weight loss is realistic on a GLP-1 agonist?",
    a: "Trial averages by compound: liraglutide 8.0% (SCALE, 56 weeks), semaglutide 14.9% (STEP 1, 68 weeks), tirzepatide 22.5% (SURMOUNT-1 at 15mg, 72 weeks), retatrutide 28.7% (TRIUMPH-4 at 12mg, 68 weeks). Real-world weight loss typically runs 60 to 75% of trial figures because of adherence, dose titration, and access issues.",
  },
  {
    q: "What is the difference between GLP-1, GIP, and glucagon agonism?",
    a: "GLP-1 reduces appetite and improves insulin response. GIP (glucose-dependent insulinotropic polypeptide) is the second incretin and adds insulin sensitivity benefits and possibly improved nausea tolerability. Glucagon increases energy expenditure and lipolysis. Each receptor adds roughly 5 to 7 percentage points of weight loss over the previous step.",
  },
  {
    q: "Are natural ways to boost GLP-1 effective?",
    a: "Endogenous GLP-1 release rises modestly with protein-rich meals, soluble fibre, fermented foods, and short-chain fatty acids from gut microbiota. The effect size is real but small relative to pharmacological agonism. Diet alone cannot reproduce the 14 to 28% weight loss seen in trials. See the natural boosters cluster article for the actual evidence.",
  },
  {
    q: "Are GLP-1 agonists safe long term?",
    a: "Cardiovascular safety is established. The SELECT trial (semaglutide, 17,604 patients) showed a 20% reduction in major adverse cardiovascular events in patients with established cardiovascular disease. Common side effects are gastrointestinal: nausea, vomiting, constipation. Pancreatitis is a known but rare signal. Thyroid C-cell findings in rodents prompted boxed warnings, though human data has not confirmed the risk.",
  },
  {
    q: "Can GLP-1 agonists be used without obesity?",
    a: "Approved indications cover type 2 diabetes (most agonists), chronic weight management at BMI thresholds (semaglutide 2.4mg, liraglutide 3.0mg, tirzepatide), cardiovascular risk reduction (semaglutide via SELECT), obstructive sleep apnoea (tirzepatide via SURMOUNT-OSA), and chronic kidney disease (semaglutide via FLOW). Off-label use in lower BMIs is widespread but not labelled.",
  },
  {
    q: "Why is retatrutide considered the next step beyond tirzepatide?",
    a: "Retatrutide adds glucagon receptor agonism to the GLP-1 plus GIP combination already used by tirzepatide. The glucagon component drives energy expenditure through hepatic and brown adipose tissue activity. TRIUMPH-4 reported 28.7% weight loss at 12mg over 68 weeks. That is the strongest figure ever recorded for an obesity drug.",
  },
  {
    q: "Will compounded semaglutide remain available?",
    a: "FDA designations of semaglutide and tirzepatide as resolved shortages in late 2024 and early 2025 ended the legal basis for routine compounding under section 503A. Specific patient-need exceptions remain. The compounding pharmacy market has shifted toward research peptides and peptide blends, which sit in a different regulatory category.",
  },
  {
    q: "What is coming after retatrutide?",
    a: "Phase II and III pipelines now include orforglipron (oral, non-peptide GLP-1, Lilly), CagriSema (semaglutide plus cagrilintide amylin co-agonist, Novo Nordisk), survodutide (GLP-1 plus glucagon, Boehringer Ingelheim), MariTide (GLP-1 antibody plus GIP antagonist, Amgen), and several oral peptide candidates. Multiple Phase III readouts are expected through 2026 and 2027.",
  },
];

const articleJsonLd = articleSchema({
  headline: "The GLP-1 File — GLP-1 Peptides Explained (2026)",
  description:
    "Comprehensive review of GLP-1 receptor agonists: mechanism, the full class from liraglutide to retatrutide, weight loss data up to 28.7%, cardiovascular outcomes, safety, and the 2026 pipeline.",
  datePublished: "2026-04-16",
  dateModified: "2026-04-16",
  authorName: "Mark Boreland",
  authorUrl: "https://peptidefile.com/author",
  publisherName: "Peptide File",
  image: "https://peptidefile.com/og-glp-1.png",
});

const faqJsonLd = faqSchema(faqs);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", item: "https://peptidefile.com" },
  { name: "GLP-1", item: "https://peptidefile.com/glp-1" },
]);

export default function GLP1Page() {
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
          <span>Incretin Hormones</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>GLP-1 Receptor Agonists</span>
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

        <h1 className="article-title">The GLP-1 File</h1>

        <p className="page-intro">
          GLP-1 receptor agonists changed obesity medicine. The class moved from a niche type 2 diabetes treatment to the most-prescribed weight loss therapy in history, and the efficacy ceiling keeps climbing. Liraglutide produced 8% weight loss. Semaglutide doubled that to 14.9%. Tirzepatide hit 22.5%. Retatrutide has now reported 28.7%. This file covers the mechanism, the full agonist class, weight loss outcomes, the safety picture, and the 2026 pipeline.
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
          <span>~4,500 words</span>
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

          {/* ── SECTION 1: What Is GLP-1 ── */}
          <section id="what-is-glp-1" style={{ marginBottom: "80px" }}>
            <h2>What Is GLP-1?</h2>

            <p>
              Glucagon-like peptide-1 (GLP-1) is a 30-amino-acid incretin hormone released by
              intestinal L-cells in response to nutrient intake. It is cleaved from the proglucagon
              gene product, the same precursor that produces glucagon and GLP-2. Postprandial
              GLP-1 secretion peaks within 15 to 30 minutes of eating and falls back to baseline
              within an hour.
            </p>

            <p>
              Endogenous GLP-1 has a half-life of roughly 2 minutes. The native peptide is rapidly
              degraded by dipeptidyl peptidase-4 (DPP-4) at the second N-terminal amino acid. This
              is why DPP-4 inhibitors (sitagliptin, linagliptin) work as a separate diabetes drug
              class: they prolong endogenous GLP-1 by blocking its degradation, though to a much
              smaller effect than receptor agonism.
            </p>

            <p>
              The receptor for GLP-1 (GLP-1R) is a class B G-protein-coupled receptor expressed on
              pancreatic beta cells, gastric smooth muscle, cardiac myocytes, vagal afferents, and
              several hypothalamic and brainstem nuclei. The distribution of the receptor is what
              gives the class its broad effects beyond glycaemic control. Receptor agonism in the
              arcuate nucleus and area postrema is the basis of the appetite-suppressing and
              nausea-inducing effects. Receptor agonism in cardiac and vascular tissue is the basis
              of the cardiovascular outcomes seen in SELECT and similar trials.
            </p>

            <p>
              A GLP-1 receptor agonist is any molecule that binds and activates GLP-1R. The class
              includes peptide agonists (liraglutide, semaglutide, tirzepatide, retatrutide), oral
              non-peptide small molecules (orforglipron, in late-stage trials), and
              antibody-conjugated agonists (MariTide). The biological effect is driven by receptor
              binding affinity, plasma half-life, and tissue distribution. Engineering for half-life
              through fatty acid conjugation (semaglutide, liraglutide) or Fc-fusion (dulaglutide,
              retatrutide) is what enables once-weekly dosing.
            </p>

            <p>
              The historical arc is worth noting. Exendin-4, the active component of exenatide, was
              isolated from the venom of the Gila monster (Heloderma suspectum) by John Eng at the
              Bronx VA Medical Center in 1992. Exendin-4 shares 53% sequence identity with native
              human GLP-1 but resists DPP-4 cleavage, giving it a much longer half-life. Exenatide
              became the first approved GLP-1 receptor agonist in 2005, dosed twice daily.
              Liraglutide followed in 2010 with the addition of a fatty acid side chain that bound
              albumin, extending half-life to 13 hours. Semaglutide, approved in 2017, used a
              longer fatty acid chain plus amino acid substitutions to achieve a 7-day half-life.
              Each engineering advance was incremental, but together they took the class from
              twice-daily injections producing modest glycaemic improvement to once-weekly
              injections producing transformative weight loss.
            </p>
          </section>

          {/* ── SECTION 2: How It Works ── */}
          <section id="how-it-works" style={{ marginBottom: "80px" }}>
            <h2>How GLP-1 Agonists Work</h2>

            <p>
              The mechanism is multi-organ. GLP-1 agonists hit the pancreas, gut, brain, and
              cardiovascular system simultaneously, which is why the clinical picture spans
              glycaemic control, weight loss, and reduced cardiovascular events from a single drug.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0" }}>
              {[
                {
                  label: "Pancreas (glucose-dependent insulin)",
                  text: "GLP-1R agonism stimulates insulin secretion from beta cells only when blood glucose is elevated. The glucose dependency is critical: insulin release rises only at hyperglycaemia, which is why the class carries low intrinsic hypoglycaemia risk in non-diabetic patients. GLP-1 also suppresses glucagon from alpha cells, reducing hepatic glucose output. Net effect: HbA1c reductions of 1.0 to 1.8 percentage points in T2D trials.",
                },
                {
                  label: "Stomach (delayed gastric emptying)",
                  text: "GLP-1 agonism slows gastric emptying. Food remains in the stomach longer, blunting the postprandial glucose excursion and prolonging satiety. The slowed emptying is also responsible for much of the class's side effect profile: nausea, vomiting, and early satiety affect 20 to 50% of patients during dose titration.",
                },
                {
                  label: "Brain (hypothalamic appetite suppression)",
                  text: "The hypothalamic arcuate nucleus and area postrema express GLP-1 receptors. Agonism activates POMC neurons (anorexigenic) and inhibits NPY/AgRP neurons (orexigenic), producing sustained reductions in appetite and food preference. fMRI studies show reduced reward-system activation in response to high-calorie food cues. This is the neural substrate of the 'food noise' reduction patients describe.",
                },
                {
                  label: "Cardiovascular (direct vascular effects)",
                  text: "GLP-1 receptors are expressed on cardiac myocytes and vascular endothelium. Agonism produces modest blood pressure reduction, lipid improvements, and direct anti-inflammatory effects. SELECT confirmed a 20% MACE reduction over a mean 39.8 months in patients with established cardiovascular disease and BMI ≥27.",
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
              The full mechanistic picture, including the GIP and glucagon arms relevant to dual
              and triple agonists, is covered in the dedicated{" "}
              <Link href="/glp-1/how-glp-1-agonists-work">how GLP-1 agonists work article</Link>.
            </p>
          </section>

          {/* ── SECTION 3: The Class ── */}
          <section id="the-class" style={{ marginBottom: "80px" }}>
            <h2>The GLP-1 Agonist Class</h2>

            <p>
              The class spans five approved compounds plus retatrutide in late Phase III, with
              orforglipron in Phase III as the first oral non-peptide candidate. The progression
              maps onto receptor coverage: GLP-1 alone, then GLP-1 plus GIP, then GLP-1 plus GIP
              plus glucagon. Each step adds approximately 5 to 7 percentage points of weight loss
              over the previous one.
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
                    {["Compound", "Receptors", "Route", "Weight loss (trial)", "Status"].map((h) => (
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
                  {classRows.map((row, ri) => (
                    <tr
                      key={ri}
                      style={{
                        borderBottom: ri < classRows.length - 1 ? "1px solid var(--rule)" : "none",
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
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "var(--serif)",
                          fontSize: "16px",
                          color: row[0] === "Retatrutide" ? "var(--accent)" : "var(--ink)",
                          fontWeight: row[0] === "Retatrutide" ? 500 : 400,
                        }}
                      >
                        {row[3]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink3)", fontWeight: 300, fontSize: "13px" }}>
                        {row[4]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              For the full side-by-side including dose ranges, half-life, brand names, and cost in
              major markets, see the{" "}
              <Link href="/glp-1/comparison-chart-2026">GLP-1 comparison chart for 2026</Link>.
            </p>
          </section>

          {/* ── SECTION 4: Weight Loss Data ── */}
          <section id="weight-loss-data" style={{ marginBottom: "80px" }}>
            <h2>Weight Loss: What the Data Shows</h2>

            <p>
              Three points are worth holding in mind when reading trial data across the class.
              First, the comparator matters. STEP 1 compared semaglutide 2.4mg against placebo in
              patients with obesity but without diabetes. SURMOUNT-1 used the same design for
              tirzepatide. The headline efficacy figures are not directly comparable across
              compounds without correcting for trial design, baseline BMI, and duration. SURMOUNT-5
              was the first true head-to-head of semaglutide vs tirzepatide and confirmed the
              efficacy ranking suggested by indirect comparison.
            </p>

            <h3>Trial Headlines</h3>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                ["Liraglutide 3.0mg", "8.0% weight loss at 56 weeks. SCALE Obesity and Prediabetes (Pi-Sunyer et al., NEJM 2015, PMID 26132939). The first GLP-1 agonist to secure an obesity indication."],
                ["Semaglutide 2.4mg", "14.9% weight loss at 68 weeks. STEP 1 (Wilding et al., NEJM 2021, PMID 33567185). The trial that broke the 10% ceiling and reset class expectations."],
                ["Tirzepatide 15mg", "22.5% weight loss at 72 weeks. SURMOUNT-1 (Jastreboff et al., NEJM 2022, PMID 35658024). First dual GLP-1/GIP agonist; first time the 20% line was crossed."],
                ["SURMOUNT-5 head-to-head", "Tirzepatide 20.2% vs semaglutide 13.7% at 72 weeks (Aronne et al., NEJM 2025). The first direct comparison of the two leading approved agents."],
                ["Retatrutide 12mg", "28.7% weight loss at 68 weeks. TRIUMPH-4 (Phase III, December 2025 data). The strongest weight loss ever recorded in a randomised obesity trial."],
              ].map(([compound, text]) => (
                <li
                  key={compound}
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
                      minWidth: "180px",
                      flexShrink: 0,
                    }}
                  >
                    {compound}
                  </span>
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75 }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <h3>The Real-World Discount</h3>

            <p>
              Trial populations were typically high-BMI (mean BMI 35 to 40) and excluded patients
              with significant comorbidities or polypharmacy. Real-world populations include more
              variability in baseline BMI, more diabetes, more medication interactions, and more
              variable adherence. The 60 to 75% real-world adherence rule is a useful heuristic across the class. Real-world weight loss runs 60 to 75% of trial figures.
            </p>

            <h3>Cardiovascular Benefit, Beyond Weight</h3>

            <p>
              The GLP-1 class has produced cardiovascular outcomes data well beyond what FDA approval
              originally required. The 2008 FDA cardiovascular safety guidance for diabetes drugs
              was meant to ensure new drugs did not increase risk. The class has now produced
              multiple trials demonstrating cardiovascular benefit: LEADER (liraglutide, 2016),
              SUSTAIN-6 (semaglutide diabetes, 2016), REWIND (dulaglutide, 2019), and SELECT
              (semaglutide in obesity without diabetes, 2023). The transition from a safety
              requirement to an efficacy indication has reshaped how the class is prescribed in
              patients with established cardiovascular disease.
            </p>
          </section>

          {/* ── SECTION 5: GLP-1 vs GIP ── */}
          <section id="glp-1-vs-gip" style={{ marginBottom: "80px" }}>
            <h2>GLP-1 vs GIP</h2>

            <p>
              GIP (glucose-dependent insulinotropic polypeptide) is the second incretin hormone.
              It is released by K-cells in the duodenum and jejunum, while GLP-1 is released by
              L-cells primarily in the ileum and colon. GIP and GLP-1 together account for the
              incretin effect: the observation that oral glucose produces a larger insulin response
              than intravenous glucose at matched plasma glucose levels.
            </p>

            <p>
              GIP receptor (GIPR) biology was historically considered less interesting than GLP-1R.
              GIP appeared to have minimal effect on appetite and was thought to be ineffective in
              type 2 diabetes (GIP signalling is reduced in diabetic patients). Tirzepatide changed
              that view. Combined GLP-1R and GIPR agonism produced weight loss exceeding what
              semaglutide could achieve at any tolerable dose.
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
                Open Question
              </p>
              <p style={{ margin: 0 }}>
                Whether GIP receptor agonism or GIP receptor antagonism is the better approach
                remains unresolved. Tirzepatide is a GIPR agonist. Amgen's MariTide is a GIPR
                antagonist combined with GLP-1 agonism, and has reported competitive weight loss
                in early trials. The biology is not fully understood, and Phase III data through
                2026 and 2027 will help settle it.
              </p>
            </div>

            <p>
              The deep dive on receptor biology, GIP knockout mouse data, and the unresolved
              question of agonism versus antagonism is in the{" "}
              <Link href="/glp-1/vs-gip">GLP-1 vs GIP cluster article</Link>.
            </p>
          </section>

          {/* ── SECTION 6: Triple vs Dual ── */}
          <section id="triple-vs-dual" style={{ marginBottom: "80px" }}>
            <h2>Triple vs Dual Agonism</h2>

            <p>
              Adding glucagon receptor agonism to GLP-1 plus GIP introduces a third mechanism:
              increased energy expenditure. GLP-1 and GIP together reduce energy intake. Glucagon
              raises energy expenditure through hepatic glucose output, lipolysis, and brown
              adipose tissue activation. The combined effect is a larger negative energy balance
              than dual agonism can achieve.
            </p>

            <p>
              The risk with glucagon agonism is hyperglycaemia. Glucagon raises blood glucose by definition. Retatrutide solves this by combining glucagon agonism with strong GLP-1
              plus GIP agonism, so the insulinotropic effect of the incretin component dominates.
              TRIUMPH-2 data in type 2 diabetes confirmed glycaemic improvement despite the
              glucagon component, with HbA1c reductions of around 2.0 percentage points.
            </p>

            <p>
              The 28.7% figure from TRIUMPH-4 is roughly 6 percentage points above tirzepatide's
              22.5% in SURMOUNT-1 (with differences in trial population and duration noted). That
              gap is consistent with the pattern of approximately 5 to 7 percentage points added
              per receptor target. Whether this pattern continues with quad agonists (GLP-1, GIP,
              glucagon, plus a fourth target like amylin or PYY) is the open question for the next
              decade.
            </p>

            <p>
              Full analysis, the trial data on glucagon mono-agonism, and the question of whether
              a quad agonist makes biological sense are covered in the{" "}
              <Link href="/glp-1/triple-vs-dual-agonism">triple vs dual agonism cluster</Link>.
              For the head-to-head specifically on retatrutide vs the dual agonist class, see{" "}
              <Link href="/retatrutide/vs-tirzepatide">retatrutide vs tirzepatide</Link>.
            </p>
          </section>

          {/* ── SECTION 7: Safety ── */}
          <section id="safety" style={{ marginBottom: "80px" }}>
            <h2>Safety Profile</h2>

            <p>
              After almost two decades of post-marketing data, the safety picture is reasonably
              settled. The common side effects are gastrointestinal: nausea, vomiting, diarrhoea,
              constipation. These affect 20 to 50% of patients during dose titration and typically
              resolve within 4 to 8 weeks of dose stabilisation. Slow dose escalation reduces
              incidence and severity.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                [
                  "Pancreatitis",
                  "Known but rare signal. Background incidence in T2D is elevated regardless of treatment. Meta-analyses have not shown significant increases over comparators, though FDA labels carry warnings.",
                ],
                [
                  "Gallbladder events",
                  "Cholecystitis and cholelithiasis are more common with GLP-1 agonists than placebo, particularly with rapid weight loss. Mechanism is partly the weight loss itself, partly direct GI effects.",
                ],
                [
                  "Thyroid C-cell signal",
                  "Tumours observed in rodent toxicology studies of liraglutide and exenatide, leading to boxed warnings about medullary thyroid carcinoma and contraindications in MTC or MEN 2. Human data over 15 years has not confirmed an increased risk.",
                ],
                [
                  "Cardiovascular outcome",
                  "Net positive across the class. SELECT (semaglutide), LEADER (liraglutide), REWIND (dulaglutide), and SUSTAIN-6 all reported MACE reductions in high-risk populations. The class moved from a CV safety requirement to a CV benefit indication within a decade.",
                ],
                [
                  "Suicidal ideation",
                  "EMA and FDA review in 2023 to 2024 did not find a causal link. Monitoring continues. Trial populations report rates similar to placebo.",
                ],
                [
                  "Dysesthesia (retatrutide-specific)",
                  "Reported in 20.9% of retatrutide 12mg patients in TRIUMPH-4. The first time this signal has emerged in the class. Not seen with semaglutide or tirzepatide. Linked to glucagon receptor activity.",
                ],
                [
                  "Lean mass loss",
                  "Approximately 40% of total weight loss came from lean mass in DXA substudies of STEP 1, with 60% from fat. Proportions are similar to bariatric surgery and dietary weight loss at matched rate. Trial fracture rates have not been elevated, but most trial populations were younger than the typical osteoporosis-risk demographic.",
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
              The full safety synthesis, including comparisons of dose-titration tolerability across
              compounds, is in the{" "}
              <Link href="/glp-1/safety-profile">GLP-1 safety profile cluster article</Link>.
            </p>
          </section>

          {/* ── SECTION 8: Natural Boosters ── */}
          <section id="natural-boosters" style={{ marginBottom: "80px" }}>
            <h2>Natural GLP-1 Boosters</h2>

            <p>
              The endogenous GLP-1 axis is sensitive to diet composition. Reliable stimulators of
              postprandial GLP-1 secretion include protein-rich meals (especially whey and casein,
              with a 30 to 50% rise in postprandial GLP-1), soluble fibre (oats, legumes, psyllium,
              with secondary effects via short-chain fatty acid production by gut microbiota),
              monounsaturated fats (olive oil, avocado), and fermented foods (some evidence for
              kimchi, kefir, and yoghurt). Bitter compounds (gentian, hops, coffee) acutely raise
              GLP-1 via taste receptor signalling in the gut.
            </p>

            <p>
              The honest framing: these effects are real but modest. A protein-rich meal might
              double postprandial GLP-1 from baseline. A weekly semaglutide injection produces
              sustained plasma agonist levels roughly 1,000 times higher than physiological
              postprandial peaks. The clinical effect sizes match: diet alone produces 3 to 5%
              weight loss in well-conducted trials over a year. GLP-1 agonists produce 8 to 28%
              over similar timeframes.
            </p>

            <p>
              For most readers the practical takeaway is that diet composition matters for
              endogenous GLP-1 in the same way that walking matters for cardiovascular health: it
              is genuinely beneficial and worth doing, but it does not substitute for the
              pharmacological intervention when the latter is indicated. The full evidence rundown
              is in the{" "}
              <Link href="/glp-1/natural-boosters">natural GLP-1 boosters cluster</Link>.
            </p>
          </section>

          {/* ── SECTION 9: Practical Considerations ── */}
          <section id="practical" style={{ marginBottom: "80px" }}>
            <h2>Practical Considerations</h2>

            <h3>Dosing and Titration</h3>

            <p>
              Every approved GLP-1 agonist requires gradual dose titration, with increases every 4
              weeks until the target dose is reached. Semaglutide 2.4mg starts at 0.25mg and steps
              through 0.5, 1.0, 1.7 to 2.4. Tirzepatide steps through 2.5, 5, 7.5, 10, 12.5, 15.
              Skipping titration steps increases GI side effect severity and discontinuation risk.
            </p>

            <h3>Cost and Access</h3>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                ["Wegovy 2.4mg", "~$1,350 / month US list price"],
                ["Zepbound 5–15mg", "~$1,060 / month US list price"],
                ["Ozempic 2.0mg", "~$1,000 / month US list price"],
                ["Mounjaro 15mg", "~$1,070 / month US list price"],
                ["UK / EU prices", "Substantially lower under negotiated reimbursement"],
              ].map(([drug, price]) => (
                <li
                  key={drug}
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
                    {drug}
                  </span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--accent)", fontWeight: 500 }}>
                    {price}
                  </span>
                </li>
              ))}
            </ul>

            <p>
              Insurance coverage for obesity (as opposed to diabetes) varies widely and is the
              dominant access barrier in the US. The same structural barriers will apply to
              retatrutide post-approval.
            </p>

            <h3>Compounded Versions</h3>

            <p>
              Compounded semaglutide and tirzepatide flooded the US market during the 2022 to 2024
              shortages. The FDA designated both as resolved shortages in late 2024 and early 2025,
              removing the legal basis for routine 503A compounding. Specific patient-need
              exceptions remain. The compounding pharmacy market has shifted toward research
              peptides and peptide blends, which sit in a different regulatory category. Quality
              and purity vary widely; independent third-party testing is the only way to verify
              what is in any compounded product.
            </p>

            <h3>Discontinuation and Weight Regain</h3>

            <p>
              Stopping a GLP-1 agonist results in significant weight regain. The STEP 1 extension
              trial showed that participants who stopped semaglutide regained roughly two-thirds of
              their lost weight within one year. This is consistent with framing obesity as a
              chronic disease requiring ongoing treatment, similar to hypertension or
              hyperlipidaemia. Maintenance dosing rather than discontinuation is the current
              clinical norm for patients who tolerate the drug.
            </p>
          </section>

          {/* ── SECTION 10: The 2026 Pipeline ── */}
          <section id="pipeline" style={{ marginBottom: "80px" }}>
            <h2>The 2026 Pipeline</h2>

            <p>
              The next generation of incretin therapies is in late-stage trials. Multiple readouts
              will arrive through 2026 and 2027, and the efficacy ceiling continues to climb.
            </p>

            {pipelineItems.map((item, i) => (
              <div
                key={item.date + i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  borderBottom: i < pipelineItems.length - 1 ? "1px solid var(--rule)" : "none",
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
              For the head-to-head on the two leading approved compounds, see{" "}
              <Link href="/glp-1/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</Link>. For
              the deep dive on the leading Phase III candidate, see the{" "}
              <Link href="/retatrutide">Retatrutide File</Link>.
            </p>
          </section>

          {/* ── SECTION 11: Comparison ── */}
          <section style={{ marginBottom: "80px" }}>
            <h2>Mono vs Dual vs Triple Agonism</h2>

            <p>
              The summary view of the class progression. Each receptor target adds clinically
              meaningful weight loss but introduces additional complexity in the safety profile.
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
                    {["", "Mono (semaglutide)", "Dual (tirzepatide)", "Triple (retatrutide)"].map((h, i) => (
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
                                : ci === 3 && (ri === 1 || ri === 2)
                                ? "var(--accent)"
                                : "var(--ink2)",
                            fontWeight: ci === 3 && (ri === 1 || ri === 2) ? 500 : 300,
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
          </section>

          {/* ── SECTION 12: Unknowns ── */}
          <section id="unknowns" style={{ marginBottom: "80px" }}>
            <h2>What We Don&apos;t Yet Know</h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  title: "Whether GIPR agonism or antagonism is the better approach",
                  body: "Tirzepatide (GIPR agonist) and MariTide (GIPR antagonist) both work. The biology is unsettled. MariTide Phase III readouts in 2027 should help.",
                },
                {
                  title: "Long-term safety at high doses",
                  body: "Most safety data is at lower doses or shorter durations. Decades-long maintenance dosing on retatrutide-class drugs is uncharted.",
                },
                {
                  title: "Cardiovascular outcomes for tirzepatide and retatrutide",
                  body: "SURMOUNT-MMO (tirzepatide) and TRIUMPH-3 (retatrutide) are ongoing. Whether the class CV benefit extends to dual and triple agonists is not yet confirmed in pivotal trials.",
                },
                {
                  title: "Whether the efficacy ceiling continues to climb",
                  body: "Quad agonists (GLP-1 + GIP + glucagon + amylin or PYY) are in preclinical work. Whether adding a fourth target adds weight loss or hits diminishing returns is open.",
                },
                {
                  title: "Bone density and fracture risk in older patients",
                  body: "Trial populations skew younger than the typical osteoporosis-risk demographic. Long-term effects of substantial lean mass loss in older adults remain under-characterised.",
                },
                {
                  title: "Effects in adolescents and pregnancy",
                  body: "Adolescent indications are emerging (semaglutide approved for ≥12y in some markets). Pregnancy data is limited and the class is generally avoided.",
                },
                {
                  title: "Optimal maintenance dose strategy",
                  body: "Whether patients can step down from peak dose to a maintenance dose without losing efficacy. Trial protocols use peak dose throughout; real-world dose-reduction data is limited.",
                },
                {
                  title: "Effects on neurodegenerative and addiction outcomes",
                  body: "GLP-1 agonism is being trialled in Alzheimer's disease (evoke trial), alcohol use disorder, and other addiction phenotypes. Early signals are positive but preliminary.",
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

          {/* ── SECTION 13: FAQ ── */}
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
              not constitute medical advice, diagnosis, or treatment. GLP-1 receptor agonists are
              prescription medications with significant side effects and contraindications.
              Retatrutide is investigational and not approved by the FDA or any other regulatory
              body. Compounded versions of GLP-1 agonists carry quality and purity risks that vary
              by source. Always consult a qualified healthcare provider before making any decisions
              about medications, weight management, or health conditions. Peptide File does not
              sell, distribute, or endorse the purchase of any investigational compounds.
            </p>
            <p style={{ fontSize: "11px", color: "var(--ink3)", fontWeight: 300, fontStyle: "italic", margin: "10px 0 0 0" }}>
              Last updated: April 2026. This file will be updated as new Phase III readouts publish.
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
