import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Peptide File",
  description: "Privacy policy for Peptide File.",
  alternates: { canonical: "https://peptidefile.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          <h1
            className="text-display-lg text-ink mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-0.01em",
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mb-10">Last updated: April 2026</p>

          <div className="prose">
            <p>
              This Privacy Policy describes how Peptide File ("we", "us", "our")
              collects, uses, and shares information about you when you visit
              peptidefile.com.
            </p>

            <h2>Information we collect</h2>
            <p>
              We may collect the following information:
            </p>
            <ul>
              <li>
                <strong>Usage data</strong> — Pages visited, time on site, and
                referring URLs, collected via analytics tools.
              </li>
              <li>
                <strong>Email address</strong> — If you subscribe to our
                newsletter.
              </li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Understand how visitors use the site so we can improve content.</li>
              <li>Send newsletter emails to subscribers who have opted in.</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We may use cookies or similar tracking technologies for analytics
              purposes. You can disable cookies in your browser settings.
            </p>

            <h2>Third-party services</h2>
            <p>
              We may use third-party analytics services (such as Google
              Analytics). These services have their own privacy policies. We do
              not sell your personal data to third parties.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil
              the purposes described in this policy. You may request deletion of
              your data at any time by contacting us.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, or delete your personal data. Contact us at{" "}
              <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a> to
              exercise these rights.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We will indicate the
              date of the most recent revision at the top of this page.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:hello@peptidefile.com">hello@peptidefile.com</a>.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
