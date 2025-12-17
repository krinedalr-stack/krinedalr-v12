"use client";

import { useEffect, useMemo, useState } from "react";

export default function HomePage() {
  // ===== Single source of truth: Services shown in hero bullets =====
  const SERVICES = [
    "Emergency storm make-safe within hours*",
    "Full roof change & leak tracing",
    "Luxury bathroom & kitchen tiling",
    "Flooring installation (laminate, vinyl & engineered wood)",
    "Garage flooring systems (rubber / PVC tiles / resin-coated floors)",
    "Marble-look & decorative floor coatings",
    "Outdoor concrete stairs & entrance upgrades (integrated lighting)",
    "Landlord-ready refresh between tenants",
  ];

  // ===== Calculators =====
  const [roofArea, setRoofArea] = useState("");
  const [roofRate] = useState(45); // locked

  const [tileArea, setTileArea] = useState("");
  const [tileRate] = useState(48); // locked

  const [floorArea, setFloorArea] = useState("");
  const [floorRate] = useState(26); // locked

  const roofTotal =
    roofArea && roofRate ? (Number(roofArea) * Number(roofRate)).toFixed(0) : "";
  const tileTotal =
    tileArea && tileRate ? (Number(tileArea) * Number(tileRate)).toFixed(0) : "";
  const floorTotal =
    floorArea && floorRate
      ? (Number(floorArea) * Number(floorRate)).toFixed(0)
      : "";

  // ===== REAL weather status =====
  const [weatherStatus, setWeatherStatus] = useState("green"); // green/yellow/orange/red
  const [weatherWarnings, setWeatherWarnings] = useState([]);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [weatherError, setWeatherError] = useState("");
  const [fetchedAt, setFetchedAt] = useState("");

  const weatherUI = useMemo(() => {
    const map = {
      green: {
        label: "GREEN – normal conditions",
        textClass: "green-text",
        chipClass: "weather-chip weather-chip-green",
      },
      yellow: {
        label: "YELLOW – be aware",
        textClass: "yellow-text",
        chipClass: "weather-chip weather-chip-yellow",
      },
      orange: {
        label: "ORANGE – take action",
        textClass: "orange-text",
        chipClass: "weather-chip weather-chip-orange",
      },
      red: {
        label: "RED – danger to life",
        textClass: "red-text",
        chipClass: "weather-chip weather-chip-red",
      },
    };
    return map[weatherStatus] || map.green;
  }, [weatherStatus]);

  async function loadWeather() {
    try {
      setWeatherError("");
      const res = await fetch("/api/weather-status", { cache: "no-store" });
      const json = await res.json();

      if (!json?.ok) setWeatherError(json?.error || "Weather unavailable");

      setWeatherStatus(json?.status || "green");
      setWeatherWarnings(Array.isArray(json?.warnings) ? json.warnings : []);
      setFetchedAt(json?.fetchedAt || "");
      setWeatherLoaded(true);
    } catch (e) {
      setWeatherError("Weather unavailable");
      setWeatherLoaded(true);
    }
  }

  useEffect(() => {
    loadWeather();
    const id = setInterval(loadWeather, 5 * 60 * 1000); // every 5 minutes
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      {/* FIXED TOP BAR */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <div className="topbar-brand">
              KRINEDAL-<span className="hero-r">R</span>
            </div>
            <small className="topbar-sub">
              🇮🇪 Premium Property Care Across Ireland ☘️ — Built on standards • Run by systems • Powered by people
            </small>
          </div>

          <div className="topbar-actions">
            <a href="#people-culture" className="btn btn-outline">
              Our People
            </a>

            <a href="tel:0831762475" className="btn btn-primary">
              Call
            </a>

            <a
              href="https://wa.me/353831762475"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              WhatsApp
            </a>

            <a href="#estimate" className="btn btn-outline">
              Get Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <span className="shamrock shamrock-left">☘️</span>
        <span className="shamrock shamrock-right">☘️</span>

        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              KRINEDAL-<span className="hero-r">R</span>
            </h1>

            <p className="hero-tag">
              🇮🇪 PREMIUM PROPERTY CARE ACROSS IRELAND <span>☘️</span>
            </p>

            <p className="hero-subline">
              Built on standards • Run by systems • Powered by people
            </p>

            <p className="hero-lead">
              24/7 storm damage call-out, full roof renewals and{" "}
              <span className="hero-strong">luxury tiling</span> for homes and
              rental properties. Snow, rain or storm won&apos;t stop us.
            </p>

            <p className="hero-weather-label">Current Ireland weather status:</p>
            <div className="hero-weather-row">
              <span className={weatherUI.chipClass}>
                {weatherLoaded ? weatherUI.label : "Loading weather…"}
              </span>
              <span className="hero-weather-shamrock">☘️</span>
            </div>

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

              <a
                href="https://www.instagram.com/krinedalr/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Instagram
              </a>
            </div>

            <ul className="hero-bullets">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <p className="hero-note">
              *Response time depends on location &amp; weather conditions.
            </p>
          </div>

          <aside className="hero-side-card">
            <h2>Fast, respectful property care</h2>
            <p>
              From emergency leaks at midnight to full bathroom tiling that looks
              like a hotel – we keep your home safe, dry and beautifully finished.
            </p>
            <div className="hero-side-list">
              <p>✓ 24/7 emergency line</p>
              <p>✓ Photos before &amp; after each job</p>
              <p>✓ Clear pricing and written scope</p>
            </div>
          </aside>
        </div>
      </section>

      {/* 24/7 STORM + WEATHER STATUS */}
      <section className="section section-alt">
        <div className="container grid-2">
          <div className="card">
            <h2>24/7 Storm Call-Out</h2>
            <p className="muted">
              Red warning, heavy rain or leaking roof – we respond fast, day or
              night.
            </p>

            <a href="tel:0831762475" className="btn btn-storm">
              🚨 24/7 STORM EMERGENCY LINE
            </a>

            <p className="muted small">
              Elderly emergency call-outs: <strong>50% discount</strong> on the
              call-out fee.
            </p>
          </div>

          <div className="card">
            <h2>Ireland Weather Status</h2>

            <p className="muted small" style={{ marginTop: 8 }}>
              Current:{" "}
              <strong className={weatherUI.textClass}>
                {weatherStatus.toUpperCase()} warning
              </strong>
            </p>

            {weatherError ? (
              <p className="muted smallest" style={{ marginTop: 8 }}>
                ⚠️ {weatherError}
              </p>
            ) : (
              <p className="muted smallest" style={{ marginTop: 8 }}>
                Auto-updated from Met Éireann open data
                {fetchedAt && (
                  <span>
                    {" "}
                    • Last check: {new Date(fetchedAt).toLocaleString()}
                  </span>
                )}
              </p>
            )}

            {weatherWarnings.length > 0 && (
              <div style={{ marginTop: 12 }}>
                <p
                  className="muted small"
                  style={{ fontWeight: 700, marginBottom: 6 }}
                >
                  Latest warnings:
                </p>
                <ul className="list" style={{ marginTop: 0 }}>
                  {weatherWarnings.slice(0, 3).map((w) => (
                    <li key={w.id || w.headline}>
                      <strong style={{ textTransform: "uppercase" }}>
                        {w.level}
                      </strong>
                      {w.headline ? ` – ${w.headline}` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="muted small" style={{ marginTop: 12 }}>
              Follow{" "}
              <a
                href="https://m.facebook.com/profile.php?id=61581354904730&name=xhp_nt__fb__action__open_user"
                target="_blank"
                rel="noreferrer"
                className="brand-inline"
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
          </article>
        </div>
      </section>

      {/* ROOF + TILING + FLOORING CALCULATORS */}
      <section className="section section-alt">
        <div className="container grid-3">
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

            <p className="muted small" style={{ marginTop: 8 }}>
              Rate per m²: <strong>€{roofRate}</strong>
            </p>

            <p className="calc-result">
              Rough roofing total:{" "}
              {roofTotal ? <strong>€{roofTotal}</strong> : "— enter size above"}
            </p>

            <p className="muted smallest">
              Typical full roof renewal for a standard Irish home usually falls
              between <strong>€5,800–€10,000</strong> depending on size,
              materials and access.
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

            <p className="muted small" style={{ marginTop: 8 }}>
              Rate per m²: <strong>€{tileRate}</strong>
            </p>

            <p className="calc-result">
              Rough tiling total:{" "}
              {tileTotal ? <strong>€{tileTotal}</strong> : "— enter size above"}
            </p>

            <p className="muted smallest">
              Premium luxury tiling typically ranges between{" "}
              <strong>€42–€58 per m²</strong>; this calculator uses{" "}
              <strong>€48 per m²</strong> as a guide.
            </p>
          </div>

          {/* Flooring */}
          <div className="card">
            <h2>Flooring cost idea</h2>
            <p className="muted small">
              Rough guide for laminate, vinyl and engineered wood flooring.
              Final prices always confirmed after inspection.
            </p>

            <label className="field-label">
              Floor area (m²)
              <input
                type="number"
                value={floorArea}
                onChange={(e) => setFloorArea(e.target.value)}
                className="field-input"
                min="0"
              />
            </label>

            <p className="muted small" style={{ marginTop: 8 }}>
              Rate per m²: <strong>€{floorRate}</strong>
            </p>

            <p className="calc-result">
              Rough flooring total:{" "}
              {floorTotal ? <strong>€{floorTotal}</strong> : "— enter size above"}
            </p>

            <p className="muted smallest">
              Flooring labour often ranges between <strong>€18–€45 per m²</strong>{" "}
              depending on prep and material. This calculator uses{" "}
              <strong>€26 per m²</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* PEOPLE & CULTURE (FULL POLICY) */}
      <section id="people-culture" className="section section-alt">
        <div className="container">
          <div className="card">
            <h2>KRINEDAL-R — Our People &amp; Culture Policy</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              At KRINEDAL-R, we believe great work starts with how people are treated.
            </p>
            <p className="muted">
              <strong>People who live better, work better.</strong>
            </p>
            <p className="muted" style={{ marginTop: 10 }}>
              We don’t lead through fear, pressure, or empty titles.
              We lead through structure, respect, clarity, and accountability.
              <strong> This culture is locked in. It does not change.</strong>
            </p>

            <hr style={{ margin: "24px 0" }} />

            <h3>1. Our Leadership Philosophy</h3>
            <p className="muted">
              Leadership at KRINEDAL-R is not about authority. It is about service.
              Our role as leaders is to remove obstacles, provide clear systems,
              support growth, protect dignity, and set standards — then live by them.
              We lead from the front, stay calm under pressure, and never forget:
              results come from people, not shouting.
            </p>

            <h3 style={{ marginTop: 16 }}>2. Respect Is Non-Negotiable</h3>
            <p className="muted">
              Every person working with KRINEDAL-R is treated with respect, fairness,
              honesty and human dignity. There is zero tolerance for bullying,
              intimidation, disrespect, discrimination, or abuse of authority.
              Skill can be taught. Character is required.
            </p>

            <h3 style={{ marginTop: 16 }}>3. Clear Pay, Clear Hours, Clear Rules</h3>
            <p className="muted">
              We do not play games with people’s livelihoods.
              Clear hourly rates or agreed contract terms. Transparent working hours.
              No hidden expectations. No unpaid labour. No pressure to “stay quiet”.
              People should always know what they are paid, what is expected, and what comes next.
              Uncertainty destroys trust — we remove uncertainty.
            </p>

            <h3 style={{ marginTop: 16 }}>4. Training, Development &amp; Growth</h3>
            <p className="muted">
              We invest in people — professional training, safety certifications,
              skills development, equipment competency, and career progression.
              Mistakes are handled through training and improvement, not blame or humiliation.
              If someone wants to grow, we help them grow.
            </p>

            <h3 style={{ marginTop: 16 }}>5. Safety Before Speed</h3>
            <p className="muted">
              No job is worth an injury. We work with risk assessments, method statements,
              proper equipment and planning — and every worker has the right to stop unsafe work
              without fear. Safety is leadership in action.
            </p>

            <h3 style={{ marginTop: 16 }}>6. Accountability Goes Both Ways</h3>
            <p className="muted">
              We hold people accountable fairly — quality, reliability, respect, and procedures.
              But leadership is accountable too: planning, communication, support, and decisions.
              Accountability is shared, not one-sided.
            </p>

            <h3 style={{ marginTop: 16 }}>7. No Ego Culture</h3>
            <p className="muted">
              Titles do not impress us. Work ethic, attitude, and consistency do.
              No power games. No “I’m the boss” mentality.
              We value calm confidence, quiet excellence, and team success.
            </p>

            <h3 style={{ marginTop: 16 }}>8. Long-Term Thinking</h3>
            <p className="muted">
              KRINEDAL-R is built for the long run.
              We aim to create stable jobs, better living standards,
              pride in workmanship, and a workplace people recommend — not escape from.
              We don’t burn people out. We build people up.
            </p>

            <h3 style={{ marginTop: 16 }}>9. Our Promise</h3>
            <p className="muted">
              If you work with KRINEDAL-R, you can expect fair treatment,
              clear systems, honest communication, respect for your time and effort,
              and a workplace where standards matter and people matter more.
              This is not marketing — this is how we operate.
            </p>

            <p style={{ marginTop: 22, fontWeight: 900 }}>
              Built on standards. Run by systems. Powered by people.
            </p>
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section id="estimate" className="section section-form">
        <div className="container">
          <div className="form-card">
            <h2>Request a Free Estimate</h2>
            <p className="form-sub">
              Tell us a bit about your roof, tiling or property project and
              we&apos;ll come back with options and a rough budget.
            </p>

            <form
              action="mailto:krinedalr@gmail.com?cc=krinedalr@outlook.com"
              method="POST"
              encType="text/plain"
            >
              <div className="form-grid two-col">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="Name" type="text" placeholder="Full name" required />
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" name="Phone" type="tel" placeholder="+353" required />
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="Email" type="email" placeholder="you@email.com" required />
                </div>
              </div>

              <div className="form-grid two-col">
                <div className="field">
                  <label htmlFor="eircode">Eircode</label>
                  <input
                    id="eircode"
                    name="Eircode"
                    type="text"
                    placeholder="e.g. C15 XXXX"
                    required
                    autoComplete="postal-code"
                  />
                </div>

                <div className="field">
                  <label htmlFor="town">Town / County</label>
                  <input
                    id="town"
                    name="Town/County"
                    type="text"
                    placeholder="e.g. Navan, Co. Meath"
                    required
                    autoComplete="address-level2"
                  />
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="service">Type of work</label>
                  <select id="service" name="Service">
                    <option>Storm / leak emergency</option>
                    <option>Full roof renewal</option>
                    <option>Roof repair</option>
                    <option>Luxury bathroom tiling</option>
                    <option>Kitchen tiling</option>
                    <option>Flooring installation (laminate / vinyl / engineered wood)</option>
                    <option>Garage flooring systems (rubber / tiles / resin-coated)</option>
                    <option>Marble-look &amp; decorative floor coatings</option>
                    <option>Outdoor concrete stairs</option>
                    <option>Front entrance upgrade</option>
                    <option>Exterior lighting installation</option>
                    <option>Painting &amp; fresh-up</option>
                    <option>Landlord end-of-tenancy</option>
                    <option>Other (describe below)</option>
                  </select>
                </div>
              </div>

              <div className="form-grid two-col">
                <div className="field">
                  <label htmlFor="date">Preferred date</label>
                  <input id="date" name="Preferred date" type="date" required />
                </div>

                <div className="field">
                  <label htmlFor="time">Preferred time</label>
                  <input id="time" name="Preferred time" type="time" required />
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="files">Upload photos / files (optional)</label>
                  <input
                    id="files"
                    name="files"
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx,.heic"
                  />
                  <p className="muted smallest" style={{ marginTop: 6 }}>
                    Tip: Photos can also be sent by WhatsApp after submitting this form.
                  </p>
                </div>
              </div>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="details">Tell us a bit about the job</label>
                  <textarea
                    id="details"
                    name="Details"
                    placeholder="Size of area, issues, photos available, access, etc."
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-storm">
                  Send estimate request
                </button>
              </div>
            </form>

            <p className="muted smallest" style={{ marginTop: 12 }}>
              Thank you for contacting us. Our team will review your request and
              get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="section section-dark">
        <div className="container">
          <div className="card card-dark">
            <h2>Booking &amp; Payment</h2>
            <ul className="list">
              <li>Clear written scope agreed before starting</li>
              <li>Digital invoice &amp; payment by bank transfer</li>
              <li>Photos provided for your records on request</li>
            </ul>

            <p className="muted small" style={{ marginTop: 12 }}>
              <strong>Materials &amp; Payment:</strong> For most projects, the customer pays
              for all necessary materials up front (tiles, flooring, timber, concrete,
              lighting, membranes, fixings, skips, etc.). Labour is paid after the job
              is completed and the work is signed off. For larger jobs, staged payments
              may apply and will be agreed in writing before we start.
            </p>

            <p className="muted small" style={{ marginTop: 10 }}>
              We also build bespoke outdoor concrete stairs, entrance upgrades and specialist
              flooring systems including garage and decorative finishes.
            </p>
          </div>

          <footer className="footer">
            <div className="footer-brand">
              <span className="footer-name">
                KRINEDAL-<span className="hero-r">R</span>
              </span>
              <p className="muted footer-line">
                Premium property care, storm or sunshine – Ireland-wide.
              </p>
              <p className="muted small footer-dna">
                Built on standards • Run by systems • Powered by people
              </p>
            </div>

            <div className="footer-contact">
              <p>Phone: <strong>083 176 2475</strong></p>

              <p>
                Email:{" "}
                <a href="mailto:krinedalr@outlook.com">krinedalr@outlook.com</a> /{" "}
                <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
              </p>

              <p>
                Web:{" "}
                <a href="https://www.krinedalr.ie" target="_blank" rel="noreferrer">
                  www.krinedalr.ie
                </a>
              </p>

              <p>
                Facebook:{" "}
                <a
                  href="https://m.facebook.com/profile.php?id=61581354904730&name=xhp_nt__fb__action__open_user"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit our page
                </a>{" "}
                • Instagram:{" "}
                <a href="https://www.instagram.com/krinedalr/" target="_blank" rel="noreferrer">
                  @krinedalr
                </a>
              </p>

              <div className="footer-buttons">
                <a href="tel:0831762475" className="btn footer-call">Call</a>
                <a
                  href="https://wa.me/353831762475"
                  target="_blank"
                  rel="noreferrer"
                  className="btn footer-whatsapp"
                >
                  WhatsApp
                </a>
                <a href="#people-culture" className="btn footer-call">
                  People &amp; Culture
                </a>
              </div>
            </div>
          </footer>
        </div>

        {/* FLOATING BUTTONS */}
        <div className="float-stack">
          <a
            href="https://wa.me/353831762475"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-wa"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            💬
          </a>

          <a
            href="https://m.me/61581354904730"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-msgr"
            aria-label="Messenger"
            title="Messenger"
          >
            📘
          </a>

          <a
            href="https://www.instagram.com/krinedalr/"
            target="_blank"
            rel="noreferrer"
            className="float-btn float-ig"
            aria-label="Instagram"
            title="Instagram"
          >
            📸
          </a>

          <a
            href="mailto:krinedalr@outlook.com"
            className="float-btn float-mail"
            aria-label="Email"
            title="Email"
          >
            ✉️
          </a>
        </div>
      </section>
    </main>
  );
}
