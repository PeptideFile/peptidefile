import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Retatrutide Side Effects: Full Phase III Safety Profile (TRIUMPH-4)";
const DESCRIPTION =
  "Retatrutide side effects from Phase III TRIUMPH-4: dysesthesia in 20.9% at 12mg, gastrointestinal profile, discontinuation rates, and class comparison.";
const SLUG = "retatrutide/side-effects";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-04-21T00:00:00+00:00";
const MODIFIED = "2026-04-21T00:00:00+00:00";

export const metadata: Metadata = {
  title: `${TITLE} | Peptide File`,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Retatrutide Side Effects: Full Phase III Safety Profile",
    description:
      "Dysesthesia in 20.9% at 12mg, full GI profile, discontinuation rates, and how retatrutide compares with semaglutide and tirzepatide on safety.",
    type: "article",
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
    authors: ["Mark Boreland"],
    siteName: "Peptide File",
    url: CANONICAL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Retatrutide Side Effects: Full Phase III Safety Profile",
    description:
      "Dysesthesia in 20.9% at 12mg, full GI profile, and how retatrutide compares with semaglutide and tirzepatide on safety.",
  },
};

// ---------- FAQ DATA ----------
const faqs = [
  {
    q: "What are the most common retatrutide side effects?",
    a: "Gastrointestinal: nausea, vomiting, diarrhoea, and constipation are reported most frequently, mirroring the class profile of other GLP-1 agonists. Nausea affected roughly 50-60% of participants at the 12mg dose in TRIUMPH-4, mostly during titration. Dysesthesia (abnormal skin sensation) is the distinctive retatrutide finding, reported in 20.9% at 12mg versus 0.7% on placebo.",
  },
  {
    q: "What is dysesthesia and how serious is it?",
    a: "Dysesthesia is abnormal skin sensation, typically described as burning, tingling, prickling, or pins-and-needles feelings. It was reported in 20.9% of TRIUMPH-4 participants at the 12mg dose and 8.8% at 9mg. Eli Lilly has characterised cases as mostly mild-to-moderate and reversible on discontinuation. No cases of permanent nerve injury have appeared in trial disclosures so far, though longer follow-up is pending.",
  },
  {
    q: "How do retatrutide side effects compare with semaglutide and tirzepatide?",
    a: "The gastrointestinal profile is broadly similar across the class: nausea, vomiting, and constipation dominate, mostly during titration. Retatrutide adds the dysesthesia signal (not seen with semaglutide or tirzepatide) and a somewhat higher discontinuation rate at the top dose. Gallbladder complications, pancreatitis risk, and heart rate increases appear across the class at comparable rates.",
  },
  {
    q: "Why does retatrutide cause dysesthesia when similar drugs do not?",
    a: "The prevailing hypothesis is the glucagon receptor component, which semaglutide (GLP-1 only) and tirzepatide (GLP-1 and GIP) lack. Glucagon receptor activation affects peripheral metabolism and may interact with small nerve fibres, though the mechanism is not yet confirmed. The signal did not appear in Phase II, where the trial was shorter and the population smaller, so duration of exposure likely matters.",
  },
  {
    q: "What is the discontinuation rate in Phase III trials?",
    a: "Trial-reported discontinuation rates at 12mg were higher than at 9mg, reflecting both the dysesthesia finding and the amplified GI profile at the top dose. Specific percentages vary across the TRIUMPH trials and have been reported as in the low double-digits for the 12mg arm. Full per-trial discontinuation data will appear in peer-reviewed publications following topline release.",
  },
  {
    q: "Are there long-term safety concerns with retatrutide?",
    a: "The longest retatrutide exposure data comes from the 68-week TRIUMPH-4 trial. Concerns that apply to the GLP-1 class (thyroid C-cell tumours seen in rodent studies, pancreatitis, gallbladder disease) carry over and will be monitored in post-approval surveillance. The cardiovascular outcomes trial (TRIUMPH-3) will generate multi-year safety data, but that readout is expected later in the program.",
  },
  {
    q: "Can retatrutide cause hypoglycaemia?",
    a: "Severe hypoglycaemia has not been a prominent signal in TRIUMPH trials in non-diabetic populations, consistent with the broader GLP-1 class. Risk increases when retatrutide is used alongside insulin or sulfonylureas in type 2 diabetes, which is why TRIUMPH-2 (the diabetes trial) monitors this specifically. Non-diabetic users should not expect clinically meaningful hypoglycaemia from retatrutide monotherapy.",
  },
  {
    q: "What side effects should prompt stopping treatment?",
    a: "Persistent severe abdominal pain (possible pancreatitis), signs of gallbladder disease (right upper quadrant pain, jaundice), severe or progressive dysesthesia, or signs of allergic reaction warrant immediate medical review. Mild-to-moderate GI effects during titration are expected and typically resolve within weeks. Any decision to continue or stop treatment should be made with the prescribing clinician once retatrutide is approved and available.",
  },
];

// ---------- PAGE ----------
export default function RetatrutideSideEffectsPage() {
  const articleJsonLd = articleSchema({
    headline: "Retatrutide Side Effects: Full Phase III Safety Profile",
    description:
      "Complete retatrutide safety profile from Phase III TRIUMPH-4: dysesthesia in 20.9% at 12mg, gastrointestinal effects, and class comparison.",
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
    { name: "Side Effects", item: CANONICAL },
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
          <span>Safety</span>
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
          Retatrutide Side Effects: Full Phase III Safety Profile
        </h1>

        <p className="page-intro">
          Phase III TRIUMPH-4 reported dysesthesia in 20.9% of participants at
          the 12mg weekly dose versus 0.7% on placebo, the most distinctive
          retatrutide safety finding. Gastrointestinal effects and
          discontinuation rates follow the GLP-1 class profile at amplified
          magnitude.
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
            { stat: "20.9%", label: "Dysesthesia at 12mg" },
            { stat: "8.8%", label: "Dysesthesia at 9mg" },
            { stat: "0.7%", label: "Dysesthesia, placebo" },
            { stat: "~55%", label: "Nausea at 12mg (approx)" },
            { stat: "~30%", label: "Vomiting at 12mg (approx)" },
            { stat: "+5–8 bpm", label: "Heart rate increase" },
            { stat: "Low", label: "Serious adverse events" },
            { stat: "None", label: "Permanent injury reported" },
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
            Dysesthesia (abnormal skin sensation, typically burning or tingling)
            in 20.9% of 12mg participants versus 0.7% on placebo is the most
            discussed retatrutide safety finding from Phase III TRIUMPH-4. It
            is the signal that did not appear in Phase II, scaled with dose and
            exposure duration, and will be the subject of regulatory scrutiny
            when Eli Lilly files the New Drug Application.
          </p>

          <p>
            The rest of the safety profile follows the pattern of GLP-1
            receptor agonists, amplified somewhat by dose. Gastrointestinal
            effects (nausea, vomiting, diarrhoea, constipation) dominate early
            treatment and mostly resolve over the titration period.
            Discontinuation rates run higher at 12mg than at 9mg, reflecting
            both the dysesthesia finding and the stronger GI profile at the top
            dose.
          </p>

          <p>
            This article walks through the full adverse event profile from
            TRIUMPH-4, the mechanism theories for dysesthesia, class comparison
            data against semaglutide and tirzepatide, and the practical
            considerations that matter for clinicians tracking this compound
            ahead of approval.
          </p>

          <h2 id="what-it-is">How retatrutide affects the body</h2>

          <p>
            Retatrutide (LY3437943) is a triple agonist that activates GLP-1,
            GIP, and glucagon receptors simultaneously. The GLP-1 and GIP
            components drive the familiar incretin effects: delayed gastric
            emptying, increased satiety, improved insulin sensitivity. The
            glucagon component raises resting energy expenditure and increases
            hepatic fat oxidation.
          </p>

          <p>
            Each receptor pathway carries its own side effect profile. GLP-1
            activity drives the gastrointestinal effects and the modest heart
            rate increase seen across the class. GIP activity is generally
            well-tolerated and adds efficacy without much of a safety cost. The
            glucagon component is the novel variable and the leading candidate
            for the dysesthesia signal, though the mechanism has not yet been
            confirmed in published work.
          </p>

          <p>
            Retatrutide is administered subcutaneously once weekly. Half-life
            is approximately six days. The titration schedule used in TRIUMPH
            runs 2mg, 4mg, 6mg, then 9mg or 12mg, with each step typically
            held for four weeks. Side effect frequency is highest during
            titration and tapers during maintenance, which is the same pattern
            seen with semaglutide and tirzepatide. See the{" "}
            <Link href="/retatrutide/dosage">Retatrutide Dosage Guide</Link>{" "}
            for full titration detail.
          </p>

          <h2 id="what-the-research-says">What the research says: TRIUMPH-4 adverse event profile</h2>

          <p>
            TRIUMPH-4 enrolled adults with obesity (BMI 30+) and
            moderate-to-severe knee osteoarthritis. The trial ran 68 weeks with
            participants randomised across 9mg, 12mg, and placebo arms. Topline
            results were released in December 2025. The Phase II trial
            (Jastreboff et al., <em>New England Journal of Medicine</em>, 2023,
            PMID: 37366315) is the companion evidence base and did not show the
            dysesthesia signal, which is why Phase III gets attention here.
          </p>

          <h3>Gastrointestinal effects</h3>

          <p>
            The GI profile accounts for the majority of adverse events across
            all arms. Nausea is the most frequent, affecting roughly 50 to 60%
            of participants at 12mg during titration and dropping to lower
            levels during maintenance. Vomiting appeared in approximately 30%
            at 12mg, diarrhoea in 25 to 30%, and constipation in 20 to 25%.
            Most GI events were graded mild-to-moderate and resolved with slower
            titration or antiemetic support.
          </p>

          <p>
            These numbers are consistent with the class. Semaglutide's STEP 1
            trial reported nausea in 44% of participants, and tirzepatide's
            SURMOUNT-1 reported 33% at 15mg. Retatrutide's higher GI frequency
            at 12mg reflects the stronger overall receptor activation at the top
            dose, not a different safety profile.
          </p>

          <h3>The dysesthesia signal</h3>

          <p>
            Dysesthesia in 20.9% of 12mg participants and 8.8% of 9mg
            participants (versus 0.7% placebo) is the finding that makes
            retatrutide different from semaglutide and tirzepatide on safety.
            The signal did not appear in the Phase II trial, where the same
            doses were tested over 48 weeks in a smaller population. Phase III
            exposure was longer (68 weeks) and enrolled more participants, which
            likely explains why the effect became visible.
          </p>

          <div
            style={{
              marginTop: "24px",
              marginBottom: "24px",
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
              What dysesthesia feels like
            </div>
            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6 }}>
              Participants described burning, tingling, prickling, or
              pins-and-needles sensations, most often in the extremities. Eli
              Lilly has reported cases as predominantly mild-to-moderate and
              reversible on dose reduction or discontinuation. No permanent
              nerve injury has been recorded in trial disclosures to date.
            </p>
          </div>

          <p>
            The mechanistic hypothesis points at the glucagon receptor. Neither
            semaglutide (GLP-1 only) nor tirzepatide (GLP-1 plus GIP) produces
            this signal, so the glucagon component is the most obvious novel
            variable. Glucagon receptor activation has effects on peripheral
            metabolism and may interact with small nerve fibres, though the
            pathway is not yet established in published research. Longer
            follow-up from the other TRIUMPH trials will clarify whether this is
            a dose-limiting issue or a manageable side effect.
          </p>

          <h3>Cardiovascular and metabolic findings</h3>

          <p>
            Heart rate increased by approximately 5 to 8 beats per minute at
            12mg, consistent with the GLP-1 class effect. Systolic blood
            pressure dropped by 14.0 mmHg at 12mg in TRIUMPH-4, a secondary
            benefit rather than an adverse effect. Liver enzymes did not show
            clinically significant changes, which matters given the glucagon
            receptor component and its effects on hepatic metabolism.
          </p>

          <h3>Serious adverse events</h3>

          <p>
            Serious adverse event rates in TRIUMPH-4 were low and broadly
            comparable across the dose arms and placebo. No drug-related deaths
            have been reported in the program. Pancreatitis, gallbladder
            disease, and thyroid tumour signals (the class-wide concerns for
            GLP-1 agonists) appeared at rates consistent with or lower than
            semaglutide and tirzepatide in comparable trials.
          </p>

          <h2 id="practical-breakdown">Practical breakdown</h2>

          <p>
            Retatrutide is investigational and not available by prescription.
            This section describes what a clinical rollout would likely look
            like based on trial management, not a protocol for current use.
            Grey-market sourcing carries safety risks that go beyond the side
            effect profile described here: unverified purity, sterility, and
            dosing accuracy are the dominant concerns with any unapproved
            peptide.
          </p>

          <p>
            Managing GI effects during titration is the first practical
            consideration. Slower dose escalation (holding each step for six
            weeks instead of four, for example) reduces nausea frequency at the
            cost of slower time-to-maintenance. This is already standard
            practice with semaglutide and tirzepatide and will likely carry over
            to retatrutide post-approval. Staying at 9mg rather than escalating
            to 12mg may also become a common choice: the efficacy gain (26.4%
            at 9mg versus 28.7% at 12mg) is modest compared with the rise in
            dysesthesia incidence (8.8% versus 20.9%).
          </p>

          <p>
            For dysesthesia specifically, the trial management approach has been
            dose reduction or discontinuation. There is no validated
            pharmacological intervention for drug-induced dysesthesia of this
            type, and symptoms have resolved on stopping treatment in reported
            cases. Whether the signal attenuates over very long exposure (beyond
            the 68-week TRIUMPH-4 window) is an open question that the remaining
            trials will address.
          </p>

          <p>
            For a complete view of efficacy alongside these safety numbers, see
            the{" "}
            <Link href="/retatrutide/clinical-trial-results">
              Retatrutide Clinical Trial Results
            </Link>{" "}
            article.
          </p>

          <h2 id="comparison">Class comparison: retatrutide vs semaglutide vs tirzepatide</h2>

          <p>
            On safety, the three compounds sit close together on the
            gastrointestinal profile and diverge on the dysesthesia signal. The
            table below pulls the comparable Phase III data.
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
                  {[
                    "Adverse Event",
                    "Retatrutide 12mg",
                    "Tirzepatide 15mg",
                    "Semaglutide 2.4mg",
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
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nausea", "~55%", "33%", "44%"],
                  ["Vomiting", "~30%", "13%", "24%"],
                  ["Diarrhoea", "~28%", "22%", "30%"],
                  ["Constipation", "~22%", "17%", "24%"],
                  ["Dysesthesia", "20.9%", "Not reported", "Not reported"],
                  ["Heart rate", "+5–8 bpm", "+3–5 bpm", "+3–5 bpm"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      background: i % 2 === 0 ? "var(--paper)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "12px 16px", fontWeight: 500 }}>{row[0]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontWeight: 600 }}>{row[1]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[2]}</td>
                    <td style={{ padding: "12px 16px", fontFamily: "var(--mono)" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            style={{
              fontSize: "12px",
              color: "var(--ink2)",
              fontStyle: "italic",
              marginTop: "-12px",
            }}
          >
            Retatrutide figures approximated from TRIUMPH-4 topline disclosures;
            tirzepatide from SURMOUNT-1; semaglutide from STEP 1. Cross-trial
            comparison is indicative, not statistical.
          </p>

          <p>
            Two observations from this comparison. First, retatrutide's GI
            frequency at 12mg runs higher than tirzepatide and semaglutide at
            their top doses, but the difference is modest and explainable by
            stronger receptor activation. Second, dysesthesia is the only
            category where retatrutide has a qualitatively different profile
            from the other two compounds. On every other axis, the safety story
            is familiar class territory.
          </p>

          <p>
            The commercial and regulatory implication: retatrutide's approval
            case rests on whether the efficacy gain (28.7% versus 22.5%)
            justifies the dysesthesia signal for the 12mg dose. The 9mg dose
            may end up being the more widely used option in practice, where the
            efficacy advantage over tirzepatide remains (26.4% versus 22.5%)
            and the dysesthesia rate is considerably lower. See{" "}
            <Link href="/retatrutide/vs-tirzepatide">
              Retatrutide vs Tirzepatide
            </Link>{" "}
            for the full head-to-head.
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
              MHRA, or any other regulatory agency. Side effect data described
              here comes from clinical trials conducted under medical
              supervision. Individual response varies, and side effects not seen
              in trials may emerge with broader post-approval use. Consult a
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
                ["what-it-is", "How retatrutide affects the body"],
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
                ["/retatrutide/vs-semaglutide", "Retatrutide vs Semaglutide"],
                ["/retatrutide/vs-tirzepatide", "Retatrutide vs Tirzepatide"],
                ["/retatrutide/dosage", "Retatrutide Dosage Guide"],
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
              Safety data as TRIUMPH trials read out.
            </h2>
            <p style={{ marginTop: "16px", fontSize: "15px", color: "var(--ink2)" }}>
              Seven more Phase III retatrutide readouts are expected through
              2026. Plain-English summaries of new safety data within 24 hours
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
