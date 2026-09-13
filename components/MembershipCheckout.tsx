"use client";

import { useState } from "react";

// Live Stripe Payment Links (same Stripe account as Delta Harvest Festival),
// supplied directly by Nel — see docs/DEPLOYMENT.md's payments note. Plain
// link redirects rather than Stripe's embeddable buy-button.js: no
// third-party script runs on this site, so the Cookie Policy's "this
// website sets no cookies of its own" claim stays true — cookie-setting
// only happens once the visitor is on Stripe's own checkout page.
const checkoutOptions = [
  { label: "Basic Artist Membership — $25/year", url: "https://buy.stripe.com/5kQdR8eIb1Kn3b1ckF77O00" },
  { label: "Artist Digital Membership — $35/year", url: "https://buy.stripe.com/aFabJ09nRfBd5j92K577O01" },
  { label: "Artist Workshop — $10/workshop", url: "https://buy.stripe.com/6oU7sKcA3agT12T1G177O02" },
  { label: "Incubator Idea Clinic — $20/session", url: "https://buy.stripe.com/8x2cN4arV74H12T4Sd77O03" },
  { label: "Incubator Idea Clinic — 3 sessions for $50", url: "https://buy.stripe.com/14AbJ043x1Kn9zpgAV77O04" },
] as const;

export function MembershipCheckout() {
  const [selected, setSelected] = useState<string>(checkoutOptions[0].url);

  return (
    <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", alignItems: "stretch" }}>
      <label className="visually-hidden" htmlFor="checkout-select">
        Choose what you&rsquo;re paying for
      </label>
      <select
        id="checkout-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "var(--ink-900)",
          background: "var(--paper)",
          border: "1px solid var(--ink-300)",
          borderRadius: "var(--radius)",
          padding: "0 14px",
          minHeight: 48,
          minWidth: 280,
          flex: "1 1 280px",
        }}
      >
        {checkoutOptions.map((option) => (
          <option key={option.url} value={option.url}>
            {option.label}
          </option>
        ))}
      </select>
      <a
        href={selected}
        target="_blank"
        rel="noopener noreferrer"
        className="button button--primary"
        style={{ flex: "0 0 auto" }}
      >
        Checkout
      </a>
    </div>
  );
}
