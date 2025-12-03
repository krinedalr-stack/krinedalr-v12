"use client";

import { useState } from "react";

export default function HomePage() {
  // Simple roofing & tiling calculators
  const [roofArea, setRoofArea] = useState("");
  const [roofRate, setRoofRate] = useState(55); // €/m² example for full roof work
  const [tileArea, setTileArea] = useState("");
  const [tileRate, setTileRate] = useState(42); // €/m² example for luxury tiling

  const roofTotal =
    roofArea && roofRate ? (Number(roofArea) * Number(roofRate)).toFixed(0) : "";
  const tileTotal =
    tileArea && tileRate ? (Number(tileArea) * Number(tileRate)).toFixed(0) : "";

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        {/* little floating “Irish flowers” */}
        <div className="hero-decor">
          <span className="flower flower-1" />
          <span className="flower flower-2" />
          <span className="flower flower-3" />
          <span className="flower flower-4" />
        </div>

        <div className="hero-overlay">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1 className="hero-title">
                KRINEDAL-<span className="hero-r">R</span>
              </h1>

              <p className="hero-tag">
                PREMIUM PROPERTY CARE ACROSS IRELAND <span>☘️</span>
              </p>

              <p className="hero-subline">
                Roofing · Luxury Tiling · Painting · Storm Damage · Landlord
                Fresh-Ups
              </p>

              <p className="hero-lead">
                24/7 storm damage call-out, full roof renewals and{" "}
                <span className="hero-strong">luxury tiling</span> for homes and
                rental properties. Snow, rain or storm won&apos;t stop us.
              </p>

              <div className="hero-actions">
                <a href="tel:0831762475" className="btn btn-primary">
                  Call 24/7 Storm Line
                </a>
                <a
                  href="https://wa.me/353831762475"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  WhatsApp us now
                </a>
              </div>

              <ul className="hero-bullets">
                <li>Emergency storm make-safe within hours*</li>
                <li>Full roof change & leak tracing</li>
                <li>Luxury bathroom & kitchen tiling</li>
                <li>Landlord-ready refresh between tenants</li>
              </ul>

              <p className="hero-note">
                *Response time depends on location & weather conditions.
              </p>
            </div>

            {/* Short “card” on right side for larger screens */}
            <aside className="hero-side-card">
              <h2>Fast, respectful property care</h2>
              <p>
                From emergency leaks at midnight to full bathroom tiling that
                looks like a hotel – we keep your home safe, dry and
                beautifully finished.
              </p>
              <div className="hero-side-list">
                <p>✓ 24/7 emergency line</p>
                <p>✓ Photos before & after each job</p>
                <p>✓ Clear pricing and written scope</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 24/7 STORM + WEATHER STATUS */}
      <section className="section section-alt">
        <div className="container grid-2">
          {/* Storm Call-out */}
          <div className="card">
            <h2>24/7 Storm Call-Out</h2>
            <p className="muted">
              Red warning, heavy rain or leaking roof – we respond fast, day or
              night, to make your home safe.
            </p>

            <a href="tel:0831762475" className="btn btn-storm">
              🚨 24/7 STORM EMERGENCY LINE
            </a>

            <p className="muted small">
              Elderly emergency call-outs: <strong>50% discount</strong> on the
              call-out fee.
            </p>
          </div>

          {/* Weather */}
          <div className="card">
            <h2>Ireland Weather Status</h2>

            <div className="weather-pills">
              <button className="pill pill-green">Green</button>
              <button className="pill pill-yellow">Yellow</button>
              <button className="pill pill-orange">Orange</button>
              <button className="pill pill-red">Red</button>
            </div>

            <p className="muted small">
              Current:{" "}
              <strong className="green-text">
                GREEN warning – normal conditions
              </strong>
              .
            </p>
            <p className="muted smallest">
              Follow{" "}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="brand-inline"
              >
                Krinedal-R on Facebook
              </a>{" "}
              for live updates & weather radar posts.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container reviews-grid">
          <article className="card review-card">
            <p className="review-label">Client feedback</p>
            <p className="review-text">
              “Krinedal-R did our full luxury bathroom tiling last week – just
              phenomenal. Clean, fast and extremely professional. Couldn&apos;t
              be happier.”
            </p>
            <p className="review-author">— Aoife, Navan</p>
          </article>

          <article className="card review-card">
            <p className="review-text">
              “We had a roof leak in heavy rain, they arrived close to midnight
              to make the house safe. Snow, rain and storm didn&apos;t stop
              them.”
            </p>
            <p className="review-author">— Patrick, Dublin</p>
            <p className="review-follow">
              “We now use Krinedal-R as our first call for property issues.”
            </p>
          </article>
        </div>
      </section>

      {/* PRICING SNAPSHOT */}
      <section className="section section-alt">
        <div className="container">
          <div className="card">
            <h2>Pricing snapshot (guide only)</h2>
            <p className="muted smallest">
              Final prices always confirmed after inspection. Landlord packages
              and multi-property rates available on request.
            </p>

            <div className="pricing-grid">
              <div>
                <h3>Storm & Call-Outs</h3>
                <ul className="list">
                  <li>Standard daytime call-out from €100</li>
                  <li>24/7 emergency call-out from €150</li>
                  <li>Temporary storm make-safe from €350</li>
                </ul>
              </div>
              <div>
                <h3>Roofing</h3>
                <ul className="list">
                  <li>Minor roof repairs from €120</li>
                  <li>Leak tracing & tile replacement from €220</li>
                  <li>Full roof replacement approx. €5,800 – €10,000</li>
                </ul>
              </div>
              <div>
                <h3>Luxury Tiling</h3>
                <ul className="list">
                  <li>Standard tiling labour from €30–€40 per m²</li>
                  <li>Luxury / marble tiling from €40–€55 per m²</li>
                  <li>Complex patterns (herringbone etc.) quoted on design</li>
                </ul>
              </div>
              <div>
                <h3>Fresh-Ups & Painting</h3>
                <ul className="list">
                  <li>End-of-tenancy “fresh-up” from €250</li>
                  <li>Interior room repaint from €200</li>
                  <li>Power washing & exterior care quoted per property</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROOF & TILING CALCULATORS */}
      <section className="section">
        <div className="container grid-2">
          {/* Roof */}
          <div className="card">
            <h2>Roofing cost idea (rough guide)</h2>
            <p className="muted small">
              Handy calculator to get a feel for budget. Final prices always
              confirmed after inspection.
            </p>
            <label className="field-label">
              Roof area (m²)
              <input
                type="number"
                value={roofArea}
                onChange={(e) => setRoofArea(e.target.value)}
                className="field-input"
                min="0"
              />
            </label>
            <label className="field-label">
              Rate per m² (€)
              <input
                type="number"
                value={roofRate}
                onChange={(e) => setRoofRate(e.target.value)}
                className="field-input"
                min="0"
              />
            </label>
            <p className="calc-result">
              Rough roofing total:{" "}
              {roofTotal ? <strong>€{roofTotal}</strong> : "— enter size above"}
            </p>
          </div>

          {/* Tiling */}
          <div className="card">
            <h2>Luxury tiling cost idea</h2>
            <p className="muted small">
              For hotel-style bathrooms and premium finishes. Labour only, tiles
              & materials separate.
            </p>
            <label className="field-label">
              Tiled area (m²)
              <input
                type="number"
                value={tileArea}
                onChange={(e) => setTileArea(e.target.value)}
                className="field-input"
                min="0"
              />
            </label>
            <label className="field-label">
              Rate per m² (€)
              <input
                type="number"
                value={tileRate}
                onChange={(e) => setTileRate(e.target.value)}
                className="field-input"
                min="0"
              />
            </label>
            <p className="calc-result">
              Rough tiling total:{" "}
              {tileTotal ? <strong>€{tileTotal}</strong> : "— enter size above"}
            </p>
            <p className="muted smallest">
              Luxury projects can be higher – we&apos;ll always discuss options
              and finishes with you.
            </p>
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section className="section section-alt">
        <div className="container">
          <div className="card">
            <h2>Request a Free Estimate</h2>
            <p className="muted small">
              Tell us a bit about your roof, tiling or property project and
              we&apos;ll come back with options and a rough budget.
            </p>

            <form
              action="mailto:krinedalr@gmail.com"
              method="POST"
              encType="text/plain"
              className="estimate-form"
            >
              <label className="field-label">
                Your name
                <input name="Name" type="text" className="field-input" required />
              </label>

              <label className="field-label">
                Phone number
                <input name="Phone" type="tel" className="field-input" required />
              </label>

              <label className="field-label">
                Email
                <input name="Email" type="email" className="field-input" required />
              </label>

              <label className="field-label">
                Preferred date
                <input name="Preferred date" type="date" className="field-input" />
              </label>

              <label className="field-label">
                Preferred time
                <input name="Preferred time" type="time" className="field-input" />
              </label>

              <label className="field-label">
                Type of work
                <select name="Service" className="field-input">
                  <option>Storm / leak emergency</option>
                  <option>Full roof renewal</option>
                  <option>Roof repair</option>
                  <option>Luxury bathroom tiling</option>
                  <option>Kitchen tiling</option>
                  <option>Painting & fresh-up</option>
                  <option>Landlord end-of-tenancy</option>
                  <option>Other (describe below)</option>
                </select>
              </label>

              <label className="field-label">
                Tell us a bit about the job
                <textarea
                  name="Details"
                  rows={4}
                  className="field-input"
                  placeholder="Size of area, issues, photos available, access, etc."
                />
              </label>

              <button type="submit" className="btn btn-primary btn-full">
                Send estimate request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BOOKING & FOOTER */}
      <section className="section section-dark">
        <div className="container">
          <div className="card card-dark">
            <h2>Booking & Payment</h2>
            <ul className="list">
              <li>Materials-first options available for new projects</li>
              <li>Clear written scope agreed before starting</li>
              <li>Digital invoice & payment by bank transfer</li>
              <li>Photos provided for your records on request</li>
            </ul>
            <p className="muted smallest">
              Landlord bundles, multi-property and repeat-work rates are
              available – please contact us directly to discuss.
            </p>
          </div>

          <footer className="footer">
            <div className="footer-brand">
              <span className="footer-name">
                KRINEDAL-<span className="hero-r">R</span>
              </span>
              <p className="muted">
                Premium property care, storm or sunshine – Ireland-wide.
              </p>
            </div>

            <div className="footer-contact">
              <p>
                Phone: <strong>083 176 2475</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
              </p>
              <p>
                Web:{" "}
                <a href="https://www.krinedalr.ie">www.krinedalr.ie</a>
              </p>

              <div className="footer-buttons">
                <a href="tel:0831762475" className="btn footer-call">
                  Call
                </a>
                <a
                  href="https://wa.me/353831762475"
                  target="_blank"
                  rel="noreferrer"
                  className="btn footer-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/353831762475"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
    </main>
  );
}
