import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "The Fat Loss File — Fat Loss Peptides Explained (2026) | Peptide File",
  description:
    "Fat loss peptides explained: AOD-9604, tesamorelin, CJC-1295, MOTS-c, and how the GLP-1 class reshaped the efficacy benchmark. Evidence-rated 2026 review.",
  alternates: { canonical: "https://peptidefile.com/fat-loss" },
  openGraph: {
    title: "The Fat Loss File — Fat Loss Peptides Explained (2026)",
    description:
      "AOD-9604, tesamorelin, CJC-1295, MOTS-c, and how GLP-1 agonists reset the fat loss efficacy ceiling. Evidence-rated review.",
    url: "https://peptidefile.com/fat-loss",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fat Loss File — Fat Loss Peptides Explained (2026)",
    description:
      "AOD-9604, tesamorelin, CJC-1295, MOTS-c, and how GLP-1 agonists reset the fat loss efficacy ceiling. Evidence-rated review.",
  },
};

const tocSections = [
  { id: "what-fat-loss-peptides-are", label: "What Fat Loss Peptides Are" },
  { id: "how-they-work", label: "How They Work" },
  { id: "the-class", label: "The Fat Loss Peptide Class" },
  { id: "efficacy-benchmark", label: "The Efficacy Benchmark" },
  { id: "aod-9604", label: "AOD-9604" },
  { id: "tesamorelin", label: "Tesamorelin" },
  { id: "cjc-1295", label: "CJC-1295 and Ipamorelin" },
  { id: "mots-c", label: "MOTS-c" },
  { id: "stacking", label: "Peptide Stacking" },
  { id: "clinics", label: "Therapy Clinics and Access" },
  { id: "comparison", label: "GH-Axis vs GLP-1 vs Surgery" },
  { id: "unknowns", label: "What We Don't Know Yet" },
  { id: "faq", label: "FAQ" },
];

const clusterLinks = [
  { href: "/fat-loss/aod-9604", label: "AOD-9604 for Fat Loss" },
  { href: "/fat-loss/peptides-vs-ozempic", label: "Peptides vs Ozempic" },
  { href: "/fat-loss/cjc-1295-fat-loss", label: "CJC-1295 for Fat Loss" },
  { href: "/fat-loss/peptide-stacking-guide", label: "Peptide Stacking Guide" },
  { href: "/fat-loss/peptide-therapy-clinics", label: "Peptide Therapy Clinics" },
  { href: "/fat-loss/tesamorelin-deep-dive", label: "Tesamorelin Deep Dive" },
  { href: "/fat-loss/mots-c-metabolism", label: "MOTS-c for Metabolism" },
];

const keyStats = [
  { stat: "28.7%", label: "GLP-1 ceiling (retatrutide 12mg)" },
  { stat: "17%", label: "Tesamorelin VAT reduction at 26wk" },
  { stat: "1", label: "FDA-approved fat loss peptide (tesamorelin)" },
  { stat: "0", label: "Approved AOD-9604 indications" },
  { stat: "2.6 kg", label: "AOD-9604 Phase IIb total weight loss" },
  { stat: "GRAS", label: "AOD-9604 regulatory status (cosmetic)" },
  { stat: "503A", label: "Compounding pathway shrinking 2025" },
  { stat: "Phase III", label: "Retatrutide, the new comparator" },
];

const classRows = [
  ["AOD-9604", "Modified hGH 176–191 fragment", "Daily SC (research)", "~2.6 kg (Phase IIb, 12wk)", "Not approved"],
  ["Tesamorelin", "GHRH analog (1–44)", "Daily SC", "~17% VAT (26wk, HIV lipodystrophy)", "Approved 2010 (Egrifta)"],
  ["CJC-1295", "Modified GHRH (1–29)", "1–2× weekly SC", "No fat loss RCT data", "Research only"],
  ["Ipamorelin", "Pentapeptide GHRP", "Daily or 2× daily SC", "No fat loss RCT data", "Research only"],
  ["MOTS-c", "Mitochondrial-derived peptide (16 aa)", "Daily or 3× weekly SC", "Preclinical and early human", "Research only"],
  ["Semaglutide 2.4mg", "GLP-1 receptor agonist", "Weekly SC", "14.9% (STEP 1, 68wk)", "Approved 2021"],
  ["Tirzepatide 15mg", "GLP-1 / GIP dual agonist", "Weekly SC", "22.5% (SURMOUNT-1, 72wk)", "Approved 2023"],
  ["Retatrutide 12mg", "GLP-1 / GIP / Glucagon triple", "Weekly SC", "28.7% (TRIUMPH-4, 68wk)", "Phase III"],
];

const comparisonRows = [
  ["Mean weight loss", "Modest (2 to 5%)", "14 to 28%", "25 to 35%"],
  ["Lean mass preservation", "Better (anabolic axis)", "Similar to diet (~40% lean)", "Variable, malabsorption-driven"],
  ["Visceral fat reduction", "Tesamorelin 15 to 17%", "Strong but not VAT-selective", "Strong, secondary to total loss"],
  ["Approval status", "1 of 5 approved (tesamorelin)", "5+ approved compounds", "Approved (RYGB, sleeve, OAGB)"],
  ["Cost (US monthly)", "$300 to $3,000+", "$1,000 to $1,350", "$15k to $25k one-off"],
  ["Reversibility", "Stops on discontinuation", "Stops on discontinuation", "Permanent anatomical change"],
  ["Evidence base", "Limited; mostly observational", "RCTs in tens of thousands", "Decades of long-term data"],
];

const pipelineItems = [
  {
    date: "2026",
    text: "Compounded GLP-1 access continues to narrow as FDA shortage designations end. The 503A loophole that supported much of the off-label peptide therapy clinic business is closing.",
    highlight: true,
  },
  {
    date: "2026",
    text: "Mazdutide (Innovent, GLP-1 + glucagon dual agonist) Phase III readouts continue. The glucagon arm overlaps mechanistically with the GH-axis lipolytic effect older fat loss peptides aimed at.",
    highlight: false,
  },
  {
    date: "Late 2026",
    text: "Retatrutide NDA submission expected. The triple agonist resets the upper bound for what any non-surgical fat loss intervention can claim.",
    highlight: true,
  },
  {
    date: "2027",
    text: "Survodutide (Boehringer / Zealand, GLP-1 + glucagon) Phase III SYNCHRONIZE readouts. A second glucagon-arm validation that further compresses the case for older lipolytic peptides.",
    highlight: false,
  },
  {
    date: "2027+",
    text: "Retatrutide approval and launch expected mid-to-late 2027. The fat loss peptide landscape divides cleanly into pre-retatrutide and post-retatrutide eras.",
    highlight: true,
  },
  {
    date: "Ongoing",
    text: "MOTS-c human trials remain early-stage. No Phase III obesity readouts expected before 2028. The mitochondrial peptide class is biologically interesting but clinically pre-mature.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "What are fat loss peptides?",
    a: "Fat loss peptides are short amino acid chains used to influence body composition. They split into three families: growth-hormone-axis peptides (AOD-9604, tesamorelin, CJC-1295, ipamorelin) that aim to increase lipolysis, mitochondrial-derived peptides (MOTS-c) that target metabolic regulation, and the GLP-1 receptor agonist class (semaglutide, tirzepatide, retatrutide) which now sits as the dominant clinical category. Only one peptide in the first two groups, tesamorelin, holds FDA approval for a fat-related indication.",
  },
  {
    q: "Do fat loss peptides actually work?",
    a: "It depends on which peptide. Tesamorelin reduces visceral adipose tissue by roughly 15 to 17% in HIV-associated lipodystrophy (Falutz et al., NEJM 2007, PMID 17898100). AOD-9604 produced 2.6 kg of weight loss over 12 weeks in its Phase IIb trial, missing its primary endpoint and failing to gain approval. CJC-1295, ipamorelin, and MOTS-c lack any randomised controlled trial data showing meaningful fat loss in obese populations. The GLP-1 class produces 14.9 to 28.7% weight loss in pivotal trials.",
  },
  {
    q: "Is AOD-9604 the same as Ozempic?",
    a: "No. AOD-9604 is a synthetic fragment of human growth hormone (residues 176 to 191), originally developed by Metabolic Pharmaceuticals in Australia in the 1990s as an oral fat loss drug. Ozempic is a brand name for semaglutide, a GLP-1 receptor agonist. The two work through entirely different mechanisms. AOD-9604 was never approved for any indication; the FDA later granted it Generally Recognised As Safe (GRAS) status as a cosmetic ingredient only.",
  },
  {
    q: "What is tesamorelin used for?",
    a: "Tesamorelin (Egrifta) is a synthetic analog of growth-hormone-releasing hormone, FDA-approved in 2010 for the reduction of excess visceral abdominal fat in HIV-infected patients with lipodystrophy. That is its only approved indication. It is not approved for general weight loss, cosmetic fat reduction, or obesity. Off-label use exists but is not supported by RCT data outside the lipodystrophy population.",
  },
  {
    q: "Can you stack peptides for better fat loss?",
    a: "Stacking CJC-1295 with ipamorelin is the most common combination in research peptide circles. The rationale is to combine a GHRH analog (CJC-1295, raises GH baseline) with a GH secretagogue (ipamorelin, generates pulsatile release). The clinical evidence is thin: no published RCT has tested the combination for weight loss in obese patients. Stacking GH-axis peptides with GLP-1 agonists is theoretically interesting but lacks any safety or efficacy data and is not advisable outside clinical trials.",
  },
  {
    q: "Are fat loss peptides safe?",
    a: "Tesamorelin's safety profile in HIV lipodystrophy is well-characterised: mild injection site reactions, IGF-1 elevations requiring monitoring, and theoretical concerns about insulin sensitivity at higher doses. AOD-9604 was tolerated in trials but never approved. Research-grade CJC-1295, ipamorelin, and MOTS-c carry purity and contamination risks that vary by source. None of them have the post-marketing safety data that the GLP-1 class accumulated over almost two decades.",
  },
  {
    q: "Why are GLP-1 agonists in this file if they aren't fat loss peptides?",
    a: "Because they reset the efficacy benchmark for the entire fat loss category. Any fat loss peptide marketed to a patient with obesity is being compared, implicitly or explicitly, to what semaglutide and tirzepatide can produce. Older GH-axis peptides aimed at 5 to 10% body fat reductions in athletic populations. The GLP-1 class produces 15 to 28% total weight loss across general obesity populations. The comparison is unavoidable. See the dedicated peptides versus Ozempic cluster article for the side-by-side.",
  },
  {
    q: "Where do peptide therapy clinics fit in?",
    a: "Peptide therapy clinics in the US grew rapidly during the 2022 to 2024 GLP-1 shortage, when 503A compounding pharmacies could legally produce semaglutide and tirzepatide for individual patients. The FDA designated both as resolved shortages in late 2024 and early 2025. The 503A pathway for those compounds is now closed, and the clinic business has shifted toward research peptides (CJC-1295, ipamorelin, BPC-157, MOTS-c) which sit in a different regulatory category. Quality control varies widely.",
  },
  {
    q: "What about MOTS-c?",
    a: "MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial 12S rRNA gene, identified by Lee et al. in 2015. It activates AMPK signalling and improves insulin sensitivity in animal models. The human data is limited to small early-phase studies. There is no Phase III obesity trial, no FDA approval, and no large-scale safety database. It is biologically interesting and clinically pre-mature.",
  },
  {
    q: "What is coming next for fat loss peptides?",
    a: "The dominant story is the GLP-1 class. Retatrutide NDA submission is expected late 2026 with approval in 2027 or 2028 at 28.7% weight loss. Mazdutide and survodutide (both GLP-1 plus glucagon dual agonists) report Phase III data through 2026 and 2027. Older GH-axis peptides are unlikely to attract serious development capital while the incretin class continues to advance. MOTS-c and other mitochondrial peptides remain early-stage and 5+ years from any potential approval.",
  },
];

const articleJsonLd = articleSchema({
  headline: "The Fat Loss File — Fat Loss Peptides Explained (2026)",
  description:
    "Comprehensive review of fat loss peptides: AOD-9604, tesamorelin, CJC-1295, ipamorelin, MOTS-c, and how the GLP-1 receptor agonist class reset the efficacy benchmark.",
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
  authorName: "Mark Boreland",
  authorUrl: "https://peptidefile.com/author",
  publisherName: "Peptide File",
  image: "https://peptidefile.com/og-fat-loss.png",
});

const faqJsonLd = faqSchema(faqs);

const breadcrumbJsonLd = breadcrumbSchema([
  { name: "Home", item: "https://peptidefile.com" },
  { name: "Fat Loss", item: "https://peptidefile.com/fat-loss" },
]);

export default function FatLossPage() {
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
          <span>Body Composition</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Fat Loss Peptides</span>
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
            Evidence: Mixed
          </span>
        </div>

        <h1 className="article-title">The Fat Loss File</h1>

        <p className="page-intro">
          Fat loss peptides cover three distinct families with very different evidence bases. The growth-hormone-axis peptides (AOD-9604, tesamorelin, CJC-1295, ipamorelin) date back to the 1990s and produce modest body composition changes when they work at all. Mitochondrial peptides like MOTS-c are biologically novel but clinically early. And the GLP-1 receptor agonist class, which is technically not a fat loss peptide in the traditional sense, has reset the entire efficacy benchmark with weight loss numbers from 14.9% up to 28.7%. This file maps the full landscape and explains where each compound actually sits.
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
          <span>~3,500 words</span>
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
              key={item.stat + item.label}
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

          {/* ── SECTION 1: What Fat Loss Peptides Are ── */}
          <section id="what-fat-loss-peptides-are" style={{ marginBottom: "80px" }}>
            <h2>What Fat Loss Peptides Are</h2>

            <p>
              The phrase covers three biologically separate categories that get lumped together in
              clinic marketing and research peptide forums. The first is the growth-hormone axis:
              compounds that aim to raise circulating growth hormone (GH) or directly mimic
              GH-derived signalling. The second is the mitochondrial peptide class, exemplified by
              MOTS-c, which targets cellular energetics rather than the endocrine axis. The third
              is the GLP-1 receptor agonist class, which is a peptide-based intervention that
              produces fat loss as a secondary effect of appetite suppression and incretin biology.
            </p>

            <p>
              The categories matter because the regulatory and evidence position differs sharply
              across them. Tesamorelin is the only peptide in the GH-axis family with FDA approval
              for any fat-related indication. AOD-9604 was developed in the 1990s and 2000s,
              completed Phase II trials, missed its primary endpoint, and was never approved. CJC-1295,
              ipamorelin, and MOTS-c sit entirely in the research peptide category, with no
              registered obesity trials at the Phase III level. The GLP-1 class, despite not being
              what most people mean when they say "fat loss peptide," has become the dominant
              clinical fat loss intervention by every reasonable measure of evidence quality.
            </p>

            <p>
              The historical arc is worth a paragraph. Through the 1990s and 2000s, fat loss
              peptide research was dominated by GH-axis manipulation. The biological logic was
              clean: GH is lipolytic, falls with age, and therapeutic GH replacement reduces
              visceral fat. The problem was that GH itself raises blood glucose, IGF-1, and the
              theoretical risk of malignancy, so the field tried to engineer fragments and
              secretagogues that would capture the lipolytic benefit without the systemic effects.
              AOD-9604 and tesamorelin came out of that programme. The clinical results were
              modest. Then in the 2010s, the GLP-1 class moved from a niche diabetes treatment to
              the most-prescribed obesity therapy in history, and the entire frame of reference for
              what counted as effective fat loss changed.
            </p>
          </section>

          {/* ── SECTION 2: How They Work ── */}
          <section id="how-they-work" style={{ marginBottom: "80px" }}>
            <h2>How They Work</h2>

            <p>
              The mechanisms split cleanly across the three families. Each acts on a different node
              of energy balance, which is why direct head-to-head comparisons are inherently
              imperfect.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0" }}>
              {[
                {
                  label: "Growth-hormone axis (lipolysis)",
                  text: "Tesamorelin and CJC-1295 are synthetic analogs of GHRH; they raise pituitary GH output, which raises IGF-1 and stimulates hormone-sensitive lipase in adipocytes. Ipamorelin acts on the ghrelin receptor (GHSR-1a) to generate pulsatile GH release through a parallel pathway. AOD-9604 is structurally a fragment of GH (residues 176 to 191) and was hypothesised to activate the lipolytic effects of GH without the IGF-1 elevation. Net effect across the family: increased basal lipolysis, modest reductions in visceral fat, no consistent effect on appetite.",
                },
                {
                  label: "Mitochondrial signalling (energetics)",
                  text: "MOTS-c is encoded within the mitochondrial 12S rRNA gene and acts as a mitochondrial-derived peptide. It activates AMPK and improves insulin sensitivity in animal models. The hypothesised therapeutic effect is improvement of metabolic health markers and increased fat oxidation, rather than direct appetite or volume effects. Human data remains preliminary.",
                },
                {
                  label: "Incretin signalling (appetite suppression)",
                  text: "GLP-1 receptor agonists slow gastric emptying, suppress glucagon, increase glucose-dependent insulin secretion, and act centrally on hypothalamic and brainstem nuclei to reduce appetite. The fat loss is downstream of sustained caloric deficit. The class works on energy intake rather than energy expenditure, which is why GLP-1 fat loss is not lean-mass-sparing and looks broadly similar in body composition terms to caloric restriction at matched weight loss.",
                },
                {
                  label: "Hybrid mechanisms (the next generation)",
                  text: "Tirzepatide adds GIP receptor activity to GLP-1, producing both incretin amplification and possibly improved energy expenditure. Retatrutide adds glucagon receptor activity on top, which is mechanistically closer to what older fat loss peptides aimed at: glucagon raises hepatic glucose output, increases lipolysis, and elevates basal metabolic rate. The triple agonist is the first compound to combine appetite suppression with energy expenditure in a clinically validated package.",
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
              The mechanistic split has practical implications. GH-axis peptides may better preserve
              lean mass during weight loss because the anabolic axis is being directly stimulated.
              GLP-1 agonists do not preserve lean mass differentially; the lean-to-fat loss ratio
              roughly tracks dietary restriction at the same total weight loss. This is one of the
              few legitimate selling points the older peptide class still has, though the absolute
              fat loss it produces remains modest.
            </p>
          </section>

          {/* ── SECTION 3: The Class ── */}
          <section id="the-class" style={{ marginBottom: "80px" }}>
            <h2>The Fat Loss Peptide Class</h2>

            <p>
              The full landscape, ordered roughly by evidence base. Read this table left to right
              for the regulatory position and right column for current status. The GLP-1 class is
              included for benchmarking; the dedicated{" "}
              <Link href="/glp-1">GLP-1 File</Link> covers it in detail.
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
                    {["Compound", "Mechanism", "Route", "Fat loss data", "Status"].map((h) => (
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
                          color: row[0] === "Retatrutide 12mg" ? "var(--accent)" : "var(--ink)",
                          fontWeight: row[0] === "Retatrutide 12mg" ? 500 : 400,
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
              Two things stand out from the table. First, the gap between the GH-axis peptides and
              the incretin class is roughly an order of magnitude in absolute fat loss. Second, only
              one peptide outside the GLP-1 class has any FDA approval for a fat-related indication,
              and that approval (tesamorelin for HIV-associated lipodystrophy) does not extend to
              general obesity.
            </p>
          </section>

          {/* ── SECTION 4: The Efficacy Benchmark ── */}
          <section id="efficacy-benchmark" style={{ marginBottom: "80px" }}>
            <h2>The Efficacy Benchmark</h2>

            <p>
              Three points are worth holding in mind when evaluating any fat loss peptide claim. The
              first is the comparator. Through the 1990s and 2000s the relevant comparator for a
              new fat loss intervention was diet alone (3 to 5% weight loss in good trials) or
              orlistat (around 5 to 10%). A peptide producing 5% fat loss against that backdrop was
              clinically meaningful. The 2020s comparator is semaglutide at 14.9% and tirzepatide at
              22.5%. The arithmetic of what counts as effective has changed.
            </p>

            <h3>The benchmark numbers</h3>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                ["Tesamorelin (lipodystrophy)", "~17% reduction in visceral adipose tissue at 26 weeks (Falutz et al., NEJM 2007, PMID 17898100). Total body weight changes were small. The compound was not tested in general obesity."],
                ["AOD-9604 Phase IIb", "About 2.6 kg over 12 weeks at 1mg/day, vs about 1.8 kg on placebo. Failed primary endpoint. The compound never advanced to Phase III."],
                ["Semaglutide 2.4mg", "14.9% weight loss at 68 weeks. STEP 1 (Wilding et al., NEJM 2021, PMID 33567185). The trial that broke the 10% ceiling."],
                ["Tirzepatide 15mg", "22.5% weight loss at 72 weeks. SURMOUNT-1 (Jastreboff et al., NEJM 2022, PMID 35658024). First dual GLP-1/GIP agonist; first crossing of the 20% line."],
                ["Retatrutide 12mg", "28.7% weight loss at 68 weeks. TRIUMPH-4 (Phase III, December 2025 data). The strongest weight loss ever recorded in a randomised obesity trial."],
                ["Bariatric surgery", "25 to 35% total body weight loss at one year, depending on procedure. Long-term durability remains the gold standard non-pharmacological reference."],
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

            <h3>The honest framing</h3>

            <p>
              GH-axis peptides are not in the same efficacy bracket as the GLP-1 class for general
              obesity. The case for them rests on different ground: better lean mass preservation,
              targeted visceral fat reduction in specific clinical populations (lipodystrophy), and
              a different side effect profile. None of these are reasons to expect 15%+ weight loss
              in a person without a specific underlying condition. The full side-by-side is in the
              dedicated{" "}
              <Link href="/fat-loss/peptides-vs-ozempic">peptides versus Ozempic</Link>{" "}
              cluster article.
            </p>
          </section>

          {/* ── SECTION 5: AOD-9604 ── */}
          <section id="aod-9604" style={{ marginBottom: "80px" }}>
            <h2>AOD-9604</h2>

            <p>
              AOD-9604 is a synthetic peptide corresponding to amino acids 176 to 191 of human
              growth hormone, with a tyrosine added to the N-terminus to support oral
              bioavailability. It was developed by Metabolic Pharmaceuticals in Australia in the
              1990s. The biological hypothesis was that the C-terminal fragment of GH retained the
              lipolytic activity of the parent molecule without the IGF-1 elevation or insulin
              resistance that limited therapeutic GH itself.
            </p>

            <p>
              The Phase IIb trial, completed in the mid-2000s, randomised obese patients to
              AOD-9604 at multiple oral doses or placebo over 12 weeks. The 1mg/day arm produced
              roughly 2.6 kg of weight loss against approximately 1.8 kg on placebo, a difference
              that did not meet the predefined efficacy threshold for advancing to Phase III. The
              programme was discontinued. Metabolic Pharmaceuticals subsequently licensed the
              compound to other developers, and it was eventually granted FDA Generally Recognised
              As Safe status, though only as a cosmetic and topical ingredient. There is no FDA
              approval for AOD-9604 as an injectable, oral, or systemic therapy for any condition.
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
                Regulatory Status
              </p>
              <p style={{ margin: 0 }}>
                Injectable AOD-9604 sold by research peptide vendors and some peptide therapy
                clinics has no FDA approval. It is not a prescription drug. The GRAS status applies
                only to specific cosmetic and topical formulations and does not authorise
                injectable use.
              </p>
            </div>

            <p>
              The full mechanism, trial history, and current research peptide market position is
              covered in the{" "}
              <Link href="/fat-loss/aod-9604">AOD-9604 cluster article</Link>.
            </p>
          </section>

          {/* ── SECTION 6: Tesamorelin ── */}
          <section id="tesamorelin" style={{ marginBottom: "80px" }}>
            <h2>Tesamorelin</h2>

            <p>
              Tesamorelin is a synthetic analog of growth-hormone-releasing hormone (GHRH), modified
              to resist enzymatic degradation. It binds GHRH receptors in the anterior pituitary
              and stimulates pulsatile GH release. The downstream effects on visceral fat are
              presumed to be mediated by the GH and IGF-1 elevation that follows.
            </p>

            <p>
              The pivotal trials (Falutz et al., NEJM 2007, PMID 17898100, and follow-up extension
              studies) enrolled HIV-infected patients with central fat accumulation, a recognised
              complication of antiretroviral therapy known as HIV-associated lipodystrophy. Over 26
              weeks, tesamorelin produced approximately 15 to 17% reduction in visceral adipose
              tissue measured by CT, against a small increase or no change in placebo. Total body
              weight changes were modest. The improvement was specific to visceral fat rather than
              general weight loss.
            </p>

            <p>
              The FDA approved tesamorelin (brand name Egrifta) in November 2010 for the reduction
              of excess visceral abdominal fat in HIV-infected adults with lipodystrophy. That is
              its only approved indication. Off-label use in general obesity, anti-aging contexts,
              and athletic body composition exists, but is not supported by RCT data outside the
              lipodystrophy population. The compound's narrow approval is sometimes cited in
              marketing materials as evidence that "tesamorelin is FDA-approved for fat loss," which
              is technically true but materially misleading.
            </p>

            <p>
              The cost is significant. List prices in the US run into the thousands of dollars per
              month, and reimbursement is generally limited to the approved indication. The full
              mechanism, lipodystrophy data, off-label considerations, and cost picture are in the{" "}
              <Link href="/fat-loss/tesamorelin-deep-dive">tesamorelin deep dive cluster</Link>.
            </p>
          </section>

          {/* ── SECTION 7: CJC-1295 and Ipamorelin ── */}
          <section id="cjc-1295" style={{ marginBottom: "80px" }}>
            <h2>CJC-1295 and Ipamorelin</h2>

            <p>
              These two compounds are typically discussed together because they are most often
              stacked in research peptide protocols. CJC-1295 is a modified GHRH analog (1 to 29)
              with extended half-life through DPP-4 resistance. The drug-affinity-complex (DAC)
              variant binds albumin and produces a sustained elevation in baseline GH and IGF-1.
              Ipamorelin is a pentapeptide ghrelin receptor agonist that triggers acute pulsatile
              GH release without the cortisol or prolactin elevation seen with older GH
              secretagogues like GHRP-2 or GHRP-6.
            </p>

            <p>
              The clinical evidence base for either compound in fat loss is thin. There are no
              published Phase III randomised controlled trials showing meaningful weight loss in
              obese patients on either compound, alone or in combination. Most of the clinical data
              is in healthy adults assessing GH and IGF-1 response, not body composition outcomes.
              The case for use rests on the underlying logic of the GH axis (which is biologically
              real) extrapolated to body composition outcomes (which is not directly demonstrated).
            </p>

            <p>
              Both compounds are research-only in the US. They are sold by research peptide vendors
              and prescribed by some peptide therapy clinics under 503A compounding pathways, with
              the regulatory status sometimes ambiguous. Quality and purity vary by source. The
              full review of stacking protocols, dosing patterns used in clinic practice, and the
              evidence gap is in the{" "}
              <Link href="/fat-loss/cjc-1295-fat-loss">CJC-1295 cluster article</Link>.
            </p>
          </section>

          {/* ── SECTION 8: MOTS-c ── */}
          <section id="mots-c" style={{ marginBottom: "80px" }}>
            <h2>MOTS-c</h2>

            <p>
              MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial 12S rRNA gene,
              identified by Lee and colleagues in 2015. It is the prototype mitochondrial-derived
              peptide and represents a biologically distinct mechanism from the GH-axis or incretin
              classes. MOTS-c activates AMPK, modulates folate-methionine metabolism, and improves
              insulin sensitivity in animal models of diet-induced obesity.
            </p>

            <p>
              Human data is limited. A small number of early-phase studies have examined
              pharmacokinetics, basic safety, and metabolic markers in healthy volunteers and
              patients with type 2 diabetes. No Phase III obesity trial exists. No FDA submission
              has been made. The compound is sold as a research peptide and used off-label in some
              peptide therapy clinics. The biology is genuinely interesting and represents a
              category that did not exist a decade ago. The clinical translation is still many
              years from any approval.
            </p>

            <p>
              The full review of the mitochondrial peptide class, the published human data, and the
              gap between the preclinical promise and clinical reality is in the{" "}
              <Link href="/fat-loss/mots-c-metabolism">MOTS-c cluster article</Link>.
            </p>
          </section>

          {/* ── SECTION 9: Stacking ── */}
          <section id="stacking" style={{ marginBottom: "80px" }}>
            <h2>Peptide Stacking</h2>

            <p>
              Stacking refers to the simultaneous use of multiple peptides on the assumption that
              their effects are additive or synergistic. The most common stack is CJC-1295 with
              ipamorelin: a GHRH analog that raises baseline GH plus a ghrelin receptor agonist
              that produces pulsatile GH release. The pharmacological logic is that combining the
              two should produce a more physiological GH profile than either alone. The clinical
              evidence for additive fat loss is essentially absent at the RCT level.
            </p>

            <p>
              More aggressive stacks circulate in research peptide circles, sometimes adding
              tesamorelin, MOTS-c, BPC-157, or various recovery peptides. The further the stack
              gets from compounds with any clinical trial data, the more the evidence base reduces
              to practitioner experience and forum reports. Some clinic protocols add low-dose
              GLP-1 agonists on top of GH-axis stacks; the rationale is that the two mechanisms are
              non-overlapping. There is no published RCT testing this combination for safety or
              efficacy.
            </p>

            <p>
              The honest summary is that stacking is a clinical tradition rather than an evidence
              base. The risk-benefit is hard to assess because the side effects of combinations
              have not been systematically characterised, and the additive efficacy is presumed
              rather than measured. The full review of common stacks, published mechanism data, and
              the regulatory grey zone is in the{" "}
              <Link href="/fat-loss/peptide-stacking-guide">peptide stacking guide cluster</Link>.
            </p>
          </section>

          {/* ── SECTION 10: Clinics ── */}
          <section id="clinics" style={{ marginBottom: "80px" }}>
            <h2>Therapy Clinics and Access</h2>

            <p>
              The peptide therapy clinic category in the US grew rapidly between 2022 and 2024,
              driven by two factors. First, the GLP-1 shortage allowed 503A compounding pharmacies
              to legally produce semaglutide and tirzepatide for individual patients, creating a
              high-margin business that did not require the manufacturer relationship a regular
              prescriber needs. Second, the broader peptide therapy concept (CJC-1295, ipamorelin,
              BPC-157, tesamorelin, MOTS-c) had been developing in functional medicine and
              anti-aging clinics throughout the 2010s and was well-positioned to capture interest
              that the GLP-1 boom generated.
            </p>

            <p>
              The regulatory ground has shifted. The FDA designated semaglutide and tirzepatide as
              resolved shortages in late 2024 and early 2025, which removed the legal basis for
              routine 503A compounding of those compounds. Many clinics pivoted toward research
              peptides that sit in a different regulatory category, where compounding rules are
              less directly applicable but FDA enforcement priorities are also less predictable.
              The 2026 picture is one of rapid restructuring rather than stable equilibrium.
            </p>

            <h3>Practical considerations for patients</h3>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
              {[
                ["Source verification", "Compounding pharmacy quality varies. Independent third-party testing for purity, sterility, and concentration is the only reliable signal."],
                ["Cost spread", "Research peptide compounding from $300 to $1,500 per month. Branded GLP-1 prescriptions $1,000 to $1,350. Tesamorelin (Egrifta) $3,000+ per month."],
                ["Regulatory exposure", "Compounded GLP-1s in 2026 are largely outside the prior 503A pathway. Patients should ask the prescriber to confirm the legal basis for the prescription."],
                ["Telehealth model", "Many clinics operate primarily through telehealth with minimal physical examination. The completeness of the clinical assessment is the patient's signal."],
                ["IGF-1 monitoring", "GH-axis peptides require IGF-1 monitoring at 8 to 12 week intervals. Clinics that do not test IGF-1 are operating below standard of care."],
              ].map(([factor, text]) => (
                <li
                  key={factor}
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
                    {factor}
                  </span>
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75 }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p>
              The full clinic landscape, the 503A regulatory situation as of mid-2026, and the
              questions a patient should ask before signing up are in the{" "}
              <Link href="/fat-loss/peptide-therapy-clinics">peptide therapy clinics cluster</Link>.
            </p>
          </section>

          {/* ── SECTION 11: Comparison ── */}
          <section id="comparison" style={{ marginBottom: "80px" }}>
            <h2>GH-Axis Peptides vs GLP-1 vs Surgery</h2>

            <p>
              The summary view across the three intervention categories. Each has a place; the
              indication and patient context determine which is appropriate.
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
                    {["", "GH-axis peptides", "GLP-1 class", "Bariatric surgery"].map((h, i) => (
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
                          color: i === 2 ? "var(--accent)" : "var(--ink3)",
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
                                : ci === 2 && (ri === 0 || ri === 6)
                                ? "var(--accent)"
                                : "var(--ink2)",
                            fontWeight: ci === 2 && (ri === 0 || ri === 6) ? 500 : 300,
                            background: ci === 2 ? "rgba(26,107,60,0.025)" : "transparent",
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
              The pipeline of dual and triple agonists with glucagon receptor activity (retatrutide,
              mazdutide, survodutide) is starting to fold the lipolytic and energy expenditure
              advantages that GH-axis peptides aimed at into the incretin class itself. By the time
              retatrutide reaches the market, the case for older GH-axis fat loss peptides will rest
              almost entirely on niche indications and lean mass preservation arguments rather than
              total fat loss.
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
          </section>

          {/* ── SECTION 12: Unknowns ── */}
          <section id="unknowns" style={{ marginBottom: "80px" }}>
            <h2>What We Don&apos;t Yet Know</h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                {
                  title: "Whether GH-axis peptides offer real lean mass advantage at matched fat loss",
                  body: "The argument that GH-axis stimulation preserves lean mass better than GLP-1 agonism is theoretically sound but has never been tested in a randomised trial at matched fat loss. The hypothesis remains open.",
                },
                {
                  title: "Whether MOTS-c has a real clinical effect in obesity",
                  body: "Animal data is consistent. Human data is preliminary. Whether the AMPK and insulin sensitivity effects translate into clinically meaningful weight loss in a Phase III obesity population is unknown.",
                },
                {
                  title: "Long-term safety of research peptide stacking",
                  body: "Most stacks have not been characterised in formal pharmacokinetic studies. Drug interactions, IGF-1 trajectory over years of use, and cumulative cardiovascular effects are not well-described.",
                },
                {
                  title: "Whether the 503A regulatory pathway will remain available for newer peptides",
                  body: "FDA enforcement priorities for research peptide compounding remain unsettled. The compounded GLP-1 market shrank rapidly in 2025; whether similar enforcement extends to CJC-1295, ipamorelin, and MOTS-c is unclear.",
                },
                {
                  title: "Whether triple agonists eliminate the need for GH-axis fat loss peptides entirely",
                  body: "Retatrutide combines appetite suppression with energy expenditure in a way that mechanistically subsumes much of what older GH-axis peptides aimed at. Whether any clinical niche remains for them post-approval is an open question.",
                },
                {
                  title: "Whether targeted lipolytic peptides will return as a category",
                  body: "Several preclinical programmes are exploring receptor-specific lipolytic agonists that act locally rather than systemically. Whether any of these reach Phase III in the next decade is uncertain.",
                },
                {
                  title: "Real-world body composition outcomes in clinic populations",
                  body: "The published RCT data on tesamorelin and AOD-9604 is in narrow populations (HIV lipodystrophy, obesity) at controlled doses. What happens in mixed clinic populations on variable doses with limited monitoring has never been formally studied.",
                },
                {
                  title: "Whether MOTS-c and other mitochondrial peptides find a niche outside obesity",
                  body: "Insulin sensitivity, sarcopenia, and metabolic health markers may be more tractable indications than weight loss itself. The category may end up being more about metabolic health than fat reduction per se.",
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
              not constitute medical advice, diagnosis, or treatment. With the exception of
              tesamorelin (Egrifta) for HIV-associated lipodystrophy, none of the peptides discussed
              in this article hold FDA approval for fat loss or obesity indications. AOD-9604,
              CJC-1295, ipamorelin, and MOTS-c are research peptides without FDA approval for any
              systemic therapeutic use. Compounded versions carry quality and purity risks that
              vary by source. GLP-1 receptor agonists are prescription medications with significant
              side effects and contraindications. Always consult a qualified healthcare provider
              before making any decisions about medications, weight management, or health
              conditions. Peptide File does not sell, distribute, or endorse the purchase of any
              research peptide or investigational compound.
            </p>
            <p style={{ fontSize: "11px", color: "var(--ink3)", fontWeight: 300, fontStyle: "italic", margin: "10px 0 0 0" }}>
              Last updated: May 2026. This file will be updated as new pipeline readouts publish and as the regulatory landscape for research peptides shifts.
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
