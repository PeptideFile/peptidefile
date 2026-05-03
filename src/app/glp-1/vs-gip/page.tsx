import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "GLP-1 vs GIP: The Difference at the Receptor Level | Peptide File",
  description:
    "GLP-1 and GIP are both incretin hormones, but only one was thought to drive weight loss. Tirzepatide proved otherwise. Here's the receptor biology and the trial data.",
  openGraph: {
    title: "GLP-1 vs GIP: The Difference at the Receptor Level",
    description:
      "GLP-1 and GIP are both incretin hormones, but only one was thought to drive weight loss. Tirzepatide proved otherwise. Here's the receptor biology and the trial data.",
    url: "https://peptidefile.com/glp-1/vs-gip",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLP-1 vs GIP: The Difference at the Receptor Level",
    description:
      "GLP-1 and GIP are both incretin hormones, but only one was thought to drive weight loss. Tirzepatide proved otherwise. Here's the receptor biology and the trial data.",
  },
  alternates: {
    canonical: "https://peptidefile.com/glp-1/vs-gip",
  },
};

const faqs = [
  {
    q: "What is the difference between GLP-1 and GIP?",
    a: "GLP-1 (glucagon-like peptide-1) and GIP (glucose-dependent insulinotropic polypeptide) are both incretin hormones released from the gut after eating. They both stimulate insulin release from the pancreas. The differences are where they come from, what other tissues they act on, and what they do to body weight. GLP-1 is released from L-cells in the lower small intestine and colon, slows gastric emptying, and reduces appetite through receptors in the brain. GIP is released from K-cells in the upper small intestine, has minimal effect on gastric emptying, and acts on adipose tissue and the central nervous system in ways that are still being mapped.",
  },
  {
    q: "Why was GIP ignored as a weight-loss target for so long?",
    a: "Early animal work in the 2000s suggested GIP receptor activation promoted fat storage and weight gain. Knockout mouse studies showed GIP-receptor-deficient mice were resistant to diet-induced obesity, which led to a decade of research focused on GIP receptor antagonism rather than agonism. Tirzepatide reversed this assumption. A dual GLP-1/GIP agonist produced more weight loss than GLP-1 alone, suggesting that GIP agonism in humans does the opposite of what the rodent models predicted. The mechanism for this species difference is still under investigation.",
  },
  {
    q: "Does GIP work without GLP-1?",
    a: "Probably not for weight loss. Trials of GIP-only agonists have not produced meaningful weight reduction in humans. The current view is that GIP needs GLP-1 in the background to translate its effects into appetite suppression and weight loss. GIP appears to amplify GLP-1's effects in the central nervous system rather than acting as an independent weight-loss signal. Pure GIP agonists may have a role in glucose control and lipid metabolism, but standalone weight-loss efficacy has not been demonstrated.",
  },
  {
    q: "How does tirzepatide use the GIP receptor?",
    a: "Tirzepatide is a single peptide that binds both the GLP-1 receptor and the GIP receptor with high affinity. The molecule is structurally based on native GIP, with modifications that give it GLP-1 receptor binding activity in addition to its native GIP binding. Once injected, it activates both receptors at appropriate doses. SURMOUNT-1 reported 22.5% weight loss at 15mg over 72 weeks, compared with semaglutide's 14.9% at 2.4mg over 68 weeks in STEP 1. The roughly 7-percentage-point gap is attributed to the GIP component, though the precise contribution is hard to isolate.",
  },
  {
    q: "Is GIP agonism safer than GLP-1 agonism alone?",
    a: "GI tolerability appears slightly better with dual GLP-1/GIP compounds than with pure GLP-1 agonists, though the data are not definitive. Tirzepatide trial participants reported nausea at rates broadly similar to semaglutide, but the severity profile differs in some analyses. There is no signal that adding GIP introduces a new class of side effects. By contrast, adding glucagon (as in retatrutide) introduces dysesthesia, an abnormal skin sensation reported at 20.9% in TRIUMPH-4 12mg participants and 0.7% on placebo. GIP agonism does not appear to carry an equivalent novel signal.",
  },
  {
    q: "What about pure GIP agonists in development?",
    a: "Several pure GIP agonists are in early clinical testing for metabolic indications. None has reported weight-loss data competitive with the multi-receptor compounds. The pharmaceutical interest in GIP-only molecules has shifted toward niche metabolic uses (lipid handling, postprandial glucose) rather than weight management. The dominant strategy in the obesity pipeline is multi-receptor combinations: GLP-1 + GIP, GLP-1 + glucagon, or all three together as in retatrutide.",
  },
  {
    q: "What is glucagon's role in retatrutide and why is it different from GIP?",
    a: "Glucagon raises blood glucose by signalling the liver to release stored glycogen. Adding it to a GLP-1/GIP molecule sounds counterproductive for diabetes, but glucagon also increases energy expenditure, which adds a thermogenic component that GLP-1 and GIP lack. Retatrutide's roughly 28.7% weight loss in TRIUMPH-4 reflects the addition of this third mechanism. The trade-off is the dysesthesia signal noted above, which is attributed to glucagon receptor activity. For more on this see triple vs dual agonism.",
  },
  {
    q: "Should I use a GLP-1 agonist or wait for a triple agonist?",
    a: "Approved options today are tirzepatide (Zepbound, dual GLP-1/GIP) and semaglutide (Wegovy, GLP-1 only). Both are in routine clinical use. Retatrutide (triple agonist) is investigational and has not been approved by any regulator as of May 2026. Lilly has stated NDA submission is expected late 2026, with possible approval in 2027 or 2028. Waiting two to three years for a slightly more effective drug is generally not recommended when current options produce 14 to 22% weight loss with established safety records. Treatment decisions belong with a healthcare provider.",
  },
];

const receptorSignals = [
  {
    date: "GIP",
    name: "Glucose-dependent insulinotropic polypeptide",
    detail:
      "42-amino-acid peptide released from K-cells in the duodenum and proximal jejunum after a meal. Stimulates insulin from pancreatic beta cells and acts on adipose tissue. Half-life roughly 5 to 7 minutes. The dominant incretin in healthy adults, contributing more to post-meal insulin response than GLP-1 in the absence of disease.",
  },
  {
    date: "GLP-1",
    name: "Glucagon-like peptide-1",
    detail:
      "30-amino-acid peptide released from L-cells in the ileum and colon. Stimulates insulin, suppresses glucagon, slows gastric emptying, and reduces appetite via central receptors. Half-life roughly 2 minutes. The incretin that drives the modern weight-loss class because of its broad receptor distribution and central nervous system effects.",
  },
  {
    date: "Combined",
    name: "Dual GLP-1 + GIP agonism",
    detail:
      "Tirzepatide binds both receptors as a single molecule. The combination produced 22.5% weight loss in SURMOUNT-1 versus 14.9% for semaglutide (GLP-1 only) in STEP 1. The roughly 7-point gap is the clinical signal that GIP agonism contributes to weight loss in humans, contrary to earlier rodent evidence.",
  },
];

export default function GLP1vsGIPPage() {
  const article = articleSchema({
    headline: "GLP-1 vs GIP: The Difference at the Receptor Level",
    description:
      "GLP-1 and GIP are both incretin hormones, but only one was thought to drive weight loss. Tirzepatide proved otherwise. Here's the receptor biology and the trial data.",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
    image: "https://peptidefile.com/og-glp-1-vs-gip.png",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "GLP-1", item: "https://peptidefile.com/glp-1" },
    {
      name: "GLP-1 vs GIP",
      item: "https://peptidefile.com/glp-1/vs-gip",
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
          GLP-1 vs GIP: The Difference at the Receptor Level
        </h1>

        <p className="page-intro">
          GLP-1 and GIP are both incretin hormones released from the gut
          after meals, and both signal the pancreas to release insulin. For
          two decades, only GLP-1 was considered useful for weight loss.
          Tirzepatide proved that assumption wrong. Adding GIP receptor
          activity to a GLP-1 agonist produced 22.5% weight loss in
          SURMOUNT-1 versus semaglutide's 14.9% in STEP 1, a gap that
          forced a re-evaluation of GIP's role in human metabolism.
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
          <span>~1,600 words</span>
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
            { stat: "~2 min", label: "GLP-1 native half-life" },
            { stat: "~5–7 min", label: "GIP native half-life" },
            { stat: "14.9%", label: "Semaglutide (GLP-1 only)" },
            { stat: "22.5%", label: "Tirzepatide (GLP-1 + GIP)" },
            { stat: "+7.6 pts", label: "Dual agonism advantage" },
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
              GIP was the original incretin. Discovered in 1971, it predates
              GLP-1 in the scientific literature by more than a decade. For
              most of that time, GIP was considered an interesting hormone
              with limited therapeutic potential. Animal data in the 2000s
              even suggested that blocking the GIP receptor might be the
              right move for obesity, because GIP-receptor-deficient mice
              resisted weight gain on high-fat diets. The pharmaceutical
              industry largely set GIP aside.
            </p>
            <p>
              Tirzepatide upended that view. A single peptide that activates
              both the GLP-1 and GIP receptors produced more weight loss in
              human trials than any GLP-1-only compound had managed. The
              gap was substantial. SURMOUNT-1 reported 22.5% at 15mg over
              72 weeks. STEP 1 reported 14.9% at 2.4mg over 68 weeks. The
              two trials were not directly comparable, but the head-to-head
              SURMOUNT-5 trial later confirmed the gap: 20.2% for tirzepatide
              versus 13.7% for semaglutide at 72 weeks (Aronne et al., NEJM,
              2025).
            </p>
            <p>
              This article covers the receptor biology behind that gap. It
              explains where GLP-1 and GIP come from, what each receptor
              does in different tissues, why GIP was misjudged for so long,
              and what the trial data say about the contribution GIP makes
              when added to a GLP-1 backbone. For mechanism-level discussion
              of how the GLP-1 receptor itself works, see{" "}
              <Link href="/glp-1/how-glp-1-agonists-work">
                How GLP-1 Agonists Work
              </Link>
              . For the broader question of how triple agonism extends the
              pattern, see{" "}
              <Link href="/glp-1/triple-vs-dual-agonism">
                Triple vs Dual Agonism
              </Link>
              .
            </p>
          </section>

          {/* WHAT THEY ARE */}
          <section id="what-they-are" style={{ marginBottom: 80 }}>
            <h2>What GIP is and where the receptor lives</h2>
            <p>
              Glucose-dependent insulinotropic polypeptide is a 42-amino-acid
              peptide hormone released from K-cells, which sit in the
              duodenum and upper jejunum. K-cells respond to nutrients
              passing through the upper small intestine, particularly fats
              and carbohydrates. GIP is released within minutes of a meal,
              peaks faster than GLP-1, and is broken down by the same
              enzyme (DPP-4) over a 5 to 7 minute half-life.
            </p>
            <p>
              The GIP receptor (GIPR) is a class B G-protein-coupled
              receptor, like the GLP-1 receptor. It is expressed in a
              different set of tissues, which is the source of GIP's distinct
              physiological profile:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0" }}>
              {[
                {
                  label: "Pancreatic beta cells",
                  text: "Insulin release in response to elevated blood glucose. This is the original mechanism that earned GIP the 'insulinotropic' part of its name. The effect is glucose-dependent, similar to GLP-1, which is why dual GLP-1/GIP agonism does not increase hypoglycaemia risk above GLP-1 alone.",
                },
                {
                  label: "Pancreatic alpha cells",
                  text: "Modest stimulation of glucagon release in low-glucose conditions. This is the opposite of GLP-1, which suppresses glucagon. The two hormones balance each other on the alpha cell, which may be one reason that combining them does not blunt insulin sensitivity.",
                },
                {
                  label: "Adipose tissue",
                  text: "GIP receptors on white adipocytes regulate fat storage and lipid handling. Animal models suggested this drove weight gain, but the human data with tirzepatide point to a more nuanced role: in combination with GLP-1, GIP appears to support energy expenditure rather than accelerate fat accumulation.",
                },
                {
                  label: "Central nervous system",
                  text: "GIP receptors in the hypothalamus and brainstem appear to amplify GLP-1's appetite-suppressing effects. Recent research suggests GIP agonism modulates the satiety circuits in ways that GLP-1 alone does not reach, which may explain the additive weight loss seen with dual agonism.",
                },
                {
                  label: "Bone tissue",
                  text: "GIP receptor activity has effects on bone turnover, with some evidence of improved bone density. This is mostly a research observation rather than a clinically actionable point, but it is one of the few tissue effects clearly distinct from GLP-1.",
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
              The receptor distribution explains why GIP-only therapy has
              never produced the kind of weight loss that GLP-1 agonists
              do. GIP lacks the gastric-emptying effect that drives much of
              the satiety experience with GLP-1 drugs, and its central
              nervous system reach is narrower. GIP appears to be an
              amplifier rather than a primary signal. Activating it without
              GLP-1 in the background does not produce the same downstream
              effect.
            </p>
          </section>

          {/* WHAT THE RESEARCH SAYS */}
          <section id="what-the-research-says" style={{ marginBottom: 80 }}>
            <h2>Why GIP was misjudged for two decades</h2>
            <p>
              The case against GIP came from rodent genetics. In 2002, a
              landmark paper from Yutaka Seino's lab (Miyawaki et al.,
              Nature Medicine, PMID: 12068290) showed that mice lacking the
              GIP receptor were protected against diet-induced obesity. The
              animals ate the same high-fat diet as wild-type controls but
              gained less weight and stored less fat. Subsequent papers
              reinforced the picture. GIP looked like a fat-storage signal,
              and the obvious therapeutic implication was to block the
              receptor, not activate it.
            </p>
            <p>
              Several pharmaceutical programs pursued GIP receptor
              antagonists in the 2000s and 2010s. None produced clinically
              meaningful weight loss in humans. Around the same time, a
              parallel line of research showed that pure GIP agonists did
              not produce weight gain in human volunteers, contradicting
              the rodent prediction in the opposite direction. The picture
              was inconsistent enough that the field began to suspect a
              species difference between rodents and humans in how GIP
              affects energy balance.
            </p>
            <p>
              Tirzepatide settled the question pragmatically. Eli Lilly's
              dual agonist entered Phase II for type 2 diabetes in 2017,
              and SURPASS-2 (Frías et al., NEJM, 2021, PMID: 34170647)
              reported 11 to 13% weight loss as a secondary endpoint,
              outperforming semaglutide 1mg in the same trial. SURMOUNT-1
              (Jastreboff et al., NEJM, 2022, PMID: 35658024, NCT04184622)
              extended this in a dedicated obesity population, reaching
              22.5% at 15mg over 72 weeks. The data were unambiguous: GIP
              agonism, in combination with GLP-1, increases weight loss in
              humans rather than decreasing it.
            </p>

            <h3 style={{ marginTop: 48, marginBottom: 24 }}>
              The two incretins side by side
            </h3>

            <div style={{ margin: "32px 0" }}>
              {receptorSignals.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 32,
                    paddingTop: i === 0 ? 0 : 24,
                    paddingBottom: 24,
                    borderBottom:
                      i === receptorSignals.length - 1
                        ? "none"
                        : "1px solid var(--rule)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--ink3)",
                      minWidth: 140,
                      paddingTop: 4,
                    }}
                  >
                    {item.date}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 20,
                        color: "var(--ink)",
                        marginBottom: 8,
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: 16,
                        lineHeight: 1.6,
                        color: "var(--ink2)",
                      }}
                    >
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p>
              The mechanism for the species difference is still being
              worked out. One hypothesis is that the rodent knockout effect
              was driven by developmental compensation rather than adult
              GIP signalling. Another is that GIP receptor distribution in
              human adipose tissue and brain differs enough from mouse that
              the same receptor produces different net effects on energy
              balance. The clinical bottom line does not depend on which
              hypothesis turns out to be correct: in humans, dual GLP-1/GIP
              agonism reliably outperforms GLP-1 alone.
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
                Pure GIP agonists are still in development for niche
                metabolic indications, but no GIP-only compound has reached
                weight-loss efficacy approaching the dual or triple
                agonists. The current clinical strategy is multi-receptor
                combinations rather than single-receptor refinement.
              </div>
            </div>
          </section>

          {/* PRACTICAL BREAKDOWN */}
          <section id="practical-breakdown" style={{ marginBottom: 80 }}>
            <h2>What the receptor selectivity table looks like</h2>
            <p>
              Most patients and prescribers do not need to know the
              molecular details. The relevant question is what each
              approved or investigational compound does at the receptor
              level, because that determines weight loss, side-effect
              profile, and dosing schedule. The table below summarises
              receptor coverage across the class.
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
                      "GLP-1",
                      "GIP",
                      "Glucagon",
                      "Top-dose loss",
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
                    ["Liraglutide", "Yes", "No", "No", "8.0%"],
                    ["Semaglutide", "Yes", "No", "No", "14.9%"],
                    ["Tirzepatide", "Yes", "Yes", "No", "22.5%"],
                    ["Retatrutide", "Yes", "Yes", "Yes", "28.7%"],
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
                          color: row[0] === "Tirzepatide" ? "var(--accent)" : "var(--ink)",
                          fontWeight: row[0] === "Tirzepatide" ? 500 : 400,
                        }}
                      >
                        {row[4]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              The pattern is consistent. Each receptor added to the
              molecule adds roughly 5 to 7 percentage points of additional
              weight loss. GIP contributes the jump from 14.9% to 22.5%.
              Glucagon contributes the further jump from 22.5% to roughly
              28.7%. Whether this additive pattern continues with a fourth
              receptor (amylin is the most likely candidate) is an open
              question being tested in early-stage compounds. For more on
              what the third receptor adds, see{" "}
              <Link href="/glp-1/triple-vs-dual-agonism">
                Triple vs Dual Agonism
              </Link>
              .
            </p>
          </section>

          {/* COMPARISON */}
          <section id="comparison" style={{ marginBottom: 80 }}>
            <h2>Side-effect differences between GLP-1 only and dual agonism</h2>
            <p>
              The receptor selectivity also shapes tolerability. GLP-1-only
              compounds (liraglutide, semaglutide) have a characteristic
              gastrointestinal profile dominated by nausea, vomiting, and
              constipation. Adding GIP appears to slightly improve GI
              tolerability in some analyses, though head-to-head data are
              limited. Tirzepatide trial participants reported nausea at
              rates broadly comparable to semaglutide, but severity scores
              and discontinuation rates from GI symptoms have generally
              been similar or marginally lower.
            </p>
            <p>
              Adding glucagon (retatrutide) introduces a new signal that
              GIP does not produce. Dysesthesia, an abnormal skin
              sensation, was reported at 20.9% in TRIUMPH-4 12mg
              participants and 0.7% on placebo. This is a Phase III finding
              that did not appear at the same magnitude in Phase II. It is
              attributed to glucagon receptor activity in the central or
              peripheral nervous system. Lilly has stated that dysesthesia
              does not generally lead to discontinuation, but the signal
              does not appear in the GLP-1 + GIP combination, which
              suggests the third receptor brings its own mechanistic
              footprint.
            </p>
            <p>
              The takeaway is that receptor coverage trades efficacy for
              breadth of effect. More receptors mean more weight loss and
              more potential off-target signals. The dual GLP-1 + GIP
              combination is currently the sweet spot for most clinical
              uses: meaningfully more efficacy than GLP-1 alone, no new
              side-effect class beyond what GLP-1 already produces. For a
              direct head-to-head of the two leading agents, see{" "}
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
              This article is for informational and educational purposes only and does not constitute medical advice. GLP-1 agonists and dual GLP-1/GIP agonists are prescription medications with a range of indications, contraindications, and side effects. Retatrutide is investigational and has not been approved by the FDA, EMA, MHRA, or any other regulatory agency as of May 2026. Consult a licensed healthcare provider before starting, stopping, or changing any medication.
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
                href="#what-they-are"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                What GIP is
              </a>
              <a
                href="#what-the-research-says"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Why GIP was misjudged
              </a>
              <a
                href="#practical-breakdown"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Receptor selectivity table
              </a>
              <a
                href="#comparison"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Side-effect differences
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
