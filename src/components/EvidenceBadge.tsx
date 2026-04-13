type EvidenceLevel = "strong" | "moderate" | "emerging";

const config: Record<EvidenceLevel, { label: string; className: string }> = {
  strong: {
    label: "Strong Evidence",
    className: "bg-green-100 text-evidence-strong border border-green-200",
  },
  moderate: {
    label: "Moderate Evidence",
    className: "bg-amber-100 text-evidence-moderate border border-amber-200",
  },
  emerging: {
    label: "Emerging Evidence",
    className: "bg-purple-100 text-evidence-emerging border border-purple-200",
  },
};

interface EvidenceBadgeProps {
  level: EvidenceLevel;
}

export default function EvidenceBadge({ level }: EvidenceBadgeProps) {
  const { label, className } = config[level];

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${className}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {label}
    </span>
  );
}
