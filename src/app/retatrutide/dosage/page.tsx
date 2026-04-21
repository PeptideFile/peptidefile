import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Retatrutide Dosage: Phase III Trial Schedule (2mg to 12mg)";
const DESCRIPTION =
  "Retatrutide dosage from Phase III TRIUMPH trials: 2mg, 4mg, 6mg, 9mg or 12mg weekly, subcutaneous, 12-week titration. Full protocol and rationale.";
const SLUG = "retatrutide/dosage";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-21T00:00:00+00:00";
const MODIFIED = "2026-04-21T00:00:00+00:00";

export const metadata: Metadata = {
  title: `${TITLE} | Peptide File`,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Retatrutide Dosage: Phase III Trial Schedule",
    description:
      "Complete retatrutide dosing schedule from TRIUMPH Phase III: 2mg start, 12-week titration to 9mg or 12mg weekly, subcutaneous injection.",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Mark Boreland"],
    siteName: "Peptide File",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Retatrutide Dosage: Phase III Trial Schedule",
    description:
      "Complete retatrutide dosing schedule from TRIUMPH Phase III: 2mg start, 12-week titration to 9mg or 12mg weekly.",
  },
};

// ---------- FAQ DATA ----------
const faqs = [
  {
    q: "What is the starting dose of retatrutide in Phase III trials?",
    a: "Retatrutide trials start at 2mg weekly, given as a subcutaneous injection. This is the dose used for the first four weeks of the TRIUMPH protocol. The starting dose is low enough to minimise gastrointestinal side effects during the first exposure and allows tolerance to develop before escalation.",
  },
  {
    q: "How is retatrutide titrated up to the maintenance dose?",
    a: "The TRIUMPH titration schedule runs 2mg, 4mg, 6mg, then either 9mg or 12mg weekly. Each step is held for approximately four weeks before escalation. Full titration to the 12mg maintenance dose takes 12 weeks. This is similar to the titration used for semaglutide and tirzepatide, with longer step durations than typical off-label compounding protocols.",
  },
  {
    q: "Is 9mg or 12mg the better maintenance dose?",
    a: "The efficacy difference is modest (26.4% at 9mg versus 28.7% at 12mg over 68 weeks in TRIUMPH-4), but the dysesthesia rate more than doubles (8.8% at 9mg versus 20.9% at 12mg). Many clinicians will probably use 9mg as the default maintenance dose post-approval, reserving 12mg for participants who tolerate 9mg well and need further weight loss. This is a personal clinical judgement call that the label will inform.",
  },
  {
    q: "How is retatrutide injected?",
    a: "Retatrutide is administered by subcutaneous injection, typically into the abdomen, thigh, or upper arm. Rotate sites each week to reduce local skin reactions. The Phase III trials use pre-filled pen devices similar to Lilly's existing incretin products (Mounjaro, Zepbound). Self-administration at home is standard practice, with training typically provided at the first prescription.",
  },
  {
    q: "What is the half-life of retatrutide?",
    a: "Approximately six days, which is what supports the once-weekly dosing schedule. Steady-state plasma concentrations are reached after four to five weeks of consistent dosing at a given step. Missing a single dose is not catastrophic given the long half-life, but chronic inconsistency compromises efficacy and can increase side effects on re-initiation.",
  },
  {
    q: "Can the titration be slowed for patients who do not tolerate the schedule?",
    a: "Yes. The TRIUMPH trials allowed slower titration for participants with significant gastrointestinal side effects. Extending each step from four weeks to six or eight weeks is a common practice with semaglutide and tirzepatide and will likely carry over to retatrutide. The trade-off is slower time-to-maintenance-dose against improved tolerability.",
  },
  {
    q: "What happens if a dose is missed?",
    a: "Standard guidance for weekly GLP-1 agonists is: if the missed dose is noticed within 72 hours, take it and resume the regular schedule. If more than 72 hours have passed, skip that dose and take the next one at the usual time. Do not double-dose to compensate. Retatrutide will likely follow the same guidance once approved.",
  },
  {
    q: "Is retatrutide available at any compounding pharmacy?",
    a: "No. Retatrutide is investigational and not available through legitimate compounding pharmacies. It has not been approved by the FDA and is not on any approved compounding list. Grey-market sources selling retatrutide cannot verify purity, sterility, or dose accuracy, and carry substantial safety risks independent of the trial-reported side effect profile.",
  },
];

// ---------- PAGE ----------
export default function RetatrutideDosagePage() {
  const articleJsonLd = articleSchema({
    headline: "Retatrutide Dosage: Phase III Trial Schedule",
    description:
      "Complete retatrutide dosing schedule from TRIUMPH Phase III: 2mg start, 12-week titration to 9mg or 12mg weekly, subcutaneous injection.",
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
    { name: "Dosage", item: CANONICAL },
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
          <span>Retatrutide File</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Dosing</span>
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
          Retatrutide Dosage: Phase III Trial Schedule
        </h1>

        <p className="page-intro">
          Phase III TRIUMPH trials titrate retatrutide from 2mg to 12mg weekly
          over approximately 12 weeks, with each step held for four weeks.
          Maintenance doses are 9mg or 12mg weekly by subcutaneous injection,
          with a six-day half-life supporting the weekly schedule.
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
            { stat: "2mg", label: "Starting dose" },
            { stat: "5 steps", label: "Titration steps" },
            { stat: "4 weeks", label: "Step duration" },
            { stat: "12 weeks", label: "Full titration" },
            { stat: "9mg", label: "Maintenance (lower)" },
            { stat: "12mg", label: "Maintenance (higher)" },
            { stat: "~6 days", label: "Half-life" },
            { stat: "Weekly SC", label: "Frequency" },
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
            The retatrutide dosing schedule used in Phase III TRIUMPH trials
            runs 2mg, 4mg, 6mg, then either 9mg or 12mg weekly, with each
            step held for approximately four weeks. Full titration to the top
            dose takes 12 weeks. The compound is given as a subcutaneous
            injection with a half-life of approximately six days, which
            supports the once-weekly schedule.
          </p>

          <p>
            Two maintenance doses were studied in parallel. The 12mg dose
            produced 28.7% body weight reduction in TRIUMPH-4 over 68 weeks;
            the 9mg dose produced 26.4%. The efficacy gap is modest, and the
            safety gap is larger: dysesthesia appeared in 20.9% at 12mg versus
            8.8% at 9mg. How the final FDA label structures these two doses
            will shape real-world prescribing.
          </p>

          <p>
            Retatrutide is investigational as of April 2026 and not available
            by prescription or legitimate compounding. The schedule described
            here is the trial protocol, not a usage recommendation. This
            article covers the rationale behind the titration design, how it
            compares with semaglutide and tirzepatide, and the practical
            considerations that will apply once retatrutide reaches market.
          </p>

          <h2 id="what-it-is">What retatrutide dosing looks like</h2>

          <p>
            Retatrutide (LY3437943) is Eli Lilly's triple agonist peptide,
            activating GLP-1, GIP, and glucagon receptors. The dosing format
            follows the template established by semaglutide and tirzepatide:
            once-weekly subcutaneous injection from a pre-filled pen, stepwise
            titration from a low starting dose to maintenance, and indefinite
            continuation for weight loss maintenance.
          </p>

          <p>
            The pharmacokinetic profile drives the weekly schedule. A half-life
            of approximately six days means steady-state plasma concentrations
            are reached after four to five weeks of consistent dosing at any
            given step. That is also why each titration step is held for four
            weeks: it gives the body time to reach equilibrium before the next
            dose increase, reducing the gastrointestinal effects that dominate
            the early side effect profile.
          </p>

          <p>
            Injection sites are the abdomen, thigh, or upper arm, rotated
            weekly to minimise local skin reactions. The pen device is
            functionally equivalent to what Lilly uses for Mounjaro and
            Zepbound, so patients familiar with those products will find
            retatrutide administration familiar when it launches.
          </p>

          <h2 id="what-the-research-says">What the research says</h2>

          <p>
            The TRIUMPH Phase III protocol uses a fixed five-step titration:
            2mg (weeks 1 to 4), 4mg (weeks 5 to 8), 6mg (weeks 9 to 12), and
            then maintenance at 9mg or 12mg from week 13 onward. This schedule
            was carried over from the Phase II trial (Jastreboff et al.,{" "}
            <em>New England Journal of Medicine</em>, 2023, PMID: 37366315),
            where it was established as effective and tolerable.
          </p>

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
                  {["Week", "Weekly Dose", "Step Purpose"].map((h) => (
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
                {[
                  ["1 to 4", "2mg", "Initial tolerance, starting dose"],
                  ["5 to 8", "4mg", "First escalation, GI acclimation"],
                  ["9 to 12", "6mg", "Mid-titration, monitoring continues"],
                  ["13 to 16", "9mg", "Pre-maintenance (9mg arm) or step to 12mg"],
                  ["17 onward", "9mg or 12mg", "Maintenance dose, continued indefinitely"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontSize: "13px" }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontWeight: 600 }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The design rationale is straightforward: GLP-1 receptor agonists
            produce the strongest gastrointestinal side effects at first
            exposure and on dose escalation. A gradual titration reduces
            nausea, vomiting, and diarrhoea sufficiently to keep most
            participants on treatment through the escalation period.
            Trial-reported GI effects in TRIUMPH-4 were predominantly
            mild-to-moderate and resolved by the maintenance phase for most
            participants.
          </p>

          <p>
            The choice between 9mg and 12mg as maintenance was tested head to
            head in TRIUMPH-4. The efficacy difference (26.4% vs 28.7%) was
            statistically meaningful but clinically modest. The safety
            difference was larger: dysesthesia appeared in 8.8% at 9mg and
            20.9% at 12mg, and trial discontinuation rates ran higher at 12mg
            as well. See the full safety breakdown in{" "}
            <Link href="/retatrutide/side-effects">Retatrutide Side Effects</Link>.
          </p>

          <h2 id="practical-breakdown">Practical breakdown</h2>

          <p>
            Assume retatrutide launches with a label that mirrors the TRIUMPH
            protocol: 2mg starting dose, 4-week step intervals, 9mg and 12mg
            both available as maintenance options. The practical questions for
            clinicians and patients then become: how strictly should the
            four-week step be followed, when should titration be slowed, and
            which maintenance dose is the default starting point.
          </p>

          <p>
            On slower titration: extending each step to six or eight weeks when
            participants experience persistent nausea is already standard with
            semaglutide and tirzepatide. The trade-off is delayed time to
            maintenance dose (and therefore delayed peak efficacy) against
            better tolerability and adherence. For most patients, the adherence
            benefit outweighs the efficacy delay: participants who discontinue
            during titration get zero long-term benefit.
          </p>

          <p>
            On maintenance dose selection, the case for defaulting to 9mg is
            strong. The efficacy advantage over tirzepatide (26.4% vs 22.5% in
            SURMOUNT-1) is preserved at 9mg; the dysesthesia rate is
            approximately one third of the 12mg rate; the discontinuation rate
            is lower. Participants who tolerate 9mg well and have not reached
            their weight loss goal can escalate to 12mg, but the marginal 2.3
            percentage points of additional loss may not justify the safety cost
            for most users. The{" "}
            <Link href="/retatrutide/clinical-trial-results">
              TRIUMPH-4 clinical trial results
            </Link>{" "}
            article has the full efficacy versus dose data.
          </p>

          <p>
            On administration: injection site rotation matters more with
            retatrutide than with semaglutide because of the dysesthesia signal,
            which some early case discussions have suggested may present at or
            near injection sites in a subset of participants. The prevailing
            evidence points to dysesthesia as a systemic rather than local
            effect, but site rotation is standard practice and worth maintaining
            regardless.
          </p>

          <h2 id="comparison">Comparison: retatrutide vs semaglutide vs tirzepatide dosing</h2>

          <p>
            All three compounds use weekly subcutaneous injection with stepwise
            titration. The starting and maintenance doses differ, but the
            structural pattern is the same.
          </p>

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
                  {["Compound", "Starting", "Maintenance", "Titration"].map((h) => (
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
                {[
                  ["Retatrutide", "2mg", "9mg or 12mg", "~12 weeks"],
                  ["Tirzepatide (Zepbound)", "2.5mg", "5mg to 15mg", "~20 weeks"],
                  ["Semaglutide (Wegovy)", "0.25mg", "2.4mg", "~16 weeks"],
                  ["Liraglutide (Saxenda)", "0.6mg", "3.0mg", "~5 weeks (daily)"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: i === 0 ? 600 : 400 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[2]}</td>
                    <td style={{ padding: "12px 16px" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Retatrutide reaches maintenance faster than semaglutide or
            tirzepatide (12 weeks vs 16 to 20). The trade-off is fewer
            intermediate dose options for fine-tuning tolerability. Where
            semaglutide offers six titration steps and tirzepatide offers six
            as well, retatrutide offers five, with larger mg gaps between them.
            This is a design choice rather than a flaw: the Phase II data showed
            the titration worked, and Lilly carried it into Phase III without
            modification.
          </p>

          <p>
            For the broader class context see{" "}
            <Link href="/retatrutide/vs-tirzepatide">Retatrutide vs Tirzepatide</Link>{" "}
            and{" "}
            <Link href="/retatrutide/vs-semaglutide">Retatrutide vs Semaglutide</Link>,
            which cover the full head-to-head picture across efficacy, safety,
            and cost.
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
                <p style={{ marginTop: "12px", marginBottom: 0 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* MEDICAL DISCLAIMER BOX */}
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
              This article is for informational and educational purposes only
              and does not constitute medical advice. Retatrutide is an
              investigational drug. It has not been approved by the FDA, EMA,
              MHRA, or any other regulatory agency. Dosing information presented
              here describes clinical trial protocols, not recommendations for
              personal use. The compound is not available through legitimate
              prescription or compounding channels as of April 2026. Consult a
              licensed healthcare provider before starting, stopping, or
              changing any medication. Peptide File reports on research and does
              not sell, prescribe, or recommend sources for any compound
              discussed.
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
                ["what-it-is", "What dosing looks like"],
                ["what-the-research-says", "What the research says"],
                ["practical-breakdown", "Practical breakdown"],
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
                ["/retatrutide/side-effects", "Side Effects"],
                ["/retatrutide/vs-semaglutide", "Retatrutide vs Semaglutide"],
                ["/retatrutide/vs-tirzepatide", "Retatrutide vs Tirzepatide"],
                ["/retatrutide/fda-approval", "FDA Approval Timeline"],
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
              Label guidance as soon as it lands.
            </h2>
            <p style={{ marginTop: "16px", fontSize: "15px", color: "var(--ink2)" }}>
              When retatrutide approval arrives, the FDA label will set the
              definitive dosing schedule. Plain-English summary within 24 hours
              of release. No spam, no affiliate pitches.
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
