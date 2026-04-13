const items = [
  { tag: "NEW", text: "Retatrutide Phase III results — 28.7% body weight reduction confirmed at 12mg/68 weeks" },
  { tag: "UPDATE", text: "CJC-1295 half-life study published in Journal of Endocrinology" },
  { tag: "TRIAL", text: "BPC-157 human trial enrolment opens Q3 2026" },
  { tag: "FDA", text: "Retatrutide NDA submission expected late 2026" },
  { tag: "RESEARCH", text: "New GLP-1/GIP dual agonist data vs tirzepatide head-to-head" },
];

// Duplicate for seamless loop
const allItems = [...items, ...items];

export default function Ticker() {
  return (
    <div
      style={{
        background: "var(--ink)",
        height: "40px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Live Updates label */}
      <div
        style={{
          flexShrink: 0,
          padding: "0 16px",
          borderRight: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--accent2)",
            whiteSpace: "nowrap",
          }}
        >
          Live Updates
        </span>
      </div>

      {/* Scrolling track */}
      <div style={{ overflow: "hidden", flex: 1, position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0",
            animation: "ticker 30s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {allItems.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 32px 0 0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent2)",
                  flexShrink: 0,
                }}
              >
                {item.tag}
              </span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.7)",
                  flexShrink: 0,
                }}
              >
                {item.text}
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.2)",
                  marginLeft: "24px",
                  flexShrink: 0,
                }}
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
