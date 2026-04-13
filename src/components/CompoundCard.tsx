import Link from "next/link";
import EvidenceBadge from "./EvidenceBadge";

interface CompoundCardProps {
  name: string;
  slug: string;
  category: string;
  evidenceLevel: "strong" | "moderate" | "emerging";
  shortDescription: string;
}

export default function CompoundCard({
  name,
  slug,
  category,
  evidenceLevel,
  shortDescription,
}: CompoundCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group block p-6 bg-paper border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3
          className="text-lg font-bold text-ink group-hover:text-accent transition-colors"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {name}
        </h3>
        <EvidenceBadge level={evidenceLevel} />
      </div>

      <p
        className="text-xs text-muted uppercase tracking-widest mb-3"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {category}
      </p>

      <p className="text-sm text-muted leading-relaxed">{shortDescription}</p>

      <p className="mt-4 text-xs font-medium text-accent group-hover:underline">
        Read the file →
      </p>
    </Link>
  );
}
