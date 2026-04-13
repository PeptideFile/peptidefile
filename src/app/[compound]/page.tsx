import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import EvidenceBadge from "@/components/EvidenceBadge";
import NewsletterSignup from "@/components/NewsletterSignup";
import { compounds, getCompoundBySlug } from "@/data/compounds";

interface PageProps {
  params: Promise<{ compound: string }>;
}

export async function generateStaticParams() {
  return compounds.map((c) => ({ compound: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { compound: slug } = await params;
  const data = getCompoundBySlug(slug);
  if (!data) return { title: "Not Found — Peptide File" };
  return {
    title: `${data.name} — Peptide File`,
    description: data.shortDescription,
    alternates: { canonical: `https://peptidefile.com/${data.slug}` },
    openGraph: {
      title: `${data.name} — Peptide File`,
      description: data.shortDescription,
      url: `https://peptidefile.com/${data.slug}`,
    },
  };
}

export default async function CompoundPage({ params }: PageProps) {
  const { compound: slug } = await params;
  const data = getCompoundBySlug(slug);
  if (!data) notFound();

  const pillarTitle = data.pillarArticle?.title ?? `The ${data.name} File`;

  return (
    <>
      <article
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "64px 48px",
        }}
      >
        {/* Eyebrow */}
        <div className="eyebrow">
          <span className="eyebrow-text">{data.category}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(36px, 4vw, 52px)",
            color: "var(--ink)",
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          {pillarTitle}
        </h1>

        {/* Status line */}
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--ink3)",
            marginBottom: "20px",
          }}
        >
          {data.status} · {data.developer}
        </p>

        {/* Evidence badge */}
        <div style={{ marginBottom: "12px" }}>
          <EvidenceBadge level={data.evidenceLevel} />
        </div>

        {/* Short description */}
        <p
          style={{
            fontSize: "17px",
            color: "var(--ink2)",
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: "600px",
            marginTop: "24px",
            paddingTop: "24px",
            borderTop: "1px solid var(--rule)",
          }}
        >
          {data.shortDescription}
        </p>

        {/* Mechanism */}
        <section style={{ marginTop: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "24px",
              color: "var(--ink)",
              fontWeight: 400,
              marginBottom: "12px",
              paddingBottom: "10px",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            Mechanism
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--ink2)",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {data.mechanism}
          </p>
        </section>

        {/* Key data */}
        <section style={{ marginTop: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "24px",
              color: "var(--ink)",
              fontWeight: 400,
              marginBottom: "16px",
              paddingBottom: "10px",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            Key Data
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              border: "1px solid var(--rule)",
            }}
          >
            {Object.entries(data.keyData).map(([key, value], i, arr) => (
              <div
                key={key}
                style={{
                  padding: "20px",
                  background: "var(--paper2)",
                  borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none",
                  borderBottom: i < arr.length - 2 ? "1px solid var(--rule)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--ink3)",
                    marginBottom: "8px",
                  }}
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </p>
                {Array.isArray(value) ? (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {value.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: "13px",
                          color: "var(--ink2)",
                          fontWeight: 300,
                          lineHeight: 1.6,
                          marginBottom: "2px",
                        }}
                      >
                        · {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "18px",
                      color: "var(--ink)",
                    }}
                  >
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <section
          style={{
            marginTop: "48px",
            padding: "28px",
            background: "var(--paper2)",
            border: "1px solid var(--rule)",
            borderLeft: "3px solid var(--accent)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "20px",
              color: "var(--ink)",
              fontWeight: 400,
              marginBottom: "10px",
            }}
          >
            Full Article Coming Soon
          </h2>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: "15px",
              color: "var(--ink3)",
              lineHeight: 1.6,
            }}
          >
            The full <em>{pillarTitle}</em> will cover mechanism of action,
            clinical trial evidence, dosage data, side effects, comparisons, and
            FAQs — all evidence-rated and referenced. Check back soon.
          </p>
        </section>

        {/* Cluster articles */}
        {data.clusterArticles && data.clusterArticles.length > 0 && (
          <section style={{ marginTop: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "24px",
                color: "var(--ink)",
                fontWeight: 400,
                marginBottom: "16px",
                paddingBottom: "10px",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              Related Articles
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {data.clusterArticles.map((article) => (
                <li
                  key={article.slug}
                  style={{
                    borderLeft: "2px solid var(--rule)",
                    paddingLeft: "16px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    marginBottom: "4px",
                    transition: "border-color 0.15s",
                  }}
                >
                  <Link
                    href={`/${data.slug}/${article.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "17px",
                        color: "var(--ink)",
                        marginBottom: "4px",
                      }}
                    >
                      {article.title}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--ink3)",
                        margin: 0,
                      }}
                    >
                      {article.targetKeyword}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Disclaimer */}
        <div
          style={{
            marginTop: "64px",
            padding: "16px 20px",
            background: "var(--paper2)",
            borderTop: "2px solid var(--rule)",
            fontFamily: "var(--mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--ink3)",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          This content is for informational purposes only. Not medical advice.
          Always consult a qualified healthcare provider before making any health decisions.
        </div>
      </article>

      {/* Newsletter */}
      <NewsletterSignup />

      <style>{`
        @media (max-width: 900px) {
          article {
            padding: 40px 24px !important;
          }
          article > div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
          article > section > div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
