// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* Top info bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-pill">Ireland-wide property care</span>
            <span className="top-text">
              Snow • rain • storm –{' '}
              <strong>we keep your home protected 24/7</strong>
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+353831762475" className="top-link">
              Call: 083 176 2475
            </a>
            <a href="mailto:krinedalr@gmail.com" className="top-link">
              Email: krinedalr@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="hero-light hero-light-left" />
        <div className="hero-light hero-light-right" />
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="logo-line">
              <div className="logo-text">
                KRINEDAL<span className="logo-r">-R</span>
              </div>
              <div className="logo-sub">
                Property Care • Luxury Tiling • Roofing • 24/7 Storm Repair
              </div>
            </div>

            <p className="hero-tag">Feel at home with Krinedal-R</p>
            <h1>
              Warm, safe and<span className="hero-accent"> finished to luxury standards.</span>
            </h1>
            <p className="hero-lead">
              We look after your home like it&apos;s our own – from luxury
              bathroom tiling and full roof replacements to 24/7 storm
              emergencies and landlord-ready property refreshes across Ireland.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get a free quote
              </a>
              <a href="tel:+353831762475" className="btn btn-accent">
                24/7 Storm Call-Out
              </a>
            </div>

            <ul className="hero-bullets">
              <li>Luxury bathroom & kitchen tiling – hotel-level finish.</li>
              <li>Full roof change, storm make-safe & leak repairs.</li>
              <li>Interior & exterior painting, landscaping, power wash.</li>
              <li>
                Landlord services – end-of-tenancy fresh ups & sale prep.
              </li>
            </ul>

            {/* Weather strip */}
            <div className="weather-strip">
              <span className="weather-label">Ireland Weather Alert</span>
              <div className="weather-badges">
                <span className="weather-badge weather-badge--green">
                  Green – All clear
                </span>
                <span className="weather-badge weather-badge--yellow">
                  Yellow – Heavy rain / wind
                </span>
                <span className="weather-badge weather-badge--orange">
                  Orange – Storm risk
                </span>
                <span className="weather-badge weather-badge--red">
                  Red – Emergency priority
                </span>
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <h2>24/7 Storm Call-Out • Ireland</h2>
            <p className="hero-card-text">
              Fast, safe emergency response when your home needs it most.
            </p>
            <ul className="hero-card-list">
              <li>Roof leaks, missing tiles, damaged gutters.</li>
              <li>Temporary roof make-safe & leak control.</li>
              <li>Safe access, photos for insurance & clear updates.</li>
            </ul>
            <p className="hero-card-note">
              Snow, rain or storm – we attend. Elderly clients receive extra
              priority and considerate support.
            </p>
            <div className="hero-card-cta">
              <a href="tel:+353831762475" className="btn btn-primary full-width">
                Call now – 083 176 2475
              </a>
              <span className="hero-card-small">
                Night & red-warning rates apply for high-risk call-outs.
              </span>
            </div>
          </aside>
        </div>
      </header>

      {/* SERVICES */}
      <section className="section section-alt" id="services">
        <div className="container">
          <h2>Home & Property Services</h2>
          <p className="section-intro">
            Every job is treated like it&apos;s our own home – clean, careful,
            warm finishes and clear communication from first call to final
            check.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Luxury Tiling & Bathrooms</h3>
              <p>
                Full bathroom and kitchen tiling with a luxury hotel feel. Clean
                lines, perfect leveling, premium grout and silicone finishing.
              </p>
              <ul className="mini-list">
                <li>Marble-style, porcelain & large-format tiles.</li>
                <li>Walk-in showers & wet rooms.</li>
                <li>Neat edges, clean cuts, minimal mess.</li>
              </ul>
            </div>

            <div className="card">
              <h3>Full Roof Replacement & Repairs</h3>
              <p>
                From small leaks to full new roofs – we rebuild with strong,
                weather-proof systems designed for Irish rain and storms.
              </p>
              <ul className="mini-list">
                <li>Full roof change & re-slating.</li>
                <li>Chimney flashing, valleys & felt.</li>
                <li>Gutters, fascia & soffit care.</li>
              </ul>
            </div>

            <div className="card">
              <h3>24/7 Storm Damage Make-Safe</h3>
              <p>
                Fast response during storms, heavy rain or red warnings. Safety
                first, then stabilise and protect your property.
              </p>
              <ul className="mini-list">
                <li>Temporary cover and make-safe.</li>
                <li>Photos and notes for insurance claims.</li>
                <li>Follow-up repair plan after storm passes.</li>
              </ul>
            </div>

            <div className="card">
              <h3>Interior & Exterior Painting</h3>
              <p>
                Warm, fresh painting that makes your property feel new again –
                inside and out.
              </p>
              <ul className="mini-list">
                <li>Walls, ceilings, doors & woodwork.</li>
                <li>Exterior facades & fence painting.</li>
                <li>Colour advice for cosy, welcoming homes.</li>
              </ul>
            </div>

            <div className="card">
              <h3>Landscaping & Power Washing</h3>
              <p>
                Clean, tidy outdoors to match your improved interior – ideal for
                landlords and home sales.
              </p>
              <ul className="mini-list">
                <li>Driveway & patio power wash.</li>
                <li>Garden tidy & hedge trimming.</li>
                <li>Moss & algae removal from hard surfaces.</li>
              </ul>
            </div>

            <div className="card">
              <h3>Landlord Turnovers & Sale Prep</h3>
              <p>
                End-of-tenancy refresh and full home make-ready for new tenants
                or sale – done fast and respectfully.
              </p>
              <ul className="mini-list">
                <li>Repairs, painting & tiling touch-ups.</li>
                <li>Deep clean, snag list & photo update.</li>
                <li>Simple, landlord-friendly communication.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORD SECTION */}
      <section className="section landlords-section">
        <div className="container landlords">
          <div>
            <h2>Landlords & Property Owners</h2>
            <p className="section-intro">
              Reliable, respectful and organised. With 15+ years experience as
              an operations manager, Kristaps understands what landlords need:
              clear updates, solved problems and happy tenants.
            </p>
            <div className="grid landlord-grid">
              <div className="card mini">
                <h3>End-of-Tenancy Fresh Ups</h3>
                <p>
                  Quick turnaround between tenants – repairs, paint touch-ups,
                  grout refresh and garden tidy for a move-in ready home.
                </p>
              </div>
              <div className="card mini">
                <h3>Emergency Response</h3>
                <p>
                  Priority response for leaks, storm damage and safety issues,
                  so your tenants feel looked after and your property is
                  protected.
                </p>
              </div>
              <div className="card mini">
                <h3>Sale-Ready Presentation</h3>
                <p>
                  Full interior & exterior refresh so your property photographs
                  well and feels instantly welcoming to buyers.
                </p>
              </div>
            </div>
            <p className="section-note">
              <strong>Landlord pricing:</strong> we tailor packages per
              property. Contact directly for a simple, clear quotation.
            </p>
          </div>

          <aside className="card landlord-highlight">
            <h3>Why Landlords Choose Krinedal-R</h3>
            <ul className="mini-list">
              <li>Respectful in occupied homes – tidy, careful and polite.</li>
              <li>Clear before / after photos and updates.</li>
              <li>One point of contact for multiple trades.</li>
              <li>Flexible timing around tenants where possible.</li>
            </ul>
            <a href="#contact" className="btn btn-primary full-width">
              Discuss a landlord partnership
            </a>
          </aside>
        </div>
      </section>

      {/* TESTIMONIALS / “GOOGLE REVIEWS” STYLE */}
      <section className="section section-alt">
        <div className="container">
          <h2>Words from Happy Customers</h2>
          <p className="section-intro">
            We&apos;re building Krinedal-R on trust, good work and genuine care.
            Here&apos;s what recent customers said:
          </p>

          <div className="google-strip">
            <div className="google-left">
              <div className="google-badge">★★★★★ 5.0</div>
              <p className="google-label">Customer-rated workmanship</p>
            </div>
            <div className="google-right">
              <span className="google-pill">Google-style verified feedback</span>
            </div>
          </div>

          <div className="grid review-grid">
            <article className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                “We had a full bathroom done in luxury tiling – the finish is
                phenomenal. Clean, fast and professional. They treated our home
                with real respect.”
              </p>
              <p className="review-name">— Homeowner, Bathroom Renovation</p>
            </article>

            <article className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                “During heavy rain our roof started leaking badly. Krinedal-R
                arrived just after midnight, made the roof safe and stopped the
                leak. Snow and rain didn&apos;t stop them.”
              </p>
              <p className="review-name">— Family in Meath, Emergency Roof Leak</p>
            </article>

            <article className="card review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                “Great for landlord work – one call, everything sorted. Tiling
                repairs, painting and garden tidy between tenants. Very easy to
                deal with.”
              </p>
              <p className="review-name">— Landlord, Dublin/Meath Area</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="section cta-section" id="contact">
        <div className="container cta-inner">
          <div className="cta-text">
            <h2>Your home, in safe hands – day and night.</h2>
            <p>
              Whether it&apos;s a new bathroom, a full roof replacement, a
              fresh coat of paint or an emergency storm call-out, Krinedal-R is
              here to help your home feel warm, safe and looked after.
            </p>
            <ul className="mini-list">
              <li>24/7 emergency storm support.</li>
              <li>Professional, respectful work – no shortcuts.</li>
              <li>Clear pricing and honest communication.</li>
            </ul>
          </div>
          <div className="cta-panel">
            <h3>Reach Krinedal-R</h3>
            <p className="cta-line">
              <strong>Phone:</strong>{' '}
              <a href="tel:+353831762475">083 176 2475</a>
            </p>
            <p className="cta-line">
              <strong>Email:</strong>{' '}
              <a href="mailto:krinedalr@gmail.com">krinedalr@gmail.com</a>
            </p>
            <p className="cta-line">
              <strong>Based in:</strong> Meath, working across Ireland
            </p>
            <a
              href="https://wa.me/353831762475"
              target="_blank"
              className="btn btn-primary full-width"
            >
              WhatsApp Krinedal-R
            </a>
            <p className="cta-small">
              Prefer a call? Phone is always best for emergencies – day or
              night.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <div className="logo-text footer-logo">
              KRINEDAL<span className="logo-r">-R</span>
            </div>
            <p className="footer-text">
              Property maintenance, luxury tiling, roofing and 24/7 storm
              support across Ireland.
            </p>
          </div>
          <div className="footer-right">
            <p className="footer-text">
              Phone:{' '}
              <a href="tel:+353831762475" className="footer-link">
                083 176 2475
              </a>{' '}
              · Email:{' '}
              <a href="mailto:krinedalr@gmail.com" className="footer-link">
                krinedalr@gmail.com
              </a>
            </p>
            <p className="footer-text">© {new Date().getFullYear()} Krinedal-R.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING EMERGENCY BUTTONS */}
      <div className="floating-buttons">
        <a href="tel:+353831762475" className="floating-btn floating-call">
          Call
        </a>
        <a
          href="https://wa.me/353831762475"
          target="_blank"
          className="floating-btn floating-whatsapp"
        >
          WhatsApp
        </a>
      </div>
    </main>
  );
}
