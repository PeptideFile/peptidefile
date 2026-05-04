import type { Metadata } from "next";
import Link from "next/link";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schemas";

// ---------- SEO METADATA ----------
const TITLE = "Peptides vs Ozempic for Fat Loss: An Honest Data Comparison";
const DESCRIPTION =
  "Older fat-loss peptides like AOD-9604 produced sub-kilogram placebo-adjusted weight loss. Semaglutide hit 14.9% in STEP 1. The two are not in the same efficacy class.";
const SLUG = "fat-loss/peptides-vs-ozempic";
const CANONICAL = `https://peptidefile.com/${SLUG}`;
const PUBLISHED = "2026-05-04T00:00:00+00:00";
const MODIFIED = "2026-05-04T00:00:00+00:00";

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

// ---------- FAQ DATA ----------
const faqs = [
  {
    q: "Are peptides like AOD-9604 or CJC-1295 a cheaper alternative to Ozempic?",
    a: "Cheaper, yes. Equivalent in efficacy, no. AOD-9604 in its Phase IIb trial produced ~2.6 kg of weight loss against ~1.8 kg on placebo over 12 weeks, a placebo-adjusted gap of under one kilogram, and the trial failed its primary endpoint. Semaglutide 2.4mg in STEP 1 produced 14.9% body weight reduction over 68 weeks. Calling these alternatives implies an equivalence the data does not support.",
  },
  {
    q: "What is Ozempic actually approved for?",
    a: "Ozempic (semaglutide 0.5–2.0mg) is FDA-approved for type 2 diabetes. The same molecule at a higher dose (2.4mg) is sold as Wegovy for chronic weight management, approved in June 2021. Tirzepatide (Mounjaro for diabetes, Zepbound for obesity) hit 22.5% in SURMOUNT-1 and was approved for obesity in November 2023. Retatrutide is in Phase III with TRIUMPH-4 reporting 28.7% at 12mg, but it is not yet approved.",
  },
  {
    q: "Why do some clinics still sell peptides like CJC-1295 or BPC-157 for fat loss?",
    a: "These compounds sit in the 503A research-peptide market, which is a different regulatory category than approved drugs. They do not require a Phase III trial to be sold through compounding pharmacies. The marketing leans on legitimate-sounding mechanism descriptions (GH-axis stimulation, lipolytic fragments, AMPK activation) without trial data showing meaningful body composition change in obesity populations.",
  },
  {
    q: "What about tesamorelin? That is FDA-approved.",
    a: "Tesamorelin (Egrifta) is FDA-approved for one indication only: HIV-associated lipodystrophy, based on Falutz et al. NEJM 2007 showing roughly 17% reduction in visceral adipose tissue at 26 weeks. It is not approved for general weight loss. List price runs around $3,000+ per month. Outside the HIV indication, prescribing is off-label and rare. The mechanism is GHRH receptor activation, not GLP-1 agonism, and the effect is on visceral fat specifically, not total body weight.",
  },
  {
    q: "How do real-world results compare to the trial figures?",
    a: "Real-world weight loss on GLP-1 agonists typically runs 60% to 75% of the trial figures, mostly because patients in the real world miss doses, titrate slower, and discontinue earlier. So semaglutide's 14.9% trial figure translates to roughly 9% to 11% in clinic populations. Even at the lower end of that range, semaglutide produces an order of magnitude more weight loss than older peptides do at their best published numbers.",
  },
  {
    q: "Can I stack peptides with Ozempic to get more weight loss?",
    a: "There is no published trial data on combining GLP-1 agonists with research peptides like CJC-1295 or BPC-157. The mechanism arguments cited online (GH-axis stimulation preserving lean mass during caloric deficit, BPC-157 supporting recovery, AOD-9604 promoting lipolysis) are not supported by Phase III evidence. Adding a research peptide to an approved drug introduces unstudied interactions, additional cost, and additional injection burden without documented benefit. Clinicians do not generally recommend it.",
  },
  {
    q: "Is bariatric surgery still the strongest fat loss option?",
    a: "For total body weight loss at one year, yes. Sleeve gastrectomy produces around 25% to 30% total body weight loss, and Roux-en-Y gastric bypass produces around 30% to 35%. Retatrutide at 12mg is the first pharmacological option to come within range of bariatric figures, and that is in trials with no head-to-head against surgery. For comparison context: peptides like AOD-9604 produce sub-kilogram placebo-adjusted weight loss. They are not in the same conversation.",
  },
  {
    q: "If older peptides do not work for fat loss, what are they actually used for?",
    a: "Most have legitimate research uses outside obesity. Tesamorelin has its HIV-associated lipodystrophy indication. CJC-1295 and ipamorelin are used in research and off-label for GH-axis stimulation, often in anti-aging and recovery contexts. BPC-157 is studied for tissue repair. MOTS-c is being investigated for metabolic and longevity endpoints. None of these compounds has Phase III obesity data showing weight loss comparable to the GLP-1 class. Selling them as Ozempic alternatives misrepresents what the evidence actually shows.",
  },
];

// ---------- PAGE ----------
export default function PeptidesVsOzempicPage() {
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
    { name: "Fat Loss", item: "https://peptidefile.com/fat-loss" },
    { name: "Peptides vs Ozempic", item: CANONICAL },
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
          <span>Comparison File</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Older Peptides vs GLP-1 Class</span>
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
          Peptides vs Ozempic for Fat Loss: An Honest Data Comparison
        </h1>

        <p className="page-intro">
          Older fat-loss peptides like AOD-9604, CJC-1295, and tesamorelin
          produced sub-kilogram placebo-adjusted weight loss in their best
          published trials. Semaglutide hit 14.9% in STEP 1. Tirzepatide hit
          22.5% in SURMOUNT-1. The two categories are not in the same efficacy
          class, and treating them as alternatives misrepresents the evidence.
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
            { stat: "<1 kg", label: "AOD-9604 placebo-adjusted, 12 wk" },
            { stat: "14.9%", label: "Semaglutide STEP 1, 68 wk" },
            { stat: "22.5%", label: "Tirzepatide SURMOUNT-1, 72 wk" },
            { stat: "0", label: "Peptide FDA approvals for obesity" },
            { stat: "2021", label: "Wegovy obesity approval" },
            { stat: "2023", label: "Zepbound obesity approval" },
            { stat: "$3,000+", label: "Tesamorelin monthly list" },
            { stat: "60–75%", label: "Real-world vs trial efficacy" },
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
            Search traffic for "peptides vs Ozempic" is mostly people trying to
            work out whether the cheaper, easier-to-source compounds sold by
            online clinics and compounding pharmacies can do what semaglutide
            does. The honest answer is that the comparison is not close. Older
            fat-loss peptides like AOD-9604, CJC-1295/ipamorelin, and even the
            FDA-approved tesamorelin produced placebo-adjusted weight loss
            measured in single kilograms or single percentage points of
            visceral fat in their best trials. Semaglutide produced 14.9% body
            weight reduction in STEP 1. Tirzepatide produced 22.5% in
            SURMOUNT-1. Retatrutide produced 28.7% in TRIUMPH-4.
          </p>

          <p>
            Two different categories of compound, two different efficacy
            categories. This article walks through the data side by side: what
            each class does, what the published trials actually showed, what
            the regulatory and access picture looks like, and where, if
            anywhere, the older peptides still have a role. The goal is to
            answer the comparison question on the evidence rather than on
            marketing copy.
          </p>

          <p>
            Where figures are cited below, they come from published Phase II
            or Phase III trials, FDA approval documents, or the manufacturer's
            press releases on file. Cross-trial comparisons are imperfect
            (different populations, different durations, different endpoints),
            but the gap between the two categories is large enough that
            methodological caveats do not close it.
          </p>

          <h2 id="what-they-are">What the two categories actually are</h2>

          <p>
            "Peptides" in the fat-loss conversation usually means a handful of
            compounds sold through 503A compounding pharmacies, telehealth
            clinics, and research-chemical vendors. The most common are
            AOD-9604 (a 16-amino-acid C-terminal fragment of human growth
            hormone), CJC-1295 and ipamorelin (growth hormone releasing
            hormone analogs and ghrelin mimetics), tesamorelin (a stabilised
            GHRH analog, the only one in this group with FDA approval), MOTS-c
            (a 16-amino-acid mitochondrial peptide that activates AMPK), and
            BPC-157 (a tissue-repair peptide marketed for recovery rather than
            fat loss directly). The shared mechanism story is some version of
            "stimulate the GH/IGF-1 axis, increase lipolysis, preserve lean
            mass." The shared evidence story is much thinner than the
            marketing suggests. Our{" "}
            <Link href="/fat-loss/aod-9604">AOD-9604 file</Link> covers the
            primary worked example.
          </p>

          <p>
            The GLP-1 class is the comparator most people actually mean by
            "Ozempic." It includes liraglutide (Saxenda for obesity, Victoza
            for diabetes), semaglutide (Ozempic at 0.5–2.0mg for diabetes,
            Wegovy at 2.4mg for obesity, Rybelsus oral for diabetes),
            tirzepatide (Mounjaro for diabetes, Zepbound for obesity, the
            first dual GLP-1/GIP agonist), and retatrutide (Eli Lilly's triple
            GLP-1/GIP/glucagon agonist, currently in Phase III). All four are
            once-weekly injectable peptide hormones. All four work primarily
            through incretin receptor activation: slowing gastric emptying,
            increasing glucose-dependent insulin secretion, reducing glucagon
            release, and acting centrally on appetite circuits. The
            generation-on-generation efficacy gain has been steep and is the
            reason this class has redrawn the obesity treatment map.
          </p>

          <p>
            Both categories are technically peptides in the chemistry sense.
            The reason the comparison happens at all is that the older
            compounds are sold as peptides while the GLP-1 class is sold as
            "GLP-1 medications" or by brand name, so the marketing makes them
            sound like different kinds of things. They are not. The relevant
            distinction is not chemistry but evidence and approval status.
          </p>

          <h2 id="research">What the published trials actually show</h2>

          <p>
            The cleanest way to compare is to put the best-published efficacy
            figures next to each other.
          </p>

          <h3>Older peptides: best-published efficacy</h3>
          <ul>
            <li>
              <strong>AOD-9604:</strong> Phase IIb, 12 weeks, ~2.6 kg active
              versus ~1.8 kg placebo. Failed primary endpoint. Never advanced
              past Phase II for obesity. Reclassified as cosmetic-grade GRAS
              in 2014.
            </li>
            <li>
              <strong>CJC-1295 / ipamorelin:</strong> No published Phase III
              RCT in obesity. Existing data is on GH and IGF-1 response in
              healthy adults. No body composition endpoint hit at the level
              required for an obesity indication.
            </li>
            <li>
              <strong>Tesamorelin (Egrifta):</strong> Falutz et al., NEJM
              2007 (PMID 17898100). Roughly 17% reduction in visceral adipose
              tissue at 26 weeks in HIV-associated lipodystrophy. Approved
              2010 for that indication only. Not a general fat-loss drug.
              List price ~$3,000+/month.
            </li>
            <li>
              <strong>MOTS-c:</strong> 16-amino-acid peptide encoded within
              the mitochondrial 12S rRNA gene. Activates AMPK in preclinical
              work. Limited human data, no Phase III obesity trial.
            </li>
          </ul>

          <h3>GLP-1 class: best-published efficacy</h3>
          <ul>
            <li>
              <strong>Liraglutide (Saxenda):</strong> SCALE trial (Pi-Sunyer
              et al., NEJM 2015, PMID 26132939). 8.0% body weight reduction
              at 3.0mg over 56 weeks. Approved 2014.
            </li>
            <li>
              <strong>Semaglutide (Wegovy):</strong> STEP 1 (Wilding et al.,
              NEJM 2021, PMID 33567185). 14.9% body weight reduction at
              2.4mg over 68 weeks. Approved June 2021 for obesity. SELECT
              (Lincoff et al., NEJM 2023, PMID 37952131) added a 20% MACE
              reduction in 17,604 patients with established cardiovascular
              disease.
            </li>
            <li>
              <strong>Tirzepatide (Zepbound):</strong> SURMOUNT-1 (Jastreboff
              et al., NEJM 2022, PMID 35658024). 22.5% body weight reduction
              at 15mg over 72 weeks. Approved November 2023 for obesity.
            </li>
            <li>
              <strong>Retatrutide:</strong> TRIUMPH-4. 28.7% body weight
              reduction at 12mg over 68 weeks, reported December 2025.
              Investigational. NDA target 2027 or 2028.
            </li>
          </ul>

          <p>
            Even on a charitable read of the older peptide data, AOD-9604's
            best result is sub-kilogram placebo-adjusted weight loss at 12
            weeks. Semaglutide's 14.9% in a 100 kg patient is roughly 14 kg
            over 68 weeks against ~2.4% (~2.4 kg) on placebo. The
            placebo-adjusted gap is more than ten times larger, in a much
            longer trial, with a much larger sample size, on a far more
            developed evidence base.
          </p>

          <p>
            Tesamorelin is the one compound in the older-peptide column with a
            real FDA approval, and even its data does not translate. The 17%
            visceral fat reduction it produced in HIV-associated lipodystrophy
            patients is a depot-specific effect (intra-abdominal visceral
            adipose tissue measured on imaging), not total body weight. The
            FDA approval does not extend to general obesity, and the off-label
            evidence in non-HIV populations is minimal. Selling tesamorelin as
            an Ozempic alternative ignores both the indication and the
            endpoint.
          </p>

          <h2 id="practical">Practical reality: cost, access, side effects, and use case</h2>

          <p>
            The comparison is not only about efficacy. Cost, access, side
            effects, and use case all matter, and they cut in different
            directions for different patients.
          </p>

          <p>
            <strong>Cost.</strong> Wegovy's US list price is around $1,350 per
            month, with substantial variation by insurance and manufacturer
            copay programmes. Zepbound is similar. Tesamorelin runs $3,000+
            per month. Compounded GLP-1s sat around $200 to $500 per month
            during the 2022–2024 shortage period, but the FDA designated
            semaglutide and tirzepatide as resolved shortages in late 2024
            and early 2025, ending the legal basis for routine 503A
            compounding of either compound. The compounded GLP-1 market
            shrank rapidly through 2025. Research peptides like AOD-9604,
            CJC-1295, and BPC-157 sit in a different regulatory category
            (research-chemical vendors and 503A compounding for non-shortage
            compounds), with monthly costs typically in the $50 to $200
            range for an injection cycle. Cheaper, but the per-dollar-of-fat
            -loss math still favours the approved drugs by a wide margin.
          </p>

          <p>
            <strong>Access.</strong> Approved GLP-1s require a prescription
            and a pharmacy. Insurance coverage is patchy: Medicare does not
            currently cover obesity medications, and commercial coverage
            ranges from full to none depending on the plan. The older
            peptides do not require a prescription in the research-chemical
            channel, which is a feature in the marketing and a problem in
            the safety picture: there is no enforcement of identity, purity,
            or dosing accuracy. Compounding pharmacies operating under 503A
            for non-shortage compounds have more oversight than research
            vendors but still do not require a Phase III trial to dispense.
          </p>

          <p>
            <strong>Side effects.</strong> The GLP-1 class has a
            well-characterised tolerability profile: nausea, vomiting,
            diarrhea, and constipation, mostly during titration, mostly
            dose-dependent. Real-world discontinuation rates in the first
            year are 30% to 50% depending on the dataset, mostly driven by
            GI side effects, cost, and access disruption. The older peptides
            have less-characterised profiles because the trials are smaller
            and shorter. AOD-9604 was reported as well-tolerated in Phase II
            but the evidence base is thin. CJC-1295/ipamorelin can cause
            water retention, fatigue, and IGF-1 elevation. Tesamorelin's
            label includes injection-site reactions and joint pain. The
            comparison is not "safe peptides versus risky GLP-1s" in either
            direction; it is "well-characterised versus
            poorly-characterised."
          </p>

          <p>
            <strong>Use case.</strong> This is where the older peptides have
            their actual role, and it is not weight loss. CJC-1295/ipamorelin
            is used for GH-axis stimulation in research and off-label
            anti-aging contexts. BPC-157 is studied for tissue repair and
            recovery. MOTS-c is being investigated for metabolic and
            longevity endpoints. Tesamorelin has its HIV-associated
            lipodystrophy indication. None of these are strong fat-loss
            tools. Selling them as Ozempic alternatives misuses the
            evidence. Our{" "}
            <Link href="/fat-loss/cjc-1295-fat-loss">
              CJC-1295 fat loss explainer
            </Link>{" "}
            covers the GH-axis case in detail, and the{" "}
            <Link href="/fat-loss/peptide-stacking-guide">
              peptide stacking guide
            </Link>{" "}
            walks through the recovery and recomposition arguments that
            actually have some support.
          </p>

          <h2 id="comparison">Side-by-side comparison table</h2>

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
                  <th
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
                    Dimension
                  </th>
                  <th
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
                    Older Fat-Loss Peptides
                  </th>
                  <th
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
                    GLP-1 Class (Ozempic et al.)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Best Phase III weight loss", "Sub-kilogram placebo-adjusted (AOD-9604)", "14.9% to 28.7% (semaglutide to retatrutide)"],
                  ["FDA approvals for obesity", "None", "Saxenda 2014, Wegovy 2021, Zepbound 2023"],
                  ["Mechanism", "GH-axis, lipolytic fragments, AMPK", "GLP-1 (+/- GIP, +/- glucagon) receptor agonism"],
                  ["Administration", "Subcutaneous injection (variable schedule)", "Once-weekly subcutaneous injection"],
                  ["Monthly cost", "$50–$200 research-grade, $3,000+ tesamorelin", "$1,350 Wegovy list, $1,000+ Zepbound list"],
                  ["Cardiovascular outcomes data", "None", "SELECT: 20% MACE reduction (semaglutide)"],
                  ["Real-world adherence data", "Limited", "Extensive; 60–75% of trial efficacy"],
                  ["Regulatory status", "Research-chemical or 503A compounding", "Approved, pharmacy-dispensed prescription"],
                  ["Where they fit", "Recovery, GH-axis, recomposition contexts", "Standard of care for clinical obesity"],
                ].map((row, i) => {
                  return (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid var(--rule)",
                        background: i % 2 === 0 ? "var(--paper)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "12px 16px", fontWeight: 500 }}>
                        {row[0]}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          color: "var(--ink3)",
                          fontWeight: 400,
                        }}
                      >
                        {row[1]}
                      </td>
                      <td style={{ padding: "12px 16px", color: "var(--ink)", fontWeight: 500 }}>
                        {row[2]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div
            style={{
              padding: "20px 24px",
              background: "var(--paper2)",
              border: "1px solid var(--rule)",
              borderLeft: "3px solid #e8a020",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#e8a020",
                marginBottom: "8px",
                margin: 0,
              }}
            >
              Clinical Note
            </p>
            <p style={{ margin: "8px 0 0 0" }}>
              Older fat-loss peptide marketing routinely cites active-arm
              weight loss numbers without placebo subtraction. AOD-9604's
              ~2.6 kg active-arm figure becomes a marketing data point even
              though placebo produced ~1.8 kg in the same trial and the
              primary endpoint was not met. When evaluating any peptide
              fat-loss claim, ask for the placebo-adjusted figure and the
              primary endpoint outcome. If neither is volunteered, the
              evidence is being framed selectively.
            </p>
          </div>

          <h2 id="recommendation">Where the comparison actually lands</h2>

          <p>
            For fat loss specifically, the GLP-1 class is the standard of
            care. Approved options exist at every step of the dose-response
            curve: liraglutide for patients who need a daily injection or a
            modest target, semaglutide for the established 14.9% benchmark
            with cardiovascular outcomes evidence, tirzepatide for the 22.5%
            tier, and retatrutide arriving in 2027 or 2028 to push the
            ceiling toward 28%. Real-world weight loss runs 60% to 75% of
            trial figures, which still puts approved drugs an order of
            magnitude ahead of older peptides on placebo-adjusted body
            weight reduction.
          </p>

          <p>
            Bariatric surgery remains the non-pharmacological reference
            point: sleeve gastrectomy at roughly 25% to 30% total body
            weight loss at one year, Roux-en-Y gastric bypass at 30% to 35%.
            Retatrutide is the first medication to come within range. None
            of the older peptides do.
          </p>

          <p>
            The older peptides are not Ozempic alternatives. They are
            different compounds with different use cases (recovery,
            GH-axis stimulation, niche metabolic research) and a different
            evidence base. Some have legitimate roles in those contexts;
            none has a published Phase III trial showing weight loss
            comparable to the GLP-1 class. For readers comparing on cost,
            the right comparison is GLP-1 list price against compounded
            GLP-1 access during shortage windows, not GLP-1 against
            research peptides. For readers comparing on access, the right
            move is a conversation with a clinician about insurance
            coverage and tier placement, not a switch to a research-grade
            compound. The{" "}
            <Link href="/fat-loss/peptide-therapy-clinics">
              peptide therapy clinics guide
            </Link>{" "}
            walks through how the clinic side of this market operates and
            what to ask before signing up.
          </p>

          <p>
            The honest framing for the search query is that "peptides versus
            Ozempic" is not a close comparison. The two categories are
            several efficacy tiers apart. Treating them as alternatives
            misrepresents the data, and the article should not pretend
            otherwise. Read the{" "}
            <Link href="/fat-loss">Fat Loss File</Link> for the broader map
            of what works and what does not, and the{" "}
            <Link href="/fat-loss/tesamorelin-deep-dive">
              tesamorelin explainer
            </Link>{" "}
            for the one approved peptide in the older category, with the
            indication-specific caveats that come with it.
          </p>

          <h2 id="faq">Frequently Asked Questions</h2>

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
              and does not constitute medical advice, diagnosis, or treatment.
              Semaglutide, tirzepatide, liraglutide, and tesamorelin are
              prescription medications. Retatrutide is investigational and
              not approved by the FDA or any other regulatory authority as of
              May 2026. Compounds sold through research-chemical vendors,
              including AOD-9604, CJC-1295, ipamorelin, BPC-157, and MOTS-c,
              are not approved for any therapeutic use and are not subject
              to the same identity, purity, or dosing controls as approved
              drugs. Always consult a qualified healthcare provider before
              starting, stopping, or changing any medication or compound.
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "var(--ink3)",
                fontWeight: 300,
                fontStyle: "italic",
                margin: "10px 0 0 0",
              }}
            >
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
            <div
              className="mono-label"
              style={{ marginBottom: "12px", fontSize: "10px" }}
            >
              On this page
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                ["what-they-are", "What the two categories are"],
                ["research", "What the trials show"],
                ["practical", "Cost, access, side effects"],
                ["comparison", "Side-by-side comparison"],
                ["recommendation", "Where the comparison lands"],
                ["faq", "Frequently Asked Questions"],
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
                ["/fat-loss", "The Fat Loss File"],
                ["/fat-loss/aod-9604", "AOD-9604"],
                ["/fat-loss/cjc-1295-fat-loss", "CJC-1295 Fat Loss"],
                ["/fat-loss/peptide-stacking-guide", "Peptide Stacking Guide"],
                ["/fat-loss/peptide-therapy-clinics", "Peptide Therapy Clinics"],
                ["/fat-loss/tesamorelin-deep-dive", "Tesamorelin Deep Dive"],
                ["/fat-loss/mots-c-metabolism", "MOTS-c Metabolism"],
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
