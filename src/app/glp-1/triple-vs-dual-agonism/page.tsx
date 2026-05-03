import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Triple Agonist vs Dual Agonist: What Glucagon Adds | Peptide File",
  description:
    "Triple agonists add glucagon to GLP-1 + GIP. The +6.2 pp jump from tirzepatide to retatrutide, the dysesthesia signal, and the receptor-by-receptor data.",
  openGraph: {
    title: "Triple Agonist vs Dual Agonist: What Glucagon Adds",
    description:
      "Triple agonists add glucagon to GLP-1 + GIP. The +6.2 pp jump from tirzepatide to retatrutide, the dysesthesia signal, and the receptor-by-receptor data.",
    url: "https://peptidefile.com/glp-1/triple-vs-dual-agonism",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triple Agonist vs Dual Agonist: What Glucagon Adds",
    description:
      "Triple agonists add glucagon to GLP-1 + GIP. The +6.2 pp jump from tirzepatide to retatrutide, the dysesthesia signal, and the receptor-by-receptor data.",
  },
  alternates: {
    canonical: "https://peptidefile.com/glp-1/triple-vs-dual-agonism",
  },
};

const faqs = [
  {
    q: "What is the difference between a triple agonist and a dual agonist?",
    a: "A dual agonist activates two receptors. A triple agonist activates three. In the GLP-1 class, tirzepatide is the only approved dual agonist (GLP-1 + GIP). Retatrutide is the lead triple agonist in clinical development, adding the glucagon receptor as the third target. Each additional receptor activates a different metabolic pathway, and Phase III data show the additional pathways translate into additional weight loss.",
  },
  {
    q: "What does adding glucagon to GLP-1 and GIP actually do?",
    a: "Glucagon receptor activation increases energy expenditure. Where GLP-1 and GIP work mainly by reducing energy intake (suppressing appetite, slowing gastric emptying, improving insulin response), glucagon works on the other side of the equation by increasing the metabolic rate. It stimulates hepatic lipid oxidation and raises basal energy expenditure. In Phase III trials, this translated to roughly 6 percentage points of additional weight loss on top of the dual-agonism benefit.",
  },
  {
    q: "Doesn't glucagon raise blood sugar? Why use it for weight loss?",
    a: "Native glucagon does raise blood glucose by stimulating hepatic glucose output, which is why this seemed counterintuitive for years. The resolution is that retatrutide's GLP-1 component dominates the glucose-regulation effect. GLP-1 stimulates glucose-dependent insulin release and suppresses glucagon's hyperglycaemic effect at the pancreas. Net glucose control is preserved or improved. The TRANSCEND-T2D-1 trial reported a 2.0% A1C reduction at 12mg over 40 weeks in type 2 diabetes patients, alongside 16.8% weight loss.",
  },
  {
    q: "How much extra weight loss does the third receptor produce?",
    a: "TRIUMPH-4 reported 28.7% weight loss with retatrutide 12mg at 68 weeks. SURMOUNT-1 reported 22.5% with tirzepatide 15mg at 72 weeks. The gap is 6.2 percentage points. The roughly comparable jump from semaglutide (GLP-1 only, 14.9%) to tirzepatide (GLP-1 + GIP, 22.5%) was 7.6 percentage points. Each additional receptor adds roughly 5 to 7 percentage points, and the pattern holds across the class.",
  },
  {
    q: "What is dysesthesia and why is it specific to triple agonists?",
    a: "Dysesthesia is an abnormal skin sensation, most commonly described as tingling, prickling, or a pins-and-needles feeling. In TRIUMPH-4, dysesthesia was reported by 20.9% of participants on retatrutide 12mg, 8.8% on 9mg, and 0.7% on placebo. It was not reported in the Phase II trial and only appeared at scale in Phase III. The signal is absent in GLP-1-only and GLP-1 + GIP compounds, which strongly suggests glucagon receptor activation as the cause. Eli Lilly has stated that dysesthesia does not generally lead to discontinuation, though the overall TRIUMPH-4 discontinuation rate at 12mg was 18.2% versus 4% on placebo.",
  },
  {
    q: "Is retatrutide the only triple agonist in development?",
    a: "It is the most advanced and the only one in Phase III for obesity. Other triple-agonist candidates exist in earlier-stage development across multiple companies, but the field is currently dominated by dual agonists in late-stage trials. Mazdutide (Innovent) and survodutide (Boehringer/Zealand) are dual GLP-1 + glucagon agonists in Phase III, skipping GIP entirely. Whether the GLP-1 + glucagon combination produces results comparable to GLP-1 + GIP + glucagon is one of the open questions the next two years of trial readouts should answer.",
  },
  {
    q: "Will quadruple agonists be the next step?",
    a: "Possibly. Several companies have published preclinical data on compounds that add a fourth receptor (most often amylin or glucose-dependent insulinotropic peptide variants) to the GLP-1 + GIP + glucagon backbone. Whether the receptor-stacking pattern of roughly 5 to 7 percentage points per receptor continues at four receptors is unknown and there is reason to think it may not. Mechanistic ceilings exist, and side-effect burden tends to compound as more receptors are activated. The next answer is more likely from amylin co-agonists like CagriSema (cagrilintide + semaglutide) than from a single quadruple-agonist molecule.",
  },
  {
    q: "Should patients wait for retatrutide instead of starting a dual agonist?",
    a: "Generally no. Retatrutide is investigational and not expected to receive FDA approval before late 2027 or 2028, with NDA submission expected late 2026. Tirzepatide is approved, available, and produces 22.5% weight loss in trials and roughly 60 to 75% of that figure in real-world use. The 6.2 percentage point gap between dual and triple agonism is real but it is a fraction of the gap between any treatment and no treatment. For patients with active obesity or type 2 diabetes, the right answer is usually to start a currently approved compound and revisit the question if and when retatrutide reaches market.",
  },
];

const receptorContributions = [
  {
    receptor: "GLP-1 receptor",
    role: "Primary appetite suppression and glucose regulation",
    detail:
      "Glucose-dependent insulin release from pancreatic beta cells, suppression of glucagon from alpha cells, slowed gastric emptying, and reduced appetite signalling in the hypothalamus and brainstem. This is the foundation receptor every drug in the class activates. Without it, none of the others produce meaningful weight loss on their own.",
  },
  {
    receptor: "GIP receptor",
    role: "Amplifies GLP-1 satiety, improves GI tolerability",
    detail:
      "Receptors on pancreatic beta and alpha cells, adipose tissue, central nervous system (hypothalamus and brainstem), and bone tissue. The CNS expression appears to amplify GLP-1's satiety signalling. Adipose-tissue GIP signalling supports lipid handling. Adding GIP to GLP-1 produced a 7.6 percentage point gain in SURMOUNT-1 versus STEP 1, alongside slightly improved GI tolerability.",
  },
  {
    receptor: "Glucagon receptor",
    role: "Raises energy expenditure",
    detail:
      "Hepatic glucagon receptors stimulate lipid oxidation and increase basal metabolic rate. This is the energy-expenditure side of the weight loss equation, where GLP-1 and GIP work on the energy-intake side. The trade-off appears in the dysesthesia signal at 20.9% in TRIUMPH-4 12mg, the only safety signal on the chart that is unique to triple agonism.",
  },
];

export default function TripleVsDualAgonismPage() {
  const article = articleSchema({
    headline: "Triple Agonist vs Dual Agonist: What Glucagon Adds",
    description:
      "Triple agonists add glucagon to GLP-1 + GIP. The +6.2 pp jump from tirzepatide to retatrutide, the dysesthesia signal, and the receptor-by-receptor data.",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
    image: "https://peptidefile.com/og-glp-1-triple-vs-dual-agonism.png",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "GLP-1", item: "https://peptidefile.com/glp-1" },
    {
      name: "Triple vs Dual Agonism",
      item: "https://peptidefile.com/glp-1/triple-vs-dual-agonism",
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
          <span>Receptor Biology</span>
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
          Triple Agonist vs Dual Agonist: What Glucagon Adds
        </h1>

        <p className="page-intro">
          Tirzepatide added GIP to GLP-1 and produced 22.5% weight loss in
          Phase III. Retatrutide adds glucagon to GLP-1 + GIP and reaches
          28.7%. The 6.2 percentage point gap is the clinical signature of
          triple agonism. It also brings a new safety signal that does not
          appear in any dual-agonist trial: dysesthesia at 20.9% in
          TRIUMPH-4 participants on the top dose.
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
          <span>~1,800 words</span>
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
            { stat: "14.9%", label: "Semaglutide (GLP-1 only)" },
            { stat: "22.5%", label: "Tirzepatide (GLP-1 + GIP)" },
            { stat: "28.7%", label: "Retatrutide (triple agonist)" },
            { stat: "+6.2 pp", label: "Triple over dual advantage" },
            { stat: "20.9%", label: "Dysesthesia at 12mg, TRIUMPH-4" },
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
              Tirzepatide established what dual agonism could do. Adding GIP
              to GLP-1 produced 22.5% weight loss in SURMOUNT-1, a 7.6
              percentage point gain over semaglutide's 14.9%. The next
              question was obvious. If two receptors beat one, do three beat
              two? Retatrutide's TRIUMPH-4 trial answered the question with
              28.7% weight loss at the top dose. The third receptor was
              glucagon, and it added another 6.2 percentage points on top of
              what tirzepatide had already proven.
            </p>
            <p>
              That is the headline story of triple agonism. The longer story
              is more interesting. Glucagon was the unlikely third receptor,
              because for decades the textbook taught that glucagon raised
              blood sugar and was the wrong direction for a metabolic drug.
              The mechanism that resolves the paradox is that GLP-1 dominates
              the glucose-regulation effect while glucagon contributes
              somewhere different: energy expenditure. The trade-off is a new
              safety signal. Dysesthesia, an abnormal tingling sensation, was
              reported by 20.9% of TRIUMPH-4 participants on the 12mg dose
              and is not seen in any dual-agonist trial.
            </p>
            <p>
              This article covers what each receptor contributes, why
              glucagon was the surprising addition, and what the receptor
              progression looks like in clinical data. For the GIP-specific
              context that sits underneath the triple-agonism story see{" "}
              <Link href="/glp-1/vs-gip">GLP-1 vs GIP</Link>. For the
              individual compound comparison that puts retatrutide alongside
              its competitors see the{" "}
              <Link href="/glp-1/comparison-chart-2026">
                GLP-1 Comparison Chart 2026
              </Link>
              .
            </p>
          </section>

          {/* WHAT DUAL AGONISM ESTABLISHED */}
          <section id="what-dual-established" style={{ marginBottom: 80 }}>
            <h2>What dual agonism established</h2>
            <p>
              Tirzepatide is the only approved dual agonist in the class.
              Approved by the FDA in May 2022 for type 2 diabetes (Mounjaro)
              and November 2023 for weight loss (Zepbound), it activates the
              GLP-1 receptor and the GIP receptor with a single peptide. The
              SURMOUNT-1 trial (Jastreboff et al., NEJM, 2022, PMID:
              35658024, NCT04184622) reported 22.5% weight loss at the 15mg
              dose over 72 weeks. SURMOUNT-5 (Aronne et al., NEJM, 2025) put
              tirzepatide head-to-head against semaglutide and reported
              20.2% versus 13.7% at 72 weeks, a direct demonstration that
              the dual-agonism advantage was real.
            </p>
            <p>
              The size of that advantage was the clinical proof of concept
              that mattered. Until SURMOUNT-1, the field had a single
              receptor (GLP-1) and a ceiling around 15% weight loss. The
              jump to 22.5% with a second receptor was not a refinement.
              It was a step change. It validated the multi-receptor strategy
              and made the next question, what a third receptor could add,
              the dominant question in obesity drug development for the
              following five years. Retatrutide was the answer.
            </p>
          </section>

          {/* WHAT GLUCAGON BRINGS */}
          <section id="what-glucagon-brings" style={{ marginBottom: 80 }}>
            <h2>What glucagon brings as a third receptor</h2>
            <p>
              Glucagon was a counterintuitive choice. The textbook role of
              glucagon, secreted from pancreatic alpha cells in response to
              low blood sugar, is to raise blood glucose by stimulating
              hepatic glucose output. For a drug intended to treat type 2
              diabetes alongside obesity, raising blood glucose is the wrong
              direction. The reason glucagon agonism made sense anyway is
              that the hepatic glucose effect is not the only thing the
              glucagon receptor does. It also stimulates lipid oxidation in
              the liver and raises basal energy expenditure across multiple
              tissues. In a compound that already contains a strong GLP-1
              component, the GLP-1 effect dominates glucose regulation while
              the glucagon effect adds a metabolic rate signal that GLP-1
              and GIP do not provide on their own.
            </p>
            <p>
              The breakdown of what each of retatrutide's three receptors
              contributes:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0" }}>
              {receptorContributions.map((item) => (
                <li
                  key={item.receptor}
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
                    {item.receptor} — {item.role}
                  </span>
                  <span style={{ fontSize: "1.0625rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.75 }}>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>

            <p>
              The intake-versus-expenditure framing is the cleanest way to
              think about why three receptors beat two. GLP-1 and GIP both
              act primarily on energy intake, suppressing appetite and
              improving postprandial metabolism. Glucagon adds a separate
              channel: energy expenditure. Two compounds working on the
              same side of the balance produce diminishing returns past a
              certain point. Adding a compound that works on the other side
              opens new headroom. That is the mechanistic argument for why
              the receptor-stacking pattern continues, and the TRANSCEND-T2D-1
              trial (March 2026) provided the diabetes-specific data point,
              with retatrutide 12mg producing a 2.0% A1C reduction and 16.8%
              weight loss at 40 weeks in type 2 diabetes patients.
            </p>
          </section>

          {/* THE PROGRESSION */}
          <section id="receptor-progression" style={{ marginBottom: 80 }}>
            <h2>The receptor-by-receptor progression</h2>
            <p>
              The pattern across the class is consistent. Each receptor
              added produces roughly 5 to 7 percentage points of additional
              weight loss in head-to-head trial data. The progression looks
              additive rather than competitive, which suggests the
              mechanisms combine without significant interference.
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
                      "Receptors",
                      "Trial",
                      "Top-dose loss",
                      "Gain over previous",
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
                    ["Liraglutide", "GLP-1", "SCALE", "8.0%", "Baseline"],
                    ["Semaglutide", "GLP-1", "STEP 1", "14.9%", "+6.9 pp"],
                    ["Tirzepatide", "GLP-1 + GIP", "SURMOUNT-1", "22.5%", "+7.6 pp"],
                    ["Retatrutide", "GLP-1 + GIP + Glucagon", "TRIUMPH-4", "28.7%", "+6.2 pp"],
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
              Liraglutide and semaglutide share a single receptor mechanism
              but differ in dose, half-life, and exposure. The 6.9 point
              jump from liraglutide to semaglutide reflects what better
              dosing of a single receptor can achieve. The 7.6 point jump
              from semaglutide to tirzepatide reflects the addition of GIP.
              The 6.2 point jump from tirzepatide to retatrutide reflects
              the addition of glucagon. The pattern is the strongest
              evidence available that the receptor-stacking strategy
              produces predictable returns within the current ceiling.
              Whether that ceiling sits closer to 30% or extends further is
              what the next generation of compounds is designed to test.
            </p>
          </section>

          {/* THE TRADE-OFF */}
          <section id="dysesthesia-trade-off" style={{ marginBottom: 80 }}>
            <h2>The dysesthesia trade-off</h2>
            <p>
              The new safety signal that arrived with triple agonism is
              dysesthesia, an abnormal sensation typically described as
              tingling, prickling, or pins and needles, usually in the
              extremities. In TRIUMPH-4, dysesthesia was reported by 20.9%
              of participants on the 12mg dose, 8.8% on the 9mg dose, and
              0.7% on placebo. It was not reported in retatrutide's Phase
              II trial (Jastreboff et al., NEJM, 2023, PMID: 37366315),
              which means it only became visible at the larger Phase III
              sample size. It is absent in tirzepatide's SURMOUNT trials
              and absent in semaglutide's STEP and SELECT trials, which
              points to glucagon receptor activation as the likely cause.
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
                Eli Lilly has stated that dysesthesia does not generally
                lead to discontinuation. The full TRIUMPH-4 discontinuation
                rate at 12mg was 18.2%, compared to 12.2% at 9mg and 4% on
                placebo. The dysesthesia rate is roughly equal to the
                discontinuation rate at the 12mg dose, but the symptom
                appears to be tolerable for most participants who continue
                treatment.
              </div>
            </div>

            <p>
              The mechanism remains uncertain. Glucagon receptors are
              expressed in peripheral nerves and several CNS regions, and
              activation could plausibly alter sensory signalling at either
              site. The dose-response relationship (0.7% at placebo, 8.8% at
              9mg, 20.9% at 12mg) supports a dose-dependent on-target
              effect rather than an unrelated side effect. For most
              participants the sensation is mild and self-limiting. For a
              minority it is more disruptive, and dose adjustment to 9mg
              from 12mg appears to reduce the rate by more than half. This
              is the trade-off the field has accepted for the additional
              6.2 percentage points of weight loss the third receptor
              produces. For the broader safety context across the class
              see{" "}
              <Link href="/glp-1/safety-profile">GLP-1 Safety Profile</Link>.
            </p>
          </section>

          {/* WHERE THE FIELD IS GOING */}
          <section id="where-going" style={{ marginBottom: 80 }}>
            <h2>Where multi-agonism is going next</h2>
            <p>
              Retatrutide is the most advanced triple agonist but it is not
              the only multi-receptor candidate in late-stage trials. The
              landscape now splits into three strategies. The first is
              pure receptor stacking, extending the GLP-1 + GIP + glucagon
              backbone to four receptors with candidates that add amylin or
              other metabolic targets in preclinical or early clinical
              testing. The second is selective dual combinations that skip
              GIP entirely, with mazdutide (Innovent) and survodutide
              (Boehringer/Zealand) testing whether GLP-1 + glucagon alone
              can match GLP-1 + GIP + glucagon at lower side-effect cost.
              The third is co-administration, exemplified by Novo's
              CagriSema (cagrilintide + semaglutide), which adds an amylin
              analogue to a GLP-1 agonist as two molecules rather than one.
            </p>
            <p>
              The next two years of trial readouts will determine which of
              these strategies wins out. The receptor-stacking pattern of
              5 to 7 percentage points per receptor cannot continue
              indefinitely, and somewhere in the next generation a ceiling
              should appear. Whether that ceiling sits at 30%, 35%, or
              higher is the open question. For the practitioner-grade
              comparison of the two compounds at the centre of the dual
              category right now see{" "}
              <Link href="/glp-1/semaglutide-vs-tirzepatide">
                Semaglutide vs Tirzepatide
              </Link>
              .
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
              This article is for informational and educational purposes only and does not constitute medical advice. Retatrutide is investigational and has not been approved by the FDA, EMA, MHRA, or any other regulatory agency as of May 2026. Tirzepatide is approved for weight management and type 2 diabetes; prescribing information, contraindications, and side effects should be reviewed in the official product label. Consult a licensed healthcare provider before starting, stopping, or changing any medication.
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
                href="#what-dual-established"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                What dual agonism established
              </a>
              <a
                href="#what-glucagon-brings"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                What glucagon brings
              </a>
              <a
                href="#receptor-progression"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Receptor-by-receptor progression
              </a>
              <a
                href="#dysesthesia-trade-off"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                The dysesthesia trade-off
              </a>
              <a
                href="#where-going"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Where multi-agonism is going
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
                href="/glp-1/comparison-chart-2026"
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
                Comparison Chart 2026
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
