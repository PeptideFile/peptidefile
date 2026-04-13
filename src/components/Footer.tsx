import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Privacy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "mailto:hello@peptidefile.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-paper mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-bold text-ink"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Peptide File
            </p>
            <p className="text-sm text-muted mt-0.5">
              The research file on peptides, protocols and clinical science
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs text-muted">
            © {year} Peptide File. All rights reserved.
          </p>
          <p
            className="text-xs text-muted"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Built on evidence, not marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
