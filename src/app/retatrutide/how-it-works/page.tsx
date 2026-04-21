import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

const TITLE = "How Does Retatrutide Work? Triple Agonist Mechanism Explained";
const DESCRIPTION =
  "How does retatrutide work? The first triple agonist activating GLP-1, GIP, and glucagon receptors, driving 28.7% weight loss through combined mechanisms.";
const SLUG = "retatrutide/how-it-works";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-21T00:00:00+00:00";
const MODIFIED = "2026-04-21T00:00:00+00:00";

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

const faqs = [
  {
    q: "How does retatrutide work in simple terms?",
    a: "Retatrutide activates three hormone receptors at once: GLP-1 (which suppresses appetite and slows digestion), GIP (which improves how the body handles glucose and fat), and glucagon (which increases the rate at which the body burns calories at rest). The combined effect produces weight loss that exceeds any single or dual-receptor drug. TRIUMPH-4 reported 28.7% body weight loss at the 12mg dose over 68 weeks.",
  },
  {
    q: "What is a triple agonist?",
    a: "An agonist is a molecule that activates a receptor to produce a biological effect. A triple agonist activates three different receptors simultaneously. Retatrutide is the first triple agonist peptide to reach Phase III trials, activating GLP-1, GIP, and glucagon receptors with a single molecule given once weekly.",
  },
  {
    q: "What does the glucagon receptor do in retatrutide?",
    a: "Glucagon receptor activation increases resting energy expenditure (the calories burned at rest) and promotes hepatic fat oxidation (the liver burning stored fat for fuel). This is the novel component compared with semaglutide and tirzepatide. Glucagon is best known for raising blood sugar, but in the retatrutide context its metabolic effects on fat burning dominate, with GLP-1 and GIP offsetting the glucose-raising effect.",
  },
  {
    q: "Does glucagon receptor activation raise blood sugar?",
    a: "Glucagon on its own raises blood sugar. In retatrutide, the simultaneous GLP-1 and GIP activation more than compensates, producing net glucose lowering rather than raising. TRIUMPH-4 did not report clinically significant increases in fasting glucose or HbA1c. TRIUMPH-2 (diabetes trial) is specifically measuring glycaemic effects and will provide more detailed data.",
  },
  {
    q: "How is retatrutide different from semaglutide and tirzepatide mechanistically?",
    a: "Semaglutide activates only GLP-1 receptors. Tirzepatide activates GLP-1 and GIP receptors. Retatrutide activates GLP-1, GIP, and glucagon receptors. Each added receptor adds a different mechanism of weight loss (appetite, metabolism, energy expenditure), producing an additive effect that shows up in the efficacy numbers: 14.9%, 22.5%, and 28.7% respectively for top-dose Phase III weight loss.",
  },
  {
    q: "How long does retatrutide stay active in the body?",
    a: "Retatrutide has a plasma half-life of approximately six days, which supports the once-weekly dosing schedule. Steady-state concentrations are reached after four to five weeks of consistent dosing. The peptide is modified with a fatty acid chain that binds to albumin in the blood, which slows renal clearance and extends the half-life beyond what a native peptide would have.",
  },
  {
    q: "Why does retatrutide cause dysesthesia when semaglutide and tirzepatide do not?",
    a: "The most likely explanation is the glucagon receptor component, which is the novel mechanism in retatrutide. Glucagon receptor activation has peripheral metabolic effects that may interact with small nerve fibres, though the mechanism of the dysesthesia signal has not been established in published research. This is an active area of investigation as the remaining TRIUMPH trials generate longer-term safety data.",
  },
  {
    q: "Can the mechanism be improved further?",
    a: "Research is already exploring quadruple agonists and alternative receptor combinations. Lilly and competitors have early-stage programs testing compounds targeting GLP-1, GIP, glucagon, and amylin or other receptors. Whether additional receptor activation continues to add efficacy or hits a safety ceiling is an open question. Retatrutide represents the current evidence-based frontier, not a hard limit.",
  },
];

export default function RetatrutideHowItWorksPage() {
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
    { name: "How It Works", item: CANONICAL },
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
          <span>Mechanism File</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Triple Agonist</span>
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
          How Does Retatrutide Work? Triple Agonist Mechanism Explained
        </h1>

        <p className="page-intro">
          Retatrutide activates three hormone receptors simultaneously: GLP-1,
          GIP, and glucagon. Each adds a distinct weight-loss mechanism. The
          combined effect produced 28.7% body weight reduction at 12mg over 68
          weeks in Phase III TRIUMPH-4, exceeding any single or dual-receptor
          compound studied to date.
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
            { stat: "GLP-1", label: "Receptor 1 — appetite & satiety" },
            { stat: "GIP", label: "Receptor 2 — metabolic signalling" },
            { stat: "Glucagon", label: "Receptor 3 — energy expenditure" },
            { stat: "LY3437943", label: "Development code" },
            { stat: "~6 days", label: "Plasma half-life" },
            { stat: "28.7%", label: "Phase III weight loss, 12mg" },
            { stat: "86%", label: "Liver fat reduction, Phase II" },
            { stat: "Weekly SC", label: "Administration" },
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
            Retatrutide is the first triple agonist peptide to reach Phase III
            clinical trials. It activates three different hormone receptors with
            a single molecule given once weekly by subcutaneous injection: the
            GLP-1 receptor, the GIP receptor, and the glucagon receptor. Each
            of these receptors contributes a different mechanism of weight loss,
            and the combined effect drives the efficacy numbers that put the
            compound ahead of every approved obesity drug.
          </p>

          <p>
            The comparison across the class is clean. Semaglutide activates one
            receptor (GLP-1) and produces 14.9% weight loss at top dose.
            Tirzepatide activates two (GLP-1 plus GIP) and produces 22.5%.
            Retatrutide activates three and produces 28.7%. Each added receptor
            step adds roughly 5–7 percentage points of weight loss, suggesting
            that the mechanisms combine rather than compete.
          </p>

          <p>
            This article explains what each receptor does, why activating all
            three at once produces better results than any combination of
            individual drugs, how the peptide is designed to do this without
            falling apart in the bloodstream, and what the mechanism implies for
            the safety profile — including the dysesthesia signal that appeared
            in Phase III.
          </p>

          <h2 id="what-it-is">What retatrutide is at the molecular level</h2>

          <p>
            Retatrutide (development code LY3437943) is a 39-amino-acid peptide.
            Its sequence is engineered to bind three different receptors with
            high affinity: the GLP-1 receptor, the GIP receptor, and the
            glucagon receptor. Native peptides that activate these receptors
            (GLP-1, GIP, and glucagon) each bind only their own receptor.
            Retatrutide was designed by stitching together structural motifs from
            all three natural peptides into a single chimeric molecule.
          </p>

          <p>
            Beyond receptor binding, the molecule includes a fatty acid chain
            (a C20 diacid, attached via a linker) that binds to serum albumin
            in the bloodstream. This albumin binding slows renal clearance and
            extends the plasma half-life to approximately six days, long enough
            to support once-weekly dosing. The same albumin-binding strategy is
            used in semaglutide (C18 diacid) and tirzepatide (C20 diacid),
            though the specific linker chemistry differs for each compound.
          </p>

          <p>
            Administration is subcutaneous, with the peptide absorbed from the
            injection site into the bloodstream over hours. The pen device used
            in TRIUMPH trials is similar to Lilly's existing Mounjaro and Zepbound
            pens. Once in circulation, the albumin-bound peptide distributes
            throughout the body and binds its target receptors on relevant
            tissues: pancreatic beta cells, the gut, the hypothalamus, the liver,
            and adipose tissue.
          </p>

          <h2 id="what-the-research-says">
            How each receptor contributes to weight loss
          </h2>

          <p>
            Understanding retatrutide means understanding what each of its three
            target receptors does individually, then seeing how they combine. The
            mechanisms are well-characterised because GLP-1 and GIP have been
            studied for decades, and glucagon has been understood for even longer.
            What is new is using all three pathways simultaneously as a weight
            loss strategy.
          </p>

          <h3>GLP-1 receptor: appetite and gastric emptying</h3>

          <p>
            Glucagon-like peptide-1 is a hormone released from intestinal L-cells
            in response to food intake. Its natural role is to tell the pancreas
            to release insulin and tell the brain that feeding should stop.
            Activating the GLP-1 receptor produces three weight-loss-relevant
            effects: increased satiety (you feel full sooner and stay full
            longer), slowed gastric emptying (food sits in the stomach longer,
            extending the fullness signal), and reduced food reward signalling in
            the brain (you think about food less often).
          </p>

          <p>
            The GLP-1 mechanism is the dominant driver of weight loss for
            semaglutide and contributes substantially to tirzepatide and
            retatrutide. Most of the appetite suppression that participants report
            comes from this pathway. It is also the pathway responsible for the
            gastrointestinal side effects (nausea, vomiting, delayed gastric
            emptying) that dominate the early titration period.
          </p>

          <h3>GIP receptor: metabolic signalling</h3>

          <p>
            Glucose-dependent insulinotropic polypeptide is another incretin
            hormone, released from intestinal K-cells. GIP activity adds to
            weight loss in a less obvious way than GLP-1. It improves insulin
            sensitivity, modulates fat cell function (affecting how adipose tissue
            stores and releases fat), and appears to reduce nausea compared with
            GLP-1 alone — which is why tirzepatide tolerability at high doses is
            slightly better than expected.
          </p>

          <p>
            The GIP mechanism alone does not produce meaningful weight loss
            (GIP-only drugs have been tested and underperform GLP-1 agonists).
            But combined with GLP-1 activation, GIP adds efficacy on top of what
            GLP-1 produces alone. The addition of GIP in tirzepatide took class
            weight loss from 14.9% (semaglutide) to 22.5%, a step-change that
            established dual agonism as the new standard.
          </p>

          <h3>Glucagon receptor: energy expenditure</h3>

          <p>
            Glucagon is the hormone responsible for raising blood sugar when it
            is low, released from pancreatic alpha cells. Its weight-loss-relevant
            effect is different: glucagon receptor activation increases resting
            energy expenditure (the rate at which the body burns calories when at
            rest) and promotes hepatic fat oxidation (the liver burning stored fat
            for fuel). In other words, glucagon agonism makes the body burn more
            calories, particularly from fat stores.
          </p>

          <p>
            Pure glucagon agonism has never been a viable weight loss strategy
            because it raises blood sugar and causes metabolic disruption. What
            makes retatrutide work is that the simultaneous GLP-1 and GIP
            activation counteracts the glucose-raising effect. The net result is
            glucose lowering (not raising), combined with the fat-burning and
            energy-expenditure effects that glucagon uniquely provides.
          </p>

          <p>
            The evidence for the glucagon receptor contribution came from
            preclinical work and Phase II human data. The Phase II trial
            (Jastreboff et al., <em>New England Journal of Medicine</em>, 2023,
            PMID: 37366315) was the first human demonstration that triple agonism
            produced weight loss beyond what dual agonism could. TRIUMPH-4
            confirms this in Phase III at larger scale.
          </p>

          <h2 id="practical-breakdown">
            How the combined mechanism translates into weight loss
          </h2>

          <p>
            Weight loss comes from two fundamental variables: caloric intake and
            caloric expenditure. Every weight loss intervention works by changing
            one or both. Diet interventions reduce intake. Exercise interventions
            increase expenditure. Most weight loss drugs in history have attacked
            intake only, with poor results because the body compensates by
            lowering expenditure when intake drops (this is the adaptive
            thermogenesis that makes sustained weight loss difficult).
          </p>

          <p>
            Retatrutide is the first pharmacotherapy to work on both sides of the
            equation through complementary mechanisms. GLP-1 and GIP activation
            reduce caloric intake by reducing appetite and food reward. Glucagon
            activation increases caloric expenditure by raising resting metabolic
            rate. The body cannot easily compensate because the drug is imposing
            both effects simultaneously: if expenditure drops as a compensatory
            response, the drug raises it back up through glucagon activity.
          </p>

          <p>
            This dual-axis mechanism explains why retatrutide produces weight loss
            beyond what was previously thought achievable with any
            pharmacotherapy. It also explains why the weight loss is predominantly
            fat mass: glucagon-driven fat oxidation preferentially targets stored
            triglycerides. The Phase II body composition data suggested
            approximately 85% of total weight loss was fat mass, with 15% lean
            mass. Full TRIUMPH-4 body composition data has not yet been published.
            For projected weight loss by starting weight, see{" "}
            <Link href="/retatrutide/weight-loss-projections">
              Retatrutide Weight Loss Projections
            </Link>
            .
          </p>

          <h3>The dysesthesia signal: a mechanism hypothesis</h3>

          <p>
            TRIUMPH-4 reported dysesthesia (abnormal skin sensation) in 20.9% of
            12mg participants versus 0.7% on placebo. This signal did not appear
            with semaglutide or tirzepatide, so the glucagon receptor component
            is the leading suspect. The mechanism has not been established, but
            the leading hypothesis is that glucagon receptor activity on
            peripheral small nerve fibres produces transient dysfunction that
            resolves on dose reduction or discontinuation.
          </p>

          <p>
            If this hypothesis is correct, dysesthesia is an intrinsic trade-off
            of the glucagon receptor mechanism rather than a drug-specific flaw
            that future compounds will solve. Whether the next generation of
            triple or quadruple agonists can retain the metabolic benefits while
            avoiding this signal is a research question that will take years to
            answer. For the current safety picture see{" "}
            <Link href="/retatrutide/side-effects">Retatrutide Side Effects</Link>.
          </p>

          <h2 id="comparison">
            Mechanism comparison: semaglutide, tirzepatide, retatrutide
          </h2>

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
                  {["Compound", "GLP-1", "GIP", "Glucagon", "Weight Loss"].map(
                    (h, i) => (
                      <th
                        key={h}
                        style={{
                          textAlign: i === 4 ? "right" : "left",
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
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Liraglutide (Saxenda)", "✓", "", "", "-8.0%"],
                  ["Semaglutide (Wegovy)", "✓", "", "", "-14.9%"],
                  ["Tirzepatide (Zepbound)", "✓", "✓", "", "-22.5%"],
                  ["Retatrutide", "✓", "✓", "✓", "-28.7%"],
                ].map((row, i) => (
                  <tr
                    key={row[0]}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: 500 }}>
                      {row[0]}
                    </td>
                    {[row[1], row[2], row[3]].map((cell, ci) => (
                      <td
                        key={ci}
                        style={{
                          padding: "12px 16px",
                          textAlign: "center",
                          color: cell ? "var(--accent)" : "var(--ink3)",
                          fontWeight: cell ? 600 : 400,
                        }}
                      >
                        {cell || "—"}
                      </td>
                    ))}
                    <td
                      style={{
                        padding: "12px 16px",
                        textAlign: "right",
                        fontFamily: "var(--mono)",
                        fontWeight: 600,
                        color:
                          row[0] === "Retatrutide"
                            ? "var(--accent)"
                            : "inherit",
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
            The pattern is consistent: adding receptor mechanisms adds weight
            loss efficacy. Whether this pattern continues with quadruple agonists
            (adding amylin or other receptors) is an active research question.
            Early-stage compounds in development include CagriSema (a
            semaglutide-plus-amylin combination) and various quadruple agonist
            candidates in preclinical and Phase I testing.
          </p>

          <p>
            For direct head-to-head class comparisons see{" "}
            <Link href="/retatrutide/vs-tirzepatide">
              Retatrutide vs Tirzepatide
            </Link>{" "}
            and{" "}
            <Link href="/retatrutide/vs-semaglutide">
              Retatrutide vs Semaglutide
            </Link>
            . For the full efficacy and safety data see{" "}
            <Link href="/retatrutide/clinical-trial-results">
              Retatrutide Clinical Trial Results
            </Link>
            .
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
                <p style={{ marginTop: "12px", marginBottom: 0 }}>{faq.a}</p>
              </details>
            ))}
          </div>

          {/* MEDICAL DISCLAIMER */}
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
              This article is for informational and educational purposes only and
              does not constitute medical advice. Retatrutide is an
              investigational drug. It has not been approved by the FDA, EMA,
              MHRA, or any other regulatory agency as of April 2026. Mechanistic
              descriptions presented here synthesise published preclinical and
              clinical research. Some mechanisms (particularly those underlying
              the dysesthesia signal) are hypothesised rather than established.
              Consult a licensed healthcare provider before starting, stopping,
              or changing any medication.
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
                ["what-it-is", "The molecule"],
                ["what-the-research-says", "Each receptor's role"],
                ["practical-breakdown", "Combined mechanism"],
                ["comparison", "Class comparison"],
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
                ["/retatrutide/clinical-trial-results", "Clinical Trial Results"],
                ["/retatrutide/weight-loss-projections", "Weight Loss Projections"],
                ["/retatrutide/side-effects", "Side Effects"],
                ["/retatrutide/dosage", "Dosage Guide"],
                ["/retatrutide/vs-tirzepatide", "vs Tirzepatide"],
                ["/retatrutide/vs-semaglutide", "vs Semaglutide"],
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
