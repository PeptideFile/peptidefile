"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Files", href: "/" },
  { label: "Compounds", href: "/#compounds" },
  { label: "Clinical Trials", href: "/retatrutide/clinical-trial-results" },
  { label: "Compare", href: "/compare" },
  { label: "Author", href: "/author" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "64px",
        background: "var(--paper)",
        borderBottom: "1px solid var(--rule)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              background: "var(--accent)",
              color: "#fff",
              padding: "3px 8px",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            PF
          </span>
          <span
            style={{
              fontFamily: "var(--serif)",
              fontSize: "20px",
              color: "var(--ink)",
              lineHeight: 1,
            }}
          >
            Peptide File
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink3)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--ink)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--ink3)")
              }
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#newsletter"
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              background: "var(--ink)",
              color: "var(--paper)",
              padding: "8px 18px",
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--ink)")
            }
          >
            Get the Brief
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--ink)",
          }}
          className="show-mobile"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l12 12M4 16L16 4" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "var(--paper)",
            borderBottom: "1px solid var(--rule)",
            padding: "16px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 49,
          }}
          className="show-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--ink3)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              background: "var(--ink)",
              color: "var(--paper)",
              padding: "10px 18px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Get the Brief
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
