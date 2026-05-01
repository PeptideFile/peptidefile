import Link from "next/link";
import type { Metadata } from "next";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

const SLUG = "glp-1";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-15T00:00:00+00:00";
const MODIFIED = "2026-04-15T00:00:00+00:00";

export const metadata: Metadata = {
  title: "The GLP-1 File: GLP-1 Peptides Explained (2026) | Peptide File",
  description:
    "Complete reference on GLP-1 peptides. Mechanism, the full agonist class from liraglutide to retatrutide, weight loss data up to 28.7%, safety, and the 2026 pipeline.",
  openGraph: {
    title: "The GLP-1 File: GLP-1 Peptides Explained (2026)",
    description:
      "Complete reference on GLP-1 peptides. Mechanism, the full agonist class from liraglutide to retatrutide, weight loss data up to 28.7%, safety, and the 2026 pipeline.",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Mark Boreland"],
    siteName: "Peptide File",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "The GLP-1 File: GLP-1 Peptides Explained (2026)",
    description:
      "Complete reference on GLP-1 peptides. Mechanism, the full agonist class, weight loss data up to 28.7%, safety, and the 2026 pipeline.",
  },
  alternates: { canonical: CANONICAL },
};

const clusterLinks = [
  {
    href: "/glp-1/how-glp-1-agonists-work",
    label: "How GLP-1 Agonists Work",
    excerpt:
      "The full mechanism of GLP-1 receptor agonism, from L-cell secretion to gastric emptying and central appetite signalling.",
  },
  {
    href: "/glp-1/comparison-chart-2026",
    label: "GLP-1 Comparison Chart 2026",
    excerpt:
      "Every approved and Phase III GLP-1 agonist compared on dose, efficacy, half-life, route, and approval status.",
  },
  {
    href: "/glp-1/natural-boosters",
    label: "Natural GLP-1 Boosters",
    excerpt:
      "What the evidence actually shows for protein, fibre, fermented foods, and short-chain fatty acids on endogenous GLP-1.",
  },
  {
    href: "/glp-1/vs-gip",
    label: "GLP-1 vs GIP Explained",
    excerpt:
      "Two incretin hormones, two receptors, and why GIP co-agonism became the basis of tirzepatide's efficacy edge.",
  },
  {
    href: "/glp-1/triple-vs-dual-agonism",
    label: "Why Triple > Dual Agonism",
    excerpt:
      "The metabolic logic for adding glucagon to GLP-1 + GIP, and why retatrutide's TRIUMPH-4 result changes the field.",
  },
  {
    href: "/glp-1/semaglutide-vs-tirzepatide",
    label: "Semaglutide vs Tirzepatide",
    excerpt:
      "Head-to-head on STEP 1 vs SURMOUNT-1, the SURMOUNT-5 direct comparison, side effect profile, and cost.",
  },
  {
    href: "/glp-1/safety-profile",
    label: "GLP-1 Safety Profile",
    excerpt:
      "Long-term safety data: GI tolerability, pancreatitis signal, thyroid C-cell findings, and what SELECT confirmed about cardiovascular risk.",
  },
];

const faqs = [
  {
    q: "What does GLP-1 actually do in the body?",
    a: "GLP-1 (glucagon-like peptide-1) is an incretin hormone released by intestinal L-cells after eating. It stimulates glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying, and acts on hypothalamic neurons to reduce appetite. The combination of these actions is why GLP-1 receptor agonists produce both glycaemic control and weight loss.",
  },
  {
    q: "Are GLP-1 peptides the same thing as Ozempic or Wegovy?",
    a: "Ozempic and Wegovy are brand names for semaglutide, one specific GLP-1 receptor agonist. The class includes liraglutide (Saxenda, Victoza), semaglutide (Ozempic, Wegovy, Rybelsus), dulaglutide (Trulicity), and the dual GLP-1/GIP agonist tirzepatide (Mounjaro, Zepbound). Retatrutide is a Phase III triple agonist.",
  },
  {
    q: "How much weight loss is realistic on a GLP-1 agonist?",
    a: "Trial averages by compound: liraglutide 8.0% (SCALE, 56 weeks), semaglutide 14.9% (STEP 1, 68 weeks), tirzepatide 22.5% (SURMOUNT-1 at 15mg, 72 weeks), retatrutide 28.7% (TRIUMPH-4 at 12mg, 68 weeks). Real-world weight loss typically runs 60-75% of trial figures because of adherence, dose titration, and access issues.",
  },
  {
    q: "What is the difference between GLP-1, GIP, and glucagon agonism?",
    a: "GLP-1 reduces appetite and improves insulin response. GIP (glucose-dependent insulinotropic polypeptide) is the second incretin and adds insulin sensitivity benefits and possibly improved nausea tolerability. Glucagon increases energy expenditure and lipolysis. Each receptor adds roughly 5 to 7 percentage points of weight loss over the previous step.",
  },
  {
    q: "Are natural ways to boost GLP-1 effective?",
    a: "Endogenous GLP-1 release rises modestly with protein-rich meals, soluble fibre, fermented foods, and short-chain fatty acids from gut microbiota. The effect size is real but small relative to pharmacological agonism. Diet alone cannot reproduce the 14 to 28 percent weight loss seen in trials. See the natural boosters cluster article for the actual evidence.",
  },
  {
    q: "Are GLP-1 agonists safe long term?",
    a: "Cardiovascular safety is now established. The SELECT trial (semaglutide, 17,604 patients) showed a 20 percent reduction in major adverse cardiovascular events in patients with established cardiovascular disease. Common side effects are gastrointestinal: nausea, vomiting, constipation. Pancreatitis is a known but rare signal. Thyroid C-cell findings in rodents prompted boxed warnings, though human data has not confirmed the risk.",
  },
  {
    q: "Can GLP-1 agonists be used without obesity?",
    a: "Approved indications cover type 2 diabetes (most agonists), chronic weight management at BMI thresholds (semaglutide 2.4mg, liraglutide 3.0mg, tirzepatide), cardiovascular risk reduction (semaglutide via SELECT), obstructive sleep apnoea (tirzepatide via SURMOUNT-OSA), and chronic kidney disease (semaglutide via FLOW). Off-label use in lower BMIs is widespread but not labelled.",
  },
  {
    q: "Why is retatrutide considered the next step beyond tirzepatide?",
    a: "Retatrutide adds glucagon receptor agonism to the GLP-1 plus GIP combination already used by tirzepatide. The glucagon component drives energy expenditure through hepatic and brown adipose tissue activity. TRIUMPH-4 reported 28.7 percent weight loss at 12mg over 68 weeks, the strongest figure ever recorded for an obesity drug.",
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

const tocItems = [
  { id: "what-it-is", label: "What GLP-1 Is" },
  { id: "evidence-base", label: "The Evidence Base" },
  { id: "how-glp-1-works", label: "How GLP-1 Agonists Work" },
  { id: "comparison-chart", label: "Comparison Chart 2026" },
  { id: "natural-boosters", label: "Natural GLP-1 Boosters" },
  { id: "glp-1-vs-gip", label: "GLP-1 vs GIP" },
  { id: "triple-vs-dual", label: "Triple vs Dual Agonism" },
  { id: "semaglutide-vs-tirzepatide", label: "Semaglutide vs Tirzepatide" },
  { id: "safety-profile", label: "Safety Profile" },
  { id: "practical", label: "Practical Considerations" },
  { id: "comparison-landscape", label: "Comparison Landscape" },
  { id: "cluster-articles", label: "All GLP-1 Cluster Articles" },
  { id: "faq", label: "FAQ" },
];

export default function GLP1Pillar() {
  const article = articleSchema({
    headline: "The GLP-1 File: GLP-1 Peptides Explained (2026)",
    description:
      "Complete reference on GLP-1 peptides. Mechanism, the full agonist class from liraglutide to retatrutide, weight loss data up to 28.7%, safety, and the 2026 pipeline.",
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    url: CANONICAL,
  });
  const faq = faqSchema(faqs);
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "The GLP-1 File", item: CANONICAL },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Page header */}
      <header
        style={{
          borderBottom: "1px solid #d4d4cc",
          paddingBottom: "2rem",
          marginBottom: "2.5rem",
        }}
      >
        <div className="mono-label" style={{ marginBottom: "0.75rem" }}>
          PILLAR FILE · INCRETIN CLASS
        </div>
        <h1 className="article-title">
          The GLP-1 File: GLP-1 Peptides Explained
        </h1>
        <p className="page-intro">
          The complete reference on GLP-1 receptor agonists. Mechanism, the full
          class from liraglutide to retatrutide, weight loss outcomes up to 28.7
          percent of body weight, safety signals, and the 2026 pipeline.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem",
            alignItems: "center",
            marginTop: "1.25rem",
            fontSize: "0.875rem",
            color: "#555",
          }}
        >
          <span className="mono-label">
            By{" "}
            <Link href="/author" style={{ color: "#1a1a1a" }}>
              Mark Boreland
            </Link>
          </span>
          <span className="mono-label">Last updated: April 2026</span>
          <span className="mono-label">~4,500 words</span>
          <span
            style={{
              display: "inline-block",
              padding: "0.2rem 0.6rem",
              border: "1px solid #1a1a1a",
              borderRadius: "2px",
              fontSize: "0.75rem",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Evidence: Strong
          </span>
        </div>
      </header>

      {/* Key data grid */}
      <section
        aria-label="Key data"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1px",
          backgroundColor: "#d4d4cc",
          border: "1px solid #d4d4cc",
          marginBottom: "3rem",
        }}
      >
        {[
          { v: "5+", l: "Approved GLP-1 agonists" },
          { v: "28.7%", l: "Top weight loss (retatrutide 12mg)" },
          { v: "22.5%", l: "Tirzepatide 15mg, SURMOUNT-1" },
          { v: "14.9%", l: "Semaglutide 2.4mg, STEP 1" },
          { v: "20%", l: "MACE reduction in SELECT" },
          { v: "L-cells", l: "Endogenous source" },
          { v: "Once weekly", l: "Standard dosing schedule" },
          { v: "2027", l: "Retatrutide expected approval" },
        ].map((item) => (
          <div
            key={item.l}
            style={{
              backgroundColor: "#fafaf7",
              padding: "1.25rem 1rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#1a1a1a",
                marginBottom: "0.25rem",
              }}
            >
              {item.v}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#555",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {item.l}
            </div>
          </div>
        ))}
      </section>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 280px",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Main article */}
        <article className="prose">
          <p>
            GLP-1 receptor agonists changed obesity medicine. The class has gone
            from a niche type 2 diabetes treatment to the most-prescribed weight
            loss therapy in history, with a clinical efficacy ceiling that keeps
            climbing. Liraglutide produced 8 percent body weight loss. Semaglutide
            doubled that to 14.9 percent. Tirzepatide, the first dual incretin
            agonist, hit 22.5 percent. Retatrutide, the first triple agonist, has
            now reported 28.7 percent at 12mg over 68 weeks in TRIUMPH-4.
          </p>
          <p>
            Each step on that ladder corresponds to adding a new receptor target.
            GLP-1 alone, then GLP-1 plus GIP, then GLP-1 plus GIP plus glucagon.
            That progression is the central story of incretin therapy in 2026,
            and it explains why the field has moved so fast in such a short
            window. The biology was clarified in the 1980s. The first GLP-1
            agonist (exenatide) was approved in 2005. The class then sat at modest
            efficacy for 15 years until the dose ceiling on semaglutide was
            pushed in STEP 1, and tirzepatide proved that adding a second
            receptor mattered.
          </p>
          <p>
            This file covers the full landscape. What GLP-1 actually does in the
            body, the trial evidence behind every approved compound, the
            differences between mono, dual, and triple agonism, the safety
            picture after a decade of post-marketing data, and the pipeline
            heading into 2027 and beyond. Each of the seven cluster articles
            below goes deeper on a specific topic. Use the table of contents on
            the right to jump to the section you need, or read top to bottom for
            the full reference.
          </p>
          <p>
            One framing note. GLP-1 agonist therapy is now sitting at the
            intersection of obesity medicine, cardiometabolic disease, and a
            growing list of indications including chronic kidney disease, sleep
            apnoea, and possibly Alzheimer&rsquo;s disease and addiction. The
            class is no longer about weight loss in isolation. It is becoming a
            metabolic platform.
          </p>
          <p>
            A second framing note on terminology. GLP-1 (the hormone), GLP-1R
            (the receptor), GLP-1 receptor agonist (the drug class), and GLP-1
            analogue (a subset of agonists with structural similarity to native
            GLP-1) are often used interchangeably in lay coverage and even in
            some clinical writing. The distinction matters when discussing
            tirzepatide and retatrutide, which are not pure GLP-1 agonists but
            multi-receptor agonists with GLP-1 activity. Throughout this file,
            the term GLP-1 agonist refers to the broader functional class
            including dual and triple agonists, with receptor specificity called
            out where it changes the clinical picture.
          </p>

          <h2 id="what-it-is">What GLP-1 Is</h2>
          <p>
            Glucagon-like peptide-1 (GLP-1) is a 30-amino-acid incretin hormone
            released by intestinal L-cells in response to nutrient intake. It is
            cleaved from the proglucagon gene product, the same precursor that
            produces glucagon and GLP-2. Postprandial GLP-1 secretion peaks
            within 15 to 30 minutes and falls back to baseline within an hour.
          </p>
          <p>
            Endogenous GLP-1 has a half-life of around 2 minutes. The native
            peptide is rapidly degraded by dipeptidyl peptidase-4 (DPP-4) at the
            second N-terminal amino acid. This is why DPP-4 inhibitors (sitagliptin,
            linagliptin) work as a separate diabetes drug class: they prolong
            endogenous GLP-1 by blocking its degradation, though to a much lesser
            effect than receptor agonism.
          </p>
          <p>
            The receptor for GLP-1 (GLP-1R) is a class B G-protein-coupled
            receptor expressed on pancreatic beta cells, gastric smooth muscle,
            cardiac myocytes, vagal afferents, and several hypothalamic and
            brainstem nuclei. The distribution of the receptor is what gives the
            class its broad effects beyond glycaemic control. Receptor agonism in
            the arcuate nucleus and area postrema is the basis of the
            appetite-suppressing and nausea-inducing effects. Receptor agonism in
            cardiac and vascular tissue is the basis of the cardiovascular
            outcomes seen in SELECT and similar trials.
          </p>
          <p>
            A GLP-1 receptor agonist is any molecule that binds and activates
            GLP-1R. The class includes peptide agonists (liraglutide, semaglutide,
            tirzepatide, retatrutide), oral non-peptide small molecules
            (orforglipron, in late-stage trials), and antibody-conjugated
            agonists (MariTide). The biological effect is driven by receptor
            binding affinity, plasma half-life, and tissue distribution.
            Engineering for half-life through fatty acid conjugation
            (semaglutide, liraglutide) or Fc-fusion (dulaglutide, retatrutide) is
            what enables once-weekly dosing.
          </p>
          <p>
            The historical arc is worth noting. Exendin-4, the active component
            of exenatide, was isolated from the venom of the Gila monster
            (Heloderma suspectum) by John Eng at the Bronx VA Medical Center in
            1992. Exendin-4 shares 53 percent sequence identity with native human
            GLP-1 but resists DPP-4 cleavage, giving it a much longer half-life.
            Exenatide became the first approved GLP-1 receptor agonist in 2005,
            dosed twice daily. Liraglutide followed in 2010 with the addition of
            a fatty acid side chain that bound albumin, extending half-life to
            13 hours and enabling once-daily dosing. Semaglutide, approved in
            2017, used a longer fatty acid chain plus amino acid substitutions
            to achieve a 7-day half-life. Each engineering advance was
            incremental, but together they took the class from twice-daily
            injections producing modest glycaemic improvement to once-weekly
            injections producing transformative weight loss.
          </p>

          <h2 id="evidence-base">The Evidence Base</h2>
          <p>
            GLP-1 agonism is one of the best-evidenced drug classes in modern
            metabolic medicine. The trial programmes for the major compounds
            include over 100,000 randomised patients across diabetes, obesity,
            cardiovascular disease, and kidney disease populations. Every claim
            in this file is from published Phase III data or peer-reviewed
            mechanistic studies, with PubMed identifiers cited where appropriate.
          </p>
          <p>
            Liraglutide&rsquo;s SCALE programme established that a GLP-1 agonist
            could produce clinically meaningful weight loss in non-diabetic
            obesity. The pivotal SCALE Obesity and Prediabetes trial (Pi-Sunyer
            et al., NEJM 2015, PMID: 26132939) reported 8.0 percent weight loss
            at 3.0mg over 56 weeks versus 2.6 percent on placebo. That was
            sufficient to secure FDA approval in 2014 for chronic weight
            management.
          </p>
          <p>
            Semaglutide&rsquo;s STEP programme moved the ceiling. STEP 1
            (Wilding et al., NEJM 2021, PMID: 33567185) reported 14.9 percent
            weight loss at 2.4mg over 68 weeks versus 2.4 percent on placebo. The
            programme has since expanded to STEP 2 (type 2 diabetes), STEP 5 (104
            weeks), STEP-HFpEF (heart failure with preserved ejection fraction),
            SELECT (cardiovascular outcomes), FLOW (chronic kidney disease), and
            STEP 9 (knee osteoarthritis). Every readout has confirmed the central
            efficacy and safety findings.
          </p>
          <p>
            Tirzepatide&rsquo;s SURMOUNT programme proved that adding GIP to
            GLP-1 increased efficacy. SURMOUNT-1 (Jastreboff et al., NEJM 2022,
            PMID: 35658024) reported 22.5 percent weight loss at 15mg over 72
            weeks. SURMOUNT-5 (Aronne et al., NEJM 2025) was the first head-to-head
            against semaglutide, with tirzepatide reporting 20.2 percent vs
            13.7 percent for semaglutide at 72 weeks. The programme has expanded
            into SURMOUNT-OSA (sleep apnoea, approved 2024) and SURMOUNT-MMO
            (cardiovascular outcomes, ongoing).
          </p>
          <p>
            Retatrutide&rsquo;s TRIUMPH programme has so far reported the
            strongest weight loss in any obesity drug trial. TRIUMPH-4 (December
            2025) reported 28.7 percent weight loss at 12mg over 68 weeks. The
            full Phase III readout is expected through 2026, with FDA submission
            in late 2026 and approval expected mid to late 2027. See the{" "}
            <Link href="/retatrutide">Retatrutide File</Link> for the complete
            picture on this compound, including the dysesthesia safety signal
            (20.9 percent at 12mg) flagged in TRIUMPH-4.
          </p>
          <p>
            Three points are worth holding in mind when reading the trial data.
            First, the comparator matters. STEP 1 compared semaglutide 2.4mg
            against placebo in patients with obesity but without diabetes.
            SURMOUNT-1 used the same design for tirzepatide. The headline
            efficacy figures are not directly comparable across compounds
            without correction for trial design, population BMI, and duration.
            SURMOUNT-5 was the first true head-to-head of semaglutide vs
            tirzepatide and confirmed the efficacy ranking suggested by indirect
            comparison.
          </p>
          <p>
            Second, the trial populations were typically high-BMI (mean BMI 35
            to 40) and excluded patients with diabetes or significant
            comorbidities in the obesity trials. Real-world populations include
            more variability in baseline BMI, more diabetes, more medication
            interactions, and more variable adherence. The 60 to 75 percent
            real-world adherence rule (real-world weight loss runs 60 to 75
            percent of trial figures) is a useful heuristic across the class.
          </p>
          <p>
            Third, the GLP-1 class has produced cardiovascular outcomes data
            beyond what was originally required for FDA approval. The 2008 FDA
            guidance on cardiovascular safety in diabetes drugs was meant to
            ensure new drugs did not increase cardiovascular risk. The class
            has now produced multiple trials demonstrating cardiovascular
            benefit: LEADER (liraglutide, 2016), SUSTAIN-6 (semaglutide
            diabetes, 2016), REWIND (dulaglutide, 2019), and SELECT (semaglutide
            in obesity without diabetes, 2023). The transition from a safety
            requirement to an efficacy indication has reshaped how the class is
            prescribed in patients with established cardiovascular disease.
          </p>

          <h2 id="how-glp-1-works">How GLP-1 Agonists Work</h2>
          <p>
            The mechanism is multi-organ. GLP-1 agonists hit the pancreas, gut,
            brain, and cardiovascular system simultaneously, which is why the
            clinical picture spans glycaemic control, weight loss, and reduced
            cardiovascular events from a single drug.
          </p>
          <h3>Pancreatic effects</h3>
          <p>
            GLP-1 agonism stimulates glucose-dependent insulin secretion from
            pancreatic beta cells. The glucose dependency is critical: insulin
            release rises only when blood glucose is elevated, which is why GLP-1
            agonists carry low intrinsic hypoglycaemia risk in non-diabetic
            patients. GLP-1 also suppresses glucagon secretion from alpha cells,
            reducing hepatic glucose production. The net effect is improved
            postprandial glycaemia and HbA1c reductions of 1.0 to 1.8
            percentage points in type 2 diabetes trials.
          </p>
          <h3>Gastric effects</h3>
          <p>
            GLP-1 agonism slows gastric emptying. Food remains in the stomach
            longer, blunting the postprandial glucose excursion and prolonging
            satiety. The slowed emptying is also responsible for much of the
            class&rsquo;s side effect profile: nausea, vomiting, and early
            satiety are reported by 20 to 50 percent of patients during dose
            titration, depending on the compound and dose.
          </p>
          <h3>Central effects</h3>
          <p>
            The hypothalamic arcuate nucleus and the area postrema express GLP-1
            receptors. Agonism activates POMC neurons (anorexigenic) and inhibits
            NPY/AgRP neurons (orexigenic), producing a sustained reduction in
            appetite and food preference. Functional MRI studies have shown
            reduced reward-system activation in response to high-calorie food
            cues, which may explain the reported reductions in food noise that
            patients describe.
          </p>
          <p>
            Food noise is the colloquial term for the constant intrusive
            cognition about food that many patients with obesity describe. It
            shows up in qualitative interviews and in patient-reported outcome
            measures across the major trials. Pharmacologically, the
            phenomenon maps onto the mesolimbic dopamine system: GLP-1 agonism
            in the ventral tegmental area and nucleus accumbens reduces
            dopaminergic response to palatable food. The same neural circuits
            are implicated in addiction, which is why ongoing trials are
            examining GLP-1 agonism in alcohol use disorder, opioid use
            disorder, and gambling disorder. Early signals are positive but
            preliminary.
          </p>
          <h3>Cardiovascular effects</h3>
          <p>
            GLP-1 receptors are expressed on cardiac myocytes and vascular
            endothelium. Agonism produces modest blood pressure reduction, lipid
            improvements, and direct anti-inflammatory effects on the
            vasculature. The SELECT trial confirmed a 20 percent reduction in
            major adverse cardiovascular events (cardiovascular death, non-fatal
            myocardial infarction, non-fatal stroke) over a mean follow-up of
            39.8 months in patients with established cardiovascular disease and
            BMI 27 or higher.
          </p>
          <p>
            The full mechanistic picture, including the GIP and glucagon arms
            relevant to dual and triple agonists, is covered in detail in the{" "}
            <Link href="/glp-1/how-glp-1-agonists-work">
              How GLP-1 Agonists Work
            </Link>{" "}
            cluster article.
          </p>

          <h2 id="comparison-chart">Comparison Chart 2026</h2>
          <p>
            The class spans five approved compounds plus retatrutide in late
            Phase III. Headline differences:
          </p>
          <ul>
            <li>
              <strong>Liraglutide</strong> (Saxenda 3.0mg, Victoza 1.8mg). Daily
              subcutaneous. Half-life 13 hours. 8.0 percent weight loss at 3.0mg
              over 56 weeks (SCALE). Approved 2010 for diabetes, 2014 for weight
              management.
            </li>
            <li>
              <strong>Semaglutide</strong> (Ozempic 2.0mg, Wegovy 2.4mg, Rybelsus
              14mg oral). Once weekly subcutaneous or daily oral. Half-life 7
              days. 14.9 percent weight loss at 2.4mg over 68 weeks (STEP 1).
              Approved 2017 for diabetes, 2021 for weight management, 2024 for
              cardiovascular risk reduction.
            </li>
            <li>
              <strong>Dulaglutide</strong> (Trulicity 0.75 to 4.5mg). Once
              weekly. Half-life 5 days. Modest weight loss (2 to 5 percent) but
              strong cardiovascular outcomes (REWIND). Approved 2014.
            </li>
            <li>
              <strong>Tirzepatide</strong> (Mounjaro 5 to 15mg, Zepbound 5 to
              15mg). Dual GLP-1/GIP agonist. Once weekly. Half-life 5 days. 22.5
              percent weight loss at 15mg over 72 weeks (SURMOUNT-1). Approved
              2022 for diabetes, 2023 for weight management, 2024 for sleep
              apnoea.
            </li>
            <li>
              <strong>Retatrutide</strong> (LY3437943, investigational). Triple
              GLP-1/GIP/glucagon agonist. Once weekly. Half-life 6 days. 28.7
              percent weight loss at 12mg over 68 weeks (TRIUMPH-4). FDA
              submission expected late 2026, approval expected mid to late 2027.
            </li>
            <li>
              <strong>Orforglipron</strong> (Lilly, Phase III). Oral non-peptide
              GLP-1 agonist. Daily oral, no food restrictions (unlike Rybelsus).
              Phase II reported 14.7 percent weight loss at 45mg over 36 weeks.
              Phase III readouts expected 2026.
            </li>
          </ul>
          <p>
            The full side-by-side, including cost in major markets, route of
            administration nuances, and head-to-head trial data, is in the{" "}
            <Link href="/glp-1/comparison-chart-2026">
              GLP-1 Comparison Chart 2026
            </Link>{" "}
            cluster article.
          </p>

          <h2 id="natural-boosters">Natural GLP-1 Boosters</h2>
          <p>
            The endogenous GLP-1 axis is sensitive to diet composition. Reliable
            stimulators of postprandial GLP-1 secretion include: protein-rich
            meals (especially whey and casein, with a 30 to 50 percent rise in
            postprandial GLP-1), soluble fibre (oats, legumes, psyllium, with
            secondary effects via short-chain fatty acid production by gut
            microbiota), monounsaturated fats (olive oil, avocado), and
            fermented foods (some evidence for kimchi, kefir, and yoghurt).
            Bitter compounds (gentian, hops, coffee) acutely raise GLP-1 via
            taste receptor signalling in the gut.
          </p>
          <p>
            The honest framing: these effects are real but modest. A protein-rich
            meal might double postprandial GLP-1 from baseline. A weekly
            semaglutide injection produces sustained plasma agonist levels
            roughly 1,000 times higher than physiological postprandial peaks.
            The clinical effect sizes match: diet alone produces 3 to 5 percent
            weight loss in well-conducted trials over a year. GLP-1 agonists
            produce 8 to 28 percent over similar timeframes.
          </p>
          <p>
            For most readers the practical takeaway is that diet composition
            matters for endogenous GLP-1 in the same way that walking matters
            for cardiovascular health. It is genuinely beneficial and worth
            doing, but it does not substitute for the pharmacological
            intervention when the latter is indicated. Full evidence rundown in
            the{" "}
            <Link href="/glp-1/natural-boosters">Natural GLP-1 Boosters</Link>{" "}
            cluster.
          </p>

          <h2 id="glp-1-vs-gip">GLP-1 vs GIP</h2>
          <p>
            GIP (glucose-dependent insulinotropic polypeptide) is the second
            incretin hormone. It is released by K-cells in the duodenum and
            jejunum, while GLP-1 is released by L-cells primarily in the ileum
            and colon. GIP and GLP-1 together account for the incretin effect:
            the observation that oral glucose produces a larger insulin response
            than intravenous glucose at matched plasma glucose levels.
          </p>
          <p>
            GIP receptor (GIPR) biology was historically considered less
            interesting than GLP-1R because GIP appeared to have minimal effect
            on appetite and was thought to be ineffective in type 2 diabetes
            (GIP signalling is reduced in diabetic patients). The development of
            tirzepatide changed that view. Combined GLP-1R and GIPR agonism
            produced weight loss exceeding what semaglutide could achieve at any
            tolerable dose. The mechanism is still being mapped, but current
            evidence suggests GIP component contributes via improved insulin
            sensitivity, possibly improved tolerability of GI side effects, and
            direct effects on adipose tissue.
          </p>
          <p>
            The deep dive on receptor biology, GIP knockout mouse data, and the
            unresolved question of whether GIPR antagonism (the MariTide
            approach) could outperform GIPR agonism is in the{" "}
            <Link href="/glp-1/vs-gip">GLP-1 vs GIP Explained</Link> cluster
            article.
          </p>

          <h2 id="triple-vs-dual">Triple vs Dual Agonism</h2>
          <p>
            Adding glucagon receptor agonism to GLP-1 plus GIP introduces a third
            mechanism: increased energy expenditure. GLP-1 and GIP together
            reduce energy intake (appetite suppression, slowed gastric emptying,
            improved insulin sensitivity). Glucagon raises energy expenditure
            through hepatic glucose output, lipolysis, and brown adipose tissue
            activation. The combined effect is a larger negative energy balance
            than dual agonism can achieve.
          </p>
          <p>
            The risk with glucagon agonism is hyperglycaemia. Glucagon raises
            blood glucose by definition. Retatrutide solves this by combining
            glucagon agonism with strong GLP-1 plus GIP agonism, so the
            insulinotropic effect of the incretin component dominates. TRIUMPH-2
            data in type 2 diabetes confirmed glycaemic improvement despite the
            glucagon component, with HbA1c reductions of around 2.0 percentage
            points.
          </p>
          <p>
            The 28.7 percent figure from TRIUMPH-4 is roughly 6 percentage
            points above tirzepatide&rsquo;s 22.5 percent in SURMOUNT-1 (with
            differences in trial population and duration noted). That gap is
            consistent with the pattern of approximately 5 to 7 percentage
            points added per receptor target. Whether this pattern continues
            with quad agonists (GLP-1, GIP, glucagon, plus a fourth target like
            amylin or PYY) is the open question for the next decade.
          </p>
          <p>
            The mechanistic logic, the trial data on glucagon mono-agonism, and
            the question of whether a quad agonist makes biological sense are
            covered in the{" "}
            <Link href="/glp-1/triple-vs-dual-agonism">
              Why Triple &gt; Dual Agonism
            </Link>{" "}
            cluster article.
          </p>

          <h2 id="semaglutide-vs-tirzepatide">Semaglutide vs Tirzepatide</h2>
          <p>
            The most-asked question in the class. Both are once-weekly. Both
            have FDA approvals for diabetes and weight management. The honest
            answer from the evidence is that tirzepatide produces more weight
            loss on average. SURMOUNT-5 confirmed this directly: tirzepatide
            20.2 percent vs semaglutide 13.7 percent at 72 weeks, head-to-head,
            in the same patient population.
          </p>
          <p>
            Where semaglutide wins is depth of evidence in non-weight indications.
            Cardiovascular outcomes (SELECT), chronic kidney disease (FLOW), and
            heart failure (STEP-HFpEF) all have published positive trials for
            semaglutide. Tirzepatide&rsquo;s parallel programme (SURMOUNT-MMO
            for cardiovascular outcomes) has not yet read out. For a patient
            with established cardiovascular disease, semaglutide currently has
            the stronger label.
          </p>
          <p>
            Side effect profiles are broadly similar in proportion, though
            tirzepatide patients in SURMOUNT-5 reported slightly fewer GI side
            effects than semaglutide patients in the same trial, possibly
            related to GIP signalling. Cost varies by market and insurance
            coverage. The full head-to-head, including the SURMOUNT-5 readout
            in detail, is in the{" "}
            <Link href="/glp-1/semaglutide-vs-tirzepatide">
              Semaglutide vs Tirzepatide
            </Link>{" "}
            cluster article.
          </p>

          <h2 id="safety-profile">Safety Profile</h2>
          <p>
            After almost two decades of post-marketing data on the class, the
            safety picture is reasonably settled. The common side effects are
            gastrointestinal: nausea, vomiting, diarrhoea, constipation. These
            affect 20 to 50 percent of patients during dose titration and
            typically resolve within 4 to 8 weeks of dose stabilisation. Slow
            dose escalation reduces incidence and severity.
          </p>
          <p>
            Pancreatitis is a known but rare signal. Background incidence in
            type 2 diabetes is elevated regardless of treatment. Meta-analyses
            of GLP-1 agonist trials have not shown a significant increase over
            comparator therapies, though FDA labels carry warnings.
            Gallbladder-related events (cholecystitis, cholelithiasis) are more
            common with GLP-1 agonists than placebo, particularly with rapid
            weight loss.
          </p>
          <p>
            Thyroid C-cell tumours occurred in rodent toxicology studies of
            liraglutide and exenatide, leading to boxed warnings about medullary
            thyroid carcinoma and contraindications in patients with personal or
            family history of MTC or MEN 2. Human data over 15 years has not
            confirmed an increased risk in clinical populations, but the
            warnings remain.
          </p>
          <p>
            Cardiovascular safety is now established as net positive. SELECT
            (semaglutide), LEADER (liraglutide), REWIND (dulaglutide), and
            SUSTAIN-6 (semaglutide diabetes) all reported MACE reductions in
            high-risk populations. The class went from a cardiovascular safety
            requirement under FDA guidance to a cardiovascular benefit indication
            within a decade.
          </p>
          <p>
            Newer signals being monitored include: dysesthesia (reported in 20.9
            percent of retatrutide 12mg patients in TRIUMPH-4, the first time
            this signal has emerged in the class), suicidal ideation (an EMA and
            FDA review in 2023 to 2024 did not find a causal link, but
            monitoring continues), and post-bariatric hypoglycaemia in patients
            with previous gastric surgery. The full safety synthesis is in the{" "}
            <Link href="/glp-1/safety-profile">GLP-1 Safety Profile</Link>{" "}
            cluster article.
          </p>
          <p>
            Body composition is the other open question. Rapid weight loss of
            any kind, including via GLP-1 agonism, includes loss of lean mass
            alongside fat mass. DXA substudies in STEP 1 reported approximately
            40 percent of total weight loss came from lean mass, with the
            remaining 60 percent from fat. The proportion is similar to what is
            seen with bariatric surgery and dietary weight loss at matched rate.
            The clinical concern is whether this reduces bone density and
            increases fracture risk in older patients. Trial data so far has
            not shown an excess fracture rate, but most trial populations were
            younger than the typical osteoporosis-risk demographic. Resistance
            training during weight loss is the standard mitigation, with growing
            interest in adjunctive therapies (myostatin inhibitors, activin
            inhibitors) that preserve lean mass during caloric deficit.
          </p>
          <p>
            One last note on safety reporting. Comparing side effect rates
            across trials requires care because dose titration schedules and
            placebo run-in periods differ. STEP 1 reported gastrointestinal
            adverse events in 74.2 percent of semaglutide patients and 47.9
            percent of placebo, but the gap narrowed substantially after dose
            stabilisation at week 16. Similar patterns appear in SURMOUNT-1 and
            TRIUMPH-4. Headline rates can overstate the chronic burden of side
            effects on the drug.
          </p>

          <h2 id="practical">Practical Considerations</h2>
          <h3>Dosing and titration</h3>
          <p>
            Every approved GLP-1 agonist requires gradual dose titration, with
            increases every 4 weeks until the target dose is reached.
            Semaglutide 2.4mg starts at 0.25mg and steps through 0.5, 1.0, 1.7
            to 2.4. Tirzepatide steps through 2.5, 5, 7.5, 10, 12.5, 15.
            Skipping titration steps increases GI side effect severity and
            discontinuation risk.
          </p>
          <h3>Administration</h3>
          <p>
            All approved GLP-1 agonists except oral Rybelsus and oral
            orforglipron are subcutaneous injection, typically into the abdomen,
            thigh, or upper arm. Pen devices are pre-filled and self-administered.
            Once-weekly dosing should occur on the same day each week, with up to
            48 hours of flexibility.
          </p>
          <h3>Cost and access</h3>
          <p>
            US list prices in 2026: Wegovy 2.4mg around $1,350 per month, Zepbound
            5 to 15mg around $1,060 per month, Ozempic 2.0mg around $1,000 per
            month, Mounjaro 15mg around $1,070 per month. Insurance coverage for
            obesity (as opposed to diabetes) varies widely and is the dominant
            access barrier in the US. Prices in Europe and the UK are
            substantially lower under negotiated reimbursement.
          </p>
          <h3>Compounded versions</h3>
          <p>
            Compounded semaglutide and tirzepatide flooded the US market during
            the 2022 to 2024 shortages. The FDA designated both as resolved
            shortages in late 2024 and early 2025, removing the legal basis for
            routine 503A compounding. Specific patient-need exceptions remain,
            and the compounding pharmacy market has shifted toward research
            peptides. Quality and purity vary widely. Independent third-party
            testing is the only way to verify what is in any compounded product.
          </p>
          <h3>Discontinuation and weight regain</h3>
          <p>
            Stopping a GLP-1 agonist results in significant weight regain. The
            STEP 1 extension trial showed that participants who stopped
            semaglutide regained roughly two-thirds of their lost weight within
            one year. This is consistent with the framing of obesity as a
            chronic disease requiring ongoing treatment, similar to hypertension
            or hyperlipidaemia. Maintenance dosing rather than discontinuation
            is the current clinical norm for patients who tolerate the drug.
          </p>

          <h2 id="comparison-landscape">Comparison Landscape</h2>
          <p>
            GLP-1 agonism sits alongside several other approaches to obesity
            management, with different efficacy ceilings and risk profiles.
          </p>
          <ul>
            <li>
              <strong>Bariatric surgery</strong>: Roux-en-Y gastric bypass
              produces 30 to 35 percent total weight loss at 1 to 2 years and
              has the most durable long-term data. Sleeve gastrectomy produces
              25 to 30 percent. Surgery is more invasive but produces effects
              that persist after the procedure, unlike pharmacotherapy.
            </li>
            <li>
              <strong>Older anti-obesity drugs</strong>: Phentermine,
              phentermine-topiramate, naltrexone-bupropion, and orlistat produce
              5 to 10 percent weight loss with various tolerability and safety
              concerns. The GLP-1 class has displaced these for most clinical
              use.
            </li>
            <li>
              <strong>Diet and exercise alone</strong>: Well-conducted lifestyle
              intervention trials (Look AHEAD, Diabetes Prevention Program)
              produce 5 to 8 percent weight loss at 1 year, with regression to
              baseline in many patients by year 4. Maintenance is the issue.
            </li>
            <li>
              <strong>Other peptide approaches</strong>: AOD-9604, CJC-1295,
              tesamorelin, and MOTS-c are sometimes marketed as fat loss
              peptides but have substantially weaker evidence. See the{" "}
              <Link href="/fat-loss">Fat Loss File</Link> for the full breakdown
              of where these compounds actually sit on the evidence ladder.
            </li>
          </ul>
          <p>
            The next generation of incretin therapies is in late-stage trials:
            CagriSema (semaglutide plus cagrilintide), survodutide (GLP-1 plus
            glucagon), MariTide (GLP-1 antibody plus GIP antagonist), and
            orforglipron (oral GLP-1). Multiple readouts will arrive in 2026 and
            2027. The class continues to expand, and the efficacy ceiling
            continues to climb.
          </p>
          <p>
            A useful frame for thinking about the trajectory: in 2014, an 8
            percent weight loss drug (liraglutide) was a meaningful clinical
            advance. In 2021, semaglutide nearly doubled that. In 2023,
            tirzepatide pushed past 20 percent. In 2025, retatrutide reported
            close to 30 percent. The same biology, at progressively higher
            receptor coverage and dose, has produced an efficacy curve more
            similar to early statins than to historical anti-obesity drugs.
            Whether the curve plateaus, continues, or steepens further depends
            on the next two pillars of incretin biology: oral bioavailability
            (orforglipron, oral semaglutide at higher doses, and the next wave
            of small-molecule agonists) and complementary mechanisms (amylin
            co-agonism via cagrilintide, glucagon co-agonism via survodutide
            and retatrutide, and the speculative quad-agonist designs in
            preclinical work).
          </p>

          {/* Cluster Grid */}
          <h2 id="cluster-articles">All GLP-1 Cluster Articles</h2>
          <p>
            Each of the seven cluster articles below goes deeper on a specific
            topic from this file. They are written for both first-time readers
            and clinicians, with consistent referencing and the same evidence
            standards used here.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {clusterLinks.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                style={{
                  display: "block",
                  backgroundColor: "#fafaf7",
                  border: "1px solid #d4d4cc",
                  padding: "1.25rem",
                  borderRadius: "2px",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.15s ease",
                }}
              >
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#555",
                    lineHeight: 1.6,
                  }}
                >
                  {c.excerpt}
                </div>
              </Link>
            ))}
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <details
              key={i}
              style={{
                borderBottom: "1px solid #d4d4cc",
                padding: "1rem 0",
              }}
            >
              <summary
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  color: "#1a1a1a",
                }}
              >
                {f.q}
              </summary>
              <div
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "#333",
                }}
              >
                {f.a}
              </div>
            </details>
          ))}

          {/* Disclaimer */}
          <aside
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              backgroundColor: "#fafaf7",
              border: "1px solid #d4d4cc",
              borderLeft: "3px solid #1a1a1a",
              borderRadius: "2px",
            }}
          >
            <div
              className="mono-label"
              style={{ marginBottom: "0.5rem", color: "#1a1a1a" }}
            >
              MEDICAL DISCLAIMER
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: "#333",
                margin: 0,
              }}
            >
              This article is for informational and educational purposes only. It
              is not medical advice and should not be used as a substitute for
              consultation with a licensed healthcare provider. GLP-1 receptor
              agonists are prescription medications with significant side
              effects and contraindications. Retatrutide is investigational and
              not approved by the FDA or any other regulatory body. Compounded
              versions of GLP-1 agonists carry quality and purity risks that
              vary by source. Do not start, stop, or modify any medication
              without speaking to a qualified clinician familiar with your
              medical history.
            </p>
          </aside>

          {/* Newsletter */}
          <section
            style={{
              marginTop: "3rem",
              padding: "2rem",
              backgroundColor: "#1a1a1a",
              color: "#fafaf7",
              borderRadius: "2px",
            }}
          >
            <div
              className="mono-label"
              style={{ marginBottom: "0.75rem", color: "#fafaf7" }}
            >
              THE PEPTIDE FILE NEWSLETTER
            </div>
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 600,
                margin: "0 0 0.75rem 0",
                color: "#fafaf7",
              }}
            >
              New trial readouts, decoded.
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                margin: "0 0 1.25rem 0",
                color: "#d4d4cc",
              }}
            >
              Phase III data on retatrutide, orforglipron, CagriSema, MariTide,
              and the rest of the 2026 pipeline. One email a week. No hype.
            </p>
            <Link
              href="/newsletter"
              style={{
                display: "inline-block",
                padding: "0.625rem 1.25rem",
                backgroundColor: "#fafaf7",
                color: "#1a1a1a",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "2px",
              }}
            >
              Subscribe
            </Link>
          </section>
        </article>

        {/* Sidebar */}
        <aside
          style={{
            position: "sticky",
            top: "2rem",
            fontSize: "0.875rem",
          }}
        >
          {/* TOC */}
          <nav
            style={{
              borderTop: "2px solid #1a1a1a",
              paddingTop: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              className="mono-label"
              style={{ marginBottom: "0.75rem", color: "#1a1a1a" }}
            >
              IN THIS FILE
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    style={{
                      color: "#333",
                      textDecoration: "none",
                      lineHeight: 1.4,
                      display: "block",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Related Files */}
          <div
            style={{
              borderTop: "2px solid #1a1a1a",
              paddingTop: "1rem",
            }}
          >
            <div
              className="mono-label"
              style={{ marginBottom: "0.75rem", color: "#1a1a1a" }}
            >
              RELATED FILES
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
              }}
            >
              <li>
                <Link
                  href="/retatrutide"
                  style={{ color: "#1a1a1a", textDecoration: "none" }}
                >
                  The Retatrutide File
                </Link>
              </li>
              <li>
                <Link
                  href="/fat-loss"
                  style={{ color: "#1a1a1a", textDecoration: "none" }}
                >
                  The Fat Loss File
                </Link>
              </li>
              <li>
                <Link
                  href="/retatrutide/vs-semaglutide"
                  style={{ color: "#1a1a1a", textDecoration: "none" }}
                >
                  Retatrutide vs Semaglutide
                </Link>
              </li>
              <li>
                <Link
                  href="/retatrutide/vs-tirzepatide"
                  style={{ color: "#1a1a1a", textDecoration: "none" }}
                >
                  Retatrutide vs Tirzepatide
                </Link>
              </li>
              <li>
                <Link
                  href="/retatrutide/clinical-trial-results"
                  style={{ color: "#1a1a1a", textDecoration: "none" }}
                >
                  Phase III Trial Results
                </Link>
              </li>
              <li>
                <Link
                  href="/retatrutide/weight-loss-projections"
                  style={{ color: "#1a1a1a", textDecoration: "none" }}
                >
                  Weight Loss Projections
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
