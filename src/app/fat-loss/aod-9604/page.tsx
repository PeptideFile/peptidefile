import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "AOD-9604 for Fat Loss: Mechanism, Trials, and Status | Peptide File",
  description:
    "AOD-9604 is a 16-amino-acid fragment of human growth hormone tested for obesity. Phase IIb produced ~2.6 kg loss vs ~1.8 kg placebo and failed its primary endpoint.",
  openGraph: {
    title: "AOD-9604 for Fat Loss: Mechanism, Trials, and Status",
    description:
      "AOD-9604 is a 16-amino-acid fragment of human growth hormone tested for obesity. Phase IIb produced ~2.6 kg loss vs ~1.8 kg placebo and failed its primary endpoint.",
    url: "https://peptidefile.com/fat-loss/aod-9604",
  },
  twitter: {
    card: "summary_large_image",
    title: "AOD-9604 for Fat Loss: Mechanism, Trials, and Status",
    description:
      "AOD-9604 is a 16-amino-acid fragment of human growth hormone tested for obesity. Phase IIb produced ~2.6 kg loss vs ~1.8 kg placebo and failed its primary endpoint.",
  },
  alternates: {
    canonical: "https://peptidefile.com/fat-loss/aod-9604",
  },
};

const faqs = [
  {
    q: "What is AOD-9604?",
    a: "AOD-9604 is a synthetic peptide corresponding to amino acids 176 to 191 of human growth hormone, with an extra tyrosine residue added to the N-terminus. It was developed in Australia in the 1990s by Metabolic Pharmaceuticals on the hypothesis that the C-terminal fragment of growth hormone retained its lipolytic (fat-burning) activity without the metabolic side effects of full-length GH. It progressed through Phase II trials for obesity, failed its primary endpoint, and was never approved as a prescription drug for any indication.",
  },
  {
    q: "Does AOD-9604 actually work for fat loss?",
    a: "Not at a clinically meaningful level. The largest published trial (Phase IIb, 2007) tested AOD-9604 at 1mg per day for 12 weeks against placebo. Active drug produced ~2.6 kg of weight loss versus ~1.8 kg on placebo. The difference of roughly 0.8 kg over 12 weeks did not meet the trial's primary endpoint. By comparison, modern GLP-1 agonists produce 14.9% to 28.7% body-weight loss in Phase III trials. The efficacy gap is roughly an order of magnitude.",
  },
  {
    q: "Is AOD-9604 FDA approved?",
    a: "No. AOD-9604 has never received FDA approval for any therapeutic indication. After the obesity trials failed, it was later granted GRAS (Generally Recognised As Safe) status as a cosmetic and topical ingredient only. GRAS is a food and cosmetic ingredient classification, not a drug approval. Injectable AOD-9604 sold by research-peptide vendors is not an approved prescription medication and has no clinical indication backing its use.",
  },
  {
    q: "How does AOD-9604 supposedly work?",
    a: "The original hypothesis was that the C-terminal end of human growth hormone (residues 176 to 191) is the region responsible for the hormone's lipolytic effects, while the rest of the molecule drives the IGF-1 signalling and tissue-growth effects. Isolating just the C-terminal fragment was meant to deliver fat oxidation through hormone-sensitive lipase activation without raising IGF-1 or causing insulin resistance. In practice the trials did not show meaningful fat loss in humans, and the mechanism remains poorly characterised at the receptor level.",
  },
  {
    q: "What is the typical dose people use?",
    a: "There is no clinically validated dose because the drug was never approved. The Phase IIb trial used 1mg per day subcutaneous injection. Research-peptide vendors typically sell vials labelled at 2mg or 5mg, with informal protocols suggesting 250 to 500 mcg per day. None of these dosing approaches are supported by Phase III data, and the legal status of the underlying products is the unapproved-research-chemical category, not prescription pharmaceuticals.",
  },
  {
    q: "Is AOD-9604 safer than GLP-1 agonists?",
    a: "Side effect data is limited because the trials were small and short. The Phase IIb trial reported a side effect profile broadly similar to placebo, with no signal of insulin resistance or IGF-1 elevation. That is consistent with the design rationale. Safer than GLP-1 agonists is the wrong frame, because GLP-1 agonists actually work. AOD-9604's apparent tolerability is a function of weak mechanistic activity in humans, not a clean safety profile in a working drug.",
  },
  {
    q: "Why do peptide clinics still sell AOD-9604?",
    a: "AOD-9604 sits in the research-peptide market alongside compounds like CJC-1295, ipamorelin, and BPC-157. None are FDA-approved prescription drugs, all are sold for research use only by US vendors, and clinic protocols typically operate under 503A or 503B compounding rules with varying degrees of regulatory scrutiny. AOD-9604 persists in this market because it is cheap to synthesise, has GRAS cover on the cosmetic side, and the absence of strong efficacy is offset by the absence of obvious harm. It functions as a low-stakes addition to peptide stacks rather than a primary fat-loss agent.",
  },
  {
    q: "Should someone use AOD-9604 instead of a GLP-1 agonist?",
    a: "On the published evidence, no. For someone who qualifies for GLP-1 therapy under FDA-approved labelling (BMI 30+, or BMI 27+ with a weight-related comorbidity), semaglutide and tirzepatide produce 14.9% and 22.5% body-weight loss respectively in Phase III trials. AOD-9604 produced under 1 kg of placebo-adjusted weight loss in 12 weeks. The decision is not a close one if the goal is weight loss. AOD-9604 may be defended as part of a broader peptide protocol on lifestyle or recomposition grounds, but as a fat-loss intervention it is several efficacy categories below the modern standard of care.",
  },
];

const timeline = [
  {
    date: "1990s",
    name: "Metabolic Pharmaceuticals (Australia)",
    detail:
      "AOD-9604 designed by isolating residues 176 to 191 of human growth hormone, the proposed lipolytic fragment, with a tyrosine added to the N-terminus to support oral bioavailability. Development backed by the hypothesis that the fragment retained fat-burning activity without IGF-1 elevation.",
  },
  {
    date: "Early 2000s",
    name: "Phase II programme",
    detail:
      "Multiple Phase II trials tested AOD-9604 in obese adults at doses ranging from 1mg to 30mg per day. Earlier trials showed signal in body-fat reduction. The programme advanced to Phase IIb on the strength of these signals.",
  },
  {
    date: "2007",
    name: "Phase IIb primary endpoint failure",
    detail:
      "Largest controlled trial to date. AOD-9604 at 1mg per day produced ~2.6 kg total weight loss vs ~1.8 kg on placebo over 12 weeks. The 0.8 kg placebo-adjusted difference did not meet the trial's primary endpoint. The obesity programme was discontinued.",
  },
  {
    date: "2014",
    name: "GRAS designation",
    detail:
      "AOD-9604 received GRAS (Generally Recognised As Safe) status from the FDA as a cosmetic and topical ingredient. This is a food and cosmetic classification only. It does not authorise injectable use, prescription use, or any therapeutic claim.",
  },
  {
    date: "2024 to 2026",
    name: "Research-peptide market",
    detail:
      "AOD-9604 continues to be sold by US research-peptide vendors and listed in compounding-pharmacy peptide menus. The compound has no FDA approval, no Phase III data, and no clinical indication. Its persistence reflects market habit rather than evidence.",
  },
];

export default function AOD9604Page() {
  const article = articleSchema({
    headline: "AOD-9604 for Fat Loss: Mechanism, Trials, and Status",
    description:
      "AOD-9604 is a 16-amino-acid fragment of human growth hormone tested for obesity. Phase IIb produced ~2.6 kg loss vs ~1.8 kg placebo and failed its primary endpoint.",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    authorName: "Mark Boreland",
    authorUrl: "https://peptidefile.com/author",
    publisherName: "Peptide File",
    image: "https://peptidefile.com/og-fat-loss-aod-9604.png",
  });

  const faq = faqSchema(faqs);

  const breadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://peptidefile.com" },
    { name: "Fat Loss", item: "https://peptidefile.com/fat-loss" },
    {
      name: "AOD-9604 for Fat Loss",
      item: "https://peptidefile.com/fat-loss/aod-9604",
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
          AOD-9604 for Fat Loss: Mechanism, Trials, and Status
        </h1>

        <p className="page-intro">
          AOD-9604 is a 16-amino-acid synthetic fragment of human growth
          hormone, designed in the 1990s to deliver fat loss without the
          IGF-1 side effects of full-length GH. The largest controlled
          trial produced roughly 2.6 kg of weight loss versus 1.8 kg on
          placebo over 12 weeks, missed its primary endpoint, and ended
          the obesity programme. The compound has never been approved
          as a prescription drug.
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
            { stat: "16 aa", label: "AOD-9604 peptide length" },
            { stat: "~2.6 kg", label: "Phase IIb weight loss (12 wk)" },
            { stat: "~1.8 kg", label: "Phase IIb placebo loss (12 wk)" },
            { stat: "0", label: "FDA-approved indications" },
            { stat: "GRAS", label: "Cosmetic-only status" },
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
              AOD-9604 is one of the older peptides still being marketed
              for fat loss. It was designed in Australia in the 1990s on a
              specific bet: that the C-terminal end of human growth
              hormone, residues 176 to 191, was the part of the molecule
              responsible for fat burning, and that isolating it could
              deliver lipolysis without the IGF-1 elevation, glucose
              intolerance, or tissue-growth effects of full-length GH.
            </p>
            <p>
              The bet did not pay off in the clinic. The largest
              controlled trial, a Phase IIb at 1mg per day for 12 weeks,
              produced roughly 2.6 kg of weight loss against 1.8 kg on
              placebo. The 0.8 kg placebo-adjusted difference missed the
              primary endpoint. The obesity programme was discontinued.
              Years later, AOD-9604 received GRAS status as a cosmetic
              ingredient only, and the compound migrated to the
              research-peptide market, where it is still sold today by
              vendors operating outside the prescription-drug system.
            </p>
            <p>
              This article covers what AOD-9604 is, how it was designed
              to work, what the trial data actually showed, where it sits
              now in regulatory and commercial terms, and how it compares
              to the modern fat-loss standard of care. For the broader
              category context see{" "}
              <Link href="/fat-loss">the Fat Loss File</Link>. For the
              head-to-head against GLP-1 agonists see{" "}
              <Link href="/fat-loss/peptides-vs-ozempic">
                Peptides vs Ozempic
              </Link>
              .
            </p>
          </section>

          {/* WHAT IT IS */}
          <section id="what-it-is" style={{ marginBottom: 80 }}>
            <h2>What AOD-9604 is and how it was designed</h2>
            <p>
              Human growth hormone is a 191-amino-acid protein released
              from the anterior pituitary. Its biological effects split
              into two broad categories. The anabolic effects (tissue
              growth, IGF-1 elevation, longitudinal bone growth in
              children) are mediated mostly through induction of IGF-1
              by the liver. The lipolytic effects (mobilising fat from
              adipocytes for energy use) appear to operate by a more
              direct route on adipose tissue itself.
            </p>
            <p>
              The AOD-9604 design hypothesis, developed at Monash
              University and commercialised by Metabolic
              Pharmaceuticals, was that residues 176 to 191 of the GH
              molecule were the lipolytic active site, and that an
              isolated fragment could deliver fat burning without the
              IGF-1 effects. A tyrosine residue was added to the
              N-terminus to support oral bioavailability, producing a
              16-amino-acid synthetic peptide. The structure of the
              molecule was published in the late 1990s.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0" }}>
              {[
                {
                  label: "Origin",
                  text: "Synthetic peptide based on residues 176 to 191 of human growth hormone, with an added N-terminal tyrosine. Developed by Metabolic Pharmaceuticals (Melbourne) in the 1990s.",
                },
                {
                  label: "Proposed mechanism",
                  text: "Activation of hormone-sensitive lipase in adipocytes, mobilising stored triglycerides for oxidation. The hypothesis was that the C-terminal GH fragment retained this activity without inducing IGF-1 release from the liver, the route through which full-length GH causes its growth and insulin-resistance effects.",
                },
                {
                  label: "Receptor target",
                  text: "Not clearly characterised. AOD-9604 does not bind the canonical growth hormone receptor with measurable affinity. The downstream signalling cascade through which it was proposed to act on adipose tissue has never been mapped at the level expected of a modern drug candidate.",
                },
                {
                  label: "Route",
                  text: "Tested orally in early-phase trials and subcutaneously in later work. The added tyrosine residue was specifically chosen to improve oral bioavailability, though the orally-dosed trials produced inconsistent results.",
                },
                {
                  label: "Stated advantage over GH",
                  text: "No measurable IGF-1 elevation, no glucose intolerance signal, no tissue-growth effects. In Phase II safety data, side-effect profile was reported as broadly similar to placebo. This was the design rationale rather than a clinical benefit, because the efficacy that would justify the safety profile was not demonstrated.",
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
              The design was internally coherent. The challenge was
              translating it into clinical effect. Early animal work in
              obese mice showed reductions in body fat, which is what
              advanced the compound into human trials. Once it reached
              meaningful sample sizes in humans, the effect size proved
              too small to register as a therapeutic intervention.
            </p>
          </section>

          {/* WHAT THE RESEARCH SAYS */}
          <section id="what-the-research-says" style={{ marginBottom: 80 }}>
            <h2>What the trials actually showed</h2>
            <p>
              The clinical record on AOD-9604 in humans is small and
              uncomplicated. A series of Phase II trials in obese adults
              progressed through escalating doses, with the largest and
              most decisive readout being the Phase IIb conducted in the
              mid-2000s. That trial enrolled obese adults, randomised
              them to AOD-9604 1mg per day or matched placebo, and
              measured weight loss over 12 weeks against the primary
              endpoint of body-weight reduction.
            </p>
            <p>
              The headline result has been quoted in many forms but
              boils down to one figure. Active-drug participants lost
              roughly 2.6 kg over the 12-week period. Placebo
              participants lost roughly 1.8 kg over the same period. The
              placebo-adjusted weight loss attributable to AOD-9604 was
              approximately 0.8 kg, or about 1.8 pounds, over three
              months at the chosen dose. This did not meet the
              pre-specified primary endpoint, and the obesity programme
              was discontinued shortly afterwards. No Phase III trial
              was ever initiated.
            </p>
            <p>
              For context, modern obesity pharmacotherapy operates at a
              completely different scale. Semaglutide's STEP 1 trial
              (Wilding et al., NEJM, 2021, PMID: 33567185, NCT03548935)
              produced 14.9% body-weight loss at 2.4mg over 68 weeks.
              Tirzepatide's SURMOUNT-1 (Jastreboff et al., NEJM, 2022,
              PMID: 35658024, NCT04184622) produced 22.5% at 15mg over
              72 weeks. Retatrutide's TRIUMPH-4 (Phase III, 2025)
              produced 28.7% at 12mg over 68 weeks. Across the GLP-1
              class, real-world weight loss runs at roughly 60 to 75% of
              trial figures. Even after that adjustment, the gap between
              AOD-9604 and the GLP-1 class is roughly an order of
              magnitude.
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
              Side-effect data from the trials was unremarkable. No
              significant elevation of IGF-1, no signal of glucose
              intolerance, no insulin-resistance pattern of the kind
              that limits clinical use of full-length GH. From a safety
              standpoint, the design hypothesis appeared to hold up. The
              issue was that the efficacy required to justify
              characterising any safety profile in clinical terms was
              not present.
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
                AOD-9604 marketing material frequently cites the
                placebo-arm weight loss alongside the active-drug
                figure to make the effect look larger. The relevant
                number is the placebo-adjusted difference, which was
                under 1 kg over 12 weeks. Treat any claim of multi-kilo
                AOD-9604 fat loss without that adjustment as marketing
                rather than clinical data.
              </div>
            </div>
          </section>

          {/* PRACTICAL BREAKDOWN */}
          <section id="practical-breakdown" style={{ marginBottom: 80 }}>
            <h2>Where AOD-9604 sits today</h2>
            <p>
              After the Phase IIb result, the obesity programme ended
              and AOD-9604 transitioned out of the pharmaceutical
              development pipeline entirely. It re-emerged in two
              parallel markets: the cosmetic-ingredient market on the
              GRAS pathway, and the research-peptide market through US
              vendors selling vials marked for research use only.
            </p>

            <h3>The GRAS pathway</h3>
            <p>
              GRAS, short for Generally Recognised As Safe, is a US food
              and cosmetic classification. It allows ingredients with
              sufficient safety evidence to be added to topical products
              and certain cosmetic formulations without going through
              the prescription-drug approval process. AOD-9604's GRAS
              designation covers cosmetic and topical use only. It does
              not authorise injectable use, does not constitute a
              clinical efficacy claim, and does not give the compound
              any standing as a therapeutic agent for fat loss.
            </p>

            <h3>The research-peptide market</h3>
            <p>
              Most AOD-9604 in actual circulation today is sold by US
              research-peptide vendors, packaged in lyophilised vials
              labelled for research use only. The labelling is a legal
              firewall. The intended market is human use through
              informal protocols, often in combination with growth-
              hormone-releasing peptides like CJC-1295 and ipamorelin,
              promoted as part of a fat-loss or recomposition stack.
              See the{" "}
              <Link href="/fat-loss/peptide-stacking-guide">
                peptide stacking guide
              </Link>{" "}
              for how AOD-9604 is typically positioned within these
              protocols.
            </p>

            <h3>Compounding pharmacy availability</h3>
            <p>
              AOD-9604 has appeared on 503A compounding pharmacy peptide
              menus alongside other research peptides. Unlike the GLP-1
              agonists, where FDA designation of resolved shortages in
              late 2024 ended the legal basis for routine 503A
              compounding, AOD-9604 sits in a different regulatory
              category with less direct compounding-rule applicability.
              How long this persists is uncertain. FDA enforcement
              attention against research-peptide compounding has been
              episodic. Clinic operators offering AOD-9604 should be
              aware that the regulatory ground may shift. See{" "}
              <Link href="/fat-loss/peptide-therapy-clinics">
                the peptide therapy clinics guide
              </Link>{" "}
              for the current landscape.
            </p>

            <h3>Practical use considerations</h3>
            <p>
              For someone evaluating AOD-9604 specifically, the
              practical questions are simple. The compound has not
              demonstrated meaningful fat loss in humans at clinical
              scale. The product available is not a prescription drug.
              No manufacturer is liable for sterility or potency. There
              is no peer-reviewed dosing protocol. Whatever benefit may
              accrue from use is most likely placebo, given the sub-1 kg
              effect size in the controlled trial that did exist.
            </p>
          </section>

          {/* COMPARISON */}
          <section id="comparison" style={{ marginBottom: 80 }}>
            <h2>How AOD-9604 compares to working fat-loss drugs</h2>
            <p>
              The most useful frame for AOD-9604 is direct comparison
              against approved obesity pharmacotherapy. The table below
              summarises body-weight loss against placebo, regulatory
              status, and dosing for the relevant compounds.
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
                    ["AOD-9604", "~0.8 kg vs placebo", "12 wk", "Not approved", "1mg/day SC"],
                    ["Liraglutide", "8.0%", "56 wk", "Approved 2014", "Daily SC"],
                    ["Semaglutide", "14.9%", "68 wk", "Approved 2021", "Weekly SC"],
                    ["Tirzepatide", "22.5%", "72 wk", "Approved 2023", "Weekly SC"],
                    ["Retatrutide", "28.7%", "68 wk", "Phase III", "Weekly SC"],
                  ].map((row, ri) => (
                    <tr
                      key={ri}
                      style={{
                        borderBottom: ri < 4 ? "1px solid var(--rule)" : "none",
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
                          color: row[0] === "AOD-9604" ? "var(--ink3)" : "var(--ink)",
                          fontWeight: row[0] === "AOD-9604" ? 400 : 500,
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
              The numbers are not directly comparable because the trial
              durations differ, but the gap is large enough that the
              direction is clear. AOD-9604 produced under 1 kg of
              placebo-adjusted weight loss in 12 weeks. Liraglutide
              produced 8.0% body-weight loss in 56 weeks. The
              percentage-point gap between AOD-9604 and any approved
              GLP-1 agonist is large enough that no reasonable
              extrapolation closes it. AOD-9604 is not in the same
              efficacy category as the working fat-loss drugs, and
              treating it as a substitute for them on cost or
              accessibility grounds means accepting an order-of-
              magnitude reduction in expected outcome.
            </p>
            <p>
              Within the older peptide universe, AOD-9604's closer peers
              are the growth-hormone-releasing peptides such as
              CJC-1295 and ipamorelin, which act through different
              upstream mechanisms but share the same problem of weak
              human efficacy data for fat loss specifically. For the
              detailed CJC-1295 story see{" "}
              <Link href="/fat-loss/cjc-1295-fat-loss">
                CJC-1295 for fat loss
              </Link>
              . The one peptide in the older category with both an FDA
              approval and a meaningful effect on a specific fat depot
              is tesamorelin, covered in{" "}
              <Link href="/fat-loss/tesamorelin-deep-dive">
                the tesamorelin file
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
              This article is for informational and educational purposes only and does not constitute medical advice. AOD-9604 is not approved by the FDA, EMA, MHRA, or any other regulatory agency for any therapeutic indication, and injectable AOD-9604 sold by research-peptide vendors is not a licensed prescription medication. Consult a licensed healthcare provider before starting, stopping, or changing any treatment, and before using any compound that is not an approved prescription drug.
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
                What AOD-9604 is
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
                What the trials showed
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
                href="/fat-loss/cjc-1295-fat-loss"
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
                CJC-1295 for Fat Loss
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
