import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Peptide File",
  description: "Privacy policy for Peptide File.",
  alternates: { canonical: "https://peptidefile.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <article
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "64px 48px",
      }}
    >
      <div className="eyebrow">
        <span className="eyebrow-text">Legal</span>
      </div>

      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(32px, 4vw, 44px)",
          color: "var(--ink)",
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: "12px",
        }}
      >
        Privacy Policy
      </h1>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--ink3)",
          marginBottom: "48px",
          paddingBottom: "32px",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        Last updated: April 2026
      </p>

      <div className="prose">
        <p>
          This Privacy Policy describes how Peptide File (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and shares
          information about you when you visit peptidefile.com.
        </p>

        <h2>Information we collect</h2>
        <p>We may collect the following information:</p>
        <ul>
          <li>
            <strong>Usage data</strong> — Pages visited, time on site, and
            referring URLs, collected via analytics tools.
          </li>
          <li>
            <strong>Email address</strong> — If you subscribe to our newsletter.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>
            Understand how visitors use the site so we can improve content.
          </li>
          <li>Send newsletter emails to subscribers who have opted in.</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We may use cookies or similar tracking technologies for analytics
          purposes. You can disable cookies in your browser settings.
        </p>

        <h2>Third-party services</h2>
        <p>
          We may use third-party analytics services (such as Google Analytics).
          These services have their own privacy policies. We do not sell your
          personal data to third parties.
        </p>

        <h2>Data retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purposes described in this policy. You may request deletion of your
          data at any time by contacting us.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct,
          or delete your personal data. Contact us at{" "}
          <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a> to
          exercise these rights.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We will indicate the date
          of the most recent revision at the top of this page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a>.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          article { padding: 40px 24px !important; }
        }
      `}</style>
    </article>
  );
}
