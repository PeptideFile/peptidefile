import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "mailto:hello@peptidefile.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--paper2)",
        borderTop: "1px solid var(--rule)",
        padding: "32px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        {/* Brand */}
        <span
          style={{
            fontFamily: "var(--serif)",
            fontSize: "18px",
            color: "var(--ink)",
          }}
        >
          Peptide File
        </span>

        {/* Disclaimer — hidden on mobile via inline style + media */}
        <p
          className="footer-disclaimer"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--ink3)",
            maxWidth: "400px",
            textAlign: "center",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Content is for informational purposes only and does not constitute
          medical advice. Always consult a qualified healthcare provider before
          making decisions about any compound or protocol.
        </p>

        {/* Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink3)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "20px auto 0",
          paddingTop: "16px",
          borderTop: "1px solid var(--rule)",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "10px",
            color: "var(--ink3)",
            letterSpacing: "0.05em",
          }}
        >
          © {year} Peptide File
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-disclaimer { display: none !important; }
          footer > div:first-child {
            flex-direction: column;
            text-align: center;
          }
        }
        footer a:hover {
          color: var(--ink) !important;
        }
        @media (max-width: 900px) {
          footer {
            padding: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
