import EvidenceBadge from "./EvidenceBadge";

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  readingTime?: string;
  evidenceLevel?: "strong" | "moderate" | "emerging";
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  subtitle,
  author,
  date,
  readingTime,
  evidenceLevel,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Article header */}
      <header className="mb-10">
        {evidenceLevel && (
          <div className="mb-4">
            <EvidenceBadge level={evidenceLevel} />
          </div>
        )}

        <h1
          className="text-display-lg text-ink mb-4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl text-muted leading-relaxed mb-6">{subtitle}</p>
        )}

        {(author || date || readingTime) && (
          <div className="flex flex-wrap gap-3 text-sm text-muted border-t border-b border-border py-3">
            {author && <span>{author}</span>}
            {date && <span>{date}</span>}
            {readingTime && (
              <span
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {readingTime} read
              </span>
            )}
          </div>
        )}
      </header>

      {/* Article body */}
      <div className="prose">{children}</div>

      {/* Disclaimer */}
      <div className="mt-16 p-4 bg-highlight rounded border border-amber-200 text-sm text-ink">
        <strong>Disclaimer:</strong> This content is for informational purposes
        only. It is not medical advice and does not replace consultation with a
        qualified healthcare provider. Always consult a physician before making
        any health decisions.
      </div>
    </article>
  );
}
