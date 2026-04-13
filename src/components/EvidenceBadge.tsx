type EvidenceLevel = "strong" | "moderate" | "emerging";

const config: Record<EvidenceLevel, { label: string; bg: string; color: string }> = {
  strong: {
    label: "Strong Evidence",
    bg: "rgba(26, 107, 60, 0.1)",
    color: "#1a6b3c",
  },
  moderate: {
    label: "Moderate Evidence",
    bg: "rgba(232, 160, 32, 0.12)",
    color: "#e8a020",
  },
  emerging: {
    label: "Emerging Evidence",
    bg: "rgba(122, 117, 104, 0.12)",
    color: "#7a7568",
  },
};

interface EvidenceBadgeProps {
  level: EvidenceLevel;
}

export default function EvidenceBadge({ level }: EvidenceBadgeProps) {
  const { label, bg, color } = config[level];

  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--mono)",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        padding: "4px 10px",
        background: bg,
        color,
        border: `1px solid ${color}30`,
      }}
    >
      {label}
    </span>
  );
}
