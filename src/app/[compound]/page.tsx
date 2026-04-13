import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBadge from "@/components/EvidenceBadge";
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

  if (!data) {
    return { title: "Not Found — Peptide File" };
  }

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

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-4">
              <EvidenceBadge level={data.evidenceLevel} />
            </div>
            <h1
              className="text-display-lg text-ink mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: "-0.01em",
              }}
            >
              {data.name}
            </h1>
            <p
              className="text-xs text-muted uppercase tracking-widest mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {data.category}
            </p>
            <p className="text-lg text-muted leading-relaxed max-w-xl">
              {data.shortDescription}
            </p>
          </header>

          {/* Status bar */}
          <div className="flex flex-wrap gap-6 py-4 border-t border-b border-border mb-10 text-sm">
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-0.5">Status</p>
              <p className="font-medium text-ink">{data.status}</p>
            </div>
            <div>
              <p className="text-xs text-muted uppercase tracking-wide mb-0.5">Developer</p>
              <p className="font-medium text-ink">{data.developer}</p>
            </div>
          </div>

          {/* Mechanism */}
          <section className="mb-10">
            <h2
              className="text-display-sm text-ink mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Mechanism
            </h2>
            <p className="text-base text-muted leading-relaxed">{data.mechanism}</p>
          </section>

          {/* Key data */}
          <section className="mb-10">
            <h2
              className="text-display-sm text-ink mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Key Data
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(data.keyData).map(([key, value]) => (
                <div
                  key={key}
                  className="p-4 border border-border rounded bg-paper"
                >
                  <p
                    className="text-xs text-muted uppercase tracking-wide mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  {Array.isArray(value) ? (
                    <ul className="text-sm text-ink space-y-0.5">
                      {value.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm font-medium text-ink">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Placeholder content */}
          <section className="mb-10 p-6 border border-border rounded bg-highlight/20">
            <h2
              className="text-display-sm text-ink mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Full Article Coming Soon
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              The full <em>{data.pillarArticle?.title ?? `${data.name} File`}</em>{" "}
              will cover mechanism of action, clinical trial evidence, dosage
              data, side effects, comparisons, and FAQs — all evidence-rated and
              referenced. Check back soon.
            </p>
          </section>

          {/* Cluster articles */}
          {data.clusterArticles && data.clusterArticles.length > 0 && (
            <section className="mb-10">
              <h2
                className="text-display-sm text-ink mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Related Articles
              </h2>
              <ul className="divide-y divide-border border border-border rounded">
                {data.clusterArticles.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/${data.slug}/${article.slug}`}
                      className="flex items-center justify-between px-4 py-3 hover:bg-highlight/20 transition-colors group"
                    >
                      <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                        {article.title}
                      </span>
                      <span className="text-xs text-muted group-hover:text-accent transition-colors">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Disclaimer */}
          <div className="mt-10 p-4 bg-highlight rounded border border-amber-200 text-sm text-ink">
            <strong>Disclaimer:</strong> This content is for informational
            purposes only. It is not medical advice and does not replace
            consultation with a qualified healthcare provider. Always consult a
            physician before making any health decisions.
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
