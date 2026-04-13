"use client";

export default function NewsletterSignup() {
  return (
    <div className="max-w-xl mx-auto text-center py-10 px-4">
      <h2
        className="text-display-sm text-ink mb-3"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        The Peptide File — Weekly Research Digest
      </h2>
      <p className="text-muted mb-6 leading-relaxed">
        One email per week. Evidence-rated research summaries. No spam. No
        selling.
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 px-4 py-2.5 border border-border rounded bg-white text-ink placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-ink text-paper text-sm font-medium rounded hover:bg-accent transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-3 text-xs text-muted">
        Unsubscribe anytime. We respect your inbox.
      </p>
    </div>
  );
}
