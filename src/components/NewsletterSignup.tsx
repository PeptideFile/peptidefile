"use client";

export default function NewsletterSignup() {
  return (
    <section
      id="newsletter"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 48px",
        borderTop: "1px solid var(--rule)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(28px, 3vw, 40px)",
            color: "var(--ink)",
            lineHeight: 1.15,
            marginBottom: "16px",
            fontWeight: 400,
          }}
        >
          The weekly peptide brief.
        </h2>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "15px",
            color: "var(--ink2)",
            fontWeight: 300,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          One email per week. Evidence-rated research summaries on peptides and
          metabolic science. No hype. No selling. Unsubscribe anytime.
        </p>
      </div>

      {/* Right */}
      <div>
        <div
          style={{
            border: "1px solid var(--rule)",
            padding: "28px",
            background: "var(--paper2)",
          }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "13px",
                padding: "12px 16px",
                border: "1px solid var(--rule)",
                background: "var(--paper)",
                color: "var(--ink)",
                outline: "none",
                width: "100%",
              }}
            />
            <button
              type="submit"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                background: "var(--accent)",
                color: "#fff",
                border: "none",
                padding: "13px 24px",
                cursor: "pointer",
                transition: "background 0.15s",
                width: "100%",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--ink)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--accent)")
              }
            >
              Subscribe — It&apos;s Free
            </button>
          </form>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "10px",
              color: "var(--ink3)",
              marginTop: "12px",
              letterSpacing: "0.05em",
              lineHeight: 1.5,
            }}
          >
            No spam. No selling. Unsubscribe with one click.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #newsletter {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 48px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
