import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "GLP-1 Safety Profile: Long-Term Side Effects Reviewed | Peptide File",
  description:
    "GLP-1 agonist side effects long term: GI symptoms, pancreatitis, gallbladder disease, thyroid C-cell concern, cardiovascular safety, and the FDA's 2024 suicidal ideation review.",
  openGraph: {
    title: "GLP-1 Safety Profile: Long-Term Side Effects Reviewed",
    description:
      "GLP-1 agonist side effects long term: GI symptoms, pancreatitis, gallbladder disease, thyroid C-cell concern, cardiovascular safety, and the FDA's 2024 suicidal ideation review.",
    url: "https://peptidefile.com/glp-1/safety-profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLP-1 Safety Profile: Long-Term Side Effects Reviewed",
    description:
      "GLP-1 agonist side effects long term: GI symptoms, pancreatitis, gallbladder disease, thyroid C-cell concern, cardiovascular safety, and the FDA's 2024 suicidal ideation review.",
  },
  alternates: {
    canonical: "https://peptidefile.com/glp-1/safety-profile",
  },
};

const faqs = [
  {
    q: "What are the most common side effects of GLP-1 agonists?",
    a: "Gastrointestinal symptoms dominate. Nausea is the most common, reported by roughly 40 to 50% of participants in trials of semaglutide and tirzepatide. Diarrhoea, vomiting, and constipation each occur in 15 to 25% of users. Most symptoms are mild to moderate, peak in the first week or two after each dose increase, and decline as tolerance develops. Discontinuation due to adverse events runs around 6 to 8% across the class.",
  },
  {
    q: "Do GLP-1 agonists cause pancreatitis?",
    a: "The signal exists but the absolute risk is low. Early post-marketing reports raised concern, but the SELECT trial in 17,604 patients on semaglutide over a median 39.8 months showed no significant increase versus placebo. Current guidance is to stop the drug if pancreatitis is suspected and to avoid GLP-1 agonists in anyone with a personal history of acute or chronic pancreatitis. The label warning persists across the class.",
  },
  {
    q: "What is the thyroid C-cell concern?",
    a: "Rodent studies showed dose-dependent thyroid C-cell tumours with liraglutide and other GLP-1 agonists. Whether this translates to humans is unclear because human C-cells express far fewer GLP-1 receptors than rodent C-cells. No causal signal has emerged in human trials or post-marketing surveillance. The FDA has nevertheless contraindicated the entire class in anyone with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia type 2.",
  },
  {
    q: "Do GLP-1 agonists cause gastroparesis?",
    a: "Severe gastroparesis case reports exist but are rare. The class slows gastric emptying as part of its mechanism, which is why nausea is common. In a small minority of users this slowing becomes severe enough to cause persistent vomiting, abdominal pain, and the inability to eat. The condition usually resolves after stopping the drug. Anyone with pre-existing gastroparesis should avoid the class. Pre-operative guidance now includes holding GLP-1 agonists for one to several days before anaesthesia to reduce aspiration risk.",
  },
  {
    q: "Did the FDA find that GLP-1 agonists cause suicidal thoughts?",
    a: "No. In January 2024 the FDA concluded its review of post-marketing reports of suicidal ideation and self-harm with GLP-1 agonists. The review found no causal link. The signal had been raised based on European Medicines Agency reports in 2023, and the FDA's analysis of clinical trial data and FAERS reports did not support a causal association. Patients with a history of mental health concerns should still discuss the risk-benefit picture with their prescriber.",
  },
  {
    q: "Are GLP-1 agonists safe during pregnancy?",
    a: "No. Animal studies show developmental toxicity at clinical exposure levels, and human pregnancy data are insufficient. The FDA recommends discontinuing GLP-1 agonists at least two months before conception, given the long half-lives. Anyone who becomes pregnant on a GLP-1 should stop the drug and contact their prescriber. The drugs are also not recommended during breastfeeding.",
  },
  {
    q: "What does long-term safety look like beyond five years?",
    a: "The data are still maturing. Semaglutide has the longest cumulative exposure (Wegovy approved June 2021, Ozempic in diabetes since 2017), with SELECT providing 39.8 months of cardiovascular outcomes data. No new long-term safety signals have emerged from real-world pharmacovigilance through 2026. Open questions include effects on muscle and bone over decades of continuous use, and whether any rare events become apparent only with millions of patient-years of exposure.",
  },
  {
    q: "Who should not take a GLP-1 agonist?",
    a: "Anyone with a personal or family history of medullary thyroid carcinoma or MEN 2, anyone with a history of pancreatitis, anyone with severe gastroparesis, and anyone who is pregnant or planning pregnancy within two months. People with severe gastrointestinal disease, gallbladder disease, or diabetic retinopathy should discuss risks with their prescriber. The drugs are not approved for paediatric use under age 12 (semaglutide) or 18 (other GLP-1s for weight loss).",
  },
];

const seriousEvents = [
  {
    category: "Pancreas",
    name: "Acute pancreatitis",
    detail:
      "Boxed warning across the class. Signal raised in early post-marketing reports for exenatide and liraglutide. SELECT (n=17,604, median 39.8 months) showed no significant increase versus placebo. Stop the drug if pancreatitis is suspected. Contraindicated in anyone with a personal history.",
  },
  {
    category: "Biliary",
    name: "Gallbladder disease",
    detail:
      "Cholelithiasis and cholecystitis occur at modestly elevated rates, likely linked to rapid weight loss rather than direct drug effect. STEP 1 reported gallbladder events in 2.6% of semaglutide arm versus 1.2% on placebo. Risk is highest during the first six months of treatment.",
  },
  {
    category: "GI motility",
    name: "Severe gastroparesis",
    detail:
      "Rare case reports of persistent vomiting, abdominal pain, and inability to tolerate food. Usually resolves after discontinuation. Drives current pre-operative holding guidance for elective anaesthesia: one to several days off the drug to reduce aspiration risk.",
  },
  {
    category: "Ophthalmic",
    name: "Diabetic retinopathy",
    detail:
      "SUSTAIN 6 reported a small increase in retinopathy complications in patients with pre-existing retinopathy on semaglutide. Mechanism is thought to relate to rapid glucose normalisation rather than direct retinal toxicity. Patients with proliferative retinopathy should be monitored closely.",
  },
  {
    category: "Renal",
    name: "Acute kidney injury",
    detail:
      "Reported in patients who become severely volume-depleted from prolonged vomiting or diarrhoea. Mechanism is dehydration-mediated rather than direct nephrotoxicity. Resolves with rehydration and dose reduction in most cases.",
  },
];

export default function GLP1SafetyProfilePage() {
  const article = articleSchema({
    headline: "GLP-1 Safety Profile: Long-Term Side Effects Reviewed",
    description:
      "GLP-1 agonist side effects long term: GI symptoms, pancreatitis, gallbladder disease, thyroid C-cell concern, cardiovascular safety, and the FDA's 2024 suicidal ideation review.",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
    image: "https://peptidefile.com/og-glp-1-safety-profile.png",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "GLP-1", item: "https://peptidefile.com/glp-1" },
    {
      name: "Safety Profile",
      item: "https://peptidefile.com/glp-1/safety-profile",
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
          <span>Safety Profile</span>
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
          GLP-1 Safety Profile: Long-Term Side Effects Reviewed
        </h1>

        <p className="page-intro">
          The GLP-1 class has accumulated more patient-years of exposure in five
          years than most drug classes do in two decades. The safety picture is
          well-defined for short-term effects (gastrointestinal, peaking in the
          first weeks) and increasingly mature for medium-term ones
          (cardiovascular, biliary, thyroid). The long-term picture beyond
          five years is still being written.
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
            { stat: "44–50%", label: "Nausea rate (SURMOUNT-5)" },
            { stat: "6–8%", label: "Discontinuation due to AEs" },
            { stat: "20%", label: "MACE reduction (SELECT)" },
            { stat: "No link", label: "FDA 2024 suicidal ideation review" },
            { stat: "≥2 months", label: "Pre-conception washout" },
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
              GLP-1 agonists are the most widely prescribed weight-loss drugs
              in history, and the safety database is now substantial. By the
              start of 2026, semaglutide alone had accumulated over 30 million
              patient-years of exposure across diabetes and obesity
              indications. Tirzepatide is approaching 5 million. The acute
              tolerability profile (nausea, diarrhoea, constipation) is
              well-defined. The mid-range safety questions (pancreatitis,
              gallbladder, thyroid) have been actively monitored for over a
              decade. The longest-running outcomes trial, SELECT (Lincoff et
              al., NEJM, 2023, PMID: 37952131), provides cardiovascular
              follow-up of 17,604 patients over a median 39.8 months.
            </p>
            <p>
              This article walks through the safety profile of the class as a
              whole rather than re-doing per-drug side effect tables, which
              are covered in{" "}
              <Link href="/glp-1/semaglutide-vs-tirzepatide">
                Semaglutide vs Tirzepatide
              </Link>
              . The triple-agonist-specific dysesthesia signal seen with
              retatrutide is covered separately in{" "}
              <Link href="/glp-1/triple-vs-dual-agonism">
                Triple vs Dual Agonism
              </Link>
              , because that signal does not apply to the dual or single
              agonists that make up the rest of the class.
            </p>
            <p>
              For background on the receptor biology that produces both the
              efficacy and the side-effect spectrum, see{" "}
              <Link href="/glp-1/how-glp-1-agonists-work">
                How GLP-1 Agonists Work
              </Link>
              .
            </p>
          </section>

          {/* WHAT IT IS */}
          <section id="what-it-is" style={{ marginBottom: 80 }}>
            <h2>What &ldquo;safety&rdquo; means for the GLP-1 class</h2>
            <p>
              GLP-1 agonists are not narrow-target drugs. The receptor is
              expressed in the pancreas, gut, brain, cardiovascular tissue,
              and several other locations. A single molecule activating a
              single receptor type produces effects in five organ systems,
              because that receptor lives in five organ systems. This is the
              strength and the weakness of the class. The breadth of effects
              produces remarkable efficacy. It also produces a spectrum of
              side effects broader than what most drug classes show.
            </p>
            <p>
              The safety profile breaks into four tiers, each with a different
              evidence base and a different clinical priority:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0" }}>
              {[
                {
                  label: "Tier 1: Acute GI tolerability",
                  text: "Nausea, vomiting, diarrhoea, constipation. Common, mostly mild to moderate, dose-dependent, and resolve with tolerance. Drive most of the 6 to 8% discontinuation rate seen across the class. Managed with slow titration and timing strategies. Well understood.",
                },
                {
                  label: "Tier 2: Class-wide adverse events",
                  text: "Pancreatitis, gallbladder disease, gastroparesis, retinopathy progression in pre-existing diabetic eye disease, acute kidney injury from volume depletion. Rare but serious. Carry boxed or label warnings. Clear contraindications and monitoring guidance exist.",
                },
                {
                  label: "Tier 3: Reviewed and not substantiated",
                  text: "Thyroid C-cell carcinoma (rodent signal, not seen in humans) and suicidal ideation (FDA review concluded January 2024 found no causal link). Both retain label language out of caution despite negative findings. Clinically actionable as contraindications rather than active monitoring targets.",
                },
                {
                  label: "Tier 4: Long-term unknowns",
                  text: "Effects beyond five years of continuous use are still being characterised. Open questions include muscle and bone changes over decades, rare events that emerge only with millions of patient-years, and whether the metabolic adaptations to chronic GLP-1 receptor activation produce any signals that have not yet been detected.",
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
              The rest of this article walks through each tier in turn. The
              one signal not covered here is dysesthesia (abnormal skin
              sensation), reported in 20.9% of retatrutide 12mg participants
              in TRIUMPH-4 versus 0.7% on placebo. That finding is specific
              to triple-receptor agonism and is covered in detail in the{" "}
              <Link href="/glp-1/triple-vs-dual-agonism">
                Triple vs Dual Agonism
              </Link>{" "}
              cluster.
            </p>
          </section>

          {/* WHAT THE RESEARCH SAYS */}
          <section id="what-the-research-says" style={{ marginBottom: 80 }}>
            <h2>The acute GI profile and how it resolves</h2>
            <p>
              Gastrointestinal side effects are intrinsic to the mechanism.
              Slowed gastric emptying is a primary effect that drives part of
              the appetite suppression, which is why nausea is the most
              common side effect across every compound in the class. Direct
              GLP-1 receptor activity in the area postrema (the brain region
              responsible for vomiting) also contributes.
            </p>
            <p>
              SURMOUNT-5 (Aronne et al., NEJM, 2025) reported the
              head-to-head GI rates for the two leading drugs. Nausea
              occurred in 50.0% of semaglutide participants and 44.0% of
              tirzepatide participants over 72 weeks. Diarrhoea ran 20.4%
              versus 24.7%. Vomiting was 21.1% versus 20.7%. Constipation was
              17.6% versus 21.6%. Discontinuation due to adverse events
              landed at 8.0% on semaglutide and 6.1% on tirzepatide. The
              tirzepatide GI profile is slightly more favourable than the
              semaglutide profile despite higher efficacy, which is one of
              the more interesting findings of the head-to-head trial.
            </p>
            <p>
              Symptoms peak in the first one to two weeks after each dose
              increase, then decline as tolerance develops. Slow titration
              protocols exist specifically to soften this peak. Wegovy
              titrates over 16 weeks (5 dose steps to reach 2.4mg). Zepbound
              titrates over 20 weeks (6 dose steps to reach 15mg). Skipping
              titration steps causes preventable nausea and is the single
              most common cause of avoidable discontinuation.
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
                Severe vomiting or persistent inability to keep down fluids is
                not part of the expected tolerability profile. It is the
                presentation that has driven the rare gastroparesis case
                reports and the volume-depletion-mediated kidney injury
                cases. Patients with these symptoms should stop the drug and
                contact their prescriber rather than push through.
              </div>
            </div>
          </section>

          {/* SERIOUS ADVERSE EVENTS */}
          <section id="serious-events" style={{ marginBottom: 80 }}>
            <h2>Serious adverse events the class is monitored for</h2>
            <p>
              Five class-wide serious events drive the boxed warnings,
              contraindications, and monitoring guidance attached to every
              GLP-1 agonist label. Absolute rates are low. The clinical
              priority is recognising risk factors that exclude a patient
              from the class rather than monitoring active drug users for
              emerging events.
            </p>

            <div style={{ margin: "32px 0" }}>
              {seriousEvents.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 32,
                    paddingTop: i === 0 ? 0 : 24,
                    paddingBottom: 24,
                    borderBottom:
                      i === seriousEvents.length - 1
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
                    {item.category}
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
              The thyroid C-cell concern sits in a separate category because
              it is a label-level contraindication based on rodent data
              rather than human evidence. Rodent studies showed
              dose-dependent C-cell tumours with liraglutide and other
              GLP-1 agonists. Whether the signal applies to humans is
              unclear, because human C-cells express far fewer GLP-1
              receptors than rodent C-cells. No causal signal has emerged
              in human trials or post-marketing data through 2026. The FDA
              has nevertheless contraindicated the entire class in anyone
              with a personal or family history of medullary thyroid
              carcinoma or Multiple Endocrine Neoplasia type 2, out of
              caution.
            </p>
          </section>

          {/* COMPARISON / FDA REVIEWS */}
          <section id="reviewed-signals" style={{ marginBottom: 80 }}>
            <h2>The signals the FDA has reviewed</h2>
            <p>
              Two safety signals have been formally reviewed by regulators
              and not substantiated. Both retain label language out of
              caution. Understanding what was reviewed and what was concluded
              matters because both signals have circulated widely in the
              public conversation and are often cited as established risks.
            </p>

            <h3 style={{ marginTop: 48, marginBottom: 24 }}>
              Suicidal ideation and self-harm
            </h3>
            <p>
              The signal was raised in mid-2023 when the European Medicines
              Agency announced a review of post-marketing reports. The FDA
              followed with its own review of clinical trial data, FAERS
              adverse event reports, and pharmacovigilance signals. In
              January 2024 the FDA concluded that the available evidence did
              not support a causal association between GLP-1 agonists and
              suicidal thoughts or self-harm. The EMA reached a similar
              conclusion in April 2024. Both agencies noted that patients
              with a history of mental health concerns should be monitored
              and should discuss the risk-benefit picture with their
              prescriber, as is standard for most chronic medications.
            </p>

            <h3 style={{ marginTop: 48, marginBottom: 24 }}>
              Cardiovascular safety
            </h3>
            <p>
              The cardiovascular question is settled in the opposite
              direction: the data show benefit rather than harm. SELECT
              (Lincoff et al., NEJM, 2023, PMID: 37952131, NCT03574597)
              followed 17,604 patients with established cardiovascular
              disease on semaglutide 2.4mg over a median 39.8 months. The
              trial showed a 20% reduction in major adverse cardiovascular
              events versus placebo, driven by reductions in cardiovascular
              death, non-fatal myocardial infarction, and non-fatal stroke.
              SELECT is the largest cardiovascular outcomes trial ever
              completed for a weight-loss drug and is the basis for
              semaglutide's specific cardiovascular protection labelling.
              Tirzepatide's outcomes trial (SURPASS-CVOT) is expected to
              read out in 2026 or 2027. Until it does, semaglutide is the
              only GLP-1 weight-loss drug with published cardiovascular
              outcomes data.
            </p>

            <h3 style={{ marginTop: 48, marginBottom: 24 }}>
              Pregnancy and fertility
            </h3>
            <p>
              Animal reproductive toxicity studies show developmental
              toxicity at clinical exposure levels for every approved
              GLP-1 agonist. Human pregnancy data are limited because trials
              exclude pregnant women and accidental exposures are
              under-reported. The FDA recommendation is to discontinue any
              GLP-1 agonist at least two months before planned conception,
              accounting for the long half-lives. Anyone who becomes
              pregnant while on a GLP-1 should stop the drug and contact
              their prescriber. The class is also not recommended during
              breastfeeding. A separate fertility question has emerged with
              reports of unintended pregnancies among women on GLP-1s who
              had previously been infertile, possibly related to weight
              loss restoring ovulation. This is a counselling point rather
              than a safety concern, and contraception guidance should
              reflect it.
            </p>
          </section>

          {/* CONTRAINDICATIONS */}
          <section id="contraindications" style={{ marginBottom: 80 }}>
            <h2>Who should not take a GLP-1 agonist</h2>
            <p>
              The contraindications are stable across the class and have
              changed little since liraglutide's 2010 approval. They divide
              into absolute exclusions and relative cautions.
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
                    {["Category", "Condition", "Reason"].map((h) => (
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
                    [
                      "Absolute",
                      "Personal or family history of medullary thyroid carcinoma",
                      "Rodent C-cell tumour signal, label contraindication",
                    ],
                    [
                      "Absolute",
                      "Multiple Endocrine Neoplasia type 2 (MEN 2)",
                      "Same C-cell concern, genetic predisposition",
                    ],
                    [
                      "Absolute",
                      "Personal history of pancreatitis",
                      "Boxed warning, recurrence risk",
                    ],
                    [
                      "Absolute",
                      "Pregnancy or planned conception within 2 months",
                      "Animal teratogenicity, long drug half-life",
                    ],
                    [
                      "Relative",
                      "Severe gastroparesis or gastric outlet obstruction",
                      "Mechanism worsens motility",
                    ],
                    [
                      "Relative",
                      "Active gallbladder disease",
                      "Rapid weight loss can precipitate events",
                    ],
                    [
                      "Relative",
                      "Proliferative diabetic retinopathy",
                      "Rapid glucose normalisation can worsen course",
                    ],
                    [
                      "Relative",
                      "Severe renal or hepatic impairment",
                      "Limited safety data, monitor closely",
                    ],
                  ].map((row, ri) => (
                    <tr
                      key={ri}
                      style={{
                        borderBottom: ri < 7 ? "1px solid var(--rule)" : "none",
                        background: ri % 2 === 0 ? "var(--paper)" : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "var(--mono)",
                          fontSize: "13px",
                          color: row[0] === "Absolute" ? "var(--accent)" : "var(--ink)",
                          fontWeight: row[0] === "Absolute" ? 500 : 400,
                        }}
                      >
                        {row[0]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
                        {row[1]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink3)", fontWeight: 300, fontSize: "13px" }}>
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Pre-operative guidance has been added more recently. The
              American Society of Anesthesiologists issued recommendations
              in 2023 to hold daily GLP-1 agonists for one day and weekly
              ones for one week before elective procedures requiring
              anaesthesia, to reduce the risk of aspiration from delayed
              gastric emptying. Some centres have moved to two-week holds
              for the longer-acting drugs. The guidance is evolving as
              real-world aspiration data accumulate.
            </p>
            <p>
              The long-term picture beyond five years is the area where the
              evidence base is least mature. Continuous receptor activation
              over decades has not been studied. Open questions include
              effects on muscle mass and bone density (rapid weight loss
              produces both), whether any rare events become apparent only
              with millions of patient-years of exposure, and whether the
              metabolic adaptations seen in the first year of treatment
              continue to evolve. Real-world pharmacovigilance through May
              2026 has not surfaced any new long-term signals beyond those
              already characterised. For the foundational mechanism
              biology that produces both the efficacy and the safety
              spectrum, see{" "}
              <Link href="/glp-1/how-glp-1-agonists-work">
                How GLP-1 Agonists Work
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
              This article is for informational and educational purposes only and does not constitute medical advice. GLP-1 agonists are prescription medications with a range of indications, contraindications, and side effects. The safety information presented here reflects regulatory guidance and published clinical trial data as of May 2026 and may be superseded by future evidence. Consult a licensed healthcare provider before starting, stopping, or changing any medication.
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
                href="#what-it-is"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                What safety means here
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
                Acute GI profile
              </a>
              <a
                href="#serious-events"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Serious adverse events
              </a>
              <a
                href="#reviewed-signals"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                FDA-reviewed signals
              </a>
              <a
                href="#contraindications"
                style={{
                  color: "var(--ink2)",
                  textDecoration: "none",
                  borderLeft: "1px solid var(--rule)",
                  paddingLeft: "12px",
                  fontSize: "13px",
                  lineHeight: 1.4,
                }}
              >
                Contraindications
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
