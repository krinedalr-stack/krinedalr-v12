"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Roofing calculator
  const [roofArea, setRoofArea] = useState("");
  const [roofRate, setRoofRate] = useState("basic");
  const roofRateValue = roofRate === "basic" ? 85 : 115; // €/m² approx
  const roofEstimate =
    roofArea && !isNaN(parseFloat(roofArea))
      ? Math.round(parseFloat(roofArea) * roofRateValue)
      : null;

  // Tiling calculator
  const [tileArea, setTileArea] = useState("");
  const [tileType, setTileType] = useState("standard");
  let tileRateValue = 0;
  if (tileType === "standard") tileRateValue = 35; // €/m²
  if (tileType === "luxury") tileRateValue = 55;
  if (tileType === "feature") tileRateValue = 70;

  const tileEstimate =
    tileArea && !isNaN(parseFloat(tileArea))
      ? Math.round(parseFloat(tileArea) * tileRateValue)
      : null;

  // Weather warning indicator
  const [warningLevel, setWarningLevel] = useState("green");

  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="hero-overlay">
          <div className="container hero-inner">
            <div className="hero-left">
              <p className="hero-tag">Premium Property Care Ireland ☘️</p>
              <h1>
                <span className="logo-main">KRINEDAL</span>
                <span className="logo-r">-R</span>
              </h1>
              <p className="hero-subline">
                Roofing • Luxury Tiling • Painting • Storm Damage • Landlord
                Ready Homes
              </p>

              <p className="hero-lead">
                Bright, warm and reliable property care across Ireland. From
                <strong> full roof renewals</strong> to
                <strong> luxury marble bathrooms</strong> and
                <strong> 24/7 storm emergencies</strong> – snow, rain or wind
                will not stop us.
              </p>

              <div className="hero-actions">
                <a href="tel:0831762475" className="btn btn-primary">
                  Call now – 083 176 2475
                </a>
                <a
                  href="https://wa.me/353831762475"
                  target="_blank"
                  className="btn btn-outline"
                >
                  WhatsApp us
                </a>
                <a href="#quote" className="btn btn-ghost">
                  Request free estimate
                </a>
              </div>

              <ul className="hero-bullets">
                <li>Luxury bathroom tiling & full-property fresh ups</li>
                <li>Complete roof replacements & storm repairs</li>
                <li>Interior & exterior painting with clean finishes</li>
                <li>Landlord-friendly service & fast invoicing</li>
              </ul>
            </div>

            <div className="hero-right">
              {/* Storm card */}
              <div className="hero-card storm-card">
                <h2>24/7 Storm Call-Out</h2>
                <p className="storm-text">
                  Red warning, heavy rain or leaking roof – we respond fast,
                  day or night.
                </p>

                <button
                  className="btn btn-storm"
                  onClick={() => (window.location.href = "tel:0831762475")}
                >
                  🚨 24/7 STORM EMERGENCY LINE
                </button>

                <p className="storm-note">
                  Elderly emergency call-outs: <strong>50% discount</strong>
                  on call-out fee.
                </p>

                <div className="weather-warning">
                  <p className="weather-title">Ireland Weather Status</p>
                  <div className="weather-pills">
                    <button
                      type="button"
                      className={`weather-pill green ${
                        warningLevel === "green" ? "active" : ""
                      }`}
                      onClick={() => setWarningLevel("green")}
                    >
                      Green
                    </button>
                    <button
                      type="button"
                      className={`weather-pill yellow ${
                        warningLevel === "yellow" ? "active" : ""
                      }`}
                      onClick={() => setWarningLevel("yellow")}
                    >
                      Yellow
                    </button>
                    <button
                      type="button"
                      className={`weather-pill orange ${
                        warningLevel === "orange" ? "active" : ""
                      }`}
                      onClick={() => setWarningLevel("orange")}
                    >
                      Orange
                    </button>
                    <button
                      type="button"
                      className={`weather-pill red ${
                        warningLevel === "red" ? "active" : ""
                      }`}
                      onClick={() => setWarningLevel("red")}
                    >
                      Red
                    </button>
                  </div>
                  <p className="weather-status">
                    Current:{" "}
                    <strong className={`status-${warningLevel}`}>
                      {warningLevel.toUpperCase()} warning
                    </strong>{" "}
                    – follow Krinedal-R on Facebook for live updates.
                  </p>
                </div>
              </div>

              {/* Google style reviews */}
              <div className="hero-card reviews-card">
                <p className="reviews-badge">★★★★★ Google-style feedback</p>
                <div className="review">
                  <p className="review-text">
                    &ldquo;Full luxury bathroom tiling done last week –
                    absolutely phenomenal. Clean, fast and professional
                    workmanship. We feel like we&apos;re in a hotel.&rdquo;
                  </p>
                  <p className="review-name">— Aoife, Meath</p>
                </div>
                <div className="review">
                  <p className="review-text">
                    &ldquo;We had a roof leak in heavy rain, they arrived close
                    to midnight to make the house safe. Snow, rain and storm
                    didn&apos;t stop them.&rdquo;
                  </p>
                  <p className="review-name">— Patrick, Dublin</p>
                </div>
                <p className="review-footer">
                  Follow us on Facebook: <strong>Krinedal-R</strong> for latest
                  updates & weather radar posts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="section section-alt">
        <div className="container">
          <h2>What We Do</h2>
          <p className="section-intro">
            A full home-care service covering roofs, bathrooms, interiors and
            gardens – with special attention to landlords and storm emergencies.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Full Roof Renewals & Repairs</h3>
              <p>
                Complete roof replacements, leak tracing, slate & tile
                replacement, ridge repairs, chimney sealing and gutter
                maintenance.
              </p>
            </div>
            <div className="card">
              <h3>Luxury Bathroom & Kitchen Tiling</h3>
              <p>
                Marble, porcelain and feature-wall tiling with perfectly aligned
                joints, mitred edges and premium finishes that feel like a
                hotel.
              </p>
            </div>
            <div className="card">
              <h3>Interior & Exterior Painting</h3>
              <p>
                Brighten your rooms and facades with crisp cutting-in, durable
                paints and minimal disruption to tenants and families.
              </p>
            </div>
            <div className="card">
              <h3>Landlord Fresh-Up & Turnaround</h3>
              <p>
                End-of-tenancy repairs, patching, repaint, silicone renewal and
                deep clean to prepare properties for new tenants or sale.
              </p>
            </div>
            <div className="card">
              <h3>Exterior Care & Power Washing</h3>
              <p>
                Driveways, patios, walls and paths cleaned, plus garden clean-up
                so the whole property feels cared for.
              </p>
            </div>
            <div className="card">
              <h3>24/7 Storm & Emergency Support</h3>
              <p>
                Emergency make-safe, tarping, temporary repairs and safety
                checks to protect your home during storms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATORS */}
      <section id="quote" className="section">
        <div className="container">
          <h2>Quick Estimators</h2>
          <p className="section-intro">
            Use these simple calculators to get a rough idea. Exact pricing will
            be confirmed after a site visit or photos.
          </p>

          <div className="grid calc-grid">
            <div className="card">
              <h3>Roofing Estimate</h3>
              <p className="card-help">
                Enter approximate roof area in m² and choose finish level.
              </p>
              <div className="form-field">
                <label>Roof area (m²)</label>
                <input
                  type="number"
                  min="0"
                  value={roofArea}
                  onChange={(e) => setRoofArea(e.target.value)}
                  placeholder="e.g. 80"
                />
              </div>
              <div className="form-field">
                <label>Roof type</label>
                <select
                  value={roofRate}
                  onChange={(e) => setRoofRate(e.target.value)}
                >
                  <option value="basic">Standard finish (approx €85/m²)</option>
                  <option value="premium">
                    Premium tiles / complex roof (approx €115/m²)
                  </option>
                </select>
              </div>
              {roofEstimate && (
                <p className="estimate">
                  Rough estimate:{" "}
                  <strong>€{roofEstimate.toLocaleString("en-IE")}</strong>
                </p>
              )}
              <p className="estimate-note">
                Final price depends on access, height and condition. Landlords
                – contact us directly for tailored property rates.
              </p>
            </div>

            <div className="card">
              <h3>Luxury Tiling Estimate</h3>
              <p className="card-help">
                Perfect for bathrooms, ensuites and kitchen floors.
              </p>
              <div className="form-field">
                <label>Tiled area (m²)</label>
                <input
                  type="number"
                  min="0"
                  value={tileArea}
                  onChange={(e) => setTileArea(e.target.value)}
                  placeholder="e.g. 25"
                />
              </div>
              <div className="form-field">
                <label>Tile type</label>
                <select
                  value={tileType}
                  onChange={(e) => setTileType(e.target.value)}
                >
                  <option value="standard">Standard porcelain (€35/m²)</option>
                  <option value="luxury">
                    Luxury marble / large format (€55/m²)
                  </option>
                  <option value="feature">
                    Feature walls / complex patterns (€70/m²)
                  </option>
                </select>
              </div>
              {tileEstimate && (
                <p className="estimate">
                  Rough estimate:{" "}
                  <strong>€{tileEstimate.toLocaleString("en-IE")}</strong>
                </p>
              )}
              <p className="estimate-note">
                Adhesives, trims and prep may be additional. We can itemise
                everything clearly before work starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORD / TRUST SECTION */}
      <section className="section section-alt">
        <div className="container landlords">
          <div>
            <h2>For Homeowners & Landlords</h2>
            <p className="section-intro">
              Whether it&apos;s your family home or a rental property, Krinedal-R
              treats every address like our own. Professional, respectful and
              clear communication from first call to final photo.
            </p>

            <ul className="trust-list">
              <li>15+ years experience in operations & property management</li>
              <li>Landlord-friendly reporting & fast invoicing</li>
              <li>Before & after photos for every job</li>
              <li>Priority response for repeat customers</li>
            </ul>

            <p className="landlord-note">
              Standard pricing applies to all customers. Landlord packages and
              multi-property discounts are available –{" "}
              <strong>please contact us privately</strong> for tailored rates.
            </p>
          </div>

          <div className="card mini-card">
            <h3>Call-Out & Emergency Fees</h3>
            <ul className="prices-list">
              <li>
                Standard call-out (daytime): <strong>from €50</strong>
              </li>
              <li>
                24/7 emergency call-out (customers): <strong>€150</strong>
              </li>
              <li>
                Temporary storm make-safe (high risk):{" "}
                <strong>from €350</strong>
              </li>
            </ul>
            <p className="card-help">
              We always explain options and costs before starting work, so there
              are no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>Ready to talk about your roof or tiling?</h2>
            <p className="section-intro">
              Send us a message with a few photos, or call directly for urgent
              issues. We&apos;ll get back as fast as possible with advice,
              options and transparent pricing.
            </p>

            <div className="contact-details">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:0831762475">083 176 2475</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:krinedalr@gmail.com">
                  krinedalr@gmail.com
                </a>
              </p>
              <p>
                <strong>Service area:</strong> Based in Meath, covering all of
                Ireland.
              </p>
            </div>

            <p className="contact-follow">
              Follow us on Facebook – <strong>Krinedal-R</strong> – for new
              projects, weather radar alerts and offers.
            </p>
          </div>

          <form
            className="card contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you! This form doesn’t send yet – please email krinedalr@gmail.com with your details."
              );
            }}
          >
            <h3>Send a quick message</h3>
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label>Phone or Email</label>
              <input type="text" placeholder="Best way to contact you" required />
            </div>
            <div className="form-field">
              <label>What do you need?</label>
              <textarea
                rows={4}
                placeholder="Roof replacement, luxury bathroom tiling, storm damage, fresh-up..."
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send enquiry
            </button>
            <p className="form-small">
              For emergencies, please call{" "}
              <strong>083 176 2475</strong> instead of using this form.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Krinedal-R – Premium Property Care
            Ireland.
          </p>
          <p>
            Built for families & landlords who want{" "}
            <strong>work done right the first time.</strong>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/353831762475"
        className="whatsapp-float"
        target="_blank"
      >
        💬
      </a>
    </main>
  );
}
