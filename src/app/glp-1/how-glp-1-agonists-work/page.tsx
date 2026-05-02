import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "How Do GLP-1 Agonists Work? Mechanism Explained | Peptide File",
  description:
    "GLP-1 agonists activate the GLP-1 receptor in the pancreas, gut, and brain. Here's the mechanism, the receptor biology, and why each compound differs.",
  openGraph: {
    title: "How Do GLP-1 Agonists Work? Mechanism Explained",
    description:
      "GLP-1 agonists activate the GLP-1 receptor in the pancreas, gut, and brain. Here's the mechanism, the receptor biology, and why each compound differs.",
    url: "https://peptidefile.com/glp-1/how-glp-1-agonists-work",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Do GLP-1 Agonists Work? Mechanism Explained",
    description:
      "GLP-1 agonists activate the GLP-1 receptor in the pancreas, gut, and brain. Here's the mechanism, the receptor biology, and why each compound differs.",
  },
  alternates: {
    canonical: "https://peptidefile.com/glp-1/how-glp-1-agonists-work",
  },
};

const faqs = [
  {
    q: "How do GLP-1 agonists work in simple terms?",
    a: "GLP-1 agonists are drugs that activate the GLP-1 receptor, the same receptor that the body's natural GLP-1 hormone uses. Activating this receptor produces three weight-loss-relevant effects: insulin release from the pancreas in response to food, slower gastric emptying so meals stay in the stomach longer, and reduced appetite signalling in the brain. The combined result is lower blood glucose and reduced caloric intake.",
  },
  {
    q: "What is GLP-1 and where does it come from?",
    a: "GLP-1 stands for glucagon-like peptide-1. It is a hormone released from L-cells in the small intestine and colon in response to food intake. Its natural role is to coordinate the body's response to a meal: telling the pancreas to release insulin, telling the stomach to slow down, and telling the brain that feeding should stop. Native GLP-1 is broken down in roughly two minutes by the enzyme DPP-4, which is why drug versions are engineered to last days instead.",
  },
  {
    q: "Why does the body break down natural GLP-1 so quickly?",
    a: "The enzyme DPP-4 (dipeptidyl peptidase-4) cleaves the second amino acid off GLP-1, deactivating it within about two minutes of release. This is a feature of normal physiology — the body needs the GLP-1 signal to switch off quickly after a meal so that insulin release does not become excessive. GLP-1 agonist drugs are engineered with substitutions at this cleavage site to resist DPP-4, which is the structural change that gives them their multi-day half-lives.",
  },
  {
    q: "Why do GLP-1 agonists cause nausea?",
    a: "Slowed gastric emptying is the main cause. When the stomach empties more slowly than normal, food sits longer, and the resulting fullness can tip into nausea, especially during dose escalation. Direct GLP-1 receptor activity in the area postrema of the brain (the brain region responsible for vomiting) also contributes. Most people see nausea peak in the first one to two weeks after each dose increase, then decline as tolerance develops.",
  },
  {
    q: "How do GLP-1 agonists differ from each other?",
    a: "The main differences are receptor selectivity, half-life, and route of administration. Liraglutide and semaglutide bind only the GLP-1 receptor. Tirzepatide binds GLP-1 and GIP. Retatrutide binds GLP-1, GIP, and glucagon. Half-lives range from about 13 hours (liraglutide, daily dosing) to seven days (semaglutide, weekly). Most are subcutaneous injections, though oral semaglutide and the investigational orforglipron offer pill-form alternatives.",
  },
  {
    q: "Do GLP-1 agonists work for people without diabetes?",
    a: "Yes. The original approvals were for type 2 diabetes, but the same compounds at higher doses produce substantial weight loss in people without diabetes. Wegovy (semaglutide 2.4mg) and Zepbound (tirzepatide 5–15mg) are FDA-approved specifically for weight management in people with obesity or overweight with at least one weight-related comorbidity. The mechanism is the same; the difference is dose and labelled indication.",
  },
  {
    q: "How long does it take for GLP-1 agonists to start working?",
    a: "Appetite suppression typically appears within days of the first dose. Measurable weight loss usually shows up within two to four weeks, with maximum effect reached after roughly six to twelve months on the full dose. Trial endpoints are commonly measured at 56 to 72 weeks. Clinical guidelines suggest evaluating response after three to six months — if weight loss is below approximately 5%, switching compounds or adding adjunctive therapy is reasonable.",
  },
  {
    q: "What happens when someone stops a GLP-1 agonist?",
    a: "Most of the weight tends to come back. The STEP-4 trial showed that participants who stopped semaglutide regained roughly two-thirds of lost weight within a year. The mechanism is reversible: once the drug clears, appetite returns to baseline and gastric emptying normalises. This is why current clinical thinking treats obesity pharmacotherapy as long-term maintenance rather than a finite course, similar to how blood pressure medication is used.",
  },
];

export default function HowGLP1AgonistsWorkPage() {
  const article = articleSchema({
    headline: "How Do GLP-1 Agonists Work? Mechanism Explained",
    description:
      "GLP-1 agonists activate the GLP-1 receptor in the pancreas, gut, and brain. Here's the mechanism, the receptor biology, and why each compound differs.",
    datePublished: "2026-05-02",
    dateModified: "2026-05-02",
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
    image: "https://peptidefile.com/og-glp-1-how-glp-1-agonists-work.png",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "GLP-1", item: "https://peptidefile.com/glp-1" },
    {
      name: "How Do GLP-1 Agonists Work?",
      item: "https://peptidefile.com/glp-1/how-glp-1-agonists-work",
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
      <header
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 32px 40px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            fontFamily: "var(--mono)",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--ink3)",
            marginBottom: 24,
            flexWrap: "wrap",
          }}
        >
          <span>GLP-1 File</span>
          <span>·</span>
          <span>Mechanism</span>
          <span>·</span>
          <span style={{ color: "var(--accent)" }}>Evidence: Strong</span>
        </div>

        <h1 className="article-title">
          How Do GLP-1 Agonists Work? Mechanism Explained
        </h1>

        <p className="page-intro">
          GLP-1 agonists are drugs that activate the GLP-1 receptor — the same
          receptor used by the body's natural GLP-1 hormone, released from the
          gut after meals. Activating this receptor lowers blood glucose,
          slows gastric emptying, and reduces appetite. The drug versions are
          engineered to resist enzymatic breakdown, extending the natural
          two-minute half-life out to days or weeks.
        </p>

        <div
          style={{
            display: "flex",
            gap: 24,
            marginTop: 32,
            fontFamily: "var(--mono)",
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--ink3)",
            flexWrap: "wrap",
          }}
        >
          <span>
            By{" "}
            <Link
              href="/author"
              style={{ color: "var(--ink)", textDecoration: "underline" }}
            >
              Mark Boreland
            </Link>
          </span>
          <span>Last updated: May 2026</span>
          <span>~2,400 words</span>
        </div>
      </header>

      {/* KEY DATA GRID */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 1,
            backgroundColor: "var(--rule)",
            border: "1px solid var(--rule)",
          }}
        >
          {[
            { label: "Native GLP-1 half-life", value: "~2 min" },
            { label: "Semaglutide half-life", value: "~7 days" },
            { label: "STEP 1 weight loss", value: "14.9%" },
            { label: "SURMOUNT-1 weight loss", value: "22.5%" },
            { label: "TRIUMPH-4 weight loss", value: "28.7%" },
            { label: "First class approval", value: "2005 (exenatide)" },
          ].map((cell) => (
            <div
              key={cell.label}
              style={{
                backgroundColor: "var(--paper)",
                padding: "24px",
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
                {cell.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 28,
                  color: "var(--ink)",
                  lineHeight: 1.1,
                }}
              >
                {cell.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT LAYOUT */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 32px 80px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 280px",
          gap: 64,
        }}
      >
        <article className="prose">
          {/* INTRO */}
          <section style={{ marginBottom: 80 }}>
            <p>
              GLP-1 agonists are the most successful class of weight-loss drugs
              ever developed. Semaglutide produces 14.9% weight loss in Phase
              III trials. Tirzepatide reaches 22.5%. Retatrutide, the newest
              triple agonist, has reported 28.7%. None of these numbers were
              achievable with any prior pharmacotherapy, and the curve keeps
              climbing as newer compounds add receptor mechanisms.
            </p>
            <p>
              The shared starting point for the entire class is the GLP-1
              receptor. Every drug in this category — from liraglutide
              (approved 2010) to retatrutide (Phase III, expected approval
              2027) — activates this single receptor as its primary mechanism.
              What differs between compounds is whether they activate
              additional receptors, how long they stay active in the body, and
              whether they are taken daily, weekly, or by mouth versus
              injection.
            </p>
            <p>
              This article covers the mechanism in detail: what the GLP-1
              receptor is, where it lives in the body, what happens when it is
              activated, why the natural hormone lasts only minutes while the
              drug versions last days, and how the mechanism translates into
              the appetite suppression and weight loss that drives the
              category. For head-to-head comparisons of specific compounds
              see{" "}
              <Link href="/glp-1/semaglutide-vs-tirzepatide">
                Semaglutide vs Tirzepatide
              </Link>
              .
            </p>
          </section>

          {/* WHAT IT IS */}
          <section id="what-it-is" style={{ marginBottom: 80 }}>
            <h2>What GLP-1 is and where the receptor lives</h2>
            <p>
              Glucagon-like peptide-1 is a 30-amino-acid peptide hormone
              released from intestinal L-cells (concentrated in the ileum and
              colon) in response to food intake. Within minutes of eating,
              GLP-1 levels in the bloodstream rise sharply, peak, and then
              fall back to baseline. The half-life of native GLP-1 is roughly
              two minutes — a deliberately short window calibrated to the
              duration of a meal.
            </p>
            <p>
              The GLP-1 receptor (GLP1R) is a class B G-protein-coupled
              receptor expressed in several tissues. Each location contributes
              a different physiological effect when activated:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0" }}>
              {[
                {
                  label: "Pancreatic beta cells",
                  text: "Insulin release in response to elevated blood glucose. This is the original mechanism that made GLP-1 attractive as a diabetes target. Importantly, the effect is glucose-dependent — insulin is released only when blood sugar is high, which is why GLP-1 agonists carry low hypoglycaemia risk compared with insulin or sulfonylureas.",
                },
                {
                  label: "Pancreatic alpha cells",
                  text: "Suppression of glucagon release. This complements the insulin effect, lowering blood glucose by reducing the body's signal to release stored glucose from the liver.",
                },
                {
                  label: "Stomach and gastrointestinal tract",
                  text: "Slowed gastric emptying. Food stays in the stomach longer, extending the fullness signal and slowing the rate at which carbohydrates reach the small intestine. This produces the characteristic delayed-satiety effect that participants describe as 'feeling full longer'.",
                },
                {
                  label: "Hypothalamus and brainstem",
                  text: "Reduced appetite and food reward signalling. GLP-1 receptors in the arcuate nucleus and other appetite-regulating regions reduce hunger drive. Receptors in the brainstem and reward circuitry reduce the salience of food cues and the pleasure response to eating.",
                },
                {
                  label: "Cardiovascular tissue",
                  text: "Reduced inflammation, modest blood pressure reduction, and cardioprotective effects independent of weight loss. The SELECT trial showed a 20% reduction in major adverse cardiovascular events with semaglutide in patients with established cardiovascular disease, in 17,604 participants over a median of 39.8 months.",
                },
              ].map((item) => (
                <li
                  key={item.label}
                  style={{
                    marginBottom: 24,
                    paddingBottom: 24,
                    borderBottom: "1px solid var(--rule)",
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
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 17,
                      lineHeight: 1.6,
                      color: "var(--ink2)",
                    }}
                  >
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>

            <p>
              The receptor distribution explains why GLP-1 agonists produce
              such a wide constellation of effects. They are not single-target
              drugs in the conventional sense. A single molecule binding a
              single receptor type produces effects in five organ systems,
              because that receptor is expressed in five organ systems. This
              is the strength and the weakness of the class — the breadth of
              effects produces remarkable efficacy, but it also produces a
              spectrum of side effects (gastrointestinal, central nervous
              system, biliary) that is broader than what most drug classes
              show.
            </p>
          </section>

          {/* WHAT THE RESEARCH SAYS */}
          <section id="what-the-research-says" style={{ marginBottom: 80 }}>
            <h2>From a two-minute hormone to a once-weekly drug</h2>
            <p>
              The challenge of turning GLP-1 into a usable drug was its
              half-life. Native GLP-1 is broken down by the enzyme
              dipeptidyl peptidase-4 (DPP-4) in roughly two minutes. DPP-4
              cleaves the second amino acid (alanine at position 2) off the
              N-terminus, producing an inactive metabolite. Any GLP-1 receptor
              agonist intended for therapeutic use must resist this cleavage
              or it will not last long enough to be useful.
            </p>
            <p>
              The first GLP-1 agonist to reach the market, exenatide (Byetta),
              took a different route. Exenatide is a synthetic version of
              exendin-4, a peptide isolated from the saliva of the Gila
              monster lizard. Exendin-4 happens to share enough structural
              similarity with human GLP-1 to bind the GLP-1 receptor, but its
              sequence at position 2 (glycine instead of alanine) makes it
              resistant to DPP-4 cleavage. Exenatide was approved by the FDA
              in April 2005 for type 2 diabetes, with a half-life of roughly
              2.4 hours requiring twice-daily injection.
            </p>
            <p>
              The next generation engineered DPP-4 resistance directly into
              the GLP-1 backbone. Liraglutide (Victoza, approved 2010)
              substitutes alanine at position 2 with α-aminoisobutyric acid
              and adds a C16 fatty acid chain that binds serum albumin. The
              fatty acid extension (called acylation) is a key innovation:
              once the molecule is bound to albumin, it is too large to be
              filtered by the kidneys, which extends the half-life to about
              13 hours. Daily dosing becomes feasible.
            </p>
            <p>
              Semaglutide (Ozempic, Wegovy) takes the same approach further
              with a longer C18 fatty acid chain and a different linker
              chemistry, extending the half-life to roughly seven days.
              Once-weekly dosing becomes standard. The same albumin-binding
              strategy extends to tirzepatide (C20 diacid, ~5 days) and
              retatrutide (C20 diacid with different linker, ~6 days). The
              acylation pattern is now the established design template for
              long-acting peptide drugs across the class.
            </p>
            <p>
              The clinical trials that established the class are familiar
              names. Liraglutide's SCALE trial (2015) reported 8.0% weight
              loss at 3.0mg over 56 weeks. Semaglutide's STEP 1 trial (2021)
              reported 14.9% at 2.4mg over 68 weeks — almost double the
              liraglutide figure at the same receptor. Tirzepatide's
              SURMOUNT-1 (2022) reported 22.5% at 15mg, adding the GIP
              receptor mechanism. Each step in the sequence reflected a
              meaningful improvement in either dose, duration, or receptor
              coverage. For the full comparison data see the{" "}
              <Link href="/glp-1/comparison-chart-2026">
                GLP-1 Comparison Chart 2026
              </Link>
              .
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
                Real-world weight loss runs roughly 60–75% of trial figures
                across the GLP-1 class. Trial participants receive structured
                lifestyle support, monthly check-ins, and free medication.
                Real-world patients deal with insurance gaps, missed doses,
                and inconsistent titration. Set expectations accordingly.
              </div>
            </div>
          </section>

          {/* PRACTICAL BREAKDOWN */}
          <section id="practical-breakdown" style={{ marginBottom: 80 }}>
            <h2>What activation looks like in practice</h2>
            <p>
              Once a GLP-1 agonist is injected and reaches the bloodstream,
              the binding kinetics are straightforward. The drug binds the
              GLP-1 receptor with high affinity, the receptor activates its
              downstream G-protein cascade, and the physiological effects
              cascade outward over hours and days. Some effects appear within
              an hour of the first dose. Others build over weeks.
            </p>

            <h3>Day-one effects</h3>
            <p>
              Insulin secretion in response to a meal is detectable within an
              hour of the first dose. Most people notice reduced appetite at
              the next meal — food tastes less appealing, portions feel
              larger, and the urge to snack between meals fades. Gastric
              emptying slows immediately, which is why nausea is most common
              with the first dose and the first day or two after each dose
              increase. The body has not yet adapted to slower-than-usual
              stomach motility.
            </p>

            <h3>Week-one effects</h3>
            <p>
              By the end of the first week, the appetite suppression is
              steady. Most people report eating roughly 20–30% less by
              volume, with smaller portions feeling satisfying. Cravings for
              high-reward foods (sweet, fatty, salty) typically fade. This is
              also when nausea peaks for most people, particularly if the
              starting dose was on the higher end. Slow titration protocols
              exist specifically to soften this peak.
            </p>

            <h3>Month-one effects</h3>
            <p>
              Measurable weight loss appears, typically 2–4% of body weight.
              The pace is faster in the first month than in subsequent months
              because the initial drop includes water weight from reduced
              caloric intake and glycogen depletion. By the end of month one,
              most people have completed at least one dose escalation step
              and are tolerating the drug well.
            </p>

            <h3>Six to twelve months</h3>
            <p>
              Maximum effect is reached. For semaglutide and tirzepatide,
              this means roughly 80–90% of total trial weight loss is
              achieved by month nine, with smaller gains continuing through
              month 18. After this point, weight stabilises at the new lower
              level so long as the drug continues. Discontinuation reverses
              the effect: STEP-4 showed approximately two-thirds of lost
              weight returning within a year of stopping semaglutide.
            </p>
          </section>

          {/* COMPARISON */}
          <section id="comparison" style={{ marginBottom: 80 }}>
            <h2>Why each compound differs at the receptor level</h2>
            <p>
              All approved GLP-1 agonists bind the same GLP-1 receptor. Their
              clinical differences come from three variables: how strongly
              they bind, what other receptors they touch, and how long they
              stay in circulation. The table below summarises the
              receptor-level differences across the class.
            </p>

            <div style={{ overflowX: "auto", margin: "32px 0" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontFamily: "var(--serif)",
                  fontSize: 15,
                }}
              >
                <thead style={{ backgroundColor: "var(--paper2)" }}>
                  <tr>
                    {[
                      "Compound",
                      "Receptors",
                      "Half-life",
                      "Top-dose loss",
                      "Dosing",
                    ].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          padding: "12px 16px",
                          fontFamily: "var(--mono)",
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--ink3)",
                          borderBottom: "1px solid var(--rule)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Liraglutide", "GLP-1", "~13 hr", "8.0%", "Daily SC"],
                    ["Semaglutide", "GLP-1", "~7 days", "14.9%", "Weekly SC"],
                    [
                      "Tirzepatide",
                      "GLP-1 + GIP",
                      "~5 days",
                      "22.5%",
                      "Weekly SC",
                    ],
                    [
                      "Retatrutide",
                      "GLP-1 + GIP + Glucagon",
                      "~6 days",
                      "28.7%",
                      "Weekly SC",
                    ],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      style={{
                        backgroundColor:
                          i % 2 === 0 ? "var(--paper)" : "var(--paper2)",
                      }}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          style={{
                            padding: "14px 16px",
                            borderBottom: "1px solid var(--rule)",
                            color: "var(--ink2)",
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
              The pattern is consistent across the class. Each receptor added
              to the molecule adds roughly 5–7 percentage points of
              additional weight loss, suggesting that the mechanisms combine
              additively rather than compete. This is the basis for the
              continued development of multi-receptor compounds. Whether
              quadruple agonism (GLP-1 + GIP + glucagon + amylin) or
              alternative receptor combinations continue the trend is an
              active research question, with several candidates in early
              clinical testing.
            </p>
            <p>
              Receptor selectivity also shapes the side-effect profile.
              GLP-1-only compounds (liraglutide, semaglutide) have a
              characteristic gastrointestinal profile dominated by nausea and
              delayed gastric emptying. Adding GIP appears to slightly improve
              GI tolerability. Adding glucagon introduces a new signal — the
              dysesthesia (abnormal skin sensation) reported in retatrutide's
              TRIUMPH-4 — that is not seen in the GLP-1-only or GLP-1+GIP
              compounds. For the full safety picture see{" "}
              <Link href="/glp-1/safety-profile">GLP-1 Safety Profile</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 80 }}>
            <h2>Frequently asked questions</h2>
            <div style={{ marginTop: 24 }}>
              {faqs.map((item) => (
                <details
                  key={item.q}
                  style={{
                    borderBottom: "1px solid var(--rule)",
                    padding: "20px 0",
                  }}
                >
                  <summary
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      color: "var(--ink)",
                      cursor: "pointer",
                      listStyle: "none",
                    }}
                  >
                    {item.q}
                  </summary>
                  <div
                    style={{
                      marginTop: 12,
                      fontFamily: "var(--serif)",
                      fontSize: 17,
                      lineHeight: 1.7,
                      color: "var(--ink2)",
                    }}
                  >
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* MEDICAL DISCLAIMER */}
          <section style={{ marginBottom: 80 }}>
            <div
              style={{
                padding: "20px 24px",
                backgroundColor: "var(--paper2)",
                borderLeft: "3px solid var(--accent)",
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
                Medical disclaimer
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--ink2)",
                }}
              >
                This article is for informational and educational purposes
                only and does not constitute medical advice. GLP-1 agonists
                are prescription medications with a range of indications,
                contraindications, and side effects. Retatrutide is
                investigational and has not been approved by the FDA, EMA,
                MHRA, or any other regulatory agency as of May 2026. Consult
                a licensed healthcare provider before starting, stopping, or
                changing any medication.
              </div>
            </div>
          </section>
        </article>

        {/* STICKY SIDEBAR */}
        <aside
          style={{
            position: "sticky",
            top: 96,
            alignSelf: "start",
          }}
        >
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--ink3)",
                marginBottom: 16,
                paddingBottom: 12,
                borderBottom: "1px solid var(--rule)",
              }}
            >
              On this page
            </div>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontFamily: "var(--serif)",
                fontSize: 15,
              }}
            >
              <a href="#what-it-is" style={{ color: "var(--ink2)" }}>
                What GLP-1 is
              </a>
              <a
                href="#what-the-research-says"
                style={{ color: "var(--ink2)" }}
              >
                Two minutes to once-weekly
              </a>
              <a href="#practical-breakdown" style={{ color: "var(--ink2)" }}>
                What activation looks like
              </a>
              <a href="#comparison" style={{ color: "var(--ink2)" }}>
                Compound differences
              </a>
              <a href="#faq" style={{ color: "var(--ink2)" }}>
                Frequently asked questions
              </a>
            </nav>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--ink3)",
                marginBottom: 16,
                paddingBottom: 12,
                borderBottom: "1px solid var(--rule)",
              }}
            >
              Related files
            </div>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontFamily: "var(--serif)",
                fontSize: 15,
              }}
            >
              <Link href="/glp-1" style={{ color: "var(--ink2)" }}>
                The GLP-1 File
              </Link>
              <Link
                href="/glp-1/comparison-chart-2026"
                style={{ color: "var(--ink2)" }}
              >
                Comparison Chart 2026
              </Link>
              <Link
                href="/glp-1/natural-boosters"
                style={{ color: "var(--ink2)" }}
              >
                Natural GLP-1 Boosters
              </Link>
              <Link href="/glp-1/vs-gip" style={{ color: "var(--ink2)" }}>
                GLP-1 vs GIP
              </Link>
              <Link
                href="/glp-1/triple-vs-dual-agonism"
                style={{ color: "var(--ink2)" }}
              >
                Triple vs Dual Agonism
              </Link>
              <Link
                href="/glp-1/semaglutide-vs-tirzepatide"
                style={{ color: "var(--ink2)" }}
              >
                Semaglutide vs Tirzepatide
              </Link>
              <Link
                href="/glp-1/safety-profile"
                style={{ color: "var(--ink2)" }}
              >
                GLP-1 Safety Profile
              </Link>
            </nav>
          </div>
        </aside>
      </div>

      {/* NEWSLETTER SECTION */}
      <section
        style={{
          backgroundColor: "var(--paper2)",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          padding: "64px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: 32,
              color: "var(--ink)",
              marginBottom: 16,
            }}
          >
            The weekly peptide brief.
          </h2>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontSize: 18,
              color: "var(--ink2)",
              marginBottom: 32,
            }}
          >
            New trial readouts, mechanism breakdowns, and FDA updates. One
            email per week. No filler.
          </p>
          <form
            style={{
              display: "flex",
              gap: 12,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              style={{
                flex: 1,
                padding: "12px 16px",
                fontFamily: "var(--serif)",
                fontSize: 16,
                border: "1px solid var(--rule)",
                backgroundColor: "var(--paper)",
                color: "var(--ink)",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                fontFamily: "var(--mono)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                backgroundColor: "var(--ink)",
                color: "var(--paper)",
                border: "none",
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
