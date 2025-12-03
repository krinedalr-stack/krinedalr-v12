"use client";

import { useState } from "react";

export default function HomePage() {
  // Simple roofing & tiling calculators
  const [roofArea, setRoofArea] = useState("");
  const [roofRate, setRoofRate] = useState(45); // €/m² example
  const [tileArea, setTileArea] = useState("");
  const [tileRate, setTileRate] = useState(38); // €/m² example

  const roofTotal =
    roofArea && roofRate ? (Number(roofArea) * Number(roofRate)).toFixed(0) : "";
  const tileTotal =
    tileArea && tileRate ? (Number(tileArea) * Number(tileRate)).toFixed(0) : "";

  const facebookUrl =
    "https://m.facebook.com/profile.php?id=61581354904730&name=xhp_nt__fb__action__open_user";

  return (
    <main>
      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/353831762475"
        target="_blank"
        rel="noreferrer"
        className="wa-floating"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <header className="hero-header">
            <h1 className="hero-title">
              KRINEDAL-<span className="hero-r">R</span>
            </h1>
            <p className="hero-tagline">
              <span role="img" aria-label="Ireland flag">
                🇮🇪
              </span>{" "}
              <span className="hero-tag-text">
                PREMIUM PROPERTY CARE ACROSS IRELAND
              </span>{" "}
              <span className="hero-shamrock" role="img" aria-label="shamrock">
                ☘️
              </span>
            </p>
          </header>

          <p className="hero-lead">
            24/7 storm damage call-out, full roof renewals and{" "}
            <span className="hero-strong">luxury tiling</span> for homes and
            rental properties. Snow, rain or storm won&apos;t stop us.
          </p>

          <p className="hero-weather-inline">
            Current Ireland weather status:{" "}
            <span className="pill pill-green-inline">
              GREEN – normal conditions
            </span>{" "}
            <span className="hero-inline-shamrock" role="img" aria-label="shamrock">
              ☘️
            </span>
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
            <li>Full roof change &amp; leak tracing</li>
            <li>Luxury bathroom &amp; kitchen tiling</li>
            <li>Landlord-ready refresh between tenants</li>
          </ul>

          <p className="hero-note hero-note-warning">
            *Response time depends on location &amp; weather conditions.
          </p>
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
              night.
            </p>

            <a href="tel:0831762475" className="btn btn-storm">
              🚨 24/7 STORM EMERGENCY LINE
            </a>

            <p className="muted small storm-note">
              Elderly emergency call-outs:{" "}
              <strong>50% discount</strong> on the call-out fee.
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
              <strong className="green-text">GREEN warning</strong> – follow{" "}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="fb-link"
              >
                Krinedal-R on Facebook
              </a>{" "}
              for live updates.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container reviews-grid">
          <article className="card review-card">
            <p className="review-label">★★★★★ CUSTOMER FEEDBACK</p>
            <p className="review-text">
              “Krinedal-R did our full luxury bathroom tiling last week – just
              phenomenal. Clean, fast and extremely professional. Couldn’t be
              happier.”
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
              Follow us on Facebook:{" "}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="fb-link"
              >
                Krinedal-R
              </a>{" "}
              for latest updates &amp; weather radar posts.
            </p>
          </article>
        </div>
      </section>

      {/* ROOF & TILING CALCULATORS */}
      <section className="section section-alt">
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
              &amp; materials separate.
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

      {/* ESTIMATE FORM (with calendar) */}
      <section className="section">
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
                <input
                  name="Name"
                  type="text"
                  className="field-input"
                  required
                />
              </label>

              <label className="field-label">
                Phone number
                <input
                  name="Phone"
                  type="tel"
                  className="field-input"
                  required
                />
              </label>

              <label className="field-label">
                Email
                <input
                  name="Email"
                  type="email"
                  className="field-input"
                  required
                />
              </label>

              {/* CALENDAR FIELD */}
              <label className="field-label">
                Preferred date for visit (optional)
                <input
                  name="Preferred date"
                  type="date"
                  className="field-input"
                />
              </label>

              <label className="field-label">
                Type of work
                <select name="Service" className="field-input">
                  <option>Storm / leak emergency</option>
                  <option>Full roof renewal</option>
                  <option>Roof repair</option>
                  <option>Luxury bathroom tiling</option>
                  <option>Kitchen tiling</option>
                  <option>Painting &amp; fresh-up</option>
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
            <h2>Booking &amp; Payment</h2>
            <ul className="list">
              <li>Materials-first options available for new projects</li>
              <li>Clear written scope agreed before starting</li>
              <li>Digital invoice &amp; payment by bank transfer or card</li>
              <li>Photos provided for your records on request</li>
            </ul>
          </div>

          <footer className="footer">
            <div className="footer-brand">
              <span className="footer-name">
                KRINEDAL-<span className="hero-r">R</span>
              </span>
              <p className="muted footer-tagline">
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
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn footer-facebook"
                >
                  Facebook
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
