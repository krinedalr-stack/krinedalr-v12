// app/page.jsx

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="container hero-inner">
          <div>
            <p className="hero-tag">24/7 STORM DAMAGE • ROOFING • TILING • PAINTING</p>
            <h1>
              Premium property care with <span className="hero-accent">Krinedal-R</span>
            </h1>
            <p className="hero-lead">
              Roofing, tiling, interior & exterior painting and full property fresh-ups –
              done properly, photographed before/after, and priced fairly for landlords
              and homeowners.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:0831762475">
                Call 24/7: 083 176 2475
              </a>
              {/* change this email to your real one */}
              <a className="btn btn-outline" href="mailto:info@krinedalr.ie">
                Email a photo for a quote
              </a>
            </div>

            <ul className="hero-bullets">
              <li>Same-day storm make-safe where possible</li>
              <li>Respectful in-home work & full clean-down</li>
              <li>Landlord-friendly reporting and invoices</li>
            </ul>
          </div>

          <aside className="hero-card">
            <h2>24/7 Emergency Storm Call-Out</h2>
            <p className="hero-card-text">
              Roof leaks, loose tiles, damaged gutters or dangerous debris? We secure
              the property first – then plan permanent repairs.
            </p>
            <ul className="hero-card-list">
              <li>Priority line: 083 176 2475</li>
              <li>Standard call-out from €150 (public)</li>
              <li>High-risk storm make-safe from €350</li>
              <li>Landlord partner rates available on request</li>
            </ul>
            <p className="hero-card-note">
              *Exact price depends on access, height and risk – agreed before work begins.
            </p>
          </aside>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="section section-alt">
        <div className="container">
          <h2>What Krinedal-R Can Do For Your Property</h2>
          <p className="section-intro">
            One reliable contact for roofing, tiling, painting and full property fresh-ups.
            Ideal for busy landlords, letting agents and homeowners who want things done
            once – and done right.
          </p>

          <div className="grid services-grid">
            <div className="card">
              <h3>Roofing & Storm Repair</h3>
              <p>
                Leak tracing, tile replacement, emergency tarping, chimney and flashing
                repairs. We secure the property and provide photo evidence for insurance
                or your records.
              </p>
            </div>

            <div className="card">
              <h3>Interior & Exterior Painting</h3>
              <p>
                Clean, sharp paintwork using durable finishes – from single rooms to full
                houses, fascias, soffits and front doors for strong kerb appeal.
              </p>
            </div>

            <div className="card">
              <h3>Premium Tiling & Bathrooms</h3>
              <p>
                Floor and wall tiling, wet rooms, splashbacks and feature walls in modern,
                classic or wood-effect tiles – laser-straight lines and neat silicone work.
              </p>
            </div>

            <div className="card">
              <h3>End-of-Tenancy Fresh-Ups</h3>
              <p>
                Patch repairs, repainting, minor fixes and a full visual refresh between
                tenants so you can re-let faster and at the best possible rent.
              </p>
            </div>

            <div className="card">
              <h3>Pre-Sale Presentation</h3>
              <p>
                Small improvements that make a big difference: repairs, paint, tiling
                touch-ups, power washing paths and drives to help your listing stand out.
              </p>
            </div>

            <div className="card">
              <h3>Landscaping & Exterior Clean-Up</h3>
              <p>
                Lawn tidy-ups, hedge trimming, basic landscaping and power washing to keep
                rental and family homes looking cared for all year round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LANDLORD SECTION */}
      <section id="landlords" className="section">
        <div className="container landlords">
          <div>
            <h2>Landlord Priority Programme</h2>
            <p className="section-intro">
              15+ years in operations management means I understand exactly what landlords
              need: fast response, clear updates, tidy work and no surprises on the invoice.
            </p>

            <ul className="feature-list">
              <li>Dedicated 24/7 line for urgent issues</li>
              <li>Before & after photos with every job</li>
              <li>Written breakdown for your records or your agent</li>
              <li>Respect for tenants & their schedule</li>
              <li>Reliable trades you can call first every time</li>
            </ul>
          </div>

          <aside className="card landlord-card">
            <h3>Landlord-Friendly Pricing</h3>
            <p>
              We keep a special rate card for landlords and letting agents who use us
              regularly – fair pricing that still allows us to maintain premium standards.
            </p>
            <ul className="hero-card-list">
              <li>Bundled pricing for multi-property portfolios</li>
              <li>No hidden extras – everything agreed upfront</li>
              <li>Invoices prepared so they’re easy to forward to your accountant</li>
            </ul>
            <p className="hero-card-note">
              Exact landlord rates are discussed in person or by phone – get in touch to
              be added to the programme.
            </p>
            <a className="btn btn-primary landlord-btn" href="tel:0831762475">
              Talk about landlord rates
            </a>
          </aside>
        </div>
      </section>

      {/* EMERGENCY SECTION */}
      <section id="emergency" className="section emergency">
        <div className="container">
          <h2>24/7 Storm & Emergency Repair</h2>
          <p className="section-intro">
            When the weather turns bad, you want one number to call. Krinedal-R is ready
            day or night to secure your home or rental and limit further damage.
          </p>

          <div className="grid emergency-grid">
            <div className="card mini">
              <h3>What We Handle</h3>
              <ul className="feature-list">
                <li>Dislodged tiles & slates</li>
                <li>Leaking roofs & ceilings</li>
                <li>Fallen gutters & soffits</li>
                <li>Dangerous debris around your property</li>
              </ul>
            </div>

            <div className="card mini">
              <h3>How It Works</h3>
              <ol className="steps">
                <li>Call 083 176 2475 – we discuss risk & access.</li>
                <li>We attend, make the area safe and stop further damage.</li>
                <li>We document the damage with photos & notes.</li>
                <li>You receive a clear plan and quote for permanent repair.</li>
              </ol>
            </div>

            <div className="card mini">
              <h3>Transparent Pricing</h3>
              <p>
                Public call-outs from <strong>€150</strong> including initial assessment
                and first work on site. High-risk make-safe from <strong>€350</strong>.
              </p>
              <p className="hero-card-note">
                Landlord partner rates are lower and shared directly – ask to be added to
                the partner list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section section-alt">
        <div className="container">
          <h2>Simple, Professional Process</h2>
          <p className="section-intro">
            Clear communication at every step – so you always know what’s happening with
            your property.
          </p>

          <div className="grid process-grid">
            <div className="card mini">
              <span className="step-number">1</span>
              <h3>Call or send photos</h3>
              <p>
                Reach out by phone or email with a quick description or a few photos of
                the problem.
              </p>
            </div>
            <div className="card mini">
              <span className="step-number">2</span>
              <h3>Site visit & quote</h3>
              <p>
                We inspect, explain options in plain language and agree the scope and
                price before starting.
              </p>
            </div>
            <div className="card mini">
              <span className="step-number">3</span>
              <h3>Work carried out</h3>
              <p>
                Professional, tidy workmanship with minimal disruption to you or your
                tenants.
              </p>
            </div>
            <div className="card mini">
              <span className="step-number">4</span>
              <h3>Aftercare & photos</h3>
              <p>
                You receive clear before/after photos and advice on any future maintenance
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS / TRUST STRIP */}
      <section id="reviews" className="section reviews">
        <div className="container">
          <div className="trust-strip">
            <div>
              <p className="trust-label">Trusted local service</p>
              <p className="trust-bold">4.9 / 5.0 ★★★★★ (Google style rating)</p>
              <p className="trust-note">
                Ask for our live Google and Facebook reviews – new customers often come
                from word of mouth and landlord referrals.
              </p>
            </div>
            <div className="trust-badges">
              <span className="badge">Fully insured</span>
              <span className="badge">Emergency expert</span>
              <span className="badge">15+ years operations experience</span>
            </div>
          </div>

          <div className="grid review-grid">
            <article className="card mini review-card">
              <p className="review-stars">★★★★★</p>
              <p>
                “Fast, tidy and professional – roof leak fixed same evening and photos
                sent straight after.”
              </p>
              <p className="review-name">— Homeowner, Meath</p>
            </article>

            <article className="card mini review-card">
              <p className="review-stars">★★★★★</p>
              <p>
                “Great with tenants and very clear on pricing. I now use Krinedal-R as my
                first call for rental repairs.”
              </p>
              <p className="review-name">— Local Landlord</p>
            </article>

            <article className="card mini review-card">
              <p className="review-stars">★★★★★</p>
              <p>
                “Property looked brand new after the fresh-up – made re-letting extremely
                easy.”
              </p>
              <p className="review-name">— Letting Agent Partner</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT / FINAL CTA */}
      <section id="contact" className="section contact">
        <div className="container contact-inner">
          <div>
            <h2>Need help or a same-day quote?</h2>
            <p className="section-intro">
              Whether it’s an emergency leak or planning a full fresh-up, one call gets
              everything moving. Send photos by email or WhatsApp for a quicker estimate.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:0831762475">
                Call 24/7: 083 176 2475
              </a>
              <a className="btn btn-outline" href="mailto:info@krinedalr.ie">
                Email your photos
              </a>
            </div>
          </div>
          <div className="card mini contact-card">
            <h3>Service Area</h3>
            <p>Based in Meath – covering surrounding counties and Dublin.</p>
            <h3 style={{ marginTop: '12px' }}>Working Hours</h3>
            <p>Standard works: Mon–Sat · 8am–6pm</p>
            <p>Emergency call-outs: 24/7</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Krinedal-R. All rights reserved. Website content
            for information only – all quotes confirmed in writing.
          </p>
          <p>
            Built for landlords & homeowners who want honest, premium-quality property
            care.
          </p>
        </div>
      </footer>
    </main>
  );
}
