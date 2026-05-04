import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "CJC-1295 for Fat Loss: Mechanism, Evidence, and Status | Peptide File",
  description:
    "CJC-1295 is a synthetic GHRH analog promoted for fat loss through GH and IGF-1 elevation. No Phase III obesity trial exists. The mechanism is plausible; the body composition evidence is thin.",
  openGraph: {
    title: "CJC-1295 for Fat Loss: Mechanism, Evidence, and Status",
    description:
      "CJC-1295 is a synthetic GHRH analog promoted for fat loss through GH and IGF-1 elevation. No Phase III obesity trial exists. The mechanism is plausible; the body composition evidence is thin.",
    url: "https://peptidefile.com/fat-loss/cjc-1295-fat-loss",
  },
  twitter: {
    card: "summary_large_image",
    title: "CJC-1295 for Fat Loss: Mechanism, Evidence, and Status",
    description:
      "CJC-1295 is a synthetic GHRH analog promoted for fat loss through GH and IGF-1 elevation. No Phase III obesity trial exists. The mechanism is plausible; the body composition evidence is thin.",
  },
  alternates: {
    canonical: "https://peptidefile.com/fat-loss/cjc-1295-fat-loss",
  },
};

const faqs = [
  {
    q: "What is CJC-1295?",
    a: "CJC-1295 is a synthetic analog of growth hormone releasing hormone (GHRH), the hypothalamic peptide that signals the pituitary to release growth hormone. It exists in two forms. The non-DAC version (sometimes called modified GRF 1-29 or CJC-1295 without DAC) has a half-life of roughly 30 minutes. The DAC (Drug Affinity Complex) version adds a chemical group that binds to circulating albumin, extending the functional half-life to around 6 to 8 days. Both versions stimulate GH release through the same upstream receptor.",
  },
  {
    q: "Does CJC-1295 actually cause fat loss?",
    a: "There is no Phase III randomised controlled trial showing weight loss in obesity for CJC-1295. The published clinical data confirms that the compound elevates GH pulses and raises IGF-1 levels in healthy adults, which is the pharmacodynamic effect a GHRH analog should produce. What is missing is the body composition endpoint at the level required for an obesity indication. The fat-loss claim rests on the mechanistic story that GH elevation increases lipolysis and preserves lean mass, which is plausible from physiology but not supported by trial-grade evidence in obese populations.",
  },
  {
    q: "Is CJC-1295 FDA approved?",
    a: "No. CJC-1295 has never received FDA approval for any therapeutic indication. It is sold through 503A compounding pharmacies and US research-peptide vendors, typically labelled for research use only. It sits in the same regulatory category as BPC-157 and MOTS-c, where 503A compounding is still legally available because the compounds are not designated resolved shortages, but FDA enforcement attention against research-peptide compounding has been episodic and the regulatory ground may shift.",
  },
  {
    q: "What is the difference between CJC-1295 with DAC and without DAC?",
    a: "The functional difference is dosing frequency. Non-DAC CJC-1295 must be injected daily, often more than once, because its half-life is only about 30 minutes. Adding the Drug Affinity Complex extends the half-life to 6 to 8 days by allowing the molecule to bind circulating albumin, which gives weekly or twice-weekly dosing. Some practitioners argue the DAC version produces a flatter, sustained GH elevation that loses the natural pulsatile pattern, while non-DAC preserves more physiological pulsatility. Whether either pattern translates into different fat-loss outcomes is not established in trials.",
  },
  {
    q: "Why is CJC-1295 stacked with ipamorelin?",
    a: "CJC-1295 and ipamorelin act on different parts of the GH axis. CJC-1295 is a GHRH analog and stimulates pituitary GH release through the GHRH receptor. Ipamorelin is a selective ghrelin and GH secretagogue receptor agonist, which amplifies GH release through a parallel pathway without raising cortisol or prolactin the way older secretagogues did. The combination is meant to produce a larger, cleaner GH pulse than either compound alone. The stacking convention is widespread in clinic protocols, though the additive efficacy on body composition has not been demonstrated in controlled trials.",
  },
  {
    q: "What dose is typically used?",
    a: "There is no clinically validated dose because no obesity trial defined one. Clinic protocols typically use 100 to 300 mcg of non-DAC CJC-1295 once or twice daily, often paired with 100 to 300 mcg of ipamorelin in the same injection. The DAC version is dosed at 1 to 2 mg once or twice weekly. None of these protocols are supported by Phase III data. They are extrapolations from the doses used in early pharmacokinetic studies in healthy volunteers, where the endpoint was GH and IGF-1 elevation rather than weight loss.",
  },
  {
    q: "Will CJC-1295 produce weight loss like Ozempic?",
    a: "No. The published Phase III data on the GLP-1 class produces 14.9 percent body weight loss for semaglutide in STEP 1 and 22.5 percent for tirzepatide in SURMOUNT-1. CJC-1295 has no comparable body weight endpoint in any trial. The mechanism is different. GLP-1 agonists primarily reduce body weight by suppressing appetite and slowing gastric emptying, while CJC-1295 elevates GH and IGF-1 with the proposed downstream effect of increased lipolysis. The two are not interchangeable, and the available evidence does not support framing CJC-1295 as a substitute for GLP-1 therapy.",
  },
  {
    q: "Is it safer than GLP-1 agonists?",
    a: "The honest answer is that the safety question is not the right frame. GLP-1 agonists have years of large-trial safety data, with known adverse events including nausea, gastroparesis, and rare cases of pancreatitis. CJC-1295 has limited human trial data, no long-term safety follow-up at obesity-relevant durations, and theoretical concerns around sustained GH and IGF-1 elevation including water retention, joint pain, glucose intolerance, and the long-debated question of whether chronic IGF-1 elevation alters cancer risk. A drug that has not been tested at scale is not the same as a drug that has been tested at scale and proven safe.",
  },
];

const timeline = [
  {
    date: "1990s",
    name: "GHRH analog research",
    detail:
      "Original work on synthetic GHRH analogs at Salk Institute and elsewhere produced sermorelin (GRF 1-29), which became the first FDA-approved GHRH analog for paediatric growth hormone deficiency. Sermorelin's short half-life limited its utility outside clinical settings.",
  },
  {
    date: "Early 2000s",
    name: "ConjuChem and the DAC platform",
    detail:
      "Canadian biotech ConjuChem developed the Drug Affinity Complex technology, a chemical strategy for extending peptide half-life by promoting albumin binding. CJC-1295 was created by applying DAC to a modified GRF 1-29 backbone, producing a GHRH analog with a 6 to 8 day half-life.",
  },
  {
    date: "Mid 2000s",
    name: "Pharmacokinetic and PD studies",
    detail:
      "Early-phase studies in healthy adults confirmed that CJC-1295 elevates GH pulses and raises IGF-1 levels, with the DAC version producing sustained elevation over a week or more. The endpoint was hormonal response rather than body composition.",
  },
  {
    date: "2010s",
    name: "Programme transition",
    detail:
      "ConjuChem's clinical programme did not advance CJC-1295 through a Phase III obesity or body composition trial. The compound migrated to the research-peptide and compounding-pharmacy markets, where it has been sold for off-label use ever since.",
  },
  {
    date: "2024 to 2026",
    name: "Compounding-pharmacy market",
    detail:
      "CJC-1295 remains available through 503A compounding pharmacies and US research-peptide vendors, frequently combined with ipamorelin. It has no FDA approval, no Phase III data, and no clinical indication for fat loss. Its persistence reflects clinic-protocol convention rather than evidence.",
  },
];

export default function CJC1295FatLossPage() {
  const article = articleSchema({
    headline: "CJC-1295 for Fat Loss: Mechanism, Evidence, and Status",
    description:
      "CJC-1295 is a synthetic GHRH analog promoted for fat loss through GH and IGF-1 elevation. No Phase III obesity trial exists. The mechanism is plausible; the body composition evidence is thin.",
    datePublished: "2026-05-04",
    dateModified: "2026-05-04",
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
    image: "https://peptidefile.com/og-fat-loss-cjc-1295-fat-loss.png",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "Fat Loss", item: "https://peptidefile.com/fat-loss" },
    {
      name: "CJC-1295 for Fat Loss",
      item: "https://peptidefile.com/fat-loss/cjc-1295-fat-loss",
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
          <span>Fat Loss File</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Mechanism</span>
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
            Evidence: Weak
          </span>
        </div>

        <h1 className="article-title">
          CJC-1295 for Fat Loss: Mechanism, Evidence, and Status
        </h1>

        <p className="page-intro">
          CJC-1295 is a synthetic analog of growth hormone releasing
          hormone, designed to elevate GH and IGF-1 through pituitary
          stimulation. The compound is widely sold for fat loss, often
          stacked with ipamorelin, on the mechanistic argument that GH
          elevation drives lipolysis and preserves lean mass. No Phase
          III obesity trial has tested that proposition. The body
          composition evidence is thin to absent.
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
            { stat: "GHRH", label: "Mechanism class" },
            { stat: "6-8 d", label: "DAC half-life" },
            { stat: "30 min", label: "Non-DAC half-life" },
            { stat: "0", label: "FDA-approved indications" },
            { stat: "503A", label: "Compounding category" },
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
              CJC-1295 is a synthetic peptide promoted for fat loss
              through a specific physiological route. It mimics growth
              hormone releasing hormone, the hypothalamic signal that
              tells the anterior pituitary to release growth hormone.
              The proposed downstream effects are higher circulating GH
              and IGF-1, increased lipolysis through GH action on
              adipose tissue, and preserved lean mass during a caloric
              deficit. The pitch is that elevating the GH axis
              recreates the body-composition advantages of higher
              endogenous GH without exogenous GH itself.
            </p>
            <p>
              The mechanism is internally coherent. The clinical
              question is whether GH and IGF-1 elevation at the
              magnitude CJC-1295 produces translates into meaningful
              body composition change in obese populations. No Phase
              III randomised controlled trial has tested that question.
              The published data confirms CJC-1295 raises GH pulses and
              IGF-1 levels in healthy adults, which is what a GHRH
              analog should do. The data does not extend to weight
              loss, fat mass reduction, or any obesity-relevant
              endpoint at the level required for FDA approval.
            </p>
            <p>
              This article covers what CJC-1295 is, the difference
              between the DAC and non-DAC versions, why it is almost
              always stacked with ipamorelin, what the trial record
              actually shows, and where the compound sits today in the
              regulatory and commercial landscape. For the broader
              category context see{" "}
              <Link href="/fat-loss">the Fat Loss File</Link>. For the
              honest comparison against approved GLP-1 therapy see{" "}
              <Link href="/fat-loss/peptides-vs-ozempic">
                Peptides vs Ozempic
              </Link>
              .
            </p>
          </section>

          {/* WHAT IT IS */}
          <section id="what-it-is" style={{ marginBottom: 80 }}>
            <h2>What CJC-1295 is and how it was designed</h2>
            <p>
              Growth hormone releasing hormone is a 44-amino-acid
              peptide secreted by the hypothalamus. It travels to the
              anterior pituitary through the portal circulation and
              binds the GHRH receptor on somatotroph cells, triggering
              GH release. The first 29 residues of GHRH retain the
              full receptor-binding activity of the parent molecule,
              and a synthetic version of those 29 residues, sermorelin
              or GRF 1-29, became the first FDA-approved GHRH analog
              for paediatric GH deficiency.
            </p>
            <p>
              Sermorelin's clinical utility was limited by a half-life
              of around 30 minutes. ConjuChem, a Canadian biotech,
              developed CJC-1295 by adding a Drug Affinity Complex to
              a modified GRF 1-29 backbone. The DAC group binds
              covalently to circulating albumin, protecting the
              peptide from rapid enzymatic degradation and extending
              the functional half-life to roughly 6 to 8 days. This
              allowed weekly or twice-weekly dosing rather than
              multiple daily injections.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0" }}>
              {[
                {
                  label: "Origin",
                  text: "Synthetic GHRH analog based on a modified GRF 1-29 backbone, developed by ConjuChem in Canada in the early 2000s. The DAC variant adds an albumin-binding chemical group that extends half-life from minutes to days.",
                },
                {
                  label: "Proposed mechanism",
                  text: "Stimulation of pituitary GH release through the GHRH receptor, producing elevated circulating GH and downstream IGF-1. The fat-loss claim derives from GH's known effects on hormone-sensitive lipase activation in adipose tissue and the proposed lean-mass-sparing effect of IGF-1 elevation during caloric deficit.",
                },
                {
                  label: "Two versions",
                  text: "Non-DAC CJC-1295 (also called modified GRF 1-29) has a half-life of about 30 minutes and requires daily or more frequent injection. CJC-1295 with DAC has a 6 to 8 day half-life through albumin binding and is dosed weekly or twice weekly. Some practitioners prefer non-DAC for its preserved pulsatile GH release pattern.",
                },
                {
                  label: "Receptor target",
                  text: "GHRH receptor on pituitary somatotrophs, the same receptor targeted by sermorelin and tesamorelin. CJC-1295 does not act directly on adipose tissue. The fat-loss effects, if any, are downstream of GH and IGF-1 elevation.",
                },
                {
                  label: "Stacking convention",
                  text: "Almost always combined with ipamorelin, a selective ghrelin and GH secretagogue receptor agonist. The two compounds stimulate GH through parallel pathways. The combination is intended to produce a larger and cleaner GH pulse than either alone, though additive efficacy on body composition has not been confirmed in trials.",
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
              The design logic is clean. CJC-1295 is essentially a
              long-acting sermorelin, and sermorelin works at the
              level of GH release. The unanswered question is the one
              that matters for fat loss specifically: whether
              chronically elevated GH and IGF-1 from a GHRH analog
              produces the kind of body composition change that
              justifies the compound's use as a weight-loss
              intervention. That question requires a randomised
              controlled trial with a body composition primary
              endpoint. None has been published.
            </p>
          </section>

          {/* WHAT THE RESEARCH SAYS */}
          <section id="what-the-research-says" style={{ marginBottom: 80 }}>
            <h2>What the research actually shows</h2>
            <p>
              The published clinical record on CJC-1295 covers
              pharmacokinetics and pharmacodynamics. Studies in
              healthy adults established that the compound elevates
              GH pulses and raises IGF-1 levels in a dose-dependent
              manner, with the DAC version producing sustained
              elevation across a dosing interval of a week or longer.
              These findings confirm the molecule does what a GHRH
              analog is supposed to do at the receptor level.
            </p>
            <p>
              What the record does not contain is a Phase III
              randomised controlled trial in obese adults with a
              weight-loss or body-composition primary endpoint. The
              ConjuChem clinical programme did not advance the
              compound through that stage. The body of evidence
              underpinning the fat-loss claim is therefore a chain of
              physiological inferences: GHRH analogs raise GH, GH
              activates lipolysis, therefore CJC-1295 should reduce
              fat. Each link is plausible. The chain has not been
              tested end to end at the scale required to support a
              clinical claim.
            </p>
            <p>
              For context, the fat-loss compounds with actual
              Phase III body composition data operate at a different
              level of evidence entirely. Semaglutide's STEP 1
              produced 14.9% body-weight loss at 2.4 mg over 68 weeks.
              Tirzepatide's SURMOUNT-1 produced 22.5% at 15 mg over
              72 weeks. Retatrutide's TRIUMPH-4 produced 28.7% at
              12 mg over 68 weeks. The one GHRH analog with a
              meaningful FDA-approved fat-mass effect is tesamorelin,
              which reduced visceral adipose tissue by approximately
              17% in HIV-associated lipodystrophy in the Falutz NEJM
              2007 trial. Tesamorelin's approval is for that specific
              VAT indication, not general obesity.
            </p>

            <h3 style={{ marginTop: 48, marginBottom: 24 }}>
              Programme timeline
            </h3>

            <div style={{ margin: "32px 0" }}>
              {timeline.map((item, i) => (
                <div
                  key={item.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: 32,
                    paddingTop: i === 0 ? 0 : 24,
                    paddingBottom: 24,
                    borderBottom:
                      i === timeline.length - 1
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
              Side-effect data from the available studies is limited
              by trial size and duration. The reported acute profile
              is generally tolerable, with injection-site reactions,
              transient flushing, and occasional water retention.
              Theoretical concerns around sustained GH and IGF-1
              elevation include glucose intolerance, joint pain, and
              the long-running debate about whether chronic IGF-1
              elevation alters cancer risk in adults. None of these
              questions has been resolved at the level of a
              long-duration obesity trial because no such trial
              exists.
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
                Marketing material for CJC-1295 frequently cites GH
                and IGF-1 elevation as if those numbers were
                fat-loss outcomes. They are not. GH elevation is the
                pharmacodynamic effect of a GHRH analog. Translating
                that effect into kilograms of body weight loss
                requires a body composition trial, and that trial
                has not been done for CJC-1295 in obese populations.
              </div>
            </div>
          </section>

          {/* PRACTICAL BREAKDOWN */}
          <section id="practical-breakdown" style={{ marginBottom: 80 }}>
            <h2>Where CJC-1295 sits today</h2>
            <p>
              After the ConjuChem programme failed to advance into
              Phase III, CJC-1295 transitioned out of the
              prescription-drug development pipeline and into two
              parallel commercial channels: the 503A compounding
              pharmacy market, where it is dispensed under
              practitioner protocols, and the US research-peptide
              market, where it is sold by vendors through the
              research-use-only labelling route.
            </p>

            <h3>503A compounding pharmacy availability</h3>
            <p>
              CJC-1295 is dispensed through 503A compounding
              pharmacies in the United States, typically combined
              with ipamorelin in a single vial. Unlike the GLP-1
              agonists, where FDA designation of resolved shortages
              for semaglutide and tirzepatide in late 2024 and early
              2025 ended the legal basis for routine 503A
              compounding, CJC-1295 sits in a different regulatory
              category. It is not a resolved shortage compound.
              Compounding remains legally available, though FDA
              enforcement attention against research-peptide
              compounding has been episodic. See{" "}
              <Link href="/fat-loss/peptide-therapy-clinics">
                the peptide therapy clinics guide
              </Link>{" "}
              for the current commercial landscape.
            </p>

            <h3>The research-peptide market</h3>
            <p>
              Outside compounding pharmacies, CJC-1295 is widely
              sold by US research-peptide vendors in lyophilised
              vials marked for research use only. The labelling is a
              legal firewall. The intended market is human
              self-administration through informal protocols. The
              compounds are typically combined with ipamorelin and
              positioned within broader peptide stacks aimed at
              recomposition or recovery, alongside compounds like
              BPC-157 and AOD-9604. See{" "}
              <Link href="/fat-loss/peptide-stacking-guide">
                the peptide stacking guide
              </Link>{" "}
              for how CJC-1295 fits into these protocols, and the{" "}
              <Link href="/fat-loss/aod-9604">AOD-9604 file</Link>{" "}
              for the closest peptide-side comparator on
              evidence-base grounds.
            </p>

            <h3>Practical use considerations</h3>
            <p>
              For someone evaluating CJC-1295 specifically, several
              things follow from the evidence base. There is no
              Phase III body composition data to anchor expectations.
              The product available is not a prescription drug, so
              no manufacturer is liable for sterility or potency
              outside the 503A channel. Dosing protocols are
              extrapolations from pharmacokinetic studies in healthy
              volunteers, not validated obesity-trial doses. The
              fat-loss benefit, if any, is most likely modest
              relative to expectations set by the GLP-1 class. The
              compound is best understood as a GH-axis tool with
              theoretical body composition effects, not a tested
              fat-loss intervention.
            </p>
          </section>

          {/* COMPARISON */}
          <section id="comparison" style={{ marginBottom: 80 }}>
            <h2>How CJC-1295 compares to working fat-loss drugs</h2>
            <p>
              The most useful frame for CJC-1295 is direct comparison
              against compounds that have demonstrated body
              composition effects in controlled trials. The table
              below summarises the published top-line weight loss
              figures, regulatory status, and dosing for the
              relevant compounds.
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
                      "Top-trial loss",
                      "Trial duration",
                      "Status",
                      "Dosing",
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
                    ["CJC-1295", "No obesity trial", "n/a", "Not approved", "Variable SC"],
                    ["AOD-9604", "~0.8 kg vs placebo", "12 wk", "Not approved", "1mg/day SC"],
                    ["Tesamorelin", "~17% VAT", "26 wk", "Approved (HIV-LD)", "2mg/day SC"],
                    ["Semaglutide", "14.9%", "68 wk", "Approved 2021", "Weekly SC"],
                    ["Tirzepatide", "22.5%", "72 wk", "Approved 2023", "Weekly SC"],
                    ["Retatrutide", "28.7%", "68 wk", "Phase III", "Weekly SC"],
                  ].map((row, ri) => (
                    <tr
                      key={ri}
                      style={{
                        borderBottom: ri < 5 ? "1px solid var(--rule)" : "none",
                        background: ri % 2 === 0 ? "var(--paper)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "12px 16px", fontFamily: "var(--mono)", fontSize: "13px", color: "var(--ink)" }}>
                        {row[0]}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          fontFamily: "var(--serif)",
                          fontSize: "16px",
                          color: row[0] === "CJC-1295" ? "var(--ink3)" : "var(--ink)",
                          fontWeight: row[0] === "CJC-1295" ? 400 : 500,
                        }}
                      >
                        {row[1]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
                        {row[2]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink2)", fontWeight: 300, fontSize: "13px" }}>
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
              The comparison is structurally awkward because
              CJC-1295 has no obesity-trial number to put in the
              second column. Within the GHRH analog category itself,
              the closest comparator is tesamorelin, which is the
              same class of molecule, has an FDA approval, and
              produced a measurable visceral fat reduction in the
              specific HIV-associated lipodystrophy population
              studied. Tesamorelin's approval does not extend to
              general obesity, and the visceral adipose tissue
              response in HIV-LD does not necessarily generalise to
              subcutaneous fat in metabolically healthy or obese
              adults. See the{" "}
              <Link href="/fat-loss/tesamorelin-deep-dive">
                tesamorelin file
              </Link>{" "}
              for the detail on what tesamorelin actually does and
              who it works for.
            </p>
            <p>
              Against the GLP-1 class, the comparison is one-sided
              in a familiar way. The Phase III body composition
              outcomes for semaglutide, tirzepatide, and retatrutide
              are an order of magnitude beyond anything CJC-1295
              has demonstrated, and the GLP-1 mechanism (appetite
              suppression and slowed gastric emptying) is in a
              different category from the GHRH-analog mechanism
              (pituitary GH release and downstream IGF-1
              elevation). Framing CJC-1295 as a substitute for
              GLP-1 therapy on cost or accessibility grounds means
              accepting an evidence gap rather than a known
              trade-off.
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
              This article is for informational and educational purposes only and does not constitute medical advice. CJC-1295 is not approved by the FDA, EMA, MHRA, or any other regulatory agency for any therapeutic indication, and CJC-1295 dispensed through 503A compounding pharmacies or sold by research-peptide vendors is not a licensed prescription medication. GHRH analogs raise GH and IGF-1 levels and have theoretical safety considerations including glucose intolerance and concerns related to chronic IGF-1 elevation. Consult a licensed healthcare provider before starting, stopping, or changing any treatment, and before using any compound that is not an approved prescription drug.
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
                What CJC-1295 is
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
                What the research shows
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
                Where it sits today
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
                Comparison vs working drugs
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
                href="/fat-loss"
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
                The Fat Loss File
              </Link>
              <Link
                href="/fat-loss/aod-9604"
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
                AOD-9604 for Fat Loss
              </Link>
              <Link
                href="/fat-loss/peptides-vs-ozempic"
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
                Peptides vs Ozempic
              </Link>
              <Link
                href="/fat-loss/peptide-stacking-guide"
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
                Peptide Stacking Guide
              </Link>
              <Link
                href="/fat-loss/peptide-therapy-clinics"
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
                Peptide Therapy Clinics
              </Link>
              <Link
                href="/fat-loss/tesamorelin-deep-dive"
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
                Tesamorelin Deep Dive
              </Link>
              <Link
                href="/fat-loss/mots-c-metabolism"
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
                MOTS-c and Metabolism
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
